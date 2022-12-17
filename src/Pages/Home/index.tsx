import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { transition } from "../../utils/Transition";

import { PageTransition } from "../../components/PageTransition";

import picture from "../../assets/pic.jpg";
import { jnj, opt, villarta } from "../../assets/companies";

import { BsInstagram, BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      <PageTransition />
      <section className="container relative z-20 mx-auto w-full overflow-hidden sm:mt-4">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ...transition, duration: 1 }}
          className="mx-auto grid items-center gap-4 p-8 sm:grid-cols-3 xl:gap-14 "
        >
          <div className="flex flex-col gap-6">
            <h1 className=" text-center font-Wulkan text-4xl font-medium uppercase text-zinc-700 sm:text-left lg:text-5xl">
              Dev <br className="hidden sm:block" /> Front-End | UI/UX
            </h1>

            <p className="text-sm lg:text-base">
              Olá, me chamo Nícolas, seja bem-vindo(a) ao meu Portfólio de 2023.
              Logo abaixo você encontra algumas das minhas redes, sinta se a
              vontade de entrar em contato! 😅
            </p>
            {/* Redes sociais */}
            <div className="flex justify-center gap-10 pb-4 text-3xl sm:justify-start sm:pt-6">
              <a
                href="https://www.instagram.com/_nicolasantoss/"
                className="transition hover:text-accent"
                target="_blank"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/nicolas-malachias/"
                className="transition hover:text-accent"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/bloodstormm"
                className="transition hover:text-accent"
                target="_blank"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <div className="mx-auto w-[90%] overflow-hidden rounded-full">
            <motion.img
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ ...transition, duration: 1.45, delay: 0.7 }}
              src={picture}
              className="mx-auto w-full "
            />
          </div>
          <div className="relative h-2/3 ">
            <h1 className="text-center font-Wulkan text-4xl uppercase sm:text-left lg:text-6xl">
              Nícolas Malachias
            </h1>

            <Link
              to="/projects"
              className="absolute -bottom-4 left-6 hidden h-32 w-32 items-center justify-center rounded-full border border-[#3d3731] sm:flex lg:left-14 lg:h-40 lg:w-40 xl:bottom-0"
            >
              <div className="absolute top-2 right-1 h-6 w-6 rounded-full bg-accent lg:top-1 lg:right-5"></div>
              <p className="w-20">Ver meus Projetos</p>
              <BsArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -70, opacity: 0 }}
          transition={{ ...transition, duration: 1.25 }}
          className="flex w-full justify-center gap-6 py-12 sm:gap-20 sm:p-6"
        >
          <img src={jnj} alt="jnj" className="h-12 grayscale lg:h-16" />
          <img src={opt} alt="opt" className="h-12 grayscale lg:h-16" />
          <img
            src={villarta}
            alt="villarta"
            className="h-12 grayscale lg:h-16"
          />
        </motion.div>
      </section>

      {/* Efeitos em volta do site */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
        className="absolute bottom-5  left-20 h-96 w-72 rounded-full bg-gradient-to-br from-accent to-transparent p-px  sm:bottom-0 sm:rounded-t-full "
      >
        <div className="h-full w-full rounded-t-full bg-background"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
        className="absolute top-0 -right-0 h-64 w-56 rounded-b-full bg-gradient-to-tl
         from-accent to-transparent p-px "
      >
        <div className="h-full w-full rounded-b-full bg-background"></div>
      </motion.div>
    </>
  );
};
