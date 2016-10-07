import React from 'react';
import { Alert } from 'react-native';
import { shallow } from 'enzyme';
import { stub, spy } from 'sinon';
import {
  expect,
  assert,
} from 'chai';
import getMockComponent from '~/tests/mocks/mock_component';
import proxyquire from 'proxyquire';
const proxyquireStrict = proxyquire.noCallThru();

const Meteor = {
  loginWithPassword: null,
};

const Login = proxyquireStrict('../Login', {
  'react-native-loading-spinner-overlay': getMockComponent(),
  'react-native-keyboard-aware-scroll-view': {
    KeyboardAwareScrollView: getMockComponent(),
  },
  '~/Components/ButtonRounded': getMockComponent('ButtonRounded'),
  '~/Containers/redir_user': component => component,
  'react-native-meteor': Meteor,
  'react-native-router-flux': {
    Actions: { dashboard: stub() },
  },
}).default;

const { describe, it } = global;
describe('<Login/>', () => {
  it('should call Meteor.loginWithPassword with credentials when user taps on login button', () => {
    const wrapper = shallow(<Login/>);
    const credentials = {
      email: 'user@email.com',
      password: 'password',
    };
    Meteor.loginWithPassword = stub();

    wrapper.setState(credentials);
    wrapper.find('ButtonRounded').prop('onPress')();

    const callArgs = Meteor.loginWithPassword.args[0];
    assert(Meteor.loginWithPassword.called);
    expect(callArgs[0]).to.equal(credentials.email);
    expect(callArgs[1]).to.equal(credentials.password);
    expect(callArgs[2]).to.be.a('function');
  });

  it('should thrown an alert warning about login error', () => {
    const wrapper = shallow(<Login/>);
    Meteor.loginWithPassword = stub();

    wrapper.find('ButtonRounded').prop('onPress')();

    Alert.alert = spy();
    const loginCallback = Meteor.loginWithPassword.args[0][2](true);
    assert(Alert.alert.calledOnce);
  });
});
