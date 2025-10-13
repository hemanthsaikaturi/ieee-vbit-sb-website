import { FileText, ArrowRight } from 'lucide-react';
import type { Report } from '@/data/reportsData';

export const ReportItem = ({ title, driveLink }: Report) => {
  return (
    <a
      href={driveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex justify-between items-center">
        
        <div className="flex items-center gap-4 transition-transform duration-300 group-hover:-translate-x-1">
          <FileText className="w-6 h-6 text-blue-500 flex-shrink-0" />
          <span className="font-semibold text-gray-700">{title}</span>
        </div>

        <ArrowRight 
          className="w-6 h-6 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
        />
        
      </div>
    </a>
  );
};