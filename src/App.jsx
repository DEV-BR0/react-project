import Login from "./pages/Login/Login";
import Royxat from "./pages/Royxat/Royhat";
import Navbar from "./pages/Header/Navbar";
import Dashboard from "./pages/Dashboard/Dash";
import Otkazma from './pages/Tranzaksiyalar/Tranzaksiyalar';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/royhat" element={<Royxat />} />
        </Route>

        <Route element={<Navbar/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/otkazma' element={<Otkazma/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
