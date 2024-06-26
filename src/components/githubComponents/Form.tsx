import { StyleSheet, Text, View, TextInput } from "react-native";
import SigninButton from "../components/SigninButton";
    
const Form: React.FC = () => {
    return (
      <View style={styles.form}>
      <View style={styles.upperInput}>
        <View style={styles.inputTextContainer}>
          <Text style={styles.textInput}>Username or email address</Text>
        </View>
        <View>
          <TextInput style={styles.input}></TextInput>
        </View>
      </View>
      <View>
        <View style={styles.inputTextContainer}>
          <Text style={styles.textInput}>Password</Text>
          <Text style={styles.forgot}>Forgot the password?</Text>
        </View>
        <View>
          <TextInput style={styles.input} secureTextEntry={true}></TextInput>
        </View>
      </View>
      <View style={styles.signin}>
        <SigninButton
          title="Sign in"
          textColor="#FFFFFF"
          backgroundColor="#1B8A39"
          padding={0}
        />
      </View>
    </View>
    );
  };

  const styles = StyleSheet.create({
    form: {
        flex: 0.9,
        width: "90%",
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: "lightgrey",
        paddingBottom: 10,
      },
      upperInput: {
        marginTop: 30,
        marginBottom: 15,
      },
      inputTextContainer: {
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      textInput: {
        fontWeight: "500",
        color: "#747883",
      },
      forgot: {
        fontWeight: "500",
        color: "#2078A8",
      },
      input: {
        width: "100%",
        padding: 1,
        backgroundColor: "#FDFFFD",
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: "lightgrey",
        elevation: 1,
      },
      signin: {
        marginTop: 20,
      },
  })

  export default Form;