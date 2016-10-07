'use strict';

import React from 'react';
import {View, Text} from 'react-native';
import Spinner from 'react-native-spinkit';

// Styles
import styles from '../Styles/loader';

const Loader = () => (
  <View style={styles.main}>
    <Spinner
      size={40}
      type="9CubeGrid"
      color="#161616"
    />
  </View>
);

export default Loader;
