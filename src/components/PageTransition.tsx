'use client';
import { motion } from 'framer-motion';
import React from 'react';

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // The 'exit' prop is removed
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};