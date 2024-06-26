import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    ofertasContainer: {
        width: "100%",
        height: 100,
        top: 25,
        justifyContent: "center",
    },
    ofertasContent: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    imageTextContainer: {
        alignItems: "center",
        top: 10,
    },
    imageLinkContent: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderRadius: 50,
        width: 50,
        height: 50,
        elevation: 5,
    },
    textLinkContent: {
        top: 5,
        color: "#BEBEBE",
        fontSize: 10,
    },
});