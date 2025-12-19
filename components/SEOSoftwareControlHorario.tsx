import React from 'react';
import Section from './Section';
import Button from './Button';
import { Monitor, Shield, Zap, Database, Smartphone, CheckCircle } from 'lucide-react';

const SEOSoftwareControlHorario: React.FC = () => {
  return (
    <article className="bg-white">
      {/* Header SEO */}
      <header className="bg-slate-50 pt-32 pb-16 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-6 uppercase tracking-wide">
            <Monitor size={14} />
            Solución Tecnológica B2B
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Software de control horario: La herramienta definitiva para la gestión de jornada
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Optimice el registro de jornada de sus empleados con un software de control horario moderno, seguro y adaptado a la normativa española vigente.
          </p>
        </div>
      </header>

      {/* Contenido Principal */}
      <Section className="py-16" containerClass="max-w-3xl mx-auto">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">

          <p className="mb-8">
            La elección de un <strong>software de control horario</strong> no debe responder únicamente a la necesidad de evitar sanciones. Para una empresa moderna, esta herramienta representa la transición de una gestión de Recursos Humanos reactiva a una operativa digital eficiente. En un mercado saturado de soluciones, identificar qué características técnicas garantizan tanto el cumplimiento del <a href="#guia-control-horario" className="text-blue-600 hover:underline">control horario obligatorio</a> como la facilidad de uso es fundamental para el éxito de la implementación.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Qué define a un software de control horario de alto nivel</h2>
          <p>
            Un software profesional debe ir más allá de un simple botón de inicio y fin. La arquitectura del sistema debe estar diseñada para proteger la integridad de los datos y facilitar la vida tanto al administrador como al empleado. Los pilares de una buena herramienta son:
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Fiabilidad y seguridad de los registros</h3>
          <p>
            Cualquier <strong>software de control horario</strong> digno de confianza debe implementar protocolos que impidan la manipulación de los datos una vez registrados. Esto se logra mediante huellas digitales (IP, ID de dispositivo y sellado de tiempo servidor) que aseguran que cada registro de jornada laboral es veraz.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Accesibilidad y movilidad</h3>
          <p>
            En un entorno laboral donde el teletrabajo y la movilidad geográfica son habituales, el software debe ser multiplataforma. La capacidad de fichar desde un navegador web o una aplicación móvil asegura que el <a href="#registro-jornada-laboral" className="text-blue-600 hover:underline">registro de la jornada laboral</a> se realice en el momento exacto, independientemente de la ubicación del trabajador.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Simplicidad en la experiencia de usuario (UX)</h3>
          <p>
            Si el software es complicado, los empleados dejarán de usarlo o cometerán errores constantes. Una interfaz limpia y un proceso de fichaje que no supere los tres segundos son requisitos indispensables para reducir la fricción administrativa.
          </p>

          {/* CTA COMERCIAL 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 my-12 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Descubra el software de control horario más intuitivo</h3>
            <p className="text-slate-600 mb-6">Jornify combina rigor legal con una interfaz diseñada para no perder el tiempo.</p>
            <Button variant="primary" className="px-10" onClick={() => window.location.hash = '#precios'}>
              Probar Jornify ahora
            </Button>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Comparativa: Software en la nube vs. Sistemas locales vs. Papel</h2>
          <p>
            Para comprender por qué el modelo SaaS (Software as a Service) es el estándar actual para el <a href="#control-horario-pymes" className="text-blue-600 hover:underline">control horario para PYMES</a>, es necesario analizar las alternativas tradicionales:
          </p>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 p-4 text-left">Característica</th>
                  <th className="border border-slate-200 p-4 text-left">Software en la Nube</th>
                  <th className="border border-slate-200 p-4 text-left">Sistemas Locales</th>
                  <th className="border border-slate-200 p-4 text-left">Papel / Excel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-4 font-bold">Coste Inicial</td>
                  <td className="border border-slate-200 p-4 text-green-600">Cero</td>
                  <td className="border border-slate-200 p-4 text-red-600">Alto (Hardware)</td>
                  <td className="border border-slate-200 p-4">Bajo</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-4 font-bold">Seguridad Legal</td>
                  <td className="border border-slate-200 p-4 text-green-600">Máxima</td>
                  <td className="border border-slate-200 p-4">Media</td>
                  <td className="border border-slate-200 p-4 text-red-600">Nula</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-4 font-bold">Mantenimiento</td>
                  <td className="border border-slate-200 p-4">Automático</td>
                  <td className="border border-slate-200 p-4 text-red-600">Requerido</td>
                  <td className="border border-slate-200 p-4">Manual</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Funcionalidades indispensables en su herramienta de registro</h2>
          <p>
            Al evaluar un <strong>software de control horario</strong>, asegúrese de que incluya las siguientes capacidades para evitar tener que contratar herramientas adicionales en el futuro:
          </p>
          <ul className="space-y-4 my-8">
            <li className="flex gap-4">
              <Shield className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <strong className="block text-slate-900">Custodia garantizada por 4 años:</strong>
                <span>El sistema debe almacenar los datos de forma segura durante el periodo legal obligatorio, incluso si se cancela la suscripción.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <Zap className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <strong className="block text-slate-900">Generación de informes instantánea:</strong>
                <span>Capacidad para exportar PDFs oficiales en segundos durante una inspección presencial.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <Database className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <strong className="block text-slate-900">Gestión de ausencias e incidencias:</strong>
                <span>Posibilidad de registrar vacaciones, bajas médicas o permisos, integrándolos automáticamente en el cómputo de horas mensuales.</span>
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Por qué Jornify es el software de control horario preferido</h2>
          <p>
            Jornify no es solo un registrador; es una solución diseñada específicamente para la realidad de la empresa española. Hemos eliminado la complejidad técnica innecesaria para ofrecer una herramienta que cumple al 100% con la legalidad sin requerir instalaciones ni periodos de formación.
          </p>
          <p>
            Nuestra arquitectura en la nube permite que los datos estén siempre disponibles para la empresa, los trabajadores y, si fuera necesario, para su <a href="#control-horario-asesorias" className="text-blue-600 hover:underline">asesoría laboral</a>, simplificando enormemente la elaboración de nóminas.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Conclusión</h2>
          <p>
            Invertir en un <strong>software de control horario</strong> de calidad es invertir en la tranquilidad de su negocio. La digitalización del registro de jornada es el primer paso hacia una gestión de Recursos Humanos más humana, transparente y, sobre todo, protegida ante las exigencias de la administración.
          </p>
        </div>
      </Section>

      {/* Footer CTA */}
      <footer className="bg-slate-900 py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3 shadow-xl">
            <Monitor className="text-white" size={40} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pásese hoy al software de control horario líder para PYMES
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Únase a cientos de empresas que ya han digitalizado su registro con Jornify. Sin cuotas de alta, sin permanencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="bg-blue-600 hover:bg-blue-500 border-none px-12 py-4 text-lg">
              Empezar prueba gratuita
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-12 py-4 text-lg">
              Contactar con Ventas
            </Button>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Conforme al RD 8/2019. Datos cifrados y seguros en la UE.
          </p>
        </div>
      </footer>
    </article>
  );
};

export default SEOSoftwareControlHorario;