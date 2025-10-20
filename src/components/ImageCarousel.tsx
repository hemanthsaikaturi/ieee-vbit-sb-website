'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

type ImageCarouselProps = {
  slides: string[];
};

export const ImageCarousel = ({ slides }: ImageCarouselProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  return (
    <div className="embla rounded-lg shadow-xl" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((src, index) => (
          <div className="embla__slide_membership" key={index}>
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Carousel slide ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};