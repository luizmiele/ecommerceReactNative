import { useNavigation } from "@react-navigation/native";
import { LoginProps, StackTypes } from "../../routes/stack";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Login() {
    const navigation = useNavigation<StackTypes>();
    const [openCard, setOpenCard] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('user');
    const [password, setPassword] = useState<string>('');

    function handlesignIn() {
        navigation.navigate("Workspace");
    };

    function handleCancel() {
        setOpenCard(false);
    };

    function handleOpenCard() {
        setOpenCard(true);
    };

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
                        value={username}
                        onChangeText={(text: string) => setUsername(text)}
                    />
                    <Text style={styles.label}>Password:</Text>
                    <Input
                        value={password}
                        onChangeText={(text: string) => setPassword(text)}
                        secureTextEntry={true}
                    />
                    <View style={styles.buttonContainer}>
                        <Button style={styles.btn} title="0K" onPress={handlesignIn} />
                        <Button style={styles.btn} title="Cancel" onPress={handleCancel} />
                    </View>
                </View>
            </View>
            ) : (
                <View>
                    <Text style={styles.titleLogo}>PORTUGOL</Text>
                    <Text style={styles.subtitleLogo}>Ecommerce</Text>
                    <View style={{alignItems: "center"}}>
                    <Button
                        title="Login"
                        onPress={handleOpenCard}
                    />
                    </View>
                </View>
            )}
        </View>
    );
}