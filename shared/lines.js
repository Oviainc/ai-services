/* OVIA shared lines — the single source for the lines that repeat across the
   site. Registered in LINE-REGISTRY.md (audit-factory): line id, canonical
   wording, every surface, change procedure.
   A wording change is made HERE, once. Pages read these values:
   - the homepage dictionary reads them through its SL() helper;
   - any element carrying data-line="<key>" is filled from here on load.
   Static fallback text on each page is verified identical to these values
   at every push, so a page still reads correctly before scripts run. */
window.OVIA_LINES = {
  en: {
    headline: "Designed in the Studio. Proven in the Lab.",
    definition: "OVIA is a studio and a lab that designs, builds and runs technology for anyone, in any domain: technology that answers, learns, creates, immerses, protects and lasts, all of it managed end to end.",
    subline: "The front desk, the follow up, the alerts, the presence and the underpinnings, run as one measured operation. Agents, machine learning and products, specified in writing, tested before launch, measured in production, managed end to end.",
    buyer: "Anyone. Any domain. Premium by design.",
    pilot: "Begin at a single site. Fixed price, in writing, before anything starts.",
    cta: "Got questions?",
    stamp: "#toyoursatisfaction",
    metadesc: "OVIA is a studio and a lab that designs, builds and runs technology for anyone, in any domain: technology that answers, learns, creates, immerses, protects and lasts, all of it managed end to end."
  },
  fr: {
    headline: "Conçu dans le studio. Prouvé dans le laboratoire.",
    definition: "OVIA est un studio et un laboratoire qui conçoit, construit et exploite la technologie pour tout le monde, dans tout domaine : une technologie qui répond, apprend, crée, immerge, protège et dure, le tout géré de bout en bout.",
    subline: "L'accueil, les relances, les alertes, la présence et les fondations, exploités comme une seule opération mesurée. Agents, apprentissage machine et produits, spécifiés par écrit, testés avant le lancement, mesurés en production, gérés de bout en bout.",
    buyer: "Tout le monde. Tout domaine. Premium par conception.",
    pilot: "Commencez par un seul site. Prix fixe, par écrit, avant que quoi que ce soit commence.",
    cta: "Des questions ?",
    stamp: "#toyoursatisfaction",
    metadesc: "OVIA est un studio et un laboratoire qui conçoit, construit et exploite la technologie pour tout le monde, dans tout domaine : une technologie qui répond, apprend, crée, immerge, protège et dure, le tout géré de bout en bout."
  },
  es: {
    headline: "Diseñado en el estudio. Probado en el laboratorio.",
    definition: "OVIA es un estudio y un laboratorio que diseña, construye y opera tecnología para cualquiera, en cualquier dominio: tecnología que responde, aprende, crea, sumerge, protege y perdura, todo ello gestionado de principio a fin.",
    subline: "La recepción, los seguimientos, las alertas, la presencia y los cimientos, operados como una sola operación medida. Agentes, aprendizaje automático y productos, especificados por escrito, probados antes del lanzamiento, medidos en producción, gestionados de principio a fin.",
    buyer: "Cualquiera. Cualquier dominio. Premium por diseño.",
    pilot: "Empiece por un solo sitio. Precio fijo, por escrito, antes de que empiece nada.",
    cta: "¿Preguntas?",
    stamp: "#toyoursatisfaction",
    metadesc: "OVIA es un estudio y un laboratorio que diseña, construye y opera tecnología para cualquiera, en cualquier dominio: tecnología que responde, aprende, crea, sumerge, protege y perdura, todo ello gestionado de principio a fin."
  }
};

/* Fill every [data-line] element from the table above, in the page's own
   language. Elements keep their static text if no value applies, so nothing
   ever renders blank. */
(function () {
  function applyLines() {
    var lang = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
    var table = window.OVIA_LINES[lang] || window.OVIA_LINES.en;
    var nodes = document.querySelectorAll("[data-line]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-line");
      if (table[key]) nodes[i].textContent = table[key];
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyLines);
  } else {
    applyLines();
  }
})();
