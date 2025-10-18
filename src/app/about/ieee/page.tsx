import Image from "next/image";
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Lightbulb, Target } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { AnimatedStat } from "@/components/AnimatedStat";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IEEE",
};

const stats = [
    { value: 486000, label: "Members", color: "text-cyan-500", plus: true },
    { value: 344, label: "Sections", color: "text-green-500" },
    { value: 2816, label: "Chapters", color: "text-yellow-500" },
    { value: 3613, label: "Student Branches", color: "text-purple-500" },
    { value: 670, label: "Affinity Groups", color: "text-blue-500" },
    { value: 190, label: "Countries", color: "text-emerald-500", plus: true },
    { value: 4240, label: "Student Branch Chapters", color: "text-amber-500" },
    { value: 180000, label: "Student Members", color: "text-violet-500", plus: true },
];

export default function AboutIeeePage() {
  const missionText = "IEEE will be essential to the global technical community and to technical professionals everywhere and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.";
  const visionText = "IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.";

  return (
    <div>
      <AnimateOnScroll>
        <section className="bg-white py-10">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">IEEE</h1>
              <div className="w-24 h-1.5 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed text-justify"> The IEEE - VBIT Student Branch was established in 2006 with an initial strength of 42 members. Its inception, the branch focused on conducting weekly activities within the college, leveraging events as platforms to promote IEEE and foster student engagement. In 2007, the branch had increased its activity frequency and ensured robust participation from students across the college. In 2008, with a significant rise in member intake, the branch gained momentum, successfully organizing a workshop and a national-level technical fest that year. </p>
              <p className="text-gray-700 leading-relaxed mt-4 text-justify"> During this period, the branch began active communication with the IEEE Hyderabad Section and participated as volunteers in sectional activities. Notably, the branch took part in the All India Student Project Contest organized by the IEEE Hyderabad Section and secured first prize, highlighting its growing excellence. </p>
              <p className="text-gray-700 leading-relaxed mt-4 text-justify"> Since its inception, IEEE - VBIT SB has demonstrated sustained and appreciable growth, guided by a clear vision and mission. These consistent efforts culminated in the branch receiving the “Outstanding Student Branch Award” in 2010. Under the leadership of Chairperson Mr. Karthik Siddavaram, during whose tenure two awards were achieved, the branch’s excellence was further recognized as he was elevated to the position of Section Student Representative for 2011. </p>
            </div>
            <div className="flex justify-center">
              <Image src="/placeholders/IEEE_logo.png" alt="IEEE Advancing Technology for Humanity" width={500} height={300} objectFit="contain" />
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="bg-white pb-5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard icon={<Lightbulb size={48} className="text-blue-600" />} title="Mission">{missionText}</FeatureCard>
              <FeatureCard icon={<Target size={48} className="text-blue-600" />} title="Vision">{visionText}</FeatureCard>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="bg-blue-500 py-10">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-10"> Why to Join IEEE ? Benefits of IEEE ! </h2>
            <YouTubeEmbed videoId="HrhHdyRXt7I" title="IEEE Membership... Why We Joined" />
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="bg-blue-500 py-5">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
                {stats.map((stat) => (<AnimatedStat key={stat.label} value={stat.value} label={stat.label} colorClass={stat.color} plus={stat.plus} />))}
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}