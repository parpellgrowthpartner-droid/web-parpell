export interface BlogAuthor {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  avatar?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  isoDate: string;
  isoModified?: string;
  readTime: string;
  category: "GEO & Inteligencia Artificial" | "Producción Audiovisual" | "Arquitectura & Rendimiento";
  categorySlug: "ia-geo" | "audiovisual" | "arquitectura";
  author: BlogAuthor;
  coverGradient: string;
  tags: string[];
  keywords: string[];
  keyTakeaways: string[];
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

export const AUTHOR_TECNICO: BlogAuthor = {
  name: "Socio Técnico",
  role: "Desarrollo Web, Sistemas en Red & Posicionamiento GEO",
  credentials: "Técnico Superior en DAM (Desarrollo Multiplataforma) y ASIR (Sistemas en Red)",
  bio: "Técnico superior en Desarrollo de Aplicaciones Multiplataforma (DAM) y Administración de Sistemas Informáticos en Red (ASIR). Con formación técnica en ciberseguridad, infraestructura cloud y SEO semántico, optimiza arquitecturas web y huellas digitales para que los motores de Inteligencia Artificial recomienden a los negocios clientes de Parpell.",
};

export const AUTHOR_COMERCIAL: BlogAuthor = {
  name: "Socio Comercial & Filmmaker",
  role: "Dirección de Comunicación Audiovisual & Ventas",
  credentials: "Director Creativo, Filmmaker & Consultor en Comunicación Comercial",
  bio: "Especialista en dirección de marketing, diseño creativo y producción audiovisual. Con trayectoria como director de marketing, productor y formador de equipos en comunicación comercial, traslada los estándares de la cinematografía a piezas de alto impacto y conversión en ventas para empresas.",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-auditar-que-dice-chatgpt-de-tu-empresa-guia-paso-a-paso",
    title: "Cómo auditar gratis qué dice ChatGPT y Perplexity sobre tu empresa (y cómo arreglarlo si no apareces)",
    subtitle: "Paso a paso para evaluar tu huella digital en los motores de Inteligencia Artificial y detectar por qué la IA recomienda a tu competencia.",
    excerpt: "Aprende a ejecutar una auditoría de presencia en IA paso a paso con los prompts exactos que evalúan la autoridad de tu negocio en ChatGPT, Claude y Perplexity.",
    date: "1 de Septiembre, 2026",
    isoDate: "2026-09-01T08:00:00.000Z",
    isoModified: "2026-09-01T12:00:00.000Z",
    readTime: "5 min de lectura",
    category: "GEO & Inteligencia Artificial",
    categorySlug: "ia-geo",
    author: AUTHOR_TECNICO,
    coverGradient: "from-[#0F172A] via-[#1E293B] to-[#120610]",
    tags: ["Auditoría IA", "Diagnóstico ChatGPT", "Prompts GEO", "Perplexity", "Presencia Digital", "SEO Local"],
    keywords: [
      "auditoria presencia en ChatGPT",
      "como saber si salgo en ChatGPT",
      "diagnostico SEO para IA",
      "prompts para auditar negocio en IA",
      "optimizar huella digital",
      "que dice la IA de mi empresa",
      "consultoria de posicionamiento en IA",
    ],
    keyTakeaways: [
      "Más del 90% de las empresas desconocen qué responde la Inteligencia Artificial cuando alguien busca sus servicios en su ciudad.",
      "Para auditar tu presencia, prueba búsquedas por categoría local, comparativas directas y consultas de solvencia.",
      "Si la IA no te recomienda, se debe a falta de datos estructurados, ambigüedad en directorios o ausencia de contenido multimedia verificable.",
      "Un plan de optimización GEO de 90 días permite estructurar la huella digital para que los LLMs reconozcan tu liderazgo local.",
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
            author: "Área Técnica & Desarrollo en Parpell",
          },
        },
        {
          heading: "3. Hoja de ruta para revertir tu posición en 90 días",
          body: [
            "1. Implementa un Schema global Organization, LocalBusiness y Service en tu web con coordenadas y catálogo.",
            "2. Unifica tu perfil en Google Business Profile y añade atributos, horarios y servicios exactos.",
            "3. Publica piezas audiovisuales con rodaje profesional in situ para validar visualmente tu operativa.",
            "4. Crea páginas de contenido técnico que resuelvan dudas transaccionales de tus clientes con enlaces canónicos.",
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
  {
    slug: "searchgpt-y-el-nuevo-buscador-de-openai-guia-empresas",
    title: "SearchGPT y el nuevo buscador de OpenAI: Qué cambia para las empresas y cómo no perder clientes",
    subtitle: "OpenAI revoluciona los motores de búsqueda directa. Analizamos la arquitectura de citas de SearchGPT y qué debes cambiar en tu web hoy mismo.",
    excerpt: "SearchGPT ya está aquí y no busca enlaces: sintetiza respuestas estructuradas y cita fuentes directas. Descubre los requerimientos técnicos para que OpenAI te posicione como referente.",
    date: "28 de Agosto, 2026",
    isoDate: "2026-08-28T09:30:00.000Z",
    isoModified: "2026-08-30T10:00:00.000Z",
    readTime: "6 min de lectura",
    category: "GEO & Inteligencia Artificial",
    categorySlug: "ia-geo",
    author: AUTHOR_TECNICO,
    coverGradient: "from-[#132E27] via-[#0E4429] to-[#120610]",
    tags: ["SearchGPT", "OpenAI", "Motores de IA", "GEO", "SEO Semántico", "Buscadores Generativos"],
    keywords: [
      "SearchGPT para empresas",
      "posicionar en SearchGPT OpenAI",
      "buscador de ChatGPT",
      "GEO vs SearchGPT",
      "citas en inteligencia artificial",
      "futuro del SEO 2026",
      "como aparecer en respuestas de OpenAI",
    ],
    keyTakeaways: [
      "SearchGPT no muestra listados de 10 enlaces: sintetiza la respuesta y enlaza a 2 o 3 fuentes principales de alta autoridad.",
      "La indexación de OpenAI premia la arquitectura semántica limpia, el marcado Schema JSON-LD y la ausencia de contenido duplicado o spam.",
      "Las búsquedas transaccionales y de servicios locales integran mapas interactivos basados en coherencia de entidad.",
      "Estructurar tus servicios en páginas técnicas individuales con datos numéricos claros dispara la probabilidad de citación.",
    ],
    content: {
      intro:
        "Con el lanzamiento e integración de SearchGPT en el ecosistema de OpenAI, el paradigma de búsqueda que dominó internet durante 25 años ha cambiado definitivamente. Los usuarios ya no quieren hacer clic en diez enlaces patrocinados ni navegar entre banners intrusivos: exigen respuestas directas, estructuradas y con fuentes fiables. Si tu empresa depende de captar clientes por internet, entender cómo SearchGPT selecciona sus fuentes es ahora una cuestión de supervivencia comercial.",
      sections: [
        {
          heading: "1. ¿Cómo funciona el algoritmo de citación de SearchGPT?",
          body: [
            "A diferencia de los rastreadores clásicos que analizan densidad de palabras clave y volumen de backlinks, SearchGPT combina modelos de lenguaje avanzados con un índice web en tiempo real. Cuando un usuario formula una pregunta comercial, el sistema realiza tres operaciones en milisegundos:",
            "1) Descomposición de la intención de búsqueda en entidades y sub-preguntas lógicas.",
            "2) Recuperación de fragmentos web con alta densidad de certeza fáctica y libre de relleno retórico.",
            "3) Síntesis de la respuesta final con enlaces atribuidos directamente en el cuerpo del texto y tarjetas laterales destacadas.",
          ],
          highlightBox: {
            title: "Métrica de Relevancia",
            text: "SearchGPT descarta automáticamente páginas con código sobrecargado o texto generado sin estructura lógica verificable, priorizando sitios con renderizado veloz y datos estructurados Schema.org.",
          },
        },
        {
          heading: "2. Los 3 Cambios técnicos urgentes para tu sitio web",
          body: [
            "Para que OpenAI identifique a tu empresa como la respuesta idónea en tu sector y zona geográfica, debes aplicar tres ajustes prioritarios:",
            "A) Fragmentación en Bloques de Información Atómicos: En lugar de páginas genéricas con párrafos interminables, estructura cada servicio con títulos descriptivos, listas con viñetas, especificaciones numéricas y tablas comparativas.",
            "B) Etiquetado Semántico JSON-LD Completo: Integra esquemas de tipo WebSite, Service, LocalBusiness, FAQPage y Review vinculados con la URL canónica de tu dominio.",
            "C) Protocolos de Rastreo y Robots.txt Transparentes: Asegúrate de que los user-agents de OpenAI (como OAI-SearchBot y GPTBot) tengan acceso limpio a tus contenidos públicos sin bloqueos accidentales.",
          ],
          quote: {
            text: "SearchGPT no indexa palabras; indexa respuestas verificadas. La web que mejor responda con menor fricción técnica será la dueña del tráfico cualificado.",
            author: "Área de Ingeniería Semántica en Parpell",
          },
        },
        {
          heading: "3. La ventaja competitiva de actuar ahora en España",
          body: [
            "En el mercado hispanohablante, más del 85% de las empresas todavía no han adaptado su código ni su estrategia a los buscadores generativos. Esto genera una ventana de oportunidad única: las marcas que implementan GEO y optimización para SearchGPT hoy ocuparán las primeras posiciones en el grafo de conocimiento antes de que la competencia reaccione.",
          ],
        },
      ],
      conclusion:
        "El tráfico de búsqueda está migrando a asistentes y buscadores generativos a un ritmo acelerado. En Parpell auditamos y adaptamos la arquitectura técnica de tu web para que SearchGPT y ChatGPT te reconozcan como líder de tu sector.",
      faqs: [
        {
          q: "¿SearchGPT reemplazará por completo a Google?",
          a: "No de la noche a la mañana, pero ya está captando un porcentaje sustancial de las búsquedas de alta consideración y decisión de compra en sectores B2B y servicios profesionales.",
        },
        {
          q: "¿Puedo saber si SearchGPT ya está citando mi página web?",
          a: "Sí, mediante análisis de logs de servidor y telemetría de tráfico por referencia de agentes de IA, así como pruebas sistemáticas de prompts de auditoría.",
        },
      ],
    },
  },
  {
    slug: "mejores-agencias-posicionamiento-ia-geo-espana",
    title: "Las mejores agencias de Posicionamiento en IA (GEO) en España: Guía y Comparativa 2026",
    subtitle: "Analizamos cómo elegir el partner adecuado para que ChatGPT, Claude y Perplexity recomienden tu empresa por encima de tus competidores.",
    excerpt: "Descubre cuáles son los criterios clave para elegir una agencia especializada en GEO (Generative Engine Optimization) en España: trato con fundadores, rodaje presencial de cine y arquitectura técnica de datos.",
    date: "22 de Agosto, 2026",
    isoDate: "2026-08-22T11:15:00.000Z",
    isoModified: "2026-08-25T14:30:00.000Z",
    readTime: "6 min de lectura",
    category: "GEO & Inteligencia Artificial",
    categorySlug: "ia-geo",
    author: AUTHOR_TECNICO,
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
    keyTakeaways: [
      "Las agencias tradicionales de SEO no dominan los grafos semánticos ni los requisitos de los modelos LLM actuales.",
      "Una agencia de GEO de alto nivel debe ofrecer: trato directo con los fundadores técnicos, rodaje presencial de cine y código web propio.",
      "Evita agencias que deleguen la configuración técnica de tu empresa en perfiles junior o intermediarios.",
      "El modelo Orchestrator de Parpell conecta visibilidad en IA, producción audiovisual y automatizaciones comerciales en un solo equipo.",
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
            text: "Una verdadera agencia de GEO no delega tu proyecto en becarios. Requiere experiencia técnica directa en grafos semánticos y dirección creativa audiovisual de primer nivel.",
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
            text: "El posicionamiento en Inteligencia Artificial no es magia: es desarrollo técnico y datos estructurados combinados con una presencia audiovisual que hace imposible que la IA te ignore.",
            author: "Área Técnica & Desarrollo en Parpell",
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
    slug: "video-organico-estetica-cine-vs-publicidad-de-pago-reducir-cac",
    title: "Vídeo orgánico con estética de cine vs. Publicidad de pago: La estrategia híbrida para reducir tu CAC",
    subtitle: "Depender únicamente de Meta Ads o Google Ads es una trampa inflacionaria. Cómo el contenido cinematográfico multicanal multiplica el ROI de tu inversión publicitaria.",
    excerpt: "Los costes de la publicidad digital suben cada trimestre. Analizamos cómo combinar piezas audiovisuales cinematográficas con funnels orgánicos y de pago para reducir tu coste de adquisición de clientes.",
    date: "15 de Agosto, 2026",
    isoDate: "2026-08-15T16:00:00.000Z",
    isoModified: "2026-08-18T11:00:00.000Z",
    readTime: "5 min de lectura",
    category: "Producción Audiovisual",
    categorySlug: "audiovisual",
    author: AUTHOR_COMERCIAL,
    coverGradient: "from-[#380D1E] via-[#5C1D38] to-[#120610]",
    tags: ["CAC", "Vídeo Marketing", "Meta Ads", "Contenido Orgánico", "ROAS", "Cinematografía"],
    keywords: [
      "reducir coste de adquisicion CAC",
      "estrategia de video organico B2B",
      "produccion reels corporativos",
      "video ads de alta conversion",
      "ROI produccion audiovisual",
      "estetica de cine en redes sociales",
      "captacion de clientes con video",
    ],
    keyTakeaways: [
      "El coste por adquisición (CAC) en publicidad de pago ha subido más de un 42% en los últimos dos años en sectores competitivos.",
      "El contenido audiovisual rodado con cámara de cine genera un 320% más de retención y credibilidad que los vídeos genéricos de smartphone.",
      "Reutilizar las piezas maestras cinematográficas en creatividades de pago reduce el CPM y duplica el CTR publicitario.",
      "La combinación de distribución orgánica con captación automatizada por mensajería directa crea un flujo de leads pre-cualificados constante.",
    ],
    content: {
      intro:
        "Cualquier director general o responsable comercial que revise sus métricas de captación habrá notado el mismo patrón: los anuncios en Meta Ads y Google Ads son cada mes más caros y menos rentables. Comprar tráfico frío sin una marca legitimada visualmente es quemar presupuesto. La solución no es apagar los anuncios, sino blindar tu presencia con activos audiovisuales cinematográficos que reduzcan drásticamente la resistencia de compra y abaraten tu CAC (Coste de Adquisición de Cliente).",
      sections: [
        {
          heading: "1. La trampa del tráfico de pago sin autoridad de marca",
          body: [
            "Cuando un prospecto ve un anuncio de tu empresa en Instagram o LinkedIn y hace clic, su primer instinto es desconfiar. Si aterriza en un perfil vacío o en una web sin vídeos que muestren la realidad de tu servicio, el 95% abandona sin dejar sus datos.",
            "En cambio, cuando el usuario encuentra una estética cinematográfica cuidada, testimonios rodados con iluminación profesional y clips orgánicos que demuestran maestría técnica, el estatus de tu empresa se percibe al instante como de primer nivel.",
          ],
          highlightBox: {
            title: "Métricas de Conversión Comparadas",
            text: "Las campañas de paid media que utilizan creatividades con producción cinematográfica in situ reducen el coste por lead (CPL) entre un 35% y un 50% frente a anuncios con creatividades estáticas de plantilla.",
          },
        },
        {
          heading: "2. El ciclo virtuoso: Del rodaje presencial a 20 activos multicanal",
          body: [
            "En Parpell no entendemos la producción como un vídeo suelto que se sube a YouTube y se olvida. Cada jornada intensiva de rodaje in situ con cámara de cine se diseña para extraer un ecosistema completo de conversión:",
            "1) Pieza Maestra Corporativa: Cabecera web y vídeo manifiesto para validar el valor de tu marca ante grandes cuentas.",
            "2) Micro-cápsulas Verticales (Reels / TikTok / Shorts): Respuestas concisas a las 10 objeciones de venta más comunes de tus clientes.",
            "3) Creatividades de Alto Impacto para Ads: Ganchos visuales con gradación de color cinematográfica que frenan el scroll del usuario en redes.",
            "4) Casos de Estudio en Vídeo: Demostraciones tangibles de resultados para cerrar negociaciones de ticket medio-alto.",
          ],
          quote: {
            text: "Un solo día de rodaje profesional bien planificado proporciona el combustible de ventas y autoridad de tu empresa para todo el trimestre.",
            author: "Área Audiovisual & Ventas en Parpell",
          },
        },
        {
          heading: "3. La automatización del cierre: De la visualización al contacto",
          body: [
            "Un vídeo con miles de reproducciones no sirve de nada si no tiene un mecanismo de captura inmediata. Por eso integramos palabras clave interactivas en los vídeos («Comenta AUDITORÍA para recibir el diagnóstico») vinculadas a flujos automatizados de respuesta directa que entregan valor y agendan llamadas cualificadas en segundos.",
          ],
        },
      ],
      conclusion:
        "Reducir tu coste de adquisición de clientes no requiere multiplicar tu presupuesto publicitario, sino elevar la calidad cinematográfica y la persuasión de los activos con los que recibes a cada visitante.",
      faqs: [
        {
          q: "¿Qué equipo audiovisual se utiliza en los rodajes?",
          a: "Trabajamos con cámaras de cine digital de gran formato, ópticas fijas de alta definición, iluminación profesional de estudio y sistemas de captación de sonido inalámbrico de broadcast.",
        },
        {
          q: "¿Quién redacta los guiones de los vídeos?",
          a: "El socio comercial y creativo elabora la escaleta y los ganchos de venta tras una sesión de análisis de tu propuesta de valor y objeciones de clientes.",
        },
      ],
    },
  },
  {
    slug: "guion-audiovisual-para-empresas-formula-conversion-ticket-alto",
    title: "La estructura de guion audiovisual que convierte visitas en clientes de ticket alto",
    subtitle: "Un vídeo bonito que no vende es un coste inútil. Te mostramos la escaleta de 4 actos que usamos para clínicas, despachos y empresas B2B.",
    excerpt: "Aprende la fórmula exacta de guion comercial y narrativa de autor para estructurar vídeos corporativos y testimoniales que cierren ventas y justifiquen precios premium.",
    date: "8 de Agosto, 2026",
    isoDate: "2026-08-08T10:00:00.000Z",
    isoModified: "2026-08-10T12:00:00.000Z",
    readTime: "5 min de lectura",
    category: "Producción Audiovisual",
    categorySlug: "audiovisual",
    author: AUTHOR_COMERCIAL,
    coverGradient: "from-[#2D0A1E] via-[#521334] to-[#120610]",
    tags: ["Guion Audiovisual", "Copywriting", "Ticket Alto", "Psicología de Ventas", "Storytelling Corporativo"],
    keywords: [
      "guion de video corporativo",
      "estructura de video de venta",
      "video marketing para clinicas y despachos",
      "escaleta audiovisual para empresas",
      "conversion con video testimonial",
      "narrativa comercial B2B",
      "como hacer videos que vendan",
    ],
    keyTakeaways: [
      "El 80% de los vídeos corporativos fallan porque empiezan hablando de la empresa en lugar del dolor del cliente.",
      "La estructura de 4 actos (Gancho de Estado, Agitación del Problema, Demostración Incontestable y Llamada Clara) maximiza la retención.",
      "En servicios de ticket alto, el tono debe transmitir sobriedad, dominio técnico y empatía sin sonar a teletienda.",
      "Los testimonios deben centrarse en la objeción previa que tenía el cliente antes de contratar y en el alivio posterior.",
    ],
    content: {
      intro:
        "La mayoría de vídeos corporativos que se producen en España cometen el mismo error letal: empiezan con un plano aéreo del edificio de la empresa, música de ascensor y una voz en off diciendo: «En Empresa X llevamos más de 15 años comprometidos con la excelencia». El espectador hace clic en volver atrás a los 4 segundos. En Parpell aplicamos la ingeniería de guion cinematográfico combinada con psicología de ventas para retener la atención del cliente ideal desde el primer segundo hasta el cierre.",
      sections: [
        {
          heading: "1. Acto 1: El Gancho de Estado (Primeros 3 a 5 segundos)",
          body: [
            "El objetivo del gancho no es sorprender con pirotecnia visual vacía, sino verbalizar el dolor o deseo exacto que experimenta tu cliente ideal. Debe formular una afirmación o pregunta que segregue a los curiosos y atraiga a los decisores.",
            "Ejemplo para un despacho o clínica: «Si estás aplazando una decisión importante por miedo a una mala ejecución técnica, esto es lo que necesitas saber antes de firmar nada».",
          ],
          highlightBox: {
            title: "Regla de Oro del Hook",
            text: "Nunca empieces diciendo tu nombre ni el de tu empresa. El cliente solo se interesa por tu solución una vez que ha sentido que comprendes su problema mejor que nadie.",
          },
        },
        {
          heading: "2. Actos 2 y 3: Agitación del problema y Demostración Incontestable",
          body: [
            "En el Acto 2 (Agitación), desglosamos por qué las soluciones comunes o baratas del mercado terminan costando el doble en tiempo, dinero o estrés.",
            "En el Acto 3 (Demostración de Autoridad), no decimos que somos buenos: lo mostramos. Aquí es donde el rodaje presencial con cámara de cine despliega todo su poder: primeros planos de manos expertas trabajando, pantallas de datos reales, instalaciones impecables y el testimonio directo del fundador explicando el criterio detrás de su trabajo.",
          ],
          quote: {
            text: "La confianza del comprador de ticket alto no se gana con adjetivos rimbombantes; se gana con precisión quirúrgica en los detalles visuales.",
            author: "Área Audiovisual & Ventas en Parpell",
          },
        },
        {
          heading: "3. Acto 4: Llamada a la Acción de Baja Fricción",
          body: [
            "Un error clásico al final de un vídeo es pedir un compromiso excesivo («Compra ahora nuestro servicio de 5.000€»). La llamada a la acción en servicios profesionales debe ser un siguiente paso lógico y sin riesgo: «Solicita una auditoría preliminar de 30 minutos» o «Comprueba si tu caso es viable en nuestro formulario».",
          ],
        },
      ],
      conclusion:
        "Un buen guion es la diferencia entre un vídeo que se queda como adorno en tu página web y una máquina comercial que genera prospectos cualificados todas las semanas.",
      faqs: [
        {
          q: "¿Los clientes tienen que memorizar el guion antes de rodar?",
          a: "No. Durante el rodaje dirigimos la conversación con preguntas guiadas y pautas naturales para que el portavoz hable con espontaneidad y total seguridad ante la cámara.",
        },
        {
          q: "¿Cuánto debe durar un vídeo corporativo para convertir?",
          a: "Para cabeceras web, recomendamos entre 60 y 90 segundos. Para piezas de redes sociales, formatos verticales concisos de 30 a 60 segundos.",
        },
      ],
    },
  },
  {
    slug: "core-web-vitals-y-arquitectura-web-la-parte-invisible-que-decide-tus-ventas",
    title: "Core Web Vitals y arquitectura web: La parte invisible del código que decide si vendes o pierdes a tu cliente",
    subtitle: "Cada 100 milisegundos de retraso reducen un 7% tus ventas. Descubre cómo una arquitectura web a medida blindará tu captación.",
    excerpt: "Google penaliza las webs lentas y los usuarios abandonan las páginas que tardan en cargar. Analizamos por qué el código limpio y la arquitectura moderna son la inversión más rentable para tu negocio.",
    date: "30 de Julio, 2026",
    isoDate: "2026-07-30T09:00:00.000Z",
    isoModified: "2026-08-01T15:00:00.000Z",
    readTime: "4 min de lectura",
    category: "Arquitectura & Rendimiento",
    categorySlug: "arquitectura",
    author: AUTHOR_TECNICO,
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
    keyTakeaways: [
      "Cada 100 milisegundos de retraso en la velocidad web reduce un 7% las conversiones de contacto.",
      "Google prioriza en sus rankings las webs con Core Web Vitals óptimos: LCP (<2.5s), INP (<200ms) y estabilidad CLS.",
      "Las soluciones sobre Next.js con renderizado estático y assets optimizados multiplican la velocidad frente a plantillas tradicionales.",
      "La infraestructura web bien mantenida (backups diarios, SSL, monitorización) asegura que tu negocio no pierda clientes por caídas.",
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
            author: "Área Técnica & Desarrollo en Parpell",
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
          a: "Hosting cloud de alta velocidad, certificado SSL, copias de seguridad diarias, monitorización de caídas, auditorías de velocidad y horas de soporte directo con el socio técnico.",
        },
      ],
    },
  },
  {
    slug: "por-que-el-video-con-camara-de-cine-multiplica-la-conversion-en-tu-web",
    title: "Por qué el vídeo grabado con cámara de cine multiplica la conversión web (y por qué las plantillas ahuyentan clientes)",
    subtitle: "La psicología del estatus y la legitimación visual: cómo convertir visitantes escépticos en clientes convencidos antes de la primera llamada.",
    excerpt: "En sectores de ticket medio y alto, la decisión de compra no es impulsiva: se basa en la confianza. Analizamos por qué el contenido audiovisual cinematográfico in situ aumenta drásticamente la tasa de conversión.",
    date: "21 de Julio, 2026",
    isoDate: "2026-07-21T14:20:00.000Z",
    isoModified: "2026-07-23T16:00:00.000Z",
    readTime: "4 min de lectura",
    category: "Producción Audiovisual",
    categorySlug: "audiovisual",
    author: AUTHOR_COMERCIAL,
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
    keyTakeaways: [
      "En servicios de ticket medio y alto, la decisión de compra depende de la legitimación visual y la confianza percibida.",
      "El rodaje in situ con cámara de cine, ópticas profesionales y microfonía de estudio elimina las dudas del cliente antes de contactar.",
      "Las páginas con vídeo demostrativo cinematográfico aumentan el tiempo de permanencia un 88% y multiplican hasta por 2,4 las conversiones.",
      "Cada pieza audiovisual debe responder a una objeción de compra concreta y tener una llamada a la acción clara.",
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
            "Muchas agencias envían a un operador con un smartphone o un estabilizador básico. La diferencia técnica y de impacto entre eso y una producción de autor radica en tres aspectos:",
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
    slug: "como-posicionar-tu-negocio-en-chatgpt-y-claude-guia-geo",
    title: "Cómo posicionar tu negocio en ChatGPT, Claude y Perplexity: Guía completa de GEO (Generative Engine Optimization)",
    subtitle: "El SEO tradicional ya no basta. Descubre cómo los modelos LLM eligen las empresas que recomiendan y cómo estructurar tu presencia digital.",
    excerpt: "Los usuarios ya no buscan solo en Google: preguntan directamente a la Inteligencia Artificial. Aprende a aplicar GEO (Generative Engine Optimization) para convertir tu marca en la respuesta recomendada por ChatGPT, Claude y Gemini.",
    date: "10 de Julio, 2026",
    isoDate: "2026-07-10T10:00:00.000Z",
    isoModified: "2026-07-15T12:00:00.000Z",
    readTime: "5 min de lectura",
    category: "GEO & Inteligencia Artificial",
    categorySlug: "ia-geo",
    author: AUTHOR_TECNICO,
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
    keyTakeaways: [
      "Los motores generativos (ChatGPT, Claude, Perplexity) responden con 2 o 3 recomendaciones directas en lugar de 10 enlaces azules.",
      "El algoritmo evalúa 3 factores simultáneos: arquitectura Schema.org (JSON-LD), coherencia de entidad multicanal y pruebas audiovisuales in situ.",
      "La indexación semántica en IA puede consolidarse en un plazo de 6 a 10 semanas con la optimización técnica adecuada.",
      "El GEO no sustituye al SEO de Google, sino que potencia simultáneamente las posiciones en Google Maps y en asistentes de IA.",
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
            "A) Arquitectura Semántica y Schema Markup: No basta con tener un HTML básico. Tu web debe incorporar datos estructurados JSON-LD exhaustivos (LocalBusiness, Organization, Service, Review y FAQPage) que definan con precisión quién eres, qué ofreces, tus precios y tu ubicación geográfica.",
            "B) Coherencia Multicanal de la Entidad: Los LLMs rastrean la web buscando consistencia. Si el nombre de tu empresa, teléfono, dirección y descripción coinciden perfectamente entre tu web, Google Maps, registros oficiales y menciones en medios, el nivel de confianza algorítmica se dispara.",
            "C) Densidad de Citación Contextual: Los modelos de IA valoran las opiniones reales de clientes, casos de éxito contrastados y contenidos audiovisuales legítimos que demuestren que detrás de la web hay una operativa real y solvente.",
          ],
          quote: {
            text: "La Inteligencia Artificial no lee páginas webs como un humano; busca patrones de certeza, reputación estructurada y ausencia de ambigüedad técnica.",
            author: "Área Técnica & Sistemas en Parpell",
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
          a: "A diferencia del SEO tradicional que requiere 6 a 12 meses, la indexación semántica en motores de IA con búsqueda en tiempo real (SearchGPT, Perplexity, Gemini) puede reflejarse en un plazo de 6 a 10 semanas tras implementar Schema Markup y coherencia de entidad.",
        },
        {
          q: "¿El GEO sustituye al SEO tradicional de Google?",
          a: "No lo sustituye, lo potencia. Las webs optimizadas para GEO consiguen simultáneamente las mejores posiciones orgánicas en Google Maps y en los resultados tradicionales de búsqueda.",
        },
      ],
    },
  },
  {
    slug: "por-que-las-empresas-estan-migrando-de-wordpress-a-nextjs",
    title: "Por qué las empresas que más facturan están migrando de WordPress a Next.js",
    subtitle: "Plugins rotos, vulnerabilidades constantes y tiempos de carga lentos. Analizamos los números de velocidad, seguridad y conversión del cambio tecnológico.",
    excerpt: "WordPress dominó la web durante años, pero para negocios de alto rendimiento se ha convertido en un lastre. Descubre las ventajas tangibles en velocidad, seguridad y SEO que ofrece Next.js.",
    date: "28 de Junio, 2026",
    isoDate: "2026-06-28T12:00:00.000Z",
    isoModified: "2026-07-02T10:00:00.000Z",
    readTime: "5 min de lectura",
    category: "Arquitectura & Rendimiento",
    categorySlug: "arquitectura",
    author: AUTHOR_TECNICO,
    coverGradient: "from-[#111827] via-[#1F2937] to-[#120610]",
    tags: ["Next.js", "WordPress", "Desarrollo Web", "Ciberseguridad", "Rendimiento", "Jamstack"],
    keywords: [
      "migrar WordPress a Next.js",
      "desarrollo web Next.js empresas",
      "ventajas de Next.js frente a WordPress",
      "seguridad web corporativa",
      "velocidad web y conversion",
      "arquitectura JAMstack ventajas",
      "programacion web a medida",
    ],
    keyTakeaways: [
      "El 94% de las vulnerabilidades en CMS comerciales provienen de plugins desactualizados de WordPress.",
      "Las páginas estáticas e híbridas en Next.js cargan en menos de 300 ms, reduciendo la tasa de rebote a la mitad.",
      "El renderizado del lado del servidor (SSR) y la generación estática (SSG) proporcionan una ventaja decisiva para la indexación en motores de IA y Googlebot.",
      "Ahorro de costes en servidores dedicados: una web en Next.js sobre CDN global escala sin requerir bases de datos pesadas en backend.",
    ],
    content: {
      intro:
        "Durante más de 15 años, WordPress fue la elección automática para crear la web de cualquier empresa. Sin embargo, en 2026, la mayoría de negocios que dependen de internet para facturar se encuentran atrapados en el mismo bucle: decenas de plugins incompatibles tras cada actualización, bases de datos saturadas, continuos intentos de hackeo y una lentitud de carga que destruye sus conversiones publicitarias. Analizamos por qué Next.js se ha convertido en el nuevo estándar para empresas líderes.",
      sections: [
        {
          heading: "1. La factura oculta del mantenimiento en WordPress",
          body: [
            "Una web corporativa típica en WordPress requiere plugins para SEO, formularios, caché, optimización de imágenes, seguridad y traducciones. Cada plugin es código ajeno ejecutándose en tu servidor, creando cuellos de botella y vectores de ataque constantes.",
            "Cuando se actualiza el núcleo de WordPress o la versión de PHP, un solo plugin incompatible puede tumbar la web completa o romper el formulario de captación sin que nadie se dé cuenta durante días.",
          ],
          highlightBox: {
            title: "Dato de Ciberseguridad",
            text: "Según informes de seguridad web, más del 90% de los ataques a sitios corporativos explotan vulnerabilidades conocidas en plugins de terceros y bases de datos MySQL expuestas.",
          },
        },
        {
          heading: "2. La arquitectura moderna de Next.js: Cero bases de datos expuestas",
          body: [
            "Next.js (desarrollado sobre React) compila tu web en archivos estáticos optimizados y funciones serverless distribuidas en servidores perimetrales (Edge CDN) alrededor del mundo. Esto aporta tres ventajas demoledoras:",
            "A) Carga Instantánea: El navegador del usuario recibe el código HTML pre-renderizado en milisegundos, logrando puntuaciones de 95-100 en Google Lighthouse de manera natural.",
            "B) Seguridad Blindada: Al no haber una base de datos expuesta al tráfico público ni panel de administración genérico (/wp-admin), los ataques de fuerza bruta y las inyecciones SQL quedan completamente neutralizados.",
            "C) Escalabilidad Infinita: Tu web puede recibir 100 o 100.000 visitas simultáneas tras una campaña en medios sin ralentizarse ni requerir servidores caros.",
          ],
          quote: {
            text: "En tecnología no gana quien tiene más herramientas pegadas con parches, sino quien utiliza la arquitectura más limpia y eficiente.",
            author: "Área Técnica & Desarrollo en Parpell",
          },
        },
        {
          heading: "3. La experiencia de usuario y el posicionamiento SEO / GEO",
          body: [
            "Tanto Google como los rastreadores de IA premian las webs con código semántico ligero. En Next.js el control del DOM es absoluto, permitiendo inyectar esquemas JSON-LD dinámicos, fuentes autoalojadas sin retraso y animaciones fluidas a 60 fps que elevan la percepción de estatus de la empresa.",
          ],
        },
      ],
      conclusion:
        "Migrar a Next.js no es solo una mejora técnica: es una decisión de inversión que reduce costes de mantenimiento, protege la reputación de tu marca y dispara la conversión de tus visitas.",
      faqs: [
        {
          q: "¿Es muy complejo migrar una web existente de WordPress a Next.js?",
          a: "En Parpell nos encargamos de todo el proceso llave en mano: exportación de contenidos, diseño a medida, configuración de redirecciones 301 para no perder posiciones SEO y migración técnica en pocos días.",
        },
        {
          q: "¿Podré editar los textos del blog tras la migración?",
          a: "Sí, podemos conectar la arquitectura a paneles headless amigables o gestionar el contenido mediante esquemas tipados con cero riesgo de rotura técnica.",
        },
      ],
    },
  },
  {
    slug: "schema-org-json-ld-guia-tecnica-avanzada-para-ia",
    title: "Schema.org y JSON-LD avanzado: La guía técnica definitiva para que los LLMs indexen tu negocio",
    subtitle: "Cómo estructurar el código semántico de tu web para que ChatGPT, Perplexity y Gemini entiendan tu catálogo, precios y autoridad local sin errores.",
    excerpt: "Los motores de IA no leen el diseño visual: procesan grafos de conocimiento. Aprende a implementar los esquemas JSON-LD que garantizan la indexación perfecta de tu empresa.",
    date: "15 de Junio, 2026",
    isoDate: "2026-06-15T08:30:00.000Z",
    isoModified: "2026-06-20T11:00:00.000Z",
    readTime: "7 min de lectura",
    category: "Arquitectura & Rendimiento",
    categorySlug: "ia-geo",
    author: AUTHOR_TECNICO,
    coverGradient: "from-[#1A1A2E] via-[#16213E] to-[#120610]",
    tags: ["Schema.org", "JSON-LD", "SEO Semántico", "Grafos de Entidad", "Datos Estructurados", "Next.js"],
    keywords: [
      "Schema.org para Inteligencia Artificial",
      "JSON-LD ejemplos SEO",
      "datos estructurados para ChatGPT",
      "schema LocalBusiness y Organization",
      "SEO semantico avanzado",
      "optimizacion de grafos de conocimiento",
      "indexacion LLM en Next.js",
    ],
    keyTakeaways: [
      "El Schema Markup en formato JSON-LD es el lenguaje nativo con el que los LLMs extraen datos inequívocos sobre empresas.",
      "Los esquemas fundamentales para B2B y negocios locales son: Organization, LocalBusiness, Service, Review, BreadcrumbList y FAQPage.",
      "Vincular tus perfiles sociales y registros oficiales mediante la propiedad `sameAs` unifica tu entidad digital en el Knowledge Graph de Google y OpenAI.",
      "Las páginas con FAQPage y Service detallado tienen un 400% más de probabilidad de ser citadas como respuesta directa en SearchGPT.",
    ],
    content: {
      intro:
        "Cuando un humano visita tu web, observa los colores, las fotos y la tipografía. Pero cuando un bot de ChatGPT, Perplexity o Googlebot rastrea tu servidor, solo analiza cadenas de texto y relaciones de datos. Si tu web no incluye datos estructurados Schema.org en formato JSON-LD, el modelo tiene que «adivinar» qué servicios ofreces, dónde estás ubicado o quiénes son tus directivos. En esta guía técnica desvelamos cómo estructurar el marcado semántico para convertir tu web en un grafo de certeza para la IA.",
      sections: [
        {
          heading: "1. ¿Por qué JSON-LD es el estándar obligatorio para GEO?",
          body: [
            "Durante años existieron microformatos y Microdata embebidos en el HTML. Hoy, el 100% de los motores de búsqueda y modelos de lenguaje recomiendan exclusivamente JSON-LD (JavaScript Object Notation for Linked Data) dentro de etiquetas `<script type=\"application/ld+json\">`.",
            "JSON-LD separa la capa de datos de la capa visual, permitiendo definir atributos complejos (precios, horarios, coordenadas GPS, credenciales profesionales de los fundadores) de forma limpia y sin penalizar la velocidad de carga.",
          ],
          highlightBox: {
            title: "Propiedad Crítica: sameAs",
            text: "La propiedad `sameAs` en el esquema Organization permite enlazar tu URL con Wikidata, Google Maps, LinkedIn y registros mercantiles, consolidando tu grafo de entidad ante los LLMs.",
          },
        },
        {
          heading: "2. Los 4 Esquemas imprescindibles en una web de alto rendimiento",
          body: [
            "1) Organization & LocalBusiness: Define el nombre legal, identificador fiscal, teléfonos de contacto directo, dirección física y área de servicio geográfica.",
            "2) Service & Offer: Detalla cada servicio específico, categoría industrial, moneda y condiciones de contratación.",
            "3) Person (E-E-A-T): Acredita a los autores y socios responsables del contenido con sus títulos oficiales, formación y experiencia demostrable.",
            "4) FAQPage: Estructura preguntas y respuestas textuales que los motores generativos extraen para responder consultas de usuarios en directo.",
          ],
          quote: {
            text: "Sin datos estructurados, tu empresa es un texto ambiguo en internet. Con JSON-LD bien diseñado, tu empresa es una entidad indiscutible en los grafos de la IA.",
            author: "Área Técnica & Desarrollo en Parpell",
          },
        },
        {
          heading: "3. Cómo implementar JSON-LD dinámico en Next.js",
          body: [
            "En arquitecturas Next.js modernas, generamos el bloque JSON-LD directamente en el servidor durante la construcción estática o en Server Components. Esto asegura que cualquier crawler reciba el esquema instantáneamente sin depender de la ejecución de JavaScript en cliente.",
          ],
        },
      ],
      conclusion:
        "Implementar Schema.org avanzado es una de las inversiones técnicas con mayor retorno en posicionamiento orgánico y visibilidad en Inteligencia Artificial. En Parpell integramos esquemas exhaustivos en cada proyecto.",
      faqs: [
        {
          q: "¿Cómo puedo validar si los datos estructurados de mi web son correctos?",
          a: "Puedes utilizar la herramienta oficial de Prueba de Resultados Enriquecidos de Google (Rich Results Test) y el Validador de Schema.org.",
        },
        {
          q: "¿El marcado JSON-LD afecta a la velocidad de carga de la web?",
          a: "No. Al tratarse de un bloque de texto JSON inerte dentro del encabezado o pie, el impacto en tiempo de renderizado es prácticamente cero (menos de 1 milisegundo).",
        },
      ],
    },
  },
];
