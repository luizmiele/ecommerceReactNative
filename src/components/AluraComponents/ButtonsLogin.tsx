import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export const ButtonsLogin = () => {
    return (
        <>
            <TouchableOpacity style={styles.entrarButton} >
                <Text style={styles.linkEntrarButton}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton} >
                <Text style={styles.linkGoogleButton}>ENTRAR COM O GOOGLE</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={styles.linkEsqueciSenha}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    entrarButton: {
        backgroundColor: "#03544C",
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 35,

    },
    linkEntrarButton: {
        color: "#01080E",
        fontWeight: "bold",
    },
    googleButton: {
        backgroundColor: "#01080E",
        borderWidth: 1.5,
        borderColor: "#F16165",
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    linkGoogleButton: {
        color: "#fff",
        fontWeight: "bold",
    },
    linkEsqueciSenha: {
        marginTop: 50,
        alignSelf: "center",
        color: "#fff",
        textDecorationLine: "underline",
        fontWeight: "bold",
        
    },
})
