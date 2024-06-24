import { Text, View, Image, Alert, TouchableOpacity, FlatList } from "react-native";
import Janela from "../../components/Janela";
import { styles } from "./styles";
import Button from "../../components/Button/index";
import ItemFound from "../../components/ItemFound/index";
import { useEffect, useState } from "react";
import { Modal } from "../../components/Modal";
import { getItens } from "../../services/Api/api";

export default function VisualizarProdutos() {

  type itens={
    id:number|string;
    name:string;
    description:string
    img:string;
    price:number
    type:string
  }
  
  const [isModalVisible, setModalVisible] = useState(false);
  const [lista, setLista] = useState<itens>([])

  async function getAllItens() {
    try {
      const result = await getItens();
      setLista(result.data)
    } catch (err) {
      console.log(err)
    }
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  useEffect(() => {
    getAllItens();
  },[])

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
            <FlatList
            data={lista}
            renderItem={({item}) => <ItemFound onPress={toggleModal} titulo={item.name} imagem={item.img}/>}
            keyExtractor={item => item.id}        
            />
          </View>
        </Janela>
      </View>
      <Modal isModalVisible={isModalVisible} onClose={toggleModal} />
    </View>
  );
}
