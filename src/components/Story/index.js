import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

export default function Story({ name }) {
  return (
    <>
      <LinearGradient
        colors={['#97A3E2', '#3E59E8']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.circle}
      >
        <View style={styles.photo} />
      </LinearGradient>

      <Text style={styles.text}>@{name}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 65,
    height: 65,
    borderRadius: 65,
    justifyContent: "center",
    alignItems: "center"
  },
  photo: {
    width: 60,
    height: 60,
    backgroundColor: "pink",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 60,
  },
  text: {
    textAlign: "center",
    fontSize: 12
  }
});
