// Modules
import React from 'react';
import { Actions, Scene } from 'react-native-router-flux'

// Components
import Login from '~/Scenes/Login'
import FullLoader from '~/Components/FullLoader'

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
  </Scene>
);
