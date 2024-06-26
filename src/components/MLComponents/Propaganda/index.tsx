import { View, Image } from "react-native";
import { styles } from "./style";

export default function Propaganda() {
    return (
        <View style={styles.propagandaContainer}>
            <Image
                source={require("../../../../assets/imgMercadoLivre/propaganda.png")}
                style={styles.propagandaContent}
            />
        </View>
    );
}