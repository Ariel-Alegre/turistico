const initialState = {
  loginUser: {},
  loginError: null,
  token: localStorage.getItem('token'),
  datapersonal: [],
  posts: [],
  allPost: [],
  detailpost: []

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
        case 'POST_CREATED':
          return {
            ...state,
            posts: [...state.posts, action.payload],
          };

        case 'ALL_POST_TURISTIC': 
        return {
          ...state,
          allPost: action.payload
        }; 

        case 'DETAIL_POST_TURISTIC': 
        return {
          ...state,
          detailpost: action.payload
        }
      
      

 
    

    default: return { ...state }
}
}

