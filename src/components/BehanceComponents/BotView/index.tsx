import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import SelectButton from "../SelectButton"
import BarraScroll from "../BarraScroll"

function BotView() {
    return (
        <View style={styles.geral}>
            <View style={styles.container}>
                <Text style={[styles.texto, { fontSize: 20, margin: 10 }]}>
                    Criar seu primeiro projeto</Text>
                <Text style={[styles.texto, { textAlign: 'center', color: '#999' }]}>
                    Crie seu primeiro projeto para apresentar seu trabalho, receber feedback e avaliações.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    geral: {
        flex: 4,
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 10
    },
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 20
    },
    texto: {
        color: '#fff'
    }
})

export default BotView