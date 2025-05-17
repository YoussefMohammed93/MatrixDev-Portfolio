import BackToTop from "@/components/back-to-top";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import SkillMarqueeWrapper from "@/components/SkillMarqueeWrapper";
import ProjectsSectionWrapper from "@/components/projects-section-wrapper";
import TimelineSectionWrapper from "@/components/timeline/TimelineSectionWrapper";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSectionWrapper />
      <TimelineSectionWrapper />
      <SkillMarqueeWrapper />
      <ContactSection />
      <BackToTop />
    </main>
  );
}
