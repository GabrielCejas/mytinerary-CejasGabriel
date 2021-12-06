import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from "./pages/Cities";
import Itinerary from "./components/Itinerary";
import Error404 from "./pages/Error404";
import { withRouter } from "./utils/withRouter";

const ItinerariesProsp = withRouter(Itinerary);
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/Cities/:id" element={<ItinerariesProsp />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
