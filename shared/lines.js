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
    subline: "Your agents, machine learning and product, and the operation they live in — designed, built and managed end to end.",
    buyer: "Any company. Any domain. Premium by design.",
    pilot: "Begin at a single site. Fixed price, in writing, before anything starts.",
    cta: "Got questions?",
    stamp: "#toyoursatisfaction",
    metadesc: "OVIA designs, builds and runs your agents, machine learning and product — and the daily operation they live in. Multilingual as standard, under a written plan with a fixed price."
  },
  fr: {
    headline: "Conçu dans le studio. Prouvé dans le laboratoire.",
    subline: "Vos agents, votre apprentissage machine et votre produit, ainsi que l'exploitation où ils vivent — conçus, construits et gérés de bout en bout.",
    buyer: "Toute entreprise. Tout domaine. Premium par conception.",
    pilot: "Commencez par un seul site. Prix fixe, par écrit, avant que quoi que ce soit commence.",
    cta: "Des questions ?",
    stamp: "#toyoursatisfaction",
    metadesc: "OVIA conçoit, construit et fait tourner vos agents, votre apprentissage machine et votre produit — ainsi que l'exploitation quotidienne où ils vivent. Multilingue par principe, sous un plan écrit à prix fixe."
  },
  es: {
    headline: "Diseñado en el estudio. Probado en el laboratorio.",
    subline: "Sus agentes, su aprendizaje automático y su producto, y la operación en la que viven — diseñados, construidos y gestionados de principio a fin.",
    buyer: "Cualquier empresa. Cualquier dominio. Premium por diseño.",
    pilot: "Empiece por un solo sitio. Precio fijo, por escrito, antes de que empiece nada.",
    cta: "¿Preguntas?",
    stamp: "#toyoursatisfaction",
    metadesc: "OVIA diseña, construye y opera sus agentes, su aprendizaje automático y su producto — y la operación diaria en la que viven. Multilingüe por principio, bajo un plan escrito con precio fijo."
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
