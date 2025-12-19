import React from 'react';
import { FOOTER_COPY } from '../constants';
import Section from './Section';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <Section className="py-12" containerClass="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-4 bg-white/5 p-2 rounded-lg backdrop-blur-sm">
            <Logo withText={true} className="text-slate-100" />
            <style>{`.text-slate-100 .text-slate-900 { color: #f1f5f9; }`}</style>
          </div>
          <span className="text-sm opacity-80">{FOOTER_COPY.copyright}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium">
          <a href="#software-control-horario" className="text-blue-400 hover:text-blue-300 transition-colors">Software Control Horario</a>
          <a href="#control-horario-asesorias" className="text-blue-400 hover:text-blue-300 transition-colors">Para Asesorías</a>
          <a href="#control-horario-pymes" className="text-blue-400 hover:text-blue-300 transition-colors">Control PYMES</a>
          <a href="#registro-jornada-laboral" className="text-blue-400 hover:text-blue-300 transition-colors">Registro Jornada</a>
          <div className="w-px h-4 bg-slate-700 hidden sm:block"></div>
          <a href="#aviso-legal" className="hover:text-white transition-colors">{FOOTER_COPY.legal}</a>
          <a href="#politica-privacidad" className="hover:text-white transition-colors">{FOOTER_COPY.privacy}</a>
          <a href="#politica-cookies" className="hover:text-white transition-colors">{FOOTER_COPY.cookies}</a>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;