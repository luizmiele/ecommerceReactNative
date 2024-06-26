import React from 'react'
import { StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Btn07 = () => {
  return (
    <>
    <TouchableOpacity style={styles.quad1}>
            <MaterialCommunityIcons name="lightning-bolt" size={35} color="purple" />
        </TouchableOpacity>
    </>
  )
}

export default Btn07

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