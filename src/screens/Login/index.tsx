import { View, Text, Image, Alert } from "react-native";
import { useState, useContext } from "react";
import { AuthCtx } from "../../contexts/AuthCtx";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { styles } from "./styles";
import Mensagem from "../../components/Mensagem";

export default function Login() {
    const [openCard, setOpenCard] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const { login, loading } = useContext(AuthCtx);

    async function handlesignInPress() {
        try {
            const logado = await login(email, senha);
            if (logado) {
                //navigation.navigate("Workspace");
            } else {
                setError(true);
            }
        } catch (error) {
            Alert.alert("Erro de login", "Ocoreu um erro ao tentar efetuar login");
        }
    };
    function handleCancel() {
        setOpenCard(false);
    };

    function handleOpenCard() {
        setOpenCard(true);
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <Image
                    source={require("../../../assets/icons/loading-icon.gif")}
                />
            </View>
        );
    } else {

        return (
            <View style={styles.container}>
                {openCard ? (<View style={styles.cardContainer}>
                    <View style={styles.headerCardContainer}>
                        <View style={styles.headerCardContent}>
                            <Text style={styles.title}>Enter Password</Text>
                            <Image
                                source={require("../../../assets/icons/botao-fechar.png")} />
                        </View>
                    </View>
                    <View style={styles.logoContainer}>
                        <Text style={styles.titleLogo}>PORTUGOL</Text>
                        <Text style={styles.subtitleLogo}>Ecommerce</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Select user name:</Text>
                        <Input
                            value={email}
                            onChangeText={(text: string) => setEmail(text)}
                        />
                        <Text style={styles.label}>Password:</Text>
                        <Input
                            value={senha}
                            onChangeText={(text: string) => setSenha(text)}
                            secureTextEntry
                        />
                        <View style={styles.buttonContainer}>
                            <Button style={styles.btn} title="0K" onPress={handlesignInPress} />
                            <Button style={styles.btn} title="Cancel" onPress={handleCancel} />
                        </View>
                    </View>
                </View>
                ) : (
                    <View>
                        <Text style={styles.titleLogo}>PORTUGOL</Text>
                        <Text style={styles.subtitleLogo}>Ecommerce</Text>
                        <View style={{ alignItems: "center" }}>
                            <Button
                                title="Login"
                                onPress={handleOpenCard}
                            />
                        </View>
                    </View>
                )}
                <Mensagem titulo="Error" content={"Email e/ou senha inválidos"} ligado={error} onPress={() => setError(false)} error />
            </View>
        );
    }
}