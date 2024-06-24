import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { styles } from "./styles";
import SearchBar from "../../components/SearchBar/index";

export default function PortugolStudio() {
    
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <SearchBar/>
      </View>
    </View>
  );
}
