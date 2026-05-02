"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  text: string;
  className?: string;
};

export default function ThreeDText({ text, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const winMid = window.innerHeight / 2;
        const diff = (winMid - mid) / winMid; // -1..1
        const rotateX = diff * 8; // degrees
        const translateY = diff * -18; // px
        el.style.transform = `perspective(800px) translateY(${translateY}px) rotateX(${rotateX}deg)`;
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`three-d-wrap ${className ?? ""}`}>
      <span className="three-d-text">{text}</span>
    </div>
  );
}
