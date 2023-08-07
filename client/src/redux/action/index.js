import axios from 'axios';

export const UserRegister = (payload) => {
  return async (dispach) => {
    const res = await axios.post('http://localhost:4000/auth/register', payload);
    const data = res.data
    return dispach({
        type: "USER_REGISTER",
        payload: data
    })
  }
}

export const UserLogin = (email, password) => {
  return async (dispatch) => {

      const response = await axios.post("http://localhost:4000/auth/login", {
          email,
          password,
      });
      const data = localStorage.setItem("token", response.data.token);
      

      return dispatch({
          type: "USER_LOGIN",
          payload: data

      })
  }
};

export const loginSuccess = (token) => ({
  type: 'LOGIN_SUCCESS',
  payload: token
});

export const dataPersonal = (token) => {
  return async (dispatch) => {
   const res = await axios.get('http://localhost:4000/user', {
    method: "GET",
    headers: {
      Authorization: `${token}`,
    "Content-Type": "application/json",
  },
   }) ;
   const data = await res.data;

   return dispatch({
    type:'SET_DATA_PERSONAL',
    payload: data
   })
  }
}

export const turisticPost = (payload) => {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:4000/post', payload);
    const data =  await res.data;

    return dispatch({
      type: "TURISTIC_POST",
      payload: data
    })
  }
}

/*  http://localhost:4000/post */