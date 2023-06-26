import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Stories from './src/components/Stories';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  }
});
