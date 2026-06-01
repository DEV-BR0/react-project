import Login from "./pages/Login/Login";
import Royxat from "./pages/Royxat/Royhat";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
   
      <Routes>
       <Route path='/' element={<Login />} />
       <Route path='/royhat' element={<Royxat />} />
      </Routes>
    </>
  );
}

export default App;
