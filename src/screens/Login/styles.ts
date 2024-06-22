import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#55AAAA",
        alignItems: "center",
        justifyContent: "center",
    },
    cardContainer: {
        backgroundColor: "#C3C7CB",
        width: "80%",
        height: "40%",
        borderWidth: 2,
        borderLeftColor: "#FFF",
        borderTopColor: "#FFF",
        paddingHorizontal: 1,
    },
    headerCardContainer: {
        backgroundColor: "#0000AA",
        width: "100%",
    },
    headerCardContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 2,
    },
    title: {
        color: "#FFF",
        fontWeight: "bold",
    },
    logoContainer: {
        flex: 0.4,
        justifyContent: "center",
        top: "10%",
    },
    titleLogo: {
        fontSize: 18,
        fontStyle: "normal",
        paddingHorizontal: "20%",
    },
    subtitleLogo: {
        fontSize: 28,
        fontWeight: "900",
        bottom: "15%",
        paddingHorizontal: "25%",
    },
    formContainer: {
        paddingHorizontal: "4%",
        top: "20%",
    },
    label: {
        fontSize: 12,
        marginBottom: 5,
    },
    input: {
        width: "95%",
        height: 20,
        paddingHorizontal: 8,
        borderWidth: 2,
        backgroundColor: '#FFF',
        borderRightColor: "#FFF",
        borderBottomColor: "#FFF",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        top: 10,
        paddingHorizontal: "4%"
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 2,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 3,
        width: "30%",
        marginHorizontal: 3,
    }
});