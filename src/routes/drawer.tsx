import {DrawerNavigationProp, DrawerScreenProps, createDrawerNavigator } from "@react-navigation/drawer";
import StackComponent from "./stack";
import LoginScreen from "../screens/Login";
import { Image } from "react-native";

type DrawerNavigation = {
    PortugolEcommerce: undefined;
    LogOFF: undefined;
};

export type DrawerTypes = DrawerNavigationProp<DrawerNavigation>;
export type LogoutProps = DrawerScreenProps<DrawerNavigation, "LogOFF">;
export type PortugolEcommerceProps = DrawerScreenProps<DrawerNavigation, "PortugolEcommerce">;

const { Navigator, Screen } = createDrawerNavigator<DrawerNavigation>();

const DrawerComponent = () => {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            drawerStyle: {
                bottom: 40,
                backgroundColor: "#C0C0C0",
                width: "56%",
                borderRightWidth: 1,
                borderRightColor: "#000",
                borderLeftWidth: 20,
                borderLeftColor: "#0000AA"
            },
            drawerContentContainerStyle: {
                flexGrow: 1,
                justifyContent: 'space-between',
            },
            overlayColor: "transparent",
            drawerActiveBackgroundColor: "#C0C0C0",
            drawerActiveTintColor: "#000",
            swipeEnabled: false,
        }}>
            <Screen
                name="PortugolEcommerce"
                component={StackComponent}
                options={{
                    drawerLabelStyle: {
                        fontWeight: "bold",
                        fontSize: 14,
                    },
                    drawerItemStyle: {
                        borderBottomWidth: 1,
                        borderColor: "#C8C8C8",
                    }
                }}
            />
            <Screen
                name="LogOFF"
                component={LoginScreen}
                options={{
                    drawerIcon: () => (
                        <Image
                            source={require('../../assets/icons/logOff-icon.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                    drawerItemStyle: {
                        borderTopWidth: 1,
                        borderColor: "#000",
                    }
                }}
            />
        </Navigator>
    );
};

export default DrawerComponent;
