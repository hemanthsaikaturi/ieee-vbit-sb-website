import Link from 'next/link';
import { Link2 } from 'lucide-react';
import type { SiteMapSectionData } from '@/data/sitemapData';

export const SiteMapSection = ({ title, links }: SiteMapSectionData) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group block bg-white p-4 rounded-lg shadow-md border-t-4 border-blue-400 hover:shadow-lg hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <Link2 className="w-6 h-6 text-blue-500 flex-shrink-0 transition-transform duration-300 group-hover:rotate-[-45deg]" />
              <span className="font-semibold text-gray-700">{link.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};