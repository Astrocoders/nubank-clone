'use strict';

import React from 'react';
import {Text, View, ScrollView, Alert} from 'react-native';
import _ from 'lodash';
import Meteor from 'react-native-meteor';
import { Actions } from 'react-native-router-flux';
import Warn from 'react-native-simple-warn';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Components
import PasswordInput from '~/Components/PasswordInput';
import TextInput from '~/Components/TextInput';
import ButtonRounded from '~/Components/ButtonRounded';
import Navbar from '~/Components/Navbar';
import AppEventEmitter from '~/Services/AppEventEmitter';

// Styles
import navbarStyles from '~/Styles/navbar';
import registerStyles from '~/Styles/register';
import appStyles from '~/Styles/app';
import outerFormStyles from '~/Styles/outerForm';

// Containers
import RedirUserContainer from '~/Containers/redir_user';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        profile: {},
        organization: {},
      },
      formErrorText: null,
    };
  }

  componentDidMount() {
    AppEventEmitter.emit('sidebar.disable');
  }

  _createUser(){
    const { user } = this.state;

    if(user.password !== user.confirmPassword){
      this.setState({formErrorText: 'The passwords don\'t match'});
      this.refs.warn.appear();
      return false;
    }

    Meteor.call('createAdminUser', user, error => {
      if(error) {
        this.setState({formErrorText: error.reason});
        this.refs.warn.appear();
        return false;
      }

      Meteor.loginWithPassword(user.email, user.password, error => {
        if (error) {
          Alert.alert('Login failed', error.reason, [
            {text: 'Ok'},
          ]);
        }
      });
    });
  }

  _updateUserDoc(doc){
    const user = this.state.user;

    this.setState({
      user: _.merge(user, doc),
    });
  }

  _focusInput(event, reactNode){
    this.refs.kh.inputFocused(event, reactNode);
  }

  render() {
    return (
      <View style={appStyles.container}>
        <Warn
          style={{backgroundColor: 'crimson'}}
          textStyle={{color: '#fff'}}
          ref="warn"
          message={this.state.formErrorText}
        />
        <Navbar
          title="AstroApp"
          subtitle=""
          style={navbarStyles.toolbar}
          subtitleStyle={navbarStyles.subtitle}
          leftButtonHandler={() => Actions.login()}
          rightButtonHide={true}
        />
        <KeyboardAwareScrollView
          style={appStyles.body}
        >
          <View style={registerStyles.form}>
            <TextInput
              placeholder="First Name"
              value={this.state.firstName}
              onChangeText={val => this._updateUserDoc({
                profile: {firstName: val}
              })}
            />
            <TextInput
              placeholder="Last Name"
              value={this.state.user.lastName}
              onChangeText={val => this._updateUserDoc({
                profile: {lastName: val}
              })}
            />
            <TextInput
              placeholder="Email"
              value={this.state.email}
              onChangeText={val => this._updateUserDoc({email: val})}
              keyboardType="email-address"
            />
            <TextInput
              placeholder="Organization"
              value={this.state.user.organization.name}
              onChangeText={val => this._updateUserDoc({
                organization: {name: val}
              })}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={this.state.user.password}
              onChangeText={val => this._updateUserDoc({password: val})}
            />
            <TextInput
              placeholder="Confirm Password"
              value={this.state.user.confirmPassword}
              secureTextEntry={true}
              onChangeText={val => this._updateUserDoc({confirmPassword: val})}
            />

            <Text style={registerStyles.termsAndConditions}>
              You further agree to comply with the supplemental terms and conditions set forth in this Agreement.
            </Text>

            <ButtonRounded
              onPress={() => this._createUser()}
              text="Sign up"
            />

            <View style={registerStyles.loginContainer}>
              <Text style={registerStyles.loginText}>
                Have an account already?
                <Text
                  style={registerStyles.loginLink}
                  onPress={Actions.login}
                >{' '}Sign in.</Text>
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default RedirUserContainer(Register);
