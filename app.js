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
      count: 7,
      prefill: [
        { morse: "._" },
        { morse: "_..." },
        { morse: "." },
        { morse: ".." },
        { morse: "._.." },
        { morse: "._.." },
        { morse: "." }
      ]
    },
    tasks: [
      {
        label: "Mot de 7 lettres",
        prompt:
          "Recopiez les lettres dans l'ordre ou vous les rencontrez. Ce mot servira a traduire le code morse du message."
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
    morseBoxes: {
      label: "Lettre et code morse trouves dans la boite",
      count: 1
    },
    tasks: [
      {
        label: "1er chiffre",
        prompt:
          "Trouvez le vieux conifere present dans le cimetiere. Combien y a-t-il de lettres dans le nom de cet arbre ?",
        box: { name: "code-0", mode: "digit", ariaLabel: "Premier chiffre du code" }
      },
      {
        label: "2eme chiffre",
        prompt:
          "Observez le sommet de l'eglise. Combien y a-t-il de lettres dans le nom de l'oiseau qui indique le sens du vent ?",
        box: { name: "code-1", mode: "digit", ariaLabel: "Deuxieme chiffre du code" }
      },
      {
        label: "3eme chiffre",
        prompt:
          "Resolvez l'enigme mathematique laissee par l'eclaireur anglais.",
        mathPuzzle: {
          resultName: "code-2"
        }
      },
      {
        label: "4eme chiffre",
        prompt:
          "L'eclaireur n'a pas eu le temps de laisser l'enigme. Faites preuve d'ingeniosite.",
        box: { name: "code-3", mode: "digit", ariaLabel: "Quatrieme chiffre du code" }
      },
      {
        label: "Lettre et code morse",
        prompt:
          "Notez la lettre et son code morse trouves dans la boite. Refermez la boite et brouillez le code."
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
    worksheet: {
      type: "proPatria",
      label: "Calcul et lettre obtenue"
    },
    morseBoxes: {
      label: "Lettre correspondante et code morse",
      count: 1
    },
    tasks: [
      {
        label: "Nombre de noms",
        prompt: "Comptez le nombre de noms de familles inscrits dans la pierre, puis additionnez les chiffres du nombre trouve."
      },
      {
        label: "Lettre obtenue",
        prompt: "Reportez le resultat et la lettre correspondante dans les cases."
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
      count: 7,
      prefill: [
        {},
        { morse: "." },
        {},
        { letter: "T" },
        {},
        {},
        { morse: "." }
      ]
    },
    tasks: [
      {
        label: "Nom de code",
        prompt:
          "Mettez le puzzle dans le bon ordre pour decouvrir le nom de code de l'operation de grande ampleur en Normandie."
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
      count: 2,
      prefill: [
        { morse: "_.." },
        { morse: "._." }
      ]
    },
    tasks: [
      {
        label: "Indice trouve",
        prompt: "Notez les deux lettres obtenues."
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
        prompt: "Devant la Mairie, regardez autour de vous et notez l'indice trouve."
      }
    ]
  },
  {
    id: "message-final",
    name: "Message final",
    directions: "Vous avez reuni les indices. Decodez maintenant le message laisse par l'eclaireur.",
    story:
      "Utilisez les lettres et les codes morse trouves pendant le parcours pour completer le message.",
    clue: "Relisez les codes notes a chaque etape.",
    finalMessageStep: true,
    image: {
      src: "assets/final-message.png",
      alt: "Message en code morse laisse par l'eclaireur",
      label: "Message de l'eclaireur"
    },
    tasks: []
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
  const saveState = document.querySelector("#saveState");
  if (saveState) {
    saveState.textContent = "Session sauvegardee automatiquement.";
  }
}

function getAnswerKey(stepIndex, taskIndex) {
  return `${steps[stepIndex].id}-${taskIndex}`;
}

function getMorseKey(stepIndex, boxIndex, part) {
  return `${steps[stepIndex].id}-morse-${boxIndex}-${part}`;
}

function getBoxKey(stepIndex, name) {
  return `${steps[stepIndex].id}-box-${name}`;
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
  const worksheetMarkup = step.worksheet
    ? renderWorksheet(step, state.activeStep)
    : "";
  const taskMarkup = step.tasks
    .map((task, taskIndex) => {
      const answerKey = getAnswerKey(state.activeStep, taskIndex);
      const value = state.answers[answerKey] || "";
      const inputMarkup = task.placeholder
        ? `<input id="${answerKey}" data-answer="${answerKey}" value="${escapeHtml(value)}" placeholder="${task.placeholder}">`
        : "";
      const imageMarkup = task.image
        ? `<img class="task-image" src="${task.image.src}" alt="${task.image.alt}">`
        : "";
      const puzzleMarkup = task.mathPuzzle
        ? renderMathPuzzle(state.activeStep, task.mathPuzzle)
        : "";
      const boxMarkup = task.box
        ? renderSimpleBox(state.activeStep, task.box.name, "", task.box.mode, task.box.ariaLabel)
        : "";
      return `
        <div class="task${task.box ? " task-with-box" : ""}">
          <div class="task-copy">
            <strong>${task.label}</strong>
            <p>${task.prompt}</p>
            ${imageMarkup}
            ${puzzleMarkup}
            ${inputMarkup}
          </div>
          ${boxMarkup}
        </div>
      `;
    })
    .join("");
  const finalMarkup = step.finalMessageStep
    ? `
        <div class="final-step-panel">
          <label for="finalMessage">Message obtenu</label>
          <textarea id="finalMessage" rows="5" placeholder="Notez ici le message final une fois les indices reunis.">${escapeHtml(state.finalMessage || "")}</textarea>
          <p class="save-state" id="saveState">Session sauvegardee automatiquement.</p>
        </div>
      `
    : "";

  stepView.innerHTML = `
    <div class="step-layout">
      <article>
        <p class="section-label">Etape ${state.activeStep + 1} / ${steps.length}</p>
        <h2>${step.name}</h2>
        <p class="story">${step.story}</p>
        <div class="directions">${step.directions}</div>
        ${visualMarkup}
        ${worksheetMarkup}
        <div class="task-list">${taskMarkup}</div>
        ${morseBoxesMarkup}
        ${finalMarkup}
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

  bindFinalMessage();

  stepView.querySelectorAll("[data-answer]").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.answers[event.target.dataset.answer] = event.target.value;
      persistState();
      updateProgress();
    });
  });

  stepView.querySelectorAll("[data-morse]").forEach((input) => {
    input.addEventListener("input", (event) => {
      if (event.target.readOnly) {
        return;
      }

      const value = event.target.dataset.part === "letter"
        ? event.target.value.toUpperCase().slice(0, 1)
        : event.target.value.replace(/-/g, "_").replace(/[^._\s/]/g, "");
      event.target.value = value;
      state.answers[event.target.dataset.morse] = value;
      persistState();
    });
  });

  stepView.querySelectorAll("[data-box]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const mode = event.target.dataset.mode;
      const value = formatBoxValue(event.target.value, mode);
      event.target.value = value;
      state.answers[event.target.dataset.box] = value;
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

function renderWorksheet(step, stepIndex) {
  if (step.worksheet.type === "code") {
    const boxes = Array.from({ length: step.worksheet.count }, (_, index) =>
      renderSimpleBox(stepIndex, `code-${index}`, `${index + 1}`, "digit", `Chiffre ${index + 1}`)
    ).join("");

    return `
      <div class="worksheet-panel">
        <span>${step.worksheet.label}</span>
        <div class="code-grid">${boxes}</div>
      </div>
    `;
  }

  if (step.worksheet.type === "proPatria") {
    return `
      <div class="worksheet-panel">
        <span>${step.worksheet.label}</span>
        <div class="formula-row">
          <strong>10</strong>
          <span>+</span>
          ${renderSimpleBox(stepIndex, "patria-digit-1", "", "digit", "Premier chiffre additionne")}
          <span>+</span>
          ${renderSimpleBox(stepIndex, "patria-digit-2", "", "digit", "Deuxieme chiffre additionne")}
          <span>=</span>
          ${renderSimpleBox(stepIndex, "patria-result", "", "digit", "Resultat")}
        </div>
      </div>
    `;
  }

  return "";
}

function renderMathPuzzle(stepIndex, config) {
  const cells = [
    { value: "5" },
    { name: "math-top-middle" },
    { value: "2" },
    { name: "math-middle-left" },
    { name: "math-middle-middle" },
    { name: "math-middle-right" },
    { value: "6" },
    { name: "math-bottom-middle" },
    { value: "1" }
  ];

  const gridCells = cells.map((cell) => {
    if (cell.value) {
      return `<div class="math-cell fixed">${cell.value}</div>`;
    }

    return renderGridInput(stepIndex, cell.name);
  }).join("");

  return `
    <div class="math-puzzle" aria-label="Enigme mathematique du troisieme chiffre">
      <div class="math-column-totals">
        <span>= 11</span>
        <span>= 13</span>
        <span>= 6</span>
      </div>
      <div class="math-body">
        <div class="math-grid">${gridCells}</div>
        <div class="math-row-totals">
          <span>= 14</span>
          <span>=</span>
          <span>= 9</span>
        </div>
        <div class="math-arrow" aria-hidden="true"></div>
        ${renderSimpleBox(stepIndex, config.resultName, "", "digit", "Troisieme chiffre du code")}
      </div>
    </div>
  `;
}

function renderGridInput(stepIndex, name) {
  const key = getBoxKey(stepIndex, name);
  const value = state.answers[key] || "";
  return `
    <input
      class="math-cell"
      data-box="${key}"
      data-mode="digit"
      value="${escapeHtml(value)}"
      inputmode="numeric"
      maxlength="1"
      autocomplete="off"
      aria-label="Case de la grille mathematique"
    >
  `;
}

function renderSimpleBox(stepIndex, name, visibleLabel, mode, ariaLabel) {
  const key = getBoxKey(stepIndex, name);
  const value = state.answers[key] || "";
  return `
    <label class="answer-box-label">
      <span>${visibleLabel}</span>
      <input
        class="answer-box"
        data-box="${key}"
        data-mode="${mode}"
        value="${escapeHtml(value)}"
        inputmode="${mode === "digit" ? "numeric" : "text"}"
        maxlength="${mode === "digit" ? "1" : "2"}"
        autocomplete="off"
        aria-label="${ariaLabel}"
      >
    </label>
  `;
}

function formatBoxValue(value, mode) {
  if (mode === "digit") {
    return value.replace(/\D/g, "").slice(0, 1);
  }

  if (mode === "letter") {
    return value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 1);
  }

  return value;
}

function renderMorseBoxes(step, stepIndex) {
  const boxes = Array.from({ length: step.morseBoxes.count }, (_, index) => {
    const letterKey = getMorseKey(stepIndex, index, "letter");
    const morseKey = getMorseKey(stepIndex, index, "morse");
    const prefill = step.morseBoxes.prefill?.[index] || {};
    const hasPrefilledLetter = Object.prototype.hasOwnProperty.call(prefill, "letter");
    const hasPrefilledMorse = Object.prototype.hasOwnProperty.call(prefill, "morse");
    const letter = hasPrefilledLetter ? prefill.letter : getStoredValue(letterKey, "");
    const morse = hasPrefilledMorse ? prefill.morse : getStoredValue(morseKey, "");
    const letterLocked = hasPrefilledLetter ? 'readonly data-prefilled="true"' : "";
    const morseLocked = hasPrefilledMorse ? 'readonly data-prefilled="true"' : "";
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
          ${letterLocked}
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
          placeholder="._"
          ${morseLocked}
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

function getStoredValue(key, fallback) {
  return Object.prototype.hasOwnProperty.call(state.answers, key)
    ? state.answers[key]
    : fallback;
}

function updateProgress() {
  const completedCount = steps.filter((step) => state.completed[step.id]).length;
  const percent = Math.round((completedCount / steps.length) * 100);
  progressLabel.textContent = `${completedCount} / ${steps.length}`;
  progressBar.style.width = `${percent}%`;
}

function render() {
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

function bindFinalMessage() {
  const finalMessageInput = document.querySelector("#finalMessage");
  if (!finalMessageInput) {
    return;
  }

  finalMessageInput.addEventListener("input", (event) => {
    state.finalMessage = event.target.value;
    persistState();
  });
}

resetGame.addEventListener("click", () => {
  const confirmed = window.confirm("Recommencer le jeu et effacer la session enregistree ?");
  if (!confirmed) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  state = { ...defaultState };
  const saveState = document.querySelector("#saveState");
  if (saveState) {
    saveState.textContent = "Session remise a zero.";
  }
  render();
});

render();
