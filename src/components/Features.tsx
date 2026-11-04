import React from 'react';
import { RefreshCw, Globe, Briefcase, ShieldCheck, Smartphone, Users } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: RefreshCw,
      title: 'Daily Updates',
      description:
        'Our automated bot fetches the latest visa requirements, policy changes, and opportunities daily to ensure you always have current information.'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description:
        'From major destinations like Canada and the UK to smaller countries, we provide information on visa processes for all nations worldwide.'
    },
    {
      icon: Briefcase,
      title: 'Work & Study Visas',
      description:
        'Detailed guides on work permits, student visas, and job opportunities in various countries tailored for Nigerian professionals.'
    },
    {
      icon: ShieldCheck,
      title: 'Verified Information',
      description:
        'All content is sourced from official government websites and verified immigration sources to ensure accuracy.'
    },
    {
      icon: Smartphone,
      title: 'Access Anywhere',
      description:
        'Once subscribed, you get 24/7 access to our database from any device, wherever you are in the world.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description:
        'Connect with other Nigerian travelers and expatriates through our community forums and support channels.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Japa Update?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Comprehensive, up-to-date information to help you navigate international travel and opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
