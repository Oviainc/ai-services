/* OVIA Inc Studio Lab, site assistant.
   Static and self contained: no backend, no external service, no network calls.
   Nothing typed in the panel is sent anywhere; answers are produced on the device.
   Scope: OVIA only. Anything else is answered with the house line. */
(function () {
  "use strict";

  var KB = {
    en: {
      ui: {
        open: "Got questions?",
        title: "OVIA Inc Studio Lab",
        placeholder: "Ask about offerings, method, pricing",
        send: "Send",
        privacy: "Nothing typed here is sent anywhere. Answers are produced on your device.",
        welcome: "OVIA is a studio and a lab that designs, builds and runs technology for anyone, in any domain: technology that answers, learns, creates, immerses, protects and lasts, all of it managed end to end. Welcome. Ask about the offerings, the method, or pricing, or choose a topic.",
        fallback: "All we know is OVIA. Ask about the offerings, the method, or pricing, or use the contact section, which reaches the studio and the lab directly.",
        contactBtn: "Go to the contact section",
        chips: ["Offerings", "Pricing", "The method", "Carte Blanche", "Contact"]
      },
      intents: [
        { id: "pricing", k: ["price", "pricing", "cost", "how much", "rate", "rates", "fee", "fees", "quote", "expensive", "budget"],
          a: "OVIA is premium by design, and every engagement is priced the same way: it opens with an audit at $495, credited in full against a first engagement. The audit produces a written plan at a fixed price, before anything starts. There is no public price list, because no two operations are the same. Every serious inquiry is answered within one business day." },
        { id: "audit", k: ["audit", "assessment", "diagnostic"],
          a: "The audit is the front door. Your operation is examined as it runs today, and the findings come back as a written plan: what will be done, how long the work takes, and what the work costs, at a fixed price. The audit fee is $495, credited in full against a first engagement." },
        { id: "agents", k: ["agent", "agents", "reception", "front desk", "booking", "bookings", "follow up", "follow-up", "after hours", "phone", "calls", "messages answered"],
          a: "Agents and autonomous workflows. Your front desk, follow-up and bookings, handled every day, to your rules: calls and messages answered, appointments booked, quotes and invoices followed up. The agents understand everyday language and answer on the spot. Configured on your own tools, evaluated before launch, and scored in live operation. Deliverable: a configured agent team on your own tools, managed daily, with a person able to step in at any point." },
        { id: "ml", k: ["machine learning", "ml", "prediction", "forecast", "warning", "warnings", "data", "stock", "inventory", "unused seats", "bills", "ledgers"],
          a: "Machine learning, in production. Machine learning that earns trust before it asks for it: warnings drawn from your own ledgers, stock, workload, mismatched bills, subscriptions paying for unused seats. Each model is validated on held-out records, monitored for drift, and corrected when the data moves. Deliverable: an early warning system on your own records, stock, workload, late orders and slow payers flagged while there is still time to act, checked daily and kept accurate by the team that built it." },
        { id: "products", k: ["product", "products", "website", "storefront", "shop", "app", "screen", "catalogue", "build me"],
          a: "Products people actually use. Products engineered to a written specification: a storefront that sells the company itself, a catalogue enriched until every item is findable, an internal screen a team opens daily. Verified against the specification at delivery, measured in use after it. Deliverable: the planned, designed and built product itself, website, booking flow or internal screen, plus the source behind it, managed after launch by the same team." },
        { id: "immersive", k: ["immersive", "simulation", "virtual", "3d", "training run", "stage"],
          a: "Immersive and connected. Simulation used as evidence: a space, a stage or a training run can be walked through and judged before anything is built, in any modern browser, on ordinary hardware. Deliverable: an interactive preview in any modern browser." },
        { id: "cloud", k: ["cloud", "security", "cybersecurity", "backup", "backups", "infrastructure", "servers", "storage"],
          a: "Cloud, security and IT. Infrastructure under continuous verification. Backups are restore tested, not merely scheduled; access is audited; protection against intrusion and fraud is maintained continuously, and routine problems are resolved before they reach your team. When something does go wrong, one call reaches the team that built the system. Deliverable: managed storage and verified backups, security kept current, and a single point of contact." },
        { id: "design", k: ["design", "sustainable", "brand", "identity"],
          a: "Sustainable design. Design reduced to a documented system: measured rules, the source files behind them, and standards written so any team can apply them and check the result. A public face that does not need to be reinvented every season, and stays correct for years. Deliverable: the design itself, the source files behind it, and the usage rules that keep it consistent." },
        { id: "carte", k: ["carte blanche", "whole operation", "everything", "all of it", "full operation"],
          a: "Carte Blanche. The whole operation as one engagement: the front desk, the alerts, the presence and the underpinnings, conceived, gathered and run end to end by the studio and the lab. Every engagement opens with an audit, proceeds on a written plan at a fixed price, and is managed as a running, measured system." },
        { id: "offerings", k: ["offering", "offerings", "service", "services", "what do you do", "what can you do", "help with", "offer"],
          a: "What is offered, in full. Six offerings, one operation. Agents and autonomous workflows: your front desk, follow-up and bookings handled every day. Machine learning, in production: warnings drawn from your own records. Products people actually use: storefronts, booking flows and internal screens, engineered to a written specification. Immersive and connected: simulation used as evidence before anything is built. Cloud, security and IT: infrastructure under continuous verification, backups restore tested. Sustainable design: design reduced to a documented system. Carte Blanche gathers the whole operation into one engagement. Every engagement opens with an audit and runs as a managed system. Ask about any offering by name for the full detail." },
        { id: "method", k: ["method", "process", "how do you work", "how it works", "steps", "start", "begin", "timeline", "how long"],
          a: "Every engagement opens with an audit, proceeds on a written plan at a fixed price, and runs as a managed system. Nothing is handed over and hoped for. The people you meet are the people who do the work. Timing is set in the written plan, before anything starts." },
        { id: "safeguards", k: ["safeguard", "safeguards", "privacy", "my data", "safe", "confidential", "trust", "own my", "ownership"],
          a: "All of the benefit, with the safeguards built in. Your data stays yours: your information is used only for your business, never shared, and never used to help anyone else, and who owns what is agreed in plain writing before anything starts. You can always see what your helper did, and why; a person can check it, correct it or step in at any time. How client data and AI tools are handled is documented in full on the Privacy and AI Transparency page.",
          link: { href: "privacy.html", label: "Privacy and AI Transparency" } },
        { id: "magazine", k: ["magazine", "articles", "read", "issue", "journal"],
          a: "The Magazine is quarterly, one issue at a time, published from the studio and the lab, every piece with its references in the open.",
          link: { href: "magazine/", label: "Open the Magazine" } },
        { id: "menus", k: ["menu", "menus", "food", "dinner", "seasonal"],
          a: "The menus are the house's second language: four seasonal menus, an a la carte, and hors serie editions, each readable as dinner and as a map of the field.",
          link: { href: "menus/", label: "Open the menus" } },
        { id: "merchandise", k: ["merchandise", "clothing", "buy a", "order"],
          a: "The merchandise line carries the house's pieces, made to order by request.",
          link: { href: "merchandise/", label: "Open the merchandise" } },
        { id: "contact", k: ["contact", "talk", "human", "person", "email", "reach", "consultation"],
          a: "The contact section reaches the studio and the lab directly. Every serious inquiry is answered within one business day, and every engagement is contracted in writing, with a fixed price and a named person responsible.",
          contact: true },
        { id: "whatis", k: ["what is ovia", "who are you", "about ovia", "what does ovia do", "tell me about ovia", "define ovia"], a: "OVIA is a studio and a lab that designs, builds and runs technology for anyone, in any domain: technology that answers, learns, creates, immerses, protects and lasts, all of it managed end to end. Ask about the offerings for what can be run for you, or about any offering by name for the full detail." },
        { id: "hello", k: ["hello", "hi", "hey", "good morning", "good afternoon"],
          a: "Welcome. Ask about the offerings, the method, or pricing, or choose a topic below." }
      ]
    },
    fr: {
      ui: {
        open: "Des questions ?",
        title: "OVIA Inc Studio Lab",
        placeholder: "Offres, méthode, tarifs",
        send: "Envoyer",
        privacy: "Rien de ce qui est tapé ici n'est envoyé nulle part. Les réponses sont produites sur votre appareil.",
        welcome: "OVIA est un studio et un laboratoire qui conçoit, construit et exploite la technologie pour tout le monde, dans tout domaine : une technologie qui répond, apprend, crée, immerge, protège et dure, le tout géré de bout en bout. Bienvenue. Posez une question sur les offres, la méthode ou les tarifs, ou choisissez un sujet.",
        fallback: "Tout ce que nous connaissons, c'est OVIA. Posez une question sur les offres, la méthode ou les tarifs, ou utilisez la section contact, qui joint directement le studio et le laboratoire.",
        contactBtn: "Aller à la section contact",
        chips: ["Offres", "Tarifs", "La méthode", "Carte Blanche", "Contact"]
      },
      intents: [
        { id: "pricing", k: ["prix", "tarif", "tarifs", "cout", "combien", "honoraires", "devis", "cher", "budget"],
          a: "OVIA est premium par conception, et chaque engagement est tarifé de la même façon : il s'ouvre par un audit à 495 $, crédité en entier sur un premier engagement. L'audit produit un plan écrit à prix fixe, avant que quoi que ce soit commence. Il n'y a pas de liste de prix publique, parce qu'aucune opération ne ressemble à une autre. Toute demande sérieuse reçoit une réponse sous un jour ouvrable." },
        { id: "audit", k: ["audit", "evaluation", "diagnostic"],
          a: "L'audit est la porte d'entrée. Votre opération est examinée telle qu'elle roule aujourd'hui, et les constats reviennent sous forme de plan écrit : ce qui sera fait, combien de temps le travail prendra, et ce que le travail coûtera, à prix fixe. Les frais d'audit sont de 495 $, crédités en entier sur un premier engagement." },
        { id: "agents", k: ["agent", "agents", "accueil", "reception", "reservation", "reservations", "suivi", "relances", "telephone", "appels", "apres les heures"],
          a: "Agents et flux de travail autonomes. Votre accueil, vos relances et vos réservations, traités chaque jour, selon vos règles : appels et messages répondus, rendez-vous réservés, devis et factures relancés. Les agents comprennent le langage de tous les jours et répondent sur le champ. Configurés sur vos propres outils, évalués avant le lancement, et notés en exploitation réelle. Livrable : une équipe d'agents configurée sur vos propres outils, gérée chaque jour, avec une personne capable d'intervenir à tout moment." },
        { id: "ml", k: ["apprentissage", "machine learning", "prediction", "prevision", "alerte", "alertes", "donnees", "stock", "inventaire", "sieges", "factures", "registres"],
          a: "Apprentissage machine, en production. Un apprentissage qui gagne la confiance avant de la demander : des alertes tirées de vos propres registres, stock, charge de travail, factures discordantes, abonnements qui paient pour des sièges inutilisés. Chaque modèle est validé sur des dossiers tenus à l'écart, surveillé pour la dérive, et corrigé quand les données bougent. Livrable : un système d'alerte précoce sur vos propres dossiers, stock, charge de travail, commandes en retard et payeurs lents signalés pendant qu'il reste du temps d'agir, vérifié chaque jour et tenu exact par l'équipe qui l'a construit." },
        { id: "products", k: ["produit", "produits", "site web", "boutique", "application", "ecran", "vitrine", "catalogue"],
          a: "Des produits que les gens utilisent vraiment. Des produits conçus selon une spécification écrite : une vitrine qui vend l'entreprise elle-même, un catalogue enrichi jusqu'à ce que chaque article soit trouvable, un écran interne qu'une équipe ouvre chaque jour. Vérifiés contre la spécification à la livraison, mesurés en usage ensuite. Livrable : le produit lui-même, planifié, conçu et construit, site web, parcours de réservation ou écran interne, plus les sources derrière lui, gérés après le lancement par la même équipe." },
        { id: "immersive", k: ["immersif", "simulation", "virtuel", "3d", "formation", "scene"],
          a: "Immersif et connecté. La simulation utilisée comme preuve : un espace, une scène ou un parcours de formation peut être parcouru et jugé avant que quoi que ce soit soit construit, dans tout navigateur moderne, sur du matériel ordinaire. Livrable : un aperçu interactif dans tout navigateur moderne." },
        { id: "cloud", k: ["nuage", "cloud", "securite", "cybersecurite", "sauvegarde", "sauvegardes", "infrastructure", "serveurs", "stockage"],
          a: "Nuage, sécurité et TI. Une infrastructure sous vérification continue. Les sauvegardes sont testées en restauration, jamais seulement planifiées ; les accès sont audités ; la protection contre l'intrusion et la fraude est maintenue en continu, et les problèmes courants sont résolus avant d'atteindre votre équipe. Quand quelque chose tourne mal, un seul appel joint l'équipe qui a construit le système. Livrable : un stockage géré et des sauvegardes vérifiées, une sécurité tenue à jour, et un seul point de contact." },
        { id: "design", k: ["design", "durable", "marque", "identite"],
          a: "Design durable. Le design réduit à un système documenté : des règles mesurées, les fichiers sources derrière elles, et des standards écrits pour que toute équipe puisse les appliquer et vérifier le résultat. Un visage public qui n'a pas à être réinventé chaque saison, et qui reste juste pendant des années. Livrable : le design lui-même, les fichiers sources derrière lui, et les règles d'usage qui le gardent cohérent." },
        { id: "carte", k: ["carte blanche", "toute l'operation", "tout", "operation complete", "ensemble"],
          a: "Carte Blanche. L'opération entière comme un seul engagement : l'accueil, les alertes, la présence et les fondations, conçus, rassemblés et exploités de bout en bout par le studio et le laboratoire. Chaque engagement s'ouvre par un audit, se poursuit sur un plan écrit à prix fixe, et roule comme un système géré et mesuré." },
        { id: "offerings", k: ["offre", "offres", "service", "services", "que faites-vous", "aide", "proposez"],
          a: "Ce qui est offert, au complet. Six offres, une seule opération. Agents et flux de travail autonomes : votre accueil, vos relances et vos réservations traités chaque jour. Apprentissage machine, en production : des alertes tirées de vos propres dossiers. Des produits que les gens utilisent vraiment : vitrines, parcours de réservation et écrans internes, conçus selon une spécification écrite. Immersif et connecté : la simulation utilisée comme preuve avant que quoi que ce soit soit construit. Nuage, sécurité et TI : une infrastructure sous vérification continue, des sauvegardes testées en restauration. Design durable : le design réduit à un système documenté. Carte Blanche rassemble l'opération entière en un seul engagement. Chaque engagement s'ouvre par un audit et roule comme un système géré. Demandez une offre par son nom pour le détail complet." },
        { id: "method", k: ["methode", "processus", "comment travaillez-vous", "comment ca marche", "etapes", "commencer", "delai", "combien de temps"],
          a: "Chaque engagement s'ouvre par un audit, se poursuit sur un plan écrit à prix fixe, et roule comme un système géré. Rien n'est remis en espérant que cela tienne. Les personnes que vous rencontrez sont les personnes qui font le travail. Les délais sont fixés dans le plan écrit, avant que quoi que ce soit commence." },
        { id: "safeguards", k: ["garanties", "confidentialite", "mes donnees", "vie privee", "confiance", "propriete"],
          a: "Tout le bénéfice, avec les garanties intégrées. Vos données restent les vôtres : vos informations ne servent qu'à votre entreprise, ne sont jamais partagées, et ne servent jamais à aider qui que ce soit d'autre, et la propriété de chaque chose est convenue par écrit clair avant le départ. Vous pouvez toujours voir ce que votre aide a fait, et pourquoi ; une personne peut le vérifier, le corriger ou intervenir à tout moment. La façon dont les données des clients et les outils d'IA sont traités est documentée au complet sur la page Confidentialité et transparence de l'IA.",
          link: { href: "privacy.html", label: "Confidentialité et transparence de l'IA" } },
        { id: "magazine", k: ["magazine", "articles", "lire", "numero", "journal"],
          a: "Le Magazine est trimestriel, un numéro à la fois, publié par le studio et le laboratoire, chaque pièce avec ses références au grand jour.",
          link: { href: "magazine/", label: "Ouvrir le Magazine" } },
        { id: "menus", k: ["menu", "menus", "nourriture", "diner", "saison"],
          a: "Les menus sont la seconde langue de la maison : quatre menus de saison, un à la carte, et des éditions hors série, chacun lisible comme un dîner et comme une carte du domaine.",
          link: { href: "menus/", label: "Ouvrir les menus" } },
        { id: "merchandise", k: ["marchandise", "vetements", "acheter", "commander"],
          a: "La ligne de marchandise porte les pièces de la maison, faites sur commande, par demande.",
          link: { href: "merchandise/", label: "Ouvrir la marchandise" } },
        { id: "contact", k: ["contact", "parler", "humain", "personne", "courriel", "joindre", "consultation"],
          a: "La section contact joint directement le studio et le laboratoire. Toute demande sérieuse reçoit une réponse sous un jour ouvrable, et chaque engagement est contracté par écrit, à prix fixe, avec une personne nommée responsable.",
          contact: true },
        { id: "whatis", k: ["qu'est-ce qu'ovia", "quest-ce quovia", "qui etes-vous", "a propos d'ovia", "que fait ovia", "c'est quoi ovia"], a: "OVIA est un studio et un laboratoire qui conçoit, construit et exploite la technologie pour tout le monde, dans tout domaine : une technologie qui répond, apprend, crée, immerge, protège et dure, le tout géré de bout en bout. Posez une question sur les offres pour ce qui peut être exploité pour vous, ou sur une offre par son nom pour le détail complet." },
        { id: "hello", k: ["bonjour", "salut", "bonsoir"],
          a: "Bienvenue. Posez une question sur les offres, la méthode ou les tarifs, ou choisissez un sujet ci-dessous." }
      ]
    },
    es: {
      ui: {
        open: "¿Preguntas?",
        title: "OVIA Inc Studio Lab",
        placeholder: "Ofertas, método, precios",
        send: "Enviar",
        privacy: "Nada de lo que se escribe aquí se envía a ninguna parte. Las respuestas se producen en su dispositivo.",
        welcome: "OVIA es un estudio y un laboratorio que diseña, construye y opera tecnología para cualquiera, en cualquier dominio: tecnología que responde, aprende, crea, sumerge, protege y perdura, todo ello gestionado de principio a fin. Bienvenido. Pregunte por las ofertas, el método o los precios, o elija un tema.",
        fallback: "Todo lo que conocemos es OVIA. Pregunte por las ofertas, el método o los precios, o use la sección de contacto, que llega directamente al estudio y al laboratorio.",
        contactBtn: "Ir a la sección de contacto",
        chips: ["Ofertas", "Precios", "El método", "Carte Blanche", "Contacto"]
      },
      intents: [
        { id: "pricing", k: ["precio", "precios", "costo", "cuanto", "cuesta", "tarifa", "honorarios", "cotizacion", "caro", "presupuesto"],
          a: "OVIA es premium por diseño, y cada encargo se cotiza de la misma manera: se abre con una auditoría de $495, acreditada por completo contra un primer encargo. La auditoría produce un plan escrito a precio fijo, antes de que empiece nada. No hay lista pública de precios, porque ninguna operación es igual a otra. Toda consulta seria recibe respuesta en un día laborable." },
        { id: "audit", k: ["auditoria", "evaluacion", "diagnostico"],
          a: "La auditoría es la puerta de entrada. Su operación se examina tal como funciona hoy, y los hallazgos vuelven como un plan escrito: qué se hará, cuánto tiempo tomará el trabajo y cuánto costará el trabajo, a precio fijo. La tarifa de auditoría es de $495, acreditada por completo contra un primer encargo." },
        { id: "agents", k: ["agente", "agentes", "recepcion", "reservas", "seguimiento", "telefono", "llamadas", "fuera de horario"],
          a: "Agentes y flujos de trabajo autónomos. Su recepción, sus seguimientos y sus reservas, atendidos cada día, según sus reglas: llamadas y mensajes respondidos, citas reservadas, cotizaciones y facturas seguidas. Los agentes entienden el lenguaje de todos los días y responden en el acto. Configurados en sus propias herramientas, evaluados antes del lanzamiento, y puntuados en operación real. Entregable: un equipo de agentes configurado en sus propias herramientas, gestionado a diario, con una persona capaz de intervenir en cualquier momento." },
        { id: "ml", k: ["aprendizaje", "machine learning", "prediccion", "pronostico", "alerta", "alertas", "datos", "inventario", "asientos", "facturas", "registros"],
          a: "Aprendizaje automático, en producción. Un aprendizaje que se gana la confianza antes de pedirla: alertas extraídas de sus propios registros, existencias, carga de trabajo, facturas discordantes, suscripciones que pagan por asientos sin usar. Cada modelo se valida con registros apartados, se vigila por deriva, y se corrige cuando los datos se mueven. Entregable: un sistema de alerta temprana sobre sus propios registros, existencias, carga de trabajo, pedidos atrasados y pagadores lentos señalados mientras aún hay tiempo de actuar, verificado a diario y mantenido exacto por el equipo que lo construyó." },
        { id: "products", k: ["producto", "productos", "sitio web", "tienda", "aplicacion", "pantalla", "escaparate", "catalogo"],
          a: "Productos que la gente realmente usa. Productos diseñados según una especificación escrita: un escaparate que vende la propia empresa, un catálogo enriquecido hasta que cada artículo sea encontrable, una pantalla interna que un equipo abre a diario. Verificados contra la especificación en la entrega, medidos en el uso después. Entregable: el producto en sí, planificado, diseñado y construido, sitio web, flujo de reserva o pantalla interna, más el código fuente detrás de él, gestionado tras el lanzamiento por el mismo equipo." },
        { id: "immersive", k: ["inmersivo", "simulacion", "virtual", "3d", "formacion", "escenario"],
          a: "Inmersivo y conectado. La simulación usada como evidencia: un espacio, un escenario o un recorrido de formación puede recorrerse y juzgarse antes de que se construya nada, en cualquier navegador moderno, con hardware ordinario. Entregable: una vista previa interactiva en cualquier navegador moderno." },
        { id: "cloud", k: ["nube", "cloud", "seguridad", "ciberseguridad", "respaldo", "respaldos", "infraestructura", "servidores", "almacenamiento"],
          a: "Nube, seguridad y TI. Infraestructura bajo verificación continua. Los respaldos se prueban en restauración, no solo se programan; el acceso se audita; la protección contra intrusiones y fraude se mantiene de forma continua, y los problemas rutinarios se resuelven antes de llegar a su equipo. Cuando algo sale mal, una sola llamada llega al equipo que construyó el sistema. Entregable: almacenamiento gestionado y respaldos verificados, seguridad mantenida al día, y un solo punto de contacto." },
        { id: "design", k: ["diseno", "sostenible", "marca", "identidad"],
          a: "Diseño sostenible. El diseño reducido a un sistema documentado: reglas medidas, los archivos fuente detrás de ellas, y estándares escritos para que cualquier equipo pueda aplicarlos y comprobar el resultado. Un rostro público que no necesita reinventarse cada temporada, y que se mantiene correcto durante años. Entregable: el diseño en sí, los archivos fuente detrás de él, y las reglas de uso que lo mantienen consistente." },
        { id: "carte", k: ["carte blanche", "toda la operacion", "todo", "operacion completa", "conjunto"],
          a: "Carte Blanche. La operación entera como un solo encargo: la recepción, las alertas, la presencia y los cimientos, concebidos, reunidos y operados de principio a fin por el estudio y el laboratorio. Cada encargo se abre con una auditoría, continúa con un plan escrito a precio fijo, y funciona como un sistema gestionado y medido." },
        { id: "offerings", k: ["oferta", "ofertas", "servicio", "servicios", "que hacen", "ayuda", "ofrecen"],
          a: "Lo que se ofrece, al completo. Seis ofertas, una sola operación. Agentes y flujos de trabajo autónomos: su recepción, sus seguimientos y sus reservas atendidos cada día. Aprendizaje automático, en producción: alertas extraídas de sus propios registros. Productos que la gente realmente usa: escaparates, flujos de reserva y pantallas internas, diseñados según una especificación escrita. Inmersivo y conectado: la simulación usada como evidencia antes de que se construya nada. Nube, seguridad y TI: infraestructura bajo verificación continua, respaldos probados en restauración. Diseño sostenible: el diseño reducido a un sistema documentado. Carte Blanche reúne la operación entera en un solo encargo. Cada encargo se abre con una auditoría y funciona como un sistema gestionado. Pregunte por cualquier oferta por su nombre para el detalle completo." },
        { id: "method", k: ["metodo", "proceso", "como trabajan", "como funciona", "pasos", "empezar", "plazo", "cuanto tiempo"],
          a: "Cada encargo se abre con una auditoría, continúa con un plan escrito a precio fijo, y funciona como un sistema gestionado. Nada se entrega esperando que aguante. Las personas que conoce son las personas que hacen el trabajo. Los plazos se fijan en el plan escrito, antes de que empiece nada." },
        { id: "safeguards", k: ["garantias", "privacidad", "mis datos", "confidencial", "confianza", "propiedad"],
          a: "Todo el beneficio, con las garantías integradas. Sus datos siguen siendo suyos: su información se usa solo para su empresa, nunca se comparte, y nunca se usa para ayudar a nadie más, y la propiedad de cada cosa se acuerda por escrito claro antes de empezar. Siempre puede ver qué hizo su ayudante, y por qué; una persona puede comprobarlo, corregirlo o intervenir en cualquier momento. La forma en que se tratan los datos de los clientes y las herramientas de IA está documentada por completo en la página Privacidad y transparencia de la IA.",
          link: { href: "privacy.html", label: "Privacidad y transparencia de la IA" } },
        { id: "magazine", k: ["magazine", "revista", "articulos", "leer", "numero"],
          a: "La Magazine es trimestral, un número a la vez, publicada desde el estudio y el laboratorio, cada pieza con sus referencias a la vista.",
          link: { href: "magazine/", label: "Abrir la Magazine" } },
        { id: "menus", k: ["menu", "menus", "comida", "cena", "temporada"],
          a: "Los menús son la segunda lengua de la casa: cuatro menús de temporada, uno a la carta, y ediciones hors série, cada uno legible como una cena y como un mapa del campo.",
          link: { href: "menus/", label: "Abrir los menús" } },
        { id: "merchandise", k: ["mercancia", "ropa", "comprar", "pedir"],
          a: "La línea de mercancía lleva las piezas de la casa, hechas por encargo, bajo petición.",
          link: { href: "merchandise/", label: "Abrir la mercancía" } },
        { id: "contact", k: ["contacto", "hablar", "humano", "persona", "correo", "consulta"],
          a: "La sección de contacto llega directamente al estudio y al laboratorio. Toda consulta seria recibe respuesta en un día laborable, y cada encargo se contrata por escrito, a precio fijo, con una persona nombrada responsable.",
          contact: true },
        { id: "whatis", k: ["que es ovia", "quienes son", "acerca de ovia", "que hace ovia"], a: "OVIA es un estudio y un laboratorio que diseña, construye y opera tecnología para cualquiera, en cualquier dominio: tecnología que responde, aprende, crea, sumerge, protege y perdura, todo ello gestionado de principio a fin. Pregunte por las ofertas para lo que puede operarse para usted, o por cualquier oferta por su nombre para el detalle completo." },
        { id: "hello", k: ["hola", "buenos dias", "buenas tardes"],
          a: "Bienvenido. Pregunte por las ofertas, el método o los precios, o elija un tema abajo." }
      ]
    }
  };

  /* Core languages: the core answers in full (pricing guardrails, audit, offerings
     overview, method, Carte Blanche, contact, safeguards line). Detailed offering
     answers are served from the English knowledge set, as the site itself serves
     its full text in the three house languages. */
  var CORE = {
    pt: { ui: { open: "Perguntas?", title: "OVIA Inc Studio Lab", placeholder: "Ofertas, método, preços", send: "Enviar",
      privacy: "Nada do que é escrito aqui é enviado para lado nenhum. As respostas são produzidas no seu dispositivo.",
      welcome: "A OVIA é um estúdio e um laboratório que desenha, constrói e opera tecnologia para qualquer pessoa, em qualquer domínio: tecnologia que responde, aprende, cria, envolve, protege e dura, tudo gerido de ponta a ponta. Bem-vindo. Pergunte pelas ofertas, pelo método ou pelos preços, ou escolha um tema.",
      fallback: "Tudo o que conhecemos é a OVIA. Pergunte pelas ofertas, pelo método ou pelos preços, ou use a secção de contacto, que chega diretamente ao estúdio e ao laboratório.",
      contactBtn: "Ir para a secção de contacto", chips: ["Ofertas", "Preços", "O método", "Carte Blanche", "Contacto"] },
      intents: [
        { id: "pricing", k: ["preco", "precos", "custo", "custa", "quanto", "tarifa", "orcamento", "caro"], a: "A OVIA é premium por desenho, e cada trabalho é cotado da mesma maneira: abre com uma auditoria de 495 $, creditada por inteiro num primeiro trabalho. A auditoria produz um plano escrito a preço fixo, antes de qualquer coisa começar. Não há lista pública de preços, porque nenhuma operação é igual a outra. Cada pedido sério recebe resposta num dia útil." },
        { id: "audit", k: ["auditoria", "avaliacao", "diagnostico"], a: "A auditoria é a porta de entrada. A sua operação é examinada tal como funciona hoje, e os resultados voltam como um plano escrito: o que será feito, quanto tempo o trabalho leva, e quanto o trabalho custa, a preço fixo. A tarifa da auditoria é de 495 $, creditada por inteiro num primeiro trabalho." },
        { id: "offerings", k: ["oferta", "ofertas", "servico", "servicos", "o que fazem", "ajuda"], a: "O que é oferecido, por completo. Seis ofertas, uma só operação. Agentes e fluxos de trabalho autónomos: a sua receção, os seus seguimentos e as suas reservas tratados todos os dias. Aprendizagem automática, em produção: alertas tirados dos seus próprios registos. Produtos que as pessoas realmente usam: montras, fluxos de reserva e ecrãs internos, desenhados segundo uma especificação escrita. Imersivo e ligado: a simulação usada como prova antes de qualquer construção. Nuvem, segurança e TI: infraestrutura sob verificação contínua, cópias de segurança testadas em restauro. Design sustentável: o design reduzido a um sistema documentado. A Carte Blanche reúne a operação inteira num só trabalho. Cada trabalho abre com uma auditoria e funciona como um sistema gerido. Pergunte por qualquer oferta pelo nome para o detalhe completo." },
        { id: "method", k: ["metodo", "processo", "como trabalham", "como funciona", "comecar", "prazo", "quanto tempo"], a: "Cada trabalho abre com uma auditoria, continua com um plano escrito a preço fixo, e funciona como um sistema gerido. Nada é entregue à espera que aguente. As pessoas que conhece são as pessoas que fazem o trabalho. Os prazos são fixados no plano escrito, antes de qualquer coisa começar." },
        { id: "carte", k: ["carte blanche", "toda a operacao", "tudo", "operacao completa"], a: "Carte Blanche. A operação inteira como um só trabalho: a receção, os alertas, a presença e as fundações, concebidos, reunidos e operados de ponta a ponta pelo estúdio e pelo laboratório." },
        { id: "contact", k: ["contacto", "falar", "humano", "pessoa", "email", "consulta"], a: "A secção de contacto chega diretamente ao estúdio e ao laboratório. Cada pedido sério recebe resposta num dia útil, e cada trabalho é contratado por escrito, a preço fixo, com uma pessoa nomeada responsável.", contact: true },
        { id: "whatis", k: ["o que e a ovia", "quem sao voces", "sobre a ovia", "o que faz a ovia"], a: "A OVIA é um estúdio e um laboratório que desenha, constrói e opera tecnologia para qualquer pessoa, em qualquer domínio: tecnologia que responde, aprende, cria, envolve, protege e dura, tudo gerido de ponta a ponta. Pergunte pelas ofertas, ou por qualquer oferta pelo nome, para o detalhe completo." },
        { id: "hello", k: ["ola", "bom dia", "boa tarde"], a: "Bem-vindo. Pergunte pelas ofertas, pelo método ou pelos preços, ou escolha um tema abaixo." } ] },
    de: { ui: { open: "Fragen?", title: "OVIA Inc Studio Lab", placeholder: "Angebote, Methode, Preise", send: "Senden",
      privacy: "Nichts, was hier geschrieben wird, wird irgendwohin gesendet. Die Antworten werden auf Ihrem Gerät erzeugt.",
      welcome: "OVIA ist ein Studio und ein Labor, das Technologie für jeden und in jedem Bereich entwirft, baut und betreibt: Technologie, die antwortet, lernt, schafft, eintauchen lässt, schützt und Bestand hat, alles von Anfang bis Ende betreut. Willkommen. Fragen Sie nach den Angeboten, der Methode oder den Preisen, oder wählen Sie ein Thema.",
      fallback: "Alles, was wir kennen, ist OVIA. Fragen Sie nach den Angeboten, der Methode oder den Preisen, oder nutzen Sie den Kontaktbereich, der Studio und Labor direkt erreicht.",
      contactBtn: "Zum Kontaktbereich", chips: ["Angebote", "Preise", "Die Methode", "Carte Blanche", "Kontakt"] },
      intents: [
        { id: "pricing", k: ["preis", "preise", "kosten", "kostet", "wie viel", "tarif", "angebot", "teuer", "budget"], a: "OVIA ist Premium im Entwurf, und jeder Auftrag wird gleich bepreist: Er beginnt mit einem Audit für 495 $, das vollständig auf einen ersten Auftrag angerechnet wird. Das Audit ergibt einen schriftlichen Plan zu einem Festpreis, bevor irgendetwas beginnt. Es gibt keine öffentliche Preisliste, weil kein Betrieb dem anderen gleicht. Jede ernsthafte Anfrage wird innerhalb eines Werktages beantwortet." },
        { id: "audit", k: ["audit", "prufung", "diagnose", "bewertung"], a: "Das Audit ist die Eingangstür. Ihr Betrieb wird so untersucht, wie er heute läuft, und die Ergebnisse kommen als schriftlicher Plan zurück: was getan wird, wie lange die Arbeit dauert, und was die Arbeit kostet, zu einem Festpreis. Die Auditgebühr beträgt 495 $, vollständig angerechnet auf einen ersten Auftrag." },
        { id: "offerings", k: ["angebot", "angebote", "leistung", "leistungen", "was machen sie", "hilfe"], a: "Was angeboten wird, in vollem Umfang. Sechs Angebote, ein Betrieb. Agenten und autonome Abläufe: Ihr Empfang, Ihre Nachfassaktionen und Ihre Buchungen, jeden Tag erledigt. Maschinelles Lernen, in Produktion: Warnungen aus Ihren eigenen Unterlagen. Produkte, die Menschen wirklich nutzen: Schaufenster, Buchungsabläufe und interne Bildschirme, nach schriftlicher Spezifikation gebaut. Immersiv und vernetzt: Simulation als Beweis, bevor irgendetwas gebaut wird. Cloud, Sicherheit und IT: Infrastruktur unter ständiger Prüfung, Backups in der Wiederherstellung getestet. Nachhaltiges Design: Design auf ein dokumentiertes System reduziert. Carte Blanche fasst den ganzen Betrieb in einem Auftrag zusammen. Jeder Auftrag beginnt mit einem Audit und läuft als betreutes System. Fragen Sie nach einem Angebot beim Namen für die volle Auskunft." },
        { id: "method", k: ["methode", "prozess", "wie arbeiten sie", "wie funktioniert", "anfang", "dauer", "wie lange"], a: "Jeder Auftrag beginnt mit einem Audit, läuft über einen schriftlichen Plan zu einem Festpreis, und wird als betreutes System geführt. Nichts wird übergeben und gehofft. Die Menschen, die Sie treffen, sind die Menschen, die die Arbeit machen. Zeiten stehen im schriftlichen Plan, bevor irgendetwas beginnt." },
        { id: "carte", k: ["carte blanche", "ganzer betrieb", "alles", "kompletter betrieb"], a: "Carte Blanche. Der ganze Betrieb als ein Auftrag: Empfang, Warnungen, Präsenz und Fundamente, vom Studio und vom Labor von Anfang bis Ende entworfen, versammelt und betrieben." },
        { id: "contact", k: ["kontakt", "sprechen", "mensch", "person", "e-mail", "beratung"], a: "Der Kontaktbereich erreicht Studio und Labor direkt. Jede ernsthafte Anfrage wird innerhalb eines Werktages beantwortet, und jeder Auftrag wird schriftlich geschlossen, zu einem Festpreis, mit einer namentlich verantwortlichen Person.", contact: true },
        { id: "whatis", k: ["was ist ovia", "wer sind sie", "uber ovia", "was macht ovia"], a: "OVIA ist ein Studio und ein Labor, das Technologie für jeden und in jedem Bereich entwirft, baut und betreibt: Technologie, die antwortet, lernt, schafft, eintauchen lässt, schützt und Bestand hat, alles von Anfang bis Ende betreut. Fragen Sie nach den Angeboten, oder nach einem Angebot beim Namen, für die volle Auskunft." },
        { id: "hello", k: ["hallo", "guten tag", "guten morgen"], a: "Willkommen. Fragen Sie nach den Angeboten, der Methode oder den Preisen, oder wählen Sie unten ein Thema." } ] },
    it: { ui: { open: "Domande?", title: "OVIA Inc Studio Lab", placeholder: "Offerte, metodo, prezzi", send: "Invia",
      privacy: "Niente di ciò che viene scritto qui viene inviato da nessuna parte. Le risposte sono prodotte sul suo dispositivo.",
      welcome: "OVIA è uno studio e un laboratorio che progetta, costruisce e gestisce tecnologia per chiunque, in qualsiasi campo: tecnologia che risponde, impara, crea, immerge, protegge e dura, tutto gestito da cima a fondo. Benvenuto. Chieda delle offerte, del metodo o dei prezzi, oppure scelga un tema.",
      fallback: "Tutto ciò che conosciamo è OVIA. Chieda delle offerte, del metodo o dei prezzi, oppure usi la sezione contatti, che raggiunge direttamente lo studio e il laboratorio.",
      contactBtn: "Vai alla sezione contatti", chips: ["Offerte", "Prezzi", "Il metodo", "Carte Blanche", "Contatti"] },
      intents: [
        { id: "pricing", k: ["prezzo", "prezzi", "costo", "costa", "quanto", "tariffa", "preventivo", "caro", "budget"], a: "OVIA è premium per disegno, e ogni incarico è quotato allo stesso modo: si apre con un audit a 495 $, accreditato per intero su un primo incarico. L'audit produce un piano scritto a prezzo fisso, prima che qualsiasi cosa cominci. Non esiste un listino pubblico, perché nessuna operazione è uguale a un'altra. Ogni richiesta seria riceve risposta entro un giorno lavorativo." },
        { id: "audit", k: ["audit", "valutazione", "diagnosi"], a: "L'audit è la porta d'ingresso. La sua operazione viene esaminata così come funziona oggi, e i risultati tornano come un piano scritto: cosa sarà fatto, quanto tempo richiede il lavoro, e quanto costa il lavoro, a prezzo fisso. La tariffa dell'audit è di 495 $, accreditata per intero su un primo incarico." },
        { id: "offerings", k: ["offerta", "offerte", "servizio", "servizi", "cosa fate", "aiuto"], a: "Ciò che viene offerto, per intero. Sei offerte, una sola operazione. Agenti e flussi di lavoro autonomi: la sua reception, i suoi seguiti e le sue prenotazioni gestiti ogni giorno. Apprendimento automatico, in produzione: avvisi tratti dai suoi stessi registri. Prodotti che le persone usano davvero: vetrine, flussi di prenotazione e schermi interni, progettati secondo una specifica scritta. Immersivo e connesso: la simulazione usata come prova prima che qualsiasi cosa sia costruita. Cloud, sicurezza e IT: infrastruttura sotto verifica continua, backup testati nel ripristino. Design sostenibile: il design ridotto a un sistema documentato. Carte Blanche raccoglie l'intera operazione in un solo incarico. Ogni incarico si apre con un audit e funziona come un sistema gestito. Chieda di qualsiasi offerta per nome per il dettaglio completo." },
        { id: "method", k: ["metodo", "processo", "come lavorate", "come funziona", "iniziare", "tempi", "quanto tempo"], a: "Ogni incarico si apre con un audit, procede con un piano scritto a prezzo fisso, e funziona come un sistema gestito. Niente viene consegnato sperando che tenga. Le persone che incontra sono le persone che fanno il lavoro. I tempi sono fissati nel piano scritto, prima che qualsiasi cosa cominci." },
        { id: "carte", k: ["carte blanche", "tutta l'operazione", "tutto", "operazione completa"], a: "Carte Blanche. L'intera operazione come un solo incarico: la reception, gli avvisi, la presenza e le fondamenta, concepiti, raccolti e gestiti da cima a fondo dallo studio e dal laboratorio." },
        { id: "contact", k: ["contatto", "contatti", "parlare", "umano", "persona", "email", "consulenza"], a: "La sezione contatti raggiunge direttamente lo studio e il laboratorio. Ogni richiesta seria riceve risposta entro un giorno lavorativo, e ogni incarico è contrattato per iscritto, a prezzo fisso, con una persona nominata responsabile.", contact: true },
        { id: "whatis", k: ["cos'e ovia", "chi siete", "su ovia", "cosa fa ovia"], a: "OVIA è uno studio e un laboratorio che progetta, costruisce e gestisce tecnologia per chiunque, in qualsiasi campo: tecnologia che risponde, impara, crea, immerge, protegge e dura, tutto gestito da cima a fondo. Chieda delle offerte, o di qualsiasi offerta per nome, per il dettaglio completo." },
        { id: "hello", k: ["ciao", "buongiorno", "buonasera"], a: "Benvenuto. Chieda delle offerte, del metodo o dei prezzi, oppure scelga un tema qui sotto." } ] },
    nl: { ui: { open: "Vragen?", title: "OVIA Inc Studio Lab", placeholder: "Aanbod, methode, prijzen", send: "Verstuur",
      privacy: "Niets van wat hier wordt getypt, wordt ergens heen gestuurd. De antwoorden worden op uw apparaat gemaakt.",
      welcome: "OVIA is een studio en een lab dat technologie ontwerpt, bouwt en beheert voor iedereen, in elk domein: technologie die antwoordt, leert, creëert, onderdompelt, beschermt en blijft, alles van begin tot eind beheerd. Welkom. Vraag naar het aanbod, de methode of de prijzen, of kies een onderwerp.",
      fallback: "Alles wat we kennen is OVIA. Vraag naar het aanbod, de methode of de prijzen, of gebruik het contactgedeelte, dat het studio en het lab rechtstreeks bereikt.",
      contactBtn: "Naar het contactgedeelte", chips: ["Aanbod", "Prijzen", "De methode", "Carte Blanche", "Contact"] },
      intents: [
        { id: "pricing", k: ["prijs", "prijzen", "kosten", "kost", "hoeveel", "tarief", "offerte", "duur", "budget"], a: "OVIA is premium naar ontwerp, en elke opdracht wordt op dezelfde manier geprijsd: ze opent met een audit van 495 $, volledig verrekend met een eerste opdracht. De audit levert een schriftelijk plan tegen een vaste prijs, voordat er iets begint. Er is geen openbare prijslijst, omdat geen enkele werking dezelfde is. Elk serieus verzoek wordt binnen één werkdag beantwoord." },
        { id: "audit", k: ["audit", "beoordeling", "diagnose"], a: "De audit is de voordeur. Uw werking wordt onderzocht zoals ze vandaag loopt, en de bevindingen komen terug als een schriftelijk plan: wat er wordt gedaan, hoe lang het werk duurt, en wat het werk kost, tegen een vaste prijs. De audittarief is 495 $, volledig verrekend met een eerste opdracht." },
        { id: "offerings", k: ["aanbod", "diensten", "dienst", "wat doen jullie", "hulp"], a: "Wat wordt aangeboden, in het geheel. Zes aanbiedingen, één werking. Agenten en autonome werkstromen: uw receptie, uw opvolging en uw boekingen, elke dag afgehandeld. Machinaal leren, in productie: waarschuwingen uit uw eigen dossiers. Producten die mensen echt gebruiken: etalages, boekingsstromen en interne schermen, gebouwd naar een schriftelijke specificatie. Meeslepend en verbonden: simulatie als bewijs voordat er iets wordt gebouwd. Cloud, beveiliging en IT: infrastructuur onder voortdurende controle, back-ups getest in herstel. Duurzaam ontwerp: ontwerp teruggebracht tot een gedocumenteerd systeem. Carte Blanche brengt de hele werking samen in één opdracht. Elke opdracht opent met een audit en loopt als een beheerd systeem. Vraag naar elk aanbod bij naam voor het volledige detail." },
        { id: "method", k: ["methode", "proces", "hoe werken jullie", "hoe werkt het", "beginnen", "duur", "hoe lang"], a: "Elke opdracht opent met een audit, verloopt volgens een schriftelijk plan tegen een vaste prijs, en loopt als een beheerd systeem. Niets wordt overgedragen en gehoopt. De mensen die u ontmoet, zijn de mensen die het werk doen. Tijden staan in het schriftelijke plan, voordat er iets begint." },
        { id: "carte", k: ["carte blanche", "hele werking", "alles", "volledige werking"], a: "Carte Blanche. De hele werking als één opdracht: de receptie, de waarschuwingen, de aanwezigheid en de fundamenten, van begin tot eind ontworpen, verzameld en beheerd door het studio en het lab." },
        { id: "contact", k: ["contact", "spreken", "mens", "persoon", "e-mail", "advies"], a: "Het contactgedeelte bereikt het studio en het lab rechtstreeks. Elk serieus verzoek wordt binnen één werkdag beantwoord, en elke opdracht wordt schriftelijk vastgelegd, tegen een vaste prijs, met een met naam genoemde verantwoordelijke.", contact: true },
        { id: "whatis", k: ["wat is ovia", "wie zijn jullie", "over ovia", "wat doet ovia"], a: "OVIA is een studio en een lab dat technologie ontwerpt, bouwt en beheert voor iedereen, in elk domein: technologie die antwoordt, leert, creëert, onderdompelt, beschermt en blijft, alles van begin tot eind beheerd. Vraag naar het aanbod, of naar elk aanbod bij naam, voor het volledige detail." },
        { id: "hello", k: ["hallo", "goedemorgen", "goedemiddag"], a: "Welkom. Vraag naar het aanbod, de methode of de prijzen, of kies hieronder een onderwerp." } ] }
  };

  var CORE2 = {
    zh: { ui: { open: "有问题?", title: "OVIA Inc Studio Lab", placeholder: "询问服务、方法、价格", send: "发送",
      privacy: "您在此输入的任何内容都不会被发送到任何地方。答案在您的设备上生成。",
      welcome: "OVIA 是一家工作室与实验室,为任何人、在任何领域设计、构建并运行技术:能够回应、学习、创造、沉浸、保护并持久的技术,全部从头到尾受管理。 欢迎。可以询问服务内容、工作方法或价格,也可以选择一个主题。",
      fallback: "我们只了解 OVIA。可以询问服务内容、工作方法或价格,或使用联系页面,直接联系工作室与实验室。",
      contactBtn: "前往联系页面", chips: ["服务内容", "价格", "工作方法", "Carte Blanche", "联系"] },
      intents: [
        { id: "pricing", k: ["价格", "费用", "多少钱", "报价", "收费", "预算"], a: "OVIA 以高端为设计定位,每项委托都以同样的方式定价:先进行一次 495 美元的审计,审计费全额抵扣首个委托。审计会产出一份固定价格的书面计划,在任何工作开始之前确定。没有公开价目表,因为没有任何两家企业的运营是相同的。每个认真的咨询都会在一个工作日内得到回复。" },
        { id: "audit", k: ["审计", "评估", "诊断"], a: "审计是入口。您的运营会按今天实际运行的样子接受检查,结论以书面计划的形式返回:将做什么、工作需要多久、工作费用多少,均为固定价格。审计费为 495 美元,全额抵扣首个委托。" },
        { id: "offerings", k: ["服务", "提供", "做什么", "帮助", "业务"], a: "所提供的全部内容。六项服务,一个运营整体。智能体与自主工作流:您的前台、跟进与预订,每天处理。生产环境中的机器学习:从您自己的记录中提取预警。人们真正使用的产品:店面、预订流程与内部屏幕,按书面规格设计。沉浸式与互联:在建造任何东西之前,用模拟作为证据。云、安全与 IT:持续验证的基础设施,备份经过恢复测试。可持续设计:将设计归纳为有文档的系统。Carte Blanche 将整个运营汇集为一项委托。每项委托都从审计开始,作为受管理的系统运行。可以按名称询问任何一项服务以获取完整详情。" },
        { id: "method", k: ["方法", "流程", "如何工作", "怎么开始", "多久", "时间"], a: "每项委托都从审计开始,按照固定价格的书面计划推进,作为受管理的系统运行。没有什么会被交出去然后听天由命。您见面的人就是做事的人。时间在书面计划中确定,在任何工作开始之前。" },
        { id: "carte", k: ["carte blanche", "整个运营", "全部", "整体"], a: "Carte Blanche。将整个运营作为一项委托:前台、预警、存在与根基,由工作室与实验室从头到尾构思、汇集并运行。" },
        { id: "contact", k: ["联系", "咨询", "邮件", "真人", "电话"], a: "联系页面直接通达工作室与实验室。每个认真的咨询都会在一个工作日内得到回复,每项委托都以书面形式签约,固定价格,并有具名的负责人。", contact: true },
        { id: "whatis", k: ["ovia是什么", "什么是ovia", "你们是谁", "介绍一下ovia"], a: "OVIA 是一家工作室与实验室,为任何人、在任何领域设计、构建并运行技术:能够回应、学习、创造、沉浸、保护并持久的技术,全部从头到尾受管理。 可以询问服务内容,或按名称询问任何一项服务以获取完整详情。" },
        { id: "hello", k: ["你好", "您好", "早上好"], a: "欢迎。可以询问服务内容、工作方法或价格,或在下方选择一个主题。" } ] },
    ja: { ui: { open: "ご質問は?", title: "OVIA Inc Studio Lab", placeholder: "サービス、進め方、料金について", send: "送信",
      privacy: "ここに入力した内容はどこにも送信されません。回答はお使いの端末上で生成されます。",
      welcome: "OVIAは、誰のためにも、どの分野でもテクノロジーを設計し、構築し、運用するスタジオでありラボです:応答し、学び、創造し、没入させ、守り、続くテクノロジー、そのすべてを最初から最後まで管理します。 ようこそ。サービス内容、進め方、料金についてご質問いただくか、トピックをお選びください。",
      fallback: "私たちが知っているのは OVIA だけです。サービス内容、進め方、料金についてご質問いただくか、お問い合わせページからスタジオとラボへ直接ご連絡ください。",
      contactBtn: "お問い合わせページへ", chips: ["サービス", "料金", "進め方", "Carte Blanche", "お問い合わせ"] },
      intents: [
        { id: "pricing", k: ["料金", "価格", "費用", "いくら", "見積もり", "予算"], a: "OVIA はデザインによるプレミアムを掲げ、すべての案件を同じ方法で見積もりします。まず 495 ドルの監査から始まり、監査料は最初の案件に全額充当されます。監査は、固定価格の書面計画として結果を返し、何かが始まる前に確定します。公開の料金表はありません。どの運用も同じものはないからです。真剣なお問い合わせには 1 営業日以内に返信します。" },
        { id: "audit", k: ["監査", "評価", "診断"], a: "監査は入口です。現在の運用のままを調査し、結果は書面計画として戻ります。何を行い、作業にどれだけ時間がかかり、費用がいくらか、すべて固定価格です。監査料は 495 ドルで、最初の案件に全額充当されます。" },
        { id: "offerings", k: ["サービス", "提供", "何を", "事業", "支援"], a: "提供内容のすべてです。6 つのサービス、1 つの運用。エージェントと自律ワークフロー:受付、フォローアップ、予約を毎日処理します。本番環境の機械学習:自社の記録から警告を引き出します。人々が実際に使う製品:書面仕様に基づいて設計された店舗画面、予約フロー、内部画面。イマーシブと接続:何かを作る前に、シミュレーションを証拠として使います。クラウド、セキュリティ、IT:継続的に検証されるインフラ、復元テスト済みのバックアップ。サステナブルデザイン:デザインを文書化されたシステムに集約します。Carte Blanche は運用全体を 1 件の案件にまとめます。すべての案件は監査から始まり、管理されたシステムとして運用されます。名前を指定してご質問いただければ、詳細をお答えします。" },
        { id: "method", k: ["進め方", "方法", "プロセス", "始め", "期間", "どれくらい"], a: "すべての案件は監査から始まり、固定価格の書面計画に沿って進み、管理されたシステムとして運用されます。引き渡して任せきりにすることはありません。お会いする人々が、そのまま作業をする人々です。期間は書面計画の中で、何かが始まる前に確定します。" },
        { id: "carte", k: ["carte blanche", "運用全体", "すべて", "全体"], a: "Carte Blanche。運用全体を 1 件の案件として:受付、警告、存在感、基盤を、スタジオとラボが最初から最後まで構想し、集約し、運用します。" },
        { id: "contact", k: ["問い合わせ", "連絡", "相談", "メール", "担当"], a: "お問い合わせページはスタジオとラボに直接つながります。真剣なお問い合わせには 1 営業日以内に返信し、すべての案件は書面で契約され、固定価格で、責任者が明記されます。", contact: true },
        { id: "whatis", k: ["oviaとは", "oviaは何", "あなたたちは何", "oviaについて"], a: "OVIAは、誰のためにも、どの分野でもテクノロジーを設計し、構築し、運用するスタジオでありラボです:応答し、学び、創造し、没入させ、守り、続くテクノロジー、そのすべてを最初から最後まで管理します。 サービス内容について、または名前を指定して詳細をお尋ねください。" },
        { id: "hello", k: ["こんにちは", "おはよう", "こんばんは"], a: "ようこそ。サービス内容、進め方、料金についてご質問いただくか、下のトピックをお選びください。" } ] },
    ko: { ui: { open: "질문이 있으신가요?", title: "OVIA Inc Studio Lab", placeholder: "서비스, 방식, 가격 문의", send: "보내기",
      privacy: "여기에 입력한 내용은 어디에도 전송되지 않습니다. 답변은 사용 중인 기기에서 생성됩니다.",
      welcome: "OVIA는 누구나, 어떤 분야에서든 기술을 설계하고, 구축하고, 운영하는 스튜디오이자 랩입니다: 응답하고, 배우고, 창조하고, 몰입시키고, 보호하고, 지속되는 기술, 그 모든 것을 처음부터 끝까지 관리합니다. 환영합니다. 서비스 내용, 진행 방식, 가격에 대해 질문하시거나 주제를 선택해 주세요.",
      fallback: "저희가 아는 것은 OVIA뿐입니다. 서비스 내용, 진행 방식, 가격에 대해 질문하시거나, 스튜디오와 랩에 직접 닿는 연락 페이지를 이용해 주세요.",
      contactBtn: "연락 페이지로 이동", chips: ["서비스", "가격", "진행 방식", "Carte Blanche", "연락"] },
      intents: [
        { id: "pricing", k: ["가격", "비용", "얼마", "견적", "요금", "예산"], a: "OVIA는 디자인으로 프리미엄을 지향하며, 모든 의뢰는 같은 방식으로 가격이 정해집니다. 먼저 495달러의 감사로 시작하고, 감사 비용은 첫 의뢰에 전액 공제됩니다. 감사는 고정 가격의 서면 계획으로 결과를 돌려주며, 어떤 작업도 시작되기 전에 확정됩니다. 공개 가격표는 없습니다. 어떤 운영도 서로 같지 않기 때문입니다. 진지한 문의에는 영업일 기준 1일 이내에 답변합니다." },
        { id: "audit", k: ["감사", "평가", "진단"], a: "감사는 입구입니다. 현재 운영 중인 그대로를 조사하고, 결과는 서면 계획으로 돌아옵니다. 무엇을 할지, 작업에 얼마나 걸리는지, 비용이 얼마인지, 모두 고정 가격입니다. 감사 비용은 495달러이며 첫 의뢰에 전액 공제됩니다." },
        { id: "offerings", k: ["서비스", "제공", "무엇을", "사업", "도움"], a: "제공하는 전체 내용입니다. 여섯 가지 서비스, 하나의 운영. 에이전트와 자율 워크플로: 프런트 데스크, 후속 조치, 예약을 매일 처리합니다. 운영 환경의 머신러닝: 자체 기록에서 경고를 끌어냅니다. 사람들이 실제로 사용하는 제품: 서면 사양에 따라 설계된 매장 화면, 예약 흐름, 내부 화면. 몰입형과 연결: 무언가를 만들기 전에 시뮬레이션을 증거로 사용합니다. 클라우드, 보안, IT: 지속적으로 검증되는 인프라, 복원 테스트를 거친 백업. 지속 가능한 디자인: 디자인을 문서화된 시스템으로 축소합니다. Carte Blanche는 전체 운영을 하나의 의뢰로 묶습니다. 모든 의뢰는 감사로 시작해 관리되는 시스템으로 운영됩니다. 이름을 지정해 질문하시면 전체 세부 내용을 안내합니다." },
        { id: "method", k: ["방식", "방법", "과정", "시작", "기간", "얼마나"], a: "모든 의뢰는 감사로 시작하고, 고정 가격의 서면 계획을 따라 진행되며, 관리되는 시스템으로 운영됩니다. 넘기고 나서 바라는 일은 없습니다. 만나시는 분들이 곧 작업을 하는 분들입니다. 기간은 서면 계획 안에서, 어떤 작업도 시작되기 전에 확정됩니다." },
        { id: "carte", k: ["carte blanche", "전체 운영", "전부", "모두"], a: "Carte Blanche. 전체 운영을 하나의 의뢰로: 프런트 데스크, 경고, 존재감, 기반을 스튜디오와 랩이 처음부터 끝까지 구상하고, 모으고, 운영합니다." },
        { id: "contact", k: ["연락", "문의", "상담", "이메일", "담당"], a: "연락 페이지는 스튜디오와 랩에 직접 닿습니다. 진지한 문의에는 영업일 기준 1일 이내에 답변하고, 모든 의뢰는 서면으로 계약되며, 고정 가격에 책임자가 명시됩니다.", contact: true },
        { id: "whatis", k: ["ovia란", "ovia가 무엇", "어떤 회사", "ovia 소개"], a: "OVIA는 누구나, 어떤 분야에서든 기술을 설계하고, 구축하고, 운영하는 스튜디오이자 랩입니다: 응답하고, 배우고, 창조하고, 몰입시키고, 보호하고, 지속되는 기술, 그 모든 것을 처음부터 끝까지 관리합니다. 서비스 내용에 대해, 또는 이름을 지정해 전체 세부 내용을 질문해 주세요." },
        { id: "hello", k: ["안녕", "안녕하세요"], a: "환영합니다. 서비스 내용, 진행 방식, 가격에 대해 질문하시거나 아래 주제를 선택해 주세요." } ] },
    ar: { ui: { open: "أسئلة؟", title: "OVIA Inc Studio Lab", placeholder: "اسأل عن العروض والمنهج والأسعار", send: "إرسال",
      privacy: "لا يُرسل أي شيء يُكتب هنا إلى أي مكان. تُنتج الإجابات على جهازك.",
      welcome: "OVIA استوديو ومختبر يصمم ويبني ويدير التكنولوجيا لأي شخص، في أي مجال: تكنولوجيا تجيب وتتعلم وتبتكر وتُغمر وتحمي وتدوم، وكل ذلك مُدار من البداية إلى النهاية. مرحبًا. اسأل عن العروض أو المنهج أو الأسعار، أو اختر موضوعًا.",
      fallback: "كل ما نعرفه هو OVIA. اسأل عن العروض أو المنهج أو الأسعار، أو استخدم قسم الاتصال الذي يصل مباشرة إلى الاستوديو والمختبر.",
      contactBtn: "الذهاب إلى قسم الاتصال", chips: ["العروض", "الأسعار", "المنهج", "Carte Blanche", "الاتصال"] },
      intents: [
        { id: "pricing", k: ["سعر", "أسعار", "تكلفة", "كم", "رسوم", "ميزانية"], a: "OVIA فاخرة بالتصميم، ويُسعَّر كل تعاقد بالطريقة نفسها: يبدأ بتدقيق بقيمة 495 دولارًا، يُخصم بالكامل من أول تعاقد. ويُنتج التدقيق خطة مكتوبة بسعر ثابت، قبل أن يبدأ أي شيء. لا توجد قائمة أسعار عامة، لأن أي عمليتين لا تتشابهان. ويُرد على كل استفسار جاد خلال يوم عمل واحد." },
        { id: "audit", k: ["تدقيق", "تقييم", "تشخيص"], a: "التدقيق هو الباب الأمامي. تُفحص عمليتك كما تعمل اليوم، وتعود النتائج خطة مكتوبة: ما الذي سيُنجز، وكم يستغرق العمل، وكم يكلف العمل، بسعر ثابت. رسم التدقيق 495 دولارًا، يُخصم بالكامل من أول تعاقد." },
        { id: "offerings", k: ["عروض", "خدمات", "ماذا تقدمون", "مساعدة", "خدمة"], a: "ما يُقدَّم، بالكامل. ستة عروض، عملية واحدة. الوكلاء وسير العمل الذاتي: مكتبك الأمامي ومتابعاتك وحجوزاتك تُدار كل يوم. التعلم الآلي في الإنتاج: تحذيرات مستخرجة من سجلاتك الخاصة. منتجات يستخدمها الناس فعلًا: واجهات متاجر وتدفقات حجز وشاشات داخلية، مصممة وفق مواصفة مكتوبة. الغامر والمتصل: المحاكاة مستخدمة كدليل قبل بناء أي شيء. السحابة والأمن وتقنية المعلومات: بنية تحتية تحت تحقق مستمر، ونسخ احتياطية مختبرة الاستعادة. التصميم المستدام: التصميم مختصرًا في نظام موثق. وتجمع Carte Blanche العملية بأكملها في تعاقد واحد. يبدأ كل تعاقد بتدقيق ويعمل كنظام مُدار. اسأل عن أي عرض باسمه للحصول على التفصيل الكامل." },
        { id: "method", k: ["منهج", "طريقة", "كيف تعملون", "خطوات", "بدء", "مدة", "كم يستغرق"], a: "يبدأ كل تعاقد بتدقيق، ويتقدم وفق خطة مكتوبة بسعر ثابت، ويعمل كنظام مُدار. لا يُسلَّم شيء على أمل أن يصمد. الأشخاص الذين تقابلهم هم الأشخاص الذين يقومون بالعمل. وتُحدد المدد في الخطة المكتوبة، قبل أن يبدأ أي شيء." },
        { id: "carte", k: ["carte blanche", "العملية بأكملها", "كل شيء", "كامل"], a: "Carte Blanche. العملية بأكملها كتعاقد واحد: المكتب الأمامي والتحذيرات والحضور والأسس، تُصمم وتُجمع وتُدار من البداية إلى النهاية بواسطة الاستوديو والمختبر." },
        { id: "contact", k: ["اتصال", "تواصل", "بريد", "شخص", "استشارة"], a: "يصل قسم الاتصال مباشرة إلى الاستوديو والمختبر. ويُرد على كل استفسار جاد خلال يوم عمل واحد، ويُتعاقد على كل عمل كتابة، بسعر ثابت، وبشخص مسؤول مسمى.", contact: true },
        { id: "whatis", k: ["ما هي ovia", "من أنتم", "عن ovia", "ماذا تفعل ovia"], a: "OVIA استوديو ومختبر يصمم ويبني ويدير التكنولوجيا لأي شخص، في أي مجال: تكنولوجيا تجيب وتتعلم وتبتكر وتُغمر وتحمي وتدوم، وكل ذلك مُدار من البداية إلى النهاية. اسأل عن العروض، أو عن أي عرض باسمه، للحصول على التفصيل الكامل." },
        { id: "hello", k: ["مرحبا", "السلام", "صباح الخير"], a: "مرحبًا. اسأل عن العروض أو المنهج أو الأسعار، أو اختر موضوعًا أدناه." } ] }
  };
  Object.keys(CORE).forEach(function (k) { KB[k] = CORE[k]; });
  Object.keys(CORE2).forEach(function (k) { KB[k] = CORE2[k]; });

  var CHIP_ASK = {
    en: ["What are the offerings?", "What does it cost?", "How do you work?", "Carte Blanche", "Contact"],
    fr: ["Quelles sont les offres ?", "Combien ça coûte ?", "Comment travaillez-vous ?", "Carte Blanche", "Contact"],
    es: ["¿Cuáles son las ofertas?", "¿Cuánto cuesta?", "¿Cómo trabajan?", "Carte Blanche", "Contacto"],
    pt: ["Quais são as ofertas?", "Quanto custa?", "Como trabalham?", "Carte Blanche", "Contacto"],
    de: ["Was sind die Angebote?", "Was kostet es?", "Wie arbeiten Sie?", "Carte Blanche", "Kontakt"],
    it: ["Quali sono le offerte?", "Quanto costa?", "Come lavorate?", "Carte Blanche", "Contatti"],
    nl: ["Wat is het aanbod?", "Wat kost het?", "Hoe werken jullie?", "Carte Blanche", "Contact"],
    zh: ["有哪些服务?", "价格是多少?", "你们如何工作?", "Carte Blanche", "联系"],
    ja: ["サービス内容は?", "料金はいくらですか?", "進め方は?", "Carte Blanche", "お問い合わせ"],
    ko: ["어떤 서비스가 있나요?", "가격이 얼마인가요?", "어떻게 진행하나요?", "Carte Blanche", "연락"],
    ar: ["ما هي العروض؟", "كم التكلفة؟", "كيف تعملون؟", "Carte Blanche", "الاتصال"]
  };

  function pageLang() {
    var l = (document.documentElement.getAttribute("lang") || "en").toLowerCase();
    var keys = Object.keys(KB);
    for (var i = 0; i < keys.length; i++) if (l.indexOf(keys[i]) === 0) return keys[i];
    return "en";
  }
  function norm(t) {
    return (t || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function scoreIntents(kb, q) {
    var best = null, bestScore = 0;
    kb.intents.forEach(function (it) {
      var score = 0;
      it.k.forEach(function (kw) { if (q.indexOf(norm(kw)) !== -1) score += kw.length; });
      if (score > 0 && it.id === "pricing") score = score * 2 + 2; /* a price word is a strong signal */
      if (score > bestScore) { bestScore = score; best = it; }
    });
    return { hit: best, score: bestScore };
  }
  function answer(text) {
    var q = norm(text), pl = pageLang();
    /* Detect the language of the question itself across every knowledge set. */
    var bestLang = pl, best = scoreIntents(KB[pl], q);
    Object.keys(KB).forEach(function (lk) {
      if (lk === pl) return;
      var r = scoreIntents(KB[lk], q);
      if (r.score > best.score) { best = r; bestLang = lk; }
    });
    if (!best.hit) return { lang: pl, hit: null };
    /* Core languages carry the core answers; detailed offerings come from the
       English set when the active set lacks that intent id. */
    var has = KB[bestLang].intents.some(function (it) { return it.id === best.hit.id; });
    if (!has) {
      var en = KB.en.intents.filter(function (it) { return it.id === best.hit.id; })[0];
      if (en) return { lang: bestLang, hit: en };
    }
    return { lang: bestLang, hit: best.hit };
  }

  var css = [
    ".oa-btn{position:fixed;right:1rem;bottom:1rem;z-index:9998;background:#000;color:#fff;border:1px solid #000;",
    "font:600 .95rem/1.2 system-ui,sans-serif;padding:.7rem 1.1rem;border-radius:999px;cursor:pointer}",
    ".oa-btn:hover{background:#fff;color:#000}",
    ".oa-panel{position:fixed;right:1rem;bottom:4.5rem;z-index:9999;width:min(24rem,calc(100vw - 2rem));",
    "background:#fff;color:#000;border:1px solid #000;border-radius:12px;display:none;flex-direction:column;",
    "font:400 .95rem/1.5 system-ui,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.25);max-height:min(70vh,36rem)}",
    ".oa-panel.open{display:flex}",
    ".oa-head{display:flex;align-items:center;gap:.6rem;padding:.8rem 1rem;border-bottom:1px solid #000}",
    ".oa-head img{width:28px;height:28px;object-fit:contain}",
    ".oa-head b{font-size:.95rem;letter-spacing:.02em}",
    ".oa-x{margin-left:auto;background:none;border:0;font-size:1.2rem;cursor:pointer;color:#000;line-height:1}",
    ".oa-msgs{padding:1rem;overflow-y:auto;display:flex;flex-direction:column;gap:.6rem}",
    ".oa-m{padding:.6rem .8rem;border-radius:10px;max-width:92%}",
    ".oa-m.bot{background:#f2f2f2;align-self:flex-start}",
    ".oa-m.user{background:#000;color:#fff;align-self:flex-end}",
    ".oa-m a.oa-link{display:inline-block;margin-top:.5rem;color:#000;font-weight:600;text-decoration:underline}",
    ".oa-m button.oa-go{margin-top:.5rem;background:#000;color:#fff;border:1px solid #000;border-radius:999px;",
    "padding:.4rem .9rem;cursor:pointer;font:600 .85rem system-ui,sans-serif}",
    ".oa-chips{display:flex;flex-wrap:wrap;gap:.4rem;padding:0 1rem .6rem}",
    ".oa-chip{background:#fff;color:#000;-webkit-text-fill-color:#000;border:1px solid #000;border-radius:999px;",
    "padding:.35rem .8rem;cursor:pointer;font:600 .82rem system-ui,sans-serif}",
    ".oa-chip:hover{background:#000;color:#fff;-webkit-text-fill-color:#fff}",
    ".oa-row{display:flex;gap:.5rem;padding:.7rem 1rem;border-top:1px solid #e5e5e5}",
    ".oa-row input{flex:1;border:1px solid #000;border-radius:999px;padding:.5rem .9rem;font:inherit;color:#000;background:#fff}",
    ".oa-row button{background:#000;color:#fff;border:1px solid #000;border-radius:999px;padding:.5rem 1rem;cursor:pointer;font:600 .9rem system-ui,sans-serif}",
    ".oa-priv{padding:0 1rem .8rem;color:#555;font-size:.78rem}"
  ].join("");

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var base = (function () {
    var s = document.currentScript;
    if (s && s.src) return s.src.replace(/assets\/ovia-assistant\.js.*$/, "");
    return "";
  })();

  var btn = document.createElement("button");
  btn.className = "oa-btn";
  btn.type = "button";
  var panel = document.createElement("section");
  panel.className = "oa-panel";
  panel.setAttribute("aria-label", "OVIA assistant");
  panel.innerHTML =
    '<div class="oa-head"><img alt="" src="' + base + 'assets/ovia-inc-logo-black.png"><b></b>' +
    '<button class="oa-x" type="button" aria-label="Close">×</button></div>' +
    '<div class="oa-msgs"></div><div class="oa-chips"></div>' +
    '<form class="oa-row"><input type="text" autocomplete="off"><button type="submit"></button></form>' +
    '<p class="oa-priv"></p>';
  document.body.appendChild(btn);
  document.body.appendChild(panel);

  var msgs = panel.querySelector(".oa-msgs"),
      chipsBox = panel.querySelector(".oa-chips"),
      form = panel.querySelector(".oa-row"),
      input = panel.querySelector("input"),
      opened = false;

  function render() {
    var L = pageLang(), ui = KB[L].ui;
    btn.textContent = ui.open;
    panel.querySelector(".oa-head b").textContent = ui.title;
    input.setAttribute("placeholder", ui.placeholder);
    form.querySelector("button").textContent = ui.send;
    panel.querySelector(".oa-priv").textContent = ui.privacy;
    chipsBox.innerHTML = "";
    ui.chips.forEach(function (label, i) {
      var c = document.createElement("button");
      c.type = "button";
      c.className = "oa-chip";
      c.textContent = label;
      c.addEventListener("click", function () { ask(CHIP_ASK[L][i]); });
      chipsBox.appendChild(c);
    });
  }
  function addMsg(text, who) {
    var d = document.createElement("div");
    d.className = "oa-m " + who;
    d.textContent = text;
    msgs.appendChild(d);
    return d;
  }
  function ask(text) {
    var res = answer(text), L = res.lang;
    addMsg(text, "user");
    if (!res.hit) {
      addMsg(KB[L].ui.fallback, "bot");
    } else {
      var hit = res.hit, d = addMsg(hit.a, "bot");
      if (hit.link) {
        var a = document.createElement("a");
        a.className = "oa-link";
        a.href = base + hit.link.href;
        a.textContent = hit.link.label;
        d.appendChild(document.createElement("br"));
        d.appendChild(a);
      }
      if (hit.contact) {
        var g = document.createElement("button");
        g.type = "button";
        g.className = "oa-go";
        g.textContent = KB[L].ui.contactBtn;
        g.addEventListener("click", function () {
          panel.classList.remove("open");
          if (document.querySelector("#contact") || document.querySelector("#view-contact")) {
            window.location.hash = "contact";
            setTimeout(function () {
              var target = document.querySelector("#contact");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }, 350);
          } else {
            window.location.href = base + "#contact";
          }
        });
        d.appendChild(document.createElement("br"));
        d.appendChild(g);
      }
    }
    msgs.scrollTop = msgs.scrollHeight;
    input.value = "";
    input.focus();
  }
  btn.addEventListener("click", function () {
    render();
    panel.classList.toggle("open");
    if (panel.classList.contains("open") && !opened) {
      opened = true;
      addMsg(KB[pageLang()].ui.welcome, "bot");
    }
    if (panel.classList.contains("open")) input.focus();
  });
  panel.querySelector(".oa-x").addEventListener("click", function () { panel.classList.remove("open"); });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var v = input.value.trim();
    if (v) ask(v);
  });
  render();
})();
