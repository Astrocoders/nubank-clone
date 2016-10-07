'use strict'

import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {Meteor, Accounts} from 'react-native-meteor';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';

// Components
import ButtonRounded from '~/Components/ButtonRounded';
import Navbar from '~/Components/Navbar';
import TextInput from '~/Components/TextInput';

// Styles
import navbarStyles from '~/Styles/navbar';
import forgotPasswordStyles from '~/Styles/forgotPassword';
import appStyles from '~/Styles/app';

// Containers
import RedirUserContainer from '~/Containers/redir_user';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      visibleSpinner: false,
    };
  }

  componentDidMount() {
    this.props.stateSideBar(false);
  }

  _forgotPassword() {
    if (!this.state.email) return;

    this.setState({visibleSpinner: true});
    Accounts.forgotPassword(this.state.email.toLowerCase(), error => {
      this.setState({visibleSpinner: false});
      if(error){
        Alert.alert('Forgot password failed', error.reason, [
          {text: 'Ok'},
        ]);
        return;
      }
      Alert.alert('Success', 'Instructions were sent to your email.', [
        {text: 'Ok'},
      ]);
      Actions.login();
    });
  }

  render() {
    return (
      <View style={appStyles.container}>
        <Navbar
          title="AstroApp"
          subtitle=""
          style={navbarStyles.toolbar}
          subtitleStyle={navbarStyles.subtitle}
          leftButtonHandler={() => Actions.login()}
          rightButtonHide={true}
        />
        <ScrollView style={appStyles.body} scrollEnabled={true}>
          <Text style={forgotPasswordStyles.topText}>
            Please enter your email address to recover your AstroApp account.
          </Text>

          <View style={forgotPasswordStyles.form}>
            <TextInput
              placeholder="Email"
              value={this.state.email}
              onChangeText={(val) => this.setState({email: val})}
              keyboardType="email-address"
            />

            <ButtonRounded
              onPress={this._forgotPassword.bind(this)}
              text="Send" />

            <View style={forgotPasswordStyles.loginContainer}>
              <Text style={forgotPasswordStyles.loginText}>
                Or you can
                <Text
                  style={forgotPasswordStyles.loginLink}
                  onPress={Actions.login}> sign in.</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
        <Spinner visible={this.state.visibleSpinner} />
      </View>
    );
  }
}

export default RedirUserContainer(ForgotPassword);
