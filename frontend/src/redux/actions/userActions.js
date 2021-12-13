import axios from "axios";

const userActions = {
  logIn: (form) => {
    return async (dispatch, getState) => {
      let response = await axios.post("http://localhost:4000/api/user/signin", {
        ...form,
      });
      if (response.data.success) {
        dispatch({ type: "LogIn", payload: response.data.response });
      }
      return response;
    };
  },
  signUp: (form) => {
    return async (dispatch, getState) => {
      let response = await axios.post("http://localhost:4000/api/user/signup", {
        ...form,
      });
      if (response.data.success) {
        dispatch({ type: "SignUp", payload: response.data.response });
      }
      return response;
    };
  },
  logOut: () => {
    return (dispatch, getState) => {
      dispatch({ type: "logOut" });
    };
  },


  logInF5: ( token) => {
    return async (dispatch, getState) => {
      try{
        let response = await axios.get('http://localhost:4000/api/user/verifyToken', {
    headers: {
        Authorization: 'Bearer '+ token,
    }
})
    dispatch({type:"SignUp", payload:{token, firstName:response.data.firstName, photo: response.data.photo, _id:response.data._id}})
    }catch(error) {
       return  dispatch({type:'logOut' })
    }
      
    };
  },
};

export default userActions;
