
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import TopView from '../../components/BehanceComponents/TopView';
import BotView from '../../components/BehanceComponents/BotView';
import BarraScroll from "../../components/BehanceComponents/BarraScroll";
import BigBlueButton from "../../components/BehanceComponents/BigBlueButton";
import MeuFooter from "../../components/BehanceComponents/MeuFooter";

export default function Behance() {
  return (
    <View style={styles.geral}>
      <TopView />
      <BarraScroll />
      <BotView />
      <BigBlueButton />
      <MeuFooter />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({

  geral: {
    flex: 1
  }
});
