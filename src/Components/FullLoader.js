'use strict';

import React from 'react';
import {View, Text} from 'react-native';
import Loader from './Loader';

const FullLoader = () => (
  <View
    style={{
      flex: 1,
      width: null,
      height: null,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    }}
  >
    <Loader/>
  </View>
);

export default FullLoader;
