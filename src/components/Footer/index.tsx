import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export const Footer = () => (
  <footer className="mt-24 flex w-full items-center justify-center gap-8 divide-x divide-darkBrown bg-background/60 p-4 backdrop-blur-sm">
    <h1>&copy; NCLS 2023</h1>

    {/* Redes sociais */}
    <div className="flex gap-6 pl-8 text-xl">
      <a
        href="https://www.instagram.com/_nicolasantoss/"
        className="transition hover:text-accent"
        target="_blank"
      >
        <BsInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/nicolas-malachias/"
        className="transition hover:text-accent"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/bloodstormm"
        className="transition hover:text-accent"
        target="_blank"
      >
        <BsGithub />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5512988770308"
        className="transition hover:text-accent"
        target="_blank"
      >
        <FaWhatsapp />
      </a>
    </div>
  </footer>
);
