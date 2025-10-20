'use client'; 

import { useEffect } from 'react';
import { EventCarouselCard } from '@/components/EventCarouselCard';
import { galleryData } from '@/data/galleryData';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

export default function GalleryPage() {

  useEffect(() => {
    document.title = 'Gallery | IEEE - VBIT SB';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-10 pattern-background-light">
      <AnimateOnScroll>
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-600">Event Gallery</h1>
          <p className="text-gray-600 mt-4 text-xl">A glimpse into our moments of learning and community.</p>
        </div>
      </AnimateOnScroll>
      <div className="space-y-8">
        {galleryData.map((event, index) => (
          <AnimateOnScroll key={event.slug}>
            <EventCarouselCard 
              event={event} 
              isReversed={index % 2 !== 0} 
            />
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}