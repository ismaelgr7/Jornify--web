import React from 'react';
import { PRICING_COPY, APP_URL } from '../constants';
import Section from './Section';
import Button from './Button';
import { Check } from 'lucide-react';

interface PricingProps {
  onContactClick?: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onContactClick }) => {
  return (
    <Section id="precios" className="bg-slate-50 py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">La tranquilidad de tu empresa no tiene por qué ser cara</h2>
        <p className="text-lg text-slate-600">
          Tu seguridad jurídica ante una inspección por una fracción del coste.
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-500 relative">
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
            Más recomendado
          </div>
          <div className="p-8 sm:p-10 text-center bg-white border-b border-slate-100">
            <h3 className="text-slate-500 font-medium uppercase tracking-wide text-sm mb-4">Tarifa Plana</h3>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-extrabold text-slate-900">{PRICING_COPY.price}</span>
            </div>
            <div className="text-slate-500 mb-6 font-medium">
              por {PRICING_COPY.unit} {PRICING_COPY.period}
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold mb-8 border border-blue-100 uppercase tracking-tighter">
              🛡️ Evita sanciones de hasta 6.000€
            </div>
            <Button variant="primary" fullWidth className="py-4 text-base" onClick={() => window.open(APP_URL, '_blank')}>
              Empezar prueba gratuita
            </Button>
            <p className="mt-4 text-xs text-slate-400">Sin tarjeta de crédito. Cancela cuando quieras.</p>
          </div>

          <div className="bg-slate-50 px-8 py-8 sm:px-10">
            <ul className="space-y-4">
              {PRICING_COPY.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-medium text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;