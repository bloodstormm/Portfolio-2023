import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { useFetchProjects } from "../../hooks/useFetchProjects";

import { StaggerText, letterAnimation } from "../../utils/Animations";
import { transition } from "../../utils/Animations";

import { PageTransition } from "../../components/PageTransition";

import { BsArrowReturnLeft } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeInUp } from "../../utils/Animations";

type ProjectDetailProps = {
  scrolled: boolean;
};

export const ProjectDetail = ({ scrolled }: ProjectDetailProps) => {
  // ID usado para encontrar o projeto correto
  const { id } = useParams();

  const transitionImage = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.91] };

  const { projects, loading, error } = useFetchProjects();

  const filteredProject = projects?.find((project) => project.name === id);
  const fragmentedTitle = filteredProject?.name.split("");

  return (
    <>
      <PageTransition />
      {error ? (
        <div className="text-center">
          <h1 className="mb-6 font-Wulkan text-4xl">Ocorreu um erro =(</h1>
          <p>Erro: {error.message}</p>
        </div>
      ) : (
        <>
          {loading ? (
            <p className="w-full text-center text-2xl">Carregando...</p>
          ) : (
            <section className="relative mx-auto mb-16">
              <motion.div className="container mx-auto overflow-hidden p-6 sm:mb-14">
                <motion.h4
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ ...transition, delay: 1 }}
                  className="text-sm text-darkerAccent dark:text-lighterAccent"
                >
                  {filteredProject?.stacks.split(";").join(" · ")}
                </motion.h4>

                <motion.div
                  variants={StaggerText}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="my-8 font-Wulkan text-6xl uppercase lg:text-8xl"
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
                    className="bottomLine text-lg"
                  >
                    <div className="flex items-center gap-1">
                      <FiArrowUpRight />
                      Ver Protótipo
                    </div>
                  </a>
                </motion.div>

                <AnimatePresence>
                  {scrolled && (
                    <motion.div
                      {...fadeInUp}
                      transition={{ ...transition }}
                      className="fixed bottom-10 right-8 z-30 block rounded-xl bg-accent/30 p-3 transition-colors duration-300 hover:bg-accent/40"
                    >
                      <Link to="/projects" className="flex items-center gap-2">
                        <BsArrowReturnLeft className="text-2xl sm:text-base" />
                        <p className="hidden sm:block">Voltar para Projetos</p>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
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
                className="container mx-auto mt-6 space-y-12 p-6 sm:mt-12 sm:space-y-16"
              >
                <div className="mx-auto grid max-w-6xl lg:grid-cols-4">
                  <h2 className="mb-4 text-xl font-medium text-darkerAccent dark:text-lighterAccent lg:mb-0 lg:text-lg">
                    Descrição
                  </h2>

                  <p className="col-span-3 max-w-2xl text-base lg:text-lg">
                    {filteredProject?.description}
                  </p>
                </div>

                <div className="mx-auto grid max-w-6xl lg:grid-cols-4">
                  <h2 className="mb-4 text-xl font-medium text-darkerAccent dark:text-lighterAccent lg:mb-0 lg:text-lg">
                    Informações
                  </h2>

                  <div className="col-span-3 max-w-3xl space-y-2 text-base lg:text-lg">
                    <p>
                      Projeto feito em:
                      <span className="ml-1 font-medium text-accent dark:text-lighterAccent">
                        {filteredProject?.developedIn}
                      </span>
                    </p>
                    <p>
                      Stacks utilizadas:
                      <span className="ml-1 font-medium text-accent dark:text-lighterAccent">
                        {filteredProject?.stacks.split(";").join(" - ")}
                      </span>
                    </p>
                  </div>
                </div>

                <h2 className="text-center border-t pt-8 border-darky/10 dark:border-whity/10 text-3xl font-medium ">
                  Imagens do projeto:
                </h2>
                <div className="mx-auto w-full space-y-8 lg:w-3/4">
                  <img
                    src={filteredProject?.imageDetail1}
                    className="w-full rounded-3xl"
                  />
                  <img
                    src={filteredProject?.imageDetail2}
                    className="w-full rounded-3xl"
                  />
                </div>
              </motion.div>
            </section>
          )}
        </>
      )}
    </>
  );
};
