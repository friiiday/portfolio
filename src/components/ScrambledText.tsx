import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

type ScrambledTextProps = {
  text: string;
  speed?: number;
  duration?: number;
  randomInterval?: boolean;
  chars?: string;
};

export const ScrambledText: React.FC<ScrambledTextProps> = ({
  text,
  speed = 0.4,
  duration = 2.5,
  randomInterval = false,
  chars = "upperAndLowerCase"
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const getRandomDelay = () => {
    return Math.random() * 5000 + 5000;
  };

  const runScrambleTransition = () => {
    if (!textRef.current) return;

    const tl = gsap.timeline();

    // scramble out
    tl.to(textRef.current, {
      scrambleText: {
        text,
        chars,
        speed,
      },
      duration: duration * 0.4,
      ease: "power2.in",
    });

    // scramble in
    tl.to(textRef.current, {
      scrambleText: {
        text,
        chars,
        speed,
      },
      duration: duration * 0.6,
      ease: "power2.out",
    });

    if (randomInterval) {
      const delay = getRandomDelay();
      timeoutRef.current = window.setTimeout(() => {
        runScrambleTransition();
      }, delay);
    }
  };

  useEffect(() => {
    runScrambleTransition();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed, duration, randomInterval]);

  return (
    <span
      ref={textRef}
    />
  );
};
