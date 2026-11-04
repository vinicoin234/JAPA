import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { CountryGrid } from '../components/CountryGrid';
import { DAILY_UPDATES } from '../data/newsUpdates';
import {
  Crown,
  Sparkles,
  CheckCircle2,
  Bookmark,
  Bell,
  TrendingUp,
  FileCheck,
  AlertCircle
} from 'lucide-react';

interface DashboardPageProps {
  onOpenPricing: (plan?: 'basic' | 'premium', amount?: number, name?: string) => void;
  onNavigate: (view: 'home' | 'dashboard' | 'login' | 'register') => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onOpenPricing, onNavigate }) => {
  const { user, isAuthenticated, toggleChecklist } = useAuth();
  const [activeTab, setActiveTab] = useState<'all' | 'saved' | 'updates'>('all');

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-slate-200 shadow-xl text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Sign In Required</h2>
          <p className="text-sm text-slate-600">
            Please sign in to access your Japa Update applicant dashboard and country database.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('login')}
              className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              Sign In Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Pre-application milestones checklist for Nigerian applicants
  const masterChecklist = [
    { id: 'passport', title: 'Nigerian International Passport (12+ months validity)', category: 'Identity' },
    { id: 'ielts', title: 'IELTS / PTE / TOEFL English Language Test Booking', category: 'Language' },
    { id: 'wes', title: 'WES / UK ENIC Degree Credential Evaluation', category: 'Education' },
    { id: 'pof', title: 'Proof of Funds (POF) 6-Month Bank Statement Gathering', category: 'Financials' },
    { id: 'tb', title: 'IOM Tuberculosis Screening & Medicals Clearance', category: 'Health' },
    { id: 'police', title: 'Nigerian Police Character Certificate (Alagbon CID)', category: 'Background' }
  ];

  const completedCount = masterChecklist.filter(item => !!user.checklistProgress?.[item.id]).length;
  const progressPercent = Math.round((completedCount / masterChecklist.length) * 100);

  const planBadgeClass =
    user.plan === 'premium'
      ? 'bg-amber-100 text-amber-900 border-amber-300'
      : user.plan === 'basic'
      ? 'bg-blue-100 text-blue-900 border-blue-300'
      : 'bg-slate-100 text-slate-700 border-slate-300';

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Welcome Card (Matches dashboard.html welcome-card) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
              Relocation Dashboard
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Welcome back, <span className="text-emerald-700">{user.name}</span>
            </h1>
            <p className="text-sm text-slate-500 font-mono">{user.email}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className={`px-4 py-2 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${planBadgeClass}`}>
              <Crown className="w-4 h-4 text-amber-500" />
              <span>{user.plan === 'premium' ? 'Premium Access' : user.plan === 'basic' ? 'Basic Access' : 'Free Plan'}</span>
            </div>

            {user.plan !== 'premium' && (
              <button
                onClick={() => onOpenPricing('premium', 2500, 'Premium Access')}
                className="px-5 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm transition-all hover:scale-105 flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Upgrade Plan</span>
              </button>
            )}
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500">Bookmarked Countries</p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{user.savedCountries.length}</h3>
            </div>
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Bookmark className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500">Checklist Completion</p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{progressPercent}%</h3>
            </div>
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500">Daily Updates Verified</p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{DAILY_UPDATES.length} New</h3>
            </div>
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Master Japa Readiness Checklist */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-600" />
                <span>Your Relocation Readiness Checklist</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Core prerequisites required across Canadian, UK, European, and Australian visa categories.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              {completedCount} of {masterChecklist.length} Items Complete
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-6">
            <div
              className="bg-emerald-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {masterChecklist.map(item => {
              const isChecked = !!user.checklistProgress?.[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                    isChecked
                      ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                      isChecked
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked && <CheckCircle2 className="w-4 h-4 fill-white text-emerald-600" />}
                  </div>
                  <div className="flex-1">
                    <p className={`text-xs sm:text-sm font-semibold ${isChecked ? 'line-through opacity-75' : ''}`}>
                      {item.title}
                    </p>
                    <span className="text-[10px] text-slate-400 font-medium">{item.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Daily Bot Verified News Feed */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Automated Daily Immigration Feed</h3>
                <p className="text-xs text-slate-400">Directly monitored from official government immigration portals</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 hidden sm:inline-block">
              Daily Bot Active
            </span>
          </div>

          <div className="space-y-4">
            {DAILY_UPDATES.map(update => (
              <div
                key={update.id}
                className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-slate-600 transition-colors space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {update.country}
                    </span>
                    <span className="text-xs text-slate-400">{update.category}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">{update.date}</span>
                </div>
                <h4 className="text-sm font-bold text-white">{update.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{update.fullDetail}</p>
                <div className="text-[11px] text-slate-400 pt-1 flex items-center gap-1">
                  <span>Source: {update.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Switcher for Country Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Your Country Database</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Browse verified visa requirements, work permits, and study opportunities
              </p>
            </div>

            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Countries
              </button>
              <button
                onClick={() => setActiveTab('saved')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 ${
                  activeTab === 'saved'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5 text-emerald-600" />
                <span>Saved ({user.savedCountries.length})</span>
              </button>
            </div>
          </div>

          <CountryGrid
            onOpenPricing={(plan) => {
              if (plan === 'premium') onOpenPricing('premium', 2500, 'Premium Access');
              else onOpenPricing('basic', 1000, 'Basic Access');
            }}
            savedOnly={activeTab === 'saved'}
          />
        </div>

      </div>
    </div>
  );
};
