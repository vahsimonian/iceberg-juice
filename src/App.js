import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Juices from "./components/Juices";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Juices /> */}
      <Search />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
