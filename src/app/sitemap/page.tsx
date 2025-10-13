import { SiteMapSection } from '@/components/SiteMapSection';
import { sitemapData } from '@/data/sitemapData';
import type { Metadata } from 'next';

// Set the metadata for the page title
export const metadata: Metadata = {
  title: 'Site Map',
};

export default function SiteMapPage() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">Site Map</h1>
        <p className="text-gray-600 mt-4 text-xl">For Ease of access redirect to the page of your choice</p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-16">
          {sitemapData.map((section) => (
            <SiteMapSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}