import React, { PropTypes } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
/* eslint-disable import/no-unresolved, import/extensions */
import {
  connect,
} from 'react-redux'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  buttonText: {
    color: '#65186E',
  },
  buttonTransparent: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 2,
    paddingHorizontal: 30,
    marginHorizontal: 10,
  },
})

function SlideOne({ app }){
  return (
    <Image
      source={require('~/img/intro/sunrise.jpg')}
      resizeMode="cover"
      style={{
        width: null,
        height: null,
      }}
    >
      <View style={{ height: height * 0.5, alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={[styles.text, {fontSize: 27, paddingHorizontal: 40, marginTop: 40}]}>
          Faça parte da nova geração de serviços financeiros do Brasil.
        </Text>
        <Image
          source={require('~/img/intro/landing_card.png')}
          style={{
            height: 100,
            width: 200,
            // Doesn't work in Android
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 2,
            shadowOpacity: 1.0,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={{ height: height * 0.5, paddingTop: 40}}>
        <Text
          style={[
            styles.text,
            {
              fontSize: 14,
              height: height * 0.5 * 0.2,
              paddingHorizontal: 40,
            },
          ]}
        >
          Cartão NuClone.
          <Text style={{fontWeight: '100'}}>
            &nbsp;Para quem sabe que JavaScript e React Native são incríveis.
          </Text>
        </Text>
        <View
          style={{
            height: height * 0.5 * 0.8,
            alignItems: 'center',
            justifyContent: 'flex-start',
            flex: 1,
            paddingTop: 20,
          }}
        >
          <View style={{height: height * 0.25 * 0.3}}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                PEDIR MEU CONVITE
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: height * 0.25 * 0.7,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity style={[styles.button, styles.buttonTransparent]}>
              <Text style={[styles.buttonText, {color: '#fff'}]}>
                TENHO CONVITE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonTransparent]}
              onPress={() => app.openLoginModal()}
            >
              <Text style={[styles.buttonText, {color: '#fff'}]}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Image>
  )
}

SlideOne.propTypes = {
  app: PropTypes.objectOf(PropTypes.func),
}

export default connect(
  state => ({ appState: state }),
  dispatch => ({
    app: {
      openLoginModal: () => dispatch({
        type: 'app/TOGGLE_LOGIN_MODAL',
      }),
    },
  })
)(SlideOne)
