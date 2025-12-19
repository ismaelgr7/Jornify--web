import React, { useState } from 'react';
import { FAQS } from '../constants';
import Section from './Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-white py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Preguntas frecuentes
        </h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 bg-white text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;