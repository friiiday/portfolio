import React, { useEffect, useRef, useState } from "react";
import "./SkillRadar.css";

type Skill = {
  label: string;
  level: number;
  description: string;
};

const skills: Skill[] = [
  { label: "Architecture", level: 10, description: "tiefes Systemdenken" },
  { label: "Frontend Engineering", level: 9, description: "React/TS, komplexe UI-Logik" },
  { label: "Backend & APIs", level: 8, description: "robuste Services, Tooling" },
  { label: "Tooling & Automation", level: 10, description: "CI/CD, DX" },
  { label: "Design & UX", level: 7, description: "klare, reduzierte Interfaces" },
  { label: "npm Packages", level: 9, description: "modulare Libraries, Feature Flags" },
];

export const SkillRadar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [, setIsVisible] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);

          setTimeout(() => {
            setStartAnimation(true);
          }, 500);

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="skillRadar">
      <h2>Skill Radar</h2>

      <div className="skillList">
        {skills.map((skill, index) => {
          const randomJitter = Math.floor(Math.random() * 140) + 80;
          const targetWidth = `${(skill.level / 10) * 100}%`;

          return (
            <div key={skill.label} className="skillItem">
              <div className="skillHeader">
                <span>{skill.label}</span>
                <span className="skillDescription">{skill.description}</span>
              </div>

              <div className="skillBarBackground">
                <div
                  className={`skillBarFill ${startAnimation ? "animate" : ""}`}
                  style={{
                    "--targetWidth": targetWidth,
                    animationDelay: `${index * 120 + randomJitter}ms`,
                  } as React.CSSProperties}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
