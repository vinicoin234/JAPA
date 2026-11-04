import React, { useState } from 'react';
import { Country } from '../types';
import { useAuth } from '../context/AuthContext';
import {
  X,
  ExternalLink,
  Clock,
  CheckCircle,
  DollarSign,
  Sparkles,
  Lock,
  Bookmark,
  Check
} from 'lucide-react';

interface CountryDetailModalProps {
  country: Country | null;
  onClose: () => void;
  onOpenPricing: (plan?: 'basic' | 'premium') => void;
}

export const CountryDetailModal: React.FC<CountryDetailModalProps> = ({
  country,
  onClose,
  onOpenPricing
}) => {
  const { user, isCountrySaved, toggleSaveCountry, toggleChecklist } = useAuth();
  const [activeTab, setActiveTab] = useState<'visas' | 'checklist' | 'steps' | 'jobs'>('visas');

  if (!country) return null;

  const isSaved = isCountrySaved(country.id);
  const isPremiumUser = user?.plan === 'basic' || user?.plan === 'premium';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-900 text-white flex items-start justify-between relative">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{country.flagEmoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">{country.name}</h3>
                {country.badge && (
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                    {country.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                <span>{country.region}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  {country.processingTimeOverview}
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">{country.difficulty} Difficulty</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleSaveCountry(country.id)}
              className={`p-2 rounded-xl border transition-colors ${
                isSaved
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
              title={isSaved ? 'Saved to your dashboard' : 'Save country'}
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-emerald-400' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2 pt-2 text-sm font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('visas')}
            className={`pb-3 px-3 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'visas'
                ? 'border-emerald-600 text-emerald-700 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Visa Categories ({country.visaOptions.length})
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`pb-3 px-3 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'checklist'
                ? 'border-emerald-600 text-emerald-700 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Document Checklist
          </button>
          <button
            onClick={() => setActiveTab('steps')}
            className={`pb-3 px-3 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'steps'
                ? 'border-emerald-600 text-emerald-700 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Step-by-Step Guide
          </button>
          <button
            onClick={() => setActiveTab('jobs')}
            className={`pb-3 px-3 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'jobs'
                ? 'border-emerald-600 text-emerald-700 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            In-Demand Jobs
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <p className="text-sm text-slate-700 bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
            {country.headline}
          </p>

          {/* TAB: VISAS */}
          {activeTab === 'visas' && (
            <div className="space-y-4">
              {country.visaOptions.map((visa, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 transition-all space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                        {visa.type}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 mt-1">{visa.title}</h4>
                    </div>
                    {visa.pathwayToPR && (
                      <span className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        Pathway to PR / Settlement
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">{visa.summary}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div>
                      <span className="text-slate-500 font-medium">Proof of Funds (POF):</span>
                      <div className="font-bold text-slate-900">{visa.proofOfFundsNGN}</div>
                      <div className="text-[11px] text-slate-500">({visa.proofOfFundsForeign})</div>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">Processing Speed:</span>
                      <div className="font-bold text-slate-900">{visa.processingTime}</div>
                      <div className="text-[11px] text-slate-500">Duration: {visa.duration}</div>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">Education Min:</span>
                      <div className="font-semibold text-slate-900">{visa.minDegree}</div>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">English Language:</span>
                      <div className="font-semibold text-slate-900">{visa.ieltsScore}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900">Mandatory Application Documents</h4>
                <span className="text-xs text-slate-500">Check off items as you gather them</span>
              </div>
              <div className="space-y-2">
                {country.generalRequirements.map((req, idx) => {
                  const checkKey = `${country.id}_req_${idx}`;
                  const isChecked = !!user?.checklistProgress?.[checkKey];

                  return (
                    <div
                      key={idx}
                      onClick={() => toggleChecklist(checkKey)}
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
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-3" />}
                      </div>
                      <span className={`text-sm ${isChecked ? 'line-through opacity-80' : ''}`}>
                        {req}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB: STEPS */}
          {activeTab === 'steps' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900">Application Walkthrough from Nigeria</h4>
              <div className="space-y-3">
                {country.applicationSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{step.replace(/^\d+\.\s*/, '')}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: JOBS */}
          {activeTab === 'jobs' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900">High-Demand Occupations &amp; Living Costs</h4>
              
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center justify-between">
                <div>
                  <div className="text-xs text-blue-600 font-semibold uppercase tracking-wider">Estimated Monthly Living Cost</div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">{country.monthlyCostOfLiving}</div>
                </div>
                <DollarSign className="w-8 h-8 text-blue-500 opacity-60" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {country.inDemandJobs.map((job, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{job}</span>
                  </div>
                ))}
              </div>

              {!isPremiumUser && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-4 mt-4">
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-amber-600 shrink-0" />
                    <div className="text-xs text-amber-900">
                      <strong>Unlock Employer Sponsor Directory:</strong> Subscribe to view 1,000+ verified licensed employers actively hiring Nigerians.
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenPricing('premium');
                    }}
                    className="shrink-0 px-3.5 py-2 text-xs font-bold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    Upgrade Plan
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <a
            href={country.officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
          >
            <span>Visit Official Government Immigration Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenPricing('basic');
              }}
              className="px-4 py-2 text-xs font-bold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs"
            >
              Get Full Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
