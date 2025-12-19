import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import Button from './Button';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, title = "Solicitar Información" }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        if (!isSupabaseConfigured) {
            setStatus('error');
            setErrorMessage('La configuración de base de datos no está completa. Revisa el archivo .env');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('leads')
                .insert([{ email, created_at: new Date().toISOString() }]);

            if (error) throw error;

            setStatus('success');
            setEmail('');
            // Auto close after 3 seconds on success
            setTimeout(() => {
                onClose();
                setStatus('idle');
            }, 3000);

        } catch (err: any) {
            console.error('Error submitting form:', err);
            setStatus('error');
            setErrorMessage(err.message || 'Ha ocurrido un error al guardar tu contacto.');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 transform transition-all scale-100">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-600">
                        Déjanos tu correo y nos pondremos en contacto contigo lo antes posible.
                    </p>
                </div>

                {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">¡Recibido!</h4>
                        <p className="text-slate-600">
                            Gracias por tu interés. Te contactaremos pronto.
                        </p>
                        <Button
                            variant="outline"
                            className="mt-6"
                            onClick={onClose}
                        >
                            Cerrar
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="tu@empresa.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'loading'}
                            />
                        </div>

                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                                <AlertCircle size={16} />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <Button
                            variant="primary"
                            fullWidth
                            type="submit"
                            disabled={status === 'loading'}
                            className="py-3 text-base flex justify-center items-center gap-2"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                'Enviar Solicitud'
                            )}
                        </Button>

                        <p className="text-xs text-center text-slate-400 mt-4">
                            Al enviar este formulario aceptas nuestra política de privacidad.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactModal;
