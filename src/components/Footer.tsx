import React from 'react';
import { Plane, Twitter, Facebook, Instagram, Linkedin, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'dashboard' | 'login' | 'register', hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="about" className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Important Disclaimer Banner */}
        <div className="mb-12 p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-start gap-4 text-xs sm:text-sm text-emerald-200">
          <ShieldAlert className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block mb-1">Important Notice &amp; Disclaimer:</strong>
            Japa Update is strictly an informational platform that aggregates verified international travel, work, and study opportunities. <strong>We are NOT a visa agency, immigration consultancy, or employment recruiter.</strong> We do not issue visas, process work permits, or guarantee job placements. We only provide accurate, verified information and official government links to help people navigate global opportunities themselves.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Plane className="w-5 h-5 -rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight">Japa Update</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Providing verified daily information about global travel, work, and study opportunities for Nigerians.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:text-emerald-400 hover:bg-slate-800 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:text-emerald-400 hover:bg-slate-800 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:text-emerald-400 hover:bg-slate-800 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:text-emerald-400 hover:bg-slate-800 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'countries')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Countries Database
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'pricing')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Subscription Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'about')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Platform Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#blog" className="hover:text-emerald-400 transition-colors">
                  Immigration Guides
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-emerald-400 transition-colors">
                  Community &amp; Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Japa Update. Informational platform only — Not a visa agency.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
