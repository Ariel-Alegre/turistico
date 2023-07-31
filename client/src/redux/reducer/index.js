const initialState = {
  loginUser: [],
  token: localStorage.getItem('token'),
  datapersonal: [],

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

        case 'SET_DATA_PERSONAL': 
        return {
          ...state,
          datapersonal: action.payload
        }
 
    

    default: return { ...state }
}
}

