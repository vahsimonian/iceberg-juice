import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
