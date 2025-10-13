import type { Team } from '@/data/teamData';
import { TeamMemberCard } from '@/components/TeamMemberCard'; // This import will now work
import Image from 'next/image';

export const TeamSection = ({ title, members }: Team) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          member.isLogo ? (
            <div key={member.name} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md h-full">
                <Image src={member.imageUrl} alt={member.name} width={150} height={150} objectFit="contain" />
            </div>
          ) : (
            <TeamMemberCard key={member.name} {...member} />
          )
        ))}
      </div>
    </div>
  );
};