import { transition } from "../Transition";

export const animatedTitle = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

export const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { ...transition, type: "spring", duration: 1.5 },
  },
};
