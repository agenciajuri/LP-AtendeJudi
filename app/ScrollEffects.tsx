"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (reducedMotion) {
      return;
    }

    if (coarsePointer) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      anchors: {
        offset: -80,
        duration: 1,
      },
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
