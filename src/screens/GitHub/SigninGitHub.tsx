import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SigninButton from "../../components/githubComponents/SigninButton";
import Form from "../../components/githubComponents/Form";

const Signin: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.upContainer}>
          <FontAwesome name="github" size={55} color="black" />
        </View>
        <View style={styles.midContainer}>
          <View style={styles.midLogoContainer}>
            <View>
              <FontAwesome name="github" size={50} color="white" />
            </View>
          </View>
          <View style={styles.logoTextContainer}>
            <Text style={styles.logoText}>
              Sign in to <Text style={{ fontWeight: "bold" }}>GitHub</Text>
            </Text>
            <Text style={styles.logoText}>
              to continue to{" "}
              <Text style={{ fontWeight: "bold" }}>GitHub Android</Text>
            </Text>
          </View>
          <Form />
        </View>
        <View style={styles.bottonContainer}>
          <View style={styles.passkey}>
            <SigninButton
              title="Sign in with a passkey"
              textColor="#2078A8"
              backgroundColor="#F4F8F7"
              padding={15}
            />
          </View>
        </View>
        <Image
          source={require("../assets/naotankei.png")}
          style={styles.naotankei}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFFFD",
    paddingLeft: 30,
    paddingRight: 30,
  },
  upContainer: {
    marginTop: "20%",
    marginBottom: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  midContainer: {
    flex: 0.63,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "lightgrey",
    backgroundColor: "#F4F8F7",
    alignItems: "center",
  },
  midLogoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  logoTextContainer: {
    marginTop: 5,
  },
  logoText: {
    textAlign: "center",
    fontSize: 15.5,
    fontWeight: "400",
  },
  bottonContainer: {
    flex: 0.17,
    marginTop: 20,
  },
  passkey: {
    marginBottom: 50,
  },
  naotankei: {
    backgroundColor: "red",
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default Signin;