import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useFetchProjects } from "../../hooks/useFetchProjects";
import { animatedTitle, letterAnimation } from "../../utils/StaggerText";
import { transition } from "../../utils/Transition";

import { BsArrowReturnLeft } from "react-icons/bs";

export const ProjectDetail = () => {
  const { id } = useParams();

  const transitionImage = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.91] };

  // Loading nao está funcionando
  const { projects, loading, error } = useFetchProjects();

  const filteredProject = projects?.find(
    (project) => project.projectName === id
  );

  const fragmentedTitle = filteredProject?.projectName.split("");

  return (
    <>
      <motion.div
        initial={{ height: window.innerHeight }}
        animate={{
          height: 0,
          top: [0, window.innerHeight],
        }}
        exit={{ height: window.innerHeight, top: [0, 0] }}
        transition={{ ...transition, duration: 1.2 }}
        className="absolute left-0 z-30 h-screen w-full bg-accent"
      ></motion.div>

      {loading ? (
        <p className="w-full text-center text-2xl">Carregando...</p>
      ) : (
        <motion.section className="mx-auto mb-16">
          {error && <p>{error}</p>}
          <motion.div className="container relative mx-auto mb-14 overflow-hidden">
            <motion.h4
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ...transition, delay: 1 }}
              className="text-sm text-darkerAccent"
            >
              {filteredProject?.stacks.join(" · ")}
            </motion.h4>

            <motion.div
              variants={animatedTitle}
              initial="initial"
              animate="animate"
              exit="exit"
              className="my-8 font-Wulkan text-8xl uppercase"
            >
              {fragmentedTitle?.map((letter, index) => (
                <motion.div
                  key={index}
                  variants={letterAnimation}
                  style={{ display: "inline-block" }}
                >
                  {letter === " " ? `\xa0` : letter}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ ...transition, delay: 1.2 }}
            >
              <a
                target="_blank"
                href={filteredProject?.link}
                className="text-lg"
              >
                Ver Protótipo
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ ...transition, delay: 1.2 }}
              className="absolute top-6 right-6 rounded-xl bg-accent/30 p-3 transition-colors duration-300 hover:bg-accent/40"
            >
              <Link to="/projects" className="flex items-center gap-2">
                <BsArrowReturnLeft />
                <p>Voltar para Projetos</p>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ width: 1100, height: 600, y: "-30%" }}
            animate={{
              y: 0,
              x: 0,
              width: "100%",
              transition: { delay: 1, ...transitionImage },
            }}
            className="relative mx-auto "
          >
            <motion.img
              initial={{ borderRadius: "20px" }}
              animate={{ borderRadius: "0px" }}
              transition={{ delay: 1, ...transitionImage }}
              src={filteredProject?.image}
              alt=""
              className="absolute bottom-0 h-[36rem] w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ ...transition, delay: 1 }}
            className="container mx-auto mt-12 flex justify-center gap-40"
          >
            <h2 className="text-lg font-medium text-darkerAccent">Descrição</h2>

            <p className="max-w-3xl text-lg">{filteredProject?.description}</p>
          </motion.div>
        </motion.section>
      )}
    </>
  );
};
