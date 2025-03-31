import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Landing from "./Pages/Landing";
import AboutUs from "./Pages/AboutUs";
import DoctorDash from "./Pages/DoctorDash";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login"

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Landing />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="doctordash" element={<DoctorDash />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="login" element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
