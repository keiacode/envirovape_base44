import React, { useState, useEffect, useRef } from "react";
import { Recycle, Droplets, Battery, Award } from "lucide-react";

const metrics = [
  {
    icon: Recycle,
    value: 84732,
    label: "Vapes Recycled",
    suffix: "",
  },
  {
    icon: Droplets,
    value: 1826,
    label: "Litres of Toxic Waste Prevented",
    suffix: "L",
  },
  {
    icon: Battery,
    value: 12491,
    label: "Batteries Recovered",
    suffix: "",
  },
  {
    icon: Award,
    value: 5638,
    label: "Rewards Claimed",
    suffix: "",
  },
];

function AnimatedNumber({ target, suffix = "" }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 2000;
    const start = performance.now();
    let raf;
    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [visible, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactCounter() {
  return (
    <section className="w-full px-4 py-12 md:py-20">
      <h2 className="font-display font-bold text-2xl md:text-3xl text-white text-center mb-10 tracking-tight">
        Our{" "}
        <span className="text-primary">Impact</span>{" "}
        So Far
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {metrics.map((m, i) => (
          <article
            key={i}
            className="flex flex-col items-center text-center bg-white/[0.03] border border-white/[0.06] rounded-2xl px-4 py-8"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <m.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <div className="font-display font-bold text-3xl md:text-4xl text-white mb-1">
              <AnimatedNumber target={m.value} suffix={m.suffix} />
            </div>
            <p className="text-white/50 text-xs md:text-sm leading-snug">
              {m.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}