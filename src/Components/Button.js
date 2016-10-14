import React, {
  PropTypes,
} from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  buttonText: {
    color: '#65186E',
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
  style: TouchableOpacity.propTypes.style,
  textStyle: Text.propTypes.style,
  transparent: PropTypes.bool,
  blueBorder: PropTypes.bool,
  children: Text.propTypes.children,
}
