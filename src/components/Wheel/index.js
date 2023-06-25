import React, { useMemo, useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, PanResponder, Text } from 'react-native';
import Story from '../Story';

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

            <Story />

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
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: "green"
  },
  square: {
    position: 'absolute',
    width: 75,
    height: 75,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CircleOfSquares;