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
  logInF5: ( token, name, photo) => {
    return (dispatch, getState) => {
      dispatch({ type: "LogIn", payload: { token, name, photo } });
    };
  },
};

export default userActions;
