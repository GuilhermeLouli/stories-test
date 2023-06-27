import React, { useMemo, useState } from 'react';
import { View, StyleSheet, PanResponder, FlatList } from 'react-native';
import Story from '../Story';
import { LinearGradient } from 'expo-linear-gradient';

export default function Stories() {

  const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    { id: '4', text: 'Item 4' },
    { id: '5', text: 'Item 5' },
    { id: '6', text: 'Item 6' },
    { id: '7', text: 'Item 7' },
    { id: '8', text: 'Item 8' },
    { id: '9', text: 'Item 9' },
    { id: '10', text: 'Item 10' },
    { id: '11', text: 'Item 11' },
  ];

  return (
    <>
      <LinearGradient
        colors={['#97A3E2', 'white']}
        start={{ x: -2, y: 0.3 }}
        end={{ x: 0.6, y: 0 }}
        style={styles.backgroundGradient}
      />

      <View style={styles.centerButton} />

      <FlatList
        data={data}
        horizontal={true}
        keyExtractor={i => i.id}
        contentContainerStyle={{ paddingLeft: 5 }}
        renderItem={({ item }) => (

          <View style={[styles.story, { top: 5 }]}>
            <Story name={item.text} />
          </View>

        )}
      />
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
  centerButton: {
    position: "absolute",
    top: 70,
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: 'green',
  },
  story: {
    width: 70,
    height: 70,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});