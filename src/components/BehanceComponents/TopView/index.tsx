
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import perfilFoto from '../../../assets/icon-behance.png'
import Engrenagem from '../../../assets/big-gear.png'
import Dots from '../../../assets/dots.png'
import SimpleButton from '../SimpleButton';
import SelectButton from '../SelectButton';

function TopView() {
    return (
        <View style={styles.geral}>
            <View style={styles.topContainer}>
                <SimpleButton imagem={Engrenagem} />
                <SimpleButton imagem={Dots} />
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.mainCirculo}>
                    <View style={styles.circuloInt}>
                        <Image style={styles.imageStyle} source={perfilFoto} resizeMode='cover' />
                    </View>
                </View>
                <Text style={[styles.texto, { fontSize: 22 }]}>Artur Foster</Text>
                <Text style={styles.texto}>👍0 🧳1 🚪1 </Text>
                <SelectButton nome={'✏ Editar disponibilidade'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    geral: {
        flex: 4,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: '#334'
    },
    bottomContainer: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    mainCirculo: {
        marginTop: -80,
        width: 120,
        height: 120,
        borderRadius: 100,
        padding: 5,
        backgroundColor: '#000'
    },
    circuloInt: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        maxHeight: "95%",
        maxWidth: '95%'
    },
    texto: {
        marginBottom:10,
        color: '#fff'
    }
})

export default TopView