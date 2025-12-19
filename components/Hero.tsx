import React from 'react';
import { HERO_COPY } from '../constants';
import Button from './Button';
import Section from './Section';
import { CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onContactClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <Section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-medium mb-6">
            <CheckCircle2 size={14} />
            <span>{HERO_COPY.trust}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {HERO_COPY.h1}
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">
            {HERO_COPY.subheadline}
          </p>

          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            {HERO_COPY.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="text-base px-8 py-4" onClick={onContactClick}>{HERO_COPY.ctaPrimary}</Button>
            <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4" onClick={() => window.location.hash = '#precios'}>
              {HERO_COPY.ctaSecondary}
            </Button>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Prueba gratuita de 14 días. Sin tarjeta de crédito.
          </p>
        </div>

        <div className="relative">
          {/* Abstract representation of the dashboard */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 relative z-10">
            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="h-2 w-20 bg-slate-100 rounded"></div>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">Emp</div>
                    <div>
                      <div className="h-3 w-32 bg-slate-200 rounded mb-2"></div>
                      <div className="h-2 w-20 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded">09:00 - 18:00</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
              <div className="h-8 w-24 bg-blue-600 rounded"></div>
              <div className="h-4 w-32 bg-slate-200 rounded"></div>
            </div>
          </div>

          {/* Decorative background element */}
          <div className="absolute top-10 -right-10 w-full h-full bg-blue-100 rounded-2xl -z-0"></div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;