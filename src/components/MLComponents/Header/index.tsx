import FaBar from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import CartIcon from "react-native-vector-icons/Feather";
import LocationIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Text, View } from 'react-native';
import { styles } from "./style";

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerContent}>
                <View style={styles.nav}>
                    <FaBar name="bars" size={25} color="#84780F" />
                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={20} color="#AAAAAA" />
                        <Text style={styles.searchText}>Buscar no Mercado Livre</Text>
                    </View>
                    <CartIcon name="shopping-cart" size={25} color="#84780F" />
                </View>
                <View style={styles.locationView}>
                    <LocationIcon name="map-marker" size={12} color="#84780F" />
                    <Text style={styles.cepText}>Informe seu CEP</Text>
                    <Icon name="keyboard-arrow-right" size={15} color="#84780F" />
                </View>
            </View>
        </View>
    );
}