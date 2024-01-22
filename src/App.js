import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Juices from './components/Juices';
import Contact from './Contact';
import Footer from './Footer';
import { JuiceProvider } from './JuiceContext';
// import Search from "./components/Search";

function App() {
  return (
    <Router>
      <JuiceProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/juices" element={<Juices />} />
          {/* Uncomment or add more routes as needed */}
          {/* <Route path="/search" element={<Search />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* Add additional routes here */}
        </Routes>
        <Footer />
      </JuiceProvider>
    </Router>
  );
}

export default App;
