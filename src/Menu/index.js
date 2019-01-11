import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper';

import Section from './Section'

import { menuData } from './menuData'


let menu = menuData.categories.map((c, i) =>  (
  <Section
    title={c.name}
    key={i}
    selectItem={x => null}
    items={menuData.items.filter(item => item.category === c.id)} menuData={menuData}
  />)
)

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }


  render() {
    console.log('xxx', this.props);
    return (
      <View>
      {menu}
      </View>
    )
  }
}
