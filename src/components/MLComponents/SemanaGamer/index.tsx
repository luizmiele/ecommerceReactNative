import { View, Image } from "react-native";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";

export default function SemanaGamer() {
    return (
        <LinearGradient
            colors={['#FEE600', '#F8EB72', '#EEEEEE']}
        >
            <View style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/semana-gamer.png')}
                />
            </View>
        </LinearGradient>
    );
}