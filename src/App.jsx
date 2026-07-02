import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Notes from "./Notefine/Notes";
import useAxios from "./hooks/useAxios";
import Dashboard from "./pages/Dashboard/Dash";
import Navbar from "./pages/Header/Navbar";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profil/Profil";
import Royxat from "./pages/Royxat/Royhat";
import Otkazma from "./pages/Tranzaksiyalar/Tranzaksiyalar";
import Statistika from "./pages/statistika/Statistika";
import Cotegoriy from "./pages/cotegoriy/Cotegoriy";
const API = "http://localhost:3000/users";
function App() {
  const resoult = useAxios(API);

  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route>
          <Route path="/" element={<Login />} back={resoult} />
          <Route path="/royhat" element={<Royxat />} back={resoult} />
        </Route>

        <Route element={<Navbar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/otkazma" element={<Otkazma />} />
          <Route path="/kategoria" element={<Cotegoriy/>} />
          <Route path="/info" element={<Profile />} />
          <Route path="/statistika" element={<Statistika />} />
        </Route>
        <Route path="*" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;
