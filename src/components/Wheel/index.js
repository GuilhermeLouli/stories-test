import React, { useMemo, useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, PanResponder, Text } from 'react-native';

const CircleOfSquares = () => {
  const { width, height } = Dimensions.get('window');
  const squareSize = 75; // Change this value to adjust the size of the squares
  const radius = 540; // Change this value to adjust the radius of the circle
  const numSquares = 40;

  const [squarePositions, setSquarePositions] = useState(() =>
    Array.from({ length: numSquares }).map((_, index) => getSquarePosition(index))
  );

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
          setSquarePositions((prevPositions) => {
            const radiusOffset = Math.sqrt(gestureState.dx ** 2 + gestureState.dy ** 2);
            const updatedPositions = prevPositions.map((position, index) => {
              const angle = (index * 2 * Math.PI) / numSquares;
              const x = radius * Math.cos(angle + radiusOffset / radius) - squareSize / 2;
              const y = radius * Math.sin(angle + radiusOffset / radius) - squareSize / 2;
              return { x, y };
            });
            return updatedPositions;
          });
        },
      }),
    []
  );

  useEffect(() => {
    return () => {
      setSquarePositions((prevPositions) =>
        prevPositions.map((_, index) => getSquarePosition(index))
      );
    };
  }, []);

  function getSquarePosition(index) {
    const angle = (index * 2 * Math.PI) / numSquares;
    const x = radius * Math.cos(angle) - squareSize / 2;
    const y = radius * Math.sin(angle) - squareSize / 2;
    return { x, y };
  }

  return (
    <>
      <View style={styles.centerButton} />
      <View style={styles.container} {...panResponder.panHandlers}>
        {squarePositions.map(({ x, y }, index) => (
          <View key={index} style={[styles.square, { left: x, top: y }]}>

            <View style={styles.circle}>
              <View style={styles.circle2}>
                <View style={styles.photo} />
              </View>
            </View>

            <Text style={styles.text}>@derec_collins</Text>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -380
  },
  centerButton: {
    top: -25,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "green"
  },
  square: {
    position: 'absolute',
    width: 75,
    height: 75,
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

export default CircleOfSquares;