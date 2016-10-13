import React, { PropTypes } from 'react'
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import {
  connect,
} from 'react-redux'

function LoginModal({ isVisible, app }){
  return (
    <Modal
      visible={isVisible}
      transparent
      onRequestClose={app.closeLoginModal}
    >
      <View style={{flex: 1, width: null, height: null, padding: 20, backgroundColor: '#fff'}}>
        <Text>Login modal</Text>
        <TouchableOpacity>
          <Text>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

LoginModal.propTypes = {
  isVisible: PropTypes.bool,
  app: PropTypes.objectOf(PropTypes.func),
}

export default connect(
  state => ({ isVisible: state.isLoginModalActive }),
  dispatch => ({
    app: {
      closeLoginModal: () => dispatch({ type: 'app/TOGGLE_LOGIN_MODAL' }),
    },
  })
)(LoginModal)
