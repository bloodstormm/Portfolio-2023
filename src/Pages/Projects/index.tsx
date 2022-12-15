import { motion } from "framer-motion";
import { ProjectCard } from "../../components/ProjectCard";
import { useFetchProjects } from "../../hooks/useFetchProjects";
import { container } from "../../utils/StaggerItems";
import { transition } from "../../utils/Transition";
import { useState } from "react";

export const Projects = () => {
  const { projects, error, loading } = useFetchProjects();
  console.log(loading);

  return (
    <>
      <motion.div
        initial={{ height: window.innerHeight }}
        animate={{
          height: 0,
          top: [0, window.innerHeight],
        }}
        exit={{ height: window.innerHeight, top: [0, 0] }}
        transition={{ ...transition, duration: 1 }}
        className="absolute left-0 z-30 h-screen w-full bg-accent"
      ></motion.div>
      <motion.section
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        exit={{ visibility: "hidden", transition: { delay: 1 } }}
        className="flex w-full flex-col items-center"
      >
        <h1 className="mb-9 font-Wulkan text-5xl">Últimos Projetos</h1>

        {loading ? (
          <p className="w-full text-center text-2xl">Carregando...</p>
        ) : error ? (
          <>
            <h1 className="mb-6 font-Wulkan text-4xl">
              Ocorreu um erro, por favor tente mais tarde. =(
            </h1>
            <p>Erro: {error}</p>
          </>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-2 gap-12"
          >
            {projects?.map((project, index) => (
              <ProjectCard key={index} project={project} position={index} />
            ))}
          </motion.div>
        )}
      </motion.section>
    </>
  );
};
