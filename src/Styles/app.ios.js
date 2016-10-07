'use strict';

import {StyleSheet} from 'react-native';
import {brandSecondary as secondary} from './colors';
import {widthInput} from './inputs';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 20,
    backgroundColor: secondary
  },
  body: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    alignSelf: 'center',
    width: widthInput,
    height: 50,
  },
  inputWrapperNoBorder: {
    alignSelf: 'center',
    width: null,
  },
  input: {
    textAlign: 'left',
    alignSelf: 'center',
    width: widthInput,
    height: 50,
  },
  row: {
    flexDirection: 'row'
  }
});
