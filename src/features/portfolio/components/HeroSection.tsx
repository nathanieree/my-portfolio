"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onPrimaryAction: (id: string) => void;
}

export default function HeroSection({ onPrimaryAction }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline();

      heroTimeline
        .from(".hero-greeting", { y: 60, opacity: 0, duration: 1, ease: "power3.out" })
        .from(".hero-name", { y: 80, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=0.6")
        .from(".hero-title", { y: 60, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.7")
        .from(".hero-description", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .from(".hero-cta", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".hero-scroll-indicator", { opacity: 0, duration: 1 }, "-=0.2");

      gsap.to(".hero-content", {
        y: -150,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-bg-text", {
        x: -200,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="hero-section">
      <div className="hero-bg-text">DEVELOPER</div>
      <div className="hero-noise" />
      <div className="hero-content">
        <p className="hero-greeting">Hello, I&apos;m</p>
        <h1 className="hero-name">
          Nathaniel Ree
          <br />
          <span className="hero-name-accent">Manzano</span>
        </h1>
        <p className="hero-title">
          Web Developer <span className="accent-dot">&</span> Designer
        </p>
        <p className="hero-description">
          I craft immersive digital experiences that live at the intersection of design and technology.
          Specializing in performant, animated, and accessible web applications.
        </p>
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => onPrimaryAction("projects")}>
            View My Work
          </button>
          <button className="btn-secondary" onClick={() => onPrimaryAction("contact")}>
            Get In Touch
          </button>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
