import { Text, View, Image, Alert, TouchableOpacity, FlatList } from "react-native";
import Janela from "../../components/Janela";
import { styles } from "./styles";
import Button from "../../components/Button/index";
import ItemFound from "../../components/ItemFound/index";
import { useEffect, useState } from "react";
import { Modal } from "../../components/Modal";
import { getItens } from "../../services/Api/api";
import { itens } from "../../types";
import SearchBar from "../../components/SearchBar";

export default function VisualizarProdutos() {
  
  const [lista, setLista] = useState<itens>([])
  const [loading,setLoading] = useState<boolean>(false)

  async function getAllItens() {
    setLoading(true)
    try {
      const result = await getItens();
      setLista(result?.data)
    } catch (err) {
      console.log(err)
    }
    setTimeout(() => {
      setLoading(false)
    }, 1700);

  }
  useEffect(() => {
    getAllItens();
  },[])

  return (
    <View style={styles.container}>      
        <Janela header="Pesquisar Produtos" height={"90%"} width={"90%"}>
          <View style={styles.todos}>
            <View>
              <Text style={{textAlign:'center'}}>TODOS</Text>
            </View>
            
          </View>
          <View style={styles.geral}>
            <SearchBar style={styles.searchBar}/>
            {
            (loading?<Text>Loading...</Text>:<FlatList numColumns={(2)}
            data={lista}
            renderItem={({item}) => <ItemFound description={item.description} price={item.price} type={item.type} titulo={item.name} imagem={item.img}/>}
            keyExtractor={item => item.id}        
            />)
            }
          </View>
        </Janela>      
    </View>
  );
}
