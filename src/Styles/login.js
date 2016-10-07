'use strict';

import {StyleSheet, Dimensions} from 'react-native';
import {brandPrimary as primary, brandSecondary as secondary} from './colors';
let deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'stretch'
  },
  body: {
    flex: 1,
    marginTop: deviceHeight/10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15
  },
  container: {
    backgroundColor: '#ED6464'
  },
  logoBackground: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'transparent'
  },
  logo: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    marginTop: 50,
  },
  subLogo: {
    alignSelf: 'center',
    fontSize: 32,
    color: 'white',
  },
  registerContainer: {
    marginTop: 10,
    alignSelf: 'center'
  },
  registerText: {
    color: '#9d9d9d',
    fontSize: 14
  },
  registerLink: {
    color: secondary
  },
  forgotPasswordContainer: {
    alignSelf: 'center',
    marginVertical: 15
  },
  text: {
    alignSelf: 'center',
    fontSize: 14,
  },
  inputs: {
    borderBottomColor: '#333',
  },
  btn: {
    backgroundColor: 'transparent',
  },
  btnSignUp: {
    backgroundColor: 'transparent',
    borderColor: '#666',
  },
  btnTextSignUp: {
    color: '#666',
  },
  btnText: {
    color: '#333',
  },
});
