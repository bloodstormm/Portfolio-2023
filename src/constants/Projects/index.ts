import { ProjectType } from "./../../types/Projects/index";
import * as images from "../../assets/projects";

export const projects: ProjectType[] = [
  {
    projectName: "Hoobank",
    image: images.hoobank,
    category: ["react"],
    description:
      "Hoobank se trata de um projeto fictício de um banco, onde se apresenta informações sobre o aplicativo, alguns dados e estatísticas do mesmo. O projeto foi feito com o intuito de praticar a criação de layouts para site, assim como reutilizar componentes e constantes usando Typescript e TailwindCSS (Framework CSS)",
    developedIn: "Out 2022",
    stacks: ["React", "TailwindCSS"],
    link: "https://hoobank-bloodstormm.vercel.app/",
  },
  {
    projectName: "Location Finder",
    image: images.location_finder,
    category: ["react"],
    description:
      "O Location Finder é uma aplicação onde o usuário fornece um CEP e o site retorna as informações geográficas do local. Rua, Bairro, Cidade etc... Usando ferramentas como TailwindCSS e react-hot-toast, tornou o processo muito mais fácil devido as suas simplicidades. O projeto foi feito usando Typescript e uma API de CEP (VIACEP)",
    developedIn: "Set 2022",
    stacks: ["React", "TailwindCSS", "VIACEP API", "react-hot-toast"],
    link: "https://location-finder-six.vercel.app/",
  },
  {
    projectName: "Traveling",
    image: images.traveling,
    category: ["react"],
    description:
      "O Traveling consiste em uma rede social onde você pode postar algumas de suas imagens na internet e mostrar para outras pessoas como foi sua experiência. O projeto faz parte de um curso do Matheus Battisti, onde ele demonstra as principais funcionalidades do React.",
    developedIn: "Jun 2022",
    stacks: ["ReactJS", "TailwindCSS", "Firebase"],
    link: "https://traveling-ten.vercel.app/",
  },
  {
    projectName: "Covid-Status",
    image: images.covid,
    category: ["vue"],
    description:
      "Covid-Status é um tracker do COVID-19 no qual tem a finalidade de atualizar em em tempo real a situação de casos e óbitos pelo vírus. Desenvolvido com Vue e Tailwind, o app adiquire o tema usado no navegador do usuário, podendo ser tanto claro, quanto escuro.",
    developedIn: "Mai 2021",
    stacks: ["Vue.JS", "TailwindCSS", "Covid19API"],
    link: "https://nicolas-covid-stats.herokuapp.com/",
  },
  {
    projectName: "Tasky (To-do WebAPP)",
    image: images.tasky,
    category: ["vue"],
    description:
      "Tasky é um WebAPP desenvolvido com as tecnologias Vue.js e Tailwind no qual o usuário pode salvar suas tarefas diárias ou anotar algo que ele precise fazer. Tudo isto sendo salvo no próprio navegador por meio da API Composition!",
    developedIn: "Abr 2021",
    stacks: ["Vue.JS", "TailwindCSS", "Composition API"],
    link: "https://bloodstormm.github.io/tasky/",
  },
  {
    projectName: "Portfolio V1",
    image: images.portifolio,
    category: ["HTML/CSS"],
    description:
      "Este é o meu primeiro projeto de site pessoal. Resolvi desenvolvê-lo com o intuíto de aproximar um pouco mais o contratante, conhecendo algumas de minhas características e conhecimentos.",
    developedIn: "Abr 2021",
    stacks: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://bloodstormm.github.io/Portifolio/",
  },
  {
    projectName: "Password Manager (CRUD)",
    image: images.PasswordManager,
    category: ["mobile"],
    description:
      "Estudando por conta própria, no meio da pândemia decidi desenvolver alguma aplicação para dispositivos mobile, onde então me aventurei por algumas semanas na linguagem Flutter. Se trata de um aplicativo onde o usuário pode armazenar, ver, editar e excluir suas senhas que possa esquecer um dia (conhecido também como CRUD).",
    developedIn: "Jan 2021",
    stacks: ["Flutter", "Firebase"],
    link: "https://github.com/bloodstormm/PasswordManager",
  },
];
