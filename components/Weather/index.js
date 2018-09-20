import React from 'react';
import Forecast from '../Forecast';
import Styles from '../../assets/style';
import Background from '../../assets/background/background.jpg';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: {
        main: 'SUNNY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        temp: 29,
      }
    }
  }

  componentDidMount() {
    const { fetchData } = this;
    fetchData()
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.zipCode !== this.props.zipCode) {
      this.fetchData()
    }
  }


  fetchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=7280756e2c689a64c9de2d525b9792bf`)
      .then((response) => response.json())
      .then((json) => {
        this.setState(
          {
            forecast: {
              main: json.weather[0].main,
              description: json.weather[0].description,
              temp: json.main.temp
            }
          });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  render() {
    const { handleConsole } = this;
    const { forecast } = this.state;
    const { zipCode } = this.props;

    return (
      <View style={Styles.container}>
        <ImageBackground source={Background} style={Styles.backdrop}>
          <View style={Styles.containerCenterTop}>
            <Forecast {...forecast} />
            <Text style={Styles.pinCode}>Zip code is {zipCode}.</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
