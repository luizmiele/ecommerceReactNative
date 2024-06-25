import { View, Text, TextInput } from "react-native";
import styles from "./styles";

export default function FormularioHeader({label, onChangeText, defaultValue, styleDefault = null, alternativeStyle, multiLine, numberOfLines,}: {label: string, onChangeText: (e: any) => void, defaultValue: any, styleDefault: any, alternativeStyle?: Object, multiLine?: boolean, numberOfLines?: number}) {

    const styleStandard = styles.inputName;

    if(styleDefault != null) styleDefault = {...styles.inputName, ...styleDefault};

    return (
        <View style={alternativeStyle || {}}>
            <Text>{label} </Text>
            <TextInput
                style={styles == null ? styleStandard : styleDefault}
                onChangeText={onChangeText}
                value={defaultValue}
                multiline={multiLine}
                numberOfLines={numberOfLines}/>
        </View>
    );
}