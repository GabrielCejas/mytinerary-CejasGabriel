import React, { useEffect } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cities from "./pages/Cities";
import Itinerary from "./components/Itinerary";
import Error404 from "./pages/Error404";
import { withRouter } from "./utils/withRouter";
import { connect } from "react-redux";
import userActions from "./redux/actions/userActions";

const ItinerariesProsp = withRouter(Itinerary);

function App(props) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.logInF5(
        localStorage.getItem("token"),
        localStorage.getItem("name"),
        localStorage.getItem("photo")
        
      );
    }
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/Cities/:id" element={<ItinerariesProsp />} />
        {!props.token && <Route path="/signup" element={<SignUp />} />}
        {!props.token && <Route path="/signin" element={<SignIn />} />}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const mapDispatchToProps = {
  logInF5: userActions.logInF5,
};
const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
