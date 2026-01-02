import { NavItem, Feature, FAQItem, PricingDetail } from './types';

export const APP_NAME = "Jornify";
export const APP_URL = "https://jornify.vercel.app";

export const NAV_ITEMS: NavItem[] = [
  { label: "Ventajas", href: "#ventajas" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Asesorías", href: "#asesorias" },
  { label: "Precios", href: "#precios" },
  { label: "Preguntas Frecuentes", href: "#faq" },
];

export const HERO_COPY = {
  h1: "Control Horario para Hostelería y PYMES",
  subheadline: "La solución de registro de jornada más sencilla para bares, restaurantes y pequeños negocios.",
  description: "Cumple con la ley sin papeleo. Diseñado para equipos dinámicos que no tienen tiempo que perder con herramientas complejas.",
  ctaPrimary: "Empezar a Fichar",
  ctaSecondary: "Ver Precios",
  trust: "Cumple con el Registro de Jornada Obligatorio (RD 8/2019)"
};

export const FEATURES: Feature[] = [
  {
    title: "Cumplimiento Legal 100%",
    description: "Genera informes listos para la Inspección de Trabajo con un solo clic. Adaptable a turnos partidos y horarios complejos de hostelería.",
    iconName: "ShieldCheck"
  },
  {
    title: "Fichaje desde el Móvil",
    description: "Sin máquinas de fichar costosas. Tus empleados fichan desde su propio smartphone al llegar al local, con geolocalización opcional.",
    iconName: "Smartphone"
  },
  {
    title: "Control en Tiempo Real",
    description: "Visualiza al instante quién ha entrado a trabajar y cuántas horas lleva de jornada. Ideal para gestionar cambios de turno sobre la marcha.",
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
  headline: "Tus clientes digitalizados, tus gestiones simplificadas.",
  description: "Deja de perseguir hojas de firmas borrosas o incompletas de tus clientes de hostelería. Jornify genera informes PDF digitales perfectos, listos para procesar la nómina cada mes.",
  cta: "Solicitar Código de Asesoría"
};

export const PRICING_COPY: PricingDetail = {
  price: "2,50€",
  unit: "empleado",
  period: "/ mes (IVA incluido)",
  features: [
    "Registro de jornada legal (RD 8/2019)",
    "Informes PDF listos para inspección",
    "Recordatorios automáticos (Aviso Salida)",
    "Firma digital inalterable",
    "Gestión de pausas y descansos",
    "Soporte prioritario incluido"
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
    answer: "Ninguno. El precio es transparente: solo 2,50€ por empleado al mes, IVA incluido. Una inversión mínima para garantizar la tranquilidad legal de tu empresa y evitar sanciones que pueden llegar hasta los 6.000€."
  }
];

export const FOOTER_COPY = {
  legal: "Aviso Legal",
  privacy: "Política de Privacidad",
  cookies: "Política de Cookies",
  copyright: `© ${new Date().getFullYear()} Jornify. Todos los derechos reservados.`
};