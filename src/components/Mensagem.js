import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles'

const Mensagem = (props) => {
    return ( /*{Possui apenas um campo para texto}*/
        <View style={styles.mensagemContainer}>
            <Text style={styles.textStyle}>{props.mensagem}</Text>
        </View>
    )
}


export default Mensagem;