import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Checkbox, List, Button } from 'react-native-paper'

import CustomizeCheckbox from './CustomizeCheckbox'

//const findByID = (xs) => xs.filter(x => )


export default class Customize extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultOptions: props.menuData.ingredients.filter(ingredient => props.item.defaults.indexOf(ingredient.id) > -1),
      otherOptions: props.menuData.ingredients.filter(i => props.item.selects.indexOf(i.id) > -1),
      selectedOptions: [].concat(props.item.defaults)
    }
  }

  addOption = option => {
    this.setState({selectedOptions: this.state.selectedOptions.concat(option)})
  }

  removeOption = optionID => {
    this.setState({selectedOptions: this.state.selectedOptions.filter(o => o.id !== optionID)})
  }

  selectItem = () => {
    this.props.selectItem(this.props.item.id)
  }

  makeCheckbox = ingredient => (
    <CustomizeCheckbox
      ingredient={ingredient}
      selectedOptions={this.state.selectedOptions}
      key={ingredient.id}
      addOption={this.addOption}
      removeOption={this.removeOption}
    />
  )

  render() {
    let { item } = this.props
    let ingredients = this.props.menuData.ingredients

    let defaults = ingredients.filter(i => item.defaults.indexOf(i.id) > -1)
    let others = ingredients.filter(i => item.options.indexOf(i.id) > -1)

    let defaultOptions = defaults.map(d => this.makeCheckbox(d))

    let otherOptions = others.map(d => this.makeCheckbox(d))

    return (
      <View style={styles.wrapper}>
        <Text style={styles.header}>Let's customize your {item.name}</Text>
        <List.Section title="The Way It Comes...">
          {defaultOptions}
        </List.Section>
        <List.Section title='Other options...'>
          {otherOptions}
        </List.Section>
        <Button icon="add-a-photo" mode="contained" onPress={this.selectItem}>
          Buy Me
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 50
  },
  header: {
    fontSize: 20
  }
})
