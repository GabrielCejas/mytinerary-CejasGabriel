const userReducer = (
  state = { token: null, firstName: null, photo: null },
  action
) => {
  switch (action.type) {
    case "SignUp":
      return {
        token: action.payload.token,
        firstName: action.payload.firstName,
        photo: action.payload.photo,
      };
    case "LogIn":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("firstName", action.payload.firstName);
      localStorage.setItem("photo", action.payload.photo);
      return {
        token: action.payload.token,
        firstName: action.payload.firstName,
        photo: action.payload.photo,
      };
    case "logOut":
      localStorage.removeItem("token");
      localStorage.removeItem("firstName");
      localStorage.removeItem("photo");
      return {
        token: null,
        firstName: null,
        photo: null,
      };
    default:
      return state;
  }
};
export default userReducer;
