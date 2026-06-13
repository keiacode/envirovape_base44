import React, { useState } from "react";
import { Mail } from "lucide-react";

export default function NotifySection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="w-full px-6 py-12 md:py-16 flex flex-col items-center text-center">
      {/* Mail icon */}
      <div className="w-12 h-12 rounded-full border-2 border-primary/60 flex items-center justify-center mb-5">
        <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
      </div>

      <h2 className="font-heading text-primary text-xl md:text-2xl font-medium italic mb-2">
        Be the first to know.
      </h2>
      <p className="text-white/60 text-sm md:text-base mb-8">
        Sign up for updates and launch news.
      </p>

      {submitted ? (
        <div className="bg-primary/10 border border-primary/30 rounded-full px-8 py-4">
          <p className="text-primary font-medium text-sm">
            Thanks! We'll keep you posted.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm flex flex-col gap-3"
        >
          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30"
              strokeWidth={1.5}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full pl-12 pr-4 py-3.5 bg-transparent border border-white/20 rounded-full text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-primary/60 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-[0.1em] uppercase rounded-full transition-all duration-300 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            NOTIFY ME
          </button>
        </form>
      )}
    </section>
  );
}