import React from 'react';
import { View, StyleSheet, TextInput, FlatList } from 'react-native';
import Categories from './Categories';
import { useRoute } from '@react-navigation/native';

type Categoria = {
    nome: string,
    endereco: string
}

const categorias: Categoria[] = [
    {
        nome: 'APLICATIVOS',
        endereco: 'Aplicativos'
    },
    {
        nome: 'GAMES',
        endereco: 'Games'
    }
];

const Header = () => {
    const navigation = useRoute();

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Google Play'
            />
            <FlatList
                style={styles.categorias}
                data={categorias}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    const escolhido = navigation.name === item.endereco;
                    return <Categories
                        texto={item.nome}
                        endereco={item.endereco}
                        escolhido={escolhido}
                    />;
                }}
                keyExtractor={(item) => item.nome}
                contentContainerStyle={{ gap: 30 }}
            />
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 0.20,
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: "#109d58"
    },
    input: {
        padding: 10,
        backgroundColor: '#fff',
    },
    categorias: {
        alignSelf: 'center'
    }
});