export const translations = {
  es: {
    changeLang: "🇺🇸 EN",
    // Navbar / General
    navHome: "Inicio",
    navAbout: "Acerca de Mí",
    navStack: "Stack Tecnológico",
    navProjects: "Proyectos",
    navContact: "Contacto",
    
    // Home
    heroGreeting: "¡Hola! Mi nombre es",
    heroRole: "Desarrollador de Software",
    heroLinkedIn: "Visita mi LinkedIn",
    valueProposition: "Especialista en **digitalización de procesos** y arquitecturas escalables con **Laravel y React**.",
    
    // Acerca de mi
    aboutTitle: "Acerca de Mí",
    aboutP1: "Soy Johan Jael López Reyes, con una Ingeniería en Gestión y Creación de Software con experiencia práctica en el ciclo completo de desarrollo (Full-Stack).",
    aboutP2: "Me especializo en desarrollar soluciones escalables utilizando JavaScript, Python y PHP, o frameworks como Laravel, Django o React. Mi enfoque principal es optimizar procesos de negocio mediante software moderno, como lo hice al digitalizar la gestión de formatos veterinarios para IMPA (Instituto Municipal de Protección Animal).",
    aboutP3: "Cuento con experiencia reparando errores críticos en sistemas legacy y optimizando bases de datos MySQL en entornos del sector médico. Mi meta es siempre aportar valor técnico y eficiencia a cada proyecto.",

    //stack
    stackTitle: "Stack Tecnológico",
    catLanguages: "Lenguajes",
    catFrameworks: "Frameworks / Librerías",
    catTools: "Herramientas",
    catSecurity: "Seguridad",
    catAdministration: "Administracion",
    catCloudHosting : "Nube y Hosting",

    // Proyectos (Works)
    projectsTitle: "Proyectos & Experiencia",
    viewDetails: "Ver Detalles",
    closeProject: "Cerrar Expediente",
    projectsData: [
      {
        title: "Hardening & Reingeniería - Corporación Azul",
        company: "Corporación Azul (Sector Construcción)",
        description: "Reconstrucción y blindaje de infraestructura web tras brecha de seguridad.",
        tech: ["WordPress", "PHP", "Hardening", "SEO Técnico", "Leaflet.js"],
        link: "#", 
        img: "/corp_azul.jpeg",
        images: ["/corp_azul.png", "/azul_lighthouse.png"], 
        details: [
          "Recuperación forense de activos digitales y eliminación de inyecciones de malware.",
          "Hardening de servidor (.htaccess) y core para mitigación de ataques XSS y Clickjacking.",
          "Desarrollo de motor de geolocalización 'Privacy-by-Design' con Leaflet.js.",
          "Optimización de Core Web Vitals alcanzando un Performance de 90+ en Lighthouse.",
          "Implementación de arquitectura de información semántica para SEO y accesibilidad."
        ]
      },
      {
        title: "Gestión de Activos - PIHCSA",
        company: "PIHCSA - Sector Médico",
        description: "Sistema para el control y auditoría de activos tecnológicos.",
        tech: ["PHP", "MySQL", "Laravel", "Linux"],
        link: "https://github.com/johanUtm04/gestion_activos_pihcsa",
        notion: "https://www.notion.so/Documentacion-Tecnica-2c9bfd20d338806bac33ee7dbc6ab714?source=copy_link", 
        img: "/pihcsa.jpeg",
        images: ["/pihcsa1.webp", "/pihcsa2.webp", "/pihcsa3.webp", "/pihcsa4.webp"],
        details: [
        "Arquitectura MVC con Laravel para escalabilidad.",
        "Módulo de auditoría para registro de movimientos de Activos.",
        "Interfaz optimizada para personal de sistemas.",
        "Despliegue en servidor local bajo entorno Linux."
        ]
    },
    {
    title: "VetFormat - IMPA",
    company: "IMPA (Freelance)",
    description: "Digitalización de formatos veterinarios municipales.",
    tech: ["PHP", "MySQL", "Laravel", "PDF Engine"],
    link: "https://github.com/johanUtm04/VetFormat-IMPA",
    img: "/impa.jpeg",
    details: [
      "Migración de procesos basados en Excel a base de datos relacional.",
      "Generación automatizada de certificados y formatos PDF.",
      "Sistema de roles (Administrador / Veterinario).",
      "Validación de datos para evitar errores en registros animales."
    ]
  },
  {
    title: "Infraestructura y Soporte",
    company: "Intecfrac - Soporte a Tiendas García",
    description: "Implementación de servidores y diagnóstico de redes en sitio.",
    tech: ["Servidores SR250", "Redes", "Hardware", "Soporte"],
    link: "#", 
    isInfra: true, 
    img: "/infrestructura.jpeg",
    details: [
      "Implementación de Servidor Lenovo SR250.",
      "Validación y liberación de sistemas UPS críticos.",
      "Configuración de estaciones de trabajo a Dominio corporativo.",
      "Reparación de fallas en nodos de red (Nodo 11)."
    ]
  },
  {
    title: "E-commerce 'LuisHa'",
    company: "Johan y Luis Company",
    description: "Desarrollo Full-Stack enfocado en arquitecturas modernas. (Proyecto actualmente en proceso con Luis, la información puede variar).",
    tech: ["React", "Node.js", "Infraestructura"],
    link: "https://github.com/johanUtm04/e_commerce",
    img: "/e_commerce.jpg",
    details: [
      "Integración de pasarela de pagos simulada.",
      "Manejo de estado global para carrito de compras.",
      "Diseño responsivo con enfoque Mobile-First.",
      "Colaboración técnica para optimización de tiempos de carga."
    ]
  }
    ],
    
    // Contacto
    contactTitle: "Contacto",
    contactSubtitle: "¿Tienes un proyecto en mente?",
    contactText: "Estoy listo para aplicar mis conocimientos en retos que requieran escalabilidad.",
    contactLocation: "Morelia, Michoacán",
    contactEmail: "Redactar en Gmail",
    downloadCV: "Descargar CV (PDF)",
    githubBtn: "Ver GitHub",
    footer: "© 2026 - Diseñado y Programado por Johan Jael López Reyes"
  },
  en: {
    changeLang: "🇲🇽 ES",
    // Navbar / General
    navHome: "Home",
    navAbout: "About Me",
    navStack: "Tech Stack",
    navProjects: "Projects",
    navContact: "Contact",
    
    // Home
    heroGreeting: "Hi! My name is",
    heroRole: "Software Developer",
    heroLinkedIn: "Visit my linkedIn",
    valueProposition: "Specialist in **process digitization** and scalable architectures with **Laravel and React**.",
    
    // Acerca de mi
    aboutTitle: "About Me",
    aboutP1: "I'm Johan Jael López Reyes, a Software Engineering professional with hands-on experience in the Full-Stack development lifecycle.",
    aboutP2: "I specialize in building scalable solutions using JavaScript, Python, and PHP, alongside frameworks like Laravel, Django, or React. My primary focus is optimizing business processes through modern software, as demonstrated by digitizing veterinary management workflows for IMPA (Municipal Institute of Animal Protection).",
    aboutP3: "I have experience fixing critical bugs in legacy systems and optimizing MySQL databases within the medical sector. My goal is always to provide technical value and efficiency to every project I collaborate on.",
    
    //stack
    stackTitle: "Tech Stack",
    catLanguages: "Languages",
    catFrameworks: "Frameworks / Libs",
    catTools: "Tools",
    catSecurity: "Security",
    catAdministration: "Administration",
    catCloudHosting : "Cloud & Hosting",
    
// Proyectos (Works) - Versión INGLÉS
projectsTitle: "Projects & Experience",
viewDetails: "View Details",
closeProject: "Close Case File",
  projectsData: [
  {
    title: "Hardening & Reengineering - Corporación Azul",
    company: "Corporación Azul (Construction Sector)",
    description: "Web infrastructure reconstruction and hardening following a security breach.",
    tech: ["WordPress", "PHP", "Hardening", "Technical SEO", "Leaflet.js"],
    link: "#", 
    img: "/corp_azul.png",
    images: ["/corp_azul.png", "/azul_lighthouse.png"],
    details: [
      "Forensic recovery of digital assets and removal of malicious code injections.",
      "Server-level (.htaccess) and core hardening to mitigate XSS and Clickjacking attacks.",
      "Development of a 'Privacy-by-Design' geolocation engine using Leaflet.js.",
      "Core Web Vitals optimization, achieving 90+ Performance scores on Lighthouse.",
      "Implementation of semantic information architecture for SEO and Accessibility (A11y)."
    ]
  },
  {
    title: "Asset Management - PIHCSA",
    company: "PIHCSA - Medical Sector",
    description: "System for the control and auditing of technological assets.",
    tech: ["PHP", "MySQL", "Laravel", "Linux"],
    link: "https://github.com/johanUtm04/gestion_activos_pihcsa",
    notion: "https://www.notion.so/Documentacion-Tecnica-2c9bfd20d338806bac33ee7dbc6ab714?source=copy_link", 
    img: "/pihcsa.jpeg",
    images: ["/pihcsa1.webp", "/pihcsa2.webp", "/pihcsa3.webp", "/pihcsa4.webp"],
    details: [
      "MVC Architecture with Laravel for enhanced scalability.",
      "Audit module for tracking corporate asset movements and history.",
      "Optimized UI for IT and administrative staff management.",
      "On-site server deployment under Linux environment.",
      "Currently in production and actively used by the company."
    ]
  },
  {
    title: "VetFormat - IMPA",
    company: "IMPA (Freelance)",
    description: "Digitization of municipal veterinary medical forms.",
    tech: ["PHP", "MySQL", "Laravel", "PDF Engine"],
    link: "https://github.com/johanUtm04/VetFormat-IMPA",
    img: "/impa.jpeg",
    details: [
      "Migration of Excel-based legacy processes to a relational database.",
      "Automated generation of certificates and official PDF documents.",
      "Role-based access control (Admin / Veterinarian).",
      "Data validation to prevent errors in animal medical records."
    ]
  },
  {
    title: "Infrastructure & Support",
    company: "Intecfrac - García Stores Support",
    description: "Server implementation and on-site network diagnostics.",
    tech: ["SR250 Servers", "Networking", "Hardware", "Support"],
    link: "#", 
    isInfra: true, 
    img: "/infrestructura.jpeg",
    details: [
      "On-site deployment of Lenovo ThinkSystem SR250 Server.",
      "Validation and rollout of critical UPS backup systems.",
      "Workstation configuration for corporate Domain integration.",
      "Network node troubleshooting and hardware repair (Node 11)."
    ]
  },
  {
    title: "E-commerce 'LuisHa'",
    company: "Johan & Luis Co.",
    description: "Full-Stack development focused on modern architectures. (Active project, details may evolve).",
    tech: ["React", "Node.js", "Infrastructure"],
    link: "https://github.com/johanUtm04/e_commerce",
    img: "/e_commerce.jpg",
    details: [
      "Mock payment gateway integration for checkout flow.",
      "Global state management for shopping cart functionality.",
      "Mobile-First responsive design implementation.",
      "Technical collaboration to optimize load times and performance."
    ]
  }
],

    // Contacto
    contactTitle: "Contact",
    contactSubtitle: "Have a project in mind?",
    contactText: "Ready to apply my expertise to challenges requiring scalability and performance.",
    contactLocation: "Morelia, Mexico",
    contactEmail: "Compose in Gmail",
    downloadCV: "Download Resume (PDF)",
    githubBtn: "View GitHub",
    footer: "© 2026 - Designed & Coded by Johan Jael López Reyes"
  }
};