const initialState = {
  }


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_REGISTER':
      return {
        ...state
      }
 
    

    default: return { ...state }
}
}

