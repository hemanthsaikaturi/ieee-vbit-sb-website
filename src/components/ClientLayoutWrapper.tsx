'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomLoader } from '@/components/CustomLoader';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('hasLoadedOnce')) {
      setIsLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('hasLoadedOnce', 'true');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <CustomLoader />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-32">
            {children}
          </main>
          <Footer />
        </div>
      )}

      <ScrollToTopButton />
    </>
  );
}