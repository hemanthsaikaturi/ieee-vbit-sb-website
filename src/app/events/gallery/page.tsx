import { GalleryItem } from '@/components/galleryItem';
import { galleryData } from '@/data/galleryData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
};

export default function GalleryPage() {
  return (
    <div className="bg-white py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">Event Gallery</h1>
        <p className="text-gray-600 mt-4 text-xl">A glimpse into our moments of learning and community.</p>
      </div>

      <div className="space-y-20">
        {galleryData.map((item, index) => (
          <GalleryItem key={item.title} item={item} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}