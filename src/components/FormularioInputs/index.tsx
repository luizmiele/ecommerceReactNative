import { View, Text, TextInput } from "react-native";
import styles from "./styles";

export default function FormularioHeader({label, onChangeText, defaultValue, multiLine, numberOfLines }: {label: string, onChangeText: (e: any) => void, defaultValue: any, multiLine: boolean, numberOfLines: number}) {
    return (
        <View>
            <Text>{label} </Text>
            <TextInput
                style={styles.inputName}
                onChangeText={onChangeText}
                value={defaultValue}
                multiline={multiLine}
                numberOfLines={numberOfLines} />
        </View>
    );
}