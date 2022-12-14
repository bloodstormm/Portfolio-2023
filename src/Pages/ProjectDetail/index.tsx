import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useFetchProjects } from "../../hooks/useFetchProjects";
import { transition } from "../../utils/Transition";

export const ProjectDetail = () => {
  const { id } = useParams();

  const transitionImage = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.91] };

  // Loading nao está funcionando
  const { projects, loading, error } = useFetchProjects();

  const filteredProject = projects?.find(
    (project) => project.projectName === id
  );

  const fragmentedTitle = filteredProject?.projectName.split("");

  const animatedTitle = {
    animate: {
      y: 0,
      transition: {
        delayChildren: 1.2,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  };

  const letterAnimation = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: { ...transition, type: "spring", duration: 1.5 },
    },
  };

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
        className="absolute left-0 z-30 h-screen w-full bg-[#e6c291]"
      ></motion.div>

      {loading ? (
        <p className="w-full text-center text-2xl">Carregando...</p>
      ) : (
        <motion.section className="mx-auto mb-16">
          {error && <p>{error}</p>}
          <motion.div className="container mx-auto mb-14 overflow-hidden">
            <motion.h4
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ...transition, delay: 1 }}
              className="text-sm text-darkerAccent"
            >
              {filteredProject?.stacks.join(" · ")}
            </motion.h4>

            <motion.div
              variants={animatedTitle}
              initial="initial"
              animate="animate"
              exit="exit"
              className="my-8 font-Wulkan text-8xl uppercase"
            >
              {fragmentedTitle?.map((letter, index) => (
                <motion.div
                  key={index}
                  variants={letterAnimation}
                  style={{ display: "inline-block" }}
                >
                  {letter}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ ...transition, delay: 1 }}
            >
              <a
                target="_blank"
                href={filteredProject?.link}
                className="text-lg"
              >
                Ver Protótipo
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ width: 1100, height: 600, y: "-30%" }}
            animate={{
              y: 0,
              x: 0,
              width: "100%",
              transition: { delay: 1, ...transitionImage },
            }}
            className="relative mx-auto "
          >
            <motion.img
              initial={{ borderRadius: "20px" }}
              animate={{ borderRadius: "0px" }}
              transition={{ delay: 1, ...transitionImage }}
              src={filteredProject?.image}
              alt=""
              className="absolute bottom-0 h-[36rem] w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ ...transition, delay: 1 }}
            className="container mx-auto mt-12 flex justify-center gap-40"
          >
            <h2 className="text-lg font-medium text-darkerAccent">Descrição</h2>

            <p className="max-w-3xl text-lg">{filteredProject?.description}</p>
          </motion.div>
        </motion.section>
      )}
    </>
  );
};
