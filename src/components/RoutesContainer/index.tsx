import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence, useScroll } from "framer-motion";

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

  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  // UseEffect feito para ativar as estilizações do header / ProjectDetail quando scrollar
  useEffect(() => {
    return scrollY.onChange((latest) => {
      latest > 30 ? setScrolled(true) : setScrolled(false);
    });
  }, [scrolled]);

  return (
    <>
      <Header scrolled={scrolled} />
      <AnimatePresence mode="wait">
        <Routes key={path.pathname} location={path}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/:id"
            element={<ProjectDetail scrolled={scrolled} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        {path.pathname !== "/" && path.pathname !== "/contact" && <Footer />}
      </AnimatePresence>
    </>
  );
};
