'use client';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { animate } from 'framer-motion';

type AnimatedStatProps = {
  value: number;
  label: string;
  colorClass: string;
  plus?: boolean;
};

export const AnimatedStat = ({ value, label, colorClass, plus = false }: AnimatedStatProps) => {
  const nodeRef = useRef<HTMLHeadingElement>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(0, value, {
        duration: 2,
        ease: 'easeOut',
        onUpdate(latest) {
          node.textContent = Math.round(latest).toLocaleString();
          if (plus) {
            node.textContent += '+';
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, plus]);

  return (
    <div ref={ref} className="text-center">
      <h3 ref={nodeRef} className={`text-4xl md:text-5xl font-bold ${colorClass}`}>
        0
      </h3>
      <p className="text-gray-500 mt-2">{label}</p>
    </div>
  );
};