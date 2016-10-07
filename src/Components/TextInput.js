'use strict';

import React, {Component} from "react";
import {View, TextInput} from "react-native";
import _ from 'lodash';

// Styles
import appStyles from '~/Styles/app';

class TextInputApp extends Component {
  render() {
    return (
      <View style={this.props.hideBottomBorder ?
        appStyles.inputWrapperNoBorder : appStyles.inputWrapper}>
        <TextInput {..._.extend({
          underlineColorAndroid: 'transparent',
          style: appStyles.input,
        }, this.props)}/>
      </View>
    );
  }
}

export default TextInputApp;
