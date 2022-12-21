import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export const isScrolled = () => {
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  // UseEffect feito para ativar as estilizações do header quando scrollar
  useEffect(() => {
    return scrollY.onChange((latest) => {
      latest > 30 ? setScrolled(true) : setScrolled(false);
    });
  }, [scrolled, scrollY]);

  return scrolled;
};
