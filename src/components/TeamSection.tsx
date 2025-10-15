import type { Team, TeamMember } from '@/data/teamData';
import { TeamMemberCard } from '@/components/TeamMemberCard';
import Image from 'next/image';
import React from 'react';

export const TeamSection = ({ title, members }: Team) => {
  // --- HIERARCHICAL LAYOUT LOGIC  ---
  const isHierarchical = title === 'Design Team' || title === 'Research and Development Team';
  
  let leads: TeamMember[] = [];
  let otherMembers: TeamMember[] = [];

  if (isHierarchical) {
    leads = members.filter(p => !p.isLogo && (p.role.toLowerCase().includes('lead') || p.role.toLowerCase().includes('master')));
    otherMembers = members.filter(p => !p.isLogo && !leads.includes(p));
  }
  
  const logo = members.find(member => member.isLogo);
  const people = members.filter(member => !member.isLogo);
  const treasurerIndex = people.findIndex(p => p.role.toLowerCase().includes('treasurer'));
  
  let finalMemberList: (TeamMember | { isLogo: true, name: string, role: string, imageUrl: string })[] = people;

  if (!isHierarchical && logo && treasurerIndex !== -1) {
    const newMembers = [...people];
    newMembers.splice(treasurerIndex + 1, 0, logo);
    finalMemberList = newMembers;
  }

  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{title}</h2>
      
      {isHierarchical ? (
        // --- HIERARCHICAL LAYOUT RENDER ---
        <div className="max-w-6xl mx-auto">
          {leads.length > 0 && (
            <div className="flex justify-center flex-wrap gap-8 mb-8">
              {leads.map(m => <div key={m.name} className="w-full sm:w-1/2 lg:w-1/3"><TeamMemberCard {...m} /></div>)}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherMembers.map(m => <TeamMemberCard key={m.name} {...m} />)}
          </div>
        </div>
      ) : (
        // --- DEFAULT & SOCIETY LAYOUT RENDER ---
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {finalMemberList.map((member) => (
            member.isLogo ? (
              <div key={member.name} className="hidden lg:flex items-center justify-center p-4 h-full">
                <Image src={member.imageUrl} alt={member.name} width={200} height={200} objectFit="contain" />
              </div>
            ) : (
              <TeamMemberCard key={member.name} {...member} />
            )
          ))}
        </div>
      )}
    </div>
  );
};