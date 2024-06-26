import React from 'react'
import { StyleSheet, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather"

const Btn01 = () => {
  return (
    <>
    <TouchableOpacity style={styles.mensagem}>
            <Feather name="message-circle" size={50} color="gray" />
        </TouchableOpacity>
    </>
  )
}

export default Btn01

const styles = StyleSheet.create({

mensagem: {
    height: "48%",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "white",
    elevation: 8,
  },

});