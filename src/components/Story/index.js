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
        <View style={styles.circle2}>
          <View style={styles.photo} />
        </View>
      </LinearGradient>

      <Text style={styles.text}>@derec_collins</Text>
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
  circle2: {
    width: 59,
    height: 59,
    borderRadius: 59,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  photo: {
    width: 55,
    height: 55,
    backgroundColor: "pink",
    borderRadius: 55
  },
  text: {
    textAlign: "center",
    fontSize: 12
  }
});
