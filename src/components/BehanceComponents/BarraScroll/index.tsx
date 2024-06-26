import { SafeAreaView, ScrollView, StyleSheet } from "react-native"
import SelectButton from "../SelectButton"

function BarraScroll() {
    return (
        <SafeAreaView style={styles.geral}>
            <ScrollView horizontal >
                <SelectButton nome={'Trabalho'} />
                <SelectButton nome={'Painéis semânticos'} />
                <SelectButton nome={'Sobre'} />
                <SelectButton nome={'Avaliação'} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    geral:{
        borderTopWidth:1,
        padding:5,
        borderColor:'#222',
        backgroundColor:'#000'
    }
})

export default BarraScroll