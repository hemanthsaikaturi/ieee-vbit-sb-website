'use client';

import { useState, useEffect } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (targetDate: Date): TimeLeft | null => {
  const difference = +targetDate - +new Date();
  if (difference <= 0) return null;
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

type CountdownTimerProps = {
  targetDate: string;
};

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft(new Date(targetDate))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(new Date(targetDate)));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  if (!timeLeft) {
    return <div className="text-center text-xl font-bold text-red-500">The voting period has ended.</div>;
  }

  // ---> All changes are in this section <---
  return (
    <div className="flex justify-center gap-4 text-center">
      <div>
        <span className="text-4xl md:text-5xl font-bold text-slate-800">{formatTime(timeLeft.days)}</span>
        <p className="text-sm text-gray-500">Days</p>
      </div>
      <div>
        <span className="text-4xl md:text-5xl font-bold text-slate-800">{formatTime(timeLeft.hours)}</span>
        <p className="text-sm text-gray-500">Hours</p>
      </div>
      <div>
        <span className="text-4xl md:text-5xl font-bold text-slate-800">{formatTime(timeLeft.minutes)}</span>
        <p className="text-sm text-gray-500">Minutes</p>
      </div>
      <div>
        <span className="text-4xl md:text-5xl font-bold text-slate-800">{formatTime(timeLeft.seconds)}</span>
        <p className="text-sm text-gray-500">Seconds</p>
      </div>
    </div>
  );
  // ---> End of changes <---
};