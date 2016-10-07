'use strict';

import React from 'react';
import {View, TextInput, DeviceEventEmitter} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

// Styles
import iconInputStyles from '~/Styles/iconInput';
import appStyles from '~/Styles/app';
import passwordInputStyles from '~/Styles/passwordInput';
import {brandSecondary as secondary, dark, light} from '~/Styles/colors';

class PasswordInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      viewPassword: false,
    };
  }

  togglePasswordView(){
    this.setState({viewPassword: !this.state.viewPassword});
  }

  render() {
    const textInputStyle = (this.props.dark) ?
      iconInputStyles.textInputDark : iconInputStyles.textInput;
    const viewStyle = (this.props.dark) ?
      iconInputStyles.outerBorderDark : iconInputStyles.outerBorder;

    return (
      <View style={this.props.hideBottomBorder ?
        appStyles.inputWrapperNoBorder : appStyles.inputWrapper}>
        <TextInput
         {..._.extend({
           underlineColorAndroid: 'transparent',
           style: appStyles.input,
           secureTextEntry: !this.state.viewPassword,
           autoCorrect: false,
           autoCapitalize: 'none',
         }, this.props)}
        />

        <Icon
          name={this.state.viewPassword ? 'ios-eye' : 'ios-eye-outline'}
          size={27}
          color={secondary}
          style={this.props.eyeIconStyle || passwordInputStyles.eyeIcon}
          onPress={() => this.togglePasswordView()}
        />
      </View>
    );
  }
}

export default PasswordInput;
