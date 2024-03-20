"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 20,
      }}
    >
      {children}
    </motion.section>
  );
};
