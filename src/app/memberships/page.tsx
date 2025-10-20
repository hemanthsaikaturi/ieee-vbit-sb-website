import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { ImageCarousel } from "@/components/ImageCarousel";
import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Memberships",
};

const carouselImages = Array.from(
  { length: 8 },
  (_, i) => `/placeholders/carousel/slide-${i + 1}.jpg`
);

const resourceLinks = [
  { title: "IEEE TV", href: "https://ieeetv.ieee.org/" },
  { title: "IEEE Xplore", href: "https://ieeexplore.ieee.org/" },
  { title: "IEEE Spectrum", href: "https://spectrum.ieee.org/" },
];

export default function MembershipsPage() {
  return (
    <div>
      <FadeIn>
        <section className="bg-blue-600 text-white py-10">
          <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Memberships</h1>
            <p className="text-lg text-blue-100 leading-relaxed text-justify">
              IEEE membership offers access to technical innovation, cutting-edge
              information, networking opportunities and exclusive member benefits.
              Members support IEEE's mission to advance technology for humanity
              and the profession, while memberships build a platform to introduce
              careers in technology to students around the world.
            </p>
          </div>
        </section>
      </FadeIn>

      <AnimateOnScroll>
        <section className="py-10 pattern-background-light">
          <div className="container mx-auto px-8 sm:px-12 lg:px-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Community
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Join the world's largest technical professional association via
                  an IEEE and/or IEEE society memberships. Through these
                  memberships, you can stay current in your chosen technology
                  profession, keep in touch with your peers and invest in your
                  career advancement. Join IEEE or an IEEE society.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Technically update
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Technology professionals and engineers will always be
                  continually challenged to keep abreast of new and changing
                  technology. In addition to your studies, IEEE has the means for
                  you to remain technically current through competitions and
                  award-winning publications.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Resource & Recognition
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Being a student is the first job of your professional career.
                  Let IEEE help with valuable scholarship and award program
                  opportunities.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
                Benefits at a Glance
              </h2>
              <div className="max-w-3xl mx-auto">
                <ImageCarousel slides={carouselImages} />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="bg-white py-10">
          <div className="container mx-auto text-center px-8 sm:px-12 lg:px-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">
              Discover the Benefits of IEEE Membership
            </h2>
            <YouTubeEmbed
              videoId="HrhHdyRXt7I"
              title="IEEE Membership... Why We Joined"
            />
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="bg-white pb-10">
          <div className="container mx-auto px-8 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {resourceLinks.map((link) => (
                <div
                  key={link.title}
                  className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500"></div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 pt-4">
                    {link.title}
                  </h3>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-500 transition-colors"
                  >
                    VISIT NOW
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}