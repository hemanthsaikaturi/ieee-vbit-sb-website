import { ReportYearSection } from '@/components/ReportYearSection';
import { reportsData } from '@/data/reportsData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reports',
};

export default function ReportsPage() {
  return (
    <div className="bg-white py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">Reports</h1>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {reportsData.map((yearGroup) => (
          <ReportYearSection key={yearGroup.year} {...yearGroup} />
        ))}
      </div>
    </div>
  );
}