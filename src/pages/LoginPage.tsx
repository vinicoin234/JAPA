import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Plane, ArrowLeft, AlertCircle, CheckCircle, KeyRound } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (view: 'home' | 'dashboard' | 'login' | 'register') => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState<{ type: 'error' | 'success'; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlert(null);

    const res = login(email, password);
    if (res.success) {
      setAlert({ type: 'success', message: 'Signed in successfully! Redirecting...' });
      setTimeout(() => {
        onNavigate('dashboard');
      }, 500);
    } else {
      setAlert({ type: 'error', message: res.error || 'Invalid credentials' });
    }
  };

  const handleUseDemo = () => {
    setEmail('chidi@example.com');
    setPassword('password123');
    setAlert({ type: 'success', message: 'Demo credentials loaded! Click Sign In below.' });
  };

  return (
    <main className="min-h-[85vh] flex items-center justify-center p-4 py-12 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl space-y-6">
        
        {/* Logo and Headings */}
        <div className="text-center space-y-2">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2.5 mx-auto focus:outline-hidden group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <Plane className="w-5 h-5 -rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
              Japa Update
            </span>
          </button>
          <h1 className="text-2xl font-extrabold text-slate-900 pt-2">Welcome back</h1>
          <p className="text-sm text-slate-500">Sign in to access your dashboard</p>
        </div>

        {/* Demo One-Click Prompt */}
        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-emerald-900">
            <KeyRound className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Tester? Fill demo credentials with 1-click.</span>
          </div>
          <button
            type="button"
            onClick={handleUseDemo}
            className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 shrink-0 transition-colors cursor-pointer"
          >
            Fill Demo
          </button>
        </div>

        {/* Alert Notification */}
        {alert && (
          <div
            id="authAlert"
            className={`p-3.5 rounded-xl border text-xs flex items-center gap-2.5 ${
              alert.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-red-50 border-red-200 text-red-800'
            }`}
          >
            {alert.type === 'success' ? (
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            )}
            <span>{alert.message}</span>
          </div>
        )}

        {/* Sign In Form */}
        <form id="loginForm" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="loginEmail" className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="loginEmail"
              required
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder:text-slate-400"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="loginPassword" className="text-xs font-semibold text-slate-700">
                Password
              </label>
            </div>
            <input
              type="password"
              id="loginPassword"
              required
              placeholder="Your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition-all cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        <div className="space-y-2 text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
          <p>
            New here?{' '}
            <button
              onClick={() => onNavigate('register')}
              className="font-bold text-emerald-600 hover:text-emerald-700 hover:underline cursor-pointer"
            >
              Create an account
            </button>
          </p>
          <p>
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to homepage</span>
            </button>
          </p>
        </div>

      </div>
    </main>
  );
};
