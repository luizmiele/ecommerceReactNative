import React from 'react';
import { TextInput, Image, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { InputProps } from '../../types';

export default function SearchBar({ style, ...props }: InputProps) {
  return (
    <View style={[styles.container, style]}>
        <Image
          style={styles.lupa}
          source={require('../../../assets/icons/lupa.png')}
        />
      <TextInput style={styles.input} {...props} />
    </View>
  );
}
