import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import Login from "../screens/Login";
import Workspace from "../screens/Workspace";
import Lixeira from "../screens/Lixeira";
import CriarProdutos from "../screens/CriarProdutos";
import VisualizarProdutos from "../screens/VisualizarProdutos";
import AtualizarProdutos from "../screens/AtualizarProdutos";
import SobreNos from "../screens/SobreNos";


type StackNavigation = {
  Login: undefined;
  Workspace: undefined;
  Lixeira: undefined;
  CriarProdutos: undefined;
  VisualizarProdutos: undefined;
  AtualizarProdutos: undefined;
  SobreNos: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type LoginProps = NativeStackScreenProps<StackNavigation, "Login">;
export type WorkspaceProps = NativeStackScreenProps<StackNavigation, "Workspace">;
export type LixeiraProps = NativeStackScreenProps<StackNavigation, "Lixeira">;
export type CriarProdutosProps = NativeStackScreenProps<StackNavigation, "CriarProdutos">;
export type VisualizarProdutosProps = NativeStackScreenProps<StackNavigation, "VisualizarProdutos">;
export type AtualizarProdutosProps = NativeStackScreenProps<StackNavigation, "AtualizarProdutos">;
export type SobreNosProps = NativeStackScreenProps<StackNavigation, "SobreNos">;

const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();

const StackComponent = () => {
  return (
    <Navigator>
      <Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Screen
        name="Workspace"
        component={Workspace}
      //options={{headerShown: false}}
      />
      <Screen
        name="Lixeira"
        component={Lixeira}
      />
      <Screen
        name="CriarProdutos"
        component={CriarProdutos}
      />
      <Screen
        name="VisualizarProdutos"
        component={VisualizarProdutos}
      />
      <Screen
        name="AtualizarProdutos"
        component={AtualizarProdutos}
      />
      <Screen
        name="SobreNos"
        component={SobreNos}
      />
    </Navigator>
  );
}

export default StackComponent;