import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#55AAAA",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        height:'auto',
        width: 'auto',        
    },
    headerContent: {
        flexDirection: "row",
        marginVertical: 15,
        marginHorizontal: 5,
        gap: 10,
    },
    outerInfoContent: {
        alignItems:'center',
        backgroundColor: "#0340b0",
        padding: 3,
        marginHorizontal: 5,
        marginBottom: 5,
    },
    infoContent: {
        backgroundColor: "#f1f1f1",      
        width: '99.4%',
        height: 550,       
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 15,
        
    }, 
    headerInternoContent: {
        padding: 5,
        gap: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    headerInfoContent: {
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    }, 
    logoMsn: {
        height: 50,
        width: 50,
    }, 
    nomeHeader: {
        gap: 5,
        marginHorizontal: 10
    },
    logoNet: {
        height: 50,
        width: 50,
        opacity: 0.5,
        
    },
    gradientLine: {
        alignSelf: "flex-end",
        marginRight: 5,
        height: 5, 
        width: "77%",
    },
    areaInfoContent: {
        gap: 10

    },
    logoMsnBackground: {
        position: "absolute",
        zIndex:0,
        alignSelf: "center",
        top: 50,
        opacity: 0.1
    },
    emailContent: {
        flexDirection: "row",
        alignItems: "center",
        margin:4,
        marginLeft: 10,
        gap: 10
    },
    emailTextContent: {
        padding: 4,
        textDecorationLine: "underline",
        color: "#fff",
        backgroundColor: "#000081",
        

    },
    titleContent: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginLeft: 10,

    },
    titleOnline: {
        color: "#000081",
        fontSize: 18,
        fontWeight: "700",
    },
    
    colaboradorContent:{
        flexDirection: "row",
        alignItems: "baseline",
        marginLeft: 20,
        gap: 10

    },
    msnSingle: {
        height: 50,
        width: 50,
    },
    nomeColaborador: {
        fontSize: 20,
        alignSelf: "center"
    },
    footer: {
        justifyContent:'flex-end',      
        padding: 10
    },
    footerContent:{
        top:'20%'
    },
    msnFotoFooter: {
        position: "absolute",
        bottom:'15%',
        height: 87,
        width: 80,
        opacity: 0.2,
    },
    gradientLineFooter: {
        alignSelf: "flex-end",
        marginRight: 1,
        height: 5, 
        width: "100%",
    },
    msnMessenger: {
        position: "absolute",
        resizeMode: "contain",
        width: 260,
        height: 50,
        
        
    },
    imgsFooter: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    logoNetFooter: {        
        height: 50,
        width: 50,
        opacity: 0.5,
        marginTop: 26,
        marginBottom: 5,
        alignSelf: "flex-end"
    }
});