const STORAGE_KEY = "bourneville-quest-session-v1";

const steps = [
  {
    id: "manoir",
    name: "Le Manoir",
    directions: "Depuis la maison des métiers, remontez de 170m en direction du chemin du manoir.",
    story:
      "Chercher un labyrinthe à l'entrée du chemin et trouvez le parcours qui mène jusqu'à la croix de guerre. Recopiez les lettres dans l'ordre où vous les rencontrez. Vous trouverez ainsi un mot de 7 lettres à retranscrire dans les cases ci-dessous pour traduire le code morse du message laissé par l'éclaireur anglais.",
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
        label: "Mot de 7 lettres"
      }
    ]
  },
  {
    id: "eglise",
    name: "L'Église Saint Pierre",
    directions:
      "Suivez le chemin en direction de l'ouest pendant 200m. Face à un choix de direction, observez la fumée pour qu'elle vous guide sur la bonne voie. Il semble qu'elle s'oriente vers le Sud. Continuez 140m.",
    story:
      "Vous allez maintenant devoir trouver 4 chiffres d'un code secret qui ouvriront une boîte à clés.",
    clue: "",
    morseBoxes: {
      label: "Lettre et code morse trouvés dans la boîte",
      count: 1
    },
    tasks: [
      {
        label: "1er chiffre",
        prompt:
          "Trouver le vieux conifère présent dans le cimetière. Combien y a-t-il de lettre dans le nom de cet arbre ?",
        clue: "Il y en a moins que 3.",
        box: { name: "code-0", mode: "digit", ariaLabel: "Premier chiffre du code" }
      },
      {
        label: "2ème chiffre",
        prompt:
          "Observer le sommet de l'église. Combien y a-t-il de lettre dans le nom de l'oiseau qui indique le sens du vent ?",
        box: { name: "code-1", mode: "digit", ariaLabel: "Deuxième chiffre du code" }
      },
      {
        label: "3ème chiffre",
        prompt:
          "L'éclaireur anglais est un spécialiste des codes mathématiques. Il sait pouvoir compter sur vous pour résoudre cette énigme.",
        mathPuzzle: {
          resultName: "code-2"
        }
      },
      {
        label: "4ème chiffre",
        prompt:
          "Mince, l'éclaireur a entendu des bruits de pas qui approchent et il n'a pas eu le temps de laisser l'énigme du dernier chiffre. C'est à vous de faire preuve d'ingéniosité !",
        clue: "Les chiffres du code sont uniques.",
        box: { name: "code-3", mode: "digit", ariaLabel: "Quatrième chiffre du code" }
      },
      {
        label: "Lettre et code morse",
        prompt:
          "Notez la lettre et son code morse que vous avez trouvé dans la boîte.",
        alert:
          "Refermez bien la boîte et n'oubliez pas de brouiller le code secret !!!"
      }
    ]
  },
  {
    id: "pro-patria",
    name: "Pro Patria",
    directions:
      "Partez en direction du carrefour. Depuis ce point stratégique vous pouvez observer plusieurs directions. La bonne vous guide vers un monument commémoratif à portée de vue.",
    story:
      "Faites le tour du monument aux morts pour compter le nombre de noms de familles inscrits dans la pierre. Additionnez les chiffres du nombre trouvé.",
    clue:
      "Additionnez les chiffres du nombre trouvé, puis cherchez la lettre correspondante dans l'alphabet.",
    worksheet: {
      type: "proPatria",
      label: "Calcul et lettre obtenue",
      afterTasks: true
    },
    tasks: [
      {
        label: "Nombre de noms",
        prompt: "Comptez le nombre de noms de familles inscrits dans la pierre."
      },
      {
        label: "Lettre obtenue",
        prompt: "À quelle lettre de l'alphabet correspond ce chiffre ?"
      }
    ]
  },
  {
    id: "foret",
    name: "La Forêt",
    directions:
      "Vous êtes trop à découvert près des grands axes. Il vous faut emprunter les chemins pour plus de discrétion. Rejoignez la place non loin de vous et continuez par la sente verdoyante.",
    story:
      "L'éclaireur anglais vous a laissé un puzzle quelque part sous des arbres. Mettez-le dans le bon ordre pour découvrir le nom de code de l'opération de grande ampleur qui se déroule en Normandie.",
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
        label: "Nom de code"
      }
    ]
  },
  {
    id: "arbre",
    name: "L'Arbre Solitaire",
    directions:
      "Continuez sur la sente. En sortie, tournez à gauche vers le Nord. 60m plus loin, tournez à droite vers l'Est et marchez 400m. La fumée vous montre toujours la voie quand vous hésitez...",
    story:
      "Vous êtes de nouveau dans une zone à découvert ! En passant au pied de l'arbre solitaire vous serez plus discret et vous pourrez probablement y découvrir l'avant dernier indice laissé.",
    clue: "Quelles sont les deux lettres qui abrège le mot Docteur ?",
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
        label: "Deux lettres"
      }
    ]
  },
  {
    id: "mairie",
    name: "La Mairie",
    directions: "Remontez en direction du centre bourg et trouvez la Mairie.",
    story:
      "Vous êtes arrivé à la dernière étape pour décoder le message de l'éclaireur ! Devant la Mairie, regardez autour de vous, un indice vous attend.",
    clue: "Les informations sont souvent bien affichées aux yeux de tous.",
    morseBoxes: {
      label: "Dernière lettre et son code morse",
      count: 1
    },
    tasks: [
      {
        label: "Dernière lettre"
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
const morseKeypad = document.querySelector("#morseKeypad");
const locatePlayer = document.querySelector("#locatePlayer");
const locationStatus = document.querySelector("#locationStatus");
const mapUserMarker = document.querySelector("#mapUserMarker");
let activeMorseControl = null;

const mapCalibration = {
  imageWidth: 503,
  imageHeight: 285,
  points: [
    { name: "Pro Patria", lat: 49.3909918, lon: 0.6165151, x: 87, y: 115 },
    { name: "Église Saint-Pierre", lat: 49.391232, lon: 0.61773, x: 200, y: 104 },
    { name: "Entrée du chemin du Manoir", lat: 49.3923623, lon: 0.6198166, x: 297, y: 14 },
    { name: "Milieu de la forêt", lat: 49.3870618, lon: 0.6189459, x: 245, y: 246 },
    { name: "Arbre solitaire", lat: 49.3877829, lon: 0.6258781, x: 447, y: 213 },
    { name: "Mairie", lat: 49.391876, lon: 0.620241, x: 370, y: 132 }
  ]
};

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
  hideMorseKeypad();

  const step = steps[state.activeStep];
  const isFirstStep = state.activeStep === 0;
  const isLastStep = state.activeStep === steps.length - 1;
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
      const promptMarkup = task.prompt
        ? `<p>${task.prompt}</p>`
        : "";
      const clueMarkup = task.clue
        ? renderTaskClue(step, task, taskIndex)
        : "";
      const alertMarkup = task.alert
        ? `<p class="task-alert">${task.alert}</p>`
        : "";
      return `
        <div class="task${task.box ? " task-with-box" : ""}">
          <div class="task-copy">
            <strong>${task.label}</strong>
            ${promptMarkup}
            ${alertMarkup}
            ${clueMarkup}
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
  const worksheetBeforeTasks = step.worksheet && !step.worksheet.afterTasks
    ? worksheetMarkup
    : "";
  const worksheetAfterTasks = step.worksheet?.afterTasks
    ? worksheetMarkup
    : "";

  stepView.innerHTML = `
    <div class="step-layout">
      <article>
        <p class="section-label">Étape ${state.activeStep + 1} / ${steps.length}</p>
        <h2>${step.name}</h2>
        <div class="directions">${step.directions}</div>
        <p class="story">${step.story}</p>
        ${step.clue ? renderCluePanel(step, "mobile-clue") : ""}
        ${visualMarkup}
        ${worksheetBeforeTasks}
        <div class="task-list">${taskMarkup}</div>
        ${worksheetAfterTasks}
        ${morseBoxesMarkup}
        ${finalMarkup}
        <div class="step-actions">
          <button class="primary-button" id="completeStep" type="button">Marquer l'étape faite</button>
          ${isFirstStep ? "" : `<button class="secondary-button" id="previousStep" type="button">Étape précédente</button>`}
          ${isLastStep ? "" : `<button class="secondary-button" id="nextStep" type="button">Étape suivante</button>`}
        </div>
        <p class="completion-warning" id="completionWarning" hidden>Renseignez au moins une case de cette étape avant de la marquer comme faite.</p>
        <p class="save-state" id="saveState">Session sauvegardée automatiquement.</p>
      </article>
      ${step.clue ? renderCluePanel(step, "desktop-clue", true) : ""}
    </div>
  `;

  stepView.querySelectorAll("[data-answer]").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.answers[event.target.dataset.answer] = event.target.value;
      persistState();
      updateProgress();
      clearCompletionWarning();
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
      clearCompletionWarning();
    });
  });

  stepView.querySelectorAll("[data-morse-trigger]").forEach((button) => {
    button.addEventListener("click", (event) => {
      showMorseKeypad(event.currentTarget);
    });
  });

  stepView.querySelectorAll("[data-box]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const mode = event.target.dataset.mode;
      const value = formatBoxValue(event.target.value, mode);
      event.target.value = value;
      state.answers[event.target.dataset.box] = value;
      persistState();
      clearCompletionWarning();
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
    if (!stepHasEditableInputFilled()) {
      showCompletionWarning();
      return;
    }

    state.completed[step.id] = true;
    if (state.activeStep < steps.length - 1) {
      state.activeStep += 1;
    }
    persistState();
    render();
  });

  const previousStep = document.querySelector("#previousStep");
  if (previousStep) {
    previousStep.addEventListener("click", () => {
      state.activeStep = Math.max(0, state.activeStep - 1);
      persistState();
      render();
    });
  }

  const nextStep = document.querySelector("#nextStep");
  if (nextStep) {
    nextStep.addEventListener("click", () => {
      state.activeStep = Math.min(steps.length - 1, state.activeStep + 1);
      persistState();
      render();
    });
  }
}

function stepHasEditableInputFilled() {
  return Array.from(stepView.querySelectorAll("[data-answer], [data-morse], [data-box]"))
    .some((control) => !control.readOnly && !control.disabled && getControlValue(control).trim() !== "");
}

function getControlValue(control) {
  return control.dataset.morseTrigger ? control.dataset.value || "" : control.value || "";
}

function showCompletionWarning() {
  const warning = document.querySelector("#completionWarning");
  if (!warning) {
    return;
  }

  warning.hidden = false;
  warning.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function clearCompletionWarning() {
  const warning = document.querySelector("#completionWarning");
  if (warning && stepHasEditableInputFilled()) {
    warning.hidden = true;
  }
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

function renderTaskClue(step, task, taskIndex) {
  const clueId = `${step.id}-task-${taskIndex}`;
  const revealed = Boolean(state.revealedClues[clueId]);

  if (revealed) {
    return `
      <div class="task-clue">
        <strong>Indice révélé</strong>
        <p>${task.clue}</p>
      </div>
    `;
  }

  return `
    <div class="task-clue task-clue-card">
      <strong>Indice scellé</strong>
      <button class="secondary-button task-clue-button" type="button" data-reveal-clue="${clueId}">Révéler l'indice</button>
    </div>
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
            ${renderSimpleBox(stepIndex, "patria-digit-1", "", "number2 compact", "Premier nombre additionné")}
            <span>+</span>
            ${renderSimpleBox(stepIndex, "patria-digit-2", "", "number2 compact", "Deuxième nombre additionné")}
            <span>=</span>
            ${renderSimpleBox(stepIndex, "patria-result", "", "number2 compact", "Résultat")}
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
    <div class="scout-message-line" style="--scout-message-count: ${line.length}">
      ${line.map((morse, boxIndex) =>
        renderFinalMorseBox(lineIndex, boxIndex, morse)
      ).join("")}
    </div>
  `).join("");

  return `
    <div class="scout-message">
      <h3>Message de l'éclaireur</h3>
      ${rows}
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
  const hasPrefilledMorse = Object.prototype.hasOwnProperty.call(prefill, "morse");
  const morseMarkup = hasPrefilledMorse
    ? renderLockedMorseInput(morse, `${ariaLabel} morse`)
    : renderEditableMorseButton(morseKey, morse, `${ariaLabel} morse`);

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
      ${morseMarkup}
    </div>
  `;
}

function renderSimpleBox(stepIndex, name, visibleLabel, mode, ariaLabel) {
  const key = getBoxKey(stepIndex, name);
  const value = state.answers[key] || "";
  const modes = mode.split(" ");
  const inputMode = modes.includes("digit") || modes.includes("number2") ? "numeric" : "text";
  const maxLength = modes.includes("number2") ? 2 : modes.includes("digit") ? 1 : 2;
  const className = modes.includes("compact")
    ? "answer-box answer-box-compact"
    : "answer-box";
  return `
    <label class="answer-box-label">
      <span>${visibleLabel}</span>
      <input
        class="${className}"
        data-box="${key}"
        data-mode="${mode}"
        value="${escapeHtml(value)}"
        inputmode="${inputMode}"
        maxlength="${maxLength}"
        autocomplete="off"
        aria-label="${ariaLabel}"
      >
    </label>
  `;
}

function formatBoxValue(value, mode) {
  if (mode.includes("number2")) {
    return value.replace(/\D/g, "").slice(0, 2);
  }

  if (mode.includes("digit")) {
    return value.replace(/\D/g, "").slice(0, 1);
  }

  if (mode.includes("letter")) {
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
    const morseMarkup = hasPrefilledMorse
      ? renderLockedMorseInput(morse, `Code morse ${index + 1}`, morseKey)
      : renderEditableMorseButton(morseKey, morse, `Code morse ${index + 1}`);
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
        ${morseMarkup}
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

function renderLockedMorseInput(morse, ariaLabel, id = "") {
  return `
    <input
      ${id ? `id="${id}"` : ""}
      class="morse-code"
      value="${escapeHtml(morse)}"
      readonly
      data-prefilled="true"
      aria-label="${ariaLabel}"
    >
  `;
}

function renderEditableMorseButton(key, morse, ariaLabel) {
  return `
    <button
      id="${key}"
      class="morse-code morse-code-button"
      type="button"
      data-morse="${key}"
      data-part="morse"
      data-morse-trigger="true"
      data-value="${escapeHtml(morse)}"
      aria-label="${ariaLabel}"
    >${escapeHtml(morse || "._")}</button>
  `;
}

function getStoredValue(key, fallback) {
  return Object.prototype.hasOwnProperty.call(state.answers, key)
    ? state.answers[key]
    : fallback;
}

function normalizeMorseValue(value) {
  return String(value).replace(/-/g, "_").replace(/[^._]/g, "");
}

function setupMorseKeypad() {
  if (!morseKeypad) {
    return;
  }

  document.addEventListener("pointerdown", (event) => {
    if (
      activeMorseControl
      && !activeMorseControl.contains(event.target)
      && !morseKeypad.contains(event.target)
    ) {
      hideMorseKeypad();
    }
  });

  window.addEventListener("resize", () => {
    if (activeMorseControl) {
      positionMorseKeypad(activeMorseControl);
    }
  });

  window.addEventListener("scroll", () => {
    if (activeMorseControl && !isMobileMorseLayout()) {
      positionMorseKeypad(activeMorseControl);
    }
  }, { passive: true });

  morseKeypad.querySelectorAll("[data-morse-key]").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
    });

    button.addEventListener("click", () => {
      applyMorseKey(button.dataset.morseKey);
    });
  });
}

function isEditableMorseControl(element) {
  return Boolean(
    element
      && element.matches?.('[data-morse-trigger][data-morse]:not([disabled])')
  );
}

function showMorseKeypad(control) {
  if (activeMorseControl) {
    activeMorseControl.classList.remove("morse-code-active");
  }
  activeMorseControl = control;
  activeMorseControl.classList.add("morse-code-active");
  morseKeypad.hidden = false;
  positionMorseKeypad(control);
  document.body.classList.add("morse-keypad-open");
}

function hideMorseKeypad() {
  if (activeMorseControl) {
    activeMorseControl.classList.remove("morse-code-active");
  }
  activeMorseControl = null;
  if (morseKeypad) {
    morseKeypad.hidden = true;
    morseKeypad.style.removeProperty("--keypad-left");
    morseKeypad.style.removeProperty("--keypad-top");
  }
  document.body.classList.remove("morse-keypad-open");
}

function positionMorseKeypad(control) {
  if (!morseKeypad) {
    return;
  }

  if (isMobileMorseLayout()) {
    morseKeypad.style.removeProperty("--keypad-left");
    morseKeypad.style.removeProperty("--keypad-top");
    return;
  }

  const controlRect = control.getBoundingClientRect();
  const keypadRect = morseKeypad.getBoundingClientRect();
  const margin = 12;
  const preferredLeft = controlRect.left + (controlRect.width / 2) - (keypadRect.width / 2);
  const left = Math.min(
    window.innerWidth - keypadRect.width - margin,
    Math.max(margin, preferredLeft)
  );
  const preferredTop = controlRect.bottom + 8;
  const top = Math.min(
    window.innerHeight - keypadRect.height - margin,
    Math.max(margin, preferredTop)
  );

  morseKeypad.style.setProperty("--keypad-left", `${left}px`);
  morseKeypad.style.setProperty("--keypad-top", `${top}px`);
}

function isMobileMorseLayout() {
  return window.matchMedia("(max-width: 780px)").matches;
}

function applyMorseKey(key) {
  if (!isEditableMorseControl(activeMorseControl)) {
    hideMorseKeypad();
    return;
  }

  const control = activeMorseControl;
  const currentValue = control.dataset.value || "";
  const nextValue = key === "delete"
    ? currentValue.slice(0, -1)
    : currentValue + key;

  const value = normalizeMorseValue(nextValue);
  control.dataset.value = value;
  control.textContent = value || "._";
  state.answers[control.dataset.morse] = value;
  persistState();
  clearCompletionWarning();
}

function setupMapLocation() {
  if (!locatePlayer || !locationStatus || !mapUserMarker) {
    return;
  }

  locatePlayer.addEventListener("click", () => {
    if (!navigator.geolocation) {
      locationStatus.textContent = "La géolocalisation n'est pas disponible sur ce navigateur.";
      return;
    }

    locatePlayer.disabled = true;
    locationStatus.textContent = "Recherche de votre position...";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        locatePlayer.disabled = false;
        showPlayerOnMap(position.coords);
      },
      (error) => {
        locatePlayer.disabled = false;
        mapUserMarker.hidden = true;
        locationStatus.textContent = getGeolocationErrorMessage(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 15000
      }
    );
  });
}

function showPlayerOnMap(coords) {
  const point = gpsToMapPoint(coords.latitude, coords.longitude);

  if (!point || point.x < -0.08 || point.x > 1.08 || point.y < -0.08 || point.y > 1.08) {
    mapUserMarker.hidden = true;
    locationStatus.textContent = `Position reçue, mais elle semble hors du plan du parcours. Précision GPS : ${formatAccuracy(coords.accuracy)}.`;
    return;
  }

  const x = clamp(point.x, 0, 1);
  const y = clamp(point.y, 0, 1);
  mapUserMarker.style.setProperty("--map-user-x", `${x * 100}%`);
  mapUserMarker.style.setProperty("--map-user-y", `${y * 100}%`);
  mapUserMarker.hidden = false;
  locationStatus.textContent = `Position approximative affichée sur le plan. Précision GPS : ${formatAccuracy(coords.accuracy)}.`;
}

function gpsToMapPoint(lat, lon) {
  const origin = mapCalibration.points[0];
  const samples = mapCalibration.points.map((point) => {
    const local = gpsToLocalMeters(point.lat, point.lon, origin.lat, origin.lon);
    return { east: local.east, north: local.north, x: point.x, y: point.y };
  });
  const current = gpsToLocalMeters(lat, lon, origin.lat, origin.lon);
  const nearestSamples = samples
    .map((sample) => ({
      ...sample,
      distance: Math.hypot(sample.east - current.east, sample.north - current.north)
    }))
    .sort((left, right) => left.distance - right.distance)
    .slice(0, 3);
  const xCoefficients = solveAffine(nearestSamples, "x");
  const yCoefficients = solveAffine(nearestSamples, "y");

  if (!xCoefficients || !yCoefficients) {
    return null;
  }

  const px = xCoefficients[0] + xCoefficients[1] * current.east + xCoefficients[2] * current.north;
  const py = yCoefficients[0] + yCoefficients[1] * current.east + yCoefficients[2] * current.north;

  return {
    x: px / mapCalibration.imageWidth,
    y: py / mapCalibration.imageHeight
  };
}

function gpsToLocalMeters(lat, lon, originLat, originLon) {
  const metersPerDegreeLat = 111320;
  const metersPerDegreeLon = 111320 * Math.cos(toRadians(originLat));

  return {
    east: (lon - originLon) * metersPerDegreeLon,
    north: (lat - originLat) * metersPerDegreeLat
  };
}

function solveAffine(samples, key) {
  const normalMatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  const normalValues = [0, 0, 0];

  samples.forEach((sample) => {
    const row = [1, sample.east, sample.north];
    row.forEach((leftValue, leftIndex) => {
      normalValues[leftIndex] += leftValue * sample[key];
      row.forEach((rightValue, rightIndex) => {
        normalMatrix[leftIndex][rightIndex] += leftValue * rightValue;
      });
    });
  });

  return solve3x3(normalMatrix, normalValues);
}

function solve3x3(matrix, values) {
  const determinant = get3x3Determinant(matrix);

  if (Math.abs(determinant) < 0.000001) {
    return null;
  }

  return [0, 1, 2].map((column) => {
    const replaced = matrix.map((row, rowIndex) =>
      row.map((value, valueIndex) => valueIndex === column ? values[rowIndex] : value)
    );
    return get3x3Determinant(replaced) / determinant;
  });
}

function get3x3Determinant(matrix) {
  return matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1])
    - matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0])
    + matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);
}

function getGeolocationErrorMessage(error) {
  if (error.code === error.PERMISSION_DENIED) {
    return "Autorisation GPS refusée. Activez la localisation pour afficher votre position.";
  }

  if (error.code === error.POSITION_UNAVAILABLE) {
    return "Position GPS indisponible pour le moment.";
  }

  if (error.code === error.TIMEOUT) {
    return "La recherche GPS a pris trop de temps. Réessayez dehors ou près d'une fenêtre.";
  }

  return "Impossible de récupérer votre position GPS.";
}

function formatAccuracy(value) {
  if (!Number.isFinite(value)) {
    return "inconnue";
  }

  return value >= 1000
    ? `${(value / 1000).toFixed(1)} km`
    : `${Math.round(value)} m`;
}

function toRadians(value) {
  return value * Math.PI / 180;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
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

setupMorseKeypad();
setupMapLocation();
render();
