"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface NavbarProps {
  onNavigate: (id: string) => void;
}

const navigationItems = ["about", "projects", "experience", "skills", "contact"];

export default function Navbar({ onNavigate }: NavbarProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        delay: 0.3,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="nav">
      <div className="nav-inner">
        <div className="nav-item nav-logo" onClick={() => onNavigate("hero")}>
          Nath Dev<span className="accent-dot">.</span>
        </div>
        <div className="nav-links">
          {navigationItems.map((item) => (
            <button key={item} className="nav-item nav-link" onClick={() => onNavigate(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
