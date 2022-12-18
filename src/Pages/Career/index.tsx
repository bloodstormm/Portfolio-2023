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
        className="mb-12 mt-6 flex w-full flex-col items-center lg:mt-0"
      >
        <h1 className="mb-12 font-Wulkan text-5xl lg:text-7xl">
          Minha Carreira:
        </h1>

        <div className="flex flex-col gap-16 divide-darkBrown/40 sm:divide-x md:flex-row">
          <ExperiencesTimeline />
          <EducationTimeline />
        </div>
      </motion.section>
    </>
  );
};
