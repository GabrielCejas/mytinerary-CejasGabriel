const userReducer = (
  state = { token: null, name: null, photo: null },
  action
) => {
  switch (action.type) {
    case "SignUp":
      return {
        token: action.payload.token,
        name: action.payload.name,
        photo: action.payload.photo,
      };
    case "LogIn":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("name", action.payload.name);
      localStorage.setItem("photo", action.payload.photo);
      return {
        token: action.payload.token,
        name: action.payload.name,
        photo: action.payload.photo,
      };
    case "logOut":
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("photo");
      return {
        token: null,
        name: null,
        photo: null,
      };
    default:
      return state;
  }
};
export default userReducer;
