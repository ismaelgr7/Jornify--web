import React from 'react';
import Section from './Section';
import Button from './Button';
import { ClipboardCheck, BookOpen, Info, ShieldCheck, CheckCircle } from 'lucide-react';

const SEORegistroJornada: React.FC = () => {
  return (
    <article className="bg-white">
      {/* Header SEO */}
      <header className="bg-slate-50 pt-32 pb-16 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-6 uppercase tracking-wide">
            <BookOpen size={14} />
            Recursos para RRHH
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Guía completa del registro de la jornada laboral en España
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Aprenda a gestionar el registro diario de jornada de sus trabajadores, garantice la validez de sus informes y optimice la gestión del tiempo en su empresa.
          </p>
        </div>
      </header>

      {/* Contenido Principal */}
      <Section className="py-16" containerClass="max-w-3xl mx-auto">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">

          <p className="mb-8">
            El <strong>registro de la jornada laboral</strong> no es solo un requisito burocrático; es la herramienta que garantiza la transparencia en la relación contractual entre empresa y trabajador. Aunque su obligatoriedad es conocida por la mayoría de las organizaciones en España, la implementación técnica sigue generando dudas operativas que pueden derivar en riesgos legales significativos.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">¿Qué es el registro de la jornada laboral?</h2>
          <p>
            Técnicamente, el registro de la jornada laboral es el documento (o conjunto de datos digitales) donde se asienta, día a día, el horario concreto de entrada y salida de cada empleado. Su finalidad es permitir el cómputo exacto de las horas trabajadas, facilitando la distinción entre la jornada ordinaria y las posibles horas extraordinarias.
          </p>
          <p>
            Este registro debe ser **diario**, lo que significa que no se puede completar de forma semanal o mensual "de memoria", ya que esto invalidaría su fiabilidad ante una inspección.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">La importancia del Artículo 34.9 del Estatuto de los Trabajadores</h2>
          <p>
            Toda la arquitectura legal del registro de jornada descansa sobre el Estatuto de los Trabajadores. Este artículo impone a las empresas el deber de "garantizar el registro diario de jornada". La redacción es deliberadamente amplia para permitir que cada empresa elija el sistema que mejor se adapte a su realidad, siempre que se cumpla la negociación colectiva o, en su defecto, el acuerdo con los representantes de los trabajadores.
          </p>

          {/* CTA DISCRETO 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 my-12 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4">¿Necesita un sistema de registro fiable?</h3>
            <p className="text-slate-600 mb-6 text-base">Jornify le permite automatizar el registro de jornada cumpliendo estrictamente con el Estatuto de los Trabajadores.</p>
            <Button variant="primary" onClick={() => window.location.hash = '#precios'}>
              Ver planes de Jornify
            </Button>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Requisitos de un registro de jornada válido</h2>
          <p>
            Para que el <strong>registro de la jornada laboral</strong> sea considerado válido por la Inspección de Trabajo, debe cumplir con una serie de requisitos de forma y fondo:
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Identificación del trabajador</h3>
          <p>
            Cada registro debe estar inequívocamente vinculado a una persona trabajadora. No se admiten registros genéricos por departamento.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Horario concreto de inicio y fin</h3>
          <p>
            No basta con poner "8 horas". La ley exige la hora exacta de entrada y la hora exacta de salida. Si existen pausas que no computan como tiempo de trabajo efectivo (como el tiempo de comida), estas también deben quedar reflejadas para que el cálculo sea veraz.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Conservación y custodia</h3>
          <p>
            La empresa debe guardar estos datos durante **cuatro años**. Durante este periodo, deben ser accesibles de forma inmediata. Si el registro es digital, debe ser posible exportarlo o visualizarlo en el momento; si es en papel, debe estar archivado físicamente en el centro de trabajo.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Diferencias entre tiempo de trabajo y presencia</h2>
          <p>
            Uno de los mayores retos del registro de la jornada laboral es distinguir entre el tiempo que el trabajador está en el centro de trabajo y el tiempo de trabajo efectivo. Las empresas deben definir claramente qué periodos se consideran trabajo y cuáles son descansos o pausas personales.
          </p>
          <p>
            Un buen sistema de control horario permite al empleado "pausar" el registro durante su tiempo de descanso, garantizando así que el informe final solo refleje la jornada laboral real, evitando el pago indebido de horas extra inexistentes.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Casuísticas especiales: Teletrabajo y flexibilidad</h2>
          <p>
            El auge del teletrabajo ha complicado la gestión del registro de jornada. La ley de trabajo a distancia recalca que el registro sigue siendo obligatorio. En estos casos, se recomienda el uso de aplicaciones móviles o interfaces web que registren el momento exacto del inicio de la actividad, independientemente de la ubicación física del trabajador.
          </p>
          <p>
            Para más detalles sobre la obligatoriedad en distintos sectores, puede consultar nuestra sección sobre <a href="#guia-control-horario" className="text-blue-600 hover:underline font-medium">control horario obligatorio</a>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Errores comunes que invalidan el registro</h2>
          <ul className="space-y-4 my-8">
            <li className="flex gap-3">
              <Info className="text-amber-500 flex-shrink-0" size={20} />
              <span><strong>Pre-completar los datos:</strong> Rellenar las horas de toda la semana por adelantado es una práctica nula ante la ley.</span>
            </li>
            <li className="flex gap-3">
              <Info className="text-amber-500 flex-shrink-0" size={20} />
              <span><strong>Falta de firma:</strong> En formatos analógicos, la ausencia de firma del trabajador invalida el documento. En formatos digitales, se requiere un método de autenticación único.</span>
            </li>
            <li className="flex gap-3">
              <Info className="text-amber-500 flex-shrink-0" size={20} />
              <span><strong>Sistemas modificables:</strong> Si los datos pueden borrarse o alterarse sin dejar rastro de auditoría, el registro carece de valor probatorio.</span>
            </li>
          </ul>

          {/* CTA INTERMEDIO 2 */}
          <div className="bg-blue-600 rounded-xl p-10 my-16 text-white">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Digitalice su registro hoy mismo</h3>
              <p className="text-blue-100 mb-8">
                Jornify es la solución más sencilla para PYMES. Genere informes oficiales en segundos y olvídese de las carpetas de papel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
                  Probar gratis
                </Button>
                <Button variant="outline" className="border-blue-300 text-white hover:bg-blue-700">
                  Solicitar demo
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Beneficios de automatizar el registro de jornada</h2>
          <p>
            Más allá del cumplimiento legal, la automatización del registro de la jornada laboral ofrece ventajas estratégicas para la empresa:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-2">Transparencia</h4>
              <p className="text-sm">El trabajador tiene acceso a sus propias horas, reduciendo conflictos sobre horas extra o vacaciones.</p>
            </div>
            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-2">Eficiencia en RRHH</h4>
              <p className="text-sm">Se eliminan horas de trabajo manual en el conteo de jornadas para la generación de nóminas.</p>
            </div>
            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-2">Análisis de costes</h4>
              <p className="text-sm">Identifique departamentos con exceso de carga de trabajo mediante el análisis de horas extraordinarias recurrentes.</p>
            </div>
            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-2">Integración</h4>
              <p className="text-sm">Los datos digitales pueden integrarse con software de nóminas y ERPs corporativos.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Conclusión</h2>
          <p>
            El <strong>registro de la jornada laboral</strong> es una pieza clave en la modernización de las relaciones laborales en España. Implementar un sistema que combine la sencillez para el empleado con el rigor legal para la empresa no es solo una necesidad normativa, sino una inversión en la paz social y la eficiencia de la organización.
          </p>
        </div>
      </Section>

      {/* Footer CTA */}
      <footer className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <ShieldCheck size={48} className="mx-auto text-blue-500 mb-6" />
          <h2 className="text-3xl font-bold mb-6">Un registro de jornada sin complicaciones</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Únase a cientos de empresas que ya gestionan su registro de jornada con Jornify. Rápido, legal y 100% digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="bg-blue-600 hover:bg-blue-500 border-none px-10">
              Empezar ahora
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800" onClick={() => window.location.hash = '#'}>
              Ver más ventajas
            </Button>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default SEORegistroJornada;