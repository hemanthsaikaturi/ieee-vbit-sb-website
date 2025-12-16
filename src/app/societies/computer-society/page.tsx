import Image from "next/image";
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { FadeIn } from '@/components/FadeIn';
import { FeatureCard } from "@/components/FeatureCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { CtaBanner } from "@/components/CtaBanner";
import { Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IEEE Computer Society",
};

export default function ComputerSocietyPage() {
  const visionText = "To be the leading provider of technical information, community services and personalized services to the world's computing professionals.";

  return (
    <div>
      <FadeIn>
        <section className="bg-white py-10">
          <div className="container mx-auto px-8 sm:px-12 lg:px-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                IEEE Computer Society
              </h1>
              <div className="w-24 h-1.5 bg-blue-600 mb-8"></div>
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  Computer Society is a leading provider of technical information,
                  community services and personalized services to the world's
                  computing professionals.
                </p>
                <p>
                  The IEEE Computer Society is the world's leading membership
                  organization dedicated to computer science and technology.
                  Serving more than 60,000 members, the IEEE Computer Society is
                  the trusted information, networking and career - development
                  source for a global community of technology leaders that
                  includes researchers, educators, software engineers, IT
                  professionals, employers and students. With nearly 20 student
                  members and 2 professional members, IEEE - VBIT SB, has filed a
                  petition to initiate the computer society student chapter. The
                  acknowledgement has been received from the computer society head
                  quarters.
                </p>
                <p>
                  The motive to initiate the computer society is to make the
                  computer science and information technology students to make
                  computing as their profession. New innovative ideas are being
                  implemented to make students and professionals get a fruitful
                  result.
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/placeholders/cs_logo.webp"
                alt="IEEE Computer Society Logo"
                width={500}
                height={150}
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </section>
      </FadeIn>
      <AnimateOnScroll>
        <section className="bg-slate-50 py-10">
          <div className="container mx-auto px-8 sm:px-12 lg:px-24 max-w-2xl">
            <FeatureCard
              icon={<Target size={48} className="text-blue-600" />}
              title="Vision"
            >
              {visionText}
            </FeatureCard>
          </div>
        </section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <section className="bg-blue-500 py-10">
          <div className="container mx-auto text-center px-8 sm:px-12 lg:px-24">
            <h2 className="text-4xl font-bold text-white mb-10">
              Benefits of IEEE CS Membership
            </h2>
            <YouTubeEmbed
              videoId="oM5mcBtpLeE"
              title="IEEE CS Membership Video"
            />
          </div>
        </section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CtaBanner
          title={
            <>
              Get Your Computer Society Membership Now <br /> To Avail Exciting
              Benefits
            </>
          }
          buttonText="JOIN COMPUTER SOCIETY"
          buttonLink="https://www.computer.org/membership/join"
          addSpacing={true}
        />
      </AnimateOnScroll>
    </div>
  );
}