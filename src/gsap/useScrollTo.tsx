
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function useScrollTo() {
  return (target: string | Element, offset = 0, duration = 1) => {
    gsap.to(window, {
      duration,
      scrollTo: { y: target, offsetY: offset },
      ease: "power2.out",
    });
  };
}
