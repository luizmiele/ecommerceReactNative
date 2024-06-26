import { DrawerContentScrollView, DrawerItemList, DrawerNavigationProp, DrawerScreenProps, createDrawerNavigator, DrawerContentComponentProps } from "@react-navigation/drawer";
import RotasPrivadas from "./privateStack";
import { AuthCtx } from "../contexts/AuthCtx";
import { useContext } from "react";
import { View } from "react-native";
import Icone from "../components/Icone";
import { DrawerNavigation } from "../types";
import CriarProdutosScreen from "../screens/CriarProdutos";
import VisualizarProdutosScreen from "../screens/VisualizarProdutos";
import AtualizaProdutosScreen from "../screens/AtualizarProdutos";
import SobreNosScreen from "../screens/SobreNos";
import CalculadoraScreen from "../screens/Calculadora";
import LixeiraScreen from "../screens/Lixeira";

export type DrawerTypes = DrawerNavigationProp<DrawerNavigation>;
export type PortugolEcommerceProps = DrawerScreenProps<DrawerNavigation, "PortugolEcommerce">;
export type CriarProdutosProps = DrawerScreenProps<DrawerNavigation, "CriarProdutosScreen">;
export type AtualizarProdutosProps = DrawerScreenProps<DrawerNavigation, "AtualizarProdutosScreen">;
export type SobreNosProps = DrawerScreenProps<DrawerNavigation, "SobreNosScreen">;
export type LixeiraProps = DrawerScreenProps<DrawerNavigation, "LixeiraScreen">;
export type CalculadoraProps = DrawerScreenProps<DrawerNavigation, "CalculadoraScreen">;

const { Navigator, Screen } = createDrawerNavigator<DrawerNavigation>();

function CustomDrawerContent(props: DrawerContentComponentProps) {
    const { logout } = useContext(AuthCtx);
    return (
        <View style={{ flex: 1 }}>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <Icone
                style={{
                    flexDirection: "row", alignItems: "center", borderTopWidth: 2,
                    borderColor: "#A8A8A8", padding: "3%",
                }}
                title="Log OFF"
                source={require("../../assets/icons/logOff-icon.png")}
                width={40}
                height={40}
                textStyle={{ color: "#000" }}
                onPress={logout}
            />
        </View>
    );
}
const DrawerComponent = () => {
    return (
        <Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    top: "31%",
                    bottom: 40,
                    backgroundColor: "#C0C0C0",
                    width: "56%",
                    borderRightWidth: 1,
                    borderRightColor: "#000",
                    borderLeftWidth: 20,
                    borderLeftColor: "#0000AA"
                },
                overlayColor: "transparent",
                drawerActiveBackgroundColor: "#C0C0C0",
                drawerActiveTintColor: "#000",
                swipeEnabled: false,
            }}>
            <Screen
                name="PortugolEcommerce"
                component={RotasPrivadas}
                options={{
                    drawerItemStyle: {
                        borderBottomWidth: 1,
                        borderColor: "#A8A8A8",
                    }
                }}
            />
            <Screen
                name="CriarProdutosScreen"
                component={CriarProdutosScreen}
                options={({ navigation }) => ({
                    drawerIcon: () => (
                        <Icone
                            style={{
                                flexDirection: "row", alignItems: "center", paddingVertical: "3%", width:"100%"
                            }}
                            title="Criar Produtos"
                            source={require("../../assets/icons/criar-produtos-icon.png")}
                            width={30}
                            height={30}
                            textStyle={{ color: '#000', left: '40%' }}
                            onPress={() => navigation.navigate("CriarProdutosScreen")}
                        />
                    ),
                    drawerItemStyle: {
                        borderBottomWidth: 1,
                        borderColor: "#A8A8A8",
                    },
                })}
            />
            <Screen
                name="VisualizarProdutosScreen"
                component={VisualizarProdutosScreen}
                options={({ navigation }) => ({
                    drawerIcon: () => (
                        <Icone
                            style={{
                                flexDirection: "row", alignItems: "center", paddingVertical: "3%", width:"100%"
                            }}
                            title="Visualizar Produtos"
                            source={require("../../assets/icons/visualizar-produtos-icon.png")}
                            width={30}
                            height={30}
                            textStyle={{ color: '#000', left: '40%' }}
                            onPress={() => navigation.navigate("VisualizarProdutosScreen")}
                        />
                    ),
                    drawerItemStyle: {
                        borderBottomWidth: 1,
                        borderColor: "#A8A8A8",
                    },
                })}
            />
            <Screen
                name="AtualizarProdutosScreen"
                component={AtualizaProdutosScreen}
                options={({ navigation }) => ({
                    drawerIcon: () => (
                        <Icone
                            style={{
                                flexDirection: "row", alignItems: "center", paddingVertical: "3%", width:"100%"
                            }}
                            title="Atualizar Produtos"
                            source={require("../../assets/icons/atualizar-produtos-icon.png")}
                            width={30}
                            height={30}
                            textStyle={{ color: '#000', left: '40%' }}
                            onPress={() => navigation.navigate("AtualizarProdutos")}
                        />
                    ),
                    drawerItemStyle: {
                        borderBottomWidth: 1,
                        borderColor: "#A8A8A8",
                    },
                })}
            />
            <Screen
                name="LixeiraScreen"
                component={LixeiraScreen}
                options={({ navigation }) => ({
                    drawerIcon: () => (
                        <Icone
                            style={{
                                flexDirection: "row", alignItems: "center", paddingVertical: "3%", width:"100%"
                            }}
                            title="Lixeira"
                            source={require('../../assets/icons/lixeira-icon.png')}
                            width={30}
                            height={30}
                            textStyle={{ color: '#000', left: '40%' }}
                            onPress={() => navigation.navigate('LixeiraScreen')}
                        />
                    ),
                    drawerItemStyle: {
                        borderBottomWidth: 1,
                        borderColor: "#A8A8A8",

                    },
                })}
            />
            <Screen
                name="CalculadoraScreen"
                component={CalculadoraScreen}
                options={({ navigation }) => ({
                    drawerIcon: () => (
                        <Icone
                            style={{
                                flexDirection: "row", alignItems: "center", paddingVertical: "3%", width:"100%"
                            }}
                            title="Calculadora"
                            source={require("../../assets/icons/calculadora-icon.png")}
                            width={30}
                            height={30}
                            textStyle={{ color: '#000', left: '40%' }}
                            onPress={() => navigation.navigate("Calculadora")}
                        />
                    ),
                    drawerItemStyle: {
                        borderBottomWidth: 1,
                        borderColor: "#A8A8A8",
                    },
                })}
            />
            <Screen
                name="SobreNosScreen"
                component={SobreNosScreen}
                options={({ navigation }) => ({
                    drawerIcon: () => (
                        <Icone
                            style={{
                                flexDirection: "row", alignItems: "center", paddingVertical: "3%", width:"100%"
                            }}
                            title="Sobre Nós"
                            source={require("../../assets/icons/sobre-nos-icon.png")}
                            width={30}
                            height={30}
                            textStyle={{ color: '#000', left: '40%' }}
                            onPress={() => navigation.navigate("SobreNos")}
                        />
                    ),
                    drawerItemStyle: {
                        borderBottomWidth: 1,
                        borderColor: "#A8A8A8",
                    },
                })}
            />
        </Navigator>
    );
};

export default DrawerComponent;
