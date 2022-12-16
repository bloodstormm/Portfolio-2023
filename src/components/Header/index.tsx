import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import { motion } from "framer-motion";
import { transition } from "../../utils/Transition";

export const Header = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 120, opacity: 0 }}
      transition={{ ...transition, duration: 1, delay: 1.6 }}
      className="sticky top-0 z-10 flex bg-background/40 py-6 backdrop-blur-md"
    >
      <div className="container mx-auto flex items-center justify-between ">
        <Link
          to="/"
          className="font-Odasans text-5xl font-semibold text-accent"
          onClick={() => window.scrollTo(0, 0)}
        >
          NCLS
        </Link>

        <div className="flex gap-16 font-medium">
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

        <button className="flex items-center gap-3 rounded-3xl bg-accent py-3 px-5 text-white">
          Baixar Currículo
          <BsDownload />
        </button>
      </div>
    </motion.div>
  );
};
