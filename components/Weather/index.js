import React from 'react';
import Forecast from '../Forecast';
import Styles from '../../assets/style';
import Background from '../../assets/background/background.jpg';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      forecast: {
        main: 'SUNNY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        temp: 29,
      }
    }
  }

  componentDidMount(){
    const { fetchData } = this;
    fetchData()
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.zipCode !== this.props.zipCode) {
      this.fetchData()
    }
  }


  fetchData = () =>{
    console.log('text from handleConsole');
  }

  render() {
    const { handleConsole } = this;
    const { forecast } = this.state;
    const { zipCode } = this.props;

    return (
      <View style={Styles.container}>
        <ImageBackground source={Background} style={Styles.backdrop}>
          <View style={Styles.containerCenterTop}>
            <Forecast {...forecast}/>
            <Text style={Styles.pinCode}>Zip code is {zipCode}.</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
