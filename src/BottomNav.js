import React, { Component } from 'react'
import { BottomNavigation } from 'react-native-paper';

import About from './About'
import Menu from './Menu'
import Cart from './Cart'
import Specials from './Specials'

export default class BottomNav extends Component {
  constructor(props) {
    super(props)
    this.selectItem = this.selectItem.bind(this)
  }
    state = {
      index: 1,
      routes: [
        { key: 'about', title: 'About', icon: 'info'},
        { key: 'menu', title: 'Menu', icon: 'restaurant'},
        { key: 'cart', title: 'Cart', icon: 'store'},
        { key: 'settings', title: 'Settings', icon: 'settings'}
      ]
    }


  setIndex = x => {
    this.setState({index: x})
  }

  selectItem = x => {
    console.log('works', x);
  }

  renderScene = BottomNavigation.SceneMap({
    about: About,
    menu: () => <Menu selectItem={x => {console.log(x)}} xxx={true}/>,
    cart: Cart,
    settings: Specials
  })

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this.setIndex}
        renderScene={this.renderScene}
        labeled={true}
      />
    )
  }
}
