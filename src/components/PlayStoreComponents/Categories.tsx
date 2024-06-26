  import { Text, Pressable, StyleSheet } from "react-native";
  import { useNavigation } from "@react-navigation/native";

const Categories = ({ texto, endereco, escolhido}: { texto: string, endereco: string, escolhido: boolean } ) => {
    const navigation = useNavigation();

    if(escolhido) {return (
      <Pressable style={styles.container} onPress={() => navigation.navigate(endereco as never)}>
        <Text style={styles.textoEscolhido}>{texto}</Text>
      </Pressable>
    );} else {
      return (<Pressable style={styles.container} onPress={() => navigation.navigate(endereco as never)}>
        <Text style={styles.texto}>{texto}</Text>
      </Pressable>)
    }
  };

export default Categories; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  texto: {
    color: '#c0c0c0', 
    fontSize: 20
  }, 
  textoEscolhido: {
    color: '#fff', 
    fontSize: 20,
    borderBottomWidth: 2, 
    borderColor: '#fff'
  }
});