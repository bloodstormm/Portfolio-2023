import { motion } from "framer-motion";

import { StaggerContainer } from "../../utils/Animations";
import { useFetchProjects } from "../../hooks/useFetchProjects";

import { PageTransition } from "../../components/PageTransition";
import { ProjectCard } from "../../components/ProjectCard";

export const Projects = () => {
  const { projects, error, loading } = useFetchProjects();

  return (
    <>
      <PageTransition />
      <motion.section className="flex w-full flex-col items-center">
        <h1 className="mb-16 font-Wulkan text-4xl sm:text-5xl">
          Últimos Projetos
        </h1>

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
            variants={StaggerContainer}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid gap-x-28 md:gap-x-0 lg:gap-x-28 md:grid-cols-2 xl:gap-x-36"
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
