import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Fruits from "./components/Fruits";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Fruits />
      <Search />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
