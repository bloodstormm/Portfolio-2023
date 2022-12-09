import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { transition } from "../../utils/Transition";

type LoaderLayerProps = {
  showContent: boolean;
};

export const LoaderLayer = ({ showContent }: LoaderLayerProps) => {
  return (
    <>
      {/* <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          top: [0, 0, window.innerHeight],
        }}
        exit={{ height: [0, window.innerHeight, 0], top: [null, 0, 0] }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="absolute left-0 z-20 h-screen w-full bg-[#e6c291]"
      ></motion.div> */}

      <motion.div
        initial={{ width: 0 }}
        animate={{
          width: [window.innerWidth, 0],
        }}
        transition={{ ease: [1, -0.08, 0.47, 0.9], duration: 1.7 }}
        className="absolute top-0 right-0 z-30 flex h-screen w-screen items-center justify-center overflow-hidden bg-[#e6c291]"
      >
        <motion.h1
          initial={{ scale: 1 }}
          animate={{ scale: 1.4 }}
          transition={{
            ease: [1, -0.08, 0.47, 0.9],
            duration: 0.9,
          }}
          className="relative font-Odasans text-8xl font-semibold text-white"
        >
          NCLS
        </motion.h1>
      </motion.div>
    </>
  );
};
