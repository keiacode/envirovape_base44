import React from "react";
import HeroSection from "../components/landing/HeroSection";
import ProblemStats from "../components/landing/ProblemStats";
import CountdownTimer from "../components/landing/CountdownTimer";
import PillarsSection from "../components/landing/PillarsSection";
import NotifySection from "../components/landing/NotifySection";
import FooterSection from "../components/landing/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(168,225,12,0.04) 0%, transparent 60%)",
        }}
      />

      {/* Subtle circular geometry */}
      <div
        className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.03]"
        style={{
          border: "1px solid rgba(168,225,12,0.3)",
        }}
      />
      <div
        className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-[0.02]"
        style={{
          border: "1px solid rgba(168,225,12,0.2)",
        }}
      />

      <main className="relative z-10 flex flex-col items-center w-full max-w-screen-lg mx-auto">
        <HeroSection />
        <ProblemStats />
        <CountdownTimer />
        <PillarsSection />
        <NotifySection />
        <FooterSection />
      </main>
    </div>
  );
}