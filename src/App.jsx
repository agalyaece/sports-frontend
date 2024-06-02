import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddPlayer from "./components/AddPlayer";
import "./App.css";
import Player from "./components/Player";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {


  return (<>
    <div className="App">
      <Header />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/player/addplayer" element={<AddPlayer />} />
      </Routes>
      <Footer />
    </div>
  </>
  );
}

export default App
