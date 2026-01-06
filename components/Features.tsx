import React from 'react';
import { FEATURES } from '../constants';
import Section from './Section';
import { ShieldCheck, Smartphone, Monitor } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={32} className="text-blue-600" />,
  Smartphone: <Smartphone size={32} className="text-blue-600" />,
  Monitor: <Monitor size={32} className="text-blue-600" />
};

const Features: React.FC = () => {
  return (
    <Section id="ventajas" className="bg-white py-24 relative overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">El Control de Jornada que necesita tu empresa</h2>
        <p className="text-xl text-slate-500 font-medium">
          Hemos eliminado lo superfluo para centrarnos en lo obligatorio y útil.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((feature, index) => (
          <div key={index} className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
            <div className="mb-8 p-5 bg-slate-50 rounded-2xl inline-block shadow-inner border border-slate-100 group-hover:bg-blue-600 transition-colors duration-500">
              {React.cloneElement(iconMap[feature.iconName] as React.ReactElement, {
                className: "text-blue-600 group-hover:text-white transition-colors duration-500",
                size: 32
              })}
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
            <p className="text-slate-500 leading-relaxed font-medium">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;