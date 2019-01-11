import React, { Component } from 'react'
import { List } from 'react-native-paper';

import Item from './Item'

export default class MenuSection extends Component {
  constructor(props) {
    super(props) //items, menuData
  }
  render() {
    let items = this.props.items.map(item =>
      <Item key={item.id} item={item} menuData={this.props.menuData} selectItem={this.props.selectItem}/>)
    return (
      <List.Section title={this.props.title}>
      {items}
      </List.Section>
    )
  }
}
