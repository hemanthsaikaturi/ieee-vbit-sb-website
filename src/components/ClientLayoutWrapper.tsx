'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { CustomLoader } from '@/components/CustomLoader';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  // This effect simulates an initial load and shows the splash screen
  useEffect(() => {
    // A check to prevent the splash screen on subsequent navigations
    if (sessionStorage.getItem('hasLoadedOnce')) {
      setIsLoading(false);
      return;
    }
    // On first load, show the loader then hide it
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('hasLoadedOnce', 'true');
    }, 1500); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <CustomLoader />}
      </AnimatePresence>
      
      <div className={isLoading ? 'hidden' : 'flex flex-col min-h-screen'}>
        {children}
      </div>

      <ScrollToTopButton />
    </>
  );
}