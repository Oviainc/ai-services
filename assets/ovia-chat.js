/* OVIA service-inquiry chat, drop-in widget for the ai-services site.
   Self-contained: no dependencies, styles injected, black-and-white.
   SINGLE CONFIG POINT: set ENDPOINT to the inquiry inbox URL when the
   OVIA mailbox goes live; until then the widget falls back to composing
   the inquiry in the visitor's own mail client, addressed to FALLBACK_TO.
   Languages: EN / FR / ES, following the page language when detectable. */
(function () {
  "use strict";

  var ENDPOINT = ""; /* e.g. "https://formspree.io/f/xxxxxxx", set once, here only */
  var FALLBACK_TO = "hello@oviainc.com"; /* planned inbox; live with the email setup */

  var STR = {
    en: {
      open: "Got questions?",
      title: "OVIA Inc Studio Lab",
      sub: "Inquiries about services",
      greet: "Welcome. What would the inquiry be about?",
      topics: ["Agents", "Machine Learning", "Products", "The full services menu", "Something else"],
      askName: "Under what name?",
      askContact: "And an email address where the reply should go?",
      askMsg: "The inquiry itself, in a few lines:",
      send: "Send the inquiry",
      sent: "Sent. Every serious inquiry is answered within one business day.",
      sentMail: "The mail client opens with the inquiry composed, sending it there completes the inquiry. Every serious inquiry is answered within one business day.",
      invalid: "That email address does not read as complete, one more try?",
      close: "Close"
    },
    fr: {
      open: "Des questions ?",
      title: "OVIA Inc Studio Lab",
      sub: "Demandes sur les services",
      greet: "Bienvenue. La demande porte sur quoi ?",
      topics: ["Agents", "Apprentissage automatique", "Produits", "Le menu complet des services", "Autre chose"],
      askName: "Sous quel nom ?",
      askContact: "Et une adresse courriel où la réponse doit arriver ?",
      askMsg: "La demande elle-même, en quelques lignes :",
      send: "Envoyer la demande",
      sent: "Envoyée. Toute demande sérieuse reçoit une réponse dans un jour ouvrable.",
      sentMail: "Le courriel s'ouvre avec la demande rédigée, l'envoyer là complète la demande. Toute demande sérieuse reçoit une réponse dans un jour ouvrable.",
      invalid: "Cette adresse ne semble pas complète, un autre essai ?",
      close: "Fermer"
    },
    es: {
      open: "¿Preguntas?",
      title: "OVIA Inc Studio Lab",
      sub: "Consultas sobre servicios",
      greet: "Bienvenido. ¿Sobre qué sería la consulta?",
      topics: ["Agentes", "Aprendizaje automático", "Productos", "El menú completo de servicios", "Otra cosa"],
      askName: "¿A qué nombre?",
      askContact: "¿Y un correo electrónico al que deba llegar la respuesta?",
      askMsg: "La consulta en sí, en unas líneas:",
      send: "Enviar la consulta",
      sent: "Enviada. Toda consulta seria recibe respuesta en un día laborable.",
      sentMail: "El cliente de correo se abre con la consulta redactada; enviarla allí completa la consulta. Toda consulta seria recibe respuesta en un día laborable.",
      invalid: "Esa dirección no parece completa. ¿Un intento más?",
      close: "Cerrar"
    }
  };

  function pageLang() {
    var l = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
    return STR[l] ? l : "en";
  }
  var lang = pageLang();
  var t = STR[lang];
  var state = { step: 0, topic: "", name: "", contact: "", message: "" };

  var css = [
    "#ovia-chat-btn{position:fixed;right:20px;bottom:20px;z-index:9998;background:#000;color:#fff;border:1px solid #000;padding:12px 18px;font:600 14px/1.2 system-ui,sans-serif;cursor:pointer;border-radius:999px}",
    "#ovia-chat-btn:hover{background:#fff;color:#000}",
    "#ovia-chat-panel{position:fixed;right:20px;bottom:76px;z-index:9999;width:min(360px,calc(100vw - 32px));max-height:min(560px,calc(100vh - 110px));display:none;flex-direction:column;background:#fff;color:#000;border:1.5px solid #000;font:14px/1.5 system-ui,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.25)}",
    "#ovia-chat-panel.open{display:flex}",
    "#ovia-chat-head{padding:14px 16px;border-bottom:1.5px solid #000;display:flex;justify-content:space-between;align-items:flex-start}",
    "#ovia-chat-head b{font-size:15px;display:block}",
    "#ovia-chat-head span{font-size:12px;color:#444}",
    "#ovia-chat-x{background:none;border:none;font-size:18px;cursor:pointer;color:#000;line-height:1}",
    "#ovia-chat-log{padding:14px 16px;overflow-y:auto;flex:1}",
    ".oc-msg{margin:0 0 10px;padding:9px 12px;border:1px solid #000;max-width:88%}",
    ".oc-bot{background:#fff}",
    ".oc-user{background:#000;color:#fff;margin-left:auto}",
    ".oc-topics{display:flex;flex-wrap:wrap;gap:6px;margin:2px 0 12px}",
    ".oc-topic{background:#fff;border:1px solid #000;padding:6px 10px;cursor:pointer;font:13px system-ui,sans-serif}",
    ".oc-topic:hover{background:#000;color:#fff}",
    "#ovia-chat-form{display:flex;border-top:1.5px solid #000}",
    "#ovia-chat-input{flex:1;border:none;padding:12px;font:14px system-ui,sans-serif;color:#000;background:#fff}",
    "#ovia-chat-input:focus{outline:2px solid #000;outline-offset:-2px}",
    "#ovia-chat-send{background:#000;color:#fff;border:none;padding:0 16px;cursor:pointer;font:600 13px system-ui,sans-serif}"
  ].join("");

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var btn = document.createElement("button");
  btn.id = "ovia-chat-btn";
  btn.textContent = t.open;
  btn.setAttribute("aria-haspopup", "dialog");

  var panel = document.createElement("section");
  panel.id = "ovia-chat-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", t.title);
  panel.innerHTML =
    '<div id="ovia-chat-head"><div><b></b><span></span></div>' +
    '<button id="ovia-chat-x" aria-label="' + t.close + '">&times;</button></div>' +
    '<div id="ovia-chat-log" aria-live="polite"></div>' +
    '<form id="ovia-chat-form"><input id="ovia-chat-input" type="text" autocomplete="off">' +
    '<button id="ovia-chat-send" type="submit"></button></form>';
  panel.querySelector("#ovia-chat-head b").textContent = t.title;
  panel.querySelector("#ovia-chat-head span").textContent = t.sub;
  panel.querySelector("#ovia-chat-send").textContent = t.send.split(" ")[0] === "Send" || true ? "›" : "›";
  panel.querySelector("#ovia-chat-send").setAttribute("aria-label", t.send);

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  var log = panel.querySelector("#ovia-chat-log");
  var input = panel.querySelector("#ovia-chat-input");
  var started = false;

  function addMsg(text, who) {
    var p = document.createElement("p");
    p.className = "oc-msg " + (who === "user" ? "oc-user" : "oc-bot");
    p.textContent = text;
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
    return p;
  }

  function showTopics() {
    var wrap = document.createElement("div");
    wrap.className = "oc-topics";
    t.topics.forEach(function (topic) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "oc-topic";
      b.textContent = topic;
      b.addEventListener("click", function () {
        wrap.remove();
        chooseTopic(topic);
      });
      wrap.appendChild(b);
    });
    log.appendChild(wrap);
    log.scrollTop = log.scrollHeight;
  }

  function chooseTopic(topic) {
    state.topic = topic;
    addMsg(topic, "user");
    state.step = 1;
    addMsg(t.askName, "bot");
    input.focus();
  }

  function finish() {
    var subject = "Service inquiry, " + state.topic;
    var body =
      "Topic: " + state.topic + "\nName: " + state.name +
      "\nEmail: " + state.contact + "\n\n" + state.message;
    if (ENDPOINT) {
      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ subject: subject, name: state.name, email: state.contact, topic: state.topic, message: state.message })
      }).then(function () { addMsg(t.sent, "bot"); })
        .catch(function () { mailFallback(subject, body); });
    } else {
      mailFallback(subject, body);
    }
    state.step = 4;
    input.disabled = true;
  }

  function mailFallback(subject, body) {
    addMsg(t.sentMail, "bot");
    window.location.href = "mailto:" + FALLBACK_TO +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  }

  panel.querySelector("#ovia-chat-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var v = input.value.trim();
    if (!v) return;
    input.value = "";
    if (state.step === 0) { chooseTopic(v); return; }
    addMsg(v, "user");
    if (state.step === 1) {
      state.name = v; state.step = 2; addMsg(t.askContact, "bot");
    } else if (state.step === 2) {
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) { addMsg(t.invalid, "bot"); return; }
      state.contact = v; state.step = 3; addMsg(t.askMsg, "bot");
    } else if (state.step === 3) {
      state.message = v; finish();
    }
  });

  function toggle(open) {
    panel.classList.toggle("open", open);
    if (open && !started) {
      started = true;
      addMsg(t.greet, "bot");
      showTopics();
    }
    if (open) input.focus();
  }

  btn.addEventListener("click", function () {
    toggle(!panel.classList.contains("open"));
  });
  panel.querySelector("#ovia-chat-x").addEventListener("click", function () { toggle(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") toggle(false);
  });
})();
