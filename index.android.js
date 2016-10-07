import React from 'react'
import { AppRegistry, BackAndroid } from 'react-native'
import { Actions } from 'react-native-router-flux'
import AppRootRouter from './src/AppRootRouter'

BackAndroid.addEventListener('hardwareBackPress', () => {
  Actions.pop()
  return true
})

const NuBankClone = () => <AppRootRouter />

AppRegistry.registerComponent('NuBankClone', () => NuBankClone)
