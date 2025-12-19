import React from 'react';
import Section from './Section';
import { Shield } from 'lucide-react';

const LegalNotice: React.FC = () => {
    return (
        <article className="bg-white min-h-screen">
            <header className="bg-slate-50 pt-32 pb-16 border-b border-slate-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold mb-6 uppercase tracking-wide">
                        <Shield size={14} />
                        Legal
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Aviso Legal
                    </h1>
                </div>
            </header>

            <Section className="py-16" containerClass="max-w-3xl mx-auto">
                <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">
                    <h3>1. Datos Identificativos</h3>
                    <p>
                        En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos: la empresa titular de dominio web es <strong>Jornify</strong> (en adelante Jornify), con domicilio a estos efectos en Madrid, España. Correo electrónico de contacto: hola@jornify.com.
                    </p>

                    <h3>2. Usuarios</h3>
                    <p>
                        El acceso y/o uso de este portal de Jornify atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
                    </p>

                    <h3>3. Uso del Portal</h3>
                    <p>
                        Jornify proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Jornify o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.
                    </p>

                    <h3>4. Protección de Datos</h3>
                    <p>
                        Jornify cumple con las directrices de la normativa vigente en materia de protección de datos personales, el Reglamento (UE) 2016/679 de 27 de abril de 2016 (RGPD), relativo a la protección de las personas físicas en cuanto al tratamiento de datos personales y a la libre circulación de estos datos.
                    </p>

                    <h3>5. Propiedad Intelectual e Industrial</h3>
                    <p>
                        Jornify por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de Jornify o bien de sus licenciantes.
                    </p>
                    <p>
                        Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Jornify.
                    </p>

                    <h3>6. Exclusión de Garantías y Responsabilidad</h3>
                    <p>
                        Jornify no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                    </p>

                    <h3>7. Modificaciones</h3>
                    <p>
                        Jornify se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
                    </p>

                    <h3>8. Enlaces</h3>
                    <p>
                        En el caso de que en nombre del dominio se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, Jornify no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso Jornify asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
                    </p>

                    <h3>9. Derecho de Exclusión</h3>
                    <p>
                        Jornify se reserva el derecho a denegar o retirar el acceso a portal y/o los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan las presentes Condiciones Generales de Uso.
                    </p>
                </div>
            </Section>
        </article>
    );
};

export default LegalNotice;
