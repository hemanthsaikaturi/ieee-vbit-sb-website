'use client';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import type { TeamMember } from '@/data/teamData';

const cardVariants: Variants = {
  initial: { y: 0 },
  hover: { y: -8, transition: { duration: 0.3, ease: 'easeOut' } },
};

const imageVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: 'easeOut' } },
};

const accentVariants: Variants = {
    initial: { width: 0 },
    hover: { width: '50%', transition: { duration: 0.4, ease: 'easeOut', delay: 0.1 } },
};

export const TeamMemberCard = ({ name, role, imageUrl }: TeamMember) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl relative"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500"></div>

      <div className="relative w-full aspect-[4/5] overflow-hidden mt-1.5">
        <motion.div
          className="w-full h-full"
          variants={imageVariants}
        >
          <Image fill className="transform object-cover" src={imageUrl} alt={name} />
        </motion.div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 truncate">{name}</h3>
        <motion.div
            className="h-0.5 bg-blue-500 mt-2"
            variants={accentVariants}
        />
        <p className="text-blue-600 mt-2 text-lg font-semibold">{role}</p>
      </div>
    </motion.div>
  );
};