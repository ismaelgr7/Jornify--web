import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LegalStrip from './components/LegalStrip';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Consultancies from './components/Consultancies';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SEOControlHorario from './components/SEOControlHorario';
import SEORegistroJornada from './components/SEORegistroJornada';
import SEOControlHorarioPymes from './components/SEOControlHorarioPymes';
import SEOAsesoriasLaborales from './components/SEOAsesoriasLaborales';
import SEOSoftwareControlHorario from './components/SEOSoftwareControlHorario';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiesPolicy from './components/CookiesPolicy';
import ContactModal from './components/ContactModal';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // Scroll al inicio al cambiar de página SEO
      const seoHashes = [
        '#guia-control-horario',
        '#registro-jornada-laboral',
        '#control-horario-pymes',
        '#control-horario-asesorias',
        '#control-horario-asesorias',
        '#software-control-horario',
        '#aviso-legal',
        '#politica-privacidad',
        '#politica-cookies'
      ];
      if (seoHashes.includes(window.location.hash)) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isSEOPageControl = currentHash === '#guia-control-horario';
  const isSEOPageRegistro = currentHash === '#registro-jornada-laboral';
  const isSEOPagePymes = currentHash === '#control-horario-pymes';
  const isSEOPageAsesorias = currentHash === '#control-horario-asesorias';
  const isSEOPageSoftware = currentHash === '#software-control-horario';
  const isLegalNotice = currentHash === '#aviso-legal';
  const isPrivacyPolicy = currentHash === '#politica-privacidad';
  const isCookiesPolicy = currentHash === '#politica-cookies';
  const isSpecialPage = isSEOPageControl || isSEOPageRegistro || isSEOPagePymes || isSEOPageAsesorias || isSEOPageSoftware || isLegalNotice || isPrivacyPolicy || isCookiesPolicy;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header onContactClick={() => setIsContactModalOpen(true)} />
      <main>
        {isSEOPageControl && <SEOControlHorario />}
        {isSEOPageRegistro && <SEORegistroJornada />}
        {isSEOPagePymes && <SEOControlHorarioPymes />}
        {isSEOPageAsesorias && <SEOAsesoriasLaborales />}
        {isSEOPageSoftware && <SEOSoftwareControlHorario />}
        {isLegalNotice && <LegalNotice />}
        {isPrivacyPolicy && <PrivacyPolicy />}
        {isCookiesPolicy && <CookiesPolicy />}
        {!isSpecialPage && (
          <>
            <Hero onContactClick={() => setIsContactModalOpen(true)} />
            <LegalStrip />
            <Features />
            <HowItWorks />
            <Consultancies onContactClick={() => setIsContactModalOpen(true)} />
            <Pricing />
            <FAQ />
          </>
        )}
      </main>
      <Footer />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default App;