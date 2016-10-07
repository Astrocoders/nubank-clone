'use strict';

import {StyleSheet} from 'react-native';
import {brandSecondary as secondary} from './colors';

export default StyleSheet.create({
  topText: {
    textAlign: 'center',
    alignSelf: 'center',
    color: '#999',
    width: 230,
    fontSize: 14,
    lineHeight: 19,
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 30
  },
  form: {
    flex: 1,
  },
  loginContainer: {
    marginTop: 40,
    marginBottom: 15,
    alignSelf: 'center'
  },
  loginText: {
    color: '#AAA',
    fontSize: 14
  },
  loginLink: {
    color: secondary
  },
});
