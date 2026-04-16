"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { scrollToSection } from "@/lib/scroll";
import AboutSection from "@/features/portfolio/components/AboutSection";
import ContactSection from "@/features/portfolio/components/ContactSection";
import ExperienceSection from "@/features/portfolio/components/ExperienceSection";
import Footer from "@/features/portfolio/components/Footer";
import HeroSection from "@/features/portfolio/components/HeroSection";
import Navbar from "@/features/portfolio/components/Navbar";
import ProjectsSection from "@/features/portfolio/components/ProjectsSection";
import SkillsSection from "@/features/portfolio/components/SkillsSection";

export default function PortfolioPage() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      if (!cursorRef.current || !cursorDotRef.current) {
        return;
      }

      gsap.to(cursorRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(cursorDotRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.1,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <main className="portfolio-root">
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorDotRef} className="custom-cursor-dot" />

      <Navbar onNavigate={scrollToSection} />
      <HeroSection onPrimaryAction={scrollToSection} />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
