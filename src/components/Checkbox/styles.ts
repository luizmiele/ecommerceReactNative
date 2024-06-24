import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 5,
  },
  checkboxContainer: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#FFF",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },
  checkboxContainerChecked: {
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000",
  },
  optionText: {
    fontSize: 16,
    marginRight: 10,
    color: "#000",
  },
})