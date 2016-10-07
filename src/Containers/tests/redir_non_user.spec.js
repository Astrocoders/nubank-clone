import React from 'react';
import proxyquire from 'proxyquire';
import { assert, expect } from 'chai';
import { stub } from 'sinon';
const proxyquireStrict = proxyquire.noCallThru();

const {describe, it} = global;
const Router = {
  Actions: { login: stub() },
};
const Meteor = {};
const RedirNonUser = proxyquireStrict('../redir_non_user', {
  'react-native-meteor': Meteor,
  'react-native-router-flux': Router,
  '../../Services/Containerize': component => component,
}).default;

describe('<RedirNonUserContainer/>', () => {
  it('should take logged out user to login', () => {
    Meteor.loggingIn = stub().returns(false);
    Meteor.user = stub().returns(null);
    Router.Actions.login = stub();

    RedirNonUser({}, stub());
    assert(Router.Actions.login.calledOnce);
    expect(Router.Actions.login.args[0][0].type).to.equal('replace');
  });

  it('shouldn\'t take logged in user to login', () => {
    Meteor.loggingIn = stub().returns(false);
    Meteor.user = stub().returns({_id: 123});
    Router.Actions.login = stub();

    RedirNonUser({}, stub());
    assert.isFalse(Router.Actions.login.calledOnce);
  });
});
