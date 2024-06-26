import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function SimpleButton(props: any) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.containerInt}>
                <Image style={styles.iconContainer} source={props.imagem}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems:'center',
        justifyContent:'center',
        margin:20
    },
    containerInt: {
        backgroundColor: '#ccc',
        borderRadius: 100,
        alignItems:'center',
        justifyContent:'center',
        padding:8
    },
    iconContainer:{
        maxHeight:20,
        maxWidth:20
    }
})

export default SimpleButton