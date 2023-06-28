import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Stories from './src/components/Stories';
import PathList from './src/components/PathList';

export default function App() {

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
    { id: '12', text: 'Item 11' },
    { id: '13', text: 'Item 11' },
    { id: '14', text: 'Item 11' },
    { id: '15', text: 'Item 11' },
    { id: '16', text: 'Item 11' },
    { id: '17', text: 'Item 11' },
    { id: '18', text: 'Item 11' },
    { id: '19', text: 'Item 11' },
    { id: '20', text: 'Item 11' },
    { id: '21', text: 'Item 11' },
    { id: '22', text: 'Item 11' },
    { id: '23', text: 'Item 11' },
    { id: '24', text: 'Item 11' },
    { id: '25', text: 'Item 11' },
    { id: '26', text: 'Item 11' },
    { id: '27', text: 'Item 11' },
    { id: '28', text: 'Item 11' },
  ];

  return (
    <View style={styles.container}>
      {/* <Header />  */}
      {/* <Stories /> */}
      <PathList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  }
});
