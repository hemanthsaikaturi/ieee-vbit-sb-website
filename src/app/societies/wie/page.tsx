import Image from "next/image";
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { FeatureCard } from "@/components/FeatureCard";
import { CtaBanner } from "@/components/CtaBanner";
import { Target, Atom } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IEEE WIE – AG",
};

export default function WiePage() {
  const missionContent = ( <div className="text-justify space-y-4"> <p> Our goal is to facilitate the recruitment and retention of women in technical disciplines globally. We envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity. </p> <ul className="text-left list-disc list-inside space-y-2"> <li> Recognize the outstanding achievements of women in electrical and electronics engineering through IEEE Awards nominations. </li> <li> Organize receptions at major technical conferences to enhance networking and to promote membership in WIE. </li> <li> Advocate for women in leadership roles in IEEE governance and career advancement for women in the profession. </li> <li> Provide assistance with the formation of new WIE Affinity Groups and support ongoing activities. </li> </ul> <p> Conduct weekly activities exclusively for woman Student members. An event christened “Techno Glee” is organized only for woman student members where a participant is given a random topic and they have to prepare a presentation on it using the given resources in the given time period. </p> </div> );
  const visionText = "WIE - AG, IEEE - VBIT SB, envisions a vibrant community of women innovators for the world of tomorrow. It not only promotes women but also supports them in their academic and professional careers. It is associated with worldwide, multidisciplinary community of engineers, scientists and educators. It throws light on how women are making a lasting impact on the field of Engineering. The student branch was addressed by Madhavi Latha (WIE chair 2009) and Dr.Shailaja from IICT and Dr.  Kanaka Durga (2010).Speakers shared their view on the role of woman as an engineer with the student branch members and motivated them on the same.";
  
  return (
    <div>
      <AnimateOnScroll>
        <section className="bg-white py-5">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"> Women In Engineering - Affinity Group </h1>
              <div className="w-24 h-1.5 bg-blue-600 mb-8"></div>
              <p className="text-gray-700 leading-relaxed text-justify"> IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers, scientists and inspiring girls around the world to follow their academic interests in a career in engineering. </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image src="/placeholders/wie_logo.png" alt="IEEE Women in Engineering Logo" width={400} height={300} objectFit="contain" />
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="bg-slate-50 py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard icon={<Atom size={48} className="text-blue-600" />} title="Mission">{missionContent}</FeatureCard>
              <FeatureCard icon={<Target size={48} className="text-blue-600" />} title="Vision">{visionText}</FeatureCard>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <CtaBanner title={<> Get Your Women In Engineering - affinity <br /> Group Membership Now To Avail Exciting Benefits </>} buttonText="JOIN WIE TODAY" buttonLink="https://wie.ieee.org/membership/" addSpacing={true} />
      </AnimateOnScroll>
    </div>
  );
}