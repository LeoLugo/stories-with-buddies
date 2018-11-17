import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return(
      <View>
        <Text>First name: Leo</Text>
        <Text>Last name: Lugo</Text>
        <Text>Username: LMAOSHMSFOAIDMBFT</Text>
        <Text>Email: leo.lugo84@gmail.com</Text>
      </View>
    )
  }
}
