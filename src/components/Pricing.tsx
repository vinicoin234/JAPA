import React from 'react';
import { Check, Crown, Zap, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface PricingProps {
  onSelectPlan: (plan: 'basic' | 'premium', amount: number, name: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const { user } = useAuth();

  return (
    <section id="pricing" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            Clear, Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Subscription Plans
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Get unlimited access to all country visa information and daily verified updates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Basic Access */}
          <div className="bg-slate-800/90 rounded-2xl p-8 border border-slate-700/80 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Basic Access</h3>
                {user?.plan === 'basic' && (
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30 font-semibold">
                    Current Plan
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-1 my-6">
                <span className="text-4xl font-extrabold text-white">₦1,000</span>
                <span className="text-sm text-slate-400 font-medium">/month</span>
              </div>

              <p className="text-xs text-slate-400 mb-6">
                Ideal for individuals starting their research and exploring initial entry requirements.
              </p>

              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Access to visa requirements for 50+ countries</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Weekly updates on policy changes</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Basic work visa information</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Email support</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/80">
              <button
                onClick={() => onSelectPlan('basic', 1000, 'Basic Access')}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                  user?.plan === 'basic'
                    ? 'bg-slate-700 text-slate-300 cursor-default'
                    : 'bg-slate-700 hover:bg-slate-600 text-white hover:shadow-md'
                }`}
              >
                {user?.plan === 'basic' ? 'Current Plan' : 'Subscribe Now'}
              </button>
            </div>
          </div>

          {/* Premium Access (Featured) */}
          <div className="bg-gradient-to-b from-slate-800 to-indigo-950/90 rounded-2xl p-8 border-2 border-emerald-500/80 shadow-2xl flex flex-col justify-between relative transform md:-translate-y-2">
            
            {/* Top Featured Ribbon */}
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-extrabold text-xs px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wide">
              <Crown className="w-3.5 h-3.5" />
              Most Popular
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Premium Access</span>
                  <Crown className="w-4 h-4 text-amber-400" />
                </h3>
                {user?.plan === 'premium' && (
                  <span className="text-xs bg-emerald-500 text-slate-950 px-2.5 py-1 rounded-full font-bold">
                    Active
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-1 my-6">
                <span className="text-4xl font-extrabold text-emerald-400">₦2,500</span>
                <span className="text-sm text-slate-400 font-medium">/month</span>
              </div>

              <p className="text-xs text-slate-400 mb-6">
                Complete unrestricted access to global databases, daily bot updates, and sponsor listings.
              </p>

              <ul className="space-y-3.5 text-sm text-slate-200">
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="font-semibold text-white">Unlimited access to all countries</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span>Daily updates on visa policies</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span>Detailed work &amp; study visa guides</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-emerald-300 font-medium">Job opportunity listings &amp; sponsors</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span>Priority WhatsApp &amp; email support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span>Community forum access &amp; Q&amp;A</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/80 space-y-2">
              <button
                onClick={() => onSelectPlan('premium', 2500, 'Premium Access')}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  user?.plan === 'premium'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30'
                }`}
              >
                <Crown className="w-4 h-4" />
                <span>{user?.plan === 'premium' ? 'Current Plan (Active)' : 'Subscribe Now'}</span>
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <Shield className="w-3 h-3 text-emerald-400" />
                <span>Secured via Paystack • Instant Activation</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
