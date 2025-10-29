'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Camera, Video, HelpCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { CountdownTimer } from './CountdownTimer';
import { VotingProcessModal } from './VotingProcessModal';

export const IeeeDayContestSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deadline = "2025-10-31T23:59:59";

  return (
    <>
      <section className="relative bg-slate-100 text-slate-800 pt-12 pb-20 overflow-hidden">
        {/* Background remains the same */}
        <div className="absolute inset-0 bg-noise opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Image src="/contest/ieee-day-logo.png" alt="IEEE Day 2025 Logo" width={180} height={90} className="mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
              Vote for IEEE - VBIT SB!
            </h2>
          </motion.div>

          {/* Stable Side-by-Side Layout */}
          <div className="flex flex-col lg:flex-row items-center gap-x-16 gap-y-10">

            {/* Left Column: Video Player */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full lg:w-1/2" 
            >
              <div className="w-full rounded-xl shadow-2xl border-2 border-white overflow-hidden aspect-w-16 aspect-h-9">
                <video
                  src="/contest/IEEE Day_Video 1080_30fps.mp4" 
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column: Voting Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col gap-6" 
            >
              <p className="text-slate-600 text-lg text-center lg:text-left">
                The <strong>IEEE - VBIT SB</strong> proudly represents Vignana Bharathi Institute of Technology (VBIT) in the <strong>IEEE Day 2025 Global Photo and Video Contest</strong>.
              </p>
              <p className="text-slate-600 text-lg text-center lg:text-left">
                Your valuable vote can help us bring global recognition to VBIT and honor our unwavering spirit of innovation and excellence.
              </p>

              {/* ---- UPDATED "FROSTED GLASS" CARD STYLES BELOW ---- */}
              <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-center text-xl font-semibold mb-4 text-slate-700">Voting Ends In:</h3>
                <CountdownTimer targetDate={deadline} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50/80 to-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-6 text-center shadow-lg">
                  <Camera size={40} className="mx-auto mb-4 text-blue-600"/>
                  <h4 className="text-xl font-bold mb-4">Photo Entry</h4>
                  <Link href="https://m.cmpgn.page/4zmKfh?sre=Qpr8nvFBKvp92Fk" target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-500 transition-transform transform hover:scale-105">
                    Vote Here
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-green-50/80 to-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-6 text-center shadow-lg">
                  <Video size={40} className="mx-auto mb-4 text-green-600"/>
                  <h4 className="text-xl font-bold mb-4">Video Entry</h4>
                  <Link href="https://m.cmpgn.page/CkdHG2?sre=ZBx9P5CPwlmGKsy" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-500 transition-transform transform hover:scale-105">
                    Vote Here
                  </Link>
                </div>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 w-full text-center py-3 px-6 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-xl shadow-lg text-slate-600 hover:border-gray-400 hover:text-slate-800 transition-all duration-300"
              >
                <HelpCircle size={20} /> How to vote? See the process.
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && <VotingProcessModal onClose={() => setIsModalOpen(false)} videoSrc="/contest/Conest_Voting_Process-1.mp4" />}
      </AnimatePresence>
    </>
  );
};