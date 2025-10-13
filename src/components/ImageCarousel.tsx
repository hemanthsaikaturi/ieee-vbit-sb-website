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
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((src, index) => (
          <div className="embla__slide" key={index}>
            <div className="bg-white h-full w-full rounded-lg shadow-xl border border-gray-200 flex items-center justify-center p-4">
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={`Carousel slide ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};