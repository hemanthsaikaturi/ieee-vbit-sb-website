import Image from "next/image";
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { FeatureCard } from "@/components/FeatureCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { CtaBanner } from "@/components/CtaBanner";
import { BenefitCard } from "@/components/BenefitCard";
import { Target, Lightbulb, Globe, Atom } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IEEE Power & Energy Society",
};

export default function PesPage() {
  const visionText = "To be the leading provider of scientific and engineering information on electric power and energy for the betterment of society and the preferred professional development source for our members - Approved by the IEEE PES Governing Board, 17 July 2003 With over 24,000 members around the globe representing every facet of the electric power and energy industry. PES is at the forefront of the rapidly changing technological advancements that impact everyone’s future. The vision of PES Chapter IEEE - VBIT SB, is to motivate and encourage students to present papers at different technical conferences and participate in the events and competitions conducted by IEEE and contribute to the society by adopting local school and involvement in charitable events.";

  return (
    <div>
      <AnimateOnScroll>
        <section className="bg-white py-10">
          <div className="container mx-auto px-8 sm:px-12 lg:px-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                Power and Energy Society
              </h1>
              <div className="w-24 h-1.5 bg-blue-600 mb-8"></div>
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                 The Power & Energy Society (PES) provides the world's largest forum for sharing the latest in technological developments in the electric power industry, for developing standards that guide the development and construction of equipment and systems, for educating members of the industry and the general public. Members of the Power & Energy Society are leaders in this field and their employers derive substantial benefits from involvement with this unique and outstanding association.
                </p>
                <p><b>LEARN</b>, about current research and applications of recent technologies such as wind, photovoltaics, fuel cells, distributed generation, flexible AC transmission, energy storage, Smart Grids and more.</p>
                <p><b>STAY INFORMED</b>, about the latest developments in traditional technologies and the new opportunities created as today’s technological and financial situations impact the power and energy industry.</p>
                <p><b>NETWORK</b>, with experienced professionals in all aspects of the industry be that local, regional or international meetings. Save big on conference registration fees, some are even free!</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image src="/placeholders/Pes_logo.png" alt="IEEE Power & Energy Society Logo" width={400} height={300} objectFit="contain" />
            </div>
          </div>
        </section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <section className="bg-slate-50 py-10">
          <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-4xl">
            <FeatureCard icon={<Target size={48} className="text-blue-600" />} title="Vision">{visionText}</FeatureCard>
          </div>
        </section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <section className="bg-blue-500 py-10">
          <div className="container mx-auto text-center px-8 sm:px-12 lg:px-16">
            <h2 className="text-4xl font-bold text-white mb-10">
              What do I gain being a PES member
            </h2>
            <YouTubeEmbed videoId="BrxdLNDxWOw" title="Benefits Of PES Membership" />
          </div>
        </section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <section className="bg-white py-10">
          <div className="container mx-auto px-8 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <BenefitCard icon={<Lightbulb size={40} />}>Being a PES student member, gain access to the digital library of IEEE Xplore.</BenefitCard>
              <BenefitCard icon={<Globe size={40} />}>Build a network into the field of your preference on the professional front.</BenefitCard>
              <BenefitCard icon={<Atom size={40} />}>Ultimately, learn new things setting a PES member apart from the others</BenefitCard>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CtaBanner title={<>Get Your Power and Energy Society <br /> Membership Now To Avail Exciting Benefits</>} buttonText="JOIN PES TODAY" buttonLink="https://www.ieee-pes.org/join" addSpacing={true} />
      </AnimateOnScroll>
    </div>
  );
}