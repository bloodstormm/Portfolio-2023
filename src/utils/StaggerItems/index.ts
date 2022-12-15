// Se algum dia o stagger nao funcionar, olhar se ele nao esta chegando vazio e depois preenchendo
// Se entre o elemento pai e filho houver alguma outra coisa, não irá funcionar

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
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
