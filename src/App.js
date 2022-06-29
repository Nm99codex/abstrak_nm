import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewportProvider from "./viewport";
import { ServicesTwo } from "./pages/ServicesTwo";
import  ContactUs  from "./pages/ContactUs";
// import { Footer } from "./components/Footer";
import AboutUs  from "./pages/AboutUs";
import ServiceDetails from "./pages/ServiceDetails"
import ServicesSecond from "./pages/ServicesSecond";


function App() {
  return (
    <>
      <ViewportProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesTwo />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/video-production" element={<ServiceDetails/>}/>
          <Route path="/services-page" element={<ServicesSecond/>} />
          <Route path="/video-production" element={<ServiceDetails/>}/>

        </Routes>
      </ViewportProvider>
    </>
  );
}

export default App;
