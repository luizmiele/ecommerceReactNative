import { View, StyleSheet, Text, FlatList, ScrollView} from "react-native";
import { games, gamesRecomendados } from "../../../data/games";
import Botao from "../../../components/PlayStoreComponents/Botao";
import Card from "../../../components/PlayStoreComponents/Card";
import Header from "../../../components/PlayStoreComponents/Header";

const data: string[] = ['populares', 'categorias', 'recomendados', 'familia', 'novidades']

const Games = () => {

    return (
        <View style={styles.main}>
            <Header/>
            <ScrollView style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => <Botao texto={item} />}
                    contentContainerStyle={{ gap: 10 }}
                />
                <View style={styles.titulo}>
                    <Text style={styles.texto}>Jogos + atualizados: </Text>
                    <Text style={styles.link}>MAIS</Text>
                </View>
                <FlatList
                    style={styles.flatList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={games}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => <Card app={item} />}
                    contentContainerStyle={{ gap: 20 }}
                />
                <View style={styles.titulo}>
                    <Text style={styles.texto}>Jogos recomendados: </Text>
                    <Text style={styles.link}>MAIS</Text>
                </View>
                <FlatList
                    style={styles.flatList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={gamesRecomendados}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => <Card app={item} />}
                    contentContainerStyle={{ gap: 20 }}
                />
            </ScrollView>
        </View>);
}

export default Games

const styles = StyleSheet.create({
    main: {
        flex:1
    },
    header: {
        flex: 0.2
    },
    container: {
        flex: 0.8,
        backgroundColor: '#eeeeee'
    },
    categorias: {
        flex: 1,
    },
    flatList: {
        flexDirection: 'row'
    },
    titulo: {
        flex: 0,
        marginTop: 20,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    link: {
        fontSize: 20,
        color: '#40805e',
        fontWeight: 'bold'
    }
});