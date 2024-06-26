import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Btn04 = () => {
return (
    <TouchableOpacity style={styles.quad2} accessibilityLabel="Close Button">
    <FontAwesome6 name="xmark" size={55} color="red" />
    </TouchableOpacity>
);
};

export default Btn04;

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