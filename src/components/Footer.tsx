import React from 'react';
import { Plane, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'dashboard' | 'login' | 'register', hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="about" className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Plane className="w-5 h-5 -rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight">Japa Update</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Providing Nigerians with comprehensive, up-to-date information about global travel, work, and study opportunities.
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
                  Countries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'pricing')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Pricing
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
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#blog" className="hover:text-emerald-400 transition-colors">
                  Blog &amp; Immigration Guides
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-emerald-400 transition-colors">
                  Applicant Support
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'contact')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact Helpdesk
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div id="contact">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">info@japaupdate.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">+234 800 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Japa Update. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Official Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
