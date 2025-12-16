import Image from "next/image";
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { FadeIn } from '@/components/FadeIn';
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { CtaBanner } from "@/components/CtaBanner";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IEEE Communications Society",
};

const objectives = [
  "To get all the students onto a common platform to share, view and express their thought and ideas.",
  "To create awareness and acquire knowledge on various issues related to communication.",
  "Creating a platform for them to interact with various people around the world and improvise their networking and interpersonal skills.",
  "To make the students truly understand the seamless integration and relation between Electronics and Communications.",
  "Acquire knowledge on current affairs and technical issues.",
  "Enlightening their minds with a series of guest lectures and workshops from eminent personalities.",
];
const ObjectiveItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-4">
    <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
    <p className="text-white text-lg">{text}</p>
  </div>
);

export default function CommunicationsSocietyPage() {
  return (
    <div>
      <FadeIn>
        <section className="bg-white py-10">
          <div className="container mx-auto px-8 sm:px-12 lg:px-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                Communications Society
              </h1>
              <div className="w-24 h-1.5 bg-blue-600 mb-8"></div>
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  Communications society was established in 1952. With the
                  formation of IRE’s (the Institute of Radio Engineers)
                  Professional Group on Communications Systems (PGCS),
                  Communications Society under IEEE has evolved into a diversified
                  group of global industry professionals with a common objective
                  in advancing all communications technologies.
                </p>
                <p>
                  Communications Society (ComSoc) under IEEE - VBIT SB was,
                  initiated in the year 2012. The main motto of establishing
                  Communications Society under IEEE - VBIT SB was to make a
                  developing engineer understand the seamless connection between
                  Electronics and Communication. It also aims in improvisation of
                  innovative thinking of a student regarding practical working and
                  diverse applications in the practical world.
                </p>
                <p>
                  Communications Society under IEEE - VBIT SB, aims to prepare an
                  engineer in all possible ways to make him/her field ready. In
                  the previous years, Communications Society under IEEE - VBIT SB
                  has organized few events that were not only knowledgeable but
                  were also fruitful to the engineers of VBIT and to the students
                  of many other colleges. With a good membership base of around 20
                  members, including the Executive Committee and the volunteers,
                  ComSoc IEEE - VBIT SB, has made a profound impact on many
                  engineers over the years with unique and innovative events.
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/placeholders/comsoc_logo.webp"
                alt="IEEE Communications Society Logo"
                width={500}
                height={200}
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </section>
      </FadeIn>
      <AnimateOnScroll>
        <section className="bg-blue-500 py-10">
          <div className="container mx-auto text-center px-8 sm:px-12 lg:px-24">
            <h2 className="text-4xl font-bold text-white mb-10">
              What People say about ComSoc!
            </h2>
            <YouTubeEmbed
              videoId="9XbGqrVefJk"
              title="What members say about IEEE Communications Society"
            />
          </div>
        </section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <section className="bg-blue-500 pb-10">
          <div className="container mx-auto px-8 sm:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
              {objectives.map((item) => (
                <ObjectiveItem key={item} text={item} />
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CtaBanner
          title={
            <>
              Get Your Communications Society <br /> Membership Now To Avail
              Exciting Benefits
            </>
          }
          buttonText="JOIN COMSOC TODAY"
          buttonLink="https://www.comsoc.org/membership"
          addSpacing={true}
        />
      </AnimateOnScroll>
    </div>
  );
}