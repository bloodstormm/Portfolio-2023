import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { calcLength, motion } from "framer-motion";

import { fadeInDown } from "../../utils/Animations";
import { MenuModal } from "../MenuModal";

import { MdOpenInNew } from "react-icons/md";
import { BsMoon, BsStars } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useFetchCurriculum } from "../../hooks/useFetchCurriculum";

type HeaderProps = {
  scrolled: boolean;
};

export const Header = ({ scrolled }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCurriculum } = useFetchCurriculum();

  const curriculumUrl = useMemo(() => getCurriculum(), []);

  // Tema do sistema do usuário
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState<String>();

  // Na primeira vez que a página carrega, checamos se o user selecionou um tema diferente do seu sistema
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && darkQuery.matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  // Lógica para alterar o tema a cada vez que clica no botão de tema, e salvamos no localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Handler do botão
  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
          className="font-Odasans text-5xl font-semibold text-accent dark:text-darkAccent"
          onClick={() => window.scrollTo(0, 0)}
        >
          NCLS
        </Link>

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

        <div className="flex items-center gap-4">
          {theme === "light" ? (
            <BsMoon
              onClick={handleSwitchTheme}
              className={`h-6 w-6 ${scrolled ? 'text-whity' : 'text-darkBrown'}  hover:scale-125 cursor-pointer transition duration-500`}
            />
          ) : (
            <BsStars
              onClick={handleSwitchTheme}
              className="h-6 w-6 text-whity hover:scale-125 cursor-pointer transition duration-500"
            />
          )}
          <a
            href={curriculumUrl}
            download
            target="_blank"
            className="hidden items-center gap-3 rounded-3xl bg-accent dark:bg-darkAccent hover:brightness-110 py-3 px-5 text-white transition-all disabled:cursor-not-allowed disabled:hover:bg-accent/40 disabled:hover:text-white/80 lg:flex"
          >
            Ver Currículo
            <MdOpenInNew />
          </a>
          {/* Botao Menu p Mobile  */}
          <button onClick={() => setIsOpen(true)} className="block lg:hidden">
            <HiOutlineMenuAlt4 className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Menu p Mobile */}
      <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.div>
  );
};
