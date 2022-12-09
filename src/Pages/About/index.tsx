import { animate, motion } from "framer-motion";
import aboutPic from "../../assets/aboutPic.jpg";
import { Timeline } from "../../components/Timeline";
import { transition } from "../../utils/Transition";

export const About = () => {
  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          top: [0, 0, window.innerHeight],
        }}
        exit={{ height: [0, window.innerHeight, 0], top: [null, 0, 0] }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="absolute left-0 z-20 h-screen w-full bg-[#e6c291]"
      ></motion.div>
      <motion.section
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible", transition: { delay: 1 } }}
        exit={{ visibility: "hidden", transition: { delay: 1 } }}
        className="grid w-full grid-cols-2"
      >
        <div className="mt-8">
          <h1 className="font-Wulkan text-7xl font-medium uppercase">
            Sobre Mim
          </h1>

          <p className="max-w-xl py-8 ">
            Olá, me chamo Nícolas Malachias. Atualmente sou estudante de Análise
            e Desenvolvimento de Sistemas na UNITAU e estou estagiando na
            Jhonson & Jhonson na área de TI. Amo música e curto muito tocar
            violão, guitarra além de praticar ciclismo e jogar basquete algumas
            vezes.
          </p>

          <Timeline />
        </div>

        <div className="mx-auto w-3/5 overflow-hidden rounded-2xl bg-pink-400 2xl:w-[70%]">
          <motion.img
            whileHover={{ scale: 1.1, transition: { ...transition, delay: 0 } }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ ...transition, duration: 1.45, delay: 1.5 }}
            src={aboutPic}
            className="h-full w-full rounded-2xl object-cover "
            alt=""
          />
        </div>

        <div className="dotsGrid absolute left-0 top-0 h-40 w-40"></div>
        <div className="dotsGrid absolute bottom-0 h-16 w-64"></div>
        <div className="dotsGrid absolute right-0 top-0 h-16 w-64"></div>
      </motion.section>
    </>
  );
};
