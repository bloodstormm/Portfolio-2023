import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

import { MdOpenInNew } from "react-icons/md";

import { useFetchCurriculum } from "../../hooks/useFetchCurriculum";
import { useMemo } from "react";

import { fadeIn, fadeInDown, scaleUp } from "../../utils/Animations";
import { StaggerContainer, itemAnimation } from "../../utils/Animations";

type MenuModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuModal = ({ isOpen, setIsOpen }: MenuModalProps) => {
  const { getCurriculum } = useFetchCurriculum();

  const curriculumUrl = useMemo(() => getCurriculum(), []);
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-30"
        >
          {/* The backdrop, rendered as a fixed sibling to the panel StaggerContainer */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.7 }}
            className="fixed inset-0 bg-darkBrown/30 dark:bg-lightBrown/30 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Full-screen scrollable StaggerContainer */}
          <div className="fixed inset-0 overflow-y-auto">
            {/* StaggerContainer to center the panel */}
            <div className="flex min-h-full items-center justify-center p-4">
              {/* The actual dialog panel  */}
              <Dialog.Panel
                as={motion.div}
                {...scaleUp}
                className="relative mx-auto flex h-[32rem] w-[90%] flex-col items-center overflow-hidden rounded-2xl bg-whity dark:bg-darky p-4"
              >
                <Dialog.Title
                  as={motion.h1}
                  {...fadeInDown}
                  transition={{ ...fadeInDown.transition, duration: 0.8, delay: 0.5 }}
                  className="font-Odasans text-5xl font-semibold text-accent dark:text-darkAccent"
                >
                  NCLS
                </Dialog.Title>

                <motion.div
                  variants={StaggerContainer}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="mt-8 flex w-full flex-col items-center gap-2 font-medium"
                >
                  <motion.div
                    variants={itemAnimation}
                    className="w-full rounded-lg bg-accent/40 dark:bg-darkAccent/40 p-3"
                  >
                    <Link
                      to="/"
                      className="bottomLine w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                  </motion.div>
                  <motion.div
                    variants={itemAnimation}
                    className="w-full rounded-lg bg-accent/40 dark:bg-darkAccent/40 p-3"
                  >
                    <Link
                      to="about"
                      className="bottomLine w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Sobre Mim
                    </Link>
                  </motion.div>
                  <motion.div
                    transition={{duration: 1.3}}
                    variants={itemAnimation}
                    className="w-full rounded-lg bg-accent/40 dark:bg-darkAccent/40 p-3"
                  >
                    <Link
                      to="projects"
                      className="bottomLine w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Projetos
                    </Link>
                  </motion.div>
                  <motion.div
                    variants={itemAnimation}
                    className="w-full rounded-lg bg-accent/40 dark:bg-darkAccent/40 p-3"
                  >
                    <Link
                      to="career"
                      className="bottomLine w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Carreira
                    </Link>
                  </motion.div>
                  <motion.div
                    variants={itemAnimation}
                    className="w-full rounded-lg bg-accent/40 dark:bg-darkAccent/40 p-3"
                  >
                    <Link
                      to="contact"
                      className="bottomLine w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Contato
                    </Link>
                  </motion.div>

                  <motion.a
                    variants={itemAnimation}
                    href={curriculumUrl}
                    download
                    target="_blank"
                    className="mt-8 flex items-center gap-3 rounded-xl bg-accent dark:bg-darkAccent py-4 px-6 text-white"
                  >
                    Ver Currículo
                    <MdOpenInNew />
                  </motion.a>
                </motion.div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
