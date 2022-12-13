import { motion } from "framer-motion";
import aboutPic from "../../assets/aboutPic.jpg";
import {
  HiOutlineComputerDesktop,
  HiOutlineCodeBracket,
  HiOutlineScale,
} from "react-icons/hi2";
import { transition } from "../../utils/Transition";

export const About = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemAnimation = {
    hidden: { y: 200, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 2,
      },
    },
    exit: { opacity: 0 },
  };
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
      <motion.div
        initial={{ height: window.innerHeight }}
        animate={{
          height: [window.innerHeight, 0],
          top: [0, window.innerHeight],
        }}
        exit={{ height: [0, window.innerHeight], top: [0, 0] }}
        transition={{ ...transition, duration: 1 }}
        className="absolute left-0 z-20 h-screen w-full bg-[#e6c291]"
      ></motion.div>

      <motion.section className="flex min-h-[70vh] w-full gap-12">
        <motion.div
          variants={slideDown}
          initial="hidden"
          animate="show"
          exit="exit"
          className="mt-8"
        >
          <h1 className="font-Wulkan text-7xl font-medium uppercase">
            Sobre Mim
          </h1>

          <p className="max-w-2xl py-8">
            Olá, me chamo Nícolas Malachias. Tenho 18 anos e atualmente sou
            estudante de Análise e Desenvolvimento de Sistemas na UNITAU. Estou
            estagiando na Jhonson & Jhonson na área de TI. Amo música e curto
            muito tocar violão, guitarra além de praticar ciclismo e jogar
            basquete algumas vezes.
          </p>

          <div className="mx-auto w-[90%] border border-darkBrown/10"></div>

          <div className="m-6 mx-auto flex w-fit gap-8 rounded-xl bg-accent/20 p-6 font-Wulkan text-3xl">
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
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="my-6 flex gap-4"
          >
            <motion.div
              variants={itemAnimation}
              className="max-w-[17rem] rounded-xl bg-[#f2e9e1] p-6 hover:drop-shadow"
            >
              <HiOutlineCodeBracket className="mx-auto mb-2 text-4xl text-accent" />
              <h3 className="text-center text-lg font-semibold ">
                Lorem Ipsum
              </h3>
              <p className="pt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                provident nisi qui veritatis quo inventore voluptates?
              </p>
            </motion.div>
            <motion.div
              variants={itemAnimation}
              className="max-w-[17rem] rounded-xl bg-[#f2e9e1] p-6 hover:drop-shadow"
            >
              <HiOutlineComputerDesktop className="mx-auto mb-2 text-4xl text-accent" />
              <h3 className="text-center text-lg font-semibold ">
                Lorem Ipsum
              </h3>
              <p className="pt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                provident nisi qui veritatis quo inventore voluptates?
              </p>
            </motion.div>
            <motion.div
              variants={itemAnimation}
              className="max-w-[17rem] rounded-xl bg-[#f2e9e1] p-6 hover:drop-shadow"
            >
              <HiOutlineScale className="mx-auto mb-2 text-4xl text-accent" />
              <h3 className="text-center text-lg font-semibold ">
                Lorem Ipsum
              </h3>
              <p className="pt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                provident nisi qui veritatis quo inventore voluptates?
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 120, opacity: 0, transition: { ...transition, delay: 0 } }}
          transition={{ ...transition, duration: 1.45, delay: 0.5 }}
          className="relative mx-auto w-2/6 overflow-hidden rounded-2xl"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ ...transition, duration: 1.45 }}
            src={aboutPic}
            className="absolute inset-0 h-full w-full rounded-2xl object-cover "
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

        <div className="dotsGrid absolute left-0 top-0 h-40 w-40"></div>
        <div className="dotsGrid absolute bottom-0 h-16 w-64"></div>
        <div className="dotsGrid absolute right-0 top-0 h-16 w-64"></div>
      </motion.section>
    </>
  );
};
