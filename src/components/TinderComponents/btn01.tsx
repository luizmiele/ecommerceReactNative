import React from 'react'
import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Btn01 = () => {
  return (
    <>
    <TouchableOpacity style={styles.perfil}>
            <FontAwesome name="user" size={50} color="gray" />
        </TouchableOpacity>
    </>
  )
}

export default Btn01

const styles = StyleSheet.create({

perfil: {
    height: "48%",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "white",
    elevation: 8,
  },

});