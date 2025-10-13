import type { Achievement } from '@/data/achievementsData';
import { motion, Variants } from 'framer-motion'; 
import Image from 'next/image';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const AchievementItem = ({ year, title, description, imageUrl }: Achievement) => {
  return (
    <motion.div className="relative" variants={itemVariants}>
      
      <div className="absolute -left-[calc(2rem+9px)] md:-left-[calc(3rem+9px)] top-4 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>

      <motion.div 
        className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        whileHover={{ scale: 1.02 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3">
          
          <div className="md:col-span-1 relative aspect-square">
            <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
          </div>

          <div className="md:col-span-2 p-6">
            <h2 className="text-4xl font-bold text-blue-500 mb-2">{year}</h2>
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            <p className="text-gray-600 mt-3 text-justify">{description}</p>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};