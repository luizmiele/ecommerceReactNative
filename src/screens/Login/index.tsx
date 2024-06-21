import { useNavigation } from "@react-navigation/native";
import { LoginProps, StackTypes } from "../../routes/stack";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function Login() {
    const navigation = useNavigation<StackTypes>();
    return(
        <View style={styles.container}>
            <Text>Página Login</Text>
        </View>
    );
}