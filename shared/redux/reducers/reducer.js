const userInitInfo = {
  name: '',
  email: '',
  company: '',
  role: '',
  password: '',
};

export default function userReducer(state = userInitInfo, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        ...action.payload,
      };
    case 'LOGOUT_USER':
      return { ...userInitInfo };
    default:
      return state;
  }
}
