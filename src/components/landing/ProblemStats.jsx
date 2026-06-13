import React from "react";

const stats = [
  { value: "138M", label: "Disposable vapes discarded annually in the UK" },
  { value: "17%", label: "Currently recycled — the rest ends up in landfill" },
  { value: "500+", label: "Years for a single vape to decompose" },
];

export default function ProblemStats() {
  return (
    <section className="w-full px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {stats.map((s, i) => (
          <article
            key={i}
            className="flex flex-col items-center text-center px-4 py-6 border border-white/10 rounded-2xl bg-white/[0.02]"
          >
            <span className="text-primary text-4xl md:text-5xl font-heading font-bold tracking-tight mb-3">
              {s.value}
            </span>
            <p className="text-white/55 text-xs md:text-sm leading-relaxed max-w-[220px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
              {s.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}