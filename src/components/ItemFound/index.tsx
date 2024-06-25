import { TouchableOpacity, Text, Image, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { itemFoundProps } from "../../types";
import { Modal } from "../../components/Modal";

export default function ItemFound({...rest }: itemFoundProps) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }
  
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
      <Modal description={rest.description} imagem={rest.imagem} titulo={rest.titulo} price={rest.price} type={rest.type} metadata={rest.metadata} isModalVisible={isModalVisible} onClose={toggleModal} />
    </TouchableOpacity>

  );
}
