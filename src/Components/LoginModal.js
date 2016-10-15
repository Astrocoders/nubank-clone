import React, { PropTypes } from 'react'
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native'

import {
  TextInputMask,
} from 'react-native-masked-text'

import {
  connect,
} from 'react-redux'

// Components
import Button from '~/Components/Button'

const formStyles = {
  input: {
    borderWidth: 1.2,
    borderRadius: 0,
    borderColor: 'rgba(101,24,110, 0.5)',
    paddingVertical: 10,
    color: '#65186E',
    paddingHorizontal: 15,
    fontSize: 16,
  },
}

const { height } = Dimensions.get('window')

function LoginModal({ isVisible, app }){
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent
    >
      <View style={{flex: 1, width: null, height: null}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#fff',
            margin: 20,
            borderRadius: 5,
            padding: 10,
          }}
        >
          <View
            style={{
              height: (height * 0.5) - 20,
            }}
          >
            <View
              style={{
                height: 50,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  left: 0,
                  position: 'absolute',
                }}
                onPress={app.closeLoginModal}
              >
                <Text
                  style={{
                    fontSize: 40,
                    color: '#65186E',
                    fontWeight: '100',
                  }}
                >
                  &times;
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 25,
                  color: '#65186E',
                  fontWeight: 'bold',
                }}
              >
                Login
              </Text>
            </View>

            <View style={{paddingTop: 20}}>
              <TextInputMask
                placeholder="CPF"
                placeholderTextColor="#bbb"
                underlineColorAndroid="transparent"
                returnKeyType="next"
                style={formStyles.input}
                type="cpf"
                maxLength={14}
              />
              <TextInput
                placeholder="Senha da sua conta"
                placeholderTextColor="#bbb"
                underlineColorAndroid="transparent"
                style={[formStyles.input, {
                  marginTop: -1,
                }]}
                secureTextEntry
              />
            </View>
          </View>

          <View
            style={{
              height: (height * 0.5) - 80,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <Button
              style={{
                paddingHorizontal: 100,
              }}
              transparent
              blueBorder
            >
              CONFIRMAR
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}

LoginModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  app: PropTypes.objectOf(PropTypes.func).isRequired,
}

export default connect(
  state => ({ isVisible: state.app.isLoginModalActive }),
  dispatch => ({
    app: {
      closeLoginModal: () => dispatch({ type: 'app/TOGGLE_LOGIN_MODAL' }),
    },
  })
)(LoginModal)
