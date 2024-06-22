import { Image, Text, View } from "react-native"
import { styles } from "./styles"
import { propsJanela } from "../../types"



function Janela(props: propsJanela) {
    return (
        <View style={[styles.geral, { height: props?.height, width: props?.width }]}>
            <View style={styles.headerCardContainer}>
                <View style={styles.headerCardContent}>
                    <Text style={styles.title}>{props.header}</Text>
                    <Image source={require("../../../assets/icons/botao-fechar.png")} />
                </View>
            </View>
            <View style={styles.container}>
                {props?.children}
            </View>
        </View>
    )
}

export default Janela