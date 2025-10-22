import { ActivityCatalogue } from "@/components/ActivityCatalogue";
import { SocietiesSection } from "@/components/SocietiesSection";
import { FeatureCard } from "@/components/FeatureCard";
import { GrantsSection } from "@/components/GrantsSection";
import { MembershipSection } from "@/components/MembershipSection";
import { Lightbulb, Target } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  const missionText = "The IEEE - VBIT SB promotes technical awareness amongst its college students and helps to cultivate the same interest in the other colleges. The Student Branch emphasizes on conducting activities which assist in developing the technical cognition of a student from all kinds of backgrounds. It aims at fostering great leadership skills among the young minds.";
  const visionText = "The IEEE - VBIT SB encourages it’s Student Members to focus on Research and development promoting the establishment of IEEE Student Branches in colleges which do not have an individual SB. It motivates and encourages students to present papers at different technical conferences and participate in the events and competitions conducted under IEEE.";

  return (
    <div>
      <FadeIn>
        <ActivityCatalogue />
      </FadeIn>
      
      <AnimateOnScroll>
        <SocietiesSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <FeatureCard icon={<Lightbulb size={48} className="text-blue-600" />} title="Mission">{missionText}</FeatureCard>
              <FeatureCard icon={<Target size={48} className="text-blue-600" />} title="Vision">{visionText}</FeatureCard>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <GrantsSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <MembershipSection />
      </AnimateOnScroll>
    </div>
  );
}