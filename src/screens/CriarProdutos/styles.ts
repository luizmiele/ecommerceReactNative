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
        padding: 30,
    },
    todos: {
        flex: 1,
        width: 350,
        padding: 10, 
        gap: 5
    },
    tipo: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 40
    },
    inputName: {
        width: "98%",
        height: 30,
        paddingHorizontal: 8,
        borderWidth: 2,
        backgroundColor: '#FFF',
        borderRightColor: "#FFF",
        borderBottomColor: "#FFF",
    },
    input: {
        width: "100%",
        height: 20,
        paddingHorizontal: 8,
        borderWidth: 2,
        backgroundColor: '#FFF',
        borderRightColor: "#FFF",
        borderBottomColor: "#FFF",
    },
    inputDescription: {
        width: "98%",
        height: 90,
        paddingHorizontal: 8,
        borderWidth: 2,
        backgroundColor: '#FFF',
        borderRightColor: "#FFF",
        borderBottomColor: "#FFF",
    },
    outerInfoBox: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        marginHorizontal: 5,
        marginBottom: 5,
    },
    outerInfoBoxDisabled: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        marginHorizontal: 5,
        marginBottom: 5,
        opacity: 0.5
    },
    infoBox: {
        flex:1,
        backgroundColor: "#C3C7CB",
        borderColor: "#606060",
        padding: 10,
        borderWidth: 2,
        shadowColor: '#fff',
        shadowOffset: { width: -2, height: -2 },
        shadowOpacity: 1,
        shadowRadius: 2,
    },
    inputBox: {
        flex: 1,
        width: '50%',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        gap: 30
    },
    botoes: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 20,
        paddingBottom: 10
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