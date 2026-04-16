"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { skills } from "@/features/portfolio/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-heading", {
        x: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 75%",
          end: "top 40%",
          scrub: 1,
        },
      });

      document.querySelectorAll(".skill-bar-fill").forEach((bar) => {
        gsap.from(bar, {
          width: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".skill-item", {
        x: -40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".skills-list",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="section skills-section">
      <h2 className="section-heading skills-heading">
        My <span className="heading-accent">Skills</span>
      </h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
