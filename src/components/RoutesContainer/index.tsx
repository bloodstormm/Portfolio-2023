import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { Header } from "../Header";
import { Footer } from "../Footer";
import {
  Home,
  Contact,
  Projects,
  About,
  Career,
  ProjectDetail,
} from "../../Pages";

export const RoutesContainer = () => {
  const path = useLocation();

  useEffect(() => {
    // 👇️ scroll to top on every page load
    window.scrollTo(0, 0);
  }, [path.pathname]);

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
