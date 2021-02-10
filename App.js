import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Text } from 'react-native';
import styles from './styles'
import Mensagem from './src/components/Mensagem'

/*ws://echo.websocket.org*/
export default function App() {
  const [data, setData] = useState([]); //controla os dados que vão sendo recebidos pelo websocket
  const [text, setText] = useState(''); //utilizado para recuperar o texto do input
  const [conectado, setConectado] = useState(false); //utilizado para saber o status da conexão com o websocket
  const [ws, setWs] = useState(); //para ter acesso ao websocket fora do escopo do hook useEffect()

  //layout de como será desenhado cada mensagem recebida pelo socket
  //a função simplesmente retorna um componente do tipo mensagem, que está na pasta de componentes
  const renderItem = ({ item }) => (
    <Mensagem mensagem={item.mensagem}></Mensagem>
  )

  //Após testes, achei necessário utilizar este hook para evitar que a conexão fosse restabelecida a cada renderização do aplicativo
  //Da forma como está, a conexão é realizada apenas a cada modificação do array de dados 
  useEffect(() => { 
    const ws = new WebSocket('ws://echo.websocket.org'); //criando o websocket
    setWs(ws); //setando o socket no hook, para utilizar do lado de fora da função

    ws.onopen = () => {
      console.log('Conexão estabelecida com o WebSocket')
      setConectado(true); //tudo ok!
    };

    ws.onmessage = (e) => {
      setData([...data, { id: data.length, mensagem: e.data }]);
    };

    ws.onerror = (e) => {
      console.error(e);
      console.log('Houve um erro durante a conexão com o WebSocket');
      setConectado(false); //problema na conexão
    };

    ws.onclose = (e) => {
      console.log('Conexão com o WebSocket fechada');
      setConectado(false);
    }
  }, [data]); //a cada modificação do array, a conexão é restabelecida


  return (
    <View style={styles.container}>
      {conectado ? ( /*{Caso esteja conectado, exibir a lista de mensagens}*/
        <View>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      ) : ( /*{Em caso negativo, uma mensagem é disparada na tela}*/
          <View style={styles.centralizar}>
            <Text style={styles.textStyle}>Problema de conexão com o WebSocket</Text>
          </View>
        )}


      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor='#03071e'
          placeholder="Digite sua mensagem aqui"
          onChangeText={(text) => setText(text)}
          onSubmitEditing={(e) => ws.send(text)}
        />
      </View>


    </View>
  );
}



