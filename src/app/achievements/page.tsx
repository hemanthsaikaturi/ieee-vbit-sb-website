'use client'; 
import { useEffect } from 'react';
import { AchievementItem } from '@/components/AchievementItem';
import { achievementsData } from '@/data/achievementsData';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { FadeIn } from '@/components/FadeIn';

export default function AchievementsPage() {
  
  useEffect(() => {
    document.title = 'Awards & Recognition | IEEE - VBIT SB';
  }, []);

  return (
    <div className="bg-white py-10">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Awards & Recognition</h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4"></div>
        </div>
      </FadeIn>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
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