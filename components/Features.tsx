import React from 'react';
import { FEATURES } from '../constants';
import Section from './Section';
import { ShieldCheck, Smartphone, Clock } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={32} className="text-blue-600" />,
  Smartphone: <Smartphone size={32} className="text-blue-600" />,
  Clock: <Clock size={32} className="text-blue-600" />
};

const Features: React.FC = () => {
  return (
    <Section id="ventajas" className="bg-white py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Lo que necesita tu empresa, ni más ni menos</h2>
        <p className="text-lg text-slate-600">
          Hemos eliminado lo superfluo para centrarnos en lo obligatorio y útil.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((feature, index) => (
          <div key={index} className="p-8 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6 p-4 bg-white rounded-lg inline-block shadow-sm border border-slate-100">
              {iconMap[feature.iconName]}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;