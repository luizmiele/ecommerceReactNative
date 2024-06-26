import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";

type ButtonProps = {
    texto: string;
}

export default function Button({ texto }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{texto}</Text>
        </TouchableOpacity>
    );
}