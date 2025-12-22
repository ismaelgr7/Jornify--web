import React from 'react';
import Section from './Section';
import Button from './Button';
import { Briefcase, ShieldCheck, PieChart, Users, ArrowRight, FileText } from 'lucide-react';

const SEOAsesoriasLaborales: React.FC = () => {
  return (
    <article className="bg-white">
      {/* Header SEO */}
      <header className="bg-slate-50 pt-32 pb-16 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-6 uppercase tracking-wide">
            <Briefcase size={14} />
            Programa de Partners Profesionales
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Control horario para asesorías laborales: Rentabilidad y seguridad para sus clientes
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Optimice la gestión del registro de jornada de su cartera de clientes. Reduzca riesgos legales, elimine la gestión administrativa manual y genere una nueva línea de ingresos recurrentes para su despacho.
          </p>
        </div>
      </header>

      {/* Contenido Principal */}
      <Section className="py-16" containerClass="max-w-3xl mx-auto">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">

          <p className="mb-8">
            En el actual ecosistema laboral español, el <strong>control horario para asesorías laborales</strong> ha pasado de ser una recomendación técnica a una necesidad operativa crítica. Los despachos profesionales se enfrentan diariamente a la responsabilidad de supervisar el cumplimiento normativo de sus clientes, quienes a menudo recurren a sistemas de registro manuales o Excel precarios que no resistirían una Inspección de Trabajo.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">El papel estratégico del asesor en el registro de jornada</h2>
          <p>
            Como asesor laboral, usted es la primera línea de defensa de la empresa ante la administración. Cuando un cliente entrega hojas de firmas con errores, tachaduras o datos inverosímiles, el riesgo no solo recae sobre la empresa, sino que incrementa la carga de trabajo y el estrés del gestor encargado de defender dicho expediente.
          </p>
          <p>
            Digitalizar este proceso mediante una herramienta como Jornify permite que el despacho reciba información depurada, veraz y lista para procesar en las nóminas, eliminando la fricción de perseguir documentos físicos a final de mes. Para entender mejor el marco legal que protege a sus clientes, puede consultar nuestra guía sobre el <a href="#guia-control-horario" className="text-blue-600 hover:underline">control horario obligatorio</a>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Ventajas de implementar Jornify en su despacho profesional</h2>
          <p>
            Nuestra solución no solo ha sido diseñada para la PYME, sino específicamente para ser recomendada por asesores que buscan rigor y sencillez. Estas son las ventajas competitivas que ofrecemos a su asesoría:
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Panel de gestión multi-empresa (Partner Dashboard)</h3>
          <p>
            Acceda a un panel exclusivo desde donde podrá monitorizar el estado del registro de todos sus clientes. Visualice de un vistazo qué empresas están cumpliendo y cuáles tienen incidencias, permitiéndole realizar una labor de consultoría proactiva.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Garantía de cumplimiento del RD 8/2019</h3>
          <p>
            Jornify asegura que el <strong>registro de la jornada laboral</strong> cumpla con los requisitos de inalterabilidad y custodia de 4 años exigidos por ley. Usted tendrá la tranquilidad de que, ante cualquier requerimiento, los informes de sus clientes serán técnicamente intachables.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Reducción drástica de soporte técnico</h3>
          <p>
            A diferencia de otras herramientas complejas, Jornify es tan intuitivo que los clientes apenas generan consultas técnicas. Esto libera a su equipo de resolver dudas sobre software, permitiéndoles centrarse en el asesoramiento laboral de valor.
          </p>

          {/* CTA INTERMEDIO PARA ASESORÍAS */}
          <div className="bg-slate-900 rounded-2xl p-10 my-16 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Desea conocer nuestras condiciones para asesores?</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Ofrecemos planes de precios especiales, comisiones recurrentes y un panel de gestión centralizado para su despacho profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="bg-blue-600 hover:bg-blue-500 border-none px-8" onClick={() => window.location.hash = '#asesorias'}>
                Solicitar información de Partner
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                Ver demo del panel
              </Button>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Rentabilidad: Un nuevo flujo de ingresos para el despacho</h2>
          <p>
            El modelo de colaboración de Jornify está pensado para que la asesoría se beneficie del crecimiento de su cartera. Ofrecemos dos modalidades de trabajo:
          </p>
          <ul className="space-y-4 my-8">
            <li className="flex gap-4">
              <PieChart className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <strong className="block text-slate-900">Modelo de Referido:</strong>
                <span>Usted recomienda Jornify y recibe una comisión anual recurrente por cada cliente que mantenga su suscripción activa.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <Users className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <strong className="block text-slate-900">Marca Blanca / Gestión Directa:</strong>
                <span>El despacho adquiere las licencias a un precio preferencial y las factura como parte de sus servicios de asesoramiento global, aumentando el valor percibido por su cliente.</span>
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Integración con el proceso de nóminas</h2>
          <p>
            Uno de los mayores cuellos de botella en la elaboración de nóminas es el cálculo de horas extraordinarias y complementarias. Jornify permite exportar datos en formatos compatibles con los principales softwares de nóminas del mercado, asegurando que el trasvase de información sea rápido y sin errores de transcripción manual.
          </p>
          <p>
            Para más detalles sobre cómo este proceso optimiza la operativa diaria, puede volver a nuestra <a href="/" className="text-blue-600 hover:underline">página principal</a>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Seguridad y custodia de datos profesional</h2>
          <p>
            Como expertos legales, las asesorías valoran la custodia de datos por encima de todo. Jornify utiliza servidores seguros en la UE, cumpliendo estrictamente con el RGPD. Garantizamos la disponibilidad de los registros de sus clientes durante los 4 años obligatorios, incluso si el cliente decide cesar su actividad o cambiar de gestor, facilitando un traspaso de información ordenado y profesional.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Conclusión</h2>
          <p>
            El <strong>control horario para asesorías laborales</strong> no debe ser una molestia, sino una oportunidad para fortalecer el vínculo con el cliente y profesionalizar los servicios del despacho. Jornify le ofrece la tecnología necesaria para dormir tranquilo, sabiendo que sus clientes cumplen la ley y que su despacho está a la vanguardia de la digitalización laboral.
          </p>
        </div>
      </Section>

      {/* Footer CTA */}
      <footer className="bg-blue-600 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Empiece a colaborar con Jornify hoy</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Únase a nuestra red de asesorías colaboradoras y transforme el cumplimiento legal de sus clientes en una ventaja para su propio despacho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 text-lg font-bold">
              Contactar con Soporte Partner
            </Button>
            <Button variant="outline" className="border-blue-400 text-white hover:bg-blue-700 px-10 py-4 text-lg">
              Descargar Dossier para Asesorías
            </Button>
          </div>
          <p className="mt-8 text-sm text-blue-200">
            Atención preferente para graduados sociales y gestores administrativos.
          </p>
        </div>
      </footer>
    </article>
  );
};

export default SEOAsesoriasLaborales;