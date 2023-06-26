import React, { useMemo, useState } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';
import Story from '../Story';
import { LinearGradient } from 'expo-linear-gradient';

export default function Stories() {

  const storyStyleSize = 75;
  const wheelRadius = 540;
  const numStories = 40;
  const radiusDefaultOffset = 12;

  const getStoryPosition = index => {
    const angle = ((numStories - index + radiusDefaultOffset) * 2 * Math.PI) / numStories;
    const x = wheelRadius * Math.cos(angle) - storyStyleSize / 2;
    const y = wheelRadius * Math.sin(angle) - storyStyleSize / 2;
    return { x, y };
  }

  const [storiesPositions, setStoriesPositions] = useState(Array.from({ length: numStories }).map((_, i) => getStoryPosition(i)))
  const [radiusOffset] = useState({ value: 0 })

  const panResponder = useMemo(() =>
    PanResponder.create({

      onStartShouldSetPanResponder: () => true,

      onPanResponderMove: (_, gestureState) => {

        const newRadiusOffset = radiusOffset.value + (-Math.sign(gestureState.dx) * Math.sqrt(gestureState.dx ** 2))

        setStoriesPositions(s => s.map((_, index) => {
          const angle = ((numStories - index + radiusDefaultOffset) * 2 * Math.PI) / numStories;
          const x = wheelRadius * Math.cos(angle + newRadiusOffset / wheelRadius) - storyStyleSize / 2;
          const y = wheelRadius * Math.sin(angle + newRadiusOffset / wheelRadius) - storyStyleSize / 2;
          return { x, y };
        })
        )
      },

      onPanResponderRelease: (_, gestureState) => radiusOffset.value += (-Math.sign(gestureState.dx) * Math.sqrt(gestureState.dx ** 2))
    }),
    []
  );

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

        {storiesPositions.map((item, index) => (
          <View key={index} style={[styles.story, { left: item.x, top: item.y }]}>
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