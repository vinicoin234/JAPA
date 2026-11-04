import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Plane, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';

interface RegisterPageProps {
  onNavigate: (view: 'home' | 'dashboard' | 'login' | 'register') => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alert, setAlert] = useState<{ type: 'error' | 'success'; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlert(null);

    if (password.length < 6) {
      setAlert({ type: 'error', message: 'Password must be at least 6 characters long.' });
      return;
    }

    if (password !== confirmPassword) {
      setAlert({ type: 'error', message: 'Passwords do not match.' });
      return;
    }

    const res = register(name, email, password);
    if (res.success) {
      setAlert({ type: 'success', message: 'Account created successfully! Preparing dashboard...' });
      setTimeout(() => {
        onNavigate('dashboard');
      }, 500);
    } else {
      setAlert({ type: 'error', message: res.error || 'Failed to create account.' });
    }
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
          <h1 className="text-2xl font-extrabold text-slate-900 pt-2">Create your account</h1>
          <p className="text-sm text-slate-500">Get access to global travel &amp; work opportunities</p>
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

        {/* Register Form */}
        <form id="registerForm" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="regName" className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="regName"
              required
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder:text-slate-400"
            />
          </div>

          <div>
            <label htmlFor="regEmail" className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="regEmail"
              required
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder:text-slate-400"
            />
          </div>

          <div>
            <label htmlFor="regPassword" className="block text-xs font-semibold text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="regPassword"
              required
              minLength={6}
              placeholder="At least 6 characters"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder:text-slate-400"
            />
          </div>

          <div>
            <label htmlFor="regConfirm" className="block text-xs font-semibold text-slate-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="regConfirm"
              required
              minLength={6}
              placeholder="Repeat your password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition-all cursor-pointer"
          >
            Create Account
          </button>
        </form>

        {/* Footer Links */}
        <div className="space-y-2 text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
          <p>
            Already have an account?{' '}
            <button
              onClick={() => onNavigate('login')}
              className="font-bold text-emerald-600 hover:text-emerald-700 hover:underline cursor-pointer"
            >
              Sign in
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
