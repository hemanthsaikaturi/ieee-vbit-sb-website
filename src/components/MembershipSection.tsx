import Image from 'next/image';
import Link from 'next/link';
import { membershipBanners } from '@/data/membershipData';

export const MembershipSection = () => (
  // UPDATED: Reverted to the dark background theme
  <section className="py-20 bg-gray-900"> 
    <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-2 text-white">Want to become a member of IEEE?</h2>
      <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
        Get Your Membership Now To Avail Exciting Benefits
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        {membershipBanners.map((banner) => (
          <div key={banner.altText} className="flex flex-col items-center gap-8">
            
            <div className="border-4 bg-white border-gray-200 rounded-lg p-4 shadow-2xl w-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/20">
              <Image 
                src={banner.imageUrl} 
                alt={banner.altText} 
                width={1200} 
                height={800} 
                className="rounded-md w-full" 
              />
            </div>
            <Link 
              href={banner.buttonLink}
              className="inline-block bg-blue-600 text-white font-bold py-3 px-10 rounded-full text-base hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {banner.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);