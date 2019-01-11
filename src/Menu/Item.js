import React, { Component } from 'react'
import { List, Button, Divider, Chip } from 'react-native-paper';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Modal } from 'react-native'
let friesIcon = require('../../assets/fries.jpg')

import Customize from './Customize'

export default class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customize: false
    }
  }

  customizeItem = () => {
    this.setState({customize: true})
  }

  selectItem = itemID => {
    this.setState({customize: false})
    this.props.selectItem(itemID)
  }

  render() {
    let { item } = this.props

    return (
      <View style={styles.wrapper}>
      <TouchableOpacity onPress={this.customizeItem}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>
          {item.description}
        </Text>
        <Chip style={styles.chip} mode="flat">{item.price}</Chip>
        <Divider />
        </TouchableOpacity>
        <Modal visible={this.state.customize}>
          <Customize item={item} menuData={this.props.menuData} selectItem={this.selectItem} />
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 80,
    marginBottom: 10,
    paddingLeft: 10,
    borderBottomColor: '#cacaca'
  },
  name: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
    marginBottom: 5,
    width: '80%'
  },
  chip: {
    width: 40,
    position: 'absolute',
    right: 10,
    top: 15
  }
})
