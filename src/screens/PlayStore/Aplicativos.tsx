import { View, StyleSheet, Text, FlatList, ScrollView} from "react-native";
import { aplicativos, aplicativosRecomendados } from "../../data/aplicativos";
import Botao from "../../components/PlayStoreComponents/Botao"
import Card from "../../components/PlayStoreComponents/Card";
import Header from "../../components/PlayStoreComponents/Header";

const data: string[] = ['mais usados', 'categorias', 'recomendados', 'streaming', 'novidades']

const Aplicativos = () => {

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
                    <Text style={styles.texto}>Aplicativos populares: </Text>
                    <Text style={styles.link}>MAIS</Text>
                </View>
                <FlatList
                    style={styles.flatList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={aplicativos}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => <Card app={item} />}
                    contentContainerStyle={{ gap: 20 }}
                />
                <View style={styles.titulo}>
                    <Text style={styles.texto}>Aplicativos recomendados: </Text>
                    <Text style={styles.link}>MAIS</Text>
                </View>
                <FlatList
                    style={styles.flatList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={aplicativosRecomendados}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => <Card app={item} />}
                    contentContainerStyle={{ gap: 20 }}
                />
            </ScrollView>
        </View>);
}

export default Aplicativos

const styles = StyleSheet.create({
    main: {
        flex: 1
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