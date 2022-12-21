import { motion } from "framer-motion";
import aboutPic from "../../assets/aboutPic.jpg";
import { HiOutlineCodeBracket, HiOutlineScale } from "react-icons/hi2";
import { AiOutlineEye } from "react-icons/ai";
import { transition } from "../../utils/Transition";
import { StaggerContainer, itemAnimation } from "../../utils/Animations";
import { PageTransition } from "../../components/PageTransition";

export const About = () => {
  const slideDown = {
    hidden: { y: -70, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ...transition,
        duration: 2,
      },
    },
    exit: { y: -70, opacity: 0, transition: { ...transition, delay: 0 } },
  };

  return (
    <>
      <PageTransition />

      <motion.section className="container mx-auto flex min-h-[80vh] w-full flex-col gap-12 p-4 sm:p-6 lg:flex-row">
        <motion.div
          variants={slideDown}
          initial="hidden"
          animate="show"
          exit="exit"
          className="mt-8"
        >
          <h1 className="text-center font-Wulkan text-5xl font-medium uppercase sm:text-left sm:text-7xl">
            Sobre Mim
          </h1>

          <p className="max-w-sm py-8 text-sm sm:max-w-2xl sm:text-base">
            Olá, eu me chamo Nícolas Malachias. Tenho 18 anos e atualmente sou
            estudante de Análise e Desenvolvimento de Sistemas na UNITAU. Estou
            estagiando na Johnson & Johnson na área de TI. Amo música e curto
            muito tocar violão e guitarra, além de praticar ciclismo e jogar
            basquete algumas vezes.
          </p>

          <div className="mx-auto w-[90%] border border-darkBrown/10"></div>

          <div className=" my-4 mx-2 flex w-fit gap-8 rounded-xl bg-accent/20 py-4 px-3 font-Wulkan text-lg sm:m-6 sm:mx-auto sm:p-6 sm:text-3xl">
            <h2>
              <span className="mr-2 font-semibold text-accent">6+</span>
              Projetos feitos
            </h2>
            <h2>
              <span className="mr-2 font-semibold text-accent">1</span>
              Ano de experiência
            </h2>
          </div>

          <motion.div
            variants={StaggerContainer}
            initial="hidden"
            animate="show"
            exit="exit"
            className="my-6 flex flex-col gap-4 sm:flex-row"
          >
            <motion.div
              variants={itemAnimation}
              className="rounded-xl bg-[#f2e9e1] p-4 text-center hover:drop-shadow sm:max-w-[17rem]"
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
              className="rounded-xl bg-[#f2e9e1] p-4 text-center hover:drop-shadow sm:max-w-[17rem]"
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
              className="rounded-xl bg-[#f2e9e1] p-4 text-center hover:drop-shadow sm:max-w-[17rem]"
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
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 120, opacity: 0, transition: { ...transition, delay: 0 } }}
          transition={{ ...transition, duration: 1.45, delay: 0.5 }}
          className="mx-auto w-4/5 overflow-hidden rounded-2xl sm:relative lg:w-2/6"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ ...transition, duration: 1.45 }}
            src={aboutPic}
            className="inset-0 h-full w-full rounded-2xl object-cover object-center lg:absolute"
            alt=""
          />

          <div className="hidden bg-gradient-to-t from-darkBrown to-transparent lg:absolute lg:bottom-0 lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Esse sou eu! 🥂
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Foto tirada em São José dos Campos, no Shopping Colinas, em 2022.
            </p>
          </div>
        </motion.div>

        <div className="dotsGrid absolute left-0 top-0 z-20 hidden h-40 w-40 lg:block"></div>
        <div className="dotsGrid absolute bottom-0 z-20 hidden h-16 w-64 lg:block"></div>
        <div className="dotsGrid absolute right-0 top-0 z-20 hidden h-16 w-64 lg:block"></div>
      </motion.section>
    </>
  );
};
