import { motion } from "framer-motion";
import { transition } from "../../utils/Animations";

export const PageTransition = () => (
  <motion.div
    initial={{ height: window.innerHeight }}
    animate={{
      height: 0,
      top: [0, window.innerHeight],
    }}
    exit={{ height: window.innerHeight, top: [0, 0] }}
    transition={{ ...transition, duration: 1 }}
    className="absolute top-0 left-0 z-50 h-screen w-full bg-accent"
  />
);
