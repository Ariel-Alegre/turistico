import axios from 'axios';

export const UserRegister = (payload) => {
  return async (dispach) => {
    const res = await axios.post('https://turistico-production.up.railway.app/auth/register', payload);
    const data = res.data
    return dispach({
        type: "USER_REGISTER",
        payload: data
    })
  }
}


export const UserLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("https://turistico-production.up.railway.app/auth/login", {
        email,
        password,
      });

      // Verifica si la respuesta es exitosa y tiene un token
      if (response.status === 200 && response.data.token) {
        // Almacena el token en el local storage
        localStorage.setItem("token", response.data.token);

        // Despacha la acción de éxito de inicio de sesión con el token
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.token,
        });
      } else {
        // Si no se cumple la condición anterior, lanza un error
        throw new Error("Error during login.");
      }
    } catch (error) {
      // En caso de error, dispara la acción de error de inicio de sesión
      dispatch({ type: "LOGIN_ERROR" });
    }
  };
};


export const UserLogout = (payload) => {
  return async (dispach) => {
    const res = await axios.post('https://turistico-production.up.railway.app/logout', payload);
    const data = res.data
    return dispach({
        type: "LOGOUT_USER",
        payload: data
    })
  }
}

export const loginSuccess = (token) => ({
  type: 'LOGIN_SUCCESS',
  payload: token
});
export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
  };
};
export const dataPersonal = (token) => {
  return async (dispatch) => {
   const res = await axios.get('https://turistico-production.up.railway.app/user', {
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

export const createTuristicPostWithImages = (postPayload, imagesPayload) => {
  return async (dispatch) => {
    try {
      const postResponse = await axios.post('https://turistico-production.up.railway.app/post', postPayload);
      const postId = postResponse.data.id;

      // Obtener las IDs de imágenes del postResponse
      const imageIds = postResponse.data.images.map(image => image.id);

      // Asocia las imágenes al post (si tu backend permite esto)
      const associateImagesResponse = await axios.post(`https://turistico-production.up.railway.app/post/${postId}/associate-images`, { imageIds });

      // Dispatch para indicar que la creación se completó exitosamente
      dispatch({
        type: 'CREATE_TURISTIC_POST_WITH_IMAGES_SUCCESS',
        payload: {
          postId,
          imageIds: associateImagesResponse.data.imageIds
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
};

