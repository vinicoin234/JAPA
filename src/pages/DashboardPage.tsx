import React, { useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { CountryGrid } from '../components/CountryGrid';
import { CountryDetailModal } from '../components/CountryDetailModal';
import { COUNTRIES_DATA } from '../data/countriesData';
import { DAILY_UPDATES } from '../data/newsUpdates';
import { TRAVEL_RESOURCES } from '../data/travelResources';
import { Country } from '../types';
import {
  Crown,
  Sparkles,
  CheckCircle2,
  Bookmark,
  Bell,
  TrendingUp,
  FileCheck,
  AlertCircle,
  Search,
  X,
  ExternalLink,
  BookOpen,
  Globe,
  ArrowRight
} from 'lucide-react';

interface DashboardPageProps {
  onOpenPricing: (plan?: 'basic' | 'premium', amount?: number, name?: string) => void;
  onNavigate: (view: 'home' | 'dashboard' | 'login' | 'register') => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onOpenPricing, onNavigate }) => {
  const { user, isAuthenticated, toggleChecklist, isCountrySaved, toggleSaveCountry } = useAuth();
  const [activeTab, setActiveTab] = useState<'all' | 'saved' | 'updates'>('all');
  
  // Dashboard Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState<'all' | 'visas' | 'resources' | 'updates'>('all');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  // Quick suggestion queries
  const popularKeywords = [
    'Canada',
    'UK Skilled Worker',
    'Germany Chancenkarte',
    'Australia',
    'Proof of Funds',
    'IELTS',
    'Passport',
    'WES'
  ];

  // Filtered search results
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      return {
        countries: [],
        resources: [],
        updates: [],
        totalCount: 0
      };
    }

    // Filter Visa Guides
    const matchedCountries = COUNTRIES_DATA.filter(country => {
      const matchName = country.name.toLowerCase().includes(q);
      const matchRegion = country.region.toLowerCase().includes(q);
      const matchHeadline = country.headline.toLowerCase().includes(q);
      const matchVisas = country.visaOptions.some(v =>
        v.title.toLowerCase().includes(q) ||
        v.type.toLowerCase().includes(q) ||
        v.summary.toLowerCase().includes(q)
      );
      const matchJobs = country.inDemandJobs.some(j => j.toLowerCase().includes(q));
      const matchRequirements = country.generalRequirements.some(r => r.toLowerCase().includes(q));
      return matchName || matchRegion || matchHeadline || matchVisas || matchJobs || matchRequirements;
    });

    // Filter Travel Resources
    const matchedResources = TRAVEL_RESOURCES.filter(res => {
      const matchTitle = res.title.toLowerCase().includes(q);
      const matchDesc = res.description.toLowerCase().includes(q);
      const matchScope = res.countryScope.toLowerCase().includes(q);
      const matchCategory = res.category.toLowerCase().includes(q);
      const matchSteps = res.keySteps.some(s => s.toLowerCase().includes(q));
      const matchTips = res.tips.toLowerCase().includes(q);
      return matchTitle || matchDesc || matchScope || matchCategory || matchSteps || matchTips;
    });

    // Filter Updates
    const matchedUpdates = DAILY_UPDATES.filter(up => {
      const matchTitle = up.title.toLowerCase().includes(q);
      const matchCountry = up.country.toLowerCase().includes(q);
      const matchCategory = up.category.toLowerCase().includes(q);
      const matchDetail = up.fullDetail.toLowerCase().includes(q);
      return matchTitle || matchCountry || matchCategory || matchDetail;
    });

    return {
      countries: matchedCountries,
      resources: matchedResources,
      updates: matchedUpdates,
      totalCount: matchedCountries.length + matchedResources.length + matchedUpdates.length
    };
  }, [searchQuery]);

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

  const isSearching = searchQuery.trim().length > 0;

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

        {/* Global Dashboard Search Bar Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/20 shadow-md">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Instant Knowledge Base
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Search Visa Guides &amp; Travel Resources
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Filter requirements by destination country, visa category, testing requirements, or relocation keywords.
            </p>
          </div>

          {/* Search Input */}
          <div className="mt-5 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600" />
            <input
              type="text"
              placeholder="Search by country (e.g. Canada, UK), visa (e.g. Chancenkarte, Express Entry), or resource (e.g. POF, IELTS, WES, Passport)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-300 rounded-2xl text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-3 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200 transition-colors"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Keyword Pills */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Quick suggestions:</span>
            {popularKeywords.map(kw => (
              <button
                key={kw}
                onClick={() => setSearchQuery(kw)}
                className={`px-3 py-1 rounded-lg border font-medium transition-all cursor-pointer ${
                  searchQuery.toLowerCase() === kw.toLowerCase()
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200'
                }`}
              >
                {kw}
              </button>
            ))}
          </div>

          {/* Live Search Filter Tabs */}
          {isSearching && (
            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-600">
                  Found <strong className="text-emerald-700">{searchResults.totalCount}</strong> match{searchResults.totalCount === 1 ? '' : 'es'}:
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSearchCategory('all')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                      searchCategory === 'all'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    All ({searchResults.totalCount})
                  </button>
                  <button
                    onClick={() => setSearchCategory('visas')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                      searchCategory === 'visas'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Visa Guides ({searchResults.countries.length})
                  </button>
                  <button
                    onClick={() => setSearchCategory('resources')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                      searchCategory === 'resources'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Travel Resources ({searchResults.resources.length})
                  </button>
                  <button
                    onClick={() => setSearchCategory('updates')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                      searchCategory === 'updates'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Policy Updates ({searchResults.updates.length})
                  </button>
                </div>
              </div>

              <button
                onClick={() => setSearchQuery('')}
                className="text-xs font-semibold text-red-600 hover:underline"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* SEARCH RESULTS VIEW (Rendered when searching) */}
        {isSearching && (
          <div className="space-y-8 animate-fade-in">
            {searchResults.totalCount === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-300 space-y-3">
                <Search className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="text-lg font-bold text-slate-800">No matching guides or resources found</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  We could not find anything matching "{searchQuery}". Try searching for popular terms like "Canada", "Express Entry", "Germany", "WES", or "Proof of Funds".
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <>
                {/* 1. Visa Guides Matches */}
                {(searchCategory === 'all' || searchCategory === 'visas') && searchResults.countries.length > 0 && (
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <Globe className="w-5 h-5 text-emerald-600" />
                        <h3 className="text-lg font-bold text-slate-900">
                          Matching Country Visa Guides ({searchResults.countries.length})
                        </h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {searchResults.countries.map(country => {
                        const isSaved = isCountrySaved(country.id);

                        return (
                          <div
                            key={country.id}
                            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                          >
                            <div>
                              <div className="flex items-start justify-between">
                                <div className="flex items-center gap-2.5">
                                  <span className="text-3xl p-1 bg-slate-50 rounded-lg border border-slate-100">
                                    {country.flagEmoji}
                                  </span>
                                  <div>
                                    <h4 className="font-bold text-slate-900 text-lg">{country.name}</h4>
                                    <span className="text-xs text-slate-500">{country.region}</span>
                                  </div>
                                </div>
                                <button
                                  onClick={() => toggleSaveCountry(country.id)}
                                  className={`p-1.5 rounded-lg border transition-colors ${
                                    isSaved
                                      ? 'bg-emerald-50 border-emerald-300 text-emerald-600'
                                      : 'border-slate-200 text-slate-400 hover:text-slate-700'
                                  }`}
                                >
                                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-emerald-600' : ''}`} />
                                </button>
                              </div>

                              <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                                {country.headline}
                              </p>

                              <div className="mt-3 pt-3 border-t border-slate-100 text-xs space-y-1.5">
                                <div className="flex justify-between">
                                  <span className="text-slate-500">Processing:</span>
                                  <span className="font-semibold text-slate-800">{country.processingTimeOverview}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-500">Difficulty:</span>
                                  <span className="font-semibold text-emerald-700">{country.difficulty}</span>
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={() => setSelectedCountry(country)}
                              className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                            >
                              <span>View Full Visa Requirements</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 2. Travel Resources Matches */}
                {(searchCategory === 'all' || searchCategory === 'resources') && searchResults.resources.length > 0 && (
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <BookOpen className="w-5 h-5 text-emerald-600" />
                        <h3 className="text-lg font-bold text-slate-900">
                          Matching Travel &amp; Documentation Resources ({searchResults.resources.length})
                        </h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {searchResults.resources.map(res => (
                        <div
                          key={res.id}
                          className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 space-y-3 hover:border-slate-300 transition-all"
                        >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                                  {res.category} • {res.countryScope}
                                </span>
                                <h4 className="text-base font-bold text-slate-900 mt-1">{res.title}</h4>
                              </div>
                              {res.officialUrl && (
                                <a
                                  href={res.officialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-emerald-600 transition-colors"
                                  title="Open official portal"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                            </div>

                            <p className="text-xs text-slate-600 leading-relaxed">
                              {res.description}
                            </p>

                            {/* Key checklist steps */}
                            <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 space-y-2">
                              <span className="text-[11px] font-bold text-slate-800 block">
                                Step-by-Step Procedure:
                              </span>
                              <ul className="space-y-1.5 text-xs text-slate-600">
                                {res.keySteps.map((step, sIdx) => (
                                  <li key={sIdx} className="flex items-start gap-2">
                                    <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                      {sIdx + 1}
                                    </span>
                                    <span>{step}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 text-xs text-amber-900">
                              <strong>Pro-Tip for Nigerians:</strong> {res.tips}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* 3. Immigration Updates Matches */}
                {(searchCategory === 'all' || searchCategory === 'updates') && searchResults.updates.length > 0 && (
                  <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <Bell className="w-5 h-5 text-emerald-400" />
                        <h3 className="text-lg font-bold">
                          Matching Policy Updates &amp; News ({searchResults.updates.length})
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {searchResults.updates.map(up => (
                        <div
                          key={up.id}
                          className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                              {up.country} • {up.category}
                            </span>
                            <span className="text-xs text-slate-400 font-mono">{up.date}</span>
                          </div>
                          <h4 className="text-sm font-bold text-white">{up.title}</h4>
                          <p className="text-xs text-slate-300 leading-relaxed">{up.fullDetail}</p>
                          <div className="text-[11px] text-slate-400 pt-1">
                            Official Source: {up.source}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* DEFAULT DASHBOARD VIEW (Shown when NOT actively searching) */}
        {!isSearching && (
          <>
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

            {/* Travel Resources Quick Hub */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    <span>Travel &amp; Relocation Resource Guides</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Official procedures for Nigerian documentation, verification, and tests.
                  </p>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {TRAVEL_RESOURCES.length} Guides Available
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TRAVEL_RESOURCES.slice(0, 3).map(res => (
                  <div
                    key={res.id}
                    onClick={() => setSearchQuery(res.title.split(' ')[0])}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                        {res.category}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
                      {res.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {res.description}
                    </p>
                  </div>
                ))}
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
          </>
        )}

      </div>

      {/* Country Detail Modal for search results */}
      <CountryDetailModal
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
        onOpenPricing={(plan) => {
          if (plan === 'premium') onOpenPricing('premium', 2500, 'Premium Access');
          else onOpenPricing('basic', 1000, 'Basic Access');
        }}
      />
    </div>
  );
};
