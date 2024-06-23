import { Text, View, Image, Alert, TouchableOpacity } from "react-native";
import Janela from "../../components/Janela";
import { styles } from "./styles";
import Button from "../../components/Button/index";
import ItemFound from "../../components/ItemFound/index";

export default function VisualizarProdutos() {
  return (
    <View style={styles.container}>
      <View style={styles.janela}>
        <Janela header="Pesquisar Produtos" height={"90%"} width={"90%"}>
          <View style={styles.todos}>
            <View>
              <Text>TODOS</Text>
            </View>
          </View>
          <View style={styles.geral}>
            <View style={styles.cards}>
              <ItemFound />
              <ItemFound />
              <ItemFound />
              <ItemFound />
            </View>
          </View>
        </Janela>
      </View>
    </View>
  );
}
