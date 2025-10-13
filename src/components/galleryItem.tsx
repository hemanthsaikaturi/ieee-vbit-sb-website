import Image from 'next/image';
import type { GalleryItemData } from '@/data/galleryData';

type GalleryItemProps = {
  item: GalleryItemData;
  isReversed: boolean;
};

export const GalleryItem = ({ item, isReversed }: GalleryItemProps) => {
  const { title, year, imageUrl } = item;
  const imageOrderClass = isReversed ? 'md:order-last' : '';

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        <div className={`relative aspect-video rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 ${imageOrderClass}`}>
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-500 mt-2 text-lg">{year}</p>
        </div>

      </div>
    </div>
  );
};