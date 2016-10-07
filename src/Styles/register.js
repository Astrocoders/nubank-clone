'use strict';

import {StyleSheet} from 'react-native';
import {brandSecondary as secondary} from './colors';

export default StyleSheet.create({
  termsAndConditions: {
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
    paddingTop: 20
  },
  link: {
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    width: null,
    height: null,
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
