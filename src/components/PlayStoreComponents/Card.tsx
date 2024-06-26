import React from 'react';
import { Pressable, Text, Image, StyleSheet, View } from 'react-native';
import { App } from '../../types';

const Card = ({ app }: { app: App }) => {
    return (
        <Pressable style={styles.container}>
            <Image source={{ uri: app.image }} style={styles.appImage} />
            <View style={styles.information}>

                <View style={styles.topInformation}>
                    <Text style={styles.name}>{app.name}</Text>
                    <Image source={require('../../../assets/imgPlayStore/optionsIcon.png')} style={styles.options} />
                </View>

                <View style={styles.bottomInformation}>
                    <Text style={styles.rating}>{app.rating}</Text>
                    <Image source={require('../../../assets/imgPlayStore/starIcon.png')} style={styles.star} />
                </View>
            </View>
        </Pressable>
    );
};

export default Card;

//candycrush

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#d3d3d3'
    },
    appImage: {
        width: 120,
        aspectRatio: 1,
        borderRadius: 10,
    },
    information: {
        flex: 0.5,
    },
    topInformation: {
        flex: 1,
        padding: 5,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    bottomInformation: {
        flex: 1,
        flexDirection: 'row',
        gap: 10
    },
    name: {
        margin: 0
    },
    options: {
        width: '10%',
        height: '90%'
    },
    rating: {
        fontWeight: 'bold'
    },
    star: {
        width: '10%',
        height: '50%',
        marginTop: 5
    }
});
