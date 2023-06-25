import React, { useMemo, useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, PanResponder, Text } from 'react-native';
import Story from '../Story';
import { LinearGradient } from 'expo-linear-gradient';

export default function Stories() {
  const storySize = 75;
  const wheelRadius = 540;
  const numStories = 40;
  const offset = 12;

  const [storiesPositions, setStoriesPositions] = useState(() =>
    Array.from({ length: numStories }).map((_, index) => getStoryPosition(index))
  );

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
          setStoriesPositions((prevPositions) => {
            const radiusOffset = Math.sqrt(gestureState.dx ** 2 + gestureState.dy ** 2);

            const updatedPositions = prevPositions.map((position, index) => {
              const angle = ((numStories - index + offset) * 2 * Math.PI) / numStories;
              const x = wheelRadius * Math.cos(angle + radiusOffset / wheelRadius) - storySize / 2;
              const y = wheelRadius * Math.sin(angle + radiusOffset / wheelRadius) - storySize / 2;
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
      setStoriesPositions((prevPositions) =>
        prevPositions.map((_, index) => getStoryPosition(index))
      );
    };
  }, []);

  function getStoryPosition(index) {
    const angle = ((numStories - index + offset) * 2 * Math.PI) / numStories;
    const x = wheelRadius * Math.cos(angle) - storySize / 2;
    const y = wheelRadius * Math.sin(angle) - storySize / 2;
    return { x, y };
  }

  return (
    <>
      <LinearGradient
        colors={['#97A3E2', 'white']}
        start={{ x: -2, y: 0.3 }}
        end={{ x: 0.6, y: 0 }}
        style={styles.backgroundGradient}
      />

      <View style={styles.centerButton} />
      <View style={styles.container} {...panResponder.panHandlers}>
        {storiesPositions.map(({ x, y }, index) => (
          <View key={index} style={[styles.story, { left: x, top: y }]}>
            <Story name={index} />
          </View>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    position: 'absolute',
    width: 300,
    height: 300,
    top: -80,
    borderRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  container: {
    position: 'absolute',
    top: -380,
  },
  centerButton: {
    top: -25,
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: 'green',
  },
  story: {
    position: 'absolute',
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});