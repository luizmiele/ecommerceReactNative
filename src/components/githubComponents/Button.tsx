import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface ButtonProps {
    title: string;
    textColor: string;
    backgroundColor: string;
    onPress: () => void;
  }
  
  const Button: React.FC<ButtonProps> = ({ title, textColor, backgroundColor, onPress }) => {
    return (
      <View style={[styles.buttonContainer, { backgroundColor }]} >
        <TouchableOpacity 
          style={styles.button}
          onPress={onPress}
          >
          <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    buttonContainer: {
      width: "90%",
      paddingVertical: 12,
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
      fontWeight: "400",
      fontSize: 15,
    },
  });

  export default Button;