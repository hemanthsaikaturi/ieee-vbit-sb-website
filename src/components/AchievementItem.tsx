import type { Achievement } from '@/data/achievementsData';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const AchievementItem = ({ year, title, description, imageUrl }: Achievement) => {
  return (
    <motion.div variants={itemVariants}>
      <motion.div 
        className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center p-6">
            <div className="md:col-span-1">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image 
                  src={imageUrl} 
                  alt={title} 
                  width={400} 
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2 md:pl-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">{year}</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h3>
              <p className="text-gray-600 mt-3 text-justify leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};