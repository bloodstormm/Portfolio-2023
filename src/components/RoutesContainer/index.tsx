import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Contact, Projects, About } from "../../Pages";
import { Header } from "../../components/Header";

export const RoutesContainer = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};
