'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type LightboxProps = {
  images: string[];
  initialIndex: number;
  onClose: () => void;
};

export const Lightbox = ({ images, initialIndex, onClose }: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious(e as any);
      else if (e.key === 'ArrowRight') goToNext(e as any);
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[110] p-4"
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToPrevious}
          className="bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </motion.button>
        <div className="relative w-full h-[90vh]" onClick={(e) => e.stopPropagation()}>
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image 
                src={images[currentIndex]} 
                alt="Enlarged gallery view" 
                layout="fill" 
                objectFit="contain"
                priority={true}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToNext}
          className="bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </motion.button>
      </div>

      <button onClick={onClose} className="absolute top-6 right-6 text-white hover:opacity-80 transition-opacity" aria-label="Close image viewer">
        <X size={32} />
      </button>
    </motion.div>
  );
};