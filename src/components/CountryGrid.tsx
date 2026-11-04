import React, { useState, useMemo } from 'react';
import { Country } from '../types';
import { COUNTRIES_DATA } from '../data/countriesData';
import { useAuth } from '../context/AuthContext';
import { CountryDetailModal } from './CountryDetailModal';
import { Search, Clock, ArrowRight, Bookmark, Sparkles } from 'lucide-react';

interface CountryGridProps {
  onOpenPricing: (plan?: 'basic' | 'premium') => void;
  savedOnly?: boolean;
}

export const CountryGrid: React.FC<CountryGridProps> = ({ onOpenPricing, savedOnly = false }) => {
  const { isCountrySaved, toggleSaveCountry } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const regions = ['All', 'North America', 'Europe', 'Oceania', 'Middle East'];

  const filteredCountries = useMemo(() => {
    return COUNTRIES_DATA.filter(country => {
      if (savedOnly && !isCountrySaved(country.id)) {
        return false;
      }

      if (selectedRegion !== 'All' && country.region !== selectedRegion) {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = country.name.toLowerCase().includes(query);
        const matchesHeadline = country.headline.toLowerCase().includes(query);
        const matchesVisa = country.visaOptions.some(v =>
          v.title.toLowerCase().includes(query) || v.type.toLowerCase().includes(query)
        );
        const matchesJobs = country.inDemandJobs.some(j => j.toLowerCase().includes(query));
        return matchesName || matchesHeadline || matchesVisa || matchesJobs;
      }

      return true;
    });
  }, [searchQuery, selectedRegion, savedOnly, isCountrySaved]);

  return (
    <section id="countries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {savedOnly ? 'Your Saved Country Guides' : 'Explore Countries'}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {savedOnly
              ? 'Quick access to the destinations you bookmarked for your relocation roadmap.'
              : 'Comprehensive visa information, work permits, and study opportunities for Nigerians traveling worldwide'}
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          
          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedRegion === region
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search country, visa type, or skill..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Country Grid Cards */}
        {filteredCountries.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-500 text-base">No countries match your search filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('All');
              }}
              className="mt-3 text-xs font-bold text-emerald-600 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCountries.map(country => {
              const isSaved = isCountrySaved(country.id);

              return (
                <div
                  key={country.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Top flag + badges */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl p-1 bg-slate-50 rounded-lg border border-slate-100">
                          {country.flagEmoji}
                        </span>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {country.name}
                          </h3>
                          <span className="text-xs text-slate-500 font-medium">{country.region}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => toggleSaveCountry(country.id)}
                          className={`p-2 rounded-lg border transition-colors ${
                            isSaved
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-600'
                              : 'bg-white border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50'
                          }`}
                          title={isSaved ? 'Remove bookmark' : 'Bookmark country'}
                        >
                          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-emerald-600' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {country.badge && (
                      <div className="mb-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3" />
                          {country.badge}
                        </span>
                      </div>
                    )}

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {country.headline}
                    </p>

                    {/* Quick Specs */}
                    <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          Processing:
                        </span>
                        <span className="font-semibold text-slate-800">{country.processingTimeOverview}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Requirements:</span>
                        <span className="font-semibold text-emerald-700">{country.difficulty}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Key Pathway:</span>
                        <span className="font-semibold text-slate-800 truncate max-w-[170px]" title={country.visaOptions[0]?.type}>
                          {country.visaOptions[0]?.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-medium">
                      {country.visaOptions.length} Visa Options
                    </span>

                    <button
                      onClick={() => setSelectedCountry(country)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:gap-2 transition-all cursor-pointer"
                    >
                      <span>View Requirements</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <CountryDetailModal
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
        onOpenPricing={onOpenPricing}
      />
    </section>
  );
};
