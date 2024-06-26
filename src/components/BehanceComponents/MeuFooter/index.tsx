import { Image, StyleSheet, View } from "react-native"
import  Icon  from 'react-native-vector-icons/Ionicons'
import  IconPerf  from 'react-native-vector-icons/FontAwesome6'

function MeuFooter(){
    return(
        <View style={styles.geral}>
            <Icon size={25} color='#fff' name='home-outline'/>
            <Icon size={25} color='#fff' name='search'/>
            <Icon size={25} color='#fff' name='chatbubbles-outline'/>
            <Icon size={25} color='#fff' name='briefcase-outline'/>
            <IconPerf size={25} color='#fff' name='circle-user'/>
        </View>
    )
}

const styles = StyleSheet.create({
    geral:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor:'#000'
    },
    imagem:{
        height:50,
        width:50
    }
})

export default MeuFooter