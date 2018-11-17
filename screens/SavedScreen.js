import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default class SavedScreen extends React.Component {
  static navigationOptions = {
    title: 'Saved Stories',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>You don't have any saved stories yet!</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
