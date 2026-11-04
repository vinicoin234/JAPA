import React from 'react';
import { Globe, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onSubscribeClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSubscribeClick, onExploreClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 text-white py-16 lg:py-24">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Verified Immigration & Work Permit Portal for Nigerians</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Your Gateway to Global Travel &amp; Work Opportunities
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Japa Update provides daily, verified information about visa requirements, work permits,
              and study opportunities across all countries for Nigerian citizens.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <button
                onClick={onSubscribeClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Subscribe Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
              >
                <Globe className="w-5 h-5 text-emerald-400" />
                <span>Explore Countries</span>
              </button>
            </div>

            {/* Quick Proof Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Daily Bot Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Official Embassy Portals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>POF &amp; WES Calculators</span>
              </div>
            </div>
          </div>

          {/* Right Hero Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-gradient-to-tr from-slate-800/90 to-slate-900/90 rounded-2xl p-6 border border-slate-700/60 shadow-2xl backdrop-blur-xl">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Global Pathways Live</h4>
                      <p className="text-xs text-slate-400">Updated: Today at 08:30 AM</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Live
                  </span>
                </div>

                {/* Country Highlights Mini Feed */}
                <div className="mt-4 space-y-3">
                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🇨🇦</span>
                      <div>
                        <div className="text-xs font-bold text-white">Canada Express Entry</div>
                        <div className="text-[11px] text-slate-400">Category-Based Selection Open</div>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-400 font-medium">PR Ready</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🇬🇧</span>
                      <div>
                        <div className="text-xs font-bold text-white">UK Skilled Worker</div>
                        <div className="text-[11px] text-slate-400">CoS &amp; Health/Care Direct</div>
                      </div>
                    </div>
                    <span className="text-xs text-blue-400 font-medium">Fast Track</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🇩🇪</span>
                      <div>
                        <div className="text-xs font-bold text-white">Germany Chancenkarte</div>
                        <div className="text-[11px] text-slate-400">Points-Based Job Seeker</div>
                      </div>
                    </div>
                    <span className="text-xs text-amber-400 font-medium">New Quota</span>
                  </div>
                </div>

                {/* Bottom Trust Stat */}
                <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Official Immigration Links</span>
                  </div>
                  <span className="font-mono text-emerald-400 font-bold">100% Verified</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
