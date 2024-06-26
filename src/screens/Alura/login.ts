import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#01080E",
        justifyContent: "center",
        alignItems: "center",    
        gap: 10,   
    },
    titleMainContainer: {
        width: "90%",
        height: 200,
        justifyContent: "space-around"
    },
    titleContainer: {
        flexDirection: "row", 
        alignItems: "flex-end",             
        gap: 10,
        
    },
    titleAlura: {
        height:38.5,
        color: "#fff",
        fontSize: 50,
    },
    versao: {
        color: "#61C9F9",
        fontSize: 11,
    },
    titlePergunta: {
        color: "#fff",
        fontSize: 25,
    },
    titleChamada: {
        color: "#61C9F9",
        fontSize: 15,
    },
    formContainer: {
        width: "90%",
        height: 300,
    },
   
   

})