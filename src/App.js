import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./components/Home";
import Juices from "./components/Juices";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Juices /> */}
      <Search />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
