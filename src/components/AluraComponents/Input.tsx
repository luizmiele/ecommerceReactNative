import { Text, TextInput, StyleSheet } from "react-native"

export const Input = ({title, props}: any) => {
  return (
    <>
    <Text style={styles.labelInput}>{title}</Text>
    <TextInput style={styles.input}  />
    </>
  )
}

const styles = StyleSheet.create({
    labelInput: {
        color: "#61C9F9",
        fontSize: 12,
        marginTop: 20,
        marginBottom: 5,
    },
    input: {
        height: 40,
        backgroundColor: "#01080E",
        borderWidth: 1.5,
        borderRadius: 2,
        borderColor: "#61C9F9",
        color: "#fff",
        padding: 5,
    },    
})
