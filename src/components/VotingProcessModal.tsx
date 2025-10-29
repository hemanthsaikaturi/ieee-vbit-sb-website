'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

type VotingProcessModalProps = {
  onClose: () => void;
  videoSrc: string; 
};

export const VotingProcessModal = ({ onClose, videoSrc }: VotingProcessModalProps) => {
  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[120] p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()} 
        className="bg-gray-900 border border-gray-700 rounded-lg shadow-xl w-full max-w-4xl relative overflow-hidden"
      >
        {/* --- THIS IS THE UPDATED BUTTON --- */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-1.5 z-10 transition-transform hover:scale-110 backdrop-blur-sm"
          aria-label="Close video player"
        >
          <X size={24} />
        </button>
        
        <div className="p-2">
            <video 
              src={videoSrc} 
              controls
              autoPlay
              className="w-full h-full rounded-md"
              style={{ aspectRatio: '16 / 9' }} 
            >
              Your browser does not support the video tag.
            </video>
        </div>
      </motion.div>
    </div>
  );
};