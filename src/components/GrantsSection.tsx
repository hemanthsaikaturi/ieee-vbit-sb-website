import Image from 'next/image';
import { grants } from '@/data/grantsData';

export const GrantsSection = () => (
  <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-2 text-white">Grants</h2>
      <div className="w-24 h-1 bg-white mx-auto mb-12"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 items-center">
        {grants.map((grant) => (

          <Image 
            key={grant.title} 
            src={grant.imageUrl} 
            alt={grant.title} 
            width={600} 
            height={800} 
            className="rounded-lg shadow-xl mx-auto transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl" 
          />
        ))}
      </div>
    </div>
  </section>
);