import { View } from "react-native";
import { styles } from "./styles";
import Icone from "../../components/Icone";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";

export default function Workspace() {
    const navigation = useNavigation<StackTypes>();

    function handleNavigateToLixeira() {
        navigation.navigate("Lixeira");
    }

    function handleNavigateToCriarProdutos() {
        navigation.navigate("CriarProdutos");
    }

    function handleNavigateToVisualizarProdutos() {
        navigation.navigate("VisualizarProdutos");
    }

    function handleNavigateToAtualizarProdutos() {
        navigation.navigate("AtualizarProdutos");
    }

    function handleNavigateToSobreNos() {
        navigation.navigate("SobreNos")
    }

    return (
        <View style={styles.container}>
            <View>
                <Icone
                    style={{ alignItems: "center" }}
                    title="Lixeira"
                    source={require("../../../assets/icons/lixeira-icon.png")}
                    width={50}
                    height={50}
                    textStyle={{ color: "#FFF" }}
                    onPress={handleNavigateToLixeira}

                />
                <Icone
                    style={{ alignItems: "center" }}
                    title="Criar Produtos"
                    source={require("../../../assets/icons/criar-produtos-icon.png")}
                    width={50}
                    height={50}
                    textStyle={{ color: "#FFF" }}
                    onPress={handleNavigateToCriarProdutos}

                />
                <Icone
                    style={{ alignItems: "center" }}
                    title="Visualizar Produtos"
                    source={require("../../../assets/icons/visualizar-produtos-icon.png")}
                    width={50}
                    height={50}
                    textStyle={{ color: "#FFF" }}
                    onPress={handleNavigateToVisualizarProdutos}

                />
                <Icone
                    style={{ alignItems: "center" }}
                    title="Atualizar Produtos"
                    source={require("../../../assets/icons/atualizar-produtos-icon.png")}
                    width={50}
                    height={50}
                    textStyle={{ color: "#FFF" }}
                    onPress={handleNavigateToAtualizarProdutos}

                />
                <Icone
                    style={{ alignItems: "center" }}
                    title="Sobre Nós"
                    source={require("../../../assets/icons/sobre-nos-icon.png")}
                    width={50}
                    height={50}
                    textStyle={{ color: "#FFF" }}
                    onPress={handleNavigateToSobreNos}

                />
            </View>
            </View>
            );
}