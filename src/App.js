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

function App() {
  return (
    <Router>
      <JuiceProvider>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="juices" element={<Juices />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="/search" element={<Search />} /> */}
          {/* <Home /> */}
          {/* <Juices /> */}
          {/* <Contact /> */}
        </Routes>
        <Footer />
      </JuiceProvider>
    </Router>
  );
}

export default App;
