'use strict';

import React from "react";
import {
  View,
  Text,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

// Styles
import styles from '../Styles/loader';

const Nothing = ({message = 'Nothing to show :('}) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icon
        name="flag"
        size={50}
        style={{
          flex: 1,
        }}
      />
      <Text
        style={{
          fontSize: 25,
          flex: 1,
          fontFamily: 'sans-serif-light',
          color: '#999',
        }}
      >
        {message}
      </Text>
    </View>
  </View>
);

export default Nothing;
