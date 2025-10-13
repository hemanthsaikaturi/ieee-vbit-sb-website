import type { ReportYearGroup } from '@/data/reportsData';
import { ReportItem } from './ReportItem';

export const ReportYearSection = ({ year, reports }: ReportYearGroup) => {
  return (
    <section className="mb-16">
      <div className="relative text-center mb-10">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-2xl font-semibold text-gray-600">{year}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {reports.map((report) => (
          <ReportItem key={report.title} {...report} />
        ))}
      </div>
    </section>
  );
};