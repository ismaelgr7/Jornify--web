import React from 'react';
import Section from './Section';
import { Smartphone, Share, MoreVertical, ExternalLink } from 'lucide-react';
import { APP_URL } from '../constants';

const InstallPWA: React.FC = () => {
    return (
        <Section id="instalar-app" className="py-24 bg-slate-950 overflow-hidden relative border-y border-white/5">
            {/* SaaS Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[100px] opacity-10 -ml-40 -mb-40"></div>

            <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                <div className="lg:w-1/2 text-white">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full text-sm font-black mb-8 backdrop-blur-md border border-blue-500/20 text-blue-400">
                        <Smartphone size={16} />
                        TECNOLOGÍA PWA
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-[1.05]">
                        La App que <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">vuela en tu móvil</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium max-w-xl">
                        Olvida las descargas lentas. Jornify se instala en <span className="text-white">segundos</span> y funciona como una app nativa, pero sin ocupar memoria.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <button
                            onClick={() => window.open(APP_URL, '_blank')}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-3 group"
                        >
                            <ExternalLink size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Acceder a la Aplicación
                        </button>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-sm font-black text-blue-400 uppercase tracking-[0.2em] mb-4">¿Cómo instalarla en tu móvil?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/5 p-8 rounded-[2.5rem] border-2 border-white/5 hover:border-blue-500/30 transition-all group/card">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center font-black text-sm group-hover/card:bg-blue-600 group-hover/card:text-white transition-colors">iOS</div>
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Paso a paso</span>
                                </div>
                                <p className="text-lg font-bold text-slate-200 leading-snug">
                                    Pulsa <span className="text-blue-400">Compartir</span> <Share size={18} className="inline-block mx-1" /> <br />
                                    y selecciona <span className="text-white underline underline-offset-8 decoration-blue-500 decoration-2">"Añadir a pantalla de inicio"</span>.
                                </p>
                            </div>
                            <div className="bg-white/5 p-8 rounded-[2.5rem] border-2 border-white/5 hover:border-blue-500/30 transition-all group/card">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center font-black text-sm group-hover/card:bg-blue-600 group-hover/card:text-white transition-colors">AND</div>
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Paso a paso</span>
                                </div>
                                <p className="text-lg font-bold text-slate-200 leading-snug">
                                    Pulsa los <span className="text-blue-400">tres puntos</span> <MoreVertical size={18} className="inline-block mx-1" /> <br />
                                    y selecciona <span className="text-white underline underline-offset-8 decoration-blue-500 decoration-2">"Instalar aplicación"</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-[120px] opacity-10 animate-pulse"></div>
                    <div className="relative z-10 p-4 md:p-8">
                        <img
                            src="/assets/jornify-mobile.png"
                            alt="Jornify App Mockup"
                            className="w-full max-w-[420px] mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] floating-animation"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default InstallPWA;
