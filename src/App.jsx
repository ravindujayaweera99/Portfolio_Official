import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
