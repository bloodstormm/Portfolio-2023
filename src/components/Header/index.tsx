import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { fadeInDown } from "../../utils/Animations";
import { MenuModal } from "../MenuModal";

import { BsDownload } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useFetchCurriculum } from "../../hooks/useFetchCurriculum";

type HeaderProps = {
  scrolled: boolean;
};

export const Header = ({ scrolled }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {getCurriculum} = useFetchCurriculum()
  
  const curriculumUrl = useMemo(() => getCurriculum(), []);

  console.log()


  return (
    <motion.div
      {...fadeInDown}
      transition={{ ...fadeInDown.transition, delay: 1.1 }}
      className={`${
        scrolled && "bg-darkBrown/10 text-whity shadow-sm backdrop-blur-xl"
      } sticky top-0 z-30 flex py-6 transition-colors duration-150`}
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

        <a
          href={curriculumUrl}
          download
          target="_blank" 
          className="hidden items-center gap-3 rounded-3xl bg-accent hover:brightness-110 py-3 px-5 text-white transition-all disabled:cursor-not-allowed disabled:hover:bg-accent/40 disabled:hover:text-white/80 lg:flex"
        >
          Ver Currículo
          <MdOpenInNew />
        </a>
      </div>

      {/* Menu p Mobile */}
      <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.div>
  );
};
