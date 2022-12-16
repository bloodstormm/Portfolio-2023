import { motion } from "framer-motion";
import { ProjectCard } from "../../components/ProjectCard";
import { useFetchProjects } from "../../hooks/useFetchProjects";
import { container } from "../../utils/StaggerItems";
import { transition } from "../../utils/Transition";
import { useEffect, useState } from "react";
import { PageTransition } from "../../components/PageTransition";
import supabase from "../../api";

export const Projects = () => {
  const { projects, error, loading } = useFetchProjects();

  return (
    <>
      <PageTransition />
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
            <p>Erro: {error.message}</p>
          </>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid gap-x-36 lg:grid-cols-2"
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
