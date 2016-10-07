'use strict';

import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

// Components
import AppEventEmitter from '~/Services/AppEventEmitter';

// Styles
import navbarStyles from '~/Styles/navbar.js';
import {brandPrimary as primary} from '~/Styles/colors';

class Navbar extends Component {
  static defaultProps = {
    leftButtonIcon: 'chevron-left',
    rightButtonIcon: 'menu',
    leftButtonHandler: Actions.pop,
    rightButtonHandler: () => AppEventEmitter.emit('menu.trigger.open'),
    rightButtonIconSize: 34,
  }

  render(){
    const { props } = this;

    return (
      <View style={navbarStyles.navbar}>
        <View style={this.props.style}>
          <View style={navbarStyles.icons}>
            {
              !this.props.leftButtonHide ?
                <TouchableOpacity onPress={props.leftButtonHandler}>
                  <Icon
                    name={props.leftButtonIcon}
                    size={34}
                    color="rgba(255,255,255,0.9)" />
                </TouchableOpacity>
              : null
            }
          </View>
          <View style={navbarStyles.title}>
            <Text style={navbarStyles.titleText}>{this.props.title}</Text>
          </View>
          <View style={navbarStyles.icons}>
            {
              !this.props.rightButtonHide ?
              <TouchableOpacity onPress={props.rightButtonHandler}>
                <Icon
                  name={props.rightButtonIcon}
                  size={props.rightButtonIconSize}
                  color="rgba(255,255,255,0.9)"
                />
              </TouchableOpacity>
              : null
            }
          </View>
        </View>
      </View>
    );
  }
}

export default Navbar;
