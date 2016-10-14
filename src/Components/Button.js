import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

// Styles
import buttonStyles from '~/Styles/button'

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[buttonStyles.button, this.props.style]}
        onPress={this.props.onPress}
      >
        <Text
          style={[buttonStyles.buttonText, this.props.textStyle]}
        >
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}
