import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion, transform } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
import { container, itemAnimation } from "../../utils/StaggerItems";
import { transition } from "../../utils/Transition";

type MenuModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuModal = ({ isOpen, setIsOpen }: MenuModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-30"
        >
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="fixed inset-0 bg-darkBrown/30 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Full-screen scrollable container */}
          <div className="fixed inset-0 overflow-y-auto">
            {/* Container to center the panel */}
            <div className="flex min-h-full items-center justify-center p-4">
              {/* The actual dialog panel  */}
              <Dialog.Panel
                as={motion.div}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={transition}
                className="relative mx-auto flex h-[32rem] w-[90%] flex-col items-center overflow-hidden rounded-2xl bg-white p-4"
              >
                <Dialog.Title
                  as={motion.h1}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ...transition, delay: 0.5 }}
                  className="font-Odasans text-5xl font-semibold text-accent"
                >
                  NCLS
                </Dialog.Title>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="mt-8 flex w-full flex-col items-center gap-2 font-medium"
                >
                  <motion.div
                    variants={itemAnimation}
                    className="w-full rounded-lg bg-accent/40 p-3"
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
                    className="w-full rounded-lg bg-accent/40 p-3"
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
                    variants={itemAnimation}
                    className="w-full rounded-lg bg-accent/40 p-3"
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
                    className="w-full rounded-lg bg-accent/40 p-3"
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
                    className="w-full rounded-lg bg-accent/40 p-3"
                  >
                    <Link
                      to="contact"
                      className="bottomLine w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Contato
                    </Link>
                  </motion.div>
                  <motion.button
                    variants={itemAnimation}
                    className="mt-8 flex items-center gap-3 rounded-xl bg-accent py-4 px-6 text-white"
                  >
                    Baixar Currículo
                    <BsDownload />
                  </motion.button>
                </motion.div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
