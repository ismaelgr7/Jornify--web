import React from 'react';
import Section from './Section';

const LegalStrip: React.FC = () => {
  return (
    <div className="bg-blue-50 border-y border-blue-100">
      <Section className="py-8" containerClass="text-center">
        <p className="text-blue-900 font-medium">
          <span className="font-bold">Nota importante:</span> El incumplimiento del registro horario conlleva sanciones de hasta 6.250€. 
          <span className="block sm:inline sm:ml-2 text-blue-700 underline cursor-pointer">Ver normativa BOE</span>
        </p>
      </Section>
    </div>
  );
};

export default LegalStrip;