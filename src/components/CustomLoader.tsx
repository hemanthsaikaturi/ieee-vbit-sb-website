'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export const CustomLoader = () => {
  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="flex justify-center items-center h-screen bg-white fixed inset-0 z-50"
      >
        {/* Main container for the spinner and logos */}
        <div className="relative w-40 h-40 flex justify-center items-center">
          <div className="absolute w-full h-full rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin"></div>

          <div className="relative w-28 h-28">
              <motion.div
                className="absolute inset-0 flex justify-center items-center"
                animate={{ opacity: [1, 0, 0, 1, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.5, 0.75, 1],
                }}
              >
                <Image
                  src="/ieee-vbit-sb.png"
                  alt="IEEE VBIT SB Logo"
                  width={96}
                  height={96}
                  objectFit="contain"
                  priority={true}
                />
              </motion.div>

              {/* Main IEEE Logo */}
              <motion.div
                className="absolute inset-0 flex justify-center items-center"
                animate={{ opacity: [0, 1, 1, 0, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.5, 0.75, 1],
                }}
              >
                <Image
                  src="/placeholders/IEEE_logo.png"
                  alt="IEEE Logo"
                  width={112}
                  height={112}
                  objectFit="contain"
                  priority={true}
                />
              </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};