import React from 'react';
import Section from './Section';
import { Cookie } from 'lucide-react';

const CookiesPolicy: React.FC = () => {
    return (
        <article className="bg-white min-h-screen">
            <header className="bg-slate-50 pt-32 pb-16 border-b border-slate-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold mb-6 uppercase tracking-wide">
                        <Cookie size={14} />
                        Legal
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Política de Cookies
                    </h1>
                </div>
            </header>

            <Section className="py-16" containerClass="max-w-3xl mx-auto">
                <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">
                    <h3>1. ¿Qué son las cookies?</h3>
                    <p>
                        Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
                    </p>

                    <h3>2. ¿Qué tipos de cookies utiliza esta página web?</h3>
                    <ul>
                        <li>
                            <strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.
                        </li>
                        <li>
                            <strong>Cookies de análisis:</strong> Son aquellas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.
                        </li>
                    </ul>

                    <h3>3. Uso de Google Analytics</h3>
                    <p>
                        Esta página web utiliza Google Analytics, un servicio analítico de web prestado por Google, Inc. Google Analytics utiliza "cookies" para ayudar al website a analizar el uso que hacen los usuarios del sitio web. La información que genera la cookie sobre su uso del website (incluyendo su dirección IP) será directamente transmitida y archivada por Google en los servidores de Estados Unidos.
                    </p>
                    <p>
                        Jornify asume que usted acepta el uso de cookies. No obstante, mostramos información sobre nuestra Política de cookies en la parte inferior o superior de cualquier página del portal con cada inicio de sesión con el objeto de que usted sea consciente.
                    </p>
                </div>
            </Section>
        </article>
    );
};

export default CookiesPolicy;
