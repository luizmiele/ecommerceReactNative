import { View, Text, Image } from "react-native";
import { styles } from "./style";
import Button from "../Button";
import { CardsList } from "../../data/cardList";

export default function Cards({ image, title, subtitle, textButton }: CardsList) {
    return (
        <View style={styles.sectionInfoContent}>
            <View style={styles.iconTextContent}>
                <Image source={image} style={{ width: 80, height: 80 }} />
                <Text style={styles.insertLocalizationText}>{title}</Text>
                <Text style={{ fontSize: 11, fontWeight: "light", textAlign: "center" }}>{subtitle}</Text>
            </View>
            <Button texto={textButton} />
        </View>
    );
}