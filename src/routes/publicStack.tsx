import { NativeStackNavigationProp, NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreenWrapper } from "../screens/Splash/SplashScreenWrapper";
import Login from "../screens/Login";
import { PublicStackNavigation } from "../types";

export type PublicStackTypes = NativeStackNavigationProp<PublicStackNavigation>;
export type SplashPropsProps = NativeStackScreenProps<PublicStackNavigation, "Splash">;
export type LoginProps = NativeStackScreenProps<PublicStackNavigation, "Login">;

const { Navigator, Screen } = createNativeStackNavigator();

const RotasPublicas = () => {
    return (
        <Navigator  initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Screen
                name="Splash"
                component={SplashScreenWrapper}
            />
            <Screen
                name="Login"
                component={Login}
            />
        </Navigator>
    );
};

export default RotasPublicas;