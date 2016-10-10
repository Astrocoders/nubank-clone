// Modules
import React, {Component} from 'react'
import { View } from 'react-native'
import { Router } from 'react-native-router-flux'
import Drawer from 'react-native-drawer'

// Components
import Scenes from '~/Scenes'
import Sidebar from '~/Components/Sidebar'

// Services
import ConnectServer from '~/Services/ConnectServer'
import RedirNonUserContainer from '~/Containers/redir_non_user'
import UserStoredTokenContainer from '~/Containers/user_stored_token'

// Styles
import appStyles from '~/Styles/app'

// Initialize websocket connection
ConnectServer()

@UserStoredTokenContainer
@RedirNonUserContainer
export default class RootRouter extends Component {
  render() {
    return (
      <View style={[appStyles.container, {paddingTop: 0}]}>
        <Drawer
          style={{marginBottom: 20}}
          type="static"
          tapToClose={true}
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          acceptPan={false}
          useInteractionManager={true}
          content={<Sidebar />}
          tweenEasing="easeInOutCirc"
        >
          <Router
            hideNavBar={true}
            scenes={Scenes}
          />
        </Drawer>
      </View>
    )
  }
}
