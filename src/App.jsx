import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AddPlayer from "./components/pages/AddPlayer";
import "./App.css";
import Player from "./components/pages/Player";
import Navbar from "./components/Navbar/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UpdatePlayer from "./components/pages/UpdatePlayer";
import Teams from "./components/pages/teams/Teams";
import WomensTeam from "./components/pages/teams/DomesticTeam";
import InternationalTeam from "./components/pages/teams/DomesticTeam";
import TeamSchedule from "./components/pages/schedule/TeamSchedule";
import DomesticTeam from "./components/pages/teams/DomesticTeam";
import LeagueTeam from "./components/pages/teams/LeagueTeam";
import InternationalSchedule from "./components/pages/schedule/InternationalSchedule";
import T20Teams from "./components/pages/t20/T20Teams";
import TeamPlayerPage from "./components/pages/t20/TeamPlayerPage";

function App() {


  return (<>
    <div className="App">
      <Header />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/player/addplayer" element={<AddPlayer />} />
        <Route path="/player/updateplayer/:id" element={<UpdatePlayer />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/women" element={<WomensTeam/>} />
        <Route path="/teams/international" element={<InternationalTeam />} />
        <Route path="/teams/domestic" element={<DomesticTeam />} />
        <Route path="/teams/league" element={<LeagueTeam />} />
        <Route path="/schedule" element={<TeamSchedule/>} />
        <Route path="/schedule/international" element={<InternationalSchedule />} />
        <Route path="/t20WorldCup/teams" element={<T20Teams />} />
        <Route path="/t20WorldCup/teams/:country" element={<TeamPlayerPage />} />

      </Routes>
      <Footer />
    </div>
  </>
  );
}

export default App
