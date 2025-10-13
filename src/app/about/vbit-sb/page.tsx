import Image from 'next/image';
import { AnimatedStat } from '@/components/AnimatedStat';
import { CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

// Set the metadata for the page title
export const metadata: Metadata = {
  title: 'About IEEE - VBIT SB',
};

// Data for the checklist section
const objectives = [
  "Promote technical awareness amongst college students.",
  "Focus on research and development.",
  "Imparts knowledge relating to social issues by actively volunteering at NSS unit in the college.",
  "Conducts activities which can develop the technical cognition of a student.",
];

// Data for the stats section
const stats = [
    { value: 39, label: 'Executive Members', color: 'text-green-500' },
    { value: 3, label: 'Chapters', color: 'text-yellow-500' },
    { value: 1, label: 'Affinity Groups', color: 'text-purple-500' },
];

// A small component for the checklist items
const ObjectiveItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-4">
        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
        <p className="text-white text-lg">{text}</p>
    </div>
);

export default function AboutVbitSbPage() {
  return (
    <div>
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">IEEE – VBIT SB</h1>
              <div className="w-24 h-1.5 bg-blue-600 mb-8"></div>
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  The Student Branch took its birth in the year 2006, with branch strength of 42 members. It started of its operations by conducting weekly activities in the college and using events as a platform to promote IEEE within the college. In 2007, the Student Branch picked up its activity rate by conducting them regularly; it ensured healthy participation from students within the college. The Branch gained momentum in the year 2008 as the member intake increased that particular year and went on to conduct a workshop and a national level technical fest that year.
                </p>
                <p>
                  The Student Branch in that particular year also started communicating with the section and was also actively volunteering at sectional activities. It also participated in the All India Student Project Contest (organized by IEEE – Hyderabad Section) in that particular year and won the first prize.
                </p>
                <p>
                  The Student Branch has shown appreciable and sustainable growth since its inception, it is very clear about its Mission and Vision and is working towards it. As a result of continued and sincere efforts, IEEE – VBIT SB has won the “Outstanding Student Branch Award” for the year 2010. The chair person Mr. Karthik Siddavaram under whom two awards were won was elevated for the post of ‘Section Student Representative’ for the year 2011.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image 
                src="/ieee-vbit-sb.png" 
                alt="IEEE VBIT SB Logo" 
                width={400} 
                height={400} 
                objectFit="contain" 
              />
            </div>
          </div>
        </section>

        <section className="bg-cyan-600 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
              {objectives.map((item) => (
                <ObjectiveItem key={item} text={item} />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-cyan-600 pb-20">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-4">
                {stats.map(stat => (
                  <AnimatedStat key={stat.label} value={stat.value} label={stat.label} colorClass={stat.color} />
                ))}
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}