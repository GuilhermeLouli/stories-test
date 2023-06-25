import { StyleSheet, View } from 'react-native';
import { Svg, Circle, Rect, Mask } from 'react-native-svg';

export default function Header() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.left}>
          <View style={styles.profilePicture}></View>
        </View>
        <View style={styles.right}>
          <View style={styles.notification}></View>
          <View style={styles.notification}></View>
        </View>
      </View>


      <Svg height="90" width="100%">
        <Mask id="mask">
          <Rect x="0" y="0" width="100%" height="100" fill="white" />
          <Circle cx="50%" cy="90" r="34" fill="black" />
        </Mask>
        <Rect x="0" y="0" width="100%" height="100" fill="white" mask="url(#mask)">
        </Rect >
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
    width: "100%",
    height: 100,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center"
  },
  left: {
    flexDirection: "row",
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  right: {
    flexDirection: "row",
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  profilePicture: {
    width: 45,
    height: 45,
    backgroundColor: "red",
    marginLeft: 20,
    borderRadius: 45
  },
  notification: {
    width: 45,
    height: 45,
    backgroundColor: "orange",
    marginRight: 20,
    borderRadius: 45
  }
});
