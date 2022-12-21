import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { motion, useScroll } from "framer-motion";

import { fadeInDown } from "../../utils/Animations";
import { MenuModal } from "../MenuModal";

import { BsDownload } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  // UseEffect feito para ativar as estilizações do header quando scrollar
  useEffect(() => {
    return scrollY.onChange((latest) => {
      latest > 30 ? setScrolled(true) : setScrolled(false);
    });
  }, [scrolled]);

  return (
    <motion.div
      {...fadeInDown}
      transition={{ ...fadeInDown.transition, delay: 1.1 }}
      className={`${
        scrolled && "bg-darkBrown/10 text-whity shadow-sm backdrop-blur-lg"
      } sticky top-0 z-30 flex  py-6 transition-colors duration-150`}
    >
      <div className="container mx-auto flex items-center justify-between px-10 xl:px-0 ">
        <Link
          to="/"
          className="font-Odasans text-5xl font-semibold text-accent"
          onClick={() => window.scrollTo(0, 0)}
        >
          NCLS
        </Link>

        {/* Botao Menu p Mobile  */}
        <button onClick={() => setIsOpen(true)} className="block lg:hidden">
          <HiOutlineMenuAlt4 className="text-2xl" />
        </button>

        <div className="hidden gap-16 font-medium lg:flex">
          <Link
            to="about"
            className="bottomLine"
            onClick={() => window.scrollTo(0, 0)}
          >
            Sobre Mim
          </Link>
          <Link
            to="projects"
            className="bottomLine"
            onClick={() => window.scrollTo(0, 0)}
          >
            Projetos
          </Link>
          <Link
            to="career"
            className="bottomLine"
            onClick={() => window.scrollTo(0, 0)}
          >
            Carreira
          </Link>
          <Link
            to="contact"
            className="bottomLine"
            onClick={() => window.scrollTo(0, 0)}
          >
            Contato
          </Link>
        </div>

        <button className="hidden items-center gap-3 rounded-3xl bg-accent py-3 px-5 text-white lg:flex">
          Baixar Currículo
          <BsDownload />
        </button>
      </div>

      {/* Menu p Mobile */}
      <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.div>
  );
};
