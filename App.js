import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SignWave = () => {
  const wavePath = "M0,100 Q50,50 100,100 T200,100";
  
  return (
      <Svg height="200" width="200">
        <Path
          d={wavePath}
          fill="transparent"
          stroke="blue"
          strokeWidth="20"
        />
      </Svg>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Banana</Text>
      <SignWave/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
