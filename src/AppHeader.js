import React, { Component } from 'react'
import { Appbar, BottomNavigation, Text } from 'react-native-paper';

export default class AppHeader extends Component {

  goBack() {

  }

  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction
          onPress={this.goBack}
        />
        <Appbar.Content
          title="Burger Menu"
        />
      </Appbar.Header>
    )
  }
}
