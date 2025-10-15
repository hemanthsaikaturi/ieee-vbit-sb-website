'use client';
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { activities, Activity } from '@/data/activityCatalogueData';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// The Modal component for showing activity details
const ActivityModal = ({ activity, onClose }: { activity: Activity; onClose: () => void; }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-[110] p-4">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-lg shadow-xl max-w-5xl w-full relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"><X size={24} /></button>
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="w-full h-full relative min-h-[400px]"><Image src={activity.modalContent.imageUrl} alt={activity.modalContent.title} layout="fill" objectFit="contain" className="rounded-md" /></div>
          <div><h2 className="text-3xl font-bold mb-2 text-gray-900">{activity.modalContent.title}</h2><p className="text-blue-600 font-semibold mb-4">{activity.modalContent.date}</p><p className="text-gray-700 leading-relaxed text-justify">{activity.modalContent.description}</p></div>
        </div>
      </motion.div>
    </div>
);

export const ActivityCatalogue = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Activity Catalogue</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* --- Carousel for Mobile and Tablet (hidden on desktop) --- */}
        <div className="lg:hidden embla" ref={emblaRef}>
          <div className="embla__container">
            {activities.map((activity) => (
              <div className="embla__slide_activity" key={activity.title}>
                <div className="bg-white rounded-lg shadow-md border h-full flex flex-col overflow-hidden">
                  <div className="relative w-full h-64 bg-slate-100 p-4"><Image src={activity.imageUrl} alt={activity.title} layout="fill" objectFit="contain" /></div>
                  <div className="p-6 text-left flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 flex-grow">{activity.title}</h3>
                    <button onClick={() => setSelectedActivity(activity)} className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md self-start hover:bg-blue-500 transition-colors">Know More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Grid for Desktop (hidden on mobile/tablet) --- */}
        <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
          {activities.map((activity) => (
            <div key={activity.title} onClick={() => setSelectedActivity(activity)} className="cursor-pointer group">
              <div className="w-full max-w-[220px] mx-auto border bg-gray-100 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                <Image 
                  src={activity.imageUrl} 
                  alt={activity.title} 
                  width={300} 
                  height={420}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-4 font-semibold text-gray-800 group-hover:text-blue-600 text-sm text-center">{activity.title}</p>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedActivity && <ActivityModal activity={selectedActivity} onClose={() => setSelectedActivity(null)} />}
      </AnimatePresence>
    </section>
  );
};