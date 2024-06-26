import { Text, View, Image, FlatList } from "react-native";
import Janela from "../../components/Janela";
import ItemFound from "../../components/ItemFound/index";
import { useEffect, useState } from "react";
import { getAllItens, deleteById, restaurarItem } from "../../services/Api/api";
import { itens } from "../../types";
import SearchBar from "../../components/SearchBar";
import { styles } from "./styles"; 


export default function VisualizarProdutos() {

  const [lista, setLista] = useState<itens[]>([])
  const [loading, setLoading] = useState<boolean>(false)


  async function getAll() {
    setLoading(true)
    try {
      const result = await getAllItens();
      let itensDeletado = result?.filter(item => item.status === 'deletado')
      setLista(itensDeletado || [])
    } catch (err) {
      console.log(err)
    }
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }
  useEffect(() => {
    getAll();
  }, [])

  const deleta = (id: string | number) => {
    deleteById(id);
  }

  const restaura = (id: string | number) => {
    restaurarItem(id);
  }

  return (
    <View style={styles.container}>
      <Janela header="Lixeira" height={"90%"} width={"90%"}>
        <View style={styles.todos}>
          <View>
            <Text style={{ textAlign: 'center' }}>EXCLUIDOS</Text>
          </View>
        </View>
        <View style={styles.geral}>
          <SearchBar style={styles.searchBar} />
          {
            (loading ? <View style={{ marginTop: 20, height: '100%' }}><Image style={{ height: 250, width: 250, resizeMode: 'contain' }} source={require('../../../assets/icons/tshell32_170.gif')} /></View> : <FlatList numColumns={(2)}
              data={lista}
              renderItem={({ item }) => <ItemFound 
                description={item.description}
                price={item.price}
                type={item.type}
                titulo={item.name}
                imagem={item.img}
                metadata={item.metadata}
                function1={() => {deleta(item.id)}}
                function2={() => {restaura(item.id)}}
                text1="Excluir"
                text2="Restaurar" status={""}              />}
              keyExtractor={item => item.id.toString()}
            />)
          }
        </View>
      </Janela>
    </View>
  );
}

