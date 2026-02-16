import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

type ScrambledTextProps = {
    text: string;
    speed?: number;
    duration?: number;
}

export const ScrambledText: React.FC<ScrambledTextProps> = ({ text, speed, duration }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { scrambleText: "" },
      {
        scrambleText: {
          text: text,
          chars: "upperAndLowerCase",
          speed: speed ? speed : 0.4,
        },
        duration: duration ? duration : 2.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      ref={textRef}
      style={{
        fontSize: "1.8rem",
        fontWeight: 600,
        letterSpacing: "0.5px",
      }}
    />
  );
}
