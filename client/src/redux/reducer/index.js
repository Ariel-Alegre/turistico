const initialState = {
  loginUser: [],
  token: localStorage.getItem('token'),
  }


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_REGISTER':
      return {
        ...state
      };

      case 'USER_LOGIN':

      return {
        ...state,
        loginUser: action.payload
      };

      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.payload,
         
        };
 
    

    default: return { ...state }
}
}

