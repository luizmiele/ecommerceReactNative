import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface ButtonProps {
    title: string;
    textColor: string;
    backgroundColor: string;
    padding: any;
  }
  
  const SigninButton: React.FC<ButtonProps> = ({ title, textColor, backgroundColor, padding }) => {
    return (
      <View style={[styles.buttonContainer, { backgroundColor }]}>
        <TouchableOpacity style={[styles.button, {padding}]}>
          <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    buttonContainer: {
      width: "100%",
      paddingVertical: 8,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      elevation: 8,
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    buttonText: {
      fontWeight: "500",
      fontSize: 15,
    },
  });

  export default SigninButton;