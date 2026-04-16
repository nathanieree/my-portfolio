"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { contactLinks } from "@/features/portfolio/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-heading", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".contact-content", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={contactRef} className="section contact-section">
      <div className="contact-heading">
        <h2 className="section-heading">
          Let&apos;s <span className="heading-accent">Talk</span>
        </h2>
        <p className="contact-subtitle">Have a project in mind? I&apos;d love to hear about it.</p>
      </div>
      <div className="contact-content">
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} className="contact-link-item">
              <span className="contact-label">{link.label}</span>
              <span className="contact-value">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
