import React from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";

const CORNER_LEAVES = "https://media.base44.com/images/public/6a2d1ecc39e663d69dfc1da1/e66244794_generated_4375a645.png";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

export default function FooterSection() {
  return (
    <footer className="relative w-full px-6 pb-8 pt-4 flex flex-col items-center overflow-hidden">
      {/* Social icons */}
      <div className="flex items-center gap-6 mb-6">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            aria-label={s.label}
            className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
          >
            <s.icon className="w-5 h-5" strokeWidth={1.5} />
          </a>
        ))}
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 opacity-60 pointer-events-none">
        <img
          src={CORNER_LEAVES}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </footer>
  );
}