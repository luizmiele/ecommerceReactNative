import { DrawerContentScrollView, DrawerItemList, DrawerNavigationProp, DrawerScreenProps, createDrawerNavigator, DrawerContentComponentProps } from "@react-navigation/drawer";
import RotasPrivadas from "./privateStack";
import { AuthCtx } from "../contexts/AuthCtx";
import { useContext } from "react";
import { View } from "react-native";
import Icone from "../components/Icone";
import { DrawerNavigation } from "../types";

export type DrawerTypes = DrawerNavigationProp<DrawerNavigation>;
export type LogoutProps = DrawerScreenProps<DrawerNavigation, "LogOFF">;
export type PortugolEcommerceProps = DrawerScreenProps<DrawerNavigation, "PortugolEcommerce">;

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
                component={RotasPrivadas}
                options={{
                    drawerItemStyle: {
                        borderBottomWidth: 1,
                        borderColor: "#A8A8A8",
                    }
                }}
            />
        </Navigator>
    );
};

export default DrawerComponent;
