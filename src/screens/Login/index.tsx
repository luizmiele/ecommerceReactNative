import { useNavigation } from "@react-navigation/native";
import { LoginProps, StackTypes } from "../../routes/stack";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Login() {
    const navigation = useNavigation<StackTypes>();

    const [username, setUsername] = useState<string>('user');
    const [password, setPassword] = useState<string>('');

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
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.btn}>
                            <Text>0K</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}