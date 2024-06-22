import { TextInput } from "react-native";
import { styles } from "./styles";
import { InputProps } from "../../types";

export default function Input({style, ...props}: InputProps) {
    return (
        <TextInput
            style={[styles.input, style]}
            {...props}
        />
    );
}