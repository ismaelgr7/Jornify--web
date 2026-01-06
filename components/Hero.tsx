import React from 'react';
import { HERO_COPY, APP_URL } from '../constants';
import Button from './Button';
import Section from './Section';
import { CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onContactClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <Section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
      {/* SaaS Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.4] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-slate-800 text-[10px] font-black uppercase tracking-widest mb-10">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span>{HERO_COPY.trust}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
            {HERO_COPY.h1.split(' ').map((word, i) => (
              word.toLowerCase() === 'hostelería' || word.toLowerCase() === 'pymes'
                ? <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> {word}</span>
                : ' ' + word
            ))}
          </h1>

          <p className="text-xl md:text-2xl font-bold text-slate-800 mb-6 leading-tight">
            {HERO_COPY.subheadline}
          </p>

          <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
            {HERO_COPY.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.open(APP_URL, '_blank')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2 group"
            >
              {HERO_COPY.ctaPrimary}
              <CheckCircle2 size={20} className="group-hover:scale-110 transition-transform" />
            </button>
            <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-5 border-2 rounded-2xl" onClick={() => window.location.hash = '#precios'}>
              {HERO_COPY.ctaSecondary}
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`, backgroundSize: 'cover' }}></div>
              ))}
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              +200 empresas ya fichan hoy
            </p>
          </div>
        </div>

        <div className="relative lg:scale-110">
          {/* Dashboard Representation */}
          <div className="bg-slate-900 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border border-white/5 p-8 relative z-10 backdrop-blur-3xl">
            <div className="flex items-center justify-between mb-10">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
              </div>
              <div className="px-3 py-1 bg-white/5 text-[10px] font-black text-slate-400 rounded-full border border-white/5 uppercase tracking-widest">
                Panel Administrador
              </div>
            </div>

            <div className="space-y-5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xs shadow-lg shadow-blue-500/20">
                      EMP
                    </div>
                    <div>
                      <div className="h-2.5 w-32 bg-white/20 rounded-full mb-2.5"></div>
                      <div className="h-2 w-20 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-black rounded-lg border border-blue-500/20">
                      FICHAJE ACTIVO
                    </div>
                    <div className="h-2 w-16 bg-white/5 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 flex justify-between items-center">
              <div className="h-10 w-32 bg-white text-slate-900 rounded-xl font-black text-xs flex items-center justify-center">
                DESCARGAR PDF
              </div>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>)}
              </div>
            </div>
          </div>

          {/* Glowing accents */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/30 rounded-full blur-[100px] z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-600/20 rounded-full blur-[80px] z-0"></div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;