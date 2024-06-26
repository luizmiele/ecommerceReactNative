import { TouchableOpacity, Text, Image, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { itemFoundProps } from "../../types";
import { Modal } from "../../components/Modal";
import { StackTypes } from "../../routes/stack";
import { useNavigation } from "@react-navigation/native";



export default function ItemFound({ ...rest }: itemFoundProps) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  const navigation = useNavigation<StackTypes>();

  function handlesignIn() {
      navigation.navigate("AtualizarProdutos");
  };
  
  return (
    <TouchableOpacity onPress={toggleModal}>
      <View style={styles.geral}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imagemCentro}
            source={{ uri: rest.imagem }}
          />
        </View>
        <View style={styles.titulo}>
          <Text>{rest.titulo}</Text>
        </View>
      </View>
      <Modal description={rest.description} imagem={rest.imagem} titulo={rest.titulo} price={rest.price} type={rest.type} metadata={rest.metadata} isModalVisible={isModalVisible} onClose={toggleModal} button1={rest.text1 ||'Cancelar'} button2={rest.text2 || 'Editar'} function1={rest.function1 ||toggleModal} function2={rest.function2 || handlesignIn}/>
    </TouchableOpacity>

  );
}
