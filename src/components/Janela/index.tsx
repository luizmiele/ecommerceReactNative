import { Image, Pressable, Text, TouchableWithoutFeedback, View } from "react-native"
import { styles } from "./styles"
import { propsJanela } from "../../types"
import icon1 from "../../../assets/icons/botao-fechar.png";
import icon2 from "../../../assets/icons/botao-fechar-click.png"

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";


function Janela(props: propsJanela) {
    const stack = useNavigation<StackTypes>();
    const [apertando, setApertando] = useState(false)

    return (
        <View style={[styles.geral, { height: props?.height, width: props?.width }]}>
            <View style={styles.headerCardContainer}>
                <View style={styles.headerCardContent}>
                    <Text style={styles.title}>{props.header}</Text>
                    <Pressable onPress={()=>stack.pop()} onPressIn={() => setApertando(true)} onPressOut={() => setApertando(false)}>
                        <Image source={apertando ? icon2 : icon1} />
                    </Pressable>
                </View>
            </View>
            <View style={styles.container}>
                {props?.children}
            </View>
        </View>
    )
}

export default Janela