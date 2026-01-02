import React from 'react';
import Section from './Section';
import Button from './Button';
import { Layout, Users, Clock, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

const SEOControlHorarioPymes: React.FC = () => {
  return (
    <article className="bg-white">
      {/* Header SEO */}
      <header className="bg-slate-50 pt-32 pb-16 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-6 uppercase tracking-wide">
            <Layout size={14} />
            Soluciones para Empresas
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Control horario para PYMES: Gestión eficiente y legal de tu plantilla
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Descubre cómo simplificar el registro de jornada en tu pequeña o mediana empresa. Olvida el papel y profesionaliza tu gestión de Recursos Humanos con una herramienta diseñada para tu día a día.
          </p>
        </div>
      </header>

      {/* Contenido Principal */}
      <Section className="py-16" containerClass="max-w-3xl mx-auto">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">

          <p className="mb-8">
            Para el dueño de una pequeña empresa en España, el <strong>control horario para PYMES</strong> suele percibirse como una carga administrativa impuesta. Sin embargo, cuando una organización alcanza un volumen de entre 5 y 50 empleados, la gestión manual del tiempo de trabajo deja de ser viable. Lo que antes se resolvía con una hoja de firmas, se convierte en un caos de papeles perdidos, errores de cálculo y, lo más peligroso, una vulnerabilidad crítica ante la Inspección de Trabajo.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">¿Por qué tu PYME necesita un software de control horario?</h2>
          <p>
            Muchos gerentes se preguntan si realmente merece la pena invertir en un software cuando el papel "parece" gratuito. La realidad es que el coste de oportunidad y el riesgo legal superan con creces la inversión en una herramienta digital. Un sistema de control horario profesional no solo sirve para cumplir con el <a href="#guia-control-horario" className="text-blue-600 hover:underline">control horario obligatorio</a>, sino que se convierte en la base de una gestión de personas transparente.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Del papel al digital: El fin de las hojas de firmas</h2>
          <p>
            El registro manual es el método más común en las PYMES españolas y, a la vez, el más frágil. Estos son los tres problemas principales que resolvemos al digitalizar el proceso:
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. La fragilidad ante la Inspección</h3>
          <p>
            Un inspector de trabajo desconfía por sistema de un fajo de papeles con firmas idénticas hechas con el mismo bolígrafo. Un software garantiza que el <a href="#registro-jornada-laboral" className="text-blue-600 hover:underline">registro de la jornada laboral</a> es veraz, inalterable y tiene una traza digital clara.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. El tiempo administrativo perdido</h3>
          <p>
            ¿Cuántas horas dedica tu responsable de administración o tú mismo a final de mes a sumar horas de hojas de papel? Con Jornify, ese tiempo se reduce a cero. Los informes se generan automáticamente, calculando horas ordinarias y extraordinarias sin posibilidad de error humano.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. La falta de datos en tiempo real</h3>
          <p>
            Saber quién está trabajando, quién está de vacaciones o quién ha solicitado una baja es fundamental para la operativa diaria de una PYME. La digitalización te ofrece esta visibilidad desde cualquier dispositivo.
          </p>

          {/* CTA INTERMEDIO */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 my-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl font-bold mb-2">Diseñado para empresas de 5 a 50 empleados</h4>
              <p className="text-slate-400 text-sm">Prueba Jornify gratis 14 días. Sin tarjeta de crédito.</p>
            </div>
            <Button variant="primary" className="bg-blue-600 hover:bg-blue-500 border-none whitespace-nowrap" onClick={() => window.location.hash = '#precios'}>
              Empezar ahora
            </Button>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Cómo elegir el mejor control horario para una PYME</h2>
          <p>
            En el mercado existen herramientas complejas diseñadas para grandes corporaciones que resultan inmanejables para una empresa pequeña. Al buscar una solución de control horario para tu PYME, debes fijarte en tres pilares:
          </p>

          <ul className="space-y-4 my-8">
            <li className="flex gap-4">
              <Zap className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <strong className="block text-slate-900">Curva de aprendizaje cero:</strong>
                <span>Tus empleados deben poder fichar en menos de 3 segundos sin necesidad de formación previa.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <ShieldCheck className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <strong className="block text-slate-900">Seguridad jurídica total:</strong>
                <span>Asegúrate de que el software cumpla estrictamente con el Reglamento General de Protección de Datos (RGPD) y la normativa laboral española.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <BarChart3 className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <strong className="block text-slate-900">Precio transparente y escalable:</strong>
                <span>Evita costes de instalación o mantenimiento. Un modelo de pago por empleado es lo más justo para una PYME en crecimiento.</span>
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Funcionalidades clave para gerentes y dueños de negocio</h2>
          <p>
            Más allá de cumplir la ley, Jornify se convierte en tu asistente de Recursos Humanos. Estas son las funciones que más valoran las empresas de nuestro tamaño:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 border border-slate-200 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-2">Gestión de ausencias</h4>
              <p className="text-sm">Controla vacaciones, bajas médicas y permisos desde un calendario unificado. Sin correos electrónicos perdidos.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-2">Geolocalización opcional</h4>
              <p className="text-sm">Ideal para equipos comerciales o trabajadores desplazados que necesitan validar su ubicación al iniciar la jornada.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-2">Informes exportables</h4>
              <p className="text-sm">Genera archivos PDF o Excel listos para enviar a tu gestoría o presentar ante una auditoría externa.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-2">Fichaje multiplataforma</h4>
              <p className="text-sm">Permite a tu equipo fichar desde el móvil, tablet o PC. Perfecto para modelos híbridos y teletrabajo.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Cumplimiento legal sin complicaciones</h2>
          <p>
            La Ley de Control Horario es estricta con la forma en la que se deben custodiar los registros. Las PYMES están obligadas a guardar los datos durante 4 años. En Jornify, nos encargamos de que toda la información esté cifrada y disponible en la nube, eliminando la necesidad de archivos físicos en tu oficina.
          </p>
          <p>
            Nuestra herramienta está pensada para que tú te dediques a vender y hacer crecer tu negocio, mientras nosotros nos ocupamos de que tu registro horario sea una preocupación menos en tu lista de tareas.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Jornify: El aliado de las PYMES y asesorías</h2>
          <p>
            Hemos trabajado codo con codo con expertos laborales para asegurar que nuestra plataforma genera exactamente lo que un inspector de trabajo quiere ver. Esto nos ha convertido en la opción preferida de cientos de pequeñas empresas en toda España que buscan sencillez, rigor legal y un precio justo.
          </p>
        </div>
      </Section>

      {/* Footer CTA */}
      <footer className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-200">
            <Users className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Únete a las PYMES que ya gestionan su tiempo con éxito
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            No esperes a tener una inspección para poner orden en tu registro de jornada. Empieza hoy mismo tu prueba gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="px-12 py-4 text-lg">
              Probar Jornify Gratis
            </Button>
            <Button variant="outline" className="px-12 py-4 text-lg" onClick={() => window.location.href = '/'}>
              Ver Funcionalidades
            </Button>
          </div>
          <p className="mt-8 text-sm text-slate-400 font-medium">
            2,50€ por empleado al mes. IVA incluido. Sin sorpresas.
          </p>
        </div>
      </footer>
    </article>
  );
};

export default SEOControlHorarioPymes;