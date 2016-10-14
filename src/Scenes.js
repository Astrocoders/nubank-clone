// Modules
import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

// Components
import Login from '~/Scenes/Login'
import FullLoader from '~/Components/FullLoader'
import Intro from '~/Scenes/Intro'

export default Actions.create(
  <Scene key="root">
    <Scene
      key="__rootLoading"
      wrapRouter={false}
      component={FullLoader}
    />
    <Scene
      key="intro"
      wrapRouter={false}
      component={Intro}
      initial={true}
    />
    <Scene
      key="login"
      wrapRouter={false}
      component={Login}
    />
  </Scene>
);
