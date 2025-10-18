import { ActivityCatalogue } from "@/components/ActivityCatalogue";
import { SocietiesSection } from "@/components/SocietiesSection";
import { FeatureCard } from "@/components/FeatureCard";
import { GrantsSection } from "@/components/GrantsSection";
import { MembershipSection } from "@/components/MembershipSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Lightbulb, Target } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll"; // <-- IMPORT THE NEW COMPONENT

export default function Home() {
  const missionText = "The IEEE - VBIT SB promotes technical awareness amongst its members. The Student Branch emphasizes on conducting workshops, guest lectures and seminars by professionals from industries, defense and academic institutions from within and other colleges...";
  const visionText = "The IEEE - VBIT SB encourages the Student Members to focus on their own areas of interest and helps them gain knowledge. IEEE Student Branches in colleges which do not have an individual SB, can also take part in the programs of VBIT SB...";

  return (
    <div>
      {/* Each section is now wrapped with the AnimateOnScroll component */}
      <AnimateOnScroll>
        <ActivityCatalogue />
      </AnimateOnScroll>
      
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