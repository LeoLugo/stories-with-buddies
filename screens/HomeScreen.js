import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Stories with Buddies',
  };
  // static navigationOptions = {
  //   header: null,
  // };

  render() {
    return (
      <View style={styles.container}>
        <Text>LFDSLK</Text>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
