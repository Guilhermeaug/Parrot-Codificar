# Parrot-Codificar

Aplicativo que acessa um WebSocket público, feito para retornar tudo o que é enviado para ele. Assim, o presente app coleta a informação retornada e exibe os dados em linha, como se fosse um chat . Produzido utilizando o framework React native com o objetivo de criar um codigo fonte aplicável para qualquer dispositivo móvel.

# Divisões do aplicativo

O aplicativo possui uma função de renderização principal e foi criada uma pasta para os componentes utilizados na visualização dos dados recolhidos via API externa. Desta forma, existe um componente 'Mensagem' que tem em seu corpo apenas um componente de texto, utilizado para exibir a informação que é passada de parâmetro pelo função principal.

Também há uma folha de estilo, utilizada para personalizar a aparência dos componentes e sua disposição na tela.

Durante a construção do aplicativo, recorri sempre à documentação oficial do framework (https://reactnative.dev/docs/getting-started), com o objetivo de tirar dúvidas sobre o mesmo e aprender as melhores técnicas de utilização.

Nota-se, inclusive, a utilização de diversos 'hooks' do React, os quais aprendi a utilizar principalmente através da documentação.

# Executando o aplicativo

Para executar o aplicativo, baixe a pasta neste repositório e extraia o arquivo no local desejado. Após isso, abra um terminal de comando na pasta principal e execute o comando 'npm start' ou 'yarn start', dependendo do instalador de dependências instalado na sua máquina.

O software foi contruído utlizando a plataforma Expo. Desse modo, certifique-se de ter instalado as dependências do mesmo. Caso não possua, basta executar o comando 'npm install expo' ou 'yarn add expo'. Em caso de problemas, verifique o site: https://docs.expo.io/

Após isso, uma aba será aberta no browser e basta executar um emulador da sua escolha ou utilizar o próprio smartphone via QR CODE. Simplesmente digite o que quiser no input localizado na parte inferior da tela, que será exibido uma réplica da mensagem.
