import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import { motion } from "framer-motion";

export const Header = () => {
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 120, opacity: 0 }}
      transition={{ ...transition, duration: 1, delay: 0.8 }}
      className="relative z-20 flex p-8"
    >
      <div className="container mx-auto flex items-center justify-between ">
        <Link
          to="/"
          className="font-Odasans text-5xl font-semibold text-[#c5995d]"
        >
          NCLS
        </Link>

        <div className="flex gap-16 font-medium">
          <Link to="about">Sobre Mim</Link>
          <Link to="projects">Projetos</Link>
          <Link to="contact">Contato</Link>
        </div>

        <button className="flex items-center gap-3 rounded-3xl bg-[#c5995d] py-3 px-5 text-white">
          Baixar Currículo
          <BsDownload />
        </button>
      </div>
    </motion.div>
  );
};
