import { View, Text } from "react-native";
import Button from "../Button";
import { styles } from "./style";

export default function CreateAccountCard() {
    return (
        <View style={styles.createAccountContainer}>
            <View style={styles.createAccountContent}>
                <View style={styles.createAccountTextContainer}>
                    <Text>Crie uma conta para melhorar sua experiência!</Text>
                </View>
                <View style={styles.createAccountbtnContainer}>
                    <Button texto="Criar conta" />
                </View>
            </View>
        </View>
    );
}