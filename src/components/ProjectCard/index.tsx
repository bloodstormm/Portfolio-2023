import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { ProjectType } from "../../types/Projects";
import { itemAnimation } from "../../utils/StaggerItems";

type ProjectCardProps = {
  project: ProjectType;
  position: number;
};

export const ProjectCard = ({ project, position }: ProjectCardProps) => {
  console.log(position + 1);
  return (
    <motion.div
      variants={itemAnimation}
      className={` h-96 w-96 2xl:w-[32rem] ${
        position % 2 == 1 && "my-16"
      } pb-6  `}
    >
      {/* Dando um padding top para os itens impares */}
      <Link to="">
        <div className="rounded-2xl bg-[#fdf5eb] pb-8 ">
          <img
            src={project.image}
            className="w-full rounded-t-2xl object-cover"
          />
          <div className="px-4 pt-1">
            <h1 className="pt-2 text-xl font-medium">{project.projectName}</h1>
            <h4 className="text-sm text-darkerAccent">
              {project.stacks.join(" - ")}
            </h4>

            <p className="mt-4 line-clamp-3">{project.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
