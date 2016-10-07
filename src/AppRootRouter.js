'use strict';

// Components
import React, {Component} from 'react';
import {
  Navigator,
  AsyncStorage,
  View,
  Text,
} from 'react-native';
import {
  Actions,
  Router,
  Scene,
} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import Loader from './Components/Loader';
import _ from 'lodash';
import Meteor from 'react-native-meteor';

// Components
import Scenes from './Scenes';
import Sidebar from './Components/Sidebar';

// Services
import AppEventEmitter from '~/Services/AppEventEmitter';
import ConnectServer from '~/Services/ConnectServer';
import RedirNonUserContainer from './Containers/redir_non_user';
import UserStoredTokenContainer from './Containers/user_stored_token';

import '~/Services/OneSignalListener';

// Styles
import appStyles from './Styles/app';

// Initialize websocket connection
ConnectServer();

@UserStoredTokenContainer
@RedirNonUserContainer
export default class RootRouter extends Component {
  constructor(props) {
    super(props);

    this.scenes = null;
    this.state = {};
  }

  componentDidMount() {
    AppEventEmitter.addListener('menu.trigger.open',
      this.openSidebar.bind(this));
    AppEventEmitter.addListener('sibebar.enable',
      () => {
        this.stateSideBar(true);
      });
    AppEventEmitter.addListener('sibebar.disable',
      () => {
        this.stateSideBar(false);
      });
  }

  componentWillUnmount() {
    AppEventEmitter.removeListener('menu.trigger.open');
  }

  closeSidebar(navigation) {
    // Only close the menu if the router is after the actual one
    if (navigation.type === 'AFTER_ROUTER_ROUTE') {
      if (!_.get(this.refs, 'menu')) return;
      this.refs.menu.close();
    }
  }

  openSidebar() {
    if (!_.get(this.refs, 'menu')) return;
    this.refs.menu.open();
  }

  stateSideBar(state) {
    this.setState({disableSideBar: !state});
  }

  render() {
    return (
      <View style={[appStyles.container, {paddingTop: 0}]}>
        <Drawer
          style={{marginBottom: 20}}
          ref="menu"
          type="static"
          tapToClose={true}
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          acceptPan={false}
          disabled={this.state.disableSideBar}
          useInteractionManager={true}
          content={<Sidebar />}
          tweenEasing="easeInOutCirc"
        >
          <Router
            hideNavBar={true}
            dispatch={this.closeSidebar.bind(this)}
            scenes={Scenes}
          />
        </Drawer>
      </View>
    );
  }
};
