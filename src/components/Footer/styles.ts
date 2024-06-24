import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
});