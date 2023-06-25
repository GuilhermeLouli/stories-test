import { StyleSheet, Text, View } from 'react-native';

export default function Story({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <View style={styles.circle2} >
          <View style={styles.photo} />
        </View>
      </View>
      <Text style={styles.text}>@{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 75,
    alignItems: "center"
  },
  circle: {
    width: 70,
    height: 70,
    backgroundColor: "#5F85DC",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center"
  },
  circle2: {
    width: 65,
    height: 65,
    backgroundColor: "white",
    borderRadius: 65,
    justifyContent: "center",
    alignItems: "center"
  },
  photo: {
    width: 60,
    height: 60,
    backgroundColor: "pink",
    borderRadius: 30
  },
  text: {
    textAlign: "center",
    fontSize: 12
  }
});
