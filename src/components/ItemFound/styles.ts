import { StyleSheet } from "react-native"

export const styles = StyleSheet.create ({
geral:{
    backgroundColor: "#C3C7CB",
    height: 100,
    width: 150,
    borderWidth: 2,
    minHeight:'10%',
    minWidth:'20%',
    borderLeftColor: "#FFF",
    borderTopColor: "#FFF",
    paddingHorizontal: 1,
},
imgContainer: {
    top: 5,
    alignSelf: "center",
    height: 70,
    width: 140,
    borderWidth: 2,
    borderTopColor: "#000",
    borderLeftColor: "#000",
    borderRightColor: "#FFF",
    borderBottomColor: "#FFF",
    backgroundColor:'#00fc',
    alignItems: "center",
    justifyContent: "center",
},
imagemCentro: {
    resizeMode:'contain',
    height: 66,
    width: 136, 
},
titulo: {
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
},
})