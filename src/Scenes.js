import React, {Component} from 'react';
import {
  Navigator,
} from 'react-native';
import {
  Actions,
  Router,
  Scene,
} from 'react-native-router-flux';

import Login from './Routes/Login';
import Register from './Routes/Register';
import ForgotPassword from './Routes/ForgotPassword';
import FullLoader from './Components/FullLoader';

export default Actions.create(
  <Scene key="root">
    <Scene
      key="__rootLoading"
      wrapRouter={false}
      component={FullLoader}
      initial={true}
    />
    <Scene
      key="login"
      wrapRouter={false}
      component={Login}
    />
    <Scene
      key="register"
      wrapRouter={false}
      component={Register}
    />
    <Scene
      key="forgotPassword"
      wrapRouter={false}
      component={ForgotPassword}
    />
  </Scene>
);
