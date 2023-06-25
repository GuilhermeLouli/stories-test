import { StyleSheet, View } from 'react-native';
import { Svg, Circle, Rect, Mask } from 'react-native-svg';

export default function Header() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.header_left}>
          <View style={styles.header_left_button}></View>
        </View>

        <View style={styles.header_right}>
          <View style={styles.header_right_button}></View>
          <View style={styles.header_right_button}></View>
        </View>

      </View>

      <Svg width="100%" height="90" >
        <Mask id="mask">
          <Rect width="100%" height="100%" fill="white" />
          <Circle cx="50%" cy="100%" r="34" fill="black" />
        </Mask>
        <Rect width="100%" height="100%" fill="white" mask="url(#mask)" />
      </Svg>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    width: "100%",
  },
  header: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    height: 100,
    flexDirection: "row",
  },
  header_left: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  header_right: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  header_left_button: {
    width: 40,
    height: 40,
    marginLeft: 20,
    backgroundColor: "red",
    borderRadius: 40
  },
  header_right_button: {
    width: 40,
    height: 40,
    marginRight: 20,
    backgroundColor: "orange",
    borderRadius: 40
  }
});
