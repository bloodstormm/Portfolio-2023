import { motion } from "framer-motion";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { transition } from "../../utils/Transition";

export const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 120 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 120, transition: { delay: 1 } }}
    transition={{ ...transition, delay: 2 }}
    className="container fixed bottom-4 flex w-full items-center justify-center gap-8 divide-x divide-darkBrown"
  >
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
  </motion.footer>
);
