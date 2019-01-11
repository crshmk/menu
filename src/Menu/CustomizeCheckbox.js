import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Checkbox, List } from 'react-native-paper'


export default class CustomizeCheckbox extends Component {
  constructor(props) {
    super(props)
  }

  emitChecked = () => {
    console.log(this.props);
    if(this.props.selectedOptions.indexOf(this.props.ingredient.id) > -1) {
      this.props.removeOption(this.props.ingredient.id)
    } else {
      this.props.addOption(this.props.ingredient)
    }
  }

  render() {

    let i = this.props.ingredient
    let selected = this.props.selectedOptions
    let checked = selected.indexOf(i.id) > -1 ? 'checked' : 'unchecked'

    return (
      <View style={styles.wrapper}>
          <Text style={styles.text}>{i.name}</Text>
          <View style={styles.checkbox}>
            <Checkbox status={checked} onPress={this.emitChecked}/>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    //flex: 1
    flexDirection: 'row'
  },
  text: {
    flex: 2
  },
  checkbox: {
    flex: 1
  }
})
