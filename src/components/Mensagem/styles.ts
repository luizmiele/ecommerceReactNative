import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
        backgroundColor:'#0006',
        zIndex:1
    },
    conteudo:{
        alignItems:'center',
        height:'100%',
        width:'100%',
        paddingHorizontal:10
    },
    conteudoMensagem:{
        flexDirection:'row',
        gap:10,
        margin:10
    },
    icon:{
        marginTop:20
    },
    text:{
        flexWrap:'wrap',
        textAlignVertical:'center'
    }
})

export default styles