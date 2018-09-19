import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
 container: {},

 containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerCenterTop:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',

    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 5,
  },

  containerForecast: {
    backgroundColor: '#fff',
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    padding: 15,
    borderRadius: 15,
    marginBottom: 35,
  },

  containerMain: {
    marginBottom: 5,
  },

  containerTemp: {
    width: '100%',
  },

  containerDesc: {
    marginTop: 5,
    width: '40%',
    marginLeft: '60%',
  },

 backdrop: {
    width: '100%',
    height: '100%',
 },

  loader: {
    width: 100,
    height: 100,
  },

  display4: {
    color: '#eaeaea',
    fontWeight: 'bold',
    fontSize: 25,
  },

  pinCode: {
    color: '#343a40',
    fontWeight: 'bold',
    fontSize: 10,
  },

  headerTitleNav: {
    width: '100%',
    textAlign: 'center',
  },

  headerRightNav: {
    paddingRight: 15,
    color: '#17a2b8',
  },

  day: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  main: {
    fontSize: 12,
  },

  desc: {
    fontSize: 12,
    color: '#6c757d',
  },

  temp: {
    textAlign: 'center',
    fontSize: 90,
    fontWeight: 'bold',
  },

  sufflx: {
    fontSize: 15,
    fontWeight: 'normal',
  }
});

export default Styles
