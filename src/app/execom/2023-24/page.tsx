import { TeamSection } from '@/components/TeamSection';
import { teamData2023_24 } from '@/data/teamData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team (2023-24)',
};

export default function TeamPage2023() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-12 text-center">
          Team (2023-24)
        </h1>
        <div className="space-y-16">
          {teamData2023_24.map((team) => (
            <TeamSection key={team.title} {...team} />
          ))}
        </div>
      </div>
    </div>
  );
}