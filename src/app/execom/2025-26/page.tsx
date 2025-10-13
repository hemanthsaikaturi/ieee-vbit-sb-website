import { TeamSection } from '@/components/TeamSection';
import { teamData2025_26 } from '@/data/teamData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team (2025-26)',
};

export default function TeamPage2025() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-12 text-center">
          Team (2025-26)
        </h1>
        <div className="space-y-16">
          {teamData2025_26.map((team) => (
            <TeamSection key={team.title} {...team} />
          ))}
        </div>
      </div>
    </div>
  );
}