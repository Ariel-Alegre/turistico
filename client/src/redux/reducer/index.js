const initialState = {
  loginUser: {},
  loginError: null,
  token: localStorage.getItem('token'),
  datapersonal: [],
  createdPostId: null,
  createdImageIds: [],

  }


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_REGISTER':
      return {
        ...state
      };

      case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload,
      };
      case 'LOGOUT_USER':
        // Limpia el token en el estado
        return {
          ...state,
          token: null,
        };

    case 'LOGIN_ERROR':
      return {
        ...state,
        loginError: true,
      };

        case 'SET_DATA_PERSONAL': 
        return {
          ...state,
          datapersonal: action.payload
        };

      

        case 'CREATE_TURISTIC_POST_WITH_IMAGES_SUCCESS':
          return {
            ...state,
            createdPostId: action.payload.postId,
            createdImageIds: action.payload.imageIds,
          };
 
    

    default: return { ...state }
}
}

