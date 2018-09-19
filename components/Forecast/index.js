import React from 'react';
import Styles from '../../assets/style';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends React.Component {

  render() {
    const { main, description, temp } = this.props;

    return (
      <View style={Styles.containerForecast}>
        <View style={Styles.containerMain}>
          <Text style={Styles.day}>MONDAY</Text>
          <Text style={Styles.main}>{main}</Text>
        </View>

        <View style={Styles.containerMain}>
          <Text style={Styles.temp}>{temp}
            <Text style={Styles.sufflx}>°C</Text>
          </Text>
        </View>

        <View style={Styles.containerDesc}>
          <Text style={Styles.desc}>{description}</Text>
        </View>
      </View>
    );
  }
}
