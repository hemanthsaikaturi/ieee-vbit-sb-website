import type { Team, TeamMember } from '@/data/teamData';
import { TeamMemberCard } from '@/components/TeamMemberCard';
import Image from 'next/image';

export const TeamSection = ({ title, members }: Team) => {
  // --- NEW, SMARTER LOGIC FOR INLINE LOGO PLACEMENT ---
  
  const logo = members.find(member => member.isLogo);
  const people = members.filter(member => !member.isLogo);

  // This will render the grid of people
  const renderPeople = (peopleToRender: TeamMember[]) => {
    return peopleToRender.map(member => <TeamMemberCard key={member.name} {...member} />);
  };

  // This will render the logo with a larger size
  const renderLogo = () => {
    if (!logo) return null;
    return (
      <div key={logo.name} className="flex items-center justify-center p-4 h-full">
        <Image src={logo.imageUrl} alt={logo.name} width={200} height={200} objectFit="contain" />
      </div>
    );
  };
  
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/*
          This logic checks if there is a logo AND if there's an odd number of people.
          If true, it creates the special layout you want.
          Otherwise, it renders the members and the logo separately.
        */}
        {logo && people.length % 2 !== 0 ? (
          <>
            {/* Render all members except the last one */}
            {renderPeople(people.slice(0, people.length - 1))}
            {/* Render the logo */}
            {renderLogo()}
            {/* Render the last member */}
            {renderPeople(people.slice(people.length - 1))}
          </>
        ) : (
          <>
            {/* Default rendering for all other teams */}
            {renderPeople(people)}
            {logo && (
                <div key={logo.name} className="flex items-center justify-center p-4 h-full">
                    <Image src={logo.imageUrl} alt={logo.name} width={200} height={200} objectFit="contain" />
                </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};