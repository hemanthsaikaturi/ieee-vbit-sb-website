import { EventCarouselCard } from '@/components/EventCarouselCard';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { galleryData } from '@/data/galleryData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
};

export default function GalleryPage() {
  return (
    <div className="py-10 pattern-background-light">
      <AnimateOnScroll>
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-600">Event Gallery</h1>
          <p className="text-gray-600 mt-4 text-xl">A glimpse into our moments of learning and community.</p>
        </div>
      </AnimateOnScroll>
      <div>
        {galleryData.map((event, index) => (
          <AnimateOnScroll key={event.slug}>
            <EventCarouselCard event={event} isReversed={index % 2 !== 0} />
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}