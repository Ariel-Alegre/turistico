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