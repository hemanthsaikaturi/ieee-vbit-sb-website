'use client';

import Link from 'next/link';
import Image from 'next/image';
import { societies } from '@/data/societiesData';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

// Animation for the container to stagger the children's entry
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Animation for each individual circle on page load
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Unified hover animation variants
const logoVariants: Variants = {
  initial: { opacity: 1 },
  hover: { opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const overlayVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  hover: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};


export const SocietiesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Society Chapters and Affinity Groups</h2>
        <div className="w-24 h-1 bg-white mx-auto mb-12"></div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto justify-items-center"
        >
          {societies.map((society) => (
            <motion.div
              key={society.name}
              variants={itemVariants}
              className="relative"
            >
              <Link href={society.link} className="block group">
                <motion.div 
                  className="bg-white rounded-full h-40 w-40 md:h-48 md:w-48 flex justify-center items-center shadow-2xl p-4 relative"
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.div variants={logoVariants}>
                    <Image 
                      src={society.logoUrl} 
                      alt={`${society.name} Logo`} 
                      width={120} 
                      height={120} 
                      className="object-contain" 
                    />
                  </motion.div>
                  <motion.div 
                    variants={overlayVariants}
                    className="absolute inset-0 bg-white rounded-full flex justify-center items-center"
                  >
                    <span className="text-blue-600 font-bold text-lg">KNOW MORE</span>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};