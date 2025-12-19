import React from 'react';
import Section from './Section';
import Button from './Button';
// Fix: Removed unused and non-existent icon imports 'AlertTriangle' and 'scale3d'
import { FileText, ShieldCheck } from 'lucide-react';

const SEOControlHorario: React.FC = () => {
  return (
    <article className="bg-white">
      {/* Cabecera del Artículo SEO */}
      <header className="bg-slate-50 pt-32 pb-16 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-6 uppercase tracking-wide">
            <FileText size={14} />
            Actualizado a 2025
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Control horario obligatorio: Todo lo que tu empresa debe saber para cumplir la ley
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Guía definitiva sobre el registro de jornada laboral en España: normativa vigente, requisitos técnicos y cómo evitar sanciones de la Inspección de Trabajo.
          </p>
        </div>
      </header>

      {/* Contenido del Artículo */}
      <Section className="py-16" containerClass="max-w-3xl mx-auto">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">

          <p className="mb-8">
            Desde mayo de 2019, el <strong>control horario obligatorio</strong> ha transformado la gestión de los Recursos Humanos en España. Lo que comenzó como una medida para combatir la precariedad laboral y el impago de horas extraordinarias, se ha consolidado como una pieza fundamental de la normativa laboral vigente. Sin embargo, años después de su implantación, muchas pequeñas y medianas empresas siguen albergando dudas sobre cómo implementar un sistema que sea, a la vez, sencillo para el empleado y robusto ante una inspección.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">El marco legal del control horario en España</h2>
          <p>
            La obligatoriedad del registro de jornada emana directamente del <strong>Real Decreto-ley 8/2019</strong>, de 8 de marzo, de medidas urgentes de protección social y de lucha contra la precariedad laboral en la jornada de trabajo. Esta norma modificó el artículo 34 del Estatuto de los Trabajadores, añadiendo el apartado 9.
          </p>
          <p>
            La ley es clara: la empresa debe garantizar el registro diario de jornada, que deberá incluir el horario concreto de inicio y finalización de la jornada laboral de cada persona trabajadora, sin perjuicio de la flexibilidad horaria que pueda existir.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">El Artículo 34.9 del Estatuto de los Trabajadores</h3>
          <p>
            Este artículo establece que el registro se realizará de forma diaria y que la empresa está obligada a conservar los registros durante un periodo de <strong>cuatro años</strong>. Durante este tiempo, los datos deben permanecer a disposición de las personas trabajadoras, de sus representantes legales y de la Inspección de Trabajo y Seguridad Social.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">¿Quiénes están obligados a registrar la jornada?</h2>
          <p>
            Una de las dudas más frecuentes es si existen excepciones por el tamaño de la empresa. La respuesta es negativa: el <strong>control horario es obligatorio para todas las empresas</strong>, independientemente de su volumen de empleados o sector de actividad. Esto incluye:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Empresas con un solo trabajador por cuenta ajena.</li>
            <li>Trabajadores a tiempo completo y a tiempo parcial.</li>
            <li>Personal que realiza teletrabajo o trabajo a distancia.</li>
            <li>Comerciales y personal desplazado que no acude a un centro físico de trabajo.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Requisitos técnicos de un registro de jornada válido</h2>
          <p>
            No cualquier sistema de anotación es válido ante la ley. La Inspección de Trabajo ha definido criterios técnicos (como el Criterio Técnico 101/2019) para determinar si un sistema de control horario cumple con su propósito. Un registro válido debe poseer tres características esenciales:
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Objetividad y Fiabilidad</h3>
          <p>
            El sistema debe registrar la hora exacta y real. No se permiten sistemas basados en la "estimación" o en cuadrantes de horarios teóricos. El registro debe reflejar la realidad de lo sucedido cada día.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Trazabilidad y No Manipulación</h3>
          <p>
            Este es el punto donde fallan los registros en papel o en hojas de Excel simples. El sistema debe garantizar que la información no puede ser alterada a posteriori ni por la empresa ni por el trabajador sin dejar un rastro claro de la modificación (audit trail).
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Accesibilidad Inmediata</h3>
          <p>
            En caso de una visita de la Inspección de Trabajo al centro de trabajo, el empresario debe ser capaz de mostrar los registros en ese mismo momento. No es válido alegar que "los tiene la gestoría" o que se entregarán al día siguiente.
          </p>

          {/* CTA INTERMEDIO DISCRETO */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 my-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-lg font-bold text-blue-900 mb-2">Asegura el cumplimiento legal de tu empresa</h4>
                <p className="text-blue-700 text-sm">Prueba Jornify gratis durante 14 días y genera informes válidos con un clic.</p>
              </div>
              <Button variant="primary" onClick={() => window.location.hash = '#'}>
                Solicitar Demo Gratuita
              </Button>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Sanciones y multas de la Inspección de Trabajo</h2>
          <p>
            El incumplimiento del control horario obligatorio está tipificado como una infracción grave en la Ley sobre Infracciones y Sanciones en el Orden Social (LISOS). Las multas no son despreciables para una PYME:
          </p>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 p-3 text-left">Grado de la infracción</th>
                  <th className="border border-slate-200 p-3 text-left">Cuantía mínima</th>
                  <th className="border border-slate-200 p-3 text-left">Cuantía máxima</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 font-semibold">Grado Mínimo</td>
                  <td className="border border-slate-200 p-3">751 €</td>
                  <td className="border border-slate-200 p-3">1.500 €</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-semibold">Grado Medio</td>
                  <td className="border border-slate-200 p-3">1.501 €</td>
                  <td className="border border-slate-200 p-3">3.750 €</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-semibold">Grado Máximo</td>
                  <td className="border border-slate-200 p-3">3.751 €</td>
                  <td className="border border-slate-200 p-3">7.500 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Cabe destacar que recientemente se ha debatido el endurecimiento de estas sanciones y la posibilidad de que la multa no sea global por empresa, sino <strong>individual por cada trabajador</strong> que no tenga su registro en regla, lo que multiplicaría exponencialmente el coste de la sanción.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Control horario y teletrabajo</h2>
          <p>
            La Ley 10/2021 de trabajo a distancia reforzó la necesidad del control horario. El hecho de que el empleado no esté en la oficina no exime a la empresa de su responsabilidad. Al contrario, el registro se vuelve la herramienta principal para garantizar el derecho a la <strong>desconexión digital</strong> y asegurar que se respetan los tiempos de descanso obligatorio entre jornadas.
          </p>
          <p>
            Para estos escenarios, las hojas de papel son materialmente imposibles de gestionar, obligando a las empresas a adoptar soluciones en la nube o aplicaciones móviles que permitan el fichaje remoto con garantías de geolocalización o verificación de IP.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Digitalización del registro: Ventajas sobre el papel</h2>
          <p>
            Muchas empresas comenzaron usando hojas de firmas por ser el método "sin coste" inmediato. Sin embargo, los costes ocultos del papel superan rápidamente a una suscripción SaaS:
          </p>
          <ul className="space-y-4 my-8">
            <li className="flex gap-3">
              <ShieldCheck className="text-green-600 flex-shrink-0" size={20} />
              <span><strong>Seguridad jurídica:</strong> Un software genera firmas digitales y huellas electrónicas inalterables.</span>
            </li>
            <li className="flex gap-3">
              <ShieldCheck className="text-green-600 flex-shrink-0" size={20} />
              <span><strong>Ahorro de tiempo:</strong> Automatiza el cálculo de horas totales, horas extra y gestión de ausencias.</span>
            </li>
            <li className="flex gap-3">
              <ShieldCheck className="text-green-600 flex-shrink-0" size={20} />
              <span><strong>Gestión documental:</strong> Cumple con la obligación de conservar datos durante 4 años sin ocupar espacio físico ni riesgo de extravío.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Cómo Jornify ayuda a tu empresa</h2>
          <p>
            En Jornify hemos diseñado una herramienta que se adapta a la realidad de la PYME española. Entendemos que el control horario obligatorio no debe ser una carga administrativa más, sino un proceso invisible y eficiente.
          </p>
          <p>
            Nuestra plataforma permite a los empleados fichar desde cualquier dispositivo, ofrece a los gestores un panel de control intuitivo y, lo más importante, genera informes listos para ser presentados ante una inspección en menos de un minuto.
          </p>
        </div>
      </Section>

      {/* CTA Final */}
      <footer className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Cumple con el control horario hoy mismo
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Evita sanciones innecesarias y profesionaliza la gestión de tu jornada laboral con la herramienta más sencilla del mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="bg-blue-600 hover:bg-blue-500 border-none px-10 py-4 text-lg">
              Probar Jornify Gratis
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-10 py-4 text-lg" onClick={() => window.location.href = '/'}>
              Volver a la Web Principal
            </Button>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Sin permanencia. Sin gastos de instalación. Cumplimiento legal garantizado.
          </p>
        </div>
      </footer>
    </article>
  );
};

export default SEOControlHorario;