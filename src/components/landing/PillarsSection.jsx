import React from "react";
import { Leaf, Gift, BarChart3, PieChart } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "SUSTAINABILITY",
    desc: "Reducing waste and protecting our planet.",
  },
  {
    icon: Gift,
    title: "CONSUMER REWARDS",
    desc: "Rewarding responsible recycling.",
  },
  {
    icon: BarChart3,
    title: "RETAIL MEDIA",
    desc: "Smarter connections in-store and beyond.",
  },
  {
    icon: PieChart,
    title: "DATA ANALYTICS",
    desc: "Turning insights into real environmental impact.",
  },
];

export default function PillarsSection() {
  return (
    <section className="w-full px-4 py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
        {pillars.map((p, i) => (
          <article
            key={i}
            className="flex flex-col items-center text-center px-3 py-6"
          >
            <div className="w-14 h-14 rounded-full border-2 border-primary/60 flex items-center justify-center mb-4">
              <p.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xs md:text-sm font-semibold tracking-[0.08em] uppercase text-white mb-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
              {p.title}
            </h3>
            <p className="text-white/55 text-xs md:text-sm leading-relaxed" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
              {p.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}