import { motion } from "framer-motion";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../constants/Projects";
import { container } from "../../utils/StaggerItems";
import { transition } from "../../utils/Transition";

export const Projects = () => {
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
        className="absolute left-0 z-30 h-screen w-full bg-[#e6c291]"
      ></motion.div>
      <motion.section
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        exit={{ visibility: "hidden", transition: { delay: 1 } }}
        className="mb-16 flex w-full flex-col items-center"
      >
        <h1 className="mb-9 font-Wulkan text-5xl">Últimos Projetos</h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="grid grid-cols-2 gap-12"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} position={index} />
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};
