import { View, Text, Image, FlatList, Linking } from "react-native";
import { styles } from "./styles";
import Janela from "../../components/Janela";
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colaboradores } from "../../data/colaboradores";
import Icone from "../../components/Icone";



export default function SobreNos() {
    return (
        <View style={styles.container}>
            <Janela header="MSN Messenger" height={"90%"} width={"95%"} >
                <View style={styles.content}>
                    <View style={styles.headerContent}>
                        <Text>File</Text>
                        <Text>Actions</Text>
                        <Text>Tools</Text>
                        <Text>Help</Text>
                    </View>
                    <View style={styles.outerInfoContent}>
                        <View style={styles.infoContent}>
                            <View style={styles.headerInfoContent}>
                                <View style={styles.headerInternoContent}>
                                    <Image
                                        style={styles.logoMsn}
                                        source={require("../../../assets/MSN_messenger_user_156.png")}
                                    />
                                    <FontAwesome5 name="caret-down" size={24} color="black" />
                                    <View style={styles.nomeHeader}>
                                        <Text>My Status:</Text>
                                        <Text>Ususario (Online)</Text>
                                    </View>
                                </View>
                                <Image
                                    style={styles.logoNet}
                                    source={require("../../../assets/.net.png")}
                                    resizeMode="contain"
                                />
                            </View>
                            <LinearGradient
                                colors={['#f6df0f', '#fc301e', '#0b8fed', '#33b136']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradientLine}
                            />
                            <View style={styles.areaInfoContent}>
                                <Image
                                    style={styles.logoMsnBackground}
                                    source={require("../../../assets/MSN_messenger_user_156.png")}
                                />
                                <View style={styles.emailContent}>
                                    <FontAwesome5 name="envelope" size={24} color="#5f5aa1" />
                                    <Text style={styles.emailTextContent} >No new e-mail messages</Text>
                                </View>
                                <View style={styles.titleContent}>
                                    <FontAwesome5 name="angle-double-up" size={16} color="#476cb7" />
                                    <Text style={styles.titleOnline}>Online (5)</Text>
                                </View>
                                <FlatList
                                    data={colaboradores}
                                    keyExtractor={(item) => item.nome}
                                    renderItem={({ item }) => (

                                        <Icone
                                            style={styles.colaboradorContent}
                                            title={item.nome}
                                            source={item.foto}
                                            width={40}
                                            height={40}
                                            textStyle={{ color: "black", alignSelf: "center", fontWeight: "700" }}
                                            onPress={() => Linking.openURL(item.linkedin)}
                                        />
                                    )}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.footerContent}>
                        <Image
                            style={styles.msnFotoFooter}
                            source={require("../../../assets/MSN_messenger_user_156.png")}
                        />
                        <View style={styles.imgsFooter}>
                            <Image
                                style={styles.msnMessenger}
                                source={require("../../../assets/msn-messenger.png")}
                            />
                        </View>
                        <Image
                            style={styles.logoNetFooter}
                            source={require("../../../assets/.net.png")}
                            resizeMode="contain"
                        />

                        <LinearGradient
                            colors={['#f6df0f', '#fc301e', '#0b8fed', '#33b136']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientLineFooter}
                        />
                    </View>
                </View>
            </Janela>
        </View>
    );
}