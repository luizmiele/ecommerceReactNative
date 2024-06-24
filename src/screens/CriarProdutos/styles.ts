import { StyleSheet } from "react-native"

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#55AAAA",
        alignItems: 'center'
    },
    janela: {
        flex: 1, 
        justifyContent: 'center',
        padding: 20
    },
    todos: {
        flex: 1,
        width: 350,
        padding: 10, 
        gap: 10
    },
    tipo: {
        flex: 1, 
        flexDirection: 'row',
        gap: 20
    },
    inputView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 40
    },
    input: {
        width: "90%",
        height: 20,
        paddingHorizontal: 8,
        borderWidth: 2,
        backgroundColor: '#FFF',
        borderRightColor: "#FFF",
        borderBottomColor: "#FFF",
    },
    footerContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        backgroundColor: "#C0C0C0",
        borderTopWidth: 2,
        borderTopColor: "#FFF",
    },
    footerContent: {
        flexDirection: "row",
        padding: "1%",
    },
    btnStart: {
        borderRightWidth: 2,
        borderTopWidth: 1,
        borderLeftWidth: 2,
        borderBottomWidth: 1,
        borderLeftColor: "#FFF",
        borderTopColor: "#FFF",
        backgroundColor: "#C3C7CB",
        width: "17%",
        flexDirection: "row",
        alignItems: "center",
    },
    btnText: {
        color: "#000",
        fontWeight:"500",
    }
        
})