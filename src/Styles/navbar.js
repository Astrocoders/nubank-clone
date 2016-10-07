'use strict';

import {StyleSheet} from 'react-native';
import {brandSecondary as secondary} from './colors';

export default StyleSheet.create({
  navbar: {
    height: 50
  },
  toolbar: {
    height: 50,
    backgroundColor: secondary,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 1.5
  },
  title: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '100'
  },
  icons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
  },
});
