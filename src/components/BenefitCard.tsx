import React from 'react';

type BenefitCardProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

export const BenefitCard = ({ icon, children }: BenefitCardProps) => {
  return (
    <div className="text-center">
      <div className="flex justify-center items-center mb-4 text-blue-600">
        {icon}
      </div>
      <p className="text-gray-600 leading-relaxed">
        {children}
      </p>
    </div>
  );
};