import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Plane, Menu, X, Crown, LogOut, LayoutDashboard, User as UserIcon } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'dashboard' | 'login' | 'register';
  setCurrentView: (view: 'home' | 'dashboard' | 'login' | 'register') => void;
  onOpenPayment?: (plan: 'basic' | 'premium') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView, onOpenPayment }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (view: 'home' | 'dashboard' | 'login' | 'register', hash?: string) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const planBadgeColor =
    user?.plan === 'premium'
      ? 'bg-amber-100 text-amber-800 border-amber-300'
      : user?.plan === 'basic'
      ? 'bg-blue-100 text-blue-800 border-blue-300'
      : 'bg-slate-100 text-slate-700 border-slate-200';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Plane className="w-5 h-5 -rotate-45" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                Japa Update
              </span>
              <span className="block text-[11px] text-emerald-600 font-semibold uppercase tracking-wider -mt-1">
                Global Travel & Visas
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className={`hover:text-emerald-600 transition-colors ${currentView === 'home' ? 'text-emerald-600 font-semibold' : ''}`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('home', 'countries')}
                  className="hover:text-emerald-600 transition-colors"
                >
                  Countries
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('home', 'pricing')}
                  className="hover:text-emerald-600 transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('home', 'about')}
                  className="hover:text-emerald-600 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('home', 'contact')}
                  className="hover:text-emerald-600 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>

            {/* Desktop CTAs */}
            <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => navigateTo('dashboard')}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                      currentView === 'dashboard'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </button>

                  {user?.plan !== 'premium' && (
                    <button
                      onClick={() => {
                        if (onOpenPayment) onOpenPayment('premium');
                        else navigateTo('home', 'pricing');
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs transition-colors"
                    >
                      <Crown className="w-3.5 h-3.5" />
                      Upgrade
                    </button>
                  )}

                  <div className="flex items-center gap-2 pl-2">
                    <div className="text-right hidden lg:block">
                      <div className="text-xs font-semibold text-slate-800 truncate max-w-[120px]">
                        {user?.name}
                      </div>
                      <div className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border inline-block ${planBadgeColor}`}>
                        {user?.plan} plan
                      </div>
                    </div>
                    <button
                      onClick={() => logout()}
                      title="Sign Out"
                      className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigateTo('login')}
                    className="text-sm font-medium text-slate-700 hover:text-emerald-600 px-3 py-2 transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => navigateTo('register')}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm shadow-emerald-600/20 transition-all hover:shadow-md"
                  >
                    Get Access
                  </button>
                </>
              )}
            </div>
          </nav>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={() => navigateTo('dashboard')}
                className="p-2 text-emerald-700 bg-emerald-50 rounded-lg"
              >
                <LayoutDashboard className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-4">
          <ul className="space-y-2 text-base font-medium text-slate-700">
            <li>
              <button
                onClick={() => navigateTo('home')}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('home', 'countries')}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                Countries Database
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('home', 'pricing')}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                Subscription Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('home', 'about')}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('home', 'contact')}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="pt-4 border-t border-slate-100 space-y-2">
            {isAuthenticated ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <UserIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{user?.name}</p>
                    <p className="text-xs text-slate-500">{user?.email}</p>
                    <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded border inline-block mt-0.5 ${planBadgeColor}`}>
                      {user?.plan} plan
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => navigateTo('dashboard')}
                  className="w-full py-2.5 px-4 text-center text-sm font-semibold rounded-lg bg-emerald-600 text-white"
                >
                  Go to Dashboard
                </button>

                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 text-center text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => navigateTo('login')}
                  className="w-full py-2.5 px-3 text-center text-sm font-medium rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Sign In
                </button>
                <button
                  onClick={() => navigateTo('register')}
                  className="w-full py-2.5 px-3 text-center text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
                >
                  Get Access
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
