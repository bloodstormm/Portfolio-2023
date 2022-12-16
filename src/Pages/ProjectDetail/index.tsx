import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useFetchProjects } from "../../hooks/useFetchProjects";
import { animatedTitle, letterAnimation } from "../../utils/StaggerText";
import { transition } from "../../utils/Transition";

import { BsArrowReturnLeft } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

import { PageTransition } from "../../components/PageTransition";

export const ProjectDetail = () => {
  const { id } = useParams();

  const transitionImage = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.91] };

  const { projects, loading, error, getImage, getDetailImages } =
    useFetchProjects();

  console.log(loading);

  console.log(projects);

  const filteredProject = projects?.find((project) => project.name === id);

  const fragmentedTitle = filteredProject?.name.split("");

  return (
    <>
      <PageTransition />
      {error ? (
        <p>{error.message}</p>
      ) : (
        <>
          {loading ? (
            <p className="w-full text-center text-2xl">Carregando...</p>
          ) : (
            <motion.section className="mx-auto mb-16">
              <motion.div className="container relative mx-auto mb-14 overflow-hidden">
                <motion.h4
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ ...transition, delay: 1 }}
                  className="text-sm text-darkerAccent"
                >
                  {filteredProject?.stacks.split(";").join(" · ")}
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
                    className="relative inline-block text-lg after:block after:h-[2px] after:w-0 after:bg-accent
                after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                  >
                    <div className="flex items-center gap-1">
                      <FiArrowUpRight />
                      Ver Protótipo
                    </div>
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
                  src={getImage(filteredProject!.name)}
                  alt=""
                  className="absolute bottom-0 h-[36rem] w-full object-cover object-center"
                />
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ ...transition, delay: 1 }}
                className="container mx-auto mt-12 space-y-16"
              >
                <div className="mx-auto grid max-w-6xl grid-cols-4 justify-center">
                  <h2 className="text-lg font-medium text-darkerAccent">
                    Descrição
                  </h2>

                  <p className="col-span-3 max-w-2xl text-lg">
                    {filteredProject?.description}
                  </p>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-4 justify-center">
                  <h2 className="text-lg font-medium text-darkerAccent">
                    Informações
                  </h2>

                  <div className="col-span-3 max-w-3xl space-y-2 text-lg ">
                    <p>
                      Projeto feito em:
                      <span className="ml-1 font-medium text-accent">
                        {filteredProject?.developedIn}
                      </span>
                    </p>
                    <p className="">
                      Stacks utilizadas:
                      <span className="ml-1 font-medium text-accent">
                        {filteredProject?.stacks.split(";").join(" - ")}
                      </span>
                    </p>
                  </div>
                </div>

                <h2 className="text-center text-3xl font-medium text-darkerAccent">
                  Imagens do projeto:
                </h2>
                <div className="mx-auto w-3/4 space-y-8">
                  <img
                    src={getDetailImages(filteredProject!.name, 1)}
                    className="w-full rounded-3xl"
                  />
                  <img
                    src={getDetailImages(filteredProject!.name, 2)}
                    className="w-full rounded-3xl"
                  />
                </div>
              </motion.div>
            </motion.section>
          )}
        </>
      )}
    </>
  );
};
