import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#55AAAA",
        alignItems: "center",
        justifyContent: "center",
      },
      buttonContainer: {
      },
      inputContainer: {
        height: 50,
        justifyContent: "flex-end",
        marginTop: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: "#000",
        backgroundColor: "#fff",
        padding: 10,
      },
      button: {
        backgroundColor: "#C0C0C0",
        flex: 1,
        padding: 10,
        borderWidth: 2,
        borderRightColor: "#000",
        borderBottomColor: "#000",
        borderTopColor: "#FFF",
        borderLeftColor: "#FFF",
        margin: 4,
        justifyContent: "center",
      },
      input: {
        fontSize: 24,
        color: "#000",
        textAlign: "right",
        // fontFamily: "Courier New",
      },
      row: {
        flexDirection: "row",
      },
      operatorButton: {
        backgroundColor: "#999999",
        flex: 1,
        padding: 10,
        borderWidth: 2,
        borderRightColor: "#000",
        borderBottomColor: "#000",
        borderTopColor: "#FFF",
        borderLeftColor: "#FFF",
        margin: 4,
        justifyContent: "center",
      },
      buttonText: {
        fontSize: 18,
        textAlign: "center",
        color: "blue",
        fontWeight: "800"
      },
      calculateButton: {
        backgroundColor: "#999999",
        borderWidth: 2,
        borderRightColor: "#000",
        borderBottomColor: "#000",
        borderTopColor: "#FFF",
        borderLeftColor: "#FFF",
        padding: 10,
        marginHorizontal: 5,
        width: "98%",
        justifyContent: "center",
      },
});