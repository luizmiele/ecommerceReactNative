import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import Workspace from "../screens/Workspace";
import Lixeira from "../screens/Lixeira";
import CriarProdutos from "../screens/CriarProdutos";
import VisualizarProdutos from "../screens/VisualizarProdutos";
import AtualizarProdutos from "../screens/AtualizarProdutos";
import SobreNos from "../screens/SobreNos";
import PortugolStudio from "../screens/PortugolStudio";
import Calculadora from "../screens/Calculadora";
import Tinder from "../screens/Tinder"
import PlayStore from "../screens/PlayStore/Aplicativos"
import Games from "../screens/PlayStore/Games"
import GitHubLogin from "../screens/GitHub/GitHubLogin";
import GitHubSignIn from "../screens/GitHub/GitHubSignIn";
import MercadoLivre from "../screens/ML"
import Behance from "../screens/Behance";
import Alura from "../screens/Alura";
import { PrivateStackNavigation } from "../types";


export type PrivateStackTypes = NativeStackNavigationProp<PrivateStackNavigation>;

const { Navigator, Screen } = createNativeStackNavigator<PrivateStackNavigation>();

const RotasPrivadas = () => {
  return (
    <Navigator initialRouteName="Workspace" screenOptions={{ headerShown: false }}>
      <Screen
        name="Workspace"
        component={Workspace}
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
      <Screen
        name="PortugolStudio"
        component={PortugolStudio}
      />
      <Screen
        name="Calculadora"
        component={Calculadora}
      />
      <Screen
        name="Tinder"
        component={Tinder}
      />
      <Screen
        name="PlayStore"
        component={PlayStore}
      />
      <Screen
        name="Games"
        component={Games}
      />
      <Screen
        name="GitHubLogin"
        component={GitHubLogin}
      />
      <Screen
        name="GitHubSignIn"
        component={GitHubSignIn}
      />
      <Screen
        name="MercadoLivre"
        component={MercadoLivre}
      />
      <Screen
        name="Behance"
        component={Behance}
      />
      <Screen
        name="Alura"
        component={Alura}
      />
    </Navigator>
  );
}

export default RotasPrivadas;
