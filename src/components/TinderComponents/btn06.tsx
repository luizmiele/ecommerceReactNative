import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Btn06 = () => {
  return (
    <TouchableOpacity style={styles.quad2}>
    <FontAwesome name="heart" size={48} color="green" />
    </TouchableOpacity>
  );
};

export default Btn06;

const styles = StyleSheet.create({
  quad2: {
    height: '68%',
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});