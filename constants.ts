import { NavItem, Feature, FAQItem, PricingDetail } from './types';

export const APP_NAME = "Jornify";

export const NAV_ITEMS: NavItem[] = [
  { label: "Ventajas", href: "#ventajas" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Asesorías", href: "#asesorias" },
  { label: "Precios", href: "#precios" },
  { label: "Preguntas Frecuentes", href: "#faq" },
];

export const HERO_COPY = {
  h1: "Control Horario para Asesorías y PYMES en España",
  subheadline: "Registro de jornada laboral que cumple la ley, diseñado para la PYME española.",
  description: "La solución definitiva para empresas de 5 a 50 empleados. Sin instalaciones complejas, sin permanencia y recomendado por expertos laborales.",
  ctaPrimary: "Solicitar Demo",
  ctaSecondary: "Ver Precios",
  trust: "Cumple rigurosamente con el Real Decreto-ley 8/2019"
};

export const FEATURES: Feature[] = [
  {
    title: "Cumplimiento Legal Garantizado",
    description: "Genera informes listos para la Inspección de Trabajo con un solo clic. Adaptado al Estatuto de los Trabajadores y normativa vigente en España.",
    iconName: "ShieldCheck"
  },
  {
    title: "100% Web y Móvil",
    description: "No requiere instalar servidores ni hardware costoso. Accesible desde cualquier navegador o smartphone para empleados en oficina o teletrabajo.",
    iconName: "Smartphone"
  },
  {
    title: "Gestión en Tiempo Real",
    description: "Visualiza al instante quién está trabajando y cuántas horas lleva cada empleado. Control total desde el panel de administración.",
    iconName: "Monitor"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Da de alta tu empresa",
    description: "Configura horarios y añade a tus empleados importando un Excel o uno a uno. Te llevará menos de 5 minutos."
  },
  {
    step: "02",
    title: "Los empleados fichan",
    description: "Cada trabajador recibe acceso a la webapp para fichar desde su móvil u ordenador, con geolocalización opcional."
  },
  {
    step: "03",
    title: "Genera informes legales",
    description: "A final de mes, descarga el informe oficial en PDF firmado digitalmente, listo ante cualquier inspección."
  }
];

export const CONSULTANCY_COPY = {
  title: "Para Asesorías Laborales",
  headline: "Facilita la vida a tus clientes y evita sanciones.",
  description: "Jornify es la herramienta que recomendamos a los gestores laborales. Ofrece a tus clientes una solución robusta, evita errores en los registros manuales y gestiona múltiples empresas desde un panel de partner.",
  cta: "Contactar para Partner Program"
};

export const PRICING_COPY: PricingDetail = {
  price: "30€",
  unit: "empleado",
  period: "/ año (IVA incluido)",
  features: [
    "Registro de entradas y salidas",
    "Generación de informes PDF por empleado",
    "Control de horas en tiempo real",
    "Soporte técnico por email",
    "Sin límite de registros",
    "Actualizaciones legales incluidas"
  ]
};

export const FAQS: FAQItem[] = [
  {
    question: "¿Es válida la firma digital ante una inspección?",
    answer: "Sí. Jornify registra la huella digital (IP, dispositivo y hora exacta) de cada fichaje, garantizando la veracidad e inalterabilidad de los datos según exige el Real Decreto-ley 8/2019."
  },
  {
    question: "¿Necesito instalar algo en los ordenadores de la empresa?",
    answer: "No. Jornify es una solución 100% en la nube. Se accede a través de navegador web o móvil. No hay costes de mantenimiento de servidores ni instalaciones locales."
  },
  {
    question: "¿Qué pasa si un empleado se olvida de fichar?",
    answer: "El administrador puede corregir el registro manualmente, dejando una traza de la modificación como exige la ley. El sistema también envía recordatorios automáticos."
  },
  {
    question: "¿Hay costes ocultos o de alta?",
    answer: "Ninguno. El precio es único: 30€ por empleado al año, IVA incluido. Incluye todas las funcionalidades, almacenamiento de datos durante 4 años y soporte."
  }
];

export const FOOTER_COPY = {
  legal: "Aviso Legal",
  privacy: "Política de Privacidad",
  cookies: "Política de Cookies",
  copyright: `© ${new Date().getFullYear()} Jornify. Todos los derechos reservados.`
};