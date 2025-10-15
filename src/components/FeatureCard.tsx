import React from 'react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

export const FeatureCard = ({ icon, title, children }: FeatureCardProps) => {
  const isString = typeof children === 'string';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8 text-center transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
      <div className="flex justify-center items-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>

      {isString ? (
        <p className="text-gray-600 leading-relaxed text-justify">{children}</p>
      ) : (
        <div className="text-gray-600 leading-relaxed text-justify">{children}</div>
      )}
    </div>
  );
};