import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
        justifyContent: "center",
        alignItems: "center",
        
        
        
    },
    modalContent: {
        backgroundColor: "#C3C7CB",
        borderWidth: 2,
        borderLeftColor: "#FFF",
        borderTopColor: "#FFF",
        paddingHorizontal: 2,
        paddingBottom: 10,
        width: "90%",
        height: "65%"
    },
    imgContainer: {
        top: 10,
        alignSelf: "center",
        height: 220,
        width: "90%",
        borderWidth: 2,
        borderTopColor: "#000",
        borderLeftColor: "#000",
        borderRightColor: "#FFF",
        borderBottomColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    },
    imgCentro: {
        resizeMode:'contain',
        height: "99%",
        width: "99%", 
    },
    infoContainer: {
        zIndex: 0,
        top: 25,
        backgroundColor: "#C3C7CB",
        flexDirection: "column",        
        gap: 35,
    },
    infoHeader: {
        zIndex: 1,
        position: "absolute",
        backgroundColor: "#C3C7CB",
        paddingHorizontal: 4,
        paddingBottom: 4,
        fontSize: 12,
        marginLeft: 13,
        top: 0,

    },
    outerInfoBox: {
        backgroundColor: "#f0f0f0",
        padding: 1,
        marginHorizontal: 5,
        marginBottom: 5,
    },
    infoBox: {
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
    infoContent: {
        gap: 3,
    },
    descriptionInput: {
        height: 60
    },
    priceInfoContent: {
        flexDirection: "row",
        gap: 5,
    },
    priceInput: {
        width: 50,
    },
    typeInfoContent: {
        flexDirection: "row",
        gap: 5,
    },
    label: {
        
    },
    checkboxContainer: {
        flexDirection: "row",
        gap: 5,
    },
    buttonsContainer: {       
        marginHorizontal: 6,
        gap: 15,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
});

