'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomLoader } from '@/components/CustomLoader';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  // This effect handles the initial splash screen logic
  useEffect(() => {
    if (sessionStorage.getItem('hasLoadedOnce')) {
      setIsLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('hasLoadedOnce', 'true');
    }, 1500); // Duration of the splash screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. The Splash Screen */}
      <AnimatePresence>
        {isLoading && <CustomLoader />}
      </AnimatePresence>
      
      {/* 2. The Main Content */}
      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      )}

      <ScrollToTopButton />
    </>
  );
}