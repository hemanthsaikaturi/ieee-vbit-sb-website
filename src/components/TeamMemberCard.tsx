'use client';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import type { TeamMember } from '@/data/teamData';

// --- ANIMATION VARIANTS ---
// Controls the entire card's "lift" effect
const cardVariants: Variants = {
  initial: { y: 0 },
  hover: { y: -8, transition: { duration: 0.3, ease: 'easeOut' } },
};

// Controls the image's subtle zoom effect
const imageVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: 'easeOut' } },
};

// Controls the blue accent line's growth effect
const accentVariants: Variants = {
    initial: { width: 0 },
    hover: { width: '50%', transition: { duration: 0.4, ease: 'easeOut', delay: 0.1 } },
};

export const TeamMemberCard = ({ name, role, imageUrl }: TeamMember) => {
  return (
    // The main container that triggers all hover animations
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      {/* 1. THE IMAGE CONTAINER */}
      {/* It's a fixed aspect ratio and clips the zooming image */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <motion.div
          className="w-full h-full"
          variants={imageVariants}
        >
          <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" className="transform" />
        </motion.div>
      </div>

      {/* 2. THE INFO BLOCK */}
      {/* A clean, separate block for text, ensuring perfect readability */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 truncate">{name}</h3>
        
        {/* 3. THE ANIMATED ACCENT LINE */}
        <motion.div
            className="h-0.5 bg-blue-500 mt-2"
            variants={accentVariants}
        />

        <p className="text-blue-600 mt-2">{role}</p>
      </div>
    </motion.div>
  );
};