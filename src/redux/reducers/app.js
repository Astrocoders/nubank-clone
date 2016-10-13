export default function app(state = {}, action = {}){
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
