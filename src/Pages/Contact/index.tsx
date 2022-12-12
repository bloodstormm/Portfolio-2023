import { motion } from "framer-motion";
import { transition } from "../../utils/Transition";

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
        className=" flex h-[80vh] w-full items-center justify-center font-Wulkan text-7xl"
      >
        Contact
      </motion.section>
    </>
  );
};
