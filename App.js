import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Stories from './src/components/Stories';
import CircleOfSquares from './src/components/Wheel';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      <CircleOfSquares />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: 'white',
    alignItems: "center",
  }

});
