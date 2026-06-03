import Login from "./pages/Login/Login";
import Royxat from "./pages/Royxat/Royhat";
import Navbar from "./pages/Header/Navbar";
import Dashboard from "./pages/Dashboard/Dash";
import Otkazma from "./pages/Tranzaksiyalar/Tranzaksiyalar";
import Katalog from "./pages/Katalog/Katalog";
import Profile from "./pages/Profil/Profil";
import Statistika from "./pages/statistika/Statistika";
import Notes from "./Notefine/Notes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/royhat" element={<Royxat />} />
        </Route>

        <Route element={<Navbar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/otkazma" element={<Otkazma />} />
          <Route path="/kategoria" element={<Katalog />} />
          <Route path="/info" element={<Profile />} />
          <Route path="/statistika" element={<Statistika />} />
        </Route>
          <Route path="*" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;
