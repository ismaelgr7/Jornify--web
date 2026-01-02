import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';
import Section from './Section';

const HowItWorks: React.FC = () => {
  return (
    <Section id="como-funciona" className="bg-white py-24 border-t border-slate-100">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Cómo funciona el registro de jornada en Jornify?</h2>
        <p className="text-lg text-slate-600">
          Implementación inmediata en tres sencillos pasos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10 transform -translate-y-1/2"></div>

        {HOW_IT_WORKS_STEPS.map((item, index) => (
          <div key={index} className="relative bg-white pt-4">
            <div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-blue-100 relative z-10 border-4 border-white">
              {item.step}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed text-center px-4">
              {item.description}
            </p>
          </div>
        ))}
        <div className="mt-20 bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Instálalo en tu móvil como una App</h3>
            <p className="text-slate-600 mb-8">
              Jornify es una PWA (Progressive Web App). No necesitas descargarla de la Play Store. Ábrela en tu móvil y sigue estos pasos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">iOS</div>
                <p className="text-sm text-slate-600">Pulsa el botón de <strong>Compartir</strong> (cuadrado con flecha) y selecciona <strong>"Añadir a pantalla de inicio"</strong>.</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">And</div>
                <p className="text-sm text-slate-600">Pulsa los <strong>tres puntos</strong> del navegador y selecciona <strong>"Instalar aplicación"</strong> o "Añadir a pantalla de inicio".</p>
              </div>
            </div>
          </div>
        </div>
    </Section>
  );
};

export default HowItWorks;