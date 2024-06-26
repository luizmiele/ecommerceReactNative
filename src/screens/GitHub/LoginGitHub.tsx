import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Linking } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Button from "../../components/githubComponents/Button";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  Signin: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;
type LoginScreenRouteProp = RouteProp<RootStackParamList, "Login">;

interface Props {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
}

const openExternalLink = (url: string) => {
  Linking.openURL(url).catch(err => console.error("Pagina não pode ser carregada.", err));
};

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upContainer}>
        <FontAwesome name="github" size={100} color="black" />
      </View>
      <View style={styles.bottonContainer}>
        <Button
          title="ENTRAR COM GITHUB"
          textColor="#FFFFFF"
          backgroundColor="#000000"
          onPress={() => navigation.navigate("Signin")} 
        />
        <View style={styles.midTextContainer}>
          <Text style={styles.midText}>
            Use sua conta pessoal ou a conta do GitHub{" "}
          </Text>
          <Text style={styles.midText}>
            Enterprise Cloud para entrar no GitHub.com{" "}
          </Text>
        </View>
        <Button
          title="ENTRAR COM GITHUB ENTERPRISE"
          textColor="#000000"
          backgroundColor="#FFFFFF"
          onPress={() => openExternalLink("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}
        />
        <View style={styles.politicas}>
          <Text style={styles.normal}> Ao assinar, você aceita nossos </Text>
          <Text style={styles.links}>Termos de uso</Text>
          <Text style={styles.normal}> e </Text>
          <Text style={styles.links}>Política de Privacidade.</Text>
        </View>
        <View style={styles.problemasContainer}>
          <Text style={styles.links}>Problemas para entrar?</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1F2",
  },
  upContainer: {
    flex: 0.55,
    alignItems: "center",
    justifyContent: "center",
    top: 50,
  },
  bottonContainer: {
    flex: 0.45,
    alignItems: "center",
  },
  midTextContainer: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    marginBottom: 25,
  },
  midText: {
    width: "100%",
    textAlign: "center",
    color: "#747883",
    fontSize: 14,
    fontWeight: "400",
  },
  politicas: {
    marginTop: 15,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
  },
  normal: {
    color: "#747883",
    fontWeight: "500",
  },
  links: {
    color: "#2078A8",
    textDecorationLine: "underline",
    fontWeight: "500",
  },
  problemasContainer: {
    marginTop: 30,
  },
  buttons: {
    width: "90%",
  },
});

export default Login;
