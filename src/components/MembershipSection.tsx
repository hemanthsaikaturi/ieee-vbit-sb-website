import Image from 'next/image';
import Link from 'next/link';
import { membershipBanners } from '@/data/membershipData';
import { CtaBanner } from '@/components/CtaBanner';

export const MembershipSection = () => (
  // The main section has top padding.
  <section className="bg-gray-900 pt-20"> 
    <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-2 text-white">Want to become a member of IEEE?</h2>
      <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
        Here are a few benefits of becoming an IEEE member. So what's holding you back? Join IEEE today!
      </p>
      
      {/* --- THE BANNERS SECTION (RESTORED) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">
        {membershipBanners.map((banner) => (
          <div key={banner.altText} className="flex flex-col items-center gap-8">
            <div className="relative w-full rounded-lg shadow-2xl overflow-hidden transition-transform duration-300 transform hover:-translate-y-2">
              <Image 
                src={banner.imageUrl} 
                alt={banner.altText} 
                width={1200} 
                height={800} 
                className="w-full h-full object-cover" 
              />
            </div>
            <Link 
              href={banner.buttonLink}
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-10 rounded-full text-base shadow-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105"
            >
              {banner.buttonText}
            </Link>
          </div>
        ))}
      </div>
      <div className="py-20">
        <CtaBanner
          title="Explore All Membership Benefits and Opportunities"
          buttonText="LEARN MORE"
          buttonLink="/memberships"
        />
      </div>
    </div>
  </section>
);