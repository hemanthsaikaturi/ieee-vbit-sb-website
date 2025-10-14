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
      
      <div className={isLoading ? 'hidden' : 'flex flex-col min-h-screen'}>
        {children}
      </div>

      <ScrollToTopButton />
    </>
  );
}