/* ============================================================
   Landing Javier Murcia — Rediseño: i18n + animaciones
   ============================================================ */

(function () {
  "use strict";

  // Marca JS activo → habilita animaciones de aparición (accesibilidad)
  document.documentElement.classList.add("js");

  /* ---------- Traducciones ---------- */
  var I18N = {
    es: {
      "nav.inicio": "Inicio",
      "nav.servicios": "Servicios",
      "nav.sobre": "Sobre mí",
      "nav.proceso": "Proceso",
      "nav.contacto": "Contacto",
      "hero.badge": "Ingeniero de Sistemas · Remoto",
      "hero.hola": "Hola, soy",
      "hero.rot.pre": "Ingeniero de sistemas especializado en",
      "hero.rot.words": ["Cloud", "Virtualización", "Bases de datos", "Automatización"],
      "hero.sub":
        "Cloud, virtualización y automatización de bases de datos. Convierto infraestructura compleja en sistemas simples, seguros y escalables — 100% remoto.",
      "hero.cta": "Contáctame en LinkedIn",
      "hero.cta2": "Ver servicios",
      "hero.stat1l": "años de experiencia",
      "hero.stat2l": "trabajo remoto",
      "hero.stat3l": "áreas de especialidad",
      "serv.eyebrow": "Lo que hago",
      "serv.title": "Servicios",
      "serv.sub": "Soluciones de infraestructura y datos, diseñadas para crecer contigo.",
      "serv.cloud.t": "Cloud y virtualización",
      "serv.cloud.d":
        "Infraestructura en AWS, Azure y GCP: migraciones a la nube, gestión de máquinas virtuales y VPS con foco en rendimiento, seguridad y ahorro de costos.",
      "serv.db.t": "Bases de datos",
      "serv.db.d":
        "Administración de PostgreSQL y MySQL: diseño de esquemas, optimización de consultas, backups automáticos y recuperación ante desastres.",
      "serv.auto.t": "Automatización",
      "serv.auto.d":
        "Scripts en Python y Bash que eliminan tareas repetitivas: despliegues, monitoreo, reportes y procesos programados que trabajan solos.",
      "serv.cont.t": "Contenedores (Docker)",
      "serv.cont.d":
        "Entornos con Docker para desarrollo y producción: infraestructura reproducible, portátil y fácil de escalar, lista para crecer sin fricción.",
      "serv.sop.t": "Soporte y mantenimiento",
      "serv.sop.d":
        "Monitoreo proactivo, actualizaciones y resolución de incidentes para que tus sistemas se mantengan estables, disponibles y con el mejor rendimiento.",
      "serv.seg.t": "Seguridad y backups",
      "serv.seg.d":
        "Copias de seguridad automáticas, políticas de recuperación y buenas prácticas de seguridad para proteger tus datos antes de que ocurra un problema.",
      "about.eyebrow": "Quién soy",
      "about.title": "Sobre mí",
      "about.p1":
        "Soy Javier Murcia, ingeniero de sistemas con enfoque en cloud, virtualización, bases de datos y automatización. Me apasiona convertir problemas técnicos complejos en soluciones simples, documentadas y escalables.",
      "about.p2":
        "Trabajo 100% remoto y de forma pragmática: diagnostico, propongo y ejecuto. Creo en la automatización como la mejor inversión — todo lo repetitivo debería hacerse una sola vez, y luego funcionar solo.",
      "about.pt1": "🔧 Enfoque en soluciones, no en parches",
      "about.pt2": "📈 Aprendizaje continuo de tecnologías nuevas",
      "about.pt3": "🤝 Comunicación clara y cercana",
      "about.stack": "Tecnologías con las que trabajo",
      "proc.eyebrow": "Cómo trabajo",
      "proc.title": "Proceso",
      "proc.sub": "Un método claro de principio a fin, para que sepas qué esperar en cada paso.",
      "proc.s1t": "Diagnóstico",
      "proc.s1d": "Analizo tu infraestructura y procesos actuales para entender qué funciona y qué frena.",
      "proc.s2t": "Diseño",
      "proc.s2d": "Propongo la solución más adecuada: arquitectura, herramientas y plan de implementación.",
      "proc.s3t": "Implementación",
      "proc.s3d": "Pongo en marcha la solución con pruebas, documentación y sin interrumpir tu operación.",
      "proc.s4t": "Soporte",
      "proc.s4d": "Acompaño el resultado con monitoreo, mejoras continuas y respuesta ante incidentes.",
      "cta.title": "¿Hablamos de tu proyecto?",
      "cta.sub": "Cuéntame qué necesitas — te respondo con una propuesta clara, sin compromiso.",
      "cta.btn": "Contáctame en LinkedIn",
      "cta.note": "100% remoto · Respuesta rápida",
      "foot.name": "Javier Murcia",
      "foot.role": "Ingeniero de Sistemas"
    },
    en: {
      "nav.inicio": "Home",
      "nav.servicios": "Services",
      "nav.sobre": "About me",
      "nav.proceso": "Process",
      "nav.contacto": "Contact",
      "hero.badge": "Systems Engineer · Remote",
      "hero.hola": "Hi, I'm",
      "hero.rot.pre": "Systems engineer specialized in",
      "hero.rot.words": ["Cloud", "Virtualization", "Databases", "Automation"],
      "hero.sub":
        "Cloud, virtualization, and database automation. I turn complex infrastructure into simple, secure, scalable systems — 100% remote.",
      "hero.cta": "Contact me on LinkedIn",
      "hero.cta2": "View services",
      "hero.stat1l": "years of experience",
      "hero.stat2l": "remote work",
      "hero.stat3l": "areas of expertise",
      "serv.eyebrow": "What I do",
      "serv.title": "Services",
      "serv.sub": "Infrastructure and data solutions, designed to grow with you.",
      "serv.cloud.t": "Cloud & virtualization",
      "serv.cloud.d":
        "Infrastructure on AWS, Azure, and GCP: cloud migrations, virtual machine and VPS management focused on performance, security, and cost savings.",
      "serv.db.t": "Databases",
      "serv.db.d":
        "PostgreSQL and MySQL administration: schema design, query optimization, automated backups, and disaster recovery.",
      "serv.auto.t": "Automation",
      "serv.auto.d":
        "Python and Bash scripts that eliminate repetitive tasks: deployments, monitoring, reports, and scheduled processes that run themselves.",
      "serv.cont.t": "Containers (Docker)",
      "serv.cont.d":
        "Docker environments for development and production: reproducible, portable, easily scalable infrastructure, ready to grow without friction.",
      "serv.sop.t": "Support & maintenance",
      "serv.sop.d":
        "Proactive monitoring, updates, and incident resolution to keep your systems stable, available, and performing at their best.",
      "serv.seg.t": "Security & backups",
      "serv.seg.d":
        "Automated backups, recovery policies, and security best practices to protect your data before a problem happens.",
      "about.eyebrow": "Who I am",
      "about.title": "About me",
      "about.p1":
        "I'm Javier Murcia, a systems engineer focused on cloud, virtualization, databases, and automation. I'm passionate about turning complex technical problems into simple, documented, scalable solutions.",
      "about.p2":
        "I work 100% remotely and pragmatically: I diagnose, propose, and execute. I believe automation is the best investment — anything repetitive should be done once, then run on its own.",
      "about.pt1": "🔧 Focus on solutions, not quick fixes",
      "about.pt2": "📈 Continuous learning of new technologies",
      "about.pt3": "🤝 Clear and friendly communication",
      "about.stack": "Technologies I work with",
      "proc.eyebrow": "How I work",
      "proc.title": "Process",
      "proc.sub": "A clear method from start to finish, so you know what to expect at every step.",
      "proc.s1t": "Diagnosis",
      "proc.s1d": "I analyze your current infrastructure and processes to understand what works and what slows you down.",
      "proc.s2t": "Design",
      "proc.s2d": "I propose the best solution: architecture, tools, and an implementation plan.",
      "proc.s3t": "Implementation",
      "proc.s3d": "I roll out the solution with testing and documentation, without disrupting your operations.",
      "proc.s4t": "Support",
      "proc.s4d": "I follow up with monitoring, continuous improvements, and incident response.",
      "cta.title": "Let's talk about your project?",
      "cta.sub": "Tell me what you need — I'll reply with a clear proposal, no strings attached.",
      "cta.btn": "Contact me on LinkedIn",
      "cta.note": "100% remote · Fast response",
      "foot.name": "Javier Murcia",
      "foot.role": "Systems Engineer"
    }
  };

  /* ---------- Estado de idioma ---------- */
  var lang = localStorage.getItem("jm-lang") || "es";

  function applyLang(l) {
    var dict = I18N[l] || I18N.es;
    document.documentElement.setAttribute("lang", l);
    document.documentElement.setAttribute("data-lang", l);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    var toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = l === "es" ? "EN" : "ES";
    localStorage.setItem("jm-lang", l);
  }

  /* ---------- Toggle de idioma ---------- */
  var toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      lang = lang === "es" ? "en" : "es";
      applyLang(lang);
      refreshRotator();
    });
  }

  /* ---------- Palabra rotatoria ---------- */
  var rotEl = document.getElementById("rotating");
  var rotWords = [];
  var rotIdx = 0;
  var rotTimer = null;

  function refreshRotator() {
    if (!rotEl) return;
    var key = rotEl.getAttribute("data-i18n-words");
    rotWords = (I18N[lang] && I18N[lang][key]) || [];
    rotIdx = 0;
    if (rotWords.length) rotEl.textContent = rotWords[0];
  }

  function cycleRotator() {
    if (!rotEl || rotWords.length < 2) return;
    rotEl.classList.add("fading");
    setTimeout(function () {
      rotIdx = (rotIdx + 1) % rotWords.length;
      rotEl.textContent = rotWords[rotIdx];
      rotEl.classList.remove("fading");
    }, 350);
  }

  /* ---------- Menú móvil ---------- */
  var burger = document.getElementById("navBurger");
  var navLinks = document.getElementById("navLinks");
  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("open");
      });
    });
  }

  /* ---------- Nav activa según scroll ---------- */
  var navAnchors = Array.prototype.slice.call(
    document.querySelectorAll(".nav-links a[href^='#']")
  );
  if ("IntersectionObserver" in window && navAnchors.length) {
    var sections = navAnchors
      .map(function (a) { return document.querySelector(a.getAttribute("href")); })
      .filter(Boolean);
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = "#" + entry.target.id;
            navAnchors.forEach(function (a) {
              a.classList.toggle("active", a.getAttribute("href") === id);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Barra de progreso de scroll ---------- */
  var progressBar = document.getElementById("progressBar");
  function updateProgress() {
    if (!progressBar) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    progressBar.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* ---------- Animaciones al hacer scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Contadores animados ---------- */
  var counters = document.querySelectorAll(".count");
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1100;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (counters.length && "IntersectionObserver" in window) {
    var cio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (c) { cio.observe(c); });
  } else {
    counters.forEach(function (c) {
      c.textContent = c.getAttribute("data-count") + (c.getAttribute("data-suffix") || "");
    });
  }

  /* ---------- Botón volver arriba ---------- */
  var backTop = document.getElementById("backTop");
  if (backTop) {
    function updateBackTop() {
      backTop.classList.toggle("visible", window.scrollY > 480);
    }
    window.addEventListener("scroll", updateBackTop, { passive: true });
    updateBackTop();
    backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Año en el footer ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Init ---------- */
  applyLang(lang);
  refreshRotator();
  rotTimer = setInterval(cycleRotator, 2600);
})();
