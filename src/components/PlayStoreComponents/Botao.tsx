import { Pressable, StyleSheet, Text } from "react-native";

const Botao = ({texto}: {texto: string}) => {
    const novoTexto: string = texto.toLocaleUpperCase();
    return(
        <Pressable style={styles.botao}>
            <Text style={{color: 'white'}}>
                {novoTexto}
            </Text>
        </Pressable>
    );
}

export default Botao; 

const styles = StyleSheet.create({
    botao: {
        flex: 1,
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#109d58',
        marginTop: 10
    }
});
