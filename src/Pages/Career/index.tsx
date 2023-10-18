import { motion } from "framer-motion";

import { fadeIn, fadeInDown } from "../../utils/Animations";

import { EducationTimeline } from "../../components/EducationTimeline";
import { ExperiencesTimeline } from "../../components/ExperiencesTimeline";
import { PageTransition } from "../../components/PageTransition";

export const Career = () => (
  <>
    <PageTransition />
    <section className="mb-12 mt-6 flex w-full flex-col items-center lg:mt-0">
      <motion.h1
        {...fadeInDown}
        transition={{ ...fadeInDown.transition, delay: 0.5 }}
        className="mb-12 font-Wulkan text-5xl lg:text-7xl"
      >
        Minha Carreira:
      </motion.h1>

      <motion.div
        {...fadeIn}
        transition={{ delay: 0.6 }}
        className="flex flex-col gap-16 xl:divide-darkBrown/40 dark:xl:divide-lightBrown/40 xl:divide-x xl:flex-row"
      >
        <ExperiencesTimeline />
        <EducationTimeline />
      </motion.div>
    </section>
  </>
);
