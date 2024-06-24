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
        padding: 20,
    },
    todos: {
        flex: 1,
        width: 350,
        padding: 10, 
        gap: 10
    },
    main: {
        marginBottom: 10
    },
    tipo: {
        flex: 0.33, 
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
    inputDescription: {
        width: "95%",
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
        padding: 1,
        marginHorizontal: 5,
        marginBottom: 5,
    },
    infoBox: {
        flex:1,
        zIndex: 1,
        paddingTop: 20,
        padding: 10,
        gap: 10,
        backgroundColor: "#C3C7CB",
        borderColor: "#606060",
        borderWidth: 2,
        shadowColor: '#fff',
        shadowOffset: { width: -2, height: -2 },
        shadowOpacity: 1,
        shadowRadius: 2,
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