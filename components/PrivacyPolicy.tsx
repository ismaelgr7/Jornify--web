import React from 'react';
import Section from './Section';
import { Lock } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <article className="bg-white min-h-screen">
            <header className="bg-slate-50 pt-32 pb-16 border-b border-slate-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold mb-6 uppercase tracking-wide">
                        <Lock size={14} />
                        Privacidad
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Política de Privacidad
                    </h1>
                </div>
            </header>

            <Section className="py-16" containerClass="max-w-3xl mx-auto">
                <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">
                    <p>
                        En <strong>Jornify</strong> nos comprometemos a proteger y respetar tu privacidad. Esta política establece las bases sobre las que tratamos cualquier dato personal que recabamos de ti, o que tú nos proporcionas.
                    </p>

                    <h3>1. Responsable del Tratamiento</h3>
                    <p>
                        Jornify es el Responsable del Tratamiento de tus datos personales y se compromete a tratarlos de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
                    </p>

                    <h3>2. Finalidad del Tratamiento</h3>
                    <p>Tratamos tus datos personales para las siguientes finalidades:</p>
                    <ul>
                        <li><strong>Prestación del servicio:</strong> Gestionar tu registro como usuario, el control horario y la generación de informes laborales.</li>
                        <li><strong>Soporte:</strong> Atender tus consultas y solicitudes de soporte técnico.</li>
                        <li><strong>Mejora del servicio:</strong> Analizar el uso de nuestra plataforma para mejorar la experiencia de usuario.</li>
                        <li><strong>Comunicaciones comerciales:</strong> Si nos has dado tu consentimiento, enviarte información sobre novedades y ofertas de Jornify.</li>
                    </ul>

                    <h3>3. Legitimación</h3>
                    <p>
                        La base legal para el tratamiento de tus datos es la ejecución del contrato de prestación de servicios (cuando te registras en Jornify) o tu consentimiento expreso (cuando solicitas una demo o te suscribes a nuestra newsletter).
                    </p>

                    <h3>4. Destinatarios de los Datos</h3>
                    <p>
                        Tus datos no se cederán a terceros, salvo obligación legal. Sin embargo, para prestar nuestros servicios, utilizamos proveedores tecnológicos (como servicios de hosting o email marketing) que actúan como Encargados del Tratamiento y que cumplen estrictamente con la normativa de protección de datos.
                    </p>

                    <h3>5. Derechos del Usuario</h3>
                    <p>Tienes derecho a:</p>
                    <ul>
                        <li>Acceder a tus datos personales.</li>
                        <li>Solicitar la rectificación de los datos inexactos.</li>
                        <li>Solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.</li>
                        <li>Oponerte al tratamiento de tus datos.</li>
                        <li>Solicitar la limitación de su tratamiento.</li>
                        <li>La portabilidad de tus datos.</li>
                    </ul>
                    <p>
                        Puedes ejercer tus derechos enviando un correo electrónico a hola@jornify.com.
                    </p>

                    <h3>6. Seguridad de los Datos</h3>
                    <p>
                        Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra el acceso no autorizado, la pérdida o la destrucción.
                    </p>

                    <h3>7. Cambios en la Política de Privacidad</h3>
                    <p>
                        Cualquier cambio que realicemos en nuestra política de privacidad en el futuro se publicará en esta página.
                    </p>
                </div>
            </Section>
        </article>
    );
};

export default PrivacyPolicy;
