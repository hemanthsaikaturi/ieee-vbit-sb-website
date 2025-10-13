import Image from "next/image";
import type { Metadata } from "next";

// Set the metadata for the page title
export const metadata: Metadata = {
  title: "About IEEE R10",
};

export default function AboutR10Page() {
  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              IEEE R10
            </h1>
            <div className="w-24 h-1.5 bg-blue-600 mb-8"></div>
            <p className="text-gray-700 leading-relaxed text-justify">
              The IEEE Region 10, also referred as the Asia Pacific Region,
              comprises of 57- 63 Sections, 6-7 Councils, 17-35 Sub-sections,
              515 Chapters, 60 Affinity Groups, and 958-1600+ Student Branches.
              It covers a geographical area stretching from South Korea and
              Japan in the north - east to New Zealand in the south, and
              Pakistan in the west. With a membership of 107,154-213,619, it is
              one of the largest regions in IEEE. For more info, visit the
              website.
            </p>
            <a
              href="https://www.ieeer10.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md text-base hover:bg-blue-500 transition-all duration-300 mt-8"
            >
              Visit the Website
            </a>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/placeholders/ieee_region10_logo.png"
              alt="IEEE Region 10 Logo"
              width={500}
              height={300}
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Goals and Objectives
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            The primary objective of the R10 InfoMap is to provide IEEE members,
            leaders and volunteers with an interactive platform to find, reach
            and connect with each other over a visual medium. Additionally, the
            map provides users with an illustration of where each major meet –
            up or project in the Region is taking place thereby, enabling
            members to gain a summarized understanding of the
            opportunities/events available at their disposal throughout the
            year.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            IEEE Region 10 Congress
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            With its members in 165 countries around the globe, the Region 10
            Congress gathers members of the Asia-Pacific Region together every
            two years to network, learn about the latest IEEE programs, and
            share strategies for enhancing membership. This is the biggest IEEE
            event for the students, Young Professionals and Women in Engineering
            (WIE) in the region with ample opportunities to explore ideas,
            develop skills and discuss issues in their profession. The Region 10
            Congress was first held in 2002 in Singapore, attracting 57
            delegates. The event has since been held in places like Hong Kong
            (2004), Beijing (2005), Chennai (2007), Singapore (2009), New
            Zealand (2011), Hyderabad (2013), Sri Lanka (2015), Bangalore, India
            (2016), Bali-Indonesia (2018), Virtual (2020), Jeju-South Korea (2022), Tokyo-Japan (2024), Kota Kinabalu-Malaysia(2025).
          </p>
        </div>
      </section>
    </div>
  );
}