/* OVIA Inc Studio Lab, site assistant.
   Static and self contained: no backend, no external service, no network calls.
   Nothing typed in the panel is sent anywhere; answers are produced on the device. */
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
        welcome: "Welcome. Ask about the offerings, the method, or pricing, or choose a topic.",
        fallback: "That sits outside what can be answered here. The contact section reaches the studio and the lab directly, and every serious inquiry is answered within one business day.",
        contactBtn: "Go to the contact section",
        chips: ["Offerings", "Pricing", "The method", "Carte Blanche", "Contact"]
      },
      intents: [
        { k: ["price", "pricing", "cost", "how much", "rate", "rates", "fee", "fees", "quote", "expensive", "budget"],
          a: "OVIA is premium by design, and every engagement is priced the same way: it opens with an audit at $495, credited in full against a first engagement. The audit produces a written plan at a fixed price, before anything starts. There is no public price list, because no two operations are the same. Every serious inquiry is answered within one business day." },
        { k: ["audit", "assessment", "review my", "diagnostic"],
          a: "The audit is the front door. Your operation is examined as it runs today, and the findings come back as a written plan: what will be done, how long the work takes, and what the work costs, at a fixed price. The audit fee is $495, credited in full against a first engagement." },
        { k: ["agent", "agents", "reception", "front desk", "booking", "bookings", "follow up", "follow-up", "after hours", "phone", "calls"],
          a: "Agents and autonomous workflows. Your front desk, follow-up and bookings, handled every day, to your rules. Configured on your own tools, evaluated before launch, and scored in live operation. Deliverable: a configured agent team, managed daily, with a person able to step in at any point." },
        { k: ["machine learning", "ml", "prediction", "forecast", "warning", "warnings", "data", "stock", "inventory", "unused seats", "bills"],
          a: "Machine learning, in production. Warnings drawn from your own records: stock, workload, mismatched bills, unused seats. Deliverable: an early warning system on your own records, checked daily." },
        { k: ["product", "products", "website", "storefront", "shop", "app", "screen", "build me"],
          a: "Products people actually use. A storefront, a booking flow or an internal screen, plus the source behind it, managed after launch by the same team. Deliverable: the product itself, plus the source behind the product, managed after launch." },
        { k: ["immersive", "simulation", "virtual", "3d", "training run", "stage"],
          a: "Immersive and connected. Simulation used as evidence: the space, the stage or the training run, walked through before anything is built. Deliverable: an interactive preview in any modern browser." },
        { k: ["cloud", "security", "cybersecurity", "backup", "backups", "infrastructure", "it ", "servers"],
          a: "Cloud, security and IT. Infrastructure under continuous verification, with backups whose restoration is tested, not assumed. Deliverable: managed storage, verified backups, security kept current, one point of contact." },
        { k: ["design", "sustainable", "brand", "identity"],
          a: "Sustainable design. Design reduced to a documented system, so the next piece starts from the system, not from a blank page. Deliverable: the design, the source files, and the usage rules." },
        { k: ["carte blanche", "whole operation", "everything", "all of it", "full operation"],
          a: "Carte Blanche. The whole operation as one engagement: front desk, alerts, presence, underpinnings, conceived, gathered and run end to end by the studio and the lab." },
        { k: ["offering", "offerings", "service", "services", "what do you do", "what can you do", "help with"],
          a: "Six offerings, one operation: Agents and autonomous workflows; Machine learning, in production; Products people actually use; Immersive and connected; Cloud, security and IT; Sustainable design. Carte Blanche gathers the whole operation into one engagement. Ask about any of them by name." },
        { k: ["method", "process", "how do you work", "how it works", "steps", "start", "begin", "timeline", "how long"],
          a: "Every engagement opens with an audit, proceeds on a written plan at a fixed price, and runs as a managed system. Nothing is handed over and hoped for. The people you meet are the people who do the work. Timing is set in the written plan, before anything starts." },
        { k: ["privacy", "data", "safe", "secure", "confidential", "trust"],
          a: "How client data and AI tools are handled is documented in full on the Privacy and AI Transparency page. In this panel, nothing typed is sent anywhere; answers are produced on your device.",
          link: { href: "privacy.html", label: "Privacy and AI Transparency" } },
        { k: ["magazine", "articles", "read", "issue", "journal"],
          a: "The Magazine is quarterly, one issue at a time, published from the studio and the lab, every piece with its references in the open.",
          link: { href: "magazine/", label: "Open the Magazine" } },
        { k: ["menu", "menus", "food", "dinner", "seasonal"],
          a: "The menus are the house's second language: four seasonal menus, an a la carte, and hors serie editions, each readable as dinner and as a map of the field.",
          link: { href: "menus/", label: "Open the menus" } },
        { k: ["merchandise", "shop", "clothing", "buy", "order"],
          a: "The merchandise line carries the house's pieces, made to order by request.",
          link: { href: "merchandise/", label: "Open the merchandise" } },
        { k: ["contact", "talk", "human", "person", "email", "reach", "call you", "consultation"],
          a: "The contact section reaches the studio and the lab directly. Every serious inquiry is answered within one business day, and every engagement is contracted in writing, with a fixed price and a named person responsible.",
          contact: true },
        { k: ["hello", "hi", "hey", "good morning", "good afternoon"],
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
        welcome: "Bienvenue. Posez une question sur les offres, la méthode ou les tarifs, ou choisissez un sujet.",
        fallback: "Cela dépasse ce à quoi il est possible de répondre ici. La section contact joint directement le studio et le laboratoire, et toute demande sérieuse reçoit une réponse sous un jour ouvrable.",
        contactBtn: "Aller à la section contact",
        chips: ["Offres", "Tarifs", "La méthode", "Carte Blanche", "Contact"]
      },
      intents: [
        { k: ["prix", "tarif", "tarifs", "cout", "combien", "honoraires", "devis", "cher", "budget"],
          a: "OVIA est premium par conception, et chaque engagement est tarifé de la même façon : il s'ouvre par un audit à 495 $, crédité en entier sur un premier engagement. L'audit produit un plan écrit à prix fixe, avant que quoi que ce soit commence. Il n'y a pas de liste de prix publique, parce qu'aucune opération ne ressemble à une autre. Toute demande sérieuse reçoit une réponse sous un jour ouvrable." },
        { k: ["audit", "evaluation", "diagnostic", "examen"],
          a: "L'audit est la porte d'entrée. Votre opération est examinée telle qu'elle roule aujourd'hui, et les constats reviennent sous forme de plan écrit : ce qui sera fait, combien de temps le travail prendra, et ce que le travail coûtera, à prix fixe. Les frais d'audit sont de 495 $, crédités en entier sur un premier engagement." },
        { k: ["agent", "agents", "accueil", "reception", "reservation", "reservations", "suivi", "relances", "telephone", "appels", "apres les heures"],
          a: "Agents et flux de travail autonomes. Votre accueil, vos relances et vos réservations, traités chaque jour, selon vos règles. Configurés sur vos propres outils, évalués avant le lancement, et notés en exploitation réelle. Livrable : une équipe d'agents configurée, gérée chaque jour, avec une personne capable d'intervenir à tout moment." },
        { k: ["apprentissage", "machine learning", "prediction", "prevision", "alerte", "alertes", "donnees", "stock", "inventaire", "sieges", "factures"],
          a: "Apprentissage machine, en production. Des alertes tirées de vos propres dossiers : stock, charge de travail, factures discordantes, sièges inutilisés. Livrable : un système d'alerte précoce sur vos propres dossiers, vérifié chaque jour." },
        { k: ["produit", "produits", "site web", "boutique", "application", "ecran", "vitrine"],
          a: "Des produits que les gens utilisent vraiment. Une vitrine, un parcours de réservation ou un écran interne, plus les sources derrière lui, gérés après le lancement par la même équipe. Livrable : le produit lui-même, plus les sources derrière le produit, gérés après le lancement." },
        { k: ["immersif", "simulation", "virtuel", "3d", "formation", "scene"],
          a: "Immersif et connecté. La simulation utilisée comme preuve : l'espace, la scène ou le parcours de formation, parcourus avant que quoi que ce soit soit construit. Livrable : un aperçu interactif dans tout navigateur moderne." },
        { k: ["nuage", "cloud", "securite", "cybersecurite", "sauvegarde", "sauvegardes", "infrastructure", "serveurs"],
          a: "Nuage, sécurité et TI. Une infrastructure sous vérification continue, avec des sauvegardes dont la restauration est testée, jamais présumée. Livrable : un stockage géré, des sauvegardes vérifiées, une sécurité tenue à jour, un seul point de contact." },
        { k: ["design", "durable", "marque", "identite"],
          a: "Design durable. Le design réduit à un système documenté, pour que la pièce suivante parte du système, et non d'une page blanche. Livrable : le design, les fichiers sources, et les règles d'usage." },
        { k: ["carte blanche", "toute l'operation", "tout", "operation complete", "ensemble"],
          a: "Carte Blanche. L'opération entière comme un seul engagement : accueil, alertes, présence, fondations, conçus, rassemblés et exploités de bout en bout par le studio et le laboratoire." },
        { k: ["offre", "offres", "service", "services", "que faites-vous", "aide"],
          a: "Six offres, une seule opération : Agents et flux de travail autonomes ; Apprentissage machine, en production ; Des produits que les gens utilisent vraiment ; Immersif et connecté ; Nuage, sécurité et TI ; Design durable. Carte Blanche rassemble l'opération entière en un seul engagement. Demandez-en une par son nom." },
        { k: ["methode", "processus", "comment travaillez-vous", "comment ca marche", "etapes", "commencer", "delai", "combien de temps"],
          a: "Chaque engagement s'ouvre par un audit, se poursuit sur un plan écrit à prix fixe, et roule comme un système géré. Rien n'est remis en espérant que cela tienne. Les personnes que vous rencontrez sont les personnes qui font le travail. Les délais sont fixés dans le plan écrit, avant que quoi que ce soit commence." },
        { k: ["confidentialite", "donnees personnelles", "vie privee", "confiance", "sur", "securitaire"],
          a: "La façon dont les données des clients et les outils d'IA sont traités est documentée au complet sur la page Confidentialité et transparence de l'IA. Dans ce panneau, rien de ce qui est tapé n'est envoyé nulle part ; les réponses sont produites sur votre appareil.",
          link: { href: "privacy.html", label: "Confidentialité et transparence de l'IA" } },
        { k: ["magazine", "articles", "lire", "numero", "journal"],
          a: "Le Magazine est trimestriel, un numéro à la fois, publié par le studio et le laboratoire, chaque pièce avec ses références au grand jour.",
          link: { href: "magazine/", label: "Ouvrir le Magazine" } },
        { k: ["menu", "menus", "nourriture", "diner", "saison"],
          a: "Les menus sont la seconde langue de la maison : quatre menus de saison, un à la carte, et des éditions hors série, chacun lisible comme un dîner et comme une carte du domaine.",
          link: { href: "menus/", label: "Ouvrir les menus" } },
        { k: ["marchandise", "boutique", "vetements", "acheter", "commander"],
          a: "La ligne de marchandise porte les pièces de la maison, faites sur commande, par demande.",
          link: { href: "merchandise/", label: "Ouvrir la marchandise" } },
        { k: ["contact", "parler", "humain", "personne", "courriel", "joindre", "consultation"],
          a: "La section contact joint directement le studio et le laboratoire. Toute demande sérieuse reçoit une réponse sous un jour ouvrable, et chaque engagement est contracté par écrit, à prix fixe, avec une personne nommée responsable.",
          contact: true },
        { k: ["bonjour", "salut", "bonsoir"],
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
        welcome: "Bienvenido. Pregunte por las ofertas, el método o los precios, o elija un tema.",
        fallback: "Eso queda fuera de lo que puede responderse aquí. La sección de contacto llega directamente al estudio y al laboratorio, y toda consulta seria recibe respuesta en un día laborable.",
        contactBtn: "Ir a la sección de contacto",
        chips: ["Ofertas", "Precios", "El método", "Carte Blanche", "Contacto"]
      },
      intents: [
        { k: ["precio", "precios", "costo", "cuanto", "cuesta", "tarifa", "honorarios", "cotizacion", "caro", "presupuesto"],
          a: "OVIA es premium por diseño, y cada encargo se cotiza de la misma manera: se abre con una auditoría de $495, acreditada por completo contra un primer encargo. La auditoría produce un plan escrito a precio fijo, antes de que empiece nada. No hay lista pública de precios, porque ninguna operación es igual a otra. Toda consulta seria recibe respuesta en un día laborable." },
        { k: ["auditoria", "evaluacion", "diagnostico", "revision"],
          a: "La auditoría es la puerta de entrada. Su operación se examina tal como funciona hoy, y los hallazgos vuelven como un plan escrito: qué se hará, cuánto tiempo tomará el trabajo y cuánto costará el trabajo, a precio fijo. La tarifa de auditoría es de $495, acreditada por completo contra un primer encargo." },
        { k: ["agente", "agentes", "recepcion", "reservas", "seguimiento", "telefono", "llamadas", "fuera de horario"],
          a: "Agentes y flujos de trabajo autónomos. Su recepción, sus seguimientos y sus reservas, atendidos cada día, según sus reglas. Configurados en sus propias herramientas, evaluados antes del lanzamiento, y puntuados en operación real. Entregable: un equipo de agentes configurado, gestionado a diario, con una persona capaz de intervenir en cualquier momento." },
        { k: ["aprendizaje", "machine learning", "prediccion", "pronostico", "alerta", "alertas", "datos", "inventario", "asientos", "facturas"],
          a: "Aprendizaje automático, en producción. Alertas extraídas de sus propios registros: existencias, carga de trabajo, facturas discordantes, asientos sin usar. Entregable: un sistema de alerta temprana sobre sus propios registros, verificado a diario." },
        { k: ["producto", "productos", "sitio web", "tienda", "aplicacion", "pantalla", "escaparate"],
          a: "Productos que la gente realmente usa. Un escaparate, un flujo de reserva o una pantalla interna, más el código fuente detrás de él, gestionados tras el lanzamiento por el mismo equipo. Entregable: el producto en sí, más el código fuente detrás del producto, gestionado tras el lanzamiento." },
        { k: ["inmersivo", "simulacion", "virtual", "3d", "formacion", "escenario"],
          a: "Inmersivo y conectado. La simulación usada como evidencia: el espacio, el escenario o el recorrido de formación, recorridos antes de que se construya nada. Entregable: una vista previa interactiva en cualquier navegador moderno." },
        { k: ["nube", "cloud", "seguridad", "ciberseguridad", "respaldo", "respaldos", "infraestructura", "servidores"],
          a: "Nube, seguridad y TI. Infraestructura bajo verificación continua, con respaldos cuya restauración se prueba, no se presume. Entregable: almacenamiento gestionado, respaldos verificados, seguridad mantenida al día, un solo punto de contacto." },
        { k: ["diseno", "sostenible", "marca", "identidad"],
          a: "Diseño sostenible. El diseño reducido a un sistema documentado, para que la pieza siguiente parta del sistema, y no de una página en blanco. Entregable: el diseño, los archivos fuente, y las reglas de uso." },
        { k: ["carte blanche", "toda la operacion", "todo", "operacion completa", "conjunto"],
          a: "Carte Blanche. La operación entera como un solo encargo: recepción, alertas, presencia, cimientos, concebidos, reunidos y operados de principio a fin por el estudio y el laboratorio." },
        { k: ["oferta", "ofertas", "servicio", "servicios", "que hacen", "ayuda"],
          a: "Seis ofertas, una sola operación: Agentes y flujos de trabajo autónomos; Aprendizaje automático, en producción; Productos que la gente realmente usa; Inmersivo y conectado; Nube, seguridad y TI; Diseño sostenible. Carte Blanche reúne la operación entera en un solo encargo. Pregunte por cualquiera por su nombre." },
        { k: ["metodo", "proceso", "como trabajan", "como funciona", "pasos", "empezar", "plazo", "cuanto tiempo"],
          a: "Cada encargo se abre con una auditoría, continúa con un plan escrito a precio fijo, y funciona como un sistema gestionado. Nada se entrega esperando que aguante. Las personas que conoce son las personas que hacen el trabajo. Los plazos se fijan en el plan escrito, antes de que empiece nada." },
        { k: ["privacidad", "datos", "seguro", "confidencial", "confianza"],
          a: "La forma en que se tratan los datos de los clientes y las herramientas de IA está documentada por completo en la página Privacidad y transparencia de la IA. En este panel, nada de lo que se escribe se envía a ninguna parte; las respuestas se producen en su dispositivo.",
          link: { href: "privacy.html", label: "Privacidad y transparencia de la IA" } },
        { k: ["magazine", "revista", "articulos", "leer", "numero"],
          a: "La Magazine es trimestral, un número a la vez, publicada desde el estudio y el laboratorio, cada pieza con sus referencias a la vista.",
          link: { href: "magazine/", label: "Abrir la Magazine" } },
        { k: ["menu", "menus", "comida", "cena", "temporada"],
          a: "Los menús son la segunda lengua de la casa: cuatro menús de temporada, uno a la carta, y ediciones hors série, cada uno legible como una cena y como un mapa del campo.",
          link: { href: "menus/", label: "Abrir los menús" } },
        { k: ["mercancia", "tienda", "ropa", "comprar", "pedir"],
          a: "La línea de mercancía lleva las piezas de la casa, hechas por encargo, bajo petición.",
          link: { href: "merchandise/", label: "Abrir la mercancía" } },
        { k: ["contacto", "hablar", "humano", "persona", "correo", "consulta"],
          a: "La sección de contacto llega directamente al estudio y al laboratorio. Toda consulta seria recibe respuesta en un día laborable, y cada encargo se contrata por escrito, a precio fijo, con una persona nombrada responsable.",
          contact: true },
        { k: ["hola", "buenos dias", "buenas tardes"],
          a: "Bienvenido. Pregunte por las ofertas, el método o los precios, o elija un tema abajo." }
      ]
    }
  };

  var CHIP_ASK = {
    en: ["What are the offerings?", "What does it cost?", "How do you work?", "Carte Blanche", "Contact"],
    fr: ["Quelles sont les offres ?", "Combien ça coûte ?", "Comment travaillez-vous ?", "Carte Blanche", "Contact"],
    es: ["¿Cuáles son las ofertas?", "¿Cuánto cuesta?", "¿Cómo trabajan?", "Carte Blanche", "Contacto"]
  };

  function lang() {
    var l = (document.documentElement.getAttribute("lang") || "en").toLowerCase();
    if (l.indexOf("fr") === 0) return "fr";
    if (l.indexOf("es") === 0) return "es";
    return "en";
  }
  function norm(t) {
    return (t || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function answer(langKey, text) {
    var kb = KB[langKey], q = norm(text), best = null, bestScore = 0;
    kb.intents.forEach(function (it) {
      var score = 0;
      it.k.forEach(function (kw) { if (q.indexOf(norm(kw)) !== -1) score += kw.length; });
      if (score > bestScore) { bestScore = score; best = it; }
    });
    return best || null;
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
    var L = lang(), ui = KB[L].ui;
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
    var L = lang();
    addMsg(text, "user");
    var hit = answer(L, text);
    if (!hit) {
      addMsg(KB[L].ui.fallback, "bot");
    } else {
      var d = addMsg(hit.a, "bot");
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
      addMsg(KB[lang()].ui.welcome, "bot");
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
