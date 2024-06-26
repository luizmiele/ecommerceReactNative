import React from 'react'
import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Btn03 = () => {
  return (
    <>
    <TouchableOpacity style={styles.quad1}>
            <FontAwesome name="undo" size={35} color="yellow" />
        </TouchableOpacity>
    </>
  )
}

export default Btn03

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