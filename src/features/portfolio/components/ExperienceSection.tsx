"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { experiences } from "@/features/portfolio/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-heading", {
        x: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 75%",
          end: "top 40%",
          scrub: 1,
        },
      });

      gsap.from(".experience-item", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".experience-list",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={experienceRef} className="section experience-section">
      <h2 className="section-heading experience-heading">
        Work <span className="heading-accent">Experience</span>
      </h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={`${experience.company}-${experience.period}`} className="experience-item">
            <div className="experience-timeline">
              <div className="timeline-dot" />
              {index < experiences.length - 1 && <div className="timeline-line" />}
            </div>
            <div className="experience-content">
              <span className="experience-period">{experience.period}</span>
              <h3 className="experience-role">{experience.role}</h3>
              <span className="experience-company">{experience.company}</span>
              <p className="experience-description">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
