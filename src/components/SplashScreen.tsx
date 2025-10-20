'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CustomLoader } from './CustomLoader';

export const SplashScreen = () => {
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
    <AnimatePresence>
      {isLoading && <CustomLoader />}
    </AnimatePresence>
  );
};