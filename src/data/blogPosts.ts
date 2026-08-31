export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "GEO & Inteligencia Artificial" | "Producción Audiovisual" | "Arquitectura & Rendimiento";
  categorySlug: "ia-geo" | "audiovisual" | "arquitectura";
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  coverGradient: string;
  tags: string[];
  keywords: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      subheading?: string;
      body: string[];
      highlightBox?: {
        title: string;
        text: string;
      };
      quote?: {
        text: string;
        author: string;
      };
    }[];
    conclusion: string;
    faqs?: {
      q: string;
      a: string;
    }[];
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-posicionar-tu-negocio-en-chatgpt-y-claude-guia-geo",
    title: "Cómo posicionar tu negocio en ChatGPT, Claude y Perplexity: Guía completa de GEO (Generative Engine Optimization)",
    subtitle: "El SEO tradicional ya no basta. Descubre cómo los modelos LLM eligen las empresas que recomiendan y cómo estructurar tu presencia digital.",
    excerpt: "Los usuarios ya no buscan solo en Google: preguntan directamente a la Inteligencia Artificial. Aprende a aplicar GEO (Generative Engine Optimization) para convertir tu marca en la respuesta recomendada por ChatGPT, Claude y Gemini.",
    date: "28 de Agosto, 2026",
    readTime: "5 min de lectura",
    category: "GEO & Inteligencia Artificial",
    categorySlug: "ia-geo",
    author: {
      name: "Socio Técnico",
      role: "Especialista en Arquitectura Web & GEO en Parpell",
    },
    coverGradient: "from-[#2A0845] via-[#6441A5] to-[#120610]",
    tags: ["GEO", "Inteligencia Artificial", "ChatGPT", "Claude", "SEO Semántico", "Schema Markup"],
    keywords: [
      "posicionamiento en IA",
      "GEO Generative Engine Optimization",
      "como aparecer en ChatGPT",
      "recomendar negocio en Inteligencia Artificial",
      "SEO para Claude y Perplexity",
      "optimización de huella digital",
      "datos estructurados schema markup",
    ],
    content: {
      intro:
        "Cuando un cliente potencial abre ChatGPT, Claude o Perplexity y escribe: «¿Cuál es la mejor clínica de medicina estética en Madrid?» o «Recomiéndame una empresa de software para optimizar mis ventas», el modelo no devuelve diez enlaces azules. Devuelve una sola respuesta con dos o tres recomendaciones directas. Si tu negocio no está optimizado para los motores generativos (GEO), sencillamente no existes para el nuevo consumidor.",
      sections: [
        {
          heading: "1. ¿Qué es GEO (Generative Engine Optimization) y en qué se diferencia del SEO?",
          body: [
            "Durante más de dos décadas, el SEO tradicional se ha basado en palabras clave exactas, densidad de texto y enlaces entrantes (backlinks). Sin embargo, los modelos de lenguaje a gran escala (LLMs) procesan el conocimiento mediante redes neuronales semánticas y grafos de entidades.",
            "GEO (Generative Engine Optimization) es la disciplina técnica y estratégica que optimiza la huella digital completa de una empresa (código fuente, datos estructurados, citas de autoridad, coherencia de marca y contexto semántico) para que los algoritmos de IA reconozcan tu negocio como la opción más fiable y con mayor autoridad en tu sector.",
          ],
          highlightBox: {
            title: "Dato Clave de Tráfico",
            text: "Más del 38% de las búsquedas comerciales de alta consideración o ticket medio-alto ya se inician o contrastan en asistentes de IA antes de realizar una llamada o compra.",
          },
        },
        {
          heading: "2. Los 3 Pilares Técnicos para que la Inteligencia Artificial te Recomiende",
          body: [
            "Para que un modelo de IA decida recomendar tu negocio por encima de la competencia, evalúa tres factores simultáneos:",
            "A) Arquitectura Semántica y Schema Markup: No basta con tener un HTML básico. Tu web debe incorporar datos estructurados JSON-LD exhaustivos (LocalBusiness, Organization, Service, Review y FAQPage) que definan con precisión milimétrica quién eres, qué ofreces, tus precios y tu ubicación geográfica.",
            "B) Coherencia Multicanal de la Entidad: Los LLMs rastrean la web buscando consistencia. Si el nombre de tu empresa, teléfono, dirección y descripción coinciden perfectamente entre tu web, Google Maps, registros oficiales y menciones en medios, el nivel de confianza algorítmica se dispara.",
            "C) Densidad de Citación Contextual: Los modelos de IA valoran las opiniones reales de clientes, casos de éxito contrastados y contenidos audiovisuales legítimos que demuestren que detrás de la web hay una operativa real y solvente.",
          ],
          quote: {
            text: "La Inteligencia Artificial no lee páginas webs como un humano; busca patrones de certeza, reputación estructurada y ausencia de ambigüedad técnica.",
            author: "Área de Ingeniería & Sistemas en Parpell",
          },
        },
        {
          heading: "3. Cómo estructurar tu web hoy para ganar la primera posición en IA",
          body: [
            "El primer paso es auditar tu huella digital actual: ¿Qué responde ChatGPT cuando le preguntas por tu sector en tu ciudad? Si recomienda a un competidor, se debe a que su grafo de conocimiento está mejor indexado.",
            "Para revertirlo, necesitas: 1) Eliminar plantillas sobrecargadas que ocultan el contenido a los rastreadores automáticos; 2) Publicar contenido técnico y de autoridad que resuelva preguntas transaccionales concretas; 3) Conectar tus fichas de Google Business Profile y canales de vídeo con tu dominio web.",
          ],
        },
      ],
      conclusion:
        "El posicionamiento en IA no es el futuro: es el estándar actual que separa a las empresas que reciben llamadas de prospectos cualificados de las que dependen de publicidad cada vez más cara. En Parpell integramos la optimización GEO desde la primera línea de código de tu web.",
      faqs: [
        {
          q: "¿Cuánto tiempo tarda en notarse el posicionamiento en ChatGPT o Claude?",
          a: "A diferencia del SEO tradicional que requiere 6 a 12 meses, la indexación semántica en motores de IA con búsqueda en tiempo real (SearchGPT, Perplexity, Gemini) puede reflejarse en un plazo de 4 a 8 semanas tras implementar Schema Markup y coherencia de entidad.",
        },
        {
          q: "¿El GEO sustituye al SEO tradicional de Google?",
          a: "No lo sustituye, lo potencia. Las webs optimizadas para GEO consiguen simultáneamente las mejores posiciones orgánicas en Google Maps y en los resultados tradicionales de búsqueda.",
        },
      ],
    },
  },
  {
    slug: "por-que-el-video-con-camara-de-cine-multiplica-la-conversion-en-tu-web",
    title: "Por qué el vídeo grabado con cámara de cine multiplica la conversión web (y por qué las plantillas ahuyentan clientes)",
    subtitle: "La psicología del estatus y la legitimación visual: cómo convertir visitantes escépticos en clientes convencidos antes de la primera llamada.",
    excerpt: "En sectores de ticket medio y alto, la decisión de compra no es impulsiva: se basa en la confianza. Analizamos por qué el contenido audiovisual cinematográfico in situ aumenta drásticamente la tasa de conversión.",
    date: "28 de Agosto, 2026",
    readTime: "4 min de lectura",
    category: "Producción Audiovisual",
    categorySlug: "audiovisual",
    author: {
      name: "Socio Comercial & Filmmaker",
      role: "Especialista en Comunicación Audiovisual & Ventas en Parpell",
    },
    coverGradient: "from-[#4A0E17] via-[#8B1E3F] to-[#120610]",
    tags: ["Vídeo Corporativo", "Cámara de Cine", "CRO", "Conversión Web", "Ticket Alto", "Narrativa de Autor"],
    keywords: [
      "producción audiovisual para empresas",
      "vídeo corporativo de cine",
      "aumentar conversión web con vídeo",
      "vídeo marketing ticket alto",
      "filmmaker para empresas",
      "legitimación de marca audiovisual",
      "rodaje presencial cámara de cine",
    ],
    content: {
      intro:
        "Cuando un cliente entra en tu web, tarda menos de 3 segundos en formarse un juicio sobre el nivel de tu empresa. Si se encuentra con fotos de stock genéricas, vídeos grabados deprisa con un teléfono móvil o textos impersonales, asume inconscientemente que tu servicio es promedio. En cambio, cuando ve piezas audiovisuales con textura de cine, óptica anamórfica y sonido envolvente, el estatus de tu marca queda validado al instante.",
      sections: [
        {
          heading: "1. La paradoja de la confianza en productos y servicios de ticket alto",
          body: [
            "En compras de bajo valor (un par de zapatillas o una funda de móvil), el usuario no necesita demasiadas garantías. Pero en clínicas médicas, despachos profesionales, proyectos de arquitectura o servicios de alto valor, el mayor freno de venta es el miedo a equivocarse.",
            "El vídeo cinematográfico in situ cumple una función psicológica crucial: la legitimación. Muestra tus instalaciones reales, tu equipo trabajando, la precisión de tus procesos y la calidad de tus acabados. Elimina la fricción de la incertidumbre.",
          ],
          quote: {
            text: "No vendes lo que dices que haces; vendes la certeza que tu cliente siente cuando ve cómo lo haces.",
            author: "Área Audiovisual & Ventas en Parpell",
          },
        },
        {
          heading: "2. ¿Qué diferencia a un rodaje con cámara de cine de un vídeo convencional?",
          body: [
            "Muchas agencias envían a un becario con un smartphone o un estabilizador básico. La diferencia técnica y de impacto entre eso y una producción de autor radica en tres aspectos:",
            "1) Sensor de gran formato y ópticas de cine: Proporcionan una profundidad de campo orgánica, desenfoques suaves y una tridimensionalidad que el ojo humano asocia inmediatamente con calidad de televisión o cine.",
            "2) Etalonaje y Color Grading profesional: La corrección de color intencional refuerza la identidad de tu marca y transmite elegancia y pulcritud técnica.",
            "3) Diseño sonoro (Sound Design) y microfonía de estudio: El 50% de la experiencia de un vídeo es el audio. La voz limpia, sin eco de sala y con música tratada genera una experiencia inmersiva.",
          ],
          highlightBox: {
            title: "Impacto en Tasa de Conversión (CRO)",
            text: "Las páginas de aterrizaje que incorporan vídeo demostrativo con producción cinematográfica aumentan el tiempo de permanencia en página un 88% y multiplican hasta por 2,4 la tasa de envío de formularios.",
          },
        },
        {
          heading: "3. El contenido debe servir a la venta, no a los «me gusta»",
          body: [
            "Un error frecuente es crear vídeos pensados solo para conseguir reproducciones virales que no traen clientes. En Parpell unimos la preproducción cinematográfica con la psicología de ventas: cada pieza tiene un gancho inicial, desarrollo de objeciones y una llamada a la acción clara orientada a captar prospectos con capacidad de compra.",
          ],
        },
      ],
      conclusion:
        "La producción audiovisual no es un gasto estético: es la herramienta más potente para justificar precios altos, cerrar ventas con menos objeciones y posicionarte como el líder indiscutible de tu sector.",
      faqs: [
        {
          q: "¿Cuánto dura una jornada de rodaje en nuestro local?",
          a: "Normalmente planificamos jornadas intensivas de 4 a 6 horas con escaleta previa para no interrumpir tu actividad operativa y obtener material para todo el mes.",
        },
        {
          q: "¿Qué formatos de vídeo se entregan?",
          a: "Entregamos piezas maestras en resolución 4K tanto en formato vertical (Reels/TikTok/Shorts) optimizadas para móvil como en horizontal para cabeceras web y presentaciones.",
        },
      ],
    },
  },
  {
    slug: "core-web-vitals-y-arquitectura-web-la-parte-invisible-que-decide-tus-ventas",
    title: "Core Web Vitals y arquitectura web: La parte invisible del código que decide si vendes o pierdes a tu cliente",
    subtitle: "Cada 100 milisegundos de retraso reducen un 7% tus ventas. Descubre cómo la ingeniería de software a medida blindará tu captación.",
    excerpt: "Google penaliza las webs lentas y los usuarios abandonan las páginas que tardan en cargar. Analizamos por qué el código limpio y la arquitectura moderna son la inversión más rentable para tu negocio.",
    date: "28 de Agosto, 2026",
    readTime: "4 min de lectura",
    category: "Arquitectura & Rendimiento",
    categorySlug: "arquitectura",
    author: {
      name: "Socio Técnico",
      role: "Ingeniero de Software en Parpell",
    },
    coverGradient: "from-[#0F2027] via-[#203A43] to-[#120610]",
    tags: ["Core Web Vitals", "Rendimiento Web", "Next.js", "Velocidad de Carga", "Hosting Gestionado", "CRO"],
    keywords: [
      "velocidad de carga web",
      "optimizar Core Web Vitals",
      "arquitectura web a medida",
      "mantenimiento web profesional",
      "rendimiento web y conversion",
      "Next.js vs WordPress",
      "hosting de alta velocidad",
    ],
    content: {
      intro:
        "Puedes tener el mejor producto del mercado y los vídeos más espectaculares, pero si cuando un cliente hace clic en tu anuncio o enlace la web tarda 4 segundos en abrirse, más del 53% de los usuarios se marcharán antes de ver tu oferta. En la era digital, la velocidad y la solidez técnica del código no son un detalle secundario: son el cimiento sobre el que se construyen todas tus conversiones.",
      sections: [
        {
          heading: "1. ¿Qué son los Core Web Vitals y por qué le importan a Google?",
          body: [
            "Google utiliza tres métricas fundamentales para medir la experiencia de usuario real en una web (Core Web Vitals):",
            "1) LCP (Largest Contentful Paint): El tiempo que tarda en renderizarse el elemento visual principal de la pantalla. Debe ser inferior a 2,5 segundos.",
            "2) INP (Interaction to Next Paint): La rapidez con la que la web responde cuando el usuario pulsa un botón o abre un menú. Debe ser inferior a 200 ms.",
            "3) CLS (Cumulative Layout Shift): La estabilidad visual. Si los elementos saltan mientras la web termina de cargar, la experiencia es frustrante.",
          ],
          highlightBox: {
            title: "Impacto Financiero Directo",
            text: "Estudios de Google y Deloitte demuestran que reducir 0,1 segundos el tiempo de carga en webs corporativas incrementa las conversiones de contacto un 8,4%.",
          },
        },
        {
          heading: "2. El problema de las plantillas genéricas sobrecargadas",
          body: [
            "La inmensa mayoría de webs en internet están construidas sobre CMS antiguos con docenas de plugins pesados, bibliotecas javascript innecesarias y bases de datos mal optimizadas. Cada plugin añade capas de código que ralentizan la carga y generan vulnerabilidades de seguridad.",
            "En Parpell construimos arquitecturas web modernas con Next.js, renderizado estático optimizado, compresión de imágenes en formatos de última generación (WebP/AVIF) y distribución global mediante CDN. El resultado: webs que cargan de forma instantánea.",
          ],
          quote: {
            text: "Un buen código es aquel que no se nota: todo carga al instante, las animaciones fluyen a 60 fps y el usuario solo se concentra en comprar.",
            author: "Área de Ingeniería de Software en Parpell",
          },
        },
        {
          heading: "3. La tríada del mantenimiento técnico: Seguridad, Backups y Monitorización",
          body: [
            "Una web no es un folleto estático que se crea y se abandona. Requiere monitorización proactiva 24/7, certificados SSL actualizados, copias de seguridad automáticas redundantes y control de incidencias en tiempo real para asegurar que tu negocio esté siempre abierto y vendiendo.",
          ],
        },
      ],
      conclusion:
        "La optimización técnica de tu web es una palanca directa de rentabilidad: mejora tu posicionamiento en Google, reduce el coste por clic de tus anuncios y maximiza los prospectos que recibes cada mes.",
      faqs: [
        {
          q: "¿Cómo se mide la velocidad de mi web actual?",
          a: "Puedes comprobar tu puntuación oficial de forma gratuita en Google PageSpeed Insights. En nuestras auditorías analizamos además la telemetría real de usuarios en Google Search Console.",
        },
        {
          q: "¿Qué incluye el mantenimiento técnico mensual en Parpell?",
          a: "Hosting cloud de alta velocidad, certificado SSL, copias de seguridad diarias, monitorización de caídas, auditorías de velocidad y horas de soporte directo con el socio de software.",
        },
      ],
    },
  },
  {
    slug: "mejores-agencias-posicionamiento-ia-geo-espana",
    title: "Las mejores agencias de Posicionamiento en IA (GEO) en España: Guía y Comparativa 2026",
    subtitle: "Analizamos cómo elegir el partner adecuado para que ChatGPT, Claude y Perplexity recomienden tu empresa por encima de tus competidores.",
    excerpt: "Descubre cuáles son los criterios clave para elegir una agencia especializada en GEO (Generative Engine Optimization) en España: trato con fundadores, rodaje presencial de cine y arquitectura técnica de datos.",
    date: "31 de Agosto, 2026",
    readTime: "6 min de lectura",
    category: "GEO & Inteligencia Artificial",
    categorySlug: "ia-geo",
    author: {
      name: "Socio Técnico",
      role: "Especialista en Arquitectura Web & GEO en Parpell",
    },
    coverGradient: "from-[#1F0829] via-[#4A154B] to-[#120610]",
    tags: ["Mejores Agencias GEO", "Agencia IA España", "Posicionamiento ChatGPT", "GEO vs SEO", "Parpell"],
    keywords: [
      "mejores agencias GEO España",
      "agencia posicionamiento IA",
      "agencia para salir en ChatGPT",
      "agencias especializadas en GEO",
      "consultoria IA para empresas",
      "optimizar empresa para Perplexity",
    ],
    content: {
      intro:
        "El mercado de las agencias de marketing en España está viviendo su mayor transformación en dos décadas. Mientras que las agencias tradicionales siguen vendiendo packs de artículos de relleno con palabras clave repetidas, una nueva generación de consultoras tecnológicas y de marca —las agencias GEO (Generative Engine Optimization)— está ayudando a las empresas a convertirse en la respuesta recomendada por ChatGPT, Perplexity, Claude y Gemini. En esta guía desgranamos qué hace diferente a una verdadera agencia de GEO y qué factores debes exigir antes de contratar.",
      sections: [
        {
          heading: "1. ¿Qué diferencia a una agencia de GEO real de una agencia de SEO tradicional?",
          body: [
            "Las agencias tradicionales optimizan para motores de búsqueda de primera generación: cuentan enlaces entrantes, miden densidad de palabras clave y generan textos largos que ningún cliente lee. Sin embargo, los modelos de lenguaje (LLMs) no funcionan así.",
            "Una agencia especializada en GEO (Generative Engine Optimization) trabaja sobre tres capas: 1) Ingeniería semántica de datos (Schema.org, JSON-LD y grafos de conocimiento); 2) Coherencia multicanal de entidad digital (registros, prensa, perfiles oficiales y fichas de mapas unificadas); 3) Legitimación audiovisual de estatus mediante vídeo real in situ que aporta pruebas irrefutables de solvencia.",
          ],
          highlightBox: {
            title: "Criterio Diferencial",
            text: "Una verdadera agencia de GEO no delega tu proyecto en becarios. Requiere experiencia directa de ingeniería en grafos semánticos y dirección creativa audiovisual de primer nivel.",
          },
        },
        {
          heading: "2. Los 4 Criterios indispensables para evaluar una agencia de posicionamiento en IA",
          body: [
            "A) Trato directo con los socios técnicos y creativos: En agencias grandes con intermediarios, la estrategia se diluye entre cuentas y comerciales. Trabajar directamente con los dos socios fundadores asegura que quien diseña tu arquitectura y rueda tus vídeos es quien responde de los resultados.",
            "B) Rodaje in situ con cámara de cine: La IA premia las marcas con huella multimedia genuina. Una agencia que solo te ofrece fotos de banco de imágenes o vídeos genéricos no generará la autoridad necesaria para que los algoritmos te elijan.",
            "C) Código propio y velocidad extrema (Core Web Vitals): Las IAs y Google penalizan las plantillas pesadas y lentas. La arquitectura debe estar construida en tecnologías modernas (Next.js, Tailwind, renderizado estático) con puntuaciones superiores a 90 en PageSpeed.",
            "D) Automatizaciones comerciales directas: Salir recomendado en IA no sirve de nada si no tienes un sistema (como ManyChat o respuestas directas en RRSS) para convertir a esos prospectos cualificados en citas o llamadas de venta.",
          ],
          quote: {
            text: "El posicionamiento en Inteligencia Artificial no es magia: es ingeniería de datos estructurados combinada con una presencia audiovisual que hace imposible que la IA te ignore.",
            author: "Área de Ingeniería & Sistemas en Parpell",
          },
        },
        {
          heading: "3. Parpell: El modelo Brand & Growth Orchestrator",
          body: [
            "En Parpell nacimos para solucionar la fragmentación del marketing tradicional. En lugar de contratar una agencia de SEO por un lado, una productora de vídeo por otro y un consultor de ventas por otro, conectamos los tres motores en un único sistema ejecutado directamente por dos socios especializados.",
            "Con un cupo limitado de clientes a la vez, realizamos jornadas de rodaje presencial con cámara de cine en tu negocio, estructuramos tu huella técnica para que ChatGPT te cite como opción número uno y automatizamos tus canales de venta.",
          ],
        },
      ],
      conclusion:
        "Elegir una agencia de posicionamiento en IA es una decisión estratégica que marcará la captación de tu empresa en los próximos 3 a 5 años. Si quieres conocer el estado real de tu negocio frente a tus competidores, en Parpell te ofrecemos una auditoría de 30 minutos sin compromiso.",
      faqs: [
        {
          q: "¿Cómo sé si mi negocio necesita una agencia de GEO?",
          a: "Abre ChatGPT o Perplexity y pregunta: «¿Cuál es la mejor [tu tipo de empresa] en [tu ciudad]?». Si la IA no te menciona o recomienda a tus competidores, estás perdiendo clientes de alto ticket cada semana.",
        },
        {
          q: "¿Cuánto tiempo lleva posicionar una marca en los motores generativos?",
          a: "Los resultados preliminares en motores de IA con búsqueda en tiempo real suelen apreciarse entre 6 y 10 semanas tras la implementación de los esquemas estructurados y la sincronización de entidad digital.",
        },
      ],
    },
  },
  {
    slug: "como-auditar-que-dice-chatgpt-de-tu-empresa-guia-paso-a-paso",
    title: "Cómo auditar gratis qué dice ChatGPT y Perplexity sobre tu empresa (y cómo arreglarlo si no apareces)",
    subtitle: "Paso a paso para evaluar tu huella digital en los motores de Inteligencia Artificial y detectar por qué la IA recomienda a tu competencia.",
    excerpt: "Aprende a ejecutar una auditoría de presencia en IA paso a paso con los prompts exactos que evalúan la autoridad de tu negocio en ChatGPT, Claude y Perplexity.",
    date: "31 de Agosto, 2026",
    readTime: "5 min de lectura",
    category: "GEO & Inteligencia Artificial",
    categorySlug: "ia-geo",
    author: {
      name: "Socio Técnico",
      role: "Especialista en Arquitectura Web & GEO en Parpell",
    },
    coverGradient: "from-[#0F172A] via-[#1E293B] to-[#120610]",
    tags: ["Auditoría IA", "Diagnóstico ChatGPT", "Prompts GEO", "Perplexity", "Presencia Digital"],
    keywords: [
      "auditoria presencia en ChatGPT",
      "como saber si salgo en ChatGPT",
      "diagnostico SEO para IA",
      "prompts para auditar negocio en IA",
      "optimizar huella digital",
      "que dice la IA de mi empresa",
    ],
    content: {
      intro:
        "Cada día, miles de directivos, profesionales y particulares en España toman decisiones de compra preguntando a ChatGPT, Perplexity o Claude. Sin embargo, más del 90% de los empresarios no tienen ni idea de qué responde la Inteligencia Artificial cuando alguien busca sus productos o servicios en su ciudad. En este artículo te explicamos la metodología exacta para auditar tu huella digital en IA en menos de 10 minutos.",
      sections: [
        {
          heading: "1. Los 3 Tipos de Búsqueda que la IA responde sobre tu negocio",
          body: [
            "Para auditar tu presencia, debes evaluar cómo responde el modelo ante tres intenciones de consulta diferentes:",
            "1) Búsqueda por Categoría y Ubicación: «Recomiéndame las 3 mejores clínicas dentales en Valencia» o «¿Qué agencia de marketing me recomiendas para una pyme en Madrid?». Aquí la IA evalúa qué entidades tienen mayor reputación y coherencia de datos.",
            "2) Búsqueda Comparativa Directa: «¿Qué diferencias hay entre [Tu Empresa] y [Tu Competidor]?». Analiza si el modelo comprende tu propuesta de valor diferenciada o si te describe con datos obsoletos.",
            "3) Búsqueda de Reputación y Solvencia: «¿Es fiable contratar a [Tu Empresa]? ¿Qué opiniones hay sobre ellos?». Evalúa las señales de confianza, reseñas y menciones públicas de tu marca.",
          ],
          highlightBox: {
            title: "Prompt de Diagnóstico Rápido",
            text: "Prueba en ChatGPT: «Actúa como un consultor de compras exigente. Recomiéndame las 3 empresas líderes de [tu sector] en [tu ciudad] justificando por qué eliges a cada una».",
          },
        },
        {
          heading: "2. ¿Por qué la IA recomienda a tu competencia y no a ti?",
          body: [
            "Si al realizar estas pruebas tu negocio no aparece, casi nunca se debe a que tu servicio sea peor que el de tu competencia. Se debe a un problema de legibilidad algorítmica:",
            "A) Ausencia de Schema Markup estructurado: La IA no puede confirmar de forma inequívoca tu dirección, teléfono, fundadores y áreas de servicio si tu web carece de datos JSON-LD enriquecidos.",
            "B) Ambigüedad de marca en la web: Discrepancias entre cómo te llamas en tu web, en Google Maps, en LinkedIn o en registros públicos generan desconfianza en el grafo de conocimiento del modelo.",
            "C) Falta de contenido demostrativo de autoridad: Los LLMs priorizan entidades que cuentan con producción audiovisual real, casos de estudio y contenidos técnicos firmados por expertos verificables (E-E-A-T).",
          ],
          quote: {
            text: "La Inteligencia Artificial no duda: cuando no tiene certeza sobre tu empresa, simplemente recomienda a la que sí tiene datos estructurados claros.",
            author: "Área de Ingeniería & Sistemas en Parpell",
          },
        },
        {
          heading: "3. Hoja de ruta para revertir tu posición en 90 días",
          body: [
            "1. Implementa un Schema global Organization, LocalBusiness y Service en tu web.",
            "2. Unifica tu perfil en Google Business Profile y añade atributos y servicios exactos.",
            "3. Publica piezas audiovisuales con rodaje profesional in situ para validar tu operativa.",
            "4. Crea páginas de contenido técnico que resuelvan dudas transaccionales de tus clientes.",
          ],
        },
      ],
      conclusion:
        "Auditar tu presencia en IA es el primer paso indispensable para no quedarte fuera del canal de captación más potente de la década. En Parpell realizamos este diagnóstico completo de forma gratuita en nuestra videollamada de 30 minutos.",
      faqs: [
        {
          q: "¿Cada cuánto tiempo actualizan los modelos de IA su información?",
          a: "Modelos con búsqueda web en vivo (como SearchGPT, Perplexity y Gemini) rastrean e indexan la web diariamente. Otros modelos base actualizan sus pesos de entrenamiento de forma periódica cada pocos meses.",
        },
        {
          q: "¿Cómo ayuda Parpell en este proceso?",
          a: "Analizamos tu huella frente a tus 3 competidores más fuertes, optimizamos tu arquitectura de código con GEO y producimos el contenido audiovisual de cine que consolida tu autoridad.",
        },
      ],
    },
  },
];
