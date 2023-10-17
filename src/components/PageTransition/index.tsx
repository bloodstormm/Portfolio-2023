import { motion } from "framer-motion";
import { transition } from "../../utils/Animations";

export const PageTransition = () => (
  <>
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: 0,
      }}
      exit={{ scaleY: 1 }}
      transition={{ ...transition, duration: 1 }}
      className="fixed top-0 left-0 w-full h-screen origin-bottom bg-accent z-50 ncls-title"
    />
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{
        scaleY: 0,
      }}
      exit={{ scaleY: 0 }}
      transition={{ ...transition, duration: 1 }}
      className="fixed top-0 left-0 w-full h-screen origin-top bg-accent z-50 ncls-title"
    />
  </>
);
