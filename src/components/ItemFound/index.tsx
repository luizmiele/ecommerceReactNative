import { TouchableOpacity, Text, Image, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { itemFoundProps } from "../../types";
import { Modal } from "../../components/Modal";

export default function ItemFound({ onPress, titulo, imagem, ...rest }: itemFoundProps) {
  // const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible)
  // }

  return (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.geral}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imagemCentro}
            source={{uri:imagem}}
          />
        </View>
        <View style={styles.titulo}>
          <Text>{titulo}</Text>
        </View>
      </View>
      {/* <Modal isModalVisible={isModalVisible} onClose={toggleModal} /> */}
    </TouchableOpacity>
    
  );
}
