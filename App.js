import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Loader from './components/Loader';
import Weather from './components/Weather';
import WeatherScreen from './components/WeatherScreen';
import ZipCodeScreen from './components/ZipCodeScreen';

const RootStack = createStackNavigator({
 Weather: WeatherScreen,
 ZipCode: ZipCodeScreen
},{
  initialRouteName: 'Weather',
  initialRouteParams: {zipCode: '90110'}
})


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1500)
  }
  render() {
    const { loading } = this.state;

    if(loading){
      return(
        <Loader/>
      );
    }else{
      return (
        <RootStack/>
      );
    }
  }
}
