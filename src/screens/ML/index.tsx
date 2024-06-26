
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import Header from "../../components/MLComponents/Header";
import MeliMaisBar from "../../components/MLComponents/MeliMaisBar";
import Servicos from "../../components/MLComponents/Servicos";
import Propaganda from "../../components/MLComponents/Propaganda";
import Cards from "../../components/MLComponents/Cards";
import CreateAccountCard from "../../components/MLComponents/CreateAccountCard";
import { cardList } from "../../data/cardList";
import SemanaGamer from "../../components/MLComponents/SemanaGamer";


export default function MercadoLivre() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.outHeaderContainer}>
          <SemanaGamer />
          <MeliMaisBar />
          <Servicos />
          <Propaganda />
          <FlatList
            keyExtractor={item => item.title}
            data={cardList}
            renderItem={({ item }) => <Cards {...item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardListContainer}
          />
          <CreateAccountCard />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },
  outHeaderContainer: {
    paddingTop: "31.3%",
  },
  cardListContainer: {
    paddingHorizontal: "3%",
    top: "18%",
    height: 280,
  }
});