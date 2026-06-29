const player = {
  taille: 1.70,
  poids: 56,
  poste: "Latéral gauche",
  pied_fort: "droit",
  niveau: "débutant_loisirs"
};

const phaseSummaries = {
  base: {
    title: "Phase 1 · Bases (semaines 1 à 8)",
    text: "Construire les fondamentaux : technique simple, 1v1 défensif, endurance couloir et circuit de force globale. Chaque semaine ajoute une petite variation." 
  },
  intensif: {
    title: "Phase 2 · Intensif (semaines 1 à 8)",
    text: "Augmenter l'intensité : drills techniques plus complexes, plus de répétitions d'efforts et travail de force/explosivité."
  },
  match: {
    title: "Phase 3 · Match player (semaines 1 à 8)",
    text: "Se rapprocher des exigences de match : tactique du latéral, retours défensifs, force max et duels 1v1 plus poussés." 
  }
};

const sessionCatalog = {
  technique_overlap: {
    title: "Drill solo · Passe courte + overlap",
    type: "Terrain",
    desc: "Travail de la passe courte avec un plot ailier, course d'overlap et centre dans le couloir gauche.",
    duration: "75 min",
    image: "schemes/solo_overlap.png"
  },
  technique_controle_passe: {
    title: "Drill solo · Contrôle orienté + passe",
    type: "Terrain",
    desc: "Contrôles orientés vers la ligne puis passes précises vers des plots cibles dans le couloir.",
    duration: "75 min"
  },
  endurance_couloir: {
    title: "Drill solo · Endurance couloir (3 plots)",
    type: "Terrain",
    desc: "Montées et retours avec ballon sur trois plots espacés de 15, 30 et 45 m.",
    duration: "60 min",
    image: "schemes/solo_endurance_couloir.png"
  },
  endurance_intervalles: {
    title: "Drill solo · Intervalles couloir",
    type: "Terrain",
    desc: "Montées/descentes avec ballon entre Départ et Arrivée sur intervalles chronométrés.",
    duration: "60 min",
    image: "schemes/solo_endurance_intervalles.png"
  },
  endurance_retours: {
    title: "Drill solo · Retours défensifs en diagonale",
    type: "Terrain",
    desc: "Montée offensive puis retour en diagonale vers la zone défensive.",
    duration: "60 min",
    image: "schemes/solo_retours_defensifs.png"
  },
  force_globale: {
    title: "Drill solo · Circuit force globale",
    type: "Salle",
    desc: "Squats, fentes, pompes, tractions, gainage en circuit.",
    duration: "45–60 min",
    image: "schemes/solo_force_globale.png"
  },
  force_explosivite: {
    title: "Drill solo · Force & explosivité",
    type: "Salle",
    desc: "Travail jambes unilatéral, sauts et sprints courts pour l'explosivité du latéral.",
    duration: "45–60 min"
  },
  force_max: {
    title: "Drill solo · Force max",
    type: "Salle",
    desc: "Squats/fentes plus lourds (si technique ok) en séries courtes.",
    duration: "45–60 min"
  },
  tactique_ligne: {
    title: "Drill solo · Ligne défensive et montées",
    type: "Terrain",
    desc: "Courses fantômes pour monter et se replacer dans la ligne défensive.",
    duration: "75 min"
  },
  duel_1v1: {
    title: "Drill solo · 1v1 latéral",
    type: "Terrain",
    desc: "Posture défensive, distance et changements de direction dans un petit couloir spécifique.",
    duration: "60 min",
    image: "schemes/solo_duel_1v1.png"
  }
};

const phasePrograms = {
  base: {
    1: [
      { jour: "Mardi", key: "technique_overlap" },
      { jour: "Jeudi", key: "force_globale" },
      { jour: "Samedi", key: "endurance_couloir" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    2: [
      { jour: "Mardi", key: "technique_controle_passe" },
      { jour: "Jeudi", key: "force_globale" },
      { jour: "Samedi", key: "endurance_intervalles" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    3: [
      { jour: "Mardi", key: "technique_overlap" },
      { jour: "Jeudi", key: "force_globale" },
      { jour: "Samedi", key: "endurance_retours" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    4: [
      { jour: "Mardi", key: "technique_controle_passe" },
      { jour: "Jeudi", key: "force_globale" },
      { jour: "Samedi", key: "endurance_couloir" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    5: [
      { jour: "Mardi", key: "technique_overlap" },
      { jour: "Jeudi", key: "force_globale" },
      { jour: "Samedi", key: "endurance_intervalles" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    6: [
      { jour: "Mardi", key: "technique_controle_passe" },
      { jour: "Jeudi", key: "force_globale" },
      { jour: "Samedi", key: "endurance_retours" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    7: [
      { jour: "Mardi", key: "technique_overlap" },
      { jour: "Jeudi", key: "force_globale" },
      { jour: "Samedi", key: "endurance_couloir" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    8: [
      { jour: "Mardi", key: "technique_controle_passe" },
      { jour: "Jeudi", key: "force_globale" },
      { jour: "Samedi", key: "endurance_intervalles" },
      { jour: "Dimanche", key: "duel_1v1" }
    ]
  },
  intensif: {
    1: [
      { jour: "Mardi", key: "technique_overlap" },
      { jour: "Jeudi", key: "force_explosivite" },
      { jour: "Samedi", key: "endurance_intervalles" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    2: [
      { jour: "Mardi", key: "technique_controle_passe" },
      { jour: "Jeudi", key: "force_explosivite" },
      { jour: "Samedi", key: "endurance_retours" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    3: [
      { jour: "Mardi", key: "technique_overlap" },
      { jour: "Jeudi", key: "force_explosivite" },
      { jour: "Samedi", key: "endurance_couloir" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    4: [
      { jour: "Mardi", key: "technique_controle_passe" },
      { jour: "Jeudi", key: "force_explosivite" },
      { jour: "Samedi", key: "endurance_intervalles" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    5: [
      { jour: "Mardi", key: "technique_overlap" },
      { jour: "Jeudi", key: "force_explosivite" },
      { jour: "Samedi", key: "endurance_retours" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    6: [
      { jour: "Mardi", key: "technique_controle_passe" },
      { jour: "Jeudi", key: "force_explosivite" },
      { jour: "Samedi", key: "endurance_couloir" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    7: [
      { jour: "Mardi", key: "technique_overlap" },
      { jour: "Jeudi", key: "force_explosivite" },
      { jour: "Samedi", key: "endurance_intervalles" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    8: [
      { jour: "Mardi", key: "technique_controle_passe" },
      { jour: "Jeudi", key: "force_explosivite" },
      { jour: "Samedi", key: "endurance_retours" },
      { jour: "Dimanche", key: "duel_1v1" }
    ]
  },
  match: {
    1: [
      { jour: "Mardi", key: "tactique_ligne" },
      { jour: "Jeudi", key: "force_max" },
      { jour: "Samedi", key: "endurance_retours" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    2: [
      { jour: "Mardi", key: "tactique_ligne" },
      { jour: "Jeudi", key: "force_max" },
      { jour: "Samedi", key: "endurance_intervalles" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    3: [
      { jour: "Mardi", key: "tactique_ligne" },
      { jour: "Jeudi", key: "force_max" },
      { jour: "Samedi", key: "endurance_couloir" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    4: [
      { jour: "Mardi", key: "tactique_ligne" },
      { jour: "Jeudi", key: "force_max" },
      { jour: "Samedi", key: "endurance_retours" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    5: [
      { jour: "Mardi", key: "tactique_ligne" },
      { jour: "Jeudi", key: "force_max" },
      { jour: "Samedi", key: "endurance_intervalles" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    6: [
      { jour: "Mardi", key: "tactique_ligne" },
      { jour: "Jeudi", key: "force_max" },
      { jour: "Samedi", key: "endurance_couloir" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    7: [
      { jour: "Mardi", key: "tactique_ligne" },
      { jour: "Jeudi", key: "force_max" },
      { jour: "Samedi", key: "endurance_retours" },
      { jour: "Dimanche", key: "duel_1v1" }
    ],
    8: [
      { jour: "Mardi", key: "tactique_ligne" },
      { jour: "Jeudi", key: "force_max" },
      { jour: "Samedi", key: "endurance_intervalles" },
      { jour: "Dimanche", key: "duel_1v1" }
    ]
  }
};

function renderPhaseSummary(phaseKey) {
  const summaryEl = document.getElementById("phase-summary");
  const data = phaseSummaries[phaseKey];
  if (!data) {
    summaryEl.innerHTML = "";
    return;
  }
  summaryEl.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.text}</p>
  `;
}

function renderWeek(phaseKey, weekNumber) {
  const container = document.getElementById("sessions");
  container.innerHTML = "";

  const phase = phasePrograms[phaseKey] || {};
  const weekPlan = phase[weekNumber] || phase[1] || [];

  weekPlan.forEach((session, index) => {
    const catalogItem = sessionCatalog[session.key];
    const doneKey = `phase_${phaseKey}_week_${weekNumber}_session_${index}`;
    const done = localStorage.getItem(doneKey) === "1";

    const card = document.createElement("article");
    card.className = "session-card";

    let title = "Séance";
    let type = "";
    let desc = "";
    let duration = "";
    let image = "";

    if (catalogItem) {
      title = catalogItem.title;
      type = catalogItem.type;
      desc = catalogItem.desc;
      duration = catalogItem.duration;
      image = catalogItem.image || "";
    }

    let imageHtml = "";
    if (image) {
      imageHtml = `<div class="session-image"><img src="${image}" alt="Schéma ${title}"></div>`;
    }

    card.innerHTML = `
      <div class="session-meta">
        <span>${session.jour}</span>
        <span>${duration}</span>
      </div>
      <div class="session-title">${title}</div>
      <div class="session-type">${type}</div>
      <div class="session-desc">${desc}</div>
      ${imageHtml}
      <div class="session-actions">
        <button class="session-done-btn" data-key="${doneKey}">
          ${done ? "Séance faite ✔" : "Marquer comme faite"}
        </button>
        <span class="session-status ${done ? "done" : ""}">
          ${done ? "Suivi : cette séance est cochée" : "Suivi : non cochée"}
        </span>
      </div>
    `;

    container.appendChild(card);
  });

  container.querySelectorAll(".session-done-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      const alreadyDone = localStorage.getItem(key) === "1";
      localStorage.setItem(key, alreadyDone ? "0" : "1");
      const phaseSelect = document.getElementById("phase-select");
      const weekInput = document.getElementById("week-input");
      const phaseKeyCurrent = phaseSelect.value;
      const weekNumberCurrent = parseInt(weekInput.value, 10) || 1;
      renderWeek(phaseKeyCurrent, weekNumberCurrent);
    });
  });
}

function initApp() {
  const phaseSelect = document.getElementById("phase-select");
  const weekInput = document.getElementById("week-input");
  const generateBtn = document.getElementById("generate-btn");

  generateBtn.addEventListener("click", () => {
    const phaseKey = phaseSelect.value;
    const weekNumber = parseInt(weekInput.value, 10) || 1;
    renderPhaseSummary(phaseKey);
    renderWeek(phaseKey, weekNumber);
  });

  renderPhaseSummary("base");
  renderWeek("base", 1);
}

document.addEventListener("DOMContentLoaded", initApp);
