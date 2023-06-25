import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import Story from '../Story';

export default function Stories() {

  return (
    <LinearGradient
      colors={['#97A3E2', 'white']}
      start={{ x: -2, y: .3 }}
      end={{ x: .6, y: 0 }}
      style={styles.curve}
    />
  )
}

const styles = StyleSheet.create({
  curve: {
    position: "absolute",
    width: 300,
    height: 300,
    top: -80,
    borderRadius: 300,
    transform: [{ scaleX: 2 }],
  }
});
