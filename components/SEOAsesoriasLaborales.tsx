import React from 'react';
import Section from './Section';
import Button from './Button';
import { Briefcase, ShieldCheck, PieChart, Users, ArrowRight, FileText } from 'lucide-react';

interface SEOAsesoriasLaboralesProps {
  onContactClick?: () => void;
}

const SEOAsesoriasLaborales: React.FC<SEOAsesoriasLaboralesProps> = ({ onContactClick }) => {
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
            Control horario para asesorías: Seguridad para tus clientes, agilidad para tu despacho
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Optimice la gestión del registro de jornada de sus clientes de hostelería. Elimine el papel, reciba informes perfectos y ofrezca un beneficio exclusivo a sus empresas.
          </p>
        </div>
      </header>

      {/* Contenido Principal */}
      <Section className="py-16" containerClass="max-w-3xl mx-auto">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">

          <p className="mb-8">
            En el sector hostelero, el <strong>control horario para asesorías laborales</strong> es a menudo un quebradero de cabeza. Los registros en papel, las fotos de hojas de firmas borrosas y los datos incompletos dificultan la elaboración de nóminas y dejan a las empresas vulnerables ante una Inspección de Trabajo.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">El fin de las hojas de firmas en hostelería</h2>
          <p>
            Como asesor laboral, usted sabe que un cliente hostelero no tiene tiempo para burocracia. Digitalizar este proceso mediante una herramienta tan sencilla como Jornify permite que el despacho reciba información depurada, veraz y lista para procesar en las nóminas, eliminando la fricción de perseguir documentos físicos a final de mes.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Ventajas de ser una "Asesoría Amiga" de Jornify</h2>
          <p>
            Nuestra solución ha sido diseñada específicamente para ser recomendada por asesores que buscan rigor y sencillez. No le ofrecemos paneles complejos que nadie tiene tiempo de usar, le ofrecemos <strong>resultados</strong>:
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Informes en PDF listos para la nómina</h3>
          <p>
            Reciba registros de jornada firmados digitalmente, con una traza inalterable de cada fichaje. Usted tendrá la tranquilidad de que, ante cualquier requerimiento, los informes de sus clientes serán técnicamente intachables.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Código de Descuento Exclusivo</h3>
          <p>
            Le facilitamos un código promocional único para sus clientes. Ellos pagan menos por su control horario gracias a su recomendación, lo que refuerza su imagen como experto que aporta valor real y soluciones de ahorro.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Cero soporte técnico</h3>
          <p>
            Jornify es tan intuitivo que sus clientes no le llamarán con dudas sobre el manejo de la aplicación. Esto libera a su equipo para centrarse en el asesoramiento laboral de alto valor.
          </p>

          {/* CTA INTERMEDIO PARA ASESORÍAS */}
          <div className="bg-slate-900 rounded-2xl p-10 my-16 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Solicita hoy mismo tu Código de Asesoría</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Ofrece a tus clientes un descuento exclusivo y empieza a recibir informes de jornada digitales impecables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="bg-blue-600 hover:bg-blue-500 border-none px-8" onClick={onContactClick}>
                Solicitar mi código de partner
              </Button>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">¿Cómo funciona la colaboración?</h2>
          <p>
            Usted nos indica que desea unirse a nuestra red de asesores. Nosotros le enviamos su código personalizado y material de ayuda que puede enviar a sus clientes si lo desea.
          </p>
          <ul className="space-y-4 my-8">
            <li className="flex gap-4">
              <PieChart className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <strong className="block text-slate-900">Usted recomienda:</strong>
                <span>Sus clientes agilizan su negocio y ahorran dinero en su suscripción mensual de Jornify.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <Users className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <strong className="block text-slate-900">Nosotros gestionamos:</strong>
                <span>Nos encargamos del soporte técnico y de asegurar que el cliente cumpla la ley, facilitándole a usted los informes cuando los necesite.</span>
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Seguridad y custodia de datos garantizada</h2>
          <p>
            Como expertos legales, las asesorías valoran la custodia de datos. Jornify cumple estrictamente con el RGPD y garantiza la disponibilidad de los registros de sus clientes durante los 4 años obligatorios, eliminando la necesidad de archivos físicos en sus oficinas.
          </p>

        </div>
      </Section>

      {/* Footer CTA */}
      <footer className="bg-blue-600 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Empieza a colaborar con Jornify hoy</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Únase a nuestra red de asesorías colaboradoras y transforme el cumplimiento legal de sus clientes en una ventaja para su propio despacho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 text-lg font-bold" onClick={onContactClick}>
              Solicitar información para mi despacho
            </Button>
          </div>
        </div>
      </footer>
    </article>
  );
};


export default SEOAsesoriasLaborales;