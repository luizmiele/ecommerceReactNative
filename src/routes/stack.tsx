import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import Sobre from "../screens/Sobre";

type StackNavigation = {
  Login: undefined;
  Dashboard: undefined;
  Sobre: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type LoginProps = NativeStackScreenProps<StackNavigation, "Login">;
export type DashboardProps = NativeStackScreenProps<StackNavigation, "Dashboard">;
export type SobreProps = NativeStackScreenProps<StackNavigation, "Sobre">;

const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();

const StackComponent = () => {
  return (
    <Navigator>
      <Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Screen
        name="Dashboard"
        component={Dashboard}
      />
      <Screen
        name="Sobre"
        component={Sobre}
      />
    </Navigator>
  );
}

export default StackComponent;