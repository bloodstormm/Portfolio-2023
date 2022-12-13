import { motion } from "framer-motion";
import { transition } from "../../utils/Transition";

import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { container, itemAnimation } from "../../utils/StaggerItems";

export const Contact = () => {
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
        className=" flex h-[80vh] w-full flex-col items-center justify-center "
      >
        <div className="overflow-hidden text-center">
          <motion.h1
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            exit={{ y: 400 }}
            transition={{ ...transition, duration: 1.6 }}
            className="max-w-6xl font-Wulkan text-7xl"
          >
            Quer me contratar ou me conhecer um pouco mais?
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
            className="hover:text-accent"
            target="_blank"
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            variants={itemAnimation}
            href="https://www.instagram.com/_nicolasantoss/"
            className="hover:text-accent"
            target="_blank"
          >
            <BsInstagram />
          </motion.a>
          <motion.a
            variants={itemAnimation}
            href="mailto:nicolasmalaquias2015@hotmail.com"
            className="hover:text-accent"
            target="_blank"
          >
            <HiOutlineMail />
          </motion.a>

          <motion.a
            variants={itemAnimation}
            href="https://www.linkedin.com/in/nicolas-malachias/"
            className="hover:text-accent"
            target="_blank"
          >
            <FaLinkedinIn />
          </motion.a>
        </motion.div>
      </motion.section>
    </>
  );
};
