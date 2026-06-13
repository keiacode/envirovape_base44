import React, { useState, useEffect } from "react";

const TARGET_DATE = new Date("2027-01-01T00:00:00");

function calcRemaining() {
  const now = new Date();
  const diff = TARGET_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNIT_MAP = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function CountdownTimer() {
  const [remaining, setRemaining] = useState(calcRemaining);

  useEffect(() => {
    const interval = setInterval(() => setRemaining(calcRemaining()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-6 py-12 md:py-16 flex flex-col items-center text-center">
      <h2 className="text-primary text-xl md:text-2xl font-medium italic mb-8" style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}>
        Launching January 2027
      </h2>
      <div className="flex items-center gap-3 md:gap-5">
        {UNIT_MAP.map((u, i) => (
          <React.Fragment key={u.key}>
            {i > 0 && (
              <span className="text-white/20 text-2xl md:text-4xl font-heading font-light pb-4">:</span>
            )}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-2">
                <span className="text-white text-2xl md:text-3xl font-heading font-bold tabular-nums">
                  {String(remaining[u.key]).padStart(2, "0")}
                </span>
              </div>
              <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.1em] font-medium" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                {u.label}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}