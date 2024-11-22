// import { TestNav } from "@/components/TextNav";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
