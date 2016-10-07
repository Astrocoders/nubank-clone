import React from 'react';
import proxyquire from 'proxyquire';
import { expect, assert } from 'chai';
import { stub } from 'sinon';
const proxyquireStrict = proxyquire.noCallThru();

const {describe, it} = global;
const Router = {
  Actions: { dashboard: stub() },
};
const Meteor = {};
const RedirUser = proxyquireStrict('../redir_user', {
  'react-native-meteor': Meteor,
  'react-native-router-flux': Router,
  '../../Services/Containerize': component => component,
}).default;

describe('<RedirUserContainer/>', () => {
  it('should take logged in user to dashboard', () => {
    Meteor.loggingIn = stub().returns(false);
    Meteor.user = stub().returns({_id: 123});
    Router.Actions.dashboard = stub();

    RedirUser({}, stub());
    assert(Router.Actions.dashboard.calledOnce);
    expect(Router.Actions.dashboard.args[0][0].type).to.equal('replace');
  });

  it('shouldn\'t take logged out user to dashboard', () => {
    Meteor.loggingIn = stub().returns(false);
    Meteor.user = stub().returns(null);
    Router.Actions.dashboard = stub();

    RedirUser({}, stub());
    expect(Router.Actions.dashboard.calledOnce).to.equal(false);
  });
});
