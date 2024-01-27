import Comands from "./pages/Comands";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Contact from "./pages/Contact";
import Content from "./pages/Content";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/comands" element={<Comands />} />
          <Route path="/Content/:id" element={<Content />} />
          <Route index="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
