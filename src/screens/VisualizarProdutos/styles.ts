import { StyleSheet } from "react-native"

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#55AAAA",
        justifyContent: "center", 
        alignItems: "center",

    },
    janela: { 
        flex: 1,
        justifyContent: "center", 
        alignItems: "center" 
    },
    todos: {
        width: 100,
        height: 30,
        backgroundColor: "#818181",
        marginTop: 10,
        marginLeft: 10,
        zIndex: 1,
        borderWidth: 2,
        borderRightColor: "#000",
        borderTopColor: "#fff",
        borderLeftColor: "#fff",
        borderBottomWidth: 0,
    },
        geral:{
            flex: 1,
            margin: 10,
            marginTop: -3,
            backgroundColor: "#818181",
            borderWidth: 2,
            borderLeftColor: "#FFF",
            borderTopColor: "#FFF",
            zIndex: 0
        },
        cards: {
            marginTop : 10,
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap", 
            },
        
})