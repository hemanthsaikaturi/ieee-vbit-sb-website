import Image from 'next/image';
import type { ContactPerson } from '@/data/contactData';

export const ContactPersonCard = ({ name, role, email, imageUrl }: ContactPerson) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6 text-center text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/50">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-blue-200 font-semibold">{role}</p>
      <a href={`mailto:${email}`} className="text-sm text-gray-300 hover:text-white transition-colors mt-2 inline-block">
        {email}
      </a>
    </div>
  );
};