const STORAGE_KEY = "bourneville-quest-session-v1";

const steps = [
  {
    id: "manoir",
    name: "Le Manoir",
    directions: "Depuis la maison des métiers, remontez de 170m en direction du chemin du manoir.",
    story:
      "Cherchez un labyrinthe à l'entrée du chemin et trouvez le parcours qui mène jusqu'à la croix de guerre.",
    clue: "Son travail est essentiel à la pollinisation.",
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
          "Recopiez les lettres dans l'ordre où vous les rencontrez. Ce mot servira à traduire le code morse du message."
      }
    ]
  },
  {
    id: "eglise",
    name: "L'Église Saint Pierre",
    directions:
      "Suivez le chemin en direction de l'ouest pendant 200m. Face à un choix de direction, observez la fumée pour qu'elle vous guide sur la bonne voie. Il semble qu'elle s'oriente vers le Sud. Continuez 140m.",
    story:
      "Vous devez trouver les 4 chiffres d'un code secret qui ouvrira une boîte à clés.",
    clue: "Les chiffres du code sont uniques.",
    morseBoxes: {
      label: "Lettre et code morse trouvés dans la boîte",
      count: 1
    },
    tasks: [
      {
        label: "1er chiffre",
        prompt:
          "Trouvez le vieux conifère présent dans le cimetière. Combien y a-t-il de lettres dans le nom de cet arbre ?",
        box: { name: "code-0", mode: "digit", ariaLabel: "Premier chiffre du code" }
      },
      {
        label: "2ème chiffre",
        prompt:
          "Observez le sommet de l'église. Combien y a-t-il de lettres dans le nom de l'oiseau qui indique le sens du vent ?",
        box: { name: "code-1", mode: "digit", ariaLabel: "Deuxième chiffre du code" }
      },
      {
        label: "3ème chiffre",
        prompt:
          "Résolvez l'énigme mathématique laissée par l'éclaireur anglais.",
        mathPuzzle: {
          resultName: "code-2"
        }
      },
      {
        label: "4ème chiffre",
        prompt:
          "L'éclaireur n'a pas eu le temps de laisser l'énigme. Faites preuve d'ingéniosité.",
        box: { name: "code-3", mode: "digit", ariaLabel: "Quatrième chiffre du code" }
      },
      {
        label: "Lettre et code morse",
        prompt:
          "Notez la lettre et son code morse trouvés dans la boîte. Refermez la boîte et brouillez le code."
      }
    ]
  },
  {
    id: "pro-patria",
    name: "Pro Patria",
    directions:
      "Partez en direction du carrefour. Depuis ce point stratégique vous pouvez observer plusieurs directions. La bonne vous guide vers un monument commémoratif à portée de vue.",
    story:
      "Faites le tour du monument aux morts pour compter le nombre de noms de familles inscrits dans la pierre.",
    clue:
      "Additionnez les chiffres du nombre trouvé, puis cherchez la lettre correspondante dans l'alphabet.",
    worksheet: {
      type: "proPatria",
      label: "Calcul et lettre obtenue"
    },
    tasks: [
      {
        label: "Nombre de noms",
        prompt: "Comptez le nombre de noms de familles inscrits dans la pierre, puis additionnez les chiffres du nombre trouvé."
      },
      {
        label: "Lettre obtenue",
        prompt: "Reportez le résultat et la lettre correspondante dans les cases."
      }
    ]
  },
  {
    id: "foret",
    name: "La Forêt",
    directions:
      "Vous êtes trop à découvert près des grands axes. Il vous faut emprunter les chemins pour plus de discrétion. Rejoignez la place non loin de vous et continuez par la sente verdoyante.",
    story:
      "L'éclaireur anglais vous a laissé un puzzle quelque part sous les arbres.",
    clue: "N'oubliez pas ce que vous connaissez déjà.",
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
          "Mettez le puzzle dans le bon ordre pour découvrir le nom de code de l'opération de grande ampleur en Normandie."
      }
    ]
  },
  {
    id: "arbre",
    name: "L'Arbre Solitaire",
    directions:
      "Continuez sur la sente. En sortie, tournez à gauche vers le Nord. 60m plus loin, tournez à droite vers l'Est et marchez 400m. La fumée vous montre toujours la voie quand vous hésitez...",
    story:
      "Vous pourrez probablement y découvrir l'avant-dernier indice laissé par l'éclaireur.",
    clue: "Quelles sont les deux lettres qui abrègent le mot Docteur ?",
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
        label: "Indice trouvé",
        prompt: "Notez les deux lettres obtenues."
      }
    ]
  },
  {
    id: "mairie",
    name: "La Mairie",
    directions: "Remontez en direction du centre bourg et trouvez la Mairie.",
    story:
      "Vous êtes arrivé à la dernière étape pour décoder le message de l'éclaireur.",
    clue: "Les informations sont souvent bien affichées aux yeux de tous.",
    morseBoxes: {
      label: "Dernière lettre et son code morse",
      count: 1
    },
    tasks: [
      {
        label: "Dernier indice",
        prompt: "Devant la Mairie, regardez autour de vous et notez l'indice trouvé."
      }
    ]
  },
  {
    id: "message-final",
    name: "Message final",
    directions: "Vous avez réuni les indices. Décodez maintenant le message laissé par l'éclaireur.",
    story:
      "Utilisez les lettres et les codes morse trouvés pendant le parcours pour compléter le message.",
    clue: "Relisez les codes notés à chaque étape.",
    finalMessageStep: true,
    tasks: []
  }
];

const defaultState = {
  activeStep: 0,
  answers: {},
  completed: {},
  revealedClues: {},
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
    saveState.textContent = "Session sauvegardée automatiquement.";
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
          ${renderCollectedClues()}
          ${renderScoutMessage()}
        </div>
      `
    : "";

  stepView.innerHTML = `
    <div class="step-layout">
      <article>
        <p class="section-label">Étape ${state.activeStep + 1} / ${steps.length}</p>
        <h2>${step.name}</h2>
        <p class="story">${step.story}</p>
        <div class="directions">${step.directions}</div>
        ${renderCluePanel(step, "mobile-clue")}
        ${visualMarkup}
        ${worksheetMarkup}
        <div class="task-list">${taskMarkup}</div>
        ${morseBoxesMarkup}
        ${finalMarkup}
        <div class="step-actions">
          <button class="primary-button" id="completeStep" type="button">Marquer l'étape faite</button>
          <button class="secondary-button" id="previousStep" type="button">Étape précédente</button>
          <button class="secondary-button" id="nextStep" type="button">Étape suivante</button>
        </div>
      </article>
      ${renderCluePanel(step, "desktop-clue", true)}
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
      if (event.target.readOnly) {
        return;
      }

      const value = event.target.dataset.part === "letter"
        ? event.target.value.toUpperCase().slice(0, 1)
        : normalizeMorseValue(event.target.value);
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

  stepView.querySelectorAll("[data-reveal-clue]").forEach((button) => {
    button.addEventListener("click", (event) => {
      state.revealedClues[event.currentTarget.dataset.revealClue] = true;
      persistState();
      render();
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

function renderCluePanel(step, className, isAside = false) {
  const revealed = Boolean(state.revealedClues[step.id]);
  const tag = isAside ? "aside" : "div";

  if (revealed) {
    return `
      <${tag} class="clue-panel ${className}">
        <strong>Indice révélé</strong>
        <p>${step.clue}</p>
      </${tag}>
    `;
  }

  return `
    <${tag} class="clue-panel clue-card ${className}">
      <strong>Indice scellé</strong>
      <p>À ouvrir seulement si vous êtes bloqués.</p>
      <button class="secondary-button clue-button" type="button" data-reveal-clue="${step.id}">Révéler l'indice</button>
    </${tag}>
  `;
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
        <div class="propatria-sheet">
          <div class="propatria-formula">
            <strong>10</strong>
            <span>+</span>
            ${renderSimpleBox(stepIndex, "patria-digit-1", "", "digit", "Premier chiffre additionné")}
            <span>+</span>
            ${renderSimpleBox(stepIndex, "patria-digit-2", "", "digit", "Deuxième chiffre additionné")}
            <span>=</span>
            ${renderSimpleBox(stepIndex, "patria-result", "", "digit", "Résultat")}
          </div>
          <div class="propatria-line">
            <span>À quelle lettre de l'alphabet correspond ce chiffre ?</span>
            ${renderInlineMorseBox(stepIndex, "patria-morse", { morse: "___" }, "Lettre correspondante et code morse")}
          </div>
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
    <div class="math-puzzle" aria-label="Énigme mathématique du troisième chiffre">
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
        ${renderSimpleBox(stepIndex, config.resultName, "", "digit", "Troisième chiffre du code")}
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
      aria-label="Case de la grille mathématique"
    >
  `;
}

function renderCollectedClues() {
  const groups = [
    { title: "1 - Le Manoir", stepIndex: 0 },
    { title: "2 - L'Église Saint Pierre", stepIndex: 1 },
    { title: "3 - Pro Patria", inline: true },
    { title: "4 - La Forêt", stepIndex: 3 },
    { title: "5 - L'Arbre Solitaire", stepIndex: 4 },
    { title: "6 - La Mairie", stepIndex: 5 }
  ];

  const rows = groups.map((group) => {
    const entries = group.inline
      ? [getInlineMorseEntry(2, "patria-morse", { morse: "___" })]
      : getStepMorseEntries(group.stepIndex);

    const cells = entries.map((entry) => `
      <div class="clue-token">
        <strong>${escapeHtml(entry.letter || "?")}</strong>
        <span>${escapeHtml(entry.morse || "?")}</span>
      </div>
    `).join("");

    return `
      <div class="clue-row">
        <span>${group.title}</span>
        <div class="clue-tokens">${cells}</div>
      </div>
    `;
  }).join("");

  return `
    <div class="collected-clues">
      <h3>Indices récoltés</h3>
      ${rows}
    </div>
  `;
}

function renderScoutMessage() {
  const lines = [
    ["_...", "___", "._", "._.", "_.", ".", "..._", "..", "._..", "._..", "."],
    ["._..", "..", "_...", ".", "._.", ".", "."],
    ["_..", ".", "__", "._", "..", "_."]
  ];

  const rows = lines.map((line, lineIndex) => `
    <div class="scout-message-line">
      ${line.map((morse, boxIndex) =>
        renderFinalMorseBox(lineIndex, boxIndex, morse)
      ).join("")}
    </div>
  `).join("");

  return `
    <div class="scout-message">
      <h3>Message de l'éclaireur</h3>
      ${rows}
      <p class="save-state" id="saveState">Session sauvegardée automatiquement.</p>
    </div>
  `;
}

function renderFinalMorseBox(lineIndex, boxIndex, morse) {
  const letterKey = `message-final-${lineIndex}-${boxIndex}-letter`;
  const letter = getStoredValue(letterKey, "");

  return `
    <div class="morse-box scout-message-box">
      <input
        class="morse-letter"
        data-box="${letterKey}"
        data-mode="letter"
        value="${escapeHtml(letter)}"
        maxlength="1"
        autocomplete="off"
        autocapitalize="characters"
        placeholder="A"
        aria-label="Lettre du message ${lineIndex + 1}-${boxIndex + 1}"
      >
      <input
        class="morse-code"
        value="${escapeHtml(morse)}"
        readonly
        data-prefilled="true"
        aria-label="Code morse du message ${lineIndex + 1}-${boxIndex + 1}"
      >
    </div>
  `;
}

function getStepMorseEntries(stepIndex) {
  const step = steps[stepIndex];
  if (!step.morseBoxes) {
    return [];
  }

  return Array.from({ length: step.morseBoxes.count }, (_, index) => {
    const prefill = step.morseBoxes.prefill?.[index] || {};
    const letterKey = getMorseKey(stepIndex, index, "letter");
    const morseKey = getMorseKey(stepIndex, index, "morse");
    const letter = Object.prototype.hasOwnProperty.call(prefill, "letter")
      ? prefill.letter
      : getStoredValue(letterKey, "");
    const morse = Object.prototype.hasOwnProperty.call(prefill, "morse")
      ? prefill.morse
      : normalizeMorseValue(getStoredValue(morseKey, ""));

    return { letter, morse };
  });
}

function getInlineMorseEntry(stepIndex, name, prefill) {
  const letterKey = getBoxKey(stepIndex, `${name}-letter`);
  const morseKey = getBoxKey(stepIndex, `${name}-morse`);
  return {
    letter: getStoredValue(letterKey, prefill.letter || ""),
    morse: Object.prototype.hasOwnProperty.call(prefill, "morse")
      ? prefill.morse
      : normalizeMorseValue(getStoredValue(morseKey, ""))
  };
}

function renderInlineMorseBox(stepIndex, name, prefill, ariaLabel) {
  const letterKey = getBoxKey(stepIndex, `${name}-letter`);
  const morseKey = getBoxKey(stepIndex, `${name}-morse`);
  const letter = getStoredValue(letterKey, prefill.letter || "");
  const morse = Object.prototype.hasOwnProperty.call(prefill, "morse")
    ? prefill.morse
    : normalizeMorseValue(getStoredValue(morseKey, ""));
  const morseLocked = Object.prototype.hasOwnProperty.call(prefill, "morse")
    ? 'readonly data-prefilled="true"'
    : "";

  return `
    <div class="morse-box inline-morse-box" aria-label="${ariaLabel}">
      <input
        class="morse-letter"
        data-box="${letterKey}"
        data-mode="letter"
        value="${escapeHtml(letter)}"
        maxlength="1"
        autocomplete="off"
        autocapitalize="characters"
        placeholder="A"
        aria-label="${ariaLabel} lettre"
      >
      <input
        class="morse-code"
        data-morse="${morseKey}"
        data-part="morse"
        value="${escapeHtml(morse)}"
        autocomplete="off"
        inputmode="text"
        placeholder="._"
        ${morseLocked}
        aria-label="${ariaLabel} morse"
      >
    </div>
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
    const morse = hasPrefilledMorse ? prefill.morse : normalizeMorseValue(getStoredValue(morseKey, ""));
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

function normalizeMorseValue(value) {
  return String(value).replace(/-/g, "_").replace(/[^._\s/]/g, "");
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

resetGame.addEventListener("click", () => {
  const confirmed = window.confirm("Recommencer le jeu et effacer la session enregistrée ?");
  if (!confirmed) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  state = { ...defaultState };
  const saveState = document.querySelector("#saveState");
  if (saveState) {
    saveState.textContent = "Session remise à zéro.";
  }
  render();
});

render();
