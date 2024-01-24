import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Juices from './components/Juices';
import Contact from './Contact';
import Footer from './Footer';
import { JuiceProvider } from './JuiceContext';
// import Search from "./components/Search";
import Catalogue from './navbar links/Catalogue';
import WeWorldwide from './navbar links/WeWorldwide';
import Services from './navbar links/Services';

function App() {
  return (
    <Router>
      <JuiceProvider>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Contact />} />
          <Route path="/products" element={<Juices />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/services" element={<Services />} />
          <Route path="/we-worldwide" element={<WeWorldwide />} />
        </Routes>
        <Footer />
      </JuiceProvider>
      {/* <Route path="/search" element={<Search />} /> */}
      {/* <Home /> */}
      {/* <Juices /> */}
      {/* <Contact /> */}
    </Router>
  );
}

export default App;
