'use client'; 
import { AchievementItem } from '@/components/AchievementItem';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { achievementsData } from '@/data/achievementsData';
import { motion } from 'framer-motion';

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, }, }, };

export default function AchievementsPage() {
  return (
    <div className="bg-white py-10">
      <AnimateOnScroll>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Awards & Recognition</h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4"></div>
        </div>
      </AnimateOnScroll>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* We can remove the stagger from the parent and let AnimateOnScroll handle it */}
        <div className="space-y-12 border-l-2 border-gray-200 pl-8 md:pl-12">
          {achievementsData.map((achievement, index) => (
            <AnimateOnScroll key={index}>
              <AchievementItem {...achievement} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}