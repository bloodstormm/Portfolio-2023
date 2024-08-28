import { ExperiencesType } from "./../../types/Experiences/index";
import {
  FaReact,
  FaHtml5,
  FaPython,
  FaJira,
  FaDrupal,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

export const experiences: ExperiencesType[] = [
  {
    company: "Johnson & Johnson",
    initialDate: "01/2023",
    finalDate: "Atualmente",
    role: "Estágio",
    stack: [FaJira, FaDrupal, FaFigma, FaReact],
    description: "Atuo como Desenvolvedor Front-End em um portal chamado Janssen Pro, focando na experiência do usuário final. Desenvolvo componentes do zero e ajusto a estrutura do site em HTML, CSS e JS. Compreendo a linguagem dos designers e desenvolvedores, traduzindo a visão do design para o desenvolvimento de forma eficiente."
  },
  {
    company: "Optimus GIS",
    initialDate: "08/2022",
    finalDate: "12/2022",
    role: "Estágio",
    description:
      "Trabalhei na criação de interfaces web para clientes, utilizando ReactJS e TailwindCSS. Fui responsável por desenvolver e integrar front-end com APIs",
    stack: [FaReact, SiTailwindcss, FaHtml5],
  },
  {
    company: "Villarta Elevadores",
    initialDate: "06/2021",
    finalDate: "06/2022",
    role: "Menor Aprendiz",
    description:
      "Atuei no setor de compras e almoxarifado, gerenciando cotações e o controle de estoque de peças. Fui reconhecido por propor melhorias na organização das atividades",
    stack: [RiFileExcel2Line, FaPython, HiOutlineMail],
  },
];
