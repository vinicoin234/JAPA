import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { CountryGrid } from '../components/CountryGrid';
import { Pricing } from '../components/Pricing';
import { DAILY_UPDATES } from '../data/newsUpdates';
import { Bell, ArrowRight, MessageCircle } from 'lucide-react';

interface HomePageProps {
  onOpenPricing: (plan?: 'basic' | 'premium', amount?: number, name?: string) => void;
  onNavigate: (view: 'home' | 'dashboard' | 'login' | 'register') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenPricing, onNavigate }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero
        onSubscribeClick={() => scrollTo('pricing')}
        onExploreClick={() => scrollTo('countries')}
      />

      {/* Daily Bot Live Ticker */}
      <section className="bg-emerald-900 text-white py-3.5 px-4 border-y border-emerald-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-800 text-emerald-200 font-bold uppercase tracking-wider shrink-0 text-[10px]">
              <Bell className="w-3 h-3 text-emerald-400" />
              Bot Live Feed
            </span>
            <span className="font-semibold text-emerald-100 truncate">
              {DAILY_UPDATES[0]?.country}: {DAILY_UPDATES[0]?.title}
            </span>
          </div>
          <button
            onClick={() => onNavigate('dashboard')}
            className="text-emerald-300 hover:text-white font-semibold flex items-center gap-1 shrink-0 transition-colors"
          >
            <span>View All Daily Updates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Why Choose Japa Update */}
      <Features />

      {/* Countries Section */}
      <CountryGrid
        onOpenPricing={(plan) => {
          if (plan === 'premium') onOpenPricing('premium', 2500, 'Premium Access');
          else onOpenPricing('basic', 1000, 'Basic Access');
        }}
      />

      {/* Pricing Section */}
      <Pricing
        onSelectPlan={(plan, amount, name) => onOpenPricing(plan, amount, name)}
      />

      {/* Community & FAQ Teaser */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase">
                <MessageCircle className="w-3.5 h-3.5" />
                Nigerian Expatriate Network
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Have questions regarding visa requirements or proof of funds?
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Connect with thousands of fellow Nigerian professionals who have successfully relocated to Canada, the UK, Germany, and Australia. Share verified visa application timelines, bank statements advice, and housing recommendations.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onOpenPricing('premium', 2500, 'Premium Access')}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 shadow-md transition-colors text-center cursor-pointer"
              >
                Join Community Forum
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-center cursor-pointer"
              >
                Contact Helpdesk
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
