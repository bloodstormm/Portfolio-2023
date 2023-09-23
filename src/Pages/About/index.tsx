import { motion } from "framer-motion";
import { aboutImages } from "../../constants/MyImages";

import { fadeInDown, fadeInLeft, transition } from "../../utils/Animations";
import { StaggerContainer, itemAnimation } from "../../utils/Animations";
import moment from "moment";

import { PageTransition } from "../../components/PageTransition";

import { HiOutlineCodeBracket, HiOutlineScale } from "react-icons/hi2";
import { AiOutlineEye } from "react-icons/ai";
import { useEffect, useState } from "react";

export const About = () => {
  const [aboutImage, setAboutImage] = useState("");
  const [imageDescription, setImageDescription] = useState("");

  const dataNascimento = moment("2004-03-28", "YYYY-MM-DD");
  const hoje = moment();
  // Calcular idade
  const idade = hoje.diff(dataNascimento, "years");

  useEffect(() => {
    const randomPicture = Math.floor(Math.random() * aboutImages.length);
    // Providing a random index to get the image and informations about it
    setAboutImage(aboutImages[randomPicture].image);
    setImageDescription(aboutImages[randomPicture].description);
  }, [location.pathname]);

  return (
    <>
      <PageTransition />

      <section className="container mx-auto flex min-h-[80vh] w-full flex-col gap-12 p-4 sm:p-6 lg:flex-row">
        <motion.div>
          <motion.div
            {...fadeInDown}
            transition={{ ...fadeInDown.transition, duration: 1.8, delay: 0.6 }}
            className="mt-8"
          >
            <h1 className="text-center font-Wulkan text-5xl font-medium uppercase sm:text-left sm:text-7xl">
              Sobre Mim
            </h1>

            <p className="max-w-sm py-8 text-sm sm:max-w-2xl sm:text-base">
              Eu me chamo Nícolas Malachias. Tenho {idade} anos e atualmente sou
              estudante de Análise e Desenvolvimento de Sistemas na UNITAU.
              Estou estagiando na Johnson & Johnson na área de TI. Amo música e
              curto muito tocar violão e guitarra, além de praticar ciclismo e
              jogar basquete algumas vezes.
            </p>

            <div className="mx-auto w-[90%] border border-darkBrown/10"></div>

            <div
              className="my-4 flex w-full flex-col gap-4 rounded-xl bg-accent/20 py-4 px-3 text-center font-Wulkan text-xl font-semibold
             text-darkBrown sm:m-6 sm:mx-auto sm:w-fit sm:flex-row sm:gap-8 sm:p-6 sm:text-3xl sm:font-normal"
            >
              <h2>
                <span className="mr-2 text-2xl font-semibold text-accent">
                  6+
                </span>
                Projetos feitos
              </h2>
              <h2>
                <span className="mr-2 text-2xl font-semibold text-accent">
                  1
                </span>
                Ano de experiência
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={StaggerContainer}
            initial="hidden"
            animate="show"
            exit="exit"
            className="my-6 flex flex-col gap-4 sm:flex-row"
          >
            <motion.div
              variants={itemAnimation}
              className="rounded-xl bg-[#f2e9e1] p-4 text-center transition-[filter] duration-300 hover:brightness-105 sm:max-w-[17rem]"
            >
              <HiOutlineCodeBracket className="mx-auto mb-2 text-4xl text-accent" />
              <h3 className="font-semibold lg:text-lg ">Front-end</h3>
              <p className="pt-4">
                Atualmente a linguagem que mais uso é Typescript, usando em
                conjunto com React e TailwindCSS
              </p>
            </motion.div>
            <motion.div
              variants={itemAnimation}
              className="rounded-xl bg-[#f2e9e1] p-4 text-center transition-[filter] duration-300 hover:brightness-105 sm:max-w-[17rem]"
            >
              <AiOutlineEye className="mx-auto mb-2 text-4xl text-accent" />
              <h3 className="text-base font-semibold lg:text-lg ">
                Visual & Design
              </h3>
              <p className="pt-4">
                Olho para o lado visual das coisas. Eu gosto de criar belas
                ilustrações e animações!
              </p>
            </motion.div>
            <motion.div
              variants={itemAnimation}
              className="rounded-xl bg-[#f2e9e1] p-4 text-center transition-[filter] duration-300 hover:brightness-105 sm:max-w-[17rem]"
            >
              <HiOutlineScale className="mx-auto mb-2 text-4xl text-accent" />
              <h3 className="text-base font-semibold lg:text-lg ">
                Princípios
              </h3>
              <p className="pt-4">
                Sou uma pessoa de valores e prezo por tudo que faço e para quem
                eu faço
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          {...fadeInLeft}
          transition={{ ...fadeInLeft.transition, duration: 1.45, delay: 0.5 }}
          className="mx-auto w-4/5 overflow-hidden rounded-2xl sm:relative lg:w-2/6"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ ...transition, duration: 1.45 }}
            src={aboutImage}
            className="inset-0 h-full w-full rounded-2xl object-cover object-center lg:absolute"
            alt="A Picture about myself"
          />

          <div className="hidden bg-gradient-to-t from-darkBrown to-transparent lg:absolute lg:bottom-0 lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Esse sou eu! 🥂
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              {imageDescription}
            </p>
          </div>
        </motion.div>

        <div className="dotsGrid absolute left-0 top-0 z-10 hidden h-12 w-12 lg:block 2xl:h-24 2xl:w-32"></div>
        <div className="dotsGrid absolute bottom-0 z-20 hidden h-16 w-48 2xl:block 2xl:w-64"></div>
        <div className="dotsGrid absolute right-0 top-0 z-20 hidden h-16 w-24 lg:block 2xl:w-44"></div>
      </section>
    </>
  );
};
