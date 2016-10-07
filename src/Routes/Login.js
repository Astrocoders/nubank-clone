import React, {
  Component
} from 'react';
import {
  Text, 
  View, 
  ScrollView, 
  Animated, 
  TouchableOpacity, 
  Alert, 
  Image, 
  DeviceEventEmitter,
  StyleSheet,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {Actions} from 'react-native-router-flux';
import Meteor from 'react-native-meteor';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Components
import TextInput from '~/Components/TextInput';
import PasswordTextInput from '~/Components/PasswordInput';
import ButtonRounded from '~/Components/ButtonRounded';

// Services and utils
import { timeout } from '~/Services/Timers';
import AppEventEmitter from '~/Services/AppEventEmitter';
import SetupOneSignal from '~/Services/SetupOneSignal';

// Containers
import RedirUserContainer from '~/Containers/redir_user';

// Styles
import loginStyles from '~/Styles/login';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      logoSectionHeight: new Animated.Value(200),
      scroll: false,
    };
  }

  componentWillMount () {
    this.onKeyboardShow = DeviceEventEmitter
      .addListener('keyboardWillShow', this._keyboardWillShow.bind(this));
    this.onKeyboardHide = DeviceEventEmitter
      .addListener('keyboardWillHide', this._keyboardWillHide.bind(this));
  }

  componentDidMount () {
    AppEventEmitter.emit('sidebar.disable');
    this.onKeyboardHide.remove();
    this.onKeyboardShow.remove();
  }

  _keyboardWillShow (e) {
    this.setState({scroll: true});
  }

  _keyboardWillHide (e) {
    this.setState({scroll: false});
  }

  _onKeyboardChange({ show }){
    timeout(() => {
      Animated.timing(this.state.logoSectionHeight, {
        toValue: show ? 40 : 200,
        duration: 200,
      }).start();
    }, 200);
  }

  _login() {
    const { email, password } = this.state;
    Meteor.loginWithPassword(email, password, error => {
      if (error) {
        Alert.alert('Login failed', error.reason, [
          {text: 'Ok'},
        ]);
        return;
      }

      setTimeout(SetupOneSignal, 2000);
    });
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={loginStyles.container}
        scrollEnabled={this.state.scroll}
        onKeyboardWillShow={this._onKeyboardChange.bind(this, {show: true})}
        onKeyboardWillHide={this._onKeyboardChange.bind(this, {show: false})}
      >
        <Animated.View
          style={{height: this.state.logoSectionHeight}}
        >
          <Image source={require('~/img/icon.png')} style={loginStyles.logo} />
          <Text style={loginStyles.subLogo}>AstroApp</Text>
        </Animated.View>
        <View style={loginStyles.body}>
          <TextInput
            placeholder="Email"
            value={this.state.email}
            onChangeText={val => this.setState({email: val})}
            keyboardType="email-address"
            autoCapitalize="none"
            style={loginStyles.inputs}
          />

        <PasswordTextInput
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.setState({password: val})}
          style={loginStyles.inputs}
        />
        <TouchableOpacity
          onPress={Actions.forgotPassword}
          style={loginStyles.forgotPasswordContainer}
        >
          <Text>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <ButtonRounded
          onPress={() => this._login()}
          text="Sign in"
          style={loginStyles.btn}
          textStyle={loginStyles.btnText}
        />
        <ButtonRounded
          onPress={Actions.register}
          text="Register"
          style={loginStyles.btnSignUp}
          textStyle={loginStyles.btnTextSignUp}
        />
      </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default RedirUserContainer(Login);
