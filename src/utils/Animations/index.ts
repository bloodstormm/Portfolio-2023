import { transition } from "../Transition";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const fadeInDown = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
  transition: { ...transition, duration: 1 },
};

const fadeInUp = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
  transition: { ...transition, duration: 1 },
};

const scaleUp = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0, opacity: 0 },
  transition: { ...transition },
};

export { fadeIn, fadeInDown, fadeInUp, scaleUp };
