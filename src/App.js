/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import AppHeader from './AppHeader'
import BottomNav from './BottomNav'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const theme = {
  ...DefaultTheme,
  roundness: 1,
  colors: {
    primary: '#d93636',
    accent: 'green'
  }
}

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      cart : []
    }
  }

  selectItem = itemID => {
    let cart = this.state.cart.concat(this.menuData.items.filter(i => i.id === itemID))
    this.setState({cart})
  }

  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <AppHeader />
          <BottomNav />
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    }
  })

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/
