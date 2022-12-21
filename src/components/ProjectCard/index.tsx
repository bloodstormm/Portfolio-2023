import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { itemAnimation } from "../../utils/StaggerItems";
import { ProjectType } from "../../types/Projects";

type ProjectCardProps = {
  project: ProjectType;
  position: number;
};

export const ProjectCard = ({ project, position }: ProjectCardProps) => (
  <motion.div
    variants={itemAnimation}
    // Dando um padding top para os itens impares
    className={`h-96 w-96 2xl:w-[32rem] ${
      position % 2 == 1 && "lg:my-96"
    } pb-6`}
  >
    <Link
      to={`/projects/${project.name}`}
      // onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="mx-auto w-80 rounded-2xl pb-8 lg:w-[28rem] xl:w-[32rem] "
      >
        <motion.img
          src={project.image}
          className="h-48 w-full rounded-2xl object-cover shadow-2xl shadow-darkerAccent/30 sm:h-72"
        />
        <div className="px-6  pt-3">
          <h1 className="pt-2 text-xl font-medium">{project.name}</h1>
          <h4 className="text-sm text-darkerAccent">
            Desenvolvido em: {project.developedIn}
          </h4>

          <p className="mt-4 line-clamp-3">{project.description}</p>
        </div>
      </motion.div>
    </Link>
  </motion.div>
);
