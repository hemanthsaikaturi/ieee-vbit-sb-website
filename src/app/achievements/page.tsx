'use client';
import { AchievementItem } from '@/components/AchievementItem';
import { achievementsData } from '@/data/achievementsData';
import { motion } from 'framer-motion';
if (typeof document !== 'undefined') {
  document.title = 'Awards & Recognition | IEEE - VBIT SB';
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export default function AchievementsPage() {
  return (
    <div className="bg-white py-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Awards & Recognition</h1>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {achievementsData.map((achievement, index) => (
            <AchievementItem key={index} {...achievement} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}