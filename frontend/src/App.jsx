import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from './components/DarkModeContext';
import { AuthContextProvider } from "./context/AuthContext";

import Header from './components/Header';
import Hero from './sections/hero';
import Services from './sections/services';
import Popular from './sections/popular';
import Properties from './sections/properties';
import Clients from './sections/clients';
import Contact from './sections/contact';
import Footer from './components/Footer';
import About from './sections/about';

// Import Login and Signup Pages
import Login from "./sections/Login";
import Register from "./sections/Register";

const App = () => {
  return (
    <AuthContextProvider>
      <DarkModeProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Popular />
                <Properties />
                <Services />
                <Clients />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </DarkModeProvider>
    </AuthContextProvider>
  );
};

export default App;