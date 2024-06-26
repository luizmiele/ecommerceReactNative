import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function SelectButton(props: any) {
    return (
        <View style={styles.geral}>
            <TouchableOpacity onPress={() => alert('Erro insesperado aconteceu')}>
                <Text style={styles.texto}>{props.nome}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    geral: {
        flexDirection:'row',
        backgroundColor: '#222',
        borderRadius: 50,
        padding: 10,
        margin:5
    },
    texto:{
        color:'#fff'
    }
})

export default SelectButton