import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#55AAAA",
        justifyContent: "center",
        alignItems: "center",
    },
    janela: {
        width: '90%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000'
    },
    todos: {
        width: 100,
        height: 30,
        backgroundColor: "#bbb",
        marginTop: 10,
        marginLeft: 10,
        zIndex: 1,
        borderWidth: 2,
        borderRightColor: "#000",
        borderTopColor: "#fff",
        borderLeftColor: "#fff",
        borderBottomWidth: 0,
    },
    searchBar:{
        marginTop:5,
        marginBottom:8
    },
    geral: {
        alignItems: 'center',
        maxHeight: '92%',
        minHeight:'80%',
        padding: 10,
        margin: 10,
        marginTop: -3,
        backgroundColor: "#bbb",
        borderWidth: 2,
        borderLeftColor: "#FFF",
        borderTopColor: "#FFF",
        zIndex: 0,
    },
    cards: {

        marginTop: 10,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    

})