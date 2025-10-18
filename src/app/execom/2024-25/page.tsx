import { TeamSection } from '@/components/TeamSection';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { teamData2024_25 } from '@/data/teamData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team (2024-25)',
};

export default function TeamPage2024() {
  return (
    <div className="bg-slate-50 py-10">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-12 text-center"> Team (2024-25) </h1>
        </AnimateOnScroll>
        <div className="space-y-16">
          {teamData2024_25.map((team) => (
            <AnimateOnScroll key={team.title}>
              <TeamSection {...team} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}