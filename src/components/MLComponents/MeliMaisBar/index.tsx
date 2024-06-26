import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Text, View } from "react-native";
import { styles } from "./style";

export default function MeliMaisBar() {
    return (
        <LinearGradient
            colors={['#8A1891', '#8A1891', '#B75CAF']}
            style={styles.meliMaisContainer}
        >
            <View style={styles.meliMais}>
                <Text style={styles.meliMaisText}>Você é meli+ | Aproveite o frete grátis exclusivo</Text>
                <Icon name="keyboard-arrow-right" size={15} color="#FFF" />
            </View>
        </LinearGradient>
    );
}