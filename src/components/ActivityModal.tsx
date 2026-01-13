'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import type { Activity } from '@/data/activityCatalogueData';

export interface ActivityModalProps {
  activity: Activity;
  onClose: () => void;
}

export const ActivityModal = ({ activity, onClose }: ActivityModalProps) => {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[110] p-4 flex justify-center items-center bg-black/80 md:bg-black/60 md:backdrop-blur-sm">
      
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{ willChange: 'transform, opacity' }}
        className="bg-white rounded-lg shadow-xl max-w-5xl w-full relative max-h-[90vh] overflow-y-auto overscroll-contain flex flex-col"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full text-gray-500 hover:text-gray-800 z-10 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-0 md:gap-8 p-0 md:p-8">
          <div className="relative h-80 md:h-auto md:min-h-[400px] mt-10 mx-4 md:mt-0 md:mx-0">
            <Image 
              src={activity.modalContent.imageUrl} 
              alt={activity.modalContent.title} 
              fill 
              className="object-contain rounded-md"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true} 
            />
          </div>

          <div className="p-6 md:p-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 leading-tight">
              {activity.modalContent.title}
            </h2>
            <p className="text-blue-600 font-semibold mb-4 text-sm md:text-base">
              {activity.modalContent.date}
            </p>
            <div className="text-gray-700 leading-relaxed text-justify text-sm md:text-base">
              {activity.modalContent.description}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};