'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle } from 'lucide-react';

export const VotingContestSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-10-31T23:59:59').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const TimerBlock = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold text-white">{String(value).padStart(2, '0')}</span>
      <span className="text-sm text-gray-400">{label}</span>
    </div>
  );

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
              <video
                className="w-full h-full object-cover"
                src="/contest/IEEE Day_Video 1080_30fps.mp4"
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-cyan-300">Vote for IEEE VBIT SB!</h2>
              <p className="mb-4 text-gray-300">
                The <b>IEEE - VBIT SB</b>,The IEEE - VBIT SB proudly represents Vignana Bharathi Institute of Technology (VBIT) in the <b>IEEE Day 2025 Global Photo and Video Contest, </b>standing among a select group of esteemed communities worldwide.</p>
              <p className="mb-6 text-gray-300">
                Your valuable vote can help us bring global recognition to VBIT and honor our unwavering spirit of innovation and excellence.
              </p>
              
              <div className="mb-6">
                  <h3 className="text-center font-semibold text-lg mb-3">Voting Ends In:</h3>
                  <div className="flex justify-center gap-4">
                      <TimerBlock value={timeLeft.days} label="Days" />
                      <TimerBlock value={timeLeft.hours} label="Hours" />
                      <TimerBlock value={timeLeft.minutes} label="Minutes" />
                      <TimerBlock value={timeLeft.seconds} label="Seconds" />
                  </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <a href="https://m.cmpgn.page/4zmKfh?sre=Qpr8nvFBKvp92Fk" target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-500 transition-all">
                      Photo Entry: Vote Here
                  </a>
                  <a href="https://m.cmpgn.page/CkdHG2?sre=ZBx9P5CPwlmGKsy" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 text-white font-bold py-3 px-4 rounded-md hover:bg-green-500 transition-all">
                      Video Entry: Vote Here
                  </a>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center gap-3 text-lg font-semibold text-cyan-300 p-4 mb-6 bg-gray-800/50 rounded-lg border-2 border-cyan-800 hover:bg-cyan-900/50 hover:border-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                <PlayCircle className="w-6 h-6" />
                <span>How to vote? See the process.</span>
              </button>

              <p className="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-4">
                  Your vote makes us one step closer to Global Recognition!
              </p>
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-2 right-2 text-white/50 hover:text-white/90 z-10"
              >
                <X size={28} />
              </button>
              <div className="w-full aspect-video">
                <video
                  className="w-full h-full custom-video-controls"
                  src="/contest/Conest_Voting_Process-1.mp4"
                  controls playsInline autoPlay controlsList="nodownload"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};