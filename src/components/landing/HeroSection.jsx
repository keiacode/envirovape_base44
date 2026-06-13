import React from "react";

const LOGO_IMG = "https://media.base44.com/images/public/6a2d1ecc39e663d69dfc1da1/ec272310d_image.png";
const LEAVES_IMG = "https://media.base44.com/images/public/6a2d1ecc39e663d69dfc1da1/41ee1ce5a_generated_d142f848.png";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center text-center px-6 pt-10 pb-0 overflow-hidden">
      {/* Logo with tagline */}
      <div className="w-72 md:w-96 mb-6">
        <img
          src={LOGO_IMG}
          alt="EnviroVape logo"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Coming Soon */}
      <h1 className="font-display font-bold tracking-[0.12em] uppercase leading-none mb-6">
        <span
          className="block text-5xl md:text-7xl lg:text-8xl"
          style={{
            background: "linear-gradient(180deg, #A8E10C 0%, #5A7A2E 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          COMING
        </span>
        <span
          className="block text-5xl md:text-7xl lg:text-8xl mt-1"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SOON
        </span>
      </h1>

      {/* Description */}
      <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-sm md:max-w-md mx-auto mb-8">
        We're building the UK's first
        <br />
        smart vape recycling network.
        <br />
        Sustainability. Rewards. Retail Media.
        <br />
        Data. All working together for a
        <br />
        <span className="text-primary italic">cleaner future.</span>
      </p>

      {/* Leaves Image */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto -mb-8">
        <img
          src={LEAVES_IMG}
          alt="Glowing green leaves with particle effects"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}