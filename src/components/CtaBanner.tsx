import Link from 'next/link';
import React from 'react';

// Define the types for our new props
type CtaBannerProps = {
  title: React.ReactNode;
  buttonText: string;
  buttonLink: string;
};

export const CtaBanner = ({ title, buttonText, buttonLink }: CtaBannerProps) => (
  <section className="bg-gray-900 py-20">
    <div className="container mx-auto px-4">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl max-w-5xl mx-auto p-8 md:p-12 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {title}
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Link 
              href={buttonLink} 
              className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);