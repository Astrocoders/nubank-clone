import React from 'react'
import { AppRegistry } from 'react-native'
console.log("AppRegistry", AppRegistry);
import AppRootRouter from './src/AppRootRouter'

const NuBankClone = () => (<AppRootRouter />)

AppRegistry.registerComponent('NuBankClone', () => NuBankClone)
