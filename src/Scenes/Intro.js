import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import Swiper from 'react-native-swiper'
/* eslint-disable import/no-unresolved, import/extensions */
import LinearGradient from 'react-native-linear-gradient'

import SlideOne from './Intro/SlideOne'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default function Intro(){
  return (
    <Swiper style={styles.wrapper}>
      <SlideOne />
      <View style={styles.slide2}>
        <Text style={styles.text}>Astrocoders</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And Beyond</Text>
      </View>
    </Swiper>
  )
}
