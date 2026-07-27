export type Language = "en" | "fr" | "es" | "de";

export const LANGUAGE_OPTIONS: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
];

export const copy: Record<
  Language,
  {
    nav: Record<string, string>;
    footer: {
      quickLinks: string;
      contact: string;
      tagline: string;
      rights: string;
    };
    common: {
      apply: string;
      learnMore: string;
      viewCountry: string;
      whatsapp: string;
      callNow: string;
      searchCountry: string;
      latestUpdates: string;
      noPosts: string;
      noTestimonials: string;
    };
    page: {
      aboutTitle: string;
      aboutLead: string;
      contactTitle: string;
      contactLead: string;
      bookConsultation: string;
      generalInquiry: string;
      officeLocation: string;
      studyTitle: string;
      studyLead: string;
      blogTitle: string;
      testimonialsTitle: string;
      countryStudyIn: string;
      benefits: string;
      availablePrograms: string;
      requirements: string;
      visaProcess: string;
      universities: string;
      timeline: string;
      costs: string;
      avgTuition: string;
      avgLiving: string;
      startApplication: string;
    };
    home: {
      heroTitle: string;
      heroText: string;
      startApplication: string;
      browseDestinations: string;
      whatWeHandle: string;
      fullJourney: string;
      handleIntro: string;
      destinationsTitle: string;
      destinationsSub: string;
      institutionsTitle: string;
      institutionsSub: string;
      switchTheme: string;
      dark: string;
      light: string;
      somewhereElse: string;
      askCountry: string;
    };
  }
> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      study: "Study Abroad",
      blog: "Blog",
      testimonials: "Testimonials",
      contact: "Contact",
      admin: "Admin",
    },
    footer: {
      quickLinks: "Quick Links",
      contact: "Contact",
      tagline: "Your Trusted Partner for Global Travel & Study Abroad",
      rights: "All rights reserved.",
    },
    common: {
      apply: "Apply",
      learnMore: "Learn More",
      viewCountry: "View Country",
      whatsapp: "WhatsApp",
      callNow: "Call Now",
      searchCountry: "Search country",
      latestUpdates: "Latest Travel & Study Updates",
      noPosts: "No posts yet. Admin can create posts from the dashboard.",
      noTestimonials: "No testimonials published yet.",
    },
    page: {
      aboutTitle: "Your Trusted Partner for Global Travel & Study Abroad",
      aboutLead:
        "Headquartered in Douala, Cameroon, Grace Travel Consultancy helps students, professionals, families, and businesses travel confidently.",
      contactTitle: "Contact Grace Travel Consultancy",
      contactLead: "We are available for student applications, visa assistance, and travel support.",
      bookConsultation: "Book Consultation",
      generalInquiry: "General Inquiry",
      officeLocation: "Office Location",
      studyTitle: "Study Abroad Destinations",
      studyLead: "Choose your destination and start your application journey today.",
      blogTitle: "Latest Travel & Study Updates",
      testimonialsTitle: "Client Success Stories",
      countryStudyIn: "Study in",
      benefits: "Benefits",
      availablePrograms: "Available Programs",
      requirements: "Requirements",
      visaProcess: "Visa Process",
      universities: "Universities",
      timeline: "Application Timeline",
      costs: "Costs",
      avgTuition: "Average Tuition",
      avgLiving: "Average Living Cost",
      startApplication: "Start Your Application",
    },
    home: {
      heroTitle: "Study abroad, planned properly from day one",
      heroText:
        "We match you to a programme you can actually get into and afford, prepare the application, and stay with the file until your student visa is in your passport.",
      startApplication: "Start my application",
      browseDestinations: "Browse destinations",
      whatWeHandle: "What we handle",
      fullJourney: "The full journey, not just the paperwork",
      handleIntro:
        "Most students come to us with a country in mind and little idea of what it actually takes. We work backwards from your grades, budget and timeline to a plan that holds up.",
      destinationsTitle: "Destinations",
      destinationsSub: "Study destinations, and what makes each one worth considering",
      institutionsTitle: "Some of the institutions we place students with",
      institutionsSub:
        "Applying through a partner channel means your file reaches an admissions team that already knows us, which usually means faster answers and fewer surprises.",
      switchTheme: "Switch theme",
      dark: "Dark",
      light: "Light",
      somewhereElse: "Somewhere else?",
      askCountry: "Ask about another country",
    },
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", study: "Études", blog: "Blog", testimonials: "Témoignages", contact: "Contact", admin: "Admin" },
    footer: { quickLinks: "Liens rapides", contact: "Contact", tagline: "Votre partenaire de confiance pour voyager et étudier à l'étranger", rights: "Tous droits réservés." },
    common: {
      apply: "Postuler",
      learnMore: "En savoir plus",
      viewCountry: "Voir le pays",
      whatsapp: "WhatsApp",
      callNow: "Appeler",
      searchCountry: "Rechercher un pays",
      latestUpdates: "Dernières actualités voyages & études",
      noPosts: "Pas encore d'articles.",
      noTestimonials: "Aucun témoignage publié.",
    },
    page: {
      aboutTitle: "Votre partenaire de confiance pour les études et voyages internationaux",
      aboutLead: "Basée à Douala, Grace Travel Consultancy accompagne étudiants, professionnels et familles en toute confiance.",
      contactTitle: "Contacter Grace Travel Consultancy",
      contactLead: "Nous sommes disponibles pour les candidatures, visas et assistance voyage.",
      bookConsultation: "Réserver une consultation",
      generalInquiry: "Demande générale",
      officeLocation: "Localisation",
      studyTitle: "Destinations d'études",
      studyLead: "Choisissez votre destination et lancez votre candidature.",
      blogTitle: "Dernières actualités voyages & études",
      testimonialsTitle: "Témoignages de réussite",
      countryStudyIn: "Étudier en",
      benefits: "Avantages",
      availablePrograms: "Programmes disponibles",
      requirements: "Conditions",
      visaProcess: "Processus visa",
      universities: "Universités",
      timeline: "Calendrier",
      costs: "Coûts",
      avgTuition: "Frais moyens",
      avgLiving: "Coût de vie moyen",
      startApplication: "Commencer votre candidature",
    },
    home: {
      heroTitle: "Étudier à l'étranger, bien planifié dès le premier jour",
      heroText: "Nous vous orientons vers un programme réaliste selon votre budget et votre profil et vous accompagnons jusqu'au visa.",
      startApplication: "Commencer ma candidature",
      browseDestinations: "Voir les destinations",
      whatWeHandle: "Ce que nous prenons en charge",
      fullJourney: "Le parcours complet, pas seulement les documents",
      handleIntro: "Nous construisons un plan solide à partir de vos notes, budget et calendrier.",
      destinationsTitle: "Destinations",
      destinationsSub: "Les destinations d'études et leurs avantages",
      institutionsTitle: "Quelques établissements partenaires",
      institutionsSub: "Notre canal partenaire permet souvent des retours plus rapides.",
      switchTheme: "Changer le thème",
      dark: "Sombre",
      light: "Clair",
      somewhereElse: "Une autre destination ?",
      askCountry: "Demander un autre pays",
    },
  },
  es: {
    nav: { home: "Inicio", about: "Nosotros", study: "Estudios", blog: "Blog", testimonials: "Testimonios", contact: "Contacto", admin: "Admin" },
    footer: { quickLinks: "Enlaces rápidos", contact: "Contacto", tagline: "Tu socio de confianza para viajar y estudiar en el extranjero", rights: "Todos los derechos reservados." },
    common: {
      apply: "Aplicar",
      learnMore: "Más información",
      viewCountry: "Ver país",
      whatsapp: "WhatsApp",
      callNow: "Llamar",
      searchCountry: "Buscar país",
      latestUpdates: "Últimas novedades de viajes y estudios",
      noPosts: "Aún no hay publicaciones.",
      noTestimonials: "No hay testimonios publicados.",
    },
    page: {
      aboutTitle: "Tu socio de confianza para viajes y estudios internacionales",
      aboutLead: "Desde Douala, acompañamos a estudiantes, profesionales y familias con asesoría experta.",
      contactTitle: "Contactar a Grace Travel Consultancy",
      contactLead: "Estamos disponibles para solicitudes, visas y apoyo de viaje.",
      bookConsultation: "Reservar consulta",
      generalInquiry: "Consulta general",
      officeLocation: "Ubicación",
      studyTitle: "Destinos de estudio",
      studyLead: "Elige tu destino y comienza tu proceso.",
      blogTitle: "Últimas novedades de viajes y estudios",
      testimonialsTitle: "Historias de éxito",
      countryStudyIn: "Estudiar en",
      benefits: "Beneficios",
      availablePrograms: "Programas disponibles",
      requirements: "Requisitos",
      visaProcess: "Proceso de visa",
      universities: "Universidades",
      timeline: "Cronograma",
      costs: "Costos",
      avgTuition: "Matrícula promedio",
      avgLiving: "Costo de vida promedio",
      startApplication: "Comenzar solicitud",
    },
    home: {
      heroTitle: "Estudia en el extranjero, bien planificado desde el primer día",
      heroText: "Te guiamos hacia un programa realista, preparamos tu solicitud y te acompañamos hasta la visa.",
      startApplication: "Iniciar solicitud",
      browseDestinations: "Ver destinos",
      whatWeHandle: "Qué gestionamos",
      fullJourney: "El proceso completo, no solo papeleo",
      handleIntro: "Creamos una estrategia sólida basada en tus notas, presupuesto y plazos.",
      destinationsTitle: "Destinos",
      destinationsSub: "Destinos de estudio y por qué elegirlos",
      institutionsTitle: "Instituciones con las que trabajamos",
      institutionsSub: "Nuestro canal de socios acelera respuestas y reduce sorpresas.",
      switchTheme: "Cambiar tema",
      dark: "Oscuro",
      light: "Claro",
      somewhereElse: "¿Otro destino?",
      askCountry: "Consultar otro país",
    },
  },
  de: {
    nav: { home: "Start", about: "Über uns", study: "Studium", blog: "Blog", testimonials: "Erfahrungen", contact: "Kontakt", admin: "Admin" },
    footer: { quickLinks: "Schnelllinks", contact: "Kontakt", tagline: "Ihr vertrauensvoller Partner für Reisen und Auslandsstudium", rights: "Alle Rechte vorbehalten." },
    common: {
      apply: "Bewerben",
      learnMore: "Mehr erfahren",
      viewCountry: "Land ansehen",
      whatsapp: "WhatsApp",
      callNow: "Jetzt anrufen",
      searchCountry: "Land suchen",
      latestUpdates: "Neueste Reise- und Studienupdates",
      noPosts: "Noch keine Beiträge.",
      noTestimonials: "Noch keine veröffentlichten Erfahrungsberichte.",
    },
    page: {
      aboutTitle: "Ihr vertrauensvoller Partner für globale Reisen und Auslandsstudium",
      aboutLead: "Mit Sitz in Douala begleiten wir Studierende, Fachkräfte und Familien zuverlässig.",
      contactTitle: "Grace Travel Consultancy kontaktieren",
      contactLead: "Wir unterstützen bei Bewerbungen, Visa und Reisevorbereitung.",
      bookConsultation: "Beratung buchen",
      generalInquiry: "Allgemeine Anfrage",
      officeLocation: "Standort",
      studyTitle: "Studienziele",
      studyLead: "Wählen Sie Ihr Ziel und starten Sie Ihre Bewerbung.",
      blogTitle: "Neueste Reise- und Studienupdates",
      testimonialsTitle: "Erfolgsgeschichten",
      countryStudyIn: "Studieren in",
      benefits: "Vorteile",
      availablePrograms: "Verfügbare Programme",
      requirements: "Voraussetzungen",
      visaProcess: "Visaprozess",
      universities: "Universitäten",
      timeline: "Zeitplan",
      costs: "Kosten",
      avgTuition: "Durchschnittliche Studiengebühren",
      avgLiving: "Durchschnittliche Lebenshaltungskosten",
      startApplication: "Bewerbung starten",
    },
    home: {
      heroTitle: "Auslandsstudium, von Anfang an richtig geplant",
      heroText: "Wir finden ein realistisches Programm, bereiten die Bewerbung vor und begleiten Sie bis zum Visum.",
      startApplication: "Bewerbung starten",
      browseDestinations: "Ziele ansehen",
      whatWeHandle: "Unsere Leistungen",
      fullJourney: "Der gesamte Weg, nicht nur Unterlagen",
      handleIntro: "Wir erstellen eine tragfähige Strategie auf Basis von Noten, Budget und Zeitplan.",
      destinationsTitle: "Destinationen",
      destinationsSub: "Studienziele und ihre Vorteile",
      institutionsTitle: "Einige unserer Partnerinstitutionen",
      institutionsSub: "Partnerkanäle sorgen oft für schnellere Rückmeldungen.",
      switchTheme: "Thema wechseln",
      dark: "Dunkel",
      light: "Hell",
      somewhereElse: "Anderes Zielland?",
      askCountry: "Anderes Land anfragen",
    },
  },
};
