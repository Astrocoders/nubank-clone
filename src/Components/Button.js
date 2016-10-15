import React, {
  PropTypes,
} from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  buttonText: {
    color: '#6A296C',
  },
  buttonTransparent: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 2,
    paddingHorizontal: 30,
    marginHorizontal: 10,
  },
})

export default function Button({ style, textStyle, transparent, ...props }){
  const buttonStyles = [
    styles.button,
    transparent ? styles.buttonTransparent : {},
    style,
    props.blueBorder ? {
      borderColor: '#65186E',
    } : {},
  ]

  const textStyles = [
    styles.buttonText,
    textStyle,
  ]

  return (
    <TouchableOpacity style={buttonStyles} {...props}>
      <Text style={textStyles}>
        {props.children}
      </Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  textStyle: View.propTypes.style,
  transparent: PropTypes.bool,
  blueBorder: PropTypes.bool,
}
