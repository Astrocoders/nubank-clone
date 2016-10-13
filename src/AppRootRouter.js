// Modules
import React, {Component} from 'react'
import { View } from 'react-native'
import { Router } from 'react-native-router-flux'
import Drawer from 'react-native-drawer'
import {
  Provider,
} from 'react-redux'

// Components
import Scenes from '~/Scenes'
import Sidebar from '~/Components/Sidebar'
import LoginModal from '~/Components/LoginModal'

// Services
import connectServer from '~/Services/ConnectServer'
import '~/Services/Reactotron'

// Containers
import RedirNonUserContainer from '~/Containers/redir_non_user'
import UserStoredTokenContainer from '~/Containers/user_stored_token'

// Redux
import store from '~/redux/store'

// Styles
import appStyles from '~/Styles/app'

// Initialize websocket connection
connectServer()

/* eslint-disable react/prefer-stateless-function */
@UserStoredTokenContainer
@RedirNonUserContainer
export default class RootRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={[appStyles.container, {paddingTop: 0}]}>
          <LoginModal />
          <Drawer
            style={{marginBottom: 20}}
            type="static"
            openDrawerOffset={0.2}
            panCloseMask={0.2}
            acceptPan={false}
            content={<Sidebar />}
            tweenEasing="easeInOutCirc"
            useInteractionManager
            tapToClose
          >
            <Router
              hideNavBar
              scenes={Scenes}
            />
          </Drawer>
        </View>
      </Provider>
    )
  }
}
