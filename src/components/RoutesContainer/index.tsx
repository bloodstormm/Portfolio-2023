import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import { Home, Contact, Projects, About, Career } from "../../Pages";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { LoaderLayer } from "../LoaderLayer";

export const RoutesContainer = () => {
  const path = useLocation();
  const [showContent, setShowContent] = useState(true);

  // Possivel solução pra uma tela de loader
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowContent(true);
  //   }, 1);

  //   return () => clearTimeout(timer);
  // });

  return (
    <>
      {/* <LoaderLayer showContent={showContent} /> */}
      <Header />
      {showContent && (
        <>
          <AnimatePresence initial={true} mode="wait">
            <Routes key={path.pathname} location={path}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/career" element={<Career />} />
            </Routes>
            {path.pathname !== "/" && <Footer />}
          </AnimatePresence>
        </>
      )}
    </>
  );
};
