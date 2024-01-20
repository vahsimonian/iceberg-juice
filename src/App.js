import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Home from './components/Home';
import Juices from './components/Juices';
import Navbar from './components/Navbar';
// import Search from "./components/Search";
import { JuiceProvider } from './JuiceContext';

function App() {
  return (
    <div>
      <JuiceProvider>
        <Navbar />
        <Home />
        <Juices />
        {/* <Search /> */}
        <Contact />
        <Footer />
      </JuiceProvider>
    </div>
  );
}

export default App;
