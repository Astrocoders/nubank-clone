export default function app(state = {
  isLoginModalActive: false,
}, action = {}){
  switch (action.type){
    case 'app/TOGGLE_LOGIN_MODAL':
      return {
        ...state,
        isLoginModalActive: !state.isLoginModalActive,
      }
    default:
      return { ...state }
  }
}
