const STORAGE_KEY = "bourneville-quest-session-v1";

const steps = [
  {
    id: "manoir",
    name: "Le Manoir",
    directions: "Depuis la maison des metiers, remontez de 170 m en direction du chemin du manoir.",
    story:
      "Cherchez un labyrinthe a l'entree du chemin et trouvez le parcours qui mene jusqu'a la croix de guerre.",
    clue: "Son travail est essentiel a la pollinisation.",
    image: {
      src: "assets/step1-morse.png",
      alt: "Cases en code morse a remplir pour le mot de 7 lettres",
      label: "Cases du support"
    },
    morseBoxes: {
      label: "Mot et codes morse",
      count: 7
    },
    tasks: [
      {
        label: "Mot de 7 lettres",
        prompt:
          "Recopiez les lettres dans l'ordre ou vous les rencontrez. Ce mot servira a traduire le code morse du message.",
        placeholder: "Votre mot"
      }
    ]
  },
  {
    id: "eglise",
    name: "L'Eglise Saint Pierre",
    directions:
      "Suivez le chemin vers l'ouest pendant 200 m. Face au choix de direction, observez la fumee : elle semble s'orienter vers le Sud. Continuez 140 m.",
    story:
      "Vous devez trouver les 4 chiffres d'un code secret qui ouvrira une boite a cles.",
    clue: "Les chiffres du code sont uniques.",
    image: {
      src: "assets/eglise-grid.png",
      alt: "Grille mathematique de l'enigme du troisieme chiffre",
      label: "Enigme mathematique"
    },
    morseBoxes: {
      label: "Lettre et code morse trouves dans la boite",
      count: 1
    },
    tasks: [
      {
        label: "1er chiffre",
        prompt:
          "Trouvez le vieux conifere present dans le cimetiere. Combien y a-t-il de lettres dans le nom de cet arbre ?",
        placeholder: "Chiffre"
      },
      {
        label: "2eme chiffre",
        prompt:
          "Observez le sommet de l'eglise. Combien y a-t-il de lettres dans le nom de l'oiseau qui indique le sens du vent ?",
        placeholder: "Chiffre"
      },
      {
        label: "3eme chiffre",
        prompt:
          "Resolvez l'enigme mathematique laissee par l'eclaireur anglais.",
        placeholder: "Chiffre"
      },
      {
        label: "4eme chiffre",
        prompt:
          "L'eclaireur n'a pas eu le temps de laisser l'enigme. Faites preuve d'ingeniosite.",
        placeholder: "Chiffre"
      },
      {
        label: "Lettre et code morse",
        prompt:
          "Notez la lettre et son code morse trouves dans la boite. Refermez la boite et brouillez le code.",
        placeholder: "Exemple : A = .-"
      }
    ]
  },
  {
    id: "pro-patria",
    name: "Pro Patria",
    directions:
      "Partez en direction du carrefour. Depuis ce point strategique, cherchez le monument commemoratif a portee de vue.",
    story:
      "Faites le tour du monument aux morts pour compter le nombre de noms de familles inscrits dans la pierre.",
    clue:
      "Additionnez les chiffres du nombre trouve, puis cherchez la lettre correspondante dans l'alphabet.",
    image: {
      src: "assets/pro-patria-formula.png",
      alt: "Formule Pro Patria pour convertir le nombre en lettre",
      label: "Calcul du support"
    },
    tasks: [
      {
        label: "Nombre de noms",
        prompt: "Combien de noms de familles avez-vous comptes ?",
        placeholder: "Nombre"
      },
      {
        label: "Lettre obtenue",
        prompt: "A quelle lettre de l'alphabet correspond le resultat ?",
        placeholder: "Lettre"
      }
    ]
  },
  {
    id: "foret",
    name: "La Foret",
    directions:
      "Rejoignez la place non loin de vous et continuez par la sente verdoyante.",
    story:
      "L'eclaireur anglais vous a laisse un puzzle quelque part sous les arbres.",
    clue: "N'oubliez pas ce que vous connaissez deja.",
    image: {
      src: "assets/foret-puzzle.png",
      alt: "Cases du puzzle de la foret",
      label: "Puzzle du support"
    },
    morseBoxes: {
      label: "Nom de code et codes morse",
      count: 7
    },
    tasks: [
      {
        label: "Nom de code",
        prompt:
          "Mettez le puzzle dans le bon ordre pour decouvrir le nom de code de l'operation de grande ampleur en Normandie.",
        placeholder: "Nom de code"
      }
    ]
  },
  {
    id: "arbre",
    name: "L'Arbre Solitaire",
    directions:
      "Vous etes de nouveau dans une zone a decouvert. Passez au pied de l'arbre solitaire.",
    story:
      "Vous pourrez probablement y decouvrir l'avant-dernier indice laisse par l'eclaireur.",
    clue: "Quelles sont les deux lettres qui abregent le mot Docteur ?",
    image: {
      src: "assets/arbre-morse.png",
      alt: "Deux cases en code morse pour l'arbre solitaire",
      label: "Cases du support"
    },
    morseBoxes: {
      label: "Deux lettres et leurs codes morse",
      count: 2
    },
    tasks: [
      {
        label: "Indice trouve",
        prompt: "Notez les deux lettres obtenues.",
        placeholder: "Deux lettres"
      }
    ]
  },
  {
    id: "mairie",
    name: "La Mairie",
    directions: "Remontez en direction du centre bourg et trouvez la Mairie.",
    story:
      "Vous etes arrive a la derniere etape pour decoder le message de l'eclaireur.",
    clue: "Les informations sont souvent bien affichees aux yeux de tous.",
    image: {
      src: "assets/mairie-box.png",
      alt: "Case de reponse pour la mairie",
      label: "Case du support"
    },
    morseBoxes: {
      label: "Derniere lettre et son code morse",
      count: 1
    },
    tasks: [
      {
        label: "Dernier indice",
        prompt: "Devant la Mairie, regardez autour de vous et notez l'indice trouve.",
        placeholder: "Indice"
      }
    ]
  }
];

const defaultState = {
  activeStep: 0,
  answers: {},
  completed: {},
  finalMessage: "",
  updatedAt: null
};

let state = loadState();

const stepTabs = document.querySelector("#stepTabs");
const stepView = document.querySelector("#stepView");
const progressLabel = document.querySelector("#progressLabel");
const progressBar = document.querySelector("#progressBar");
const finalMessage = document.querySelector("#finalMessage");
const saveState = document.querySelector("#saveState");
const resetGame = document.querySelector("#resetGame");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultState, ...saved } : { ...defaultState };
  } catch {
    return { ...defaultState };
  }
}

function persistState() {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  saveState.textContent = "Session sauvegardee automatiquement.";
}

function getAnswerKey(stepIndex, taskIndex) {
  return `${steps[stepIndex].id}-${taskIndex}`;
}

function getMorseKey(stepIndex, boxIndex, part) {
  return `${steps[stepIndex].id}-morse-${boxIndex}-${part}`;
}

function renderTabs() {
  stepTabs.innerHTML = "";

  steps.forEach((step, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `step-tab${state.completed[step.id] ? " done" : ""}`;
    button.setAttribute("aria-selected", String(index === state.activeStep));
    button.innerHTML = `
      <span class="step-number">${index + 1}</span>
      <span class="step-name">${step.name}</span>
    `;
    button.addEventListener("click", () => {
      state.activeStep = index;
      persistState();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    stepTabs.appendChild(button);
  });
}

function renderStep() {
  const step = steps[state.activeStep];
  const visualMarkup = step.image
    ? `
        <div class="visual-panel">
          <span>${step.image.label}</span>
          <img class="step-visual" src="${step.image.src}" alt="${step.image.alt}">
        </div>
      `
    : "";
  const morseBoxesMarkup = step.morseBoxes
    ? renderMorseBoxes(step, state.activeStep)
    : "";
  const taskMarkup = step.tasks
    .map((task, taskIndex) => {
      const answerKey = getAnswerKey(state.activeStep, taskIndex);
      const value = state.answers[answerKey] || "";
      return `
        <div class="task">
          <label for="${answerKey}">${task.label}</label>
          <p>${task.prompt}</p>
          <input id="${answerKey}" data-answer="${answerKey}" value="${escapeHtml(value)}" placeholder="${task.placeholder}">
        </div>
      `;
    })
    .join("");

  stepView.innerHTML = `
    <div class="step-layout">
      <article>
        <p class="section-label">Etape ${state.activeStep + 1} / ${steps.length}</p>
        <h2>${step.name}</h2>
        <p class="story">${step.story}</p>
        <div class="directions">${step.directions}</div>
        ${visualMarkup}
        ${morseBoxesMarkup}
        <div class="task-list">${taskMarkup}</div>
        <div class="step-actions">
          <button class="primary-button" id="completeStep" type="button">Marquer l'etape faite</button>
          <button class="secondary-button" id="previousStep" type="button">Etape precedente</button>
          <button class="secondary-button" id="nextStep" type="button">Etape suivante</button>
        </div>
      </article>
      <aside class="clue-panel">
        <strong>Indice</strong>
        <p>${step.clue}</p>
      </aside>
    </div>
  `;

  stepView.querySelectorAll("[data-answer]").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.answers[event.target.dataset.answer] = event.target.value;
      persistState();
      updateProgress();
    });
  });

  stepView.querySelectorAll("[data-morse]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const value = event.target.dataset.part === "letter"
        ? event.target.value.toUpperCase().slice(0, 1)
        : event.target.value.replace(/[^.\-\s/]/g, "");
      event.target.value = value;
      state.answers[event.target.dataset.morse] = value;
      persistState();
    });
  });

  document.querySelector("#completeStep").addEventListener("click", () => {
    state.completed[step.id] = true;
    if (state.activeStep < steps.length - 1) {
      state.activeStep += 1;
    }
    persistState();
    render();
  });

  document.querySelector("#previousStep").addEventListener("click", () => {
    state.activeStep = Math.max(0, state.activeStep - 1);
    persistState();
    render();
  });

  document.querySelector("#nextStep").addEventListener("click", () => {
    state.activeStep = Math.min(steps.length - 1, state.activeStep + 1);
    persistState();
    render();
  });
}

function renderMorseBoxes(step, stepIndex) {
  const boxes = Array.from({ length: step.morseBoxes.count }, (_, index) => {
    const letterKey = getMorseKey(stepIndex, index, "letter");
    const morseKey = getMorseKey(stepIndex, index, "morse");
    const letter = state.answers[letterKey] || "";
    const morse = state.answers[morseKey] || "";
    return `
      <div class="morse-box">
        <label class="sr-only" for="${letterKey}">Lettre ${index + 1}</label>
        <input
          id="${letterKey}"
          class="morse-letter"
          data-morse="${letterKey}"
          data-part="letter"
          value="${escapeHtml(letter)}"
          maxlength="1"
          autocomplete="off"
          autocapitalize="characters"
          placeholder="A"
          aria-label="Lettre ${index + 1}"
        >
        <label class="sr-only" for="${morseKey}">Code morse ${index + 1}</label>
        <input
          id="${morseKey}"
          class="morse-code"
          data-morse="${morseKey}"
          data-part="morse"
          value="${escapeHtml(morse)}"
          autocomplete="off"
          inputmode="text"
          placeholder=".-"
          aria-label="Code morse ${index + 1}"
        >
      </div>
    `;
  }).join("");

  return `
    <div class="morse-panel">
      <span>${step.morseBoxes.label}</span>
      <div class="morse-grid" style="--morse-count: ${step.morseBoxes.count}">
        ${boxes}
      </div>
    </div>
  `;
}

function updateProgress() {
  const completedCount = steps.filter((step) => state.completed[step.id]).length;
  const percent = Math.round((completedCount / steps.length) * 100);
  progressLabel.textContent = `${completedCount} / ${steps.length}`;
  progressBar.style.width = `${percent}%`;
}

function render() {
  finalMessage.value = state.finalMessage || "";
  renderTabs();
  renderStep();
  updateProgress();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

finalMessage.addEventListener("input", (event) => {
  state.finalMessage = event.target.value;
  persistState();
});

resetGame.addEventListener("click", () => {
  const confirmed = window.confirm("Recommencer le jeu et effacer la session enregistree ?");
  if (!confirmed) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  state = { ...defaultState };
  saveState.textContent = "Session remise a zero.";
  render();
});

render();
