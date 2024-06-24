import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRightColor: '#000',
    borderBottomColor: '#000',
    borderLeftColor: '#FFF',
    borderTopColor: '#FFF',
    backgroundColor: '#FFF',
    width: '100%',
  },
  lupa: {
    height: 30,
    width: 30,
  },
  input: {
    flex: 1,
    height: 30,
    paddingHorizontal: 8,
  },
});