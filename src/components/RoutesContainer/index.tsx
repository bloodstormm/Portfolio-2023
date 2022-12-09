import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Contact, Projects, About } from "../../Pages";
import { Header } from "../../components/Header";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { LoaderLayer } from "../LoaderLayer";

export const RoutesContainer = () => {
  const path = useLocation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 800);

    return () => clearTimeout(timer);
  });

  console.log(showContent);
  return (
    <>
      <LoaderLayer showContent={showContent} />
      <Header />
      {showContent && (
        <>
          <AnimatePresence initial={true} mode="wait">
            <Routes key={path.pathname} location={path}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
};
