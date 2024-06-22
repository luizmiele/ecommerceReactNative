import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { ButtonTitleProps } from "../../types";

export default function Button({ title, style, ...rest }: ButtonTitleProps) {
  return (
    <TouchableOpacity style={[styles.btn, style]} {...rest}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
