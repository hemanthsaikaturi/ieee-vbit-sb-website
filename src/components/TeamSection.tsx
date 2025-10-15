import type { Team, TeamMember } from '@/data/teamData';
import { TeamMemberCard } from '@/components/TeamMemberCard';
import Image from 'next/image';

export const TeamSection = ({ title, members }: Team) => {
  const logo = members.find(member => member.isLogo);
  const people = members.filter(member => !member.isLogo);

  const renderPeople = (peopleToRender: TeamMember[]) => {
    return peopleToRender.map(member => <TeamMemberCard key={member.name} {...member} />);
  };

  const renderLogo = () => {
    if (!logo) return null;
    return (
      <div key={logo.name} className="hidden lg:flex items-center justify-center p-4 h-full">
        <Image src={logo.imageUrl} alt={logo.name} width={200} height={200} objectFit="contain" />
      </div>
    );
  };
  
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {logo && people.length % 2 !== 0 ? (
          <>
            {renderPeople(people.slice(0, people.length - 1))}
            {renderLogo()}
            {renderPeople(people.slice(people.length - 1))}
          </>
        ) : (
          <>
            {renderPeople(people)}
            {/* Also apply the responsive classes to the fallback logo render */}
            {logo && (
                <div key={logo.name} className="hidden lg:flex items-center justify-center p-4 h-full">
                    <Image src={logo.imageUrl} alt={logo.name} width={200} height={200} objectFit="contain" />
                </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};