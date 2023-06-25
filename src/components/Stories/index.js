import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import Story from '../Story';

export default function Stories() {

  return (
    <>
      <LinearGradient
        colors={['#ADC0ED', 'white']}
        start={{ x: -1, y: .3 }}
        end={{ x: .6, y: 0 }}
        style={styles.curve}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  curve: {
    position: "absolute",
    width: 300,
    height: 300,
    top: -80,
    borderRadius: 300,
    backgroundColor: 'blue',
    transform: [{ scaleX: 2 }],
  }
});
