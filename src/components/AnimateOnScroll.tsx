'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, ReactNode } from 'react';

// The animation variants
const variants: Variants = {
  hidden: { opacity: 0, y: 50 }, // Starts a bit further down for a more noticeable effect
  visible: { 
    opacity: 1, 
    y: 0,
    // THIS IS THE KEY CHANGE: We are now using a 'spring' animation
    transition: { 
      type: 'spring',
      stiffness: 100, // How "stiff" the spring is. Lower is softer.
      damping: 20,    // How much resistance. Higher is less bouncy.
      mass: 0.8,      // The "weight" of the object.
    },
  },
};

type AnimateOnScrollProps = {
  children: ReactNode;
};

export const AnimateOnScroll = ({ children }: AnimateOnScrollProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -20% 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};