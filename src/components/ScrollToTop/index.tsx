import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const path = useLocation();

  useEffect(() => {
    // 👇️ scroll to top on every page load
    window.scrollTo(0, 0);
    console.log("trocou a pagina e to rodando");
  }, [path.pathname]);

  return <></>;
};
