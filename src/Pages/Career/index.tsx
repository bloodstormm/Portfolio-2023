import { motion } from "framer-motion";
import { EducationTimeline } from "../../components/EducationTimeline";
import { ExperiencesTimeline } from "../../components/ExperiencesTimeline";
import { transition } from "../../utils/Transition";

export const Career = () => {
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
        className="absolute left-0 z-30 h-screen w-full bg-accent"
      ></motion.div>

      <motion.section
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        exit={{ visibility: "hidden", transition: { delay: 1 } }}
        className="mb-12 flex w-full flex-col items-center"
      >
        <h1 className=" mb-12 font-Wulkan text-7xl">Minha Carreira:</h1>

        <div className="flex gap-16 divide-x divide-darkBrown/40">
          <ExperiencesTimeline />
          <EducationTimeline />
        </div>
      </motion.section>
    </>
  );
};
