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

      <div className="absolute -left-[calc(2rem+9px)] md:-left-[calc(3rem+9px)] top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white z-10"></div>

      <motion.div 
        className="flex flex-col md:flex-row gap-8 items-center"
        whileHover={{ y: -5 }}
      >
        
        {/* --- Image Column --- */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">

            <Image 
              src={imageUrl} 
              alt={title} 
              width={400} 
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* --- Details Column --- */}
        <div className="w-full md:w-2/3">
          <h2 className="text-5xl font-bold text-blue-500 mb-2">{year}</h2>
          <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-3 text-justify leading-relaxed">{description}</p>
        </div>

      </motion.div>
    </motion.div>
  );
};