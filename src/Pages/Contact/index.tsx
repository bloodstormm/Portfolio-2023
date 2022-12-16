import { motion } from "framer-motion";
import { transition } from "../../utils/Transition";

import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { container, itemAnimation } from "../../utils/StaggerItems";
import { animatedTitle, letterAnimation } from "../../utils/StaggerText";
import { PageTransition } from "../../components/PageTransition";

export const Contact = () => {
  const text = "Quer me contratar ou me conhecer um pouco mais?";

  const fragmentedTitle = text.split("");
  const fragmentedWords = fragmentedTitle.map((word) => word.split(""));
  console.log(fragmentedWords);

  return (
    <>
      <PageTransition />

      <motion.section
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        exit={{ visibility: "hidden", transition: { delay: 1 } }}
        className=" flex h-[80vh] w-full flex-col items-center justify-center "
      >
        <div className="max-w-5xl overflow-hidden text-center">
          <motion.h1
            variants={animatedTitle}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ ...transition, duration: 1.6 }}
            className=" max-w-6xl font-Wulkan text-6xl"
          >
            {fragmentedTitle?.map((letter, index) => (
              <motion.div
                key={index}
                variants={letterAnimation}
                style={{ display: "inline-block" }}
              >
                {letter === " " ? `\xa0` : letter}
              </motion.div>
            ))}
          </motion.h1>

          <motion.h3
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            exit={{ y: 400 }}
            transition={{ ...transition, duration: 1.6 }}
            className="pt-12 pb-6 font-medium"
          >
            Entre em contato:
          </motion.h3>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="flex items-center justify-center gap-10  text-3xl"
        >
          <motion.a
            variants={itemAnimation}
            href="https://api.whatsapp.com/send?phone=5512988770308"
            className="transition-colors duration-300 hover:text-accent"
            target="_blank"
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            variants={itemAnimation}
            href="https://www.instagram.com/_nicolasantoss/"
            className="transition-colors duration-300 hover:text-accent"
            target="_blank"
          >
            <BsInstagram />
          </motion.a>
          <motion.a
            variants={itemAnimation}
            href="mailto:nicolasmalaquias2015@hotmail.com"
            className="transition-colors duration-300 hover:text-accent"
            target="_blank"
          >
            <HiOutlineMail />
          </motion.a>

          <motion.a
            variants={itemAnimation}
            href="https://www.linkedin.com/in/nicolas-malachias/"
            className="transition-colors duration-300 hover:text-accent"
            target="_blank"
          >
            <FaLinkedinIn />
          </motion.a>
        </motion.div>
      </motion.section>
    </>
  );
};
