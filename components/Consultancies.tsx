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
              <span>Partner Program para Asesorías</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Control Horario para Asesorías: Genera ingresos recurrentes
            </h2>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Tus clientes necesitan cumplir la ley. Tú necesitas evitar dolores de cabeza con registros en papel.
              <strong className="text-white"> Jornify es la solución</strong> que os beneficia a ambos.
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-400 mt-1">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">15% de comisión recurrente anual</h4>
                  <p className="text-slate-400">Recibe una comisión todos los años por cada cliente que mantenga su suscripción. Sin letra pequeña.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 mt-1">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Cero carga administrativa</h4>
                  <p className="text-slate-400">Olvídate de perseguir hojas de firmas. Recibe informes digitales perfectos listos para la nómina.</p>
                </div>
              </li>
            </ul>

            <Button
              variant="primary"
              className="w-full sm:w-auto text-lg px-8 py-4 bg-blue-600 hover:bg-blue-500 border-none shadow-lg shadow-blue-900/50"
              onClick={onContactClick}
            >
              Convertirme en Partner
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right Column: Earnings Potential Visual */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="text-center mb-8">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-4 shadow-lg">
                <Calculator className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">¿Cuánto puedes ganar?</h3>
              <p className="text-slate-400 mt-2">Ejemplo de ingresos pasivos anuales</p>
            </div>

            <div className="space-y-4">
              {/* Example Tier 1 */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-400">Cartera pequeña</div>
                  <div className="font-bold text-lg text-white">100 empleados</div>
                  <div className="text-xs text-slate-500">~10 clientes de 10 empleados</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-400">Comisión anual</div>
                  <div className="text-2xl font-bold text-green-400">+370 €<span className="text-sm font-normal text-slate-500">/año</span></div>
                </div>
              </div>

              {/* Example Tier 2 */}
              <div className="bg-white/10 rounded-xl p-5 border border-white/20 flex items-center justify-between relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-blue-500"></div>
                <div>
                  <div className="text-sm text-blue-300 font-medium">Cartera mediana</div>
                  <div className="font-bold text-xl text-white">500 empleados</div>
                  <div className="text-xs text-slate-400">~50 clientes de 10 empleados</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-300">Comisión anual</div>
                  <div className="text-3xl font-bold text-green-400">+1.850 €<span className="text-sm font-normal text-slate-500">/año</span></div>
                </div>
              </div>

              {/* Example Tier 3 */}
              <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl p-5 border border-blue-500/30 flex items-center justify-between">
                <div>
                  <div className="text-sm text-indigo-300 font-medium">Gran cartera</div>
                  <div className="font-bold text-lg text-white">2.000 empleados</div>
                  <div className="text-xs text-slate-400">Multiples PYMES</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-300">Comisión anual</div>
                  <div className="text-2xl font-bold text-green-400">+7.400 €<span className="text-sm font-normal text-slate-500">/año</span></div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-slate-400">
                Calculado sobre la base imponible (descontando IVA).
                <br />
                <span className="text-white font-medium">El ingreso es 100% beneficio: nosotros damos el soporte.</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Consultancies;