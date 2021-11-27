import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cities from "./pages/Cities";
import Itinerary from "./components/Itinerary";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/Info/:id" element={<Itinerary/>} />
        <Route path="/notFound" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/notFount" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
