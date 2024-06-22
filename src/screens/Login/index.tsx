import { useNavigation } from "@react-navigation/native";
import { LoginProps, StackTypes } from "../../routes/stack";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Login() {
    const navigation = useNavigation<StackTypes>();

    const [username, setUsername] = useState<string>('user');
    const [password, setPassword] = useState<string>('');

    function handlesignIn() {

    };

    function handleCancel() {

    };

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
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
                        <Button style={styles.btn} title="0K" onPress={handlesignIn}/>
                        <Button style={styles.btn} title="Cancel" onPress={handleCancel}/>
                    </View>
                </View>
            </View>
        </View>
    );
}