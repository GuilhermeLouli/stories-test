import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, findNodeHandle, UIManager } from 'react-native';

class CustomList extends React.Component {
  constructor(props) {
    super(props);
    this.itemRefs = {};
  }

  handleItemPress = (item) => {
    // Handle item press event
    console.log('Item pressed:', item);
  };

  handleScroll = () => {
    const { data } = this.props;
    Object.keys(this.itemRefs).forEach((index) => {
      const handle = findNodeHandle(this.itemRefs[index]);
      if (handle) {
        this.measureItemPosition(handle, index);
      }
    });

    // Execute your function here based on the scroll event
    console.log('Scrolling...');
  };

  renderItem = (item, index) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => this.handleItemPress(item)}
        ref={(ref) => (this.itemRefs[index] = ref)}
      >
        <View style={styles.item}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  measureItemPosition = (handle, index) => {
    UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
      const globalX = pageX; // Global X position
      const globalY = pageY; // Global Y position

      console.log(`Item ${index} - Global Position: x: ${globalX}, y: ${globalY}`);
    });
  };

  render() {
    const { data } = this.props;

    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        onScroll={this.handleScroll}
        horizontal
        scrollEventThrottle={16} // Adjust the throttle value as needed
      >
        {data.map((item, index) => this.renderItem(item, index))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    marginLeft: 10,
    backgroundColor: "blue"
  },
});

export default CustomList;