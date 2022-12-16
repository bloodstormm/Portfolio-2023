import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { ProjectDetail } from "../../Pages/ProjectDetail";
import { Home, Contact, Projects, About, Career } from "../../Pages";

export const RoutesContainer = () => {
  const path = useLocation();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes key={path.pathname} location={path}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        {path.pathname !== "/" && path.pathname !== "/contact" && <Footer />}
      </AnimatePresence>
    </>
  );
};
