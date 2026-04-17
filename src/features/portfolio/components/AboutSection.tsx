"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { aboutStats } from "@/features/portfolio/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-heading", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
          end: "top 40%",
          scrub: 1,
        },
      });

      gsap.from(".about-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".about-image", {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".about-stat", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="section about-section">
      <h2 className="section-heading about-heading">
        About <span className="heading-accent">Me</span>
      </h2>
      <div className="about-grid">
        <div className="about-image">
          <div className="about-image-frame">
            <Image
              src="/img/2x2.png"
              alt="Profile"
              fill
              sizes="(max-width: 1024px) 400px, 40vw"
            />
            <div className="about-image-overlay" />
          </div>
        </div>
        <div className="about-text">
  <p>
    Over the past <strong>2+ years</strong>, I have been building my web development
    skills through a mix of formal education and self-driven learning. What started
    as curiosity has grown into a genuine passion for crafting experiences that
    users love.
  </p>
  <p>
    I specialize in building <strong>fast, responsive, and visually engaging UIs</strong> using
    HTML, CSS, JavaScript, and modern frontend frameworks like{" "}
    <em>React and Next.js</em>. I take pride in writing interfaces that not only
    look great but also perform smoothly across all devices.
  </p>
  <div className="about-stats">
    {aboutStats.map((stat) => (
      <div key={stat.label} className="about-stat">
        <span className="stat-number">{stat.value}</span>
        <span className="stat-label">{stat.label}</span>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
