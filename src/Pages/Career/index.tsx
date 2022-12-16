import { motion } from "framer-motion";
import { EducationTimeline } from "../../components/EducationTimeline";
import { ExperiencesTimeline } from "../../components/ExperiencesTimeline";
import { PageTransition } from "../../components/PageTransition";
import { transition } from "../../utils/Transition";

export const Career = () => {
  return (
    <>
      <PageTransition />

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
