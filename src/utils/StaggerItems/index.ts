const container = {
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemAnimation = {
  hidden: { y: 200, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
    },
  },
  exit: { opacity: 0 },
};

export { container, itemAnimation };
