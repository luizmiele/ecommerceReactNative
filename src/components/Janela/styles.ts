import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    geral:{
        backgroundColor: "#C3C7CB",
        borderWidth: 2,
        minHeight:'10%',
        minWidth:'20%',
        borderLeftColor: "#FFF",
        borderTopColor: "#FFF",
        paddingHorizontal: 1,
    },
    headerCardContainer: {
        backgroundColor: "#0000AA",
        minWidth: "auto",
    },
    headerCardContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 2,
    },
    container: {
        justifyContent: "center",
        top: "10%",
    },
    title: {
        color: "#FFF",
        fontWeight: "bold",
    },
})