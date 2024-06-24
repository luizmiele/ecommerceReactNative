import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { FooterProps } from "../../types";


export default function Footer({ onPress }: FooterProps) {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footerContent}>
                <TouchableOpacity style={styles.btnStart} onPress={onPress}>
                    <Image
                        source={require("../../../assets/icons/logo-98-bar 1.png")}
                    />
                    <Text style={styles.btnText}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}