const userReducer = (
  state = { token: null, firstName: null, photo: null, _id: null },
  action
) => {
  switch (action.type) {
    case "SignUp":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("firstName", action.payload.firstName);
      localStorage.setItem("photo", action.payload.photo);
      localStorage.setItem("_id", action.payload._id)
      return {
        token: action.payload.token,
        _id: action.payload._id,
        firstName: action.payload.firstName,
        photo: action.payload.photo,
      };
    case "LogIn":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("_id", action.payload._id);
      localStorage.setItem("firstName", action.payload.firstName);
      localStorage.setItem("photo", action.payload.photo);

      return {
        token: action.payload.token,
        _id:action.payload._id,
        firstName: action.payload.firstName,
        photo: action.payload.photo,
      };
    case "logOut":
      localStorage.removeItem("token");
      localStorage.removeItem("firstName");
      localStorage.removeItem("photo");
      localStorage.removeItem("_id");
      return {
        token: null,
        _id:null,
        firstName: null,
        photo: null,
      };
    default:
      return state;
  }
};
export default userReducer;
