import { Image, StyleSheet, Text, View } from "react-native"
import Plus from '../../../assets/plus.png'

function BigBlueButton(){
    return(
        <View style={styles.geral}>
            <View style={styles.circulo}>
                <Text style={styles.texto}>+</Text>
            </View>
        </View>
    )
}
//<Image style={styles.imagem} source={Plus}/>
const styles = StyleSheet.create({
    geral:{
        flex:1,
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center'
    },
    circulo:{
        margin: 20,
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#0909f9'
    },
    texto:{
        textAlign:'center',
        textAlignVertical:'center',
        color:'#fff',
        fontSize:30
    }
})

export default BigBlueButton