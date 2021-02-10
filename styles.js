import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },

    mensagemContainer: {
        flex: 1,
        marginTop: 15,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 'auto',
        marginLeft: 5
    },

    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#d00000'
    },

    inputContainer: {
        width: '100%',
        height: 50,
        backgroundColor: '#ffba08',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0
        
    },

    centralizar:{
        flex : 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
