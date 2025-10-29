'use client';

import { useState, useEffect } from 'react';

// Define the structure for the time left
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// Function to calculate the time left until the target date
const calculateTimeLeft = (targetDate: Date): TimeLeft | null => {
  const difference = +targetDate - +new Date();
  if (difference <= 0) {
    return null; // Contest has ended
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

// The props for our component, we just need the target date
type CountdownTimerProps = {
  targetDate: string;
};

// A smaller, reusable component for each block of time
const TimeBlock = ({ value, label, numberColor, labelColor }: { value: string; label: string; numberColor: string; labelColor: string }) => (
    <div className="flex flex-col items-center">
        <span className={`text-4xl md:text-5xl font-bold tracking-wider ${numberColor}`}>
          {value}
        </span>
        <p className={`text-sm mt-1 ${labelColor}`}>
          {label}
        </p>
    </div>
);


export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft(new Date(targetDate))
  );

  useEffect(() => {
    // Set up a timer to update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(new Date(targetDate)));
    }, 1000);
    // Clean up the interval when the component is unmounted
    return () => clearInterval(timer);
  }, [targetDate]);

  // Helper function to format the numbers with a leading zero
  const formatTime = (value: number) => value.toString().padStart(2, '0');

  if (!timeLeft) {
    return <div className="text-center text-xl font-bold text-red-500">The voting period has ended.</div>;
  }
  
  // ---- URGENCY LOGIC ----
  // Check if there is less than one day remaining
  const isUrgent = timeLeft.days < 1;
  
  // Conditionally set the text colors
  const numberColor = isUrgent ? 'text-red-600' : 'text-slate-800';
  const labelColor = isUrgent ? 'text-red-500' : 'text-gray-500';
  // ---- END OF LOGIC ----

  return (
    <div className="flex justify-center items-start gap-6 md:gap-10">
        <TimeBlock value={formatTime(timeLeft.days)} label="Days" numberColor={numberColor} labelColor={labelColor} />
        <TimeBlock value={formatTime(timeLeft.hours)} label="Hours" numberColor={numberColor} labelColor={labelColor} />
        <TimeBlock value={formatTime(timeLeft.minutes)} label="Minutes" numberColor={numberColor} labelColor={labelColor} />
        <TimeBlock value={formatTime(timeLeft.seconds)} label="Seconds" numberColor={numberColor} labelColor={labelColor} />
    </div>
  );
};