import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";
import styles from "./styles";

export default function FormularioHeader(
    {
        label,
        onChangeText,
        defaultValue,
        styleDefault = null,
        alternativeStyle,
        multiLine,
        numberOfLines,
        keyboardType
    }:
        {
            label: string,
            onChangeText: (e: any) => void,
            defaultValue: any,
            styleDefault: any,
            alternativeStyle?: Object,
            multiLine?: boolean,
            numberOfLines?: number,
            keyboardType?: KeyboardTypeOptions
        }) {

    const styleStandard = styles.inputName;

    if (styleDefault != null) styleDefault = { ...styles.inputName, ...styleDefault };

    return (
        <View style={alternativeStyle || {}}>
            <Text>{label} </Text>
            <TextInput
                style={styles == null ? styleStandard : styleDefault}
                onChangeText={onChangeText}
                value={defaultValue}
                keyboardType={keyboardType}
                multiline={multiLine}
                numberOfLines={numberOfLines} />
        </View>
    );
}