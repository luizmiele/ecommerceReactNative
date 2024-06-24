import { Text, View, Image, Alert, TouchableOpacity } from "react-native";
import Janela from "../../components/Janela";
import { styles } from "./styles";
import Button from "../../components/Button/index";
import ItemFound from "../../components/ItemFound/index";
import { useState } from "react";
import { Modal } from "../../components/Modal";

export default function VisualizarProdutos() {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

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
              <ItemFound onPress={toggleModal}/>
              <ItemFound onPress={toggleModal}/>
              <ItemFound onPress={toggleModal}/>
              <ItemFound onPress={toggleModal}/>
            </View>
          </View>
        </Janela>
      </View>      
      <Modal isModalVisible={isModalVisible} onClose={toggleModal}/>
    </View>
  );
}
