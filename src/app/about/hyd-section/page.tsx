import Image from 'next/image';
import type { Metadata } from 'next';

// Set the metadata for the page title
export const metadata: Metadata = {
  title: 'About IEEE Hyderabad Section',
};

export default function AboutHydSectionPage() {
  return (
    <div className="bg-white">
        <section className="py-10">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">IEEE Hyderabad Section</h1>
              <div className="w-24 h-1.5 bg-blue-600 mb-8"></div>
              <p className="text-gray-700 leading-relaxed text-justify">
                IEEE Hyderabad Section is one of the most active sections of IEEE in India. IEEE was formally introduced in Hyderabad, on June 1981, when a group of engineers in Hyderabad decided to form an IEEE sub-Section here. This sub-Section was rapidly elevated to a full Section, in 1984 (the year of IEEE Centenary celebrations). All IEEE members, residing in the state of Andhra Pradesh and Telangana, India, are automatically members of the IEEE Hyderabad Section. Our strength (in numbers) is 5924 members (as per the Hyderabad Section Report 2018). The Section has NINE Chapters – Computer Society (CS), Communication Society COMSOC)/Signal Processing Society (SPS), Computational Intelligence Society (CIS),/Geoscience and Remote Sensing Society (GRSS), CAS/EDS, Education Society, MTT/AP/EMC Societies, Power and Energy Society (PES)/Industry Applications Society(IAS)/Power Electronics society(PELS), Photonics Society, Technology and Engineering Management Society(TEMS) and TWO Affinity Groups – Women in Engineering (WIE) and Young Professionals (YP).
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <Image 
                src="/placeholders/ieee_hyd_section_logo.png" 
                alt="IEEE Hyderabad Section Logo" 
                width={500} 
                height={150}
                objectFit="contain" 
              />
            </div>

          </div>
        </section>
    </div>
  );
}