import { Text, View, Image } from "react-native";
import { styles } from "./style";

export default function Servicos() {
    return (
        <View style={styles.ofertasContainer}>
            <View style={styles.ofertasContent}>
                <View style={styles.imageTextContainer}>
                    <Image
                        source={require("../../../assets/images/mercado-livre.png")}
                        style={styles.imageLinkContent}
                    />
                    <Text style={styles.textLinkContent}>Ofertas</Text>
                </View>
                <View style={styles.imageTextContainer}>
                    <Image
                        source={require("../../../assets/images/mercado-play.png")}
                        style={styles.imageLinkContent}
                    />
                    <Text style={styles.textLinkContent}>Mercado Play</Text>
                </View>
                <View style={styles.imageTextContainer}>
                    <Image
                        source={require("../../../assets/images/mercado-pago.png")}
                        style={styles.imageLinkContent}
                    />
                    <Text style={styles.textLinkContent}>Mercado Pago</Text>
                </View>
                <View style={styles.imageTextContainer}>
                    <Image
                        source={require("../../../assets/images/ticket.png")}
                        style={styles.imageLinkContent}
                    />
                    <Text style={styles.textLinkContent}>Cupons</Text>
                </View>
                <View style={styles.imageTextContainer}>
                    <Image
                        source={require("../../../assets/images/cesta.png")}
                        style={styles.imageLinkContent}
                    />
                    <Text style={styles.textLinkContent}>Supermercado</Text>
                </View>
            </View>
        </View>
    );
}