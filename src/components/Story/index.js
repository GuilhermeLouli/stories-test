import { StyleSheet, Text, View } from 'react-native';

export default function Story({ name }) {
  return (
    <>
      <View style={styles.circle}>
        <View style={styles.circle2}>
          <View style={styles.photo} />
        </View>
      </View>

      <Text style={styles.text}>@derec_collins</Text>
    </>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 65,
    height: 65,
    backgroundColor: "#5F85DC",
    borderRadius: 65,
    justifyContent: "center",
    alignItems: "center"
  },
  circle2: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
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
