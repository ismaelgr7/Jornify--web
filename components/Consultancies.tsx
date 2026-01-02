import React from 'react';
import { CONSULTANCY_COPY } from '../constants';
import Section from './Section';
import Button from './Button';
import { Briefcase, TrendingUp, ShieldCheck, Calculator, ArrowRight } from 'lucide-react';

interface ConsultanciesProps {
  onContactClick?: () => void;
}

const Consultancies: React.FC<ConsultanciesProps> = ({ onContactClick }) => {
  return (
    <Section id="asesorias" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Value Proposition */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-8">
              <Briefcase size={16} />
              <span>Programa de Asesorías</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Digitaliza a tus clientes y olvida el papel
            </h2>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Tus clientes hosteleros necesitan cumplir la ley, pero no tienen tiempo para burocracia.
              <strong className="text-white"> Jornify es el aliado</strong> que os permite trabajar mejor a ambos.
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 mt-1">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Informes perfectos cada mes</h4>
                  <p className="text-slate-400">Recibe los registros de jornada en PDF profesional, firmados digitalmente y listos para procesar las nóminas en un clic.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-400 mt-1">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Descuento exclusivo para tus clientes</h4>
                  <p className="text-slate-400">Te facilitamos un código único para que tus clientes paguen menos. Queda como un experto que aporta soluciones reales.</p>
                </div>
              </li>
            </ul>

            <Button
              variant="primary"
              className="w-full sm:w-auto text-lg px-8 py-4 bg-blue-600 hover:bg-blue-500 border-none shadow-lg shadow-blue-900/50"
              onClick={onContactClick}
            >
              Solicitar mi Código de Asesoría
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right Column: Comparison Visual */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Adiós al estrés del cierre de mes</h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">✕</div>
                <div>
                  <p className="text-slate-300 font-medium italic">"Perseguir al cliente para que traiga las hojas de firmas..."</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">✕</div>
                <div>
                  <p className="text-slate-300 font-medium italic">"Fotos de papeles borrosos, tachados o incompletos..."</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">✓</div>
                  <div>
                    <p className="text-blue-300 font-bold">Registros digitales siempre al día y accesibles.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-600/20 border border-blue-500/30 rounded-2xl text-center">
              <p className="text-sm text-slate-300 italic">
                "Desde que mis clientes usan Jornify, la gestión de nóminas es mucho más ágil. Los informes son claros y no hay lugar a errores."
              </p>
              <p className="mt-4 text-xs font-bold text-white">Asesoría Laboral García - Sevilla</p>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Consultancies;