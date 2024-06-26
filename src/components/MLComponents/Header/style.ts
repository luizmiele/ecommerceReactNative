import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#FEE600",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        position: "absolute",
        height: 125,
        zIndex: 1,
    },
    headerContent: {
        flex: 1,
        top: 20,
        justifyContent: "space-evenly",
    },
    nav: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#FFF",
        width: "70%",
        height: 40,
        borderRadius: 50,
    },
    searchText: {
        color: "#AAAAAA",
        left: 5,
    },
    locationView: {
        left: "6%",
        flexDirection: "row",
        alignItems: "center",
    },
    cepText: {
        fontSize: 12,
        color: "#84780F",
    },
});

