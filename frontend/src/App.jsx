import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

import "./App.css";
import Simpsons from "./pages/Simpsons";

function App() {
  return (
    <main className="main-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simpsons" element={<Simpsons />} />
      </Routes>
    </main>
  );
}

export default App;
