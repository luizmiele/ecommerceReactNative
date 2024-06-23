import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import Login from "../screens/Login";
import Workspace from "../screens/Workspace";
import Lixeira from "../screens/Lixeira";
import CriarProdutos from "../screens/CriarProdutos";
import VisualizarProdutos from "../screens/VisualizarProdutos";
import AtualizarProdutos from "../screens/AtualizarProdutos";
import SobreNos from "../screens/SobreNos";
import { SplashScreenWrapper } from "../screens/Splash/SplashScreenWrapper";
import PortugolStudio from "../screens/PortugolStudio";
import Calculadora from "../screens/Calculadora";


type StackNavigation = {
  Splash: undefined;
  Login: undefined;
  Workspace: undefined;
  Lixeira: undefined;
  CriarProdutos: undefined;
  VisualizarProdutos: undefined;
  AtualizarProdutos: undefined;
  SobreNos: undefined;
  PortugolStudio: undefined;
  Calculadora: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type SplashProps = NativeStackScreenProps<StackNavigation, "Splash">;
export type LoginProps = NativeStackScreenProps<StackNavigation, "Login">;
export type WorkspaceProps = NativeStackScreenProps<StackNavigation, "Workspace">;
export type LixeiraProps = NativeStackScreenProps<StackNavigation, "Lixeira">;
export type CriarProdutosProps = NativeStackScreenProps<StackNavigation, "CriarProdutos">;
export type VisualizarProdutosProps = NativeStackScreenProps<StackNavigation, "VisualizarProdutos">;
export type AtualizarProdutosProps = NativeStackScreenProps<StackNavigation, "AtualizarProdutos">;
export type SobreNosProps = NativeStackScreenProps<StackNavigation, "SobreNos">;
export type PortugolStudioProps = NativeStackScreenProps<StackNavigation, "PortugolStudio">;
export type CalculadoraProps = NativeStackScreenProps<StackNavigation, "Calculadora">;

const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();

const StackComponent = () => {
  return (
    <Navigator>
      <Screen
        name="Splash"
        component={SplashScreenWrapper}
        options={{ headerShown: false }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Screen
        name="Workspace"
        component={Workspace}
        options={{headerShown: false}}
      />
      <Screen
        name="Lixeira"
        component={Lixeira}
        options={{headerShown: false}}
      />
      <Screen
        name="CriarProdutos"
        component={CriarProdutos}
        options={{headerShown: false}}
      />
      <Screen
        name="VisualizarProdutos"
        component={VisualizarProdutos}
        options={{headerShown: false}}
      />
      <Screen
        name="AtualizarProdutos"
        component={AtualizarProdutos}
        options={{headerShown: false}}
      />
      <Screen
        name="SobreNos"
        component={SobreNos}
        options={{headerShown: false}}
      />
      <Screen
        name="PortugolStudio"
        component={PortugolStudio}
        options={{headerShown: false}}
      />
      <Screen
        name="Calculadora"
        component={Calculadora}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}

export default StackComponent;