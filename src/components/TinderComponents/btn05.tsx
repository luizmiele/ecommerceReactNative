import React from 'react'
import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Btn05 = () => {
  return (
    <>
    <TouchableOpacity style={styles.quad1}>
            <FontAwesome name="star" size={35} color="blue" />
        </TouchableOpacity>
    </>
  )
}

export default Btn05

const styles = StyleSheet.create({

    quad1: {
        height: "48%",
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "white",
        elevation: 8,
      },

});