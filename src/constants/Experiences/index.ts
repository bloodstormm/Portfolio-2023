import { ExperiencesType } from "./../../types/Experiences/index";
import { FaReact, FaHtml5, FaPython, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

export const experiences: ExperiencesType[] = [
  {
    company: "Jhonson & Jhonson",
    initialDate: "01/2023",
    finalDate: "Atualmente",
    role: "Estágio UI/UX",
    stack: [],
  },
  {
    company: "Optimus GIS",
    initialDate: "08/2022",
    finalDate: "12/2022",
    role: "Estágio Front-End",
    description:
      "Ajudava o time na parte web, usando ReactJS, TailwindCSS e algumas outras ferramentas",
    stack: [FaReact, SiTailwindcss, FaHtml5],
  },
  {
    company: "Villarta Elevadores",
    initialDate: "06/2021",
    finalDate: "06/2022",
    role: "Menor Aprendiz",
    description:
      "Atuava no setor de compras/almoxarifado. Escritório em geral.",
    stack: [RiFileExcel2Line, FaPython, HiOutlineMail],
  },
];
