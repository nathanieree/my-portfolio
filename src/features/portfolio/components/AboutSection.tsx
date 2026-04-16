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
            With over <strong>5 years</strong> of experience in web development, I bring ideas to life
            through clean code and thoughtful design. I believe great software is not just functional -
            it should feel <em>alive</em>.
          </p>
          <p>
            My approach combines technical precision with creative exploration. Every project is an
            opportunity to push boundaries while maintaining accessibility and performance standards.
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
