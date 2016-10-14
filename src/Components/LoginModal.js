import React, { PropTypes } from 'react'
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

import {
  connect,
} from 'react-redux'

import t, {
  struct,
} from 'tcomb-form-native'

// Components
import Button from '~/Components/Button'

const { Form } = t.form

const LoginSchema = struct({
  login: t.String,
  password: t.String,
})

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
              <Form
                type={LoginSchema}
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
            <Button transparent blueBorder>
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
