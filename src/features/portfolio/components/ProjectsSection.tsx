"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "@/features/portfolio/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeSlides, setActiveSlides] = useState<Record<number, number>>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-heading", {
        x: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 75%",
          end: "top 40%",
          scrub: 1,
        },
      });

      document.querySelectorAll(".project-card").forEach((card, index) => {
        const direction = index % 2 === 0 ? -80 : 80;

        gsap.from(card, {
          x: direction,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  const updateSlide = (projectId: number, direction: number, totalImages: number) => {
    setActiveSlides((currentSlides) => {
      const currentIndex = currentSlides[projectId] ?? 0;
      const nextIndex = (currentIndex + direction + totalImages) % totalImages;

      return {
        ...currentSlides,
        [projectId]: nextIndex,
      };
    });
  };

  return (
    <section id="projects" ref={projectsRef} className="section projects-section">
      <h2 className="section-heading projects-heading">
        Selected <span className="heading-accent">Work</span>
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            style={{ "--card-accent": project.color } as React.CSSProperties}
          >
            <div className="project-gallery">
              <div className="project-image-wrapper">
                <Image
                  src={project.images[activeSlides[project.id] ?? 0]}
                  alt={`${project.title} preview ${(activeSlides[project.id] ?? 0) + 1}`}
                  fill
                  className="project-image"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="project-image-overlay" />
                <span className="project-number">0{index + 1}</span>
              </div>
              <div className="project-gallery-controls">
                <button
                  type="button"
                  className="project-gallery-button"
                  onClick={() => updateSlide(project.id, -1, project.images.length)}
                  aria-label={`Show previous image for ${project.title}`}
                >
                  Prev
                </button>
                <div className="project-gallery-dots" aria-label={`${project.title} image navigation`}>
                  {project.images.map((_, imageIndex) => (
                    <button
                      key={`${project.id}-${imageIndex}`}
                      type="button"
                      className={`project-gallery-dot ${
                        (activeSlides[project.id] ?? 0) === imageIndex ? "is-active" : ""
                      }`}
                      onClick={() =>
                        setActiveSlides((currentSlides) => ({
                          ...currentSlides,
                          [project.id]: imageIndex,
                        }))
                      }
                      aria-label={`Show image ${imageIndex + 1} for ${project.title}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="project-gallery-button"
                  onClick={() => updateSlide(project.id, 1, project.images.length)}
                  aria-label={`Show next image for ${project.title}`}
                >
                  Next
                </button>
              </div>
            </div>
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
