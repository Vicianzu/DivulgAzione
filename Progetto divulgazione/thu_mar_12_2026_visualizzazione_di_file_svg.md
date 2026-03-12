# Copilot Chat Conversation Export: Visualizzazione di file SVG

**User:** @Vicianzu
**Thread URL:** https://github.com/copilot/c/fbc44f4b-b3b6-4114-bfaa-d108be34f892

## @Vicianzu

argomento calabi yau, nelle immagini divulgative mettono una griglia e in ogni intersezione una piccola calabi yau, ma non ci sono due o più calabi yau in un universo. la compattificazione è una sola. mostrami una immagine divulgativa fatta bene, creala 

## Copilot

Hai assolutamente ragione sulla critica! Lasciami creare un'immagine divulgativa **corretta** per te.

## Il tuo punto è giustissimo 🎯

Le immagini divulgative classiche mostrano una griglia tipo tessuto con una Calabi-Yau ad ogni nodo — questo è **fisicamente sbagliato** e fuorviante, perché:

- **La compattificazione è UNA SOLA**, universale, identica in ogni punto dello spazio
- Non ci sono "tante" Calabi-Yau sparse nello spazio — ce n'è **una (come forma)**, nascosta in ogni singolo punto
- La griglia con tante CY suggerisce erroneamente che siano oggetti localizzati o variabili

---

## Immagine divulgativa corretta — SVG

Ecco un'immagine che racconta la storia in modo accurato:

```svg name=calabi_yau_corretta.svg
<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">

  <!-- Sfondo -->
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0a0a2e"/>
      <stop offset="100%" stop-color="#000010"/>
    </radialGradient>
    <radialGradient id="cyGrad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#a78bfa"/>
      <stop offset="40%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </radialGradient>
    <radialGradient id="pointGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
      <stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="softGlow">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="900" height="600" fill="url(#bgGrad)"/>

  <!-- Stelle di sfondo -->
  <circle cx="50" cy="30" r="1" fill="white" opacity="0.6"/>
  <circle cx="150" cy="80" r="0.8" fill="white" opacity="0.4"/>
  <circle cx="820" cy="50" r="1.2" fill="white" opacity="0.5"/>
  <circle cx="750" cy="120" r="0.7" fill="white" opacity="0.3"/>
  <circle cx="30" cy="200" r="1" fill="white" opacity="0.5"/>
  <circle cx="880" cy="300" r="0.9" fill="white" opacity="0.4"/>
  <circle cx="60" cy="500" r="1.1" fill="white" opacity="0.6"/>
  <circle cx="830" cy="520" r="0.8" fill="white" opacity="0.3"/>

  <!-- ===== SEZIONE SINISTRA: Spazio 3D ordinario ===== -->
  <!-- Titolo sezione -->
  <text x="220" y="50" text-anchor="middle" fill="#94a3b8" font-size="13" letter-spacing="2">SPAZIO VISIBILE (3D)</text>

  <!-- Griglia 3D isometrica semplificata - piano XY -->
  <g opacity="0.5" stroke="#334155" stroke-width="0.8">
    <!-- Linee orizzontali -->
    <line x1="60" y1="200" x2="380" y2="200"/>
    <line x1="60" y1="240" x2="380" y2="240"/>
    <line x1="60" y1="280" x2="380" y2="280"/>
    <line x1="60" y1="320" x2="380" y2="320"/>
    <line x1="60" y1="360" x2="380" y2="360"/>
    <line x1="60" y1="400" x2="380" y2="400"/>
    <!-- Linee verticali -->
    <line x1="100" y1="160" x2="100" y2="440"/>
    <line x1="140" y1="160" x2="140" y2="440"/>
    <line x1="180" y1="160" x2="180" y2="440"/>
    <line x1="220" y1="160" x2="220" y2="440"/>
    <line x1="260" y1="160" x2="260" y2="440"/>
    <line x1="300" y1="160" x2="300" y2="440"/>
    <line x1="340" y1="160" x2="340" y2="440"/>
  </g>

  <!-- UN SOLO punto evidenziato con zoom -->
  <circle cx="220" cy="300" r="6" fill="url(#pointGlow)" filter="url(#softGlow)"/>
  <circle cx="220" cy="300" r="4" fill="white"/>

  <!-- Freccia di zoom verso la Calabi-Yau -->
  <line x1="270" y1="290" x2="430" y2="200" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="6,4" marker-end="url(#arrow)"/>
  <defs>
    <marker id="arrow" markerWidth="8" height="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#a78bfa"/>
    </marker>
  </defs>

  <!-- Etichetta punto -->
  <text x="220" y="480" text-anchor="middle" fill="#64748b" font-size="11">ogni punto dello spazio</text>
  <text x="220" y="496" text-anchor="middle" fill="#64748b" font-size="11">contiene dimensioni extra</text>

  <!-- ===== SEZIONE DESTRA: La Calabi-Yau unica ===== -->
  <!-- Grande Calabi-Yau artistica -->
  <g transform="translate(620, 290)">
    <!-- Corpo principale - forma toroidale complessa -->
    <ellipse cx="0" cy="0" rx="140" ry="100" fill="none" stroke="#7c3aed" stroke-width="1" opacity="0.3"/>

    <!-- Superficie principale -->
    <path d="M-80,-60 C-40,-90 40,-90 80,-60 C110,-30 110,30 80,60 C40,90 -40,90 -80,60 C-110,30 -110,-30 -80,-60 Z"
          fill="url(#cyGrad)" opacity="0.85"/>

    <!-- Struttura interna - buchi e curvature -->
    <ellipse cx="0" cy="0" rx="45" ry="30" fill="#0a0a2e" opacity="0.7"/>
    <ellipse cx="0" cy="0" rx="35" ry="20" fill="none" stroke="#a78bfa" stroke-width="1.5" opacity="0.6"/>

    <!-- Linee di curvatura esterne -->
    <path d="M-80,-60 C-50,-20 -50,20 -80,60" fill="none" stroke="#c4b5fd" stroke-width="1" opacity="0.5"/>
    <path d="M80,-60 C50,-20 50,20 80,60" fill="none" stroke="#c4b5fd" stroke-width="1" opacity="0.5"/>
    <path d="M-80,-60 C-20,-80 20,-80 80,-60" fill="none" stroke="#c4b5fd" stroke-width="1" opacity="0.4"/>
    <path d="M-80,60 C-20,80 20,80 80,60" fill="none" stroke="#c4b5fd" stroke-width="1" opacity="0.4"/>

    <!-- Linee interne complesse -->
    <path d="M-45,-10 C-20,-35 20,-35 45,-10 C60,10 45,35 0,40 C-45,35 -60,10 -45,-10 Z"
          fill="none" stroke="#ddd6fe" stroke-width="0.8" opacity="0.4"/>
    <path d="M-30,0 C0,-50 30,0 0,45 C-30,0 -30,0 -30,0" fill="none" stroke="#e9d5ff" stroke-width="0.8" opacity="0.3"/>

    <!-- Riflessi luce -->
    <ellipse cx="-30" cy="-35" rx="20" ry="12" fill="white" opacity="0.08" transform="rotate(-20,-30,-35)"/>

    <!-- Glow esterno -->
    <ellipse cx="0" cy="0" rx="100" ry="75" fill="none" stroke="#7c3aed" stroke-width="12" opacity="0.08"/>
    <ellipse cx="0" cy="0" rx="115" ry="88" fill="none" stroke="#7c3aed" stroke-width="6" opacity="0.05"/>
  </g>

  <!-- Titolo sezione destra -->
  <text x="620" y="50" text-anchor="middle" fill="#94a3b8" font-size="13" letter-spacing="2">DIMENSIONI EXTRA (6D compattificate)</text>

  <!-- ===== TESTI INFORMATIVI ===== -->

  <!-- Box informativo in basso -->
  <rect x="40" y="515" width="820" height="70" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1" opacity="0.9"/>

  <!-- Testo principale -->
  <text x="450" y="542" text-anchor="middle" fill="#e2e8f0" font-size="15" font-weight="bold">
    La compattificazione è UNA SOLA, identica in ogni punto dell'universo
  </text>
  <text x="450" y="563" text-anchor="middle" fill="#94a3b8" font-size="12">
    In ogni punto dello spazio esistono 6 dimensioni extra arrotolate in questa forma — la Calabi-Yau non è "localizzata", è universale
  </text>
  <text x="450" y="582" text-anchor="middle" fill="#7c3aed" font-size="11" font-style="italic">
    Scala stimata: ~10⁻³³ cm (scala di Planck) — invisibile, ma presente ovunque
  </text>

  <!-- Etichetta Calabi-Yau -->
  <text x="620" y="430" text-anchor="middle" fill="#c4b5fd" font-size="14" font-weight="bold" filter="url(#glow)">Varietà di Calabi-Yau</text>
  <text x="620" y="450" text-anchor="middle" fill="#7c3aed" font-size="11">(proiezione 3D di una geometria 6D)</text>

  <!-- Etichetta zoom -->
  <text x="340" y="175" fill="#a78bfa" font-size="12" font-style="italic">ingrandimento</text>
  <text x="340" y="190" fill="#a78bfa" font-size="12" font-style="italic">di scala di Planck</text>

  <!-- Titolo principale -->
  <text x="450" y="110" text-anchor="middle" fill="#f1f5f9" font-size="22" font-weight="bold">
    Compattificazione di Calabi-Yau
  </text>
  <text x="450" y="135" text-anchor="middle" fill="#64748b" font-size="13">
    Teoria delle Stringhe — Rappresentazione divulgativa corretta
  </text>

</svg>
```

---

## Perché questa immagine è **più corretta** delle altre 🔬

| ❌ Immagine sbagliata (comune) | ✅ Questa immagine |
|---|---|
| Griglia con CY ad ogni nodo | Un solo punto ingrandito con zoom |
| Suggerisce tante CY distinte | Mostra che la forma è **universale** |
| Sembra che siano oggetti locali | Chiarisce che sono **dimensioni di ogni punto** |
| Non spiega la scala | Indica la scala di Planck (~10⁻³³ cm) |

### Il concetto giusto:
> La Calabi-Yau **non è un oggetto** nello spazio — è la **forma dello spazio stesso** nelle sue dimensioni extra. È come chiedere quante "terzedimensioni" ci sono: la risposta è che **la terza dimensione c'è ovunque**, non è localizzata in certi punti.

Vuoi che modifichi l'immagine, aggiunga testo in inglese, o cambi lo stile grafico?

## @Vicianzu

come visualizzo un file .svg?

## Copilot

Hai diverse opzioni, dalla più semplice alla più tecnica:

---

## 🟢 Metodi più semplici

### 1. **Browser web (il più comodo)**
- Salva il file come `calabi_yau.svg`
- Trascinalo nella finestra del browser (Chrome, Firefox, Edge, Safari)
- Si apre direttamente ✅

### 2. **Windows — Esplora File**
- Clic destro sul file → **Apri con** → scegli il browser

### 3. **Mac — Finder**
- Doppio clic → si apre con **Anteprima** direttamente ✅

---

## 🟡 Se vuoi modificarlo

### 4. **Inkscape** (gratuito, professionale)
- Download: [inkscape.org](https://inkscape.org)
- Apre SVG e ti permette di editare ogni elemento

### 5. **VSCode** con estensione
- Installa l'estensione **"SVG Preview"**
- Vedi l'anteprima in tempo reale mentre modifichi il codice

---

## 🔵 Online, senza installare nulla

### 6. **SVG Viewer online**
- Vai su [svgviewer.dev](https://svgviewer.dev)
- Incolla il codice SVG oppure carica il file → vedi subito il risultato ✅

---

## Il modo più rapido in assoluto:

> **Copia il codice SVG → apri un nuovo tab del browser → incollalo nella barra degli indirizzi** *(non funziona sempre)*, oppure **salvalo come `.svg` e trascinalo nel browser** — funziona sempre! 🎯

## @Vicianzu

crea una animazione di come le vibrazioni di stringa dentro la calabi yau generano i campi quantistici e di conseguenza lo spettro delle particelle, gli atomi e poi la materia barionica

## Copilot

Ecco l'animazione completa! Salva il codice come file `.html` e aprilo nel browser:

```html name=stringhe_calabi_yau.html
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Stringhe → Particelle → Materia</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #000008;
    color: #e2e8f0;
    font-family: 'Georgia', serif;
    overflow-x: hidden;
  }
  #main-canvas { display: block; }

  #ui {
    position: fixed;
    top: 0; left: 0; right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    background: rgba(0,0,8,0.85);
    border-bottom: 1px solid #1e293b;
    z-index: 100;
  }
  #title {
    font-size: 15px;
    color: #a78bfa;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  #phase-label {
    font-size: 13px;
    color: #94a3b8;
    text-align: center;
    max-width: 500px;
  }
  #phase-name {
    font-size: 16px;
    color: #c4b5fd;
    font-weight: bold;
    text-align: right;
  }

  #bottom-bar {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    padding: 10px 24px;
    background: rgba(0,0,8,0.85);
    border-top: 1px solid #1e293b;
    display: flex;
    justify-content: center;
    gap: 12px;
    z-index: 100;
  }
  .phase-btn {
    padding: 7px 18px;
    border: 1px solid #334155;
    background: #0f172a;
    color: #94a3b8;
    border-radius: 20px;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.3s;
  }
  .phase-btn:hover, .phase-btn.active {
    background: #4c1d95;
    border-color: #7c3aed;
    color: #e2e8f0;
  }

  #info-box {
    position: fixed;
    right: 20px;
    top: 70px;
    width: 220px;
    background: rgba(15,23,42,0.92);
    border: 1px solid #334155;
    border-radius: 10px;
    padding: 14px;
    font-size: 12px;
    color: #94a3b8;
    line-height: 1.6;
    z-index: 100;
  }
  #info-box h3 {
    color: #a78bfa;
    font-size: 13px;
    margin-bottom: 8px;
    border-bottom: 1px solid #1e293b;
    padding-bottom: 6px;
  }
  .info-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }
  .info-val { color: #e2e8f0; font-weight: bold; }
</style>
</head>
<body>

<div id="ui">
  <div id="title">Teoria delle Stringhe</div>
  <div id="phase-label">Inizializzazione...</div>
  <div id="phase-name"></div>
</div>

<canvas id="main-canvas"></canvas>

<div id="info-box">
  <h3>📊 Stato</h3>
  <div class="info-row"><span>Fase:</span><span class="info-val" id="stat-phase">—</span></div>
  <div class="info-row"><span>Modo vibraz.:</span><span class="info-val" id="stat-mode">—</span></div>
  <div class="info-row"><span>Particelle:</span><span class="info-val" id="stat-particles">0</span></div>
  <div class="info-row"><span>Energia:</span><span class="info-val" id="stat-energy">—</span></div>
  <hr style="border-color:#1e293b; margin: 8px 0;">
  <div style="font-size:11px; color:#475569; line-height:1.5;">
    La forma della Calabi-Yau seleziona quali modi di vibrazione sono permessi → ogni modo è una particella diversa
  </div>
</div>

<div id="bottom-bar">
  <button class="phase-btn active" onclick="setPhase(0)">① Stringa nella CY</button>
  <button class="phase-btn" onclick="setPhase(1)">② Modi di vibrazione</button>
  <button class="phase-btn" onclick="setPhase(2)">③ Campi quantistici</button>
  <button class="phase-btn" onclick="setPhase(3)">④ Particelle</button>
  <button class="phase-btn" onclick="setPhase(4)">⑤ Atomi</button>
  <button class="phase-btn" onclick="setPhase(5)">⑥ Materia barionica</button>
</div>

<script>
const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');

let W, H;
function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

// ─── STATO ──────────────────────────────────────────────
let phase = 0;
let t = 0;
let particles = [];
let quanta = [];
let atoms = [];
let baryons = [];
let phaseT = 0; // timer locale per fase

const PHASES = [
  { name: "Stringa nella Calabi-Yau", desc: "Una stringa quantistica è intrappolata nella geometria della varietà di Calabi-Yau. La forma dello spazio ne condiziona i modi di vibrazione." },
  { name: "Modi di vibrazione", desc: "La stringa vibra in armoniche discrete. Ogni modo n=1,2,3... corrisponde a un'energia e a proprietà quantistiche diverse (spin, carica, massa)." },
  { name: "Campi quantistici", desc: "Ogni modo di vibrazione eccita un campo quantistico nello spazio 4D. Il campo permea tutto l'universo come un'onda stazionaria." },
  { name: "Spettro delle particelle", desc: "Le eccitazioni dei campi producono quanti — le particelle elementari: quark (u,d,s), elettroni, neutrini, gluoni, fotoni." },
  { name: "Atomi", desc: "I quark si confinano in protoni e neutroni (QCD). Protoni e neutroni formano nuclei. Gli elettroni si legano ai nuclei → atomi stabili." },
  { name: "Materia barionica", desc: "Gli atomi si aggregano per gravità ed elettromagnetismo → molecole, gas, polvere, stelle, pianeti. Tutta la materia che vedi è vibrazione di stringhe." }
];

function setPhase(n) {
  phase = n;
  phaseT = 0;
  particles = [];
  quanta = [];
  atoms = [];
  baryons = [];
  document.querySelectorAll('.phase-btn').forEach((b, i) => b.classList.toggle('active', i === n));
  updateUI();
}

function updateUI() {
  document.getElementById('phase-label').textContent = PHASES[phase].desc;
  document.getElementById('phase-name').textContent = PHASES[phase].name;
  document.getElementById('stat-phase').textContent = (phase+1) + '/6';
  document.getElementById('stat-mode').textContent = phase >= 1 ? `n=${(phase%3)+1}` : '—';
  document.getElementById('stat-particles').textContent = particles.length + quanta.length;
  document.getElementById('stat-energy').textContent = ['E₀','E₁','E₂','E₃','E₄','E₅'][phase];
}

// ─── PALETTE ────────────────────────────────────────────
const COLORS = {
  string:  '#a78bfa',
  cy:      '#7c3aed',
  quark_u: '#f59e0b',
  quark_d: '#3b82f6',
  quark_s: '#10b981',
  electron:'#60a5fa',
  neutrino:'#a78bfa',
  gluon:   '#f97316',
  photon:  '#fde68a',
  proton:  '#ef4444',
  neutron: '#64748b',
  atom:    '#38bdf8',
  field:   '#4ade80',
};

// ─── DISEGNO CALABI-YAU (semplificato) ──────────────────
function drawCY(cx, cy, r, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(cx, cy);

  // alone esterno
  let grd = ctx.createRadialGradient(0,0,r*0.3, 0,0,r*1.4);
  grd.addColorStop(0, 'rgba(124,58,237,0.15)');
  grd.addColorStop(1, 'rgba(124,58,237,0)');
  ctx.beginPath(); ctx.arc(0,0,r*1.4,0,Math.PI*2);
  ctx.fillStyle = grd; ctx.fill();

  // corpo
  const pts = 7;
  for(let k=0; k<3; k++){
    ctx.beginPath();
    const ro = r * (1 - k*0.18);
    for(let i=0; i<=pts*4; i++){
      const a = (i/pts)*Math.PI*2;
      const wave = 1 + 0.18*Math.sin(pts*a + t*0.4 + k) + 0.08*Math.sin(2*pts*a - t*0.3);
      const x = ro*wave*Math.cos(a);
      const y = ro*wave*0.6*Math.sin(a);
      i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
    }
    ctx.closePath();
    ctx.strokeStyle = k===0 ? '#7c3aed' : k===1 ? '#a78bfa' : '#c4b5fd';
    ctx.lineWidth = k===0 ? 2 : 1;
    ctx.globalAlpha = alpha * (k===0 ? 0.8 : 0.4);
    ctx.stroke();
  }

  // buco centrale
  ctx.beginPath();
  ctx.ellipse(0, 0, r*0.22, r*0.14, 0, 0, Math.PI*2);
  ctx.fillStyle = '#000008';
  ctx.globalAlpha = alpha;
  ctx.fill();
  ctx.strokeStyle = '#ddd6fe';
  ctx.lineWidth = 1;
  ctx.globalAlpha = alpha*0.4;
  ctx.stroke();

  ctx.restore();
}

// ─── DISEGNO STRINGA ────────────────────────────────────
function drawString(cx, cy, length, mode, col, amp) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.beginPath();
  const steps = 200;
  for(let i=0; i<=steps; i++){
    const x = (i/steps - 0.5)*length;
    const envelope = Math.sin(Math.PI * i/steps);
    const y = amp * envelope * Math.sin(mode * Math.PI * i/steps + t*3);
    i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
  }
  ctx.strokeStyle = col;
  ctx.lineWidth = 2.5;
  ctx.shadowColor = col;
  ctx.shadowBlur = 10;
  ctx.stroke();

  // end points
  ctx.beginPath(); ctx.arc(-length/2, 0, 4, 0, Math.PI*2);
  ctx.beginPath(); ctx.arc(length/2, 0, 4, 0, Math.PI*2);
  ctx.fillStyle = col; ctx.fill();
  ctx.restore();
}

// ─── FASE 0: stringa nella CY ───────────────────────────
function drawPhase0() {
  const cx = W/2, cy = H/2;
  drawCY(cx, cy, 160, 1);

  // stringa curva dentro la CY
  ctx.save();
  ctx.translate(cx, cy);
  for(let s=0; s<3; s++){
    ctx.beginPath();
    const off = s * 0.6;
    for(let i=0; i<=200; i++){
      const a = (i/200)*Math.PI*2;
      const r = 60 + 30*Math.sin(3*a + t*0.5 + off) + 15*Math.cos(5*a - t*0.3);
      const x = r*Math.cos(a);
      const y = r*0.55*Math.sin(a);
      i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
    }
    ctx.strokeStyle = s===0 ? '#a78bfa' : s===1 ? '#818cf8' : '#c4b5fd';
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.7 - s*0.2;
    ctx.shadowColor = '#7c3aed';
    ctx.shadowBlur = 12;
    ctx.stroke();
  }
  ctx.restore();

  // etichette
  label(cx, cy - 200, 'Varietà di Calabi-Yau', '#c4b5fd', 16);
  label(cx, cy - 175, '6 dimensioni compattificate', '#7c3aed', 12);
  label(cx, cy + 195, 'Stringa chiusa — vibra nella geometria compatta', '#a78bfa', 13);
  label(cx, cy + 215, 'La topologia della CY determina i modi permessi', '#64748b', 11);
}

// ─── FASE 1: modi di vibrazione ─────────────────────────
function drawPhase1() {
  const modes = [
    { n:1, col:'#a78bfa', label:'n=1  →  Modo fondamentale', sub:'Gravitone (spin 2) / Dilaton', y: H*0.25 },
    { n:2, col:'#60a5fa', label:'n=2  →  Prima armonica',    sub:'Fotone / Bosone W,Z (spin 1)', y: H*0.50 },
    { n:3, col:'#f59e0b', label:'n=3  →  Seconda armonica',  sub:'Quark / Elettrone (spin ½)',   y: H*0.75 },
  ];

  modes.forEach(m => {
    drawString(W*0.42, m.y, 300, m.n, m.col, 28 + 8*(phaseT%200)/200);
    label(W*0.7, m.y - 10, m.label, m.col, 14);
    label(W*0.7, m.y + 10, m.sub, '#64748b', 11);

    // nodi
    for(let k=1; k<m.n; k++){
      const nx = W*0.42 - 150 + (k/m.n)*300;
      ctx.beginPath();
      ctx.arc(nx, m.y, 5, 0, Math.PI*2);
      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = 0.6;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  });

  // CY piccola a sinistra
  drawCY(W*0.12, H*0.5, 75, 0.8);
  label(W*0.12, H*0.5+90, 'CY filtra', '#7c3aed', 11);
  label(W*0.12, H*0.5+105, 'i modi', '#7c3aed', 11);

  // freccia CY → stringhe
  arrow(W*0.19, H*0.5, W*0.27, H*0.25, '#7c3aed');
  arrow(W*0.19, H*0.5, W*0.27, H*0.50, '#7c3aed');
  arrow(W*0.19, H*0.5, W*0.27, H*0.75, '#7c3aed');
}

// ─── FASE 2: campi quantistici ──────────────────────────
function drawPhase2() {
  // sfondo griglia spaziotemporale
  ctx.save();
  ctx.globalAlpha = 0.15;
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 1;
  for(let x=0; x<W; x+=60) { ctx.beginPath(); ctx.moveTo(x,60); ctx.lineTo(x,H-60); ctx.stroke(); }
  for(let y=60; y<H-60; y+=60) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
  ctx.restore();

  const fields = [
    { col:'#4ade80', freq:1.0, amp:0.35, yFrac:0.30, name:'Campo di Higgs (scalare, spin 0)', energy:'~125 GeV' },
    { col:'#60a5fa', freq:1.8, amp:0.25, yFrac:0.50, name:'Campo elettromagnetico (spin 1)', energy:'0 massa' },
    { col:'#f59e0b', freq:2.5, amp:0.20, yFrac:0.70, name:'Campo di Dirac — quark (spin ½)', energy:'~5 MeV–175 GeV' },
  ];

  fields.forEach(f => {
    const y0 = H * f.yFrac;
    const amp = (H*0.12) * f.amp * (1 + 0.2*Math.sin(t*0.5));

    // onda di campo
    ctx.save();
    ctx.beginPath();
    for(let i=0; i<=W; i+=2){
      const yw = y0 + amp * Math.sin(f.freq * (i/W)*Math.PI*8 - t*2.5);
      i===0 ? ctx.moveTo(i, yw) : ctx.lineTo(i, yw);
    }
    ctx.strokeStyle = f.col;
    ctx.lineWidth = 2.5;
    ctx.shadowColor = f.col;
    ctx.shadowBlur = 15;
    ctx.globalAlpha = 0.85;
    ctx.stroke();

    // area sotto
    ctx.beginPath();
    ctx.moveTo(0, y0);
    for(let i=0; i<=W; i+=2){
      const yw = y0 + amp * Math.sin(f.freq * (i/W)*Math.PI*8 - t*2.5);
      ctx.lineTo(i, yw);
    }
    ctx.lineTo(W, y0);
    ctx.closePath();
    ctx.fillStyle = f.col;
    ctx.globalAlpha = 0.06;
    ctx.fill();
    ctx.restore();

    label(W - 270, y0 - 22, f.name, f.col, 13);
    label(W - 270, y0 + 4,  f.energy, '#64748b', 11);
  });

  label(W/2, H*0.12, 'I campi quantistici permeano tutto lo spazio 4D', '#94a3b8', 14);
  label(W/2, H*0.12+20, 'Le oscillazioni del campo = quanti = particelle', '#64748b', 12);
}

// ─── FASE 3: particelle ─────────────────────────────────
function drawPhase3() {
  if(phaseT % 18 === 0 && quanta.length < 40){
    const types = [
      { name:'u', col:COLORS.quark_u, r:8,  mass:'2.3 MeV',   spin:'½', charge:'+⅔' },
      { name:'d', col:COLORS.quark_d, r:8,  mass:'4.8 MeV',   spin:'½', charge:'-⅓' },
      { name:'e⁻',col:COLORS.electron,r:7,  mass:'0.511 MeV', spin:'½', charge:'-1' },
      { name:'γ', col:COLORS.photon,  r:6,  mass:'0',         spin:'1',  charge:'0' },
      { name:'g', col:COLORS.gluon,   r:7,  mass:'0',         spin:'1',  charge:'col' },
      { name:'ν', col:COLORS.neutrino,r:5,  mass:'~0',        spin:'½', charge:'0' },
    ];
    const tp = types[Math.floor(Math.random()*types.length)];
    quanta.push({
      x: W*0.15 + Math.random()*W*0.05,
      y: H*0.3 + Math.random()*H*0.4,
      vx: 1.2 + Math.random()*1.5,
      vy: (Math.random()-0.5)*1.2,
      ...tp,
      age: 0,
      trail: []
    });
  }

  // CY sorgente a sinistra
  drawCY(W*0.12, H/2, 90, 0.9);
  label(W*0.12, H/2 + 110, 'Sorgente', '#7c3aed', 12);

  quanta.forEach((q,i) => {
    q.trail.push({x:q.x, y:q.y});
    if(q.trail.length > 25) q.trail.shift();
    q.x += q.vx; q.y += q.vy;
    q.age++;

    // trail
    q.trail.forEach((pt,ti)=>{
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, q.r*0.4, 0, Math.PI*2);
      ctx.fillStyle = q.col;
      ctx.globalAlpha = (ti/q.trail.length)*0.3;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    // cerchio particella
    ctx.beginPath();
    ctx.arc(q.x, q.y, q.r, 0, Math.PI*2);
    const gr = ctx.createRadialGradient(q.x-q.r*0.3, q.y-q.r*0.3, 1, q.x, q.y, q.r);
    gr.addColorStop(0,'#ffffff');
    gr.addColorStop(0.4, q.col);
    gr.addColorStop(1,'rgba(0,0,8,0.3)');
    ctx.fillStyle = gr;
    ctx.shadowColor = q.col;
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.shadowBlur = 0;

    // etichetta
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${q.r<7?9:10}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(q.name, q.x, q.y + q.r*0.4);

    // scheda info al volo
    if(q.x > W*0.35 && q.x < W*0.36){
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.roundRect(q.x+12, q.y-30, 120, 60, 6);
      ctx.fill();
      ctx.strokeStyle = q.col;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = q.col;
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(q.name==='e⁻'?'Elettrone':q.name==='γ'?'Fotone':q.name==='g'?'Gluone':q.name==='ν'?'Neutrino':'Quark '+q.name, q.x+17, q.y-14);
      ctx.fillStyle='#94a3b8';
      ctx.font='10px sans-serif';
      ctx.fillText('massa: '+q.mass, q.x+17, q.y+1);
      ctx.fillText('spin: '+q.spin+'  carica: '+q.charge, q.x+17, q.y+15);
      ctx.fillText('modo vibraz. n='+((i%3)+1), q.x+17, q.y+29);
    }

    if(q.x > W + 20 || q.y < 60 || q.y > H-60) quanta.splice(i,1);
  });
}

// ─── FASE 4: atomi ──────────────────────────────────────
function drawPhase4() {
  // schema QCD: 3 quark → protone
  const protonX = W*0.25, protonY = H*0.38;
  drawProton(protonX, protonY, 55, 'Protone\nuud', [COLORS.quark_u, COLORS.quark_u, COLORS.quark_d]);

  const neutronX = W*0.25, neutronY = H*0.65;
  drawProton(neutronX, neutronY, 55, 'Neutrone\nudd', [COLORS.quark_u, COLORS.quark_d, COLORS.quark_d]);

  // freccia confinamento
  label(W*0.25, H*0.15, 'Confinamento QCD', '#f97316', 13);
  label(W*0.25, H*0.175,'3 quark → adrone (barione)', '#64748b', 11);

  // nucleo
  const nucX = W*0.52, nucY = H*0.5;
  // gluoni tra p e n
  drawWiggly(protonX+60, protonY, nucX-35, H*0.42, '#f97316', 'g');
  drawWiggly(neutronX+60, neutronY, nucX-35, H*0.58, '#f97316', 'g');

  ctx.beginPath();
  ctx.arc(nucX, nucY, 42, 0, Math.PI*2);
  const gn = ctx.createRadialGradient(nucX-10,nucY-10,5,nucX,nucY,42);
  gn.addColorStop(0,'#7f1d1d'); gn.addColorStop(1,'#450a0a');
  ctx.fillStyle=gn; ctx.fill();
  ctx.strokeStyle='#ef4444'; ctx.lineWidth=2; ctx.stroke();
  label(nucX, nucY-12, 'Nucleo', '#fca5a5', 13);
  label(nucX, nucY+5,  '¹H (idrogeno)', '#64748b', 10);
  label(nucX, nucY+20, 'p=1, n=0', '#64748b', 10);

  // elettrone in orbita
  const eR = 130, eA = t*1.2;
  const ex = nucX + eR*Math.cos(eA), ey = nucY + eR*0.45*Math.sin(eA);
  ctx.beginPath();
  ctx.ellipse(nucX,nucY,eR,eR*0.45,0,0,Math.PI*2);
  ctx.strokeStyle='#1d4ed8'; ctx.lineWidth=1; ctx.setLineDash([4,4]);
  ctx.globalAlpha=0.4; ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha=1;
  ctx.beginPath(); ctx.arc(ex,ey,9,0,Math.PI*2);
  const ge=ctx.createRadialGradient(ex-3,ey-3,1,ex,ey,9);
  ge.addColorStop(0,'#ffffff'); ge.addColorStop(1,COLORS.electron);
  ctx.fillStyle=ge; ctx.shadowColor=COLORS.electron; ctx.shadowBlur=14; ctx.fill(); ctx.shadowBlur=0;
  ctx.fillStyle='#fff'; ctx.font='bold 9px sans-serif'; ctx.textAlign='center';
  ctx.fillText('e⁻',ex,ey+3);

  // fotone emesso
  const phX = nucX + eR*Math.cos(eA+2), phY = nucY + eR*0.45*Math.sin(eA+2);
  if(Math.sin(t*1.2)>0.95){
    ctx.beginPath(); ctx.arc(phX,phY,5,0,Math.PI*2);
    ctx.fillStyle=COLORS.photon; ctx.globalAlpha=0.8; ctx.fill(); ctx.globalAlpha=1;
    ctx.fillStyle=COLORS.photon; ctx.font='9px sans-serif'; ctx.fillText('γ',phX+10,phY);
  }

  label(W*0.52, H*0.82, 'Atomo di Idrogeno', '#38bdf8', 14);
  label(W*0.52, H*0.82+18, 'Il fotone γ media la forza EM (legame e⁻ ↔ nucleo)', '#64748b', 11);

  // freccia verso fase 5
  label(W*0.82, H*0.5, '→ aggregazione', '#475569', 12);
  label(W*0.82, H*0.5+16, '→ molecole', '#475569', 12);
  label(W*0.82, H*0.5+32, '→ materia', '#475569', 12);
}

function drawProton(cx,cy,r,lbl,colors){
  // glow
  let g=ctx.createRadialGradient(cx,cy,r*0.2,cx,cy,r*1.6);
  g.addColorStop(0,'rgba(239,68,68,0.2)'); g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.beginPath(); ctx.arc(cx,cy,r*1.6,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
  ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
  const pg=ctx.createRadialGradient(cx-r*0.3,cy-r*0.3,3,cx,cy,r);
  pg.addColorStop(0,'#7f1d1d'); pg.addColorStop(1,'#1c0a0a');
  ctx.fillStyle=pg; ctx.fill();
  ctx.strokeStyle='#ef4444'; ctx.lineWidth=2; ctx.stroke();

  const angles=[Math.PI/6, Math.PI*5/6, Math.PI*3/2];
  colors.forEach((c,i)=>{
    const qx=cx+r*0.45*Math.cos(angles[i]+t*0.3);
    const qy=cy+r*0.45*Math.sin(angles[i]+t*0.3);
    // linea gluone
    const nx=cx+r*0.45*Math.cos(angles[(i+1)%3]+t*0.3);
    const ny=cy+r*0.45*Math.sin(angles[(i+1)%3]+t*0.3);
    ctx.beginPath(); ctx.moveTo(qx,qy); ctx.lineTo(nx,ny);
    ctx.strokeStyle='rgba(249,115,22,0.4)'; ctx.lineWidth=1.5; ctx.setLineDash([3,3]); ctx.stroke(); ctx.setLineDash([]);
    // quark
    ctx.beginPath(); ctx.arc(qx,qy,8,0,Math.PI*2);
    ctx.fillStyle=c; ctx.shadowColor=c; ctx.shadowBlur=8; ctx.fill(); ctx.shadowBlur=0;
    ctx.fillStyle='#fff'; ctx.font='bold 8px sans-serif'; ctx.textAlign='center';
    ctx.fillText(i===2?'d':'u',qx,qy+3);
  });
  const lines=lbl.split('\n');
  label(cx,cy+r+16,lines[0],'#fca5a5',12);
  if(lines[1]) label(cx,cy+r+30,lines[1],'#7f1d1d',10);
}

function drawWiggly(x1,y1,x2,y2,col,lbl){
  const dx=x2-x1, dy=y2-y1, len=Math.sqrt(dx*dx+dy*dy);
  const steps=20;
  ctx.save(); ctx.beginPath();
  for(let i=0;i<=steps;i++){
    const f=i/steps;
    const px=x1+dx*f, py=y1+dy*f;
    const perp=12*Math.sin(i*1.2+t*3)*Math.cos(Math.PI*f);
    const nx=-dy/len*perp, ny=dx/len*perp;
    i===0?ctx.moveTo(px+nx,py+ny):ctx.lineTo(px+nx,py+ny);
  }
  ctx.strokeStyle=col; ctx.lineWidth=2; ctx.globalAlpha=0.7; ctx.stroke();
  ctx.restore();
}

// ─── FASE 5: materia barionica ──────────────────────────
function drawPhase5() {
  // nebulosa / nube di gas in background
  for(let i=0;i<5;i++){
    const bx=W*0.1+i*W*0.2, by=H*0.5+Math.sin(i)*H*0.1;
    const br=60+i*15;
    const bg=ctx.createRadialGradient(bx,by,5,bx,by,br);
    bg.addColorStop(0,'rgba(30,58,138,0.25)'); bg.addColorStop(1,'rgba(0,0,0,0)');
    ctx.beginPath(); ctx.arc(bx,by,br,0,Math.PI*2); ctx.fillStyle=bg; ctx.fill();
  }

  // disegna atomi/molecole che si aggregano
  const atomDefs=[
    {x:W*0.12,y:H*0.3,r:18,col:'#1d4ed8',lbl:'H'},
    {x:W*0.22,y:H*0.28,r:18,col:'#1d4ed8',lbl:'H'},
    {x:W*0.17,y:H*0.42,r:22,col:'#7c3aed',lbl:'He'},
    {x:W*0.32,y:H*0.35,r:20,col:'#0369a1',lbl:'C'},
    {x:W*0.42,y:H*0.30,r:18,col:'#15803d',lbl:'O'},
    {x:W*0.52,y:H*0.40,r:18,col:'#b45309',lbl:'N'},
    {x:W*0.62,y:H*0.33,r:16,col:'#7c2d12',lbl:'Fe'},
    {x:W*0.72,y:H*0.38,r:20,col:'#6b21a8',lbl:'Si'},
  ];

  atomDefs.forEach(a=>{
    // legame
    atomDefs.forEach(b=>{
      const d=Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2);
      if(d>0&&d<100){
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
        ctx.strokeStyle='rgba(100,116,139,0.25)'; ctx.lineWidth=1; ctx.stroke();
      }
    });
    const ag=ctx.createRadialGradient(a.x-a.r*0.3,a.y-a.r*0.3,2,a.x,a.y,a.r);
    ag.addColorStop(0,'rgba(255,255,255,0.4)'); ag.addColorStop(1,a.col);
    ctx.beginPath(); ctx.arc(a.x,a.y,a.r,0,Math.PI*2);
    ctx.fillStyle=ag; ctx.shadowColor=a.col; ctx.shadowBlur=10; ctx.fill(); ctx.shadowBlur=0;
    ctx.strokeStyle='rgba(255,255,255,0.2)'; ctx.lineWidth=1; ctx.stroke();
    ctx.fillStyle='#fff'; ctx.font=`bold ${a.r*0.75}px sans-serif`; ctx.textAlign='center';
    ctx.fillText(a.lbl,a.x,a.y+a.r*0.3);
  });

  // struttura stellare a destra
  const sx=W*0.78, sy=H*0.52;
  // fotosfera
  const starR=90+5*Math.sin(t*0.8);
  for(let layer=3;layer>=0;layer--){
    const sg=ctx.createRadialGradient(sx,sy,0,sx,sy,starR*(1+layer*0.3));
    if(layer===0){
      sg.addColorStop(0,'#fffde7');
      sg.addColorStop(0.3,'#fde68a');
      sg.addColorStop(0.7,'#f59e0b');
      sg.addColorStop(1,'rgba(245,158,11,0)');
    } else {
      sg.addColorStop(0,`rgba(245,158,11,${0.06-layer*0.015})`);
      sg.addColorStop(1,'rgba(0,0,0,0)');
    }
    ctx.beginPath(); ctx.arc(sx,sy,starR*(1+layer*0.3),0,Math.PI*2);
    ctx.fillStyle=sg; ctx.fill();
  }
  label(sx, sy+starR+30, 'Stella (nucleosintesi)', '#fde68a', 13);
  label(sx, sy+starR+48, 'Le reazioni nucleari fuse\natomi più pesanti', '#64748b', 11);

  // pianeta
  const pR=30, pA=t*0.25, pOrb=160;
  const px=sx+pOrb*Math.cos(pA), py=sy+pOrb*0.4*Math.sin(pA);
  ctx.beginPath(); ctx.ellipse(sx,sy,pOrb,pOrb*0.4,0,0,Math.PI*2);
  ctx.strokeStyle='rgba(100,116,139,0.2)'; ctx.lineWidth=1; ctx.setLineDash([3,6]); ctx.stroke(); ctx.setLineDash([]);
  const pg2=ctx.createRadialGradient(px-8,py-8,2,px,py,pR);
  pg2.addColorStop(0,'#60a5fa'); pg2.addColorStop(0.5,'#1d4ed8'); pg2.addColorStop(1,'#0c1445');
  ctx.beginPath(); ctx.arc(px,py,pR,0,Math.PI*2);
  ctx.fillStyle=pg2; ctx.shadowColor='#3b82f6'; ctx.shadowBlur=15; ctx.fill(); ctx.shadowBlur=0;
  label(px,py+pR+16,'Pianeta','#93c5fd',11);

  // titolo
  label(W/2, H*0.13, 'Materia Barionica', '#e2e8f0', 20);
  label(W/2, H*0.13+26, 'Molecole • Gas • Stelle • Pianeti — tutto è vibrazione di stringhe', '#64748b', 12);

  // catena esplicativa
  const chain=['Stringa','→ Quark','→ Protone','→ Nucleo','→ Atomo','→ Molecola','→ Stella'];
  chain.forEach((s,i)=>{
    const cx2=W*0.05 + i*(W*0.9/chain.length);
    ctx.fillStyle = i===0?'#a78bfa':i<3?COLORS.quark_u:i<5?'#ef4444':'#60a5fa';
    ctx.font=`bold ${i===0?12:11}px sans-serif`;
    ctx.textAlign='center';
    ctx.fillText(s, cx2+30, H*0.9);
  });
}

// ─── HELPERS ────────────────────────────────────────────
function label(x,y,txt,col,size){
  ctx.fillStyle=col; ctx.font=`${size}px Georgia, serif`;
  ctx.textAlign='center'; ctx.fillText(txt,x,y);
}
function arrow(x1,y1,x2,y2,col){
  ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2);
  ctx.strokeStyle=col; ctx.lineWidth=1.5; ctx.globalAlpha=0.5; ctx.stroke(); ctx.globalAlpha=1;
}

// ─── LOOP PRINCIPALE ────────────────────────────────────
function draw() {
  ctx.clearRect(0,0,W,H);

  // sfondo gradiente
  const bg=ctx.createRadialGradient(W/2,H/2,50,W/2,H/2,Math.max(W,H)*0.8);
  bg.addColorStop(0,'#020617'); bg.addColorStop(1,'#000008');
  ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

  // stelle di sfondo
  if(!window._stars){
    window._stars=Array.from({length:120},()=>({
      x:Math.random()*2000,y:Math.random()*1200,
      r:Math.random()*1.5+0.3,o:Math.random()*0.6+0.1
    }));
  }
  window._stars.forEach(s=>{
    ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(255,255,255,${s.o*(0.7+0.3*Math.sin(t*0.5+s.x))})`;
    ctx.fill();
  });

  switch(phase){
    case 0: drawPhase0(); break;
    case 1: drawPhase1(); break;
    case 2: drawPhase2(); break;
    case 3: drawPhase3(); break;
    case 4: drawPhase4(); break;
    case 5: drawPhase5(); break;
  }

  t += 0.025;
  phaseT++;

  // avanzamento automatico
  if(phaseT > 420 && phase < 5){
    setPhase(phase+1);
  }

  updateUI();
  requestAnimationFrame(draw);
}

draw();
</script>
</body>
</html>
```

---

## Come è strutturata l'animazione 🎬

L'animazione ha **6 fasi** (avanzano automaticamente ogni ~17 secondi, o puoi cliccarle):

| Fase | Cosa vedi |
|---|---|
| **① Stringa nella CY** | Una stringa chiusa che vibra dentro la geometria della Calabi-Yau |
| **② Modi di vibrazione** | Le 3 armoniche n=1,2,3 con le particelle associate (gravitone, fotone, quark) |
| **③ Campi quantistici** | Le onde di campo (Higgs, EM, Dirac) che permeano lo spazio 4D |
| **④ Particelle** | I quanti emergono dalla CY con etichette di massa, spin, carica |
| **⑤ Atomi** | Confinamento QCD → protone → nucleo → elettrone in orbita → idrogeno |
| **⑥ Materia barionica** | Atomi, molecole, stella con pianeta in orbita |

> **Salva come `.html`** e aprilo nel browser — nessuna libreria esterna richiesta, gira tutto in Canvas puro!

## @Vicianzu

la stringa chiusa è un gravitone. Non sono le stringhe aperte a generare la particelle? O meglio quelle che noi chiamiamo particelle sono modi vibratori delle stringhe aperte

## Copilot

Hai ragione, e la distinzione è fondamentale! Lascia che la chiarisca bene:

---

## La distinzione corretta 🎯

### Stringhe aperte → particelle della Materia e Forze (Standard Model)
Le stringhe **aperte** hanno due estremi liberi, e questi estremi sono **vincolati alle D-brane**. I loro modi di vibrazione generano:
- Fotoni γ, gluoni g, bosoni W/Z (bosoni di gauge)
- Quark, elettroni (fermioni)
- Tutto il **Modello Standard**

### Stringhe chiuse → Gravità
Le stringhe **chiuse** (loop) non sono legate alle D-brane, si propagano nel **bulk** (tutto lo spazio 10D). Il loro modo di vibrazione più basso genera:
- Il **gravitone** (spin 2)
- Il dilatone
- Ecco perché la gravità è così debole: "si perde" nelle dimensioni extra!

---

## Schema riassuntivo

```
D-BRANA (il nostro universo 4D)
│
├── stringa APERTA ─── estremo ●────────────● estremo
│                      (vincolato alla brana)
│                      Modi vibrazione →  fotone, quark, elettrone, gluone...
│
└── stringa CHIUSA  ○──────────○  (loop)
                    (non vincolata, viaggia nel bulk 10D)
                    Modo vibrazione → GRAVITONE
                    (gravità "debole" perché si disperde fuori dalla brana)
```

---

Ora aggiorno l'animazione con questa fisica corretta:

```html name=stringhe_calabi_yau_v2.html
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Stringhe → Particelle → Materia (v2 — fisica corretta)</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background:#000008; color:#e2e8f0; font-family:'Georgia',serif; overflow-x:hidden; }
  #main-canvas { display:block; }
  #ui {
    position:fixed; top:0; left:0; right:0;
    display:flex; justify-content:space-between; align-items:center;
    padding:12px 24px;
    background:rgba(0,0,8,0.88);
    border-bottom:1px solid #1e293b;
    z-index:100;
  }
  #title { font-size:14px; color:#a78bfa; letter-spacing:2px; text-transform:uppercase; }
  #phase-label { font-size:12px; color:#94a3b8; text-align:center; max-width:520px; line-height:1.5; }
  #phase-name  { font-size:15px; color:#c4b5fd; font-weight:bold; text-align:right; min-width:160px; }
  #bottom-bar {
    position:fixed; bottom:0; left:0; right:0;
    padding:10px 24px;
    background:rgba(0,0,8,0.88);
    border-top:1px solid #1e293b;
    display:flex; justify-content:center; gap:10px; z-index:100; flex-wrap:wrap;
  }
  .phase-btn {
    padding:7px 16px; border:1px solid #334155;
    background:#0f172a; color:#94a3b8;
    border-radius:20px; cursor:pointer; font-size:11px; transition:all 0.3s;
  }
  .phase-btn:hover, .phase-btn.active {
    background:#4c1d95; border-color:#7c3aed; color:#e2e8f0;
  }
  #legend {
    position:fixed; right:16px; top:70px;
    width:210px;
    background:rgba(15,23,42,0.95);
    border:1px solid #334155; border-radius:10px;
    padding:14px; font-size:11px; color:#94a3b8;
    line-height:1.7; z-index:100;
  }
  #legend h3 { color:#a78bfa; font-size:12px; margin-bottom:8px;
    border-bottom:1px solid #1e293b; padding-bottom:6px; }
  .leg-row { display:flex; align-items:center; gap:8px; margin-bottom:5px; }
  .leg-dot  { width:10px; height:10px; border-radius:50%; flex-shrink:0; }
  .leg-line { width:22px; height:3px; flex-shrink:0; border-radius:2px; }
</style>
</head>
<body>

<div id="ui">
  <div id="title">Teoria delle Stringhe</div>
  <div id="phase-label">—</div>
  <div id="phase-name">—</div>
</div>

<canvas id="main-canvas"></canvas>

<div id="legend">
  <h3>Legenda</h3>
  <div class="leg-row"><div class="leg-line" style="background:#a78bfa;"></div><span>Stringa <b>aperta</b> (materia/forze)</span></div>
  <div class="leg-row"><div class="leg-line" style="background:#fde68a; border:1px dashed #fde68a;"></div><span>Stringa <b>chiusa</b> (gravitone)</span></div>
  <div class="leg-row"><div class="leg-dot" style="background:#7c3aed;"></div><span>D-Brana (nostro universo)</span></div>
  <div class="leg-row"><div class="leg-dot" style="background:#f59e0b;"></div><span>Quark u</span></div>
  <div class="leg-row"><div class="leg-dot" style="background:#3b82f6;"></div><span>Quark d</span></div>
  <div class="leg-row"><div class="leg-dot" style="background:#60a5fa;"></div><span>Elettrone e⁻</span></div>
  <div class="leg-row"><div class="leg-dot" style="background:#fde68a;"></div><span>Fotone γ</span></div>
  <div class="leg-row"><div class="leg-dot" style="background:#f97316;"></div><span>Gluone g</span></div>
  <hr style="border-color:#1e293b; margin:8px 0;">
  <div style="font-size:10px; color:#475569;">
    Le stringhe aperte sono ancorate alla D-Brana.<br>
    Le chiuse viaggiano nel bulk 10D → gravità debole.
  </div>
</div>

<div id="bottom-bar">
  <button class="phase-btn active"  onclick="setPhase(0)">① D-Brana e stringhe</button>
  <button class="phase-btn"         onclick="setPhase(1)">② Aperte: Modi vibratori</button>
  <button class="phase-btn"         onclick="setPhase(2)">③ Chiuse: il Gravitone</button>
  <button class="phase-btn"         onclick="setPhase(3)">④ Campi quantistici</button>
  <button class="phase-btn"         onclick="setPhase(4)">⑤ Particelle → Atomi</button>
  <button class="phase-btn"         onclick="setPhase(5)">⑥ Materia barionica</button>
</div>

<script>
const canvas = document.getElementById('main-canvas');
const ctx    = canvas.getContext('2d');
let W, H;
function resize(){ W=canvas.width=window.innerWidth; H=canvas.height=window.innerHeight; }
resize(); window.addEventListener('resize', resize);

let phase=0, t=0, phaseT=0;
let flyParticles=[], openStrings=[], closedStrings=[];

const PHASES=[
  { name:"D-Brana e due tipi di stringa",
    desc:"Il nostro universo è una D-Brana (oggetto 3+1 dimensionale). Le stringhe APERTE hanno gli estremi ancorati alla brana → generano tutta la materia e le forze. Le stringhe CHIUSE si propagano nel bulk 10D → gravitone." },
  { name:"Stringhe aperte: modi vibratori → particelle",
    desc:"Ogni modo armonico n=1,2,3... di una stringa APERTA corrisponde a una particella diversa con massa, spin e carica determinate dalla geometria della Calabi-Yau." },
  { name:"Stringa chiusa → Gravitone",
    desc:"La stringa CHIUSA (loop) non è legata alla brana. Il suo modo fondamentale è il gravitone (spin 2). Poiché viaggia nel bulk, la gravità è debolissima rispetto alle altre forze." },
  { name:"Eccitazione dei campi quantistici",
    desc:"I modi di vibrazione delle stringhe aperte eccitano campi quantistici sulla D-Brana: campo di Higgs (spin 0), campo EM (spin 1), campo di Dirac per i fermioni (spin ½)." },
  { name:"Particelle elementari → Atomi",
    desc:"I quark (stringhe aperte, n=3) si confinano in protoni/neutroni per la QCD (gluoni = stringhe aperte, n=2). Gli elettroni orbitano → atomi. I fotoni mediano il legame." },
  { name:"Materia barionica",
    desc:"Atomi → molecole → gas → stelle → pianeti. Tutta la struttura dell'universo visibile emerge dai modi di vibrazione delle stringhe aperte ancorate alla nostra D-Brana." }
];

function setPhase(n){
  phase=n; phaseT=0; flyParticles=[]; openStrings=[]; closedStrings=[];
  document.querySelectorAll('.phase-btn').forEach((b,i)=>b.classList.toggle('active',i===n));
  updateUI();
}
function updateUI(){
  document.getElementById('phase-label').textContent=PHASES[phase].desc;
  document.getElementById('phase-name').textContent=PHASES[phase].name;
}

// ─── HELPERS ────────────────────────────────────────────
function label(x,y,txt,col,size,align='center',bold=false){
  ctx.fillStyle=col;
  ctx.font=`${bold?'bold ':''}${size}px Georgia,serif`;
  ctx.textAlign=align;
  ctx.fillText(txt,x,y);
}
function glow(col,blur){ ctx.shadowColor=col; ctx.shadowBlur=blur; }
function noGlow(){ ctx.shadowBlur=0; }

// ─── STELLE DI SFONDO ────────────────────────────────────
let stars=null;
function drawStars(){
  if(!stars) stars=Array.from({length:160},()=>({
    x:Math.random()*3000, y:Math.random()*2000,
    r:Math.random()*1.4+0.2, o:Math.random()*0.5+0.1
  }));
  stars.forEach(s=>{
    ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(255,255,255,${s.o*(0.6+0.4*Math.sin(t*0.4+s.x*0.01))})`;
    ctx.fill();
  });
}

// ─── CALABI-YAU ──────────────────────────────────────────
function drawCY(cx,cy,r,alpha=1){
  ctx.save(); ctx.globalAlpha=alpha; ctx.translate(cx,cy);
  // alone
  let g=ctx.createRadialGradient(0,0,r*0.2,0,0,r*1.5);
  g.addColorStop(0,'rgba(124,58,237,0.18)'); g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.beginPath(); ctx.arc(0,0,r*1.5,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
  // anelli
  for(let k=0;k<4;k++){
    const ro=r*(1-k*0.15);
    ctx.beginPath();
    for(let i=0;i<=280;i++){
      const a=(i/280)*Math.PI*2;
      const w=1+0.16*Math.sin(7*a+t*0.35+k)+0.07*Math.cos(13*a-t*0.2);
      const x=ro*w*Math.cos(a), y=ro*w*0.55*Math.sin(a);
      i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    ctx.closePath();
    ctx.strokeStyle=['#7c3aed','#a78bfa','#c4b5fd','#ddd6fe'][k];
    ctx.lineWidth=k===0?2:1;
    ctx.globalAlpha=alpha*[0.8,0.5,0.3,0.15][k];
    ctx.stroke();
  }
  ctx.beginPath(); ctx.ellipse(0,0,r*0.2,r*0.13,0,0,Math.PI*2);
  ctx.fillStyle='#000008'; ctx.globalAlpha=alpha; ctx.fill();
  ctx.strokeStyle='#ddd6fe'; ctx.lineWidth=1; ctx.globalAlpha=alpha*0.3; ctx.stroke();
  ctx.restore();
}

// ─── STRINGA APERTA ──────────────────────────────────────
function drawOpenString(x1,y1, x2,y2, mode, col, amp){
  const dx=x2-x1, dy=y2-y1;
  const len=Math.sqrt(dx*dx+dy*dy);
  const ux=dx/len, uy=dy/len;
  const nx=-uy, ny=ux; // normale
  ctx.beginPath();
  const steps=200;
  for(let i=0;i<=steps;i++){
    const f=i/steps;
    const env=Math.sin(Math.PI*f);
    const disp=amp*env*Math.sin(mode*Math.PI*f - t*3.5);
    const x=x1+dx*f + nx*disp;
    const y=y1+dy*f + ny*disp;
    i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
  }
  ctx.strokeStyle=col; ctx.lineWidth=2.5;
  glow(col,12); ctx.stroke(); noGlow();
  // endpoint dots (ancorati alla brana)
  [0,1].forEach(ep=>{
    const ex=ep===0?x1:x2, ey=ep===0?y1:y2;
    ctx.beginPath(); ctx.arc(ex,ey,5,0,Math.PI*2);
    ctx.fillStyle='#ffffff'; glow('#ffffff',8); ctx.fill(); noGlow();
  });
}

// ─── STRINGA CHIUSA ──────────────────────────────────────
function drawClosedString(cx,cy,r,col,mode){
  ctx.beginPath();
  const steps=300;
  for(let i=0;i<=steps;i++){
    const a=(i/steps)*Math.PI*2;
    const disp=1 + 0.18*Math.sin(mode*a - t*2.8) + 0.07*Math.cos(2*mode*a+t*1.5);
    const x=cx+r*disp*Math.cos(a);
    const y=cy+r*disp*0.62*Math.sin(a);
    i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
  }
  ctx.closePath();
  ctx.strokeStyle=col; ctx.lineWidth=2.5;
  ctx.setLineDash([6,4]);
  glow(col,14); ctx.stroke(); noGlow(); ctx.setLineDash([]);
}

// ─── D-BRANA ─────────────────────────────────────────────
function drawDBrana(cx,cy,w,h,alpha=1){
  ctx.save(); ctx.globalAlpha=alpha;
  // griglia prospettica
  const cols=10, rows=6;
  const skX=w*0.3, skY=h*0.18;
  function gridPt(ci,ri){
    return { x: cx - w/2 + ci*(w/cols) + ri*(skX/rows),
             y: cy - h/2 + ri*(h/rows)  - ci*(skY/cols) };
  }
  ctx.strokeStyle='rgba(124,58,237,0.22)'; ctx.lineWidth=1;
  for(let ci=0;ci<=cols;ci++){
    ctx.beginPath();
    const s=gridPt(ci,0), e=gridPt(ci,rows);
    ctx.moveTo(s.x,s.y); ctx.lineTo(e.x,e.y); ctx.stroke();
  }
  for(let ri=0;ri<=rows;ri++){
    ctx.beginPath();
    const s=gridPt(0,ri), e=gridPt(cols,ri);
    ctx.moveTo(s.x,s.y); ctx.lineTo(e.x,e.y); ctx.stroke();
  }
  // fill semi-trasparente
  ctx.beginPath();
  const tl=gridPt(0,0),tr=gridPt(cols,0),br=gridPt(cols,rows),bl=gridPt(0,rows);
  ctx.moveTo(tl.x,tl.y); ctx.lineTo(tr.x,tr.y);
  ctx.lineTo(br.x,br.y); ctx.lineTo(bl.x,bl.y); ctx.closePath();
  const bg=ctx.createLinearGradient(tl.x,tl.y,br.x,br.y);
  bg.addColorStop(0,'rgba(124,58,237,0.06)');
  bg.addColorStop(1,'rgba(30,27,74,0.10)');
  ctx.fillStyle=bg; ctx.fill();
  ctx.strokeStyle='rgba(167,139,250,0.35)'; ctx.lineWidth=1.5; ctx.stroke();
  ctx.restore();
}

// ─── FASE 0: D-Brana + due tipi di stringa ───────────────
function drawPhase0(){
  const bx=W*0.5, by=H*0.5;
  // bulk label
  label(W*0.5, H*0.1, 'BULK 10-DIMENSIONALE', '#1e293b', 12, 'center');

  // CY in alto a sx
  drawCY(W*0.1, H*0.2, 55, 0.7);
  label(W*0.1, H*0.2+65, 'Calabi-Yau', '#7c3aed', 10);

  // D-Brana
  drawDBrana(bx, by, W*0.72, H*0.52);
  label(bx+W*0.18, by-H*0.22, 'D₃-Brana  (il nostro universo 3+1D)', '#a78bfa', 13, 'center', true);

  // === STRINGA APERTA sulla brana ===
  const ax1=bx-130, ay1=by+20, ax2=bx+60, ay2=by-40;
  drawOpenString(ax1,ay1, ax2,ay2, 2, '#a78bfa', 22+6*Math.sin(t*1.2));
  label((ax1+ax2)/2-30, (ay1+ay2)/2-38, 'stringa APERTA', '#c4b5fd', 12, 'center', true);
  label((ax1+ax2)/2-30, (ay1+ay2)/2-22, 'estremi ancorati alla brana', '#64748b', 10);
  label((ax1+ax2)/2-30, (ay1+ay2)/2-8, '→ fotone, quark, elettrone...', '#a78bfa', 10);

  // === STRINGA CHIUSA nel bulk ===
  const closedY = by - H*0.3;
  // traiettoria nel bulk (linea tratteggiata)
  ctx.beginPath();
  ctx.setLineDash([5,8]);
  ctx.moveTo(bx-40, by-H*0.14);
  ctx.bezierCurveTo(bx-80, closedY+30, bx+80, closedY-30, bx+120, by-H*0.12);
  ctx.strokeStyle='rgba(253,230,138,0.3)'; ctx.lineWidth=1.5; ctx.stroke();
  ctx.setLineDash([]);
  // loop chiuso
  drawClosedString(bx+30, closedY, 32, '#fde68a', 2);
  // etichetta gravitone
  label(bx+30, closedY-52, 'stringa CHIUSA', '#fde68a', 12, 'center', true);
  label(bx+30, closedY-36, 'libera nel bulk 10D', '#b45309', 10);
  label(bx+30, closedY-20, '→ GRAVITONE (spin 2)', '#fde68a', 10);

  // freccia "esce dalla brana"
  ctx.beginPath();
  ctx.moveTo(bx+30, by-H*0.13);
  ctx.lineTo(bx+30, closedY+20);
  ctx.strokeStyle='rgba(253,230,138,0.45)'; ctx.lineWidth=1.5;
  ctx.setLineDash([4,5]); ctx.stroke(); ctx.setLineDash([]);

  // nota gravità debole
  label(bx+30, closedY+65, '(la gravità è debole perché si', '#475569', 10);
  label(bx+30, closedY+78, 'disperde nelle dim. extra)', '#475569', 10);
}

// ─── FASE 1: modi aperti ──────────────────────────────────
function drawPhase1(){
  const bx=W*0.5, by=H*0.55;
  drawDBrana(bx, by, W*0.88, H*0.30, 0.6);
  label(bx, by+H*0.175, 'D₃-Brana', '#7c3aed', 11);

  // CY a sinistra
  drawCY(W*0.06, by, 52, 0.75);
  label(W*0.06, by+60, 'CY', '#7c3aed', 10);
  label(W*0.06, by+72, 'filtra', '#7c3aed', 10);

  const modes=[
    { n:1, col:'#fde68a', lbl:'n=1 — Fotone  γ',    sub:'spin 1 | m=0',         charge:'0',    y: H*0.27 },
    { n:2, col:'#f97316', lbl:'n=2 — Gluone  g',    sub:'spin 1 | m=0 | col.',   charge:'colore',y: H*0.46 },
    { n:3, col:'#f59e0b', lbl:'n=3 — Quark   u/d',  sub:'spin ½ | m≈2-5 MeV',   charge:'±⅓,⅔', y: H*0.65 },
  ];

  modes.forEach(m=>{
    const x1=W*0.18, x2=W*0.60;
    // linea di brana locale
    ctx.beginPath();
    ctx.moveTo(x1-10, m.y); ctx.lineTo(x2+10, m.y);
    ctx.strokeStyle='rgba(124,58,237,0.2)'; ctx.lineWidth=1; ctx.stroke();

    drawOpenString(x1, m.y, x2, m.y, m.n, m.col, 26+7*Math.sin(t*0.9+m.n));

    // nodi
    for(let k=1;k<m.n;k++){
      const nx=x1+(x2-x1)*(k/m.n);
      ctx.beginPath(); ctx.arc(nx,m.y,4,0,Math.PI*2);
      ctx.fillStyle='#ffffff'; ctx.globalAlpha=0.5; ctx.fill(); ctx.globalAlpha=1;
    }

    // frecce CY → stringa
    ctx.beginPath();
    ctx.moveTo(W*0.1, by);
    ctx.lineTo(x1, m.y);
    ctx.strokeStyle='rgba(124,58,237,0.3)'; ctx.lineWidth=1;
    ctx.setLineDash([4,5]); ctx.stroke(); ctx.setLineDash([]);

    // info a destra
    const rx=W*0.64;
    label(rx, m.y-12, m.lbl, m.col, 13, 'left', true);
    label(rx, m.y+4,  m.sub, '#64748b', 11, 'left');
    label(rx, m.y+18, 'carica: '+m.charge, '#475569', 10, 'left');

    // pallino particella
    ctx.beginPath(); ctx.arc(W*0.86, m.y, 14, 0, Math.PI*2);
    const g=ctx.createRadialGradient(W*0.86-5,m.y-5,2,W*0.86,m.y,14);
    g.addColorStop(0,'#fff'); g.addColorStop(1,m.col);
    ctx.fillStyle=g; glow(m.col,10); ctx.fill(); noGlow();
    ctx.fillStyle='#fff'; ctx.font='bold 10px sans-serif'; ctx.textAlign='center';
    ctx.fillText(m.n===1?'γ':m.n===2?'g':'q', W*0.86, m.y+4);
  });

  label(W*0.5, H*0.14, 'Stringhe APERTE sulla D-Brana', '#a78bfa', 16, 'center', true);
  label(W*0.5, H*0.14+22, 'Ogni armonica n = una particella diversa del Modello Standard', '#64748b', 12);
}

// ─── FASE 2: stringa chiusa → gravitone ──────────────────
function drawPhase2(){
  const bx=W*0.5, braY=H*0.78;

  // brana in basso
  drawDBrana(bx, braY, W*0.9, H*0.15, 0.7);
  label(bx, braY+H*0.1, 'D₃-Brana (universo osservabile)', '#7c3aed', 12);

  // bulk
  label(W*0.1, H*0.2, 'BULK', '#1e293b', 13, 'left');

  // traiettoria della chiusa nel bulk
  const pts=[
    [W*0.15, braY-H*0.06],
    [W*0.18, H*0.52],
    [W*0.35, H*0.28],
    [W*0.55, H*0.22],
    [W*0.75, H*0.32],
    [W*0.82, H*0.55],
    [W*0.85, braY-H*0.06],
  ];
  ctx.beginPath(); ctx.moveTo(pts[0][0],pts[0][1]);
  for(let i=1;i<pts.length;i++) ctx.lineTo(pts[i][0],pts[i][1]);
  ctx.strokeStyle='rgba(253,230,138,0.18)'; ctx.lineWidth=1.5;
  ctx.setLineDash([5,8]); ctx.stroke(); ctx.setLineDash([]);

  // posizione animata sulla traiettoria
  const prog=(t*0.04)%1;
  const idx=Math.floor(prog*(pts.length-1));
  const frac=prog*(pts.length-1)-idx;
  const ci=Math.min(idx,pts.length-2);
  const gcx=pts[ci][0]+(pts[ci+1][0]-pts[ci][0])*frac;
  const gcy=pts[ci][1]+(pts[ci+1][1]-pts[ci][1])*frac;

  drawClosedString(gcx, gcy, 34, '#fde68a', 2);

  // alone gravitone
  let ga=ctx.createRadialGradient(gcx,gcy,5,gcx,gcy,55);
  ga.addColorStop(0,'rgba(253,230,138,0.12)'); ga.addColorStop(1,'rgba(0,0,0,0)');
  ctx.beginPath(); ctx.arc(gcx,gcy,55,0,Math.PI*2); ctx.fillStyle=ga; ctx.fill();

  label(gcx, gcy-50, 'Gravitone', '#fde68a', 14, 'center', true);
  label(gcx, gcy-33, 'spin 2 | m=0', '#b45309', 11);
  label(gcx, gcy-18, 'viaggia nel bulk 10D', '#64748b', 10);

  // frecce verso la brana (gravità indotta)
  for(let i=0;i<5;i++){
    const fx=bx-W*0.3+i*W*0.15;
    ctx.beginPath(); ctx.moveTo(gcx,gcy+40);
    ctx.lineTo(fx, braY-20);
    ctx.strokeStyle=`rgba(253,230,138,${0.08+0.04*i})`; ctx.lineWidth=1;
    ctx.setLineDash([3,6]); ctx.stroke(); ctx.setLineDash([]);
  }

  label(W*0.5, H*0.12, 'Stringa CHIUSA → Gravitone', '#fde68a', 16, 'center', true);
  label(W*0.5, H*0.12+24, 'Si propaga nel bulk — non è vincolata alla brana', '#64748b', 12);
  label(W*0.5, H*0.12+40, 'La gravità è ~10³⁸ volte più debole delle altre forze', '#7c3aed', 11);

  // box comparazione
  const bx2=W*0.08, boxW=W*0.27, boxH=H*0.25;
  ctx.fillStyle='rgba(15,23,42,0.85)';
  ctx.beginPath(); ctx.roundRect(bx2, H*0.54, boxW, boxH, 8); ctx.fill();
  ctx.strokeStyle='#334155'; ctx.lineWidth=1; ctx.stroke();
  label(bx2+boxW/2, H*0.54+18, 'Perché la gravità è debole?', '#c4b5fd', 11, 'center', true);
  label(bx2+boxW/2, H*0.54+36, 'Forze del SM: stringhe APERTE', '#a78bfa', 10);
  label(bx2+boxW/2, H*0.54+50, '→ confinate sulla brana 4D', '#64748b', 10);
  label(bx2+boxW/2, H*0.54+68, 'Gravità: stringa CHIUSA', '#fde68a', 10);
  label(bx2+boxW/2, H*0.54+82, '→ si disperde in 10 dimensioni', '#64748b', 10);
  label(bx2+boxW/2, H*0.54+96, '→ appare debolissima in 4D', '#64748b', 10);
}

// ─── FASE 3: campi quantistici ────────────────────────────
function drawPhase3(){
  ctx.save(); ctx.globalAlpha=0.12; ctx.strokeStyle='#1e293b'; ctx.lineWidth=1;
  for(let x=0;x<W;x+=55){ ctx.beginPath(); ctx.moveTo(x,70); ctx.lineTo(x,H-60); ctx.stroke(); }
  for(let y=70;y<H-60;y+=55){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
  ctx.restore();

  const fields=[
    { col:'#4ade80', f:0.9,  amp:0.28, yf:0.28, name:'Campo di Higgs  (scalare, spin 0)',   note:'≈125 GeV — dà massa alle particelle' },
    { col:'#fde68a', f:1.7,  amp:0.22, yf:0.47, name:'Campo EM  (spin 1, fotone)',           note:'m=0 — forza elettromagnetica' },
    { col:'#f97316', f:2.3,  amp:0.18, yf:0.64, name:'Campo Cromatico QCD  (spin 1, gluone)',note:'confinamento dei quark' },
    { col:'#60a5fa', f:3.0,  amp:0.14, yf:0.80, name:'Campo di Dirac  (spin ½, fermioni)',   note:'quark, elettroni, neutrini' },
  ];

  fields.forEach(f=>{
    const y0=H*f.yf, amp=(H*0.1)*f.amp*(1+0.15*Math.sin(t*0.6));
    ctx.save();
    ctx.beginPath();
    for(let i=0;i<=W;i+=2){
      const yw=y0+amp*Math.sin(f.f*(i/W)*Math.PI*9 - t*2.8);
      i===0?ctx.moveTo(i,yw):ctx.lineTo(i,yw);
    }
    ctx.strokeStyle=f.col; ctx.lineWidth=2.5; glow(f.col,14); ctx.stroke(); noGlow();

    ctx.beginPath(); ctx.moveTo(0,y0);
    for(let i=0;i<=W;i+=2){
      const yw=y0+amp*Math.sin(f.f*(i/W)*Math.PI*9 - t*2.8);
      ctx.lineTo(i,yw);
    }
    ctx.lineTo(W,y0); ctx.closePath();
    ctx.fillStyle=f.col; ctx.globalAlpha=0.05; ctx.fill();
    ctx.restore();

    label(W*0.5, y0-22, f.name, f.col, 12, 'center', true);
    label(W*0.5, y0+4,  f.note, '#64748b', 10);
  });

  label(W*0.5, H*0.11, 'Campi quantistici sulla D-Brana', '#e2e8f0', 16, 'center', true);
  label(W*0.5, H*0.11+22, 'Ogni campo è eccitato dai modi di vibrazione delle stringhe aperte', '#64748b', 12);
}

// ─── FASE 4: particelle → atomi ───────────────────────────
function drawPhase4(){
  if(phaseT%20===0 && flyParticles.length<35){
    const types=[
      {nm:'u',col:'#f59e0b',r:8,  inf:'Quark u | +⅔ | n=3'},
      {nm:'d',col:'#3b82f6',r:8,  inf:'Quark d | -⅓ | n=3'},
      {nm:'e⁻',col:'#60a5fa',r:7, inf:'Elettrone | -1 | n=3'},
      {nm:'γ', col:'#fde68a',r:6, inf:'Fotone | 0 | n=1'},
      {nm:'g', col:'#f97316',r:7, inf:'Gluone | col | n=2'},
      {nm:'ν', col:'#a78bfa',r:5, inf:'Neutrino | 0 | n=3'},
    ];
    const tp=types[Math.floor(Math.random()*types.length)];
    flyParticles.push({
      x:W*0.08+Math.random()*W*0.04,
      y:H*0.2+Math.random()*H*0.6,
      vx:1.5+Math.random()*2, vy:(Math.random()-0.5)*1.5,
      trail:[], age:0, ...tp
    });
  }

  // CY sorgente
  drawCY(W*0.06, H/2, 70, 0.9);
  label(W*0.06, H/2+82, 'D-Brana', '#7c3aed', 10);
  label(W*0.06, H/2+94, '+ stringhe', '#7c3aed', 10);
  label(W*0.06, H/2+106,'aperte', '#7c3aed', 10);

  flyParticles.forEach((p,i)=>{
    p.trail.push({x:p.x,y:p.y});
    if(p.trail.length>22) p.trail.shift();
    p.x+=p.vx; p.y+=p.vy; p.age++;
    p.trail.forEach((pt,ti)=>{
      ctx.beginPath(); ctx.arc(pt.x,pt.y,p.r*0.35,0,Math.PI*2);
      ctx.fillStyle=p.col; ctx.globalAlpha=(ti/p.trail.length)*0.25; ctx.fill(); ctx.globalAlpha=1;
    });
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    const g=ctx.createRadialGradient(p.x-p.r*0.3,p.y-p.r*0.3,1,p.x,p.y,p.r);
    g.addColorStop(0,'#fff'); g.addColorStop(1,p.col);
    ctx.fillStyle=g; glow(p.col,10); ctx.fill(); noGlow();
    ctx.fillStyle='#fff'; ctx.font=`bold ${p.r<7?8:9}px sans-serif`; ctx.textAlign='center';
    ctx.fillText(p.nm,p.x,p.y+p.r*0.35);

    if(p.x>W*0.3&&p.x<W*0.32){
      const bw=128, bh=50;
      ctx.fillStyle='#0f172a'; ctx.beginPath(); ctx.roundRect(p.x+12,p.y-30,bw,bh,5); ctx.fill();
      ctx.strokeStyle=p.col; ctx.lineWidth=1; ctx.stroke();
      ctx.fillStyle=p.col; ctx.font='bold 10px sans-serif'; ctx.textAlign='left';
      ctx.fillText(p.inf,p.x+16,p.y-12);
    }
    if(p.x>W+20||p.y<55||p.y>H-55) flyParticles.splice(i,1);
  });

  // atomo a destra
  const ax=W*0.72, ay=H*0.5, nucR=28, eOrb=105;
  // nucleo
  const nucG=ctx.createRadialGradient(ax-8,ay-8,3,ax,ay,nucR);
  nucG.addColorStop(0,'#7f1d1d'); nucG.addColorStop(1,'#450a0a');
  ctx.beginPath(); ctx.arc(ax,ay,nucR,0,Math.PI*2);
  ctx.fillStyle=nucG; glow('#ef4444',15); ctx.fill(); noGlow();
  ctx.strokeStyle='#ef4444'; ctx.lineWidth=1.5; ctx.stroke();
  label(ax,ay-8,'p','#fca5a5',11);  label(ax,ay+8,'n','#94a3b8',11);

  // orbita
  ctx.beginPath(); ctx.ellipse(ax,ay,eOrb,eOrb*0.45,0,0,Math.PI*2);
  ctx.strokeStyle='rgba(96,165,250,0.3)'; ctx.lineWidth=1; ctx.setLineDash([4,5]); ctx.stroke(); ctx.setLineDash([]);

  // elettrone
  const eA=t*1.3;
  const ex2=ax+eOrb*Math.cos(eA), ey2=ay+eOrb*0.45*Math.sin(eA);
  ctx.beginPath(); ctx.arc(ex2,ey2,9,0,Math.PI*2);
  const eg=ctx.createRadialGradient(ex2-3,ey2-3,1,ex2,ey2,9);
  eg.addColorStop(0,'#fff'); eg.addColorStop(1,'#60a5fa');
  ctx.fillStyle=eg; glow('#60a5fa',14); ctx.fill(); noGlow();
  ctx.fillStyle='#fff'; ctx.font='bold 8px sans-serif'; ctx.textAlign='center';
  ctx.fillText('e⁻',ex2,ey2+3);

  label(ax, ay+eOrb*0.45+28, 'Atomo di H (barionic)', '#38bdf8', 12, 'center', true);
  label(ax, ay+eOrb*0.45+44, 'quark → protone → nucleo + e⁻', '#64748b', 10);

  label(W*0.5, H*0.1, 'Stringhe aperte → Particelle → Atomi', '#e2e8f0', 15, 'center', true);
}

// ─── FASE 5: materia barionica ────────────────────────────
function drawPhase5(){
  // nubi
  [[W*0.12,H*0.45],[W*0.28,H*0.52],[W*0.44,H*0.42],[W*0.60,H*0.48]].forEach(([bx,by])=>{
    const br=55+Math.random()*10;
    const bg=ctx.createRadialGradient(bx,by,5,bx,by,br);
    bg.addColorStop(0,'rgba(30,58,138,0.22)'); bg.addColorStop(1,'rgba(0,0,0,0)');
    ctx.beginPath(); ctx.arc(bx,by,br,0,Math.PI*2); ctx.fillStyle=bg; ctx.fill();
  });

  const atomDefs=[
    {x:W*0.09,y:H*0.30,r:16,col:'#1d4ed8',lbl:'H'},
    {x:W*0.18,y:H*0.28,r:16,col:'#1d4ed8',lbl:'H'},
    {x:W*0.14,y:H*0.42,r:20,col:'#6d28d9',lbl:'He'},
    {x:W*0.28,y:H*0.35,r:18,col:'#0369a1',lbl:'C'},
    {x:W*0.37,y:H*0.30,r:16,col:'#065f46',lbl:'O'},
    {x:W*0.46,y:H*0.38,r:16,col:'#92400e',lbl:'N'},
    {x:W*0.55,y:H*0.32,r:14,col:'#7f1d1d',lbl:'Fe'},
    {x:W*0.63,y:H*0.40,r:17,col:'#581c87',lbl:'Si'},
  ];
  atomDefs.forEach(a=>{
    atomDefs.forEach(b=>{
      const d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d>0&&d<110){ ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
        ctx.strokeStyle='rgba(100,116,139,0.22)'; ctx.lineWidth=1; ctx.stroke(); }
    });
    const ag=ctx.createRadialGradient(a.x-a.r*0.3,a.y-a.r*0.3,2,a.x,a.y,a.r);
    ag.addColorStop(0,'rgba(255,255,255,0.35)'); ag.addColorStop(1,a.col);
    ctx.beginPath(); ctx.arc(a.x,a.y,a.r,0,Math.PI*2);
    ctx.fillStyle=ag; glow(a.col,8); ctx.fill(); noGlow();
    ctx.strokeStyle='rgba(255,255,255,0.15)'; ctx.lineWidth=1; ctx.stroke();
    ctx.fillStyle='#fff'; ctx.font=`bold ${Math.round(a.r*0.7)}px sans-serif`; ctx.textAlign='center';
    ctx.fillText(a.lbl,a.x,a.y+a.r*0.32);
  });

  // stella
  const sx=W*0.80, sy=H*0.50, sR=80+4*Math.sin(t*0.7);
  for(let l=3;l>=0;l--){
    const sg=ctx.createRadialGradient(sx,sy,0,sx,sy,sR*(1+l*0.28));
    sg.addColorStop(0,l===0?'#fffde7':'rgba(245,158,11,0)');
    sg.addColorStop(0.4,'rgba(253,230,138,'+(0.15-l*0.04)+')');
    sg.addColorStop(1,'rgba(0,0,0,0)');
    ctx.beginPath(); ctx.arc(sx,sy,sR*(1+l*0.28),0,Math.PI*2); ctx.fillStyle=sg; ctx.fill();
  }
  label(sx, sy+sR+22, 'Stella', '#fde68a', 12, 'center', true);
  label(sx, sy+sR+36, 'nucleosintesi → Fe, Si, C...', '#b45309', 10);

  // pianeta
  const pOrb=150, pA2=t*0.22;
  const px2=sx+pOrb*Math.cos(pA2), py2=sy+pOrb*0.38*Math.sin(pA2);
  ctx.beginPath(); ctx.ellipse(sx,sy,pOrb,pOrb*0.38,0,0,Math.PI*2);
  ctx.strokeStyle='rgba(100,116,139,0.18)'; ctx.setLineDash([3,7]); ctx.lineWidth=1; ctx.stroke(); ctx.setLineDash([]);
  const pg=ctx.createRadialGradient(px2-7,py2-7,2,px2,py2,24);
  pg.addColorStop(0,'#60a5fa'); pg.addColorStop(0.6,'#1d4ed8'); pg.addColorStop(1,'#0c1445');
  ctx.beginPath(); ctx.arc(px2,py2,24,0,Math.PI*2);
  ctx.fillStyle=pg; glow('#3b82f6',12); ctx.fill(); noGlow();
  label(px2, py2+32, 'Pianeta', '#93c5fd', 10, 'center');

  // catena in basso
  label(W*0.5, H*0.88, '─────────────────────────────────────────────────────', '#1e293b', 10);
  const chain=[
    ['Stringa aperta','#a78bfa'], ['→ Quark','#f59e0b'], ['→ Protone','#ef4444'],
    ['→ Nucleo','#dc2626'], ['→ Atomo','#38bdf8'], ['→ Molecola','#34d399'], ['→ Materia','#e2e8f0']
  ];
  chain.forEach(([s,c],i)=>{
    label(W*0.04+i*(W*0.95/chain.length), H*0.93, s, c, 11, 'left', i===0||i===6);
  });

  label(W*0.5, H*0.12, 'Materia Barionica', '#f1f5f9', 20, 'center', true);
  label(W*0.5, H*0.12+26, 'Tutta la struttura dell\'universo visibile: vibrazioni di stringhe APERTE sulla D-Brana', '#64748b', 12);
}

// ─── LOOP ────────────────────────────────────────────────
function draw(){
  ctx.clearRect(0,0,W,H);
  const bg=ctx.createRadialGradient(W/2,H/2,60,W/2,H/2,Math.max(W,H)*0.9);
  bg.addColorStop(0,'#020617'); bg.addColorStop(1,'#000008');
  ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
  drawStars();
  switch(phase){
    case 0: drawPhase0(); break;
    case 1: drawPhase1(); break;
    case 2: drawPhase2(); break;
    case 3: drawPhase3(); break;
    case 4: drawPhase4(); break;
    case 5: drawPhase5(); break;
  }
  t+=0.025; phaseT++;
  if(phaseT>500&&phase<5) setPhase(phase+1);
  updateUI();
  requestAnimationFrame(draw);
}
setPhase(0);
draw();
</script>
</body>
</html>
```

---

## Riepilogo della fisica corretta 🔬

| | Stringa **aperta** | Stringa **chiusa** |
|---|---|---|
| **Forma** | Due estremi liberi | Loop chiuso |
| **Vincolo** | Ancorata alla D-Brana | Libera nel bulk 10D |
| **Genera** | Fotoni, gluoni, quark, elettroni | **Gravitone** (spin 2) |
| **Forza** | Forze del Modello Standard | Gravità |
| **Perché la gravità è debole** | — | Si disperde in tutte le 10 dimensioni |

> **Il tuo punto era esattissimo**: la confusione stringa aperta/chiusa è uno degli errori più comuni nella divulgazione. La stringa chiusa non è "la stringa generica" — è specificamente il gravitone, e il fatto che non sia confinata alla brana spiega direttamente il **problema della gerarchia** (perché la gravità è 10³⁸ volte più debole dell'elettromagnetismo).

## @Vicianzu

bellissimo, salva tutti i file che hai generato in una nuova cartella "canva" 

## Copilot

We're waiting for your response to the tool call to continue — please accept or reject it to proceed with uploading the remaining files.

## @Vicianzu

@Copilot Accepted Confirmation: Are you sure?

## Copilot



## @Vicianzu

adesso genera animazione approfondita di ads/cft, con le varie fasi della d brana che curva lo spaziotempo, il bordo il bulk ecc. 

## Copilot

```html name=ads_cft.html
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>AdS/CFT — Corrispondenza Olografica</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { background:#000010; color:#e2e8f0; font-family:'Georgia',serif; overflow:hidden; }
#canvas { display:block; }

#ui {
  position:fixed; top:0; left:0; right:0;
  display:flex; justify-content:space-between; align-items:center;
  padding:11px 22px;
  background:rgba(0,0,16,0.92);
  border-bottom:1px solid #1e293b;
  z-index:100; gap:12px;
}
#title    { font-size:13px; color:#38bdf8; letter-spacing:3px; text-transform:uppercase; white-space:nowrap; }
#phase-desc { font-size:11.5px; color:#94a3b8; text-align:center; line-height:1.5; max-width:560px; }
#phase-name { font-size:14px; color:#7dd3fc; font-weight:bold; text-align:right; white-space:nowrap; }

#bottom {
  position:fixed; bottom:0; left:0; right:0;
  padding:9px 20px;
  background:rgba(0,0,16,0.92);
  border-top:1px solid #1e293b;
  display:flex; justify-content:center; gap:8px; z-index:100; flex-wrap:wrap;
}
.btn {
  padding:6px 14px; border:1px solid #1e3a5f;
  background:#0c1a2e; color:#7dd3fc;
  border-radius:20px; cursor:pointer; font-size:11px; transition:all 0.3s;
}
.btn:hover, .btn.active { background:#0c4a6e; border-color:#38bdf8; color:#e0f2fe; }

#panel {
  position:fixed; right:14px; top:66px;
  width:200px;
  background:rgba(8,14,30,0.94);
  border:1px solid #1e3a5f; border-radius:10px;
  padding:13px; font-size:11px; color:#64748b;
  line-height:1.7; z-index:100;
}
#panel h3 { color:#38bdf8; font-size:12px; margin-bottom:8px;
  border-bottom:1px solid #1e293b; padding-bottom:5px; letter-spacing:1px; }
.pr { display:flex; justify-content:space-between; margin-bottom:3px; }
.pv { color:#e2e8f0; font-weight:bold; }
.leg { display:flex; align-items:center; gap:7px; margin-bottom:5px; }
.ld  { width:18px; height:3px; border-radius:2px; }
</style>
</head>
<body>
<div id="ui">
  <div id="title">AdS/CFT</div>
  <div id="phase-desc">—</div>
  <div id="phase-name">—</div>
</div>
<canvas id="canvas"></canvas>
<div id="panel">
  <h3>DIZIONARIO</h3>
  <div class="pr"><span>Fase:</span><span class="pv" id="s-phase">—</span></div>
  <div class="pr"><span>Dim. bulk:</span><span class="pv" id="s-bulk">AdS₅</span></div>
  <div class="pr"><span>Dim. bordo:</span><span class="pv" id="s-bdy">CFT₄</span></div>
  <div class="pr"><span>N D3-brane:</span><span class="pv" id="s-n">N≫1</span></div>
  <hr style="border-color:#1e293b;margin:8px 0;">
  <div class="leg"><div class="ld" style="background:#38bdf8;"></div><span>Bordo CFT (4D)</span></div>
  <div class="leg"><div class="ld" style="background:#7c3aed;"></div><span>Bulk AdS (5D+)</span></div>
  <div class="leg"><div class="ld" style="background:#f59e0b;"></div><span>D3-Brane</span></div>
  <div class="leg"><div class="ld" style="background:#4ade80; height:1px; border-top:1px dashed #4ade80;"></div><span>Geodetica bulk</span></div>
  <div class="leg"><div class="ld" style="background:#f97316;"></div><span>Stringa aperta</span></div>
  <hr style="border-color:#1e293b;margin:8px 0;">
  <div style="font-size:10px;color:#334155;line-height:1.5;">
    Maldacena 1997<br>
    AdS₅×S⁵ ↔ 𝒩=4 SYM<br>
    N→∞, gs→0<br>
    λ=g²ₛN — 't Hooft coupling
  </div>
</div>
<div id="bottom">
  <button class="btn active"  onclick="go(0)">① D-Brane pile-up</button>
  <button class="btn"         onclick="go(1)">② Curvatura spaziotempo</button>
  <button class="btn"         onclick="go(2)">③ Geometria AdS</button>
  <button class="btn"         onclick="go(3)">④ Bulk vs Bordo</button>
  <button class="btn"         onclick="go(4)">⑤ Dualità olografica</button>
  <button class="btn"         onclick="go(5)">⑥ Dizionario AdS/CFT</button>
  <button class="btn"         onclick="go(6)">⑦ Ologramma completo</button>
</div>

<script>
const cv=document.getElementById('canvas');
const cx=cv.getContext('2d');
let W,H;
function resize(){W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;}
resize(); window.addEventListener('resize',resize);

let ph=0, T=0, pT=0;

const PHASES=[
  { name:"Stack di N D3-Brane",
    desc:"N D3-brane identiche si sovrappongono. Le stringhe aperte tese tra di esse generano il campo di gauge SU(N). L'accoppiamento cresce con N." },
  { name:"Le brane curvano lo spaziotempo",
    desc:"Lo stack massiccio di brane deforma la metrica: crea un 'pozzo gravitazionale' nelle 10 dimensioni. La curvatura è proporzionale a N·gₛ·α'²." },
  { name:"Geometria Anti-de Sitter (AdS₅×S⁵)",
    desc:"Vicino alle brane la geometria diventa AdS₅×S⁵. AdS è uno spaziotempo iperbolico a curvatura negativa costante. La costante cosmologica è Λ<0." },
  { name:"Bulk e Bordo",
    desc:"Il Bulk è l'interno AdS₅ (5D, con gravità). Il Bordo è il confine a r→∞: uno spaziotempo piatto 4D su cui vive la CFT. Il bordo è 'infinitamente lontano' ma raggiungiuto dalle geodetiche in tempo finito." },
  { name:"Dualità: gravità nel bulk ↔ CFT sul bordo",
    desc:"Maldacena: la stringa IIB nel bulk AdS₅×S⁵ è ESATTAMENTE equivalente alla teoria di gauge 𝒩=4 Super Yang-Mills 4D sul bordo. Una è la riformulazione olografica dell'altra." },
  { name:"Dizionario AdS/CFT",
    desc:"Ogni oggetto bulk ha un corrispondente sul bordo. Massa della particella bulk ↔ dimensione dell'operatore CFT. Campo scalare φ↔ operatore O. Black hole AdS ↔ stato termico CFT (T Hawking = T CFT)." },
  { name:"Il principio olografico completo",
    desc:"La fisica del bulk 5D è completamente codificata sul bordo 4D. Come un ologramma 3D su una lastra 2D. Entropia di Bekenstein-Hawking = entropia della CFT. La gravità è emergente." }
];

function go(n){
  ph=n; pT=0;
  document.querySelectorAll('.btn').forEach((b,i)=>b.classList.toggle('active',i===n));
  document.getElementById('s-phase').textContent=(n+1)+'/7';
  updateUI();
}
function updateUI(){
  document.getElementById('phase-desc').textContent=PHASES[ph].desc;
  document.getElementById('phase-name').textContent=PHASES[ph].name;
}

// ── helpers ───────────────────────────────────────────────
function lbl(x,y,txt,col,sz,al='center',bold=false){
  cx.fillStyle=col;
  cx.font=`${bold?'bold ':''}${sz}px Georgia,serif`;
  cx.textAlign=al; cx.fillText(txt,x,y);
}
function glow(c,b){cx.shadowColor=c;cx.shadowBlur=b;}
function ng(){cx.shadowBlur=0;}

let _stars=null;
function stars(){
  if(!_stars)_stars=Array.from({length:180},()=>({
    x:Math.random()*3000,y:Math.random()*2000,
    r:Math.random()*1.3+0.2,o:Math.random()*0.4+0.1
  }));
  _stars.forEach(s=>{
    cx.beginPath();cx.arc(s.x,s.y,s.r,0,Math.PI*2);
    cx.fillStyle=`rgba(255,255,255,${s.o*(0.5+0.5*Math.sin(T*0.3+s.x*0.01))})`;
    cx.fill();
  });
}

function bg(){
  const g=cx.createRadialGradient(W/2,H/2,80,W/2,H/2,Math.max(W,H)*0.9);
  g.addColorStop(0,'#020920');g.addColorStop(1,'#000010');
  cx.fillStyle=g;cx.fillRect(0,0,W,H);
}

// ── FASE 0: stack D3-brane ────────────────────────────────
function ph0(){
  const cx2=W*0.5, cy2=H*0.5;
  const N=8, sep=18, bW=W*0.55, bH=28;

  // stringhe aperte tra brane (vibranti)
  for(let i=0;i<N-1;i++){
    for(let s=0;s<3;s++){
      const y0=cy2-(N/2)*sep+i*sep+sep;
      const y1=cy2-(N/2)*sep+(i+1)*sep;
      const x0=cx2-bW/2+W*0.08+s*W*0.12+Math.sin(T*0.3+s)*W*0.04;
      cx.beginPath();
      const steps=30;
      for(let k=0;k<=steps;k++){
        const f=k/steps;
        const env=Math.sin(Math.PI*f);
        const xw=x0+12*env*Math.sin(4*Math.PI*f-T*3+s);
        const yw=y0+(y1-y0)*f;
        k===0?cx.moveTo(xw,yw):cx.lineTo(xw,yw);
      }
      cx.strokeStyle=`hsl(${30+s*40},80%,60%)`;
      cx.lineWidth=1.5;glow(`hsl(${30+s*40},80%,60%)`,6);cx.stroke();ng();
    }
  }

  // brane
  for(let i=0;i<N;i++){
    const by=cy2-(N/2)*sep+i*sep;
    const alpha=0.55+0.3*(i/(N-1));
    const grad=cx.createLinearGradient(cx2-bW/2,by,cx2+bW/2,by+bH);
    grad.addColorStop(0,`rgba(245,158,11,${alpha*0.9})`);
    grad.addColorStop(0.5,`rgba(253,230,138,${alpha})`);
    grad.addColorStop(1,`rgba(180,83,9,${alpha*0.7})`);
    // ombra prospettica
    cx.beginPath();
    cx.ellipse(cx2,by+bH/2+4,bW/2,bH*0.22,0,0,Math.PI*2);
    cx.fillStyle='rgba(0,0,0,0.3)';cx.fill();
    // corpo
    cx.beginPath();
    cx.roundRect(cx2-bW/2,by,bW,bH,4);
    cx.fillStyle=grad;glow('#f59e0b',10);cx.fill();ng();
    cx.strokeStyle='rgba(253,230,138,0.5)';cx.lineWidth=1;cx.stroke();
    if(i===0||i===N-1||i===N/2|0){
      lbl(cx2+bW/2+10, by+bH/2+4, `D3`, '#fde68a', 10, 'left');
    }
  }

  // etichetta SU(N)
  lbl(cx2, cy2-(N/2)*sep-30, `Stack di N=${N} D3-Brane`, '#fde68a', 16, 'center', true);
  lbl(cx2, cy2-(N/2)*sep-12, 'Stringhe aperte tese tra brane → gauge field SU(N)', '#b45309', 11);
  lbl(cx2, cy2+(N/2)*sep+bH+18, 'Con N→∞ e gₛ→0  ma  λ=gₛN fisso:', '#64748b', 11);
  lbl(cx2, cy2+(N/2)*sep+bH+34, 'teoria di gauge SU(N) in regime di coupling forte', '#38bdf8', 11);

  // frecce lato
  const arY=cy2-(N/2)*sep;
  cx.beginPath();cx.moveTo(cx2-bW/2-30,arY);cx.lineTo(cx2-bW/2-30,arY+(N-1)*sep+bH);
  cx.strokeStyle='rgba(245,158,11,0.4)';cx.lineWidth=1.5;
  cx.setLineDash([4,5]);cx.stroke();cx.setLineDash([]);
  lbl(cx2-bW/2-42, cy2+4, 'N', '#f59e0b', 13, 'center', true);
}

// ── FASE 1: curvatura spaziotempo ─────────────────────────
function ph1(){
  const ox=W*0.5, oy=H*0.52;
  const gW=W*0.7, gH=H*0.5;
  const cols=18, rows=14;

  // griglia warped
  for(let r=0;r<=rows;r++){
    cx.beginPath();
    for(let c=0;c<=cols;c++){
      const fx=c/cols, fy=r/rows;
      const dx=fx-0.5, dy=fy-0.5;
      const dist=Math.sqrt(dx*dx+dy*dy);
      const warp=0.38*Math.exp(-dist*dist*8);
      const px=(fx-0.5)*gW+ox;
      const py=(fy-0.5)*gH+oy + warp*H*0.35 + 4*Math.sin(T*0.4+c*0.3)*warp;
      c===0?cx.moveTo(px,py):cx.lineTo(px,py);
    }
    cx.strokeStyle=`rgba(56,189,248,${0.08+0.18*(r/rows)})`;cx.lineWidth=0.8;cx.stroke();
  }
  for(let c=0;c<=cols;c++){
    cx.beginPath();
    for(let r=0;r<=rows;r++){
      const fx=c/cols, fy=r/rows;
      const dx=fx-0.5, dy=fy-0.5;
      const dist=Math.sqrt(dx*dx+dy*dy);
      const warp=0.38*Math.exp(-dist*dist*8);
      const px=(fx-0.5)*gW+ox;
      const py=(fy-0.5)*gH+oy + warp*H*0.35 + 4*Math.sin(T*0.4+c*0.3)*warp;
      r===0?cx.moveTo(px,py):cx.lineTo(px,py);
    }
    cx.strokeStyle=`rgba(56,189,248,${0.08+0.18*(c/cols)})`;cx.lineWidth=0.8;cx.stroke();
  }

  // massa centrale (stack brane)
  const mGrad=cx.createRadialGradient(ox,oy+H*0.16,5,ox,oy+H*0.16,38);
  mGrad.addColorStop(0,'#fde68a');mGrad.addColorStop(0.4,'#f59e0b');mGrad.addColorStop(1,'rgba(180,83,9,0)');
  cx.beginPath();cx.arc(ox,oy+H*0.16,38,0,Math.PI*2);
  cx.fillStyle=mGrad;glow('#f59e0b',20);cx.fill();ng();
  lbl(ox,oy+H*0.16+5,'N·D3','#fde68a',11,'center',true);

  // frecce curvatura
  for(let a=0;a<8;a++){
    const ang=(a/8)*Math.PI*2;
    const r1=50,r2=20;
    const x1=ox+r1*Math.cos(ang), y1=oy+H*0.16+r1*Math.sin(ang)*0.5;
    const x2=ox+r2*Math.cos(ang), y2=oy+H*0.16+r2*Math.sin(ang)*0.5;
    cx.beginPath();cx.moveTo(x1,y1);cx.lineTo(x2,y2);
    cx.strokeStyle='rgba(245,158,11,0.4)';cx.lineWidth=1;cx.stroke();
  }

  lbl(W*0.5, H*0.12, 'Curvatura dello spaziotempo', '#7dd3fc', 18, 'center', true);
  lbl(W*0.5, H*0.12+24, 'La massa-energia delle N brane deforma la metrica gμν', '#64748b', 12);
  lbl(W*0.5, H*0.12+40, 'Rμν − ½gμνR = 8πG Tμν', '#38bdf8', 11);

  lbl(W*0.14, H*0.6, 'spaziotempo piatto', '#334155', 10);
  lbl(W*0.5, H*0.88, '→ al limite N→∞: geometria AdS₅×S⁵', '#a78bfa', 13, 'center', true);
}

// ── FASE 2: geometria AdS ─────────────────────────────────
function ph2(){
  const ox=W*0.42, oy=H*0.52;
  const R=Math.min(W,H)*0.33;

  // disco di Poincaré (modello del disco per AdS2D)
  // cerchi isocoordinate
  for(let k=1;k<=9;k++){
    const r2=R*(k/9);
    const col=k<4?'rgba(124,58,237,0.5)':k<7?'rgba(56,189,248,0.3)':'rgba(56,189,248,0.15)';
    cx.beginPath();cx.arc(ox,oy,r2,0,Math.PI*2);
    cx.strokeStyle=col;cx.lineWidth=k===1?2:0.8;cx.stroke();
  }
  // linee geodetiche (archi di cerchio passanti per bordo)
  const geodetics=[
    [0.1,0.9],[0.2,0.8],[0.3,0.7],[0.15,0.75],[0.05,0.55],
    [-0.1,-0.9],[-0.2,-0.8],[-0.3,-0.7],
    [0.5,0.5*0.8],[0.5,-0.5*0.8],[-0.5,0.5*0.8],[-0.5,-0.5*0.8]
  ];
  geodetics.forEach(([dx,dy])=>{
    const x1=ox+R*dx, y1=oy+R*dy;
    const x2=ox+R*(-dy), y2=oy+R*dx;
    cx.beginPath();cx.moveTo(x1,y1);cx.lineTo(x2,y2);
    cx.strokeStyle='rgba(74,222,128,0.12)';cx.lineWidth=0.8;cx.stroke();
  });

  // bordo del cerchio
  const bGrad=cx.createLinearGradient(ox-R,oy,ox+R,oy);
  bGrad.addColorStop(0,'rgba(56,189,248,0)');
  bGrad.addColorStop(0.3,'rgba(56,189,248,0.7)');
  bGrad.addColorStop(0.7,'rgba(56,189,248,0.7)');
  bGrad.addColorStop(1,'rgba(56,189,248,0)');
  cx.beginPath();cx.arc(ox,oy,R,0,Math.PI*2);
  cx.strokeStyle='#38bdf8';cx.lineWidth=3;glow('#38bdf8',16);cx.stroke();ng();

  // centro
  cx.beginPath();cx.arc(ox,oy,12,0,Math.PI*2);
  const cG=cx.createRadialGradient(ox-4,oy-4,1,ox,oy,12);
  cG.addColorStop(0,'#fde68a');cG.addColorStop(1,'rgba(180,83,9,0)');
  cx.fillStyle=cG;glow('#f59e0b',20);cx.fill();ng();

  // asse radiale r
  cx.beginPath();cx.moveTo(ox,oy);cx.lineTo(ox+R,oy);
  cx.strokeStyle='rgba(148,163,184,0.4)';cx.lineWidth=1.5;
  cx.setLineDash([5,5]);cx.stroke();cx.setLineDash([]);
  lbl(ox+R/2,oy-10,'r (coordinata radiale AdS)','#64748b',10);
  lbl(ox+R+8,oy,'r→∞','#38bdf8',11,'left');
  lbl(ox-10,oy,'r=0','#fde68a',11,'right');

  // metrica
  const bx2=W*0.76, bH2=H*0.38;
  cx.fillStyle='rgba(8,14,30,0.9)';
  cx.beginPath();cx.roundRect(bx2,bH2,W*0.22,H*0.28,8);cx.fill();
  cx.strokeStyle='#1e3a5f';cx.lineWidth=1;cx.stroke();
  lbl(bx2+W*0.11,bH2+18,'Metrica AdS₅','#38bdf8',12,'center',true);
  lbl(bx2+W*0.11,bH2+38,'ds² = L²/z² (dz²+dx²μ)','#a78bfa',11,'center');
  lbl(bx2+W*0.11,bH2+56,'z → 0  :  bordo (UV)','#60a5fa',10,'center');
  lbl(bx2+W*0.11,bH2+70,'z → ∞  :  centro (IR)','#7c3aed',10,'center');
  lbl(bx2+W*0.11,bH2+90,'Λ = −6/L²  <  0','#94a3b8',10,'center');
  lbl(bx2+W*0.11,bH2+106,'Curvatura cost. negativa','#64748b',9,'center');
  lbl(bx2+W*0.11,bH2+120,'Isometrie ≅ SO(2,4)','#64748b',9,'center');
  lbl(bx2+W*0.11,bH2+134,'= gruppo conforme 4D ✓','#4ade80',9,'center');

  lbl(ox,oy+R+28,'Modello del disco di Poincaré per AdS','#7dd3fc',14,'center',true);
  lbl(ox,oy+R+46,'Il bordo (cerchio) = spaziotempo 4D piatto (Minkowski)','#64748b',11);
  lbl(ox,oy-R-20,'BULK AdS₅','#7c3aed',13,'center',true);
  lbl(ox,oy-R-6,'(con gravità, 5 dimensioni)','#475569',10);

  // etichette bordo
  for(let a=0;a<6;a++){
    const ang=(a/6)*Math.PI*2+T*0.1;
    const bx3=ox+R*Math.cos(ang), by3=oy+R*Math.sin(ang);
    cx.beginPath();cx.arc(bx3,by3,3,0,Math.PI*2);
    cx.fillStyle='#38bdf8';cx.fill();
  }
  lbl(W*0.5,H*0.1,'Geometria Anti-de Sitter','#f1f5f9',18,'center',true);
  lbl(W*0.5,H*0.1+22,'Spaziotempo con curvatura negativa costante — il "palcoscenico" della dualità','#64748b',12);
}

// ── FASE 3: bulk vs bordo ─────────────────────────────────
function ph3(){
  const ox=W*0.5, R=Math.min(W*0.36,H*0.34);
  const oy=H*0.52;

  // --- cilindro AdS (rappresentazione ESU) ---
  // ombra
  cx.beginPath();cx.ellipse(ox,oy+R*0.78,R*0.88,R*0.15,0,0,Math.PI*2);
  cx.fillStyle='rgba(0,0,0,0.4)';cx.fill();

  // faccia inferiore
  cx.beginPath();cx.ellipse(ox,oy+R*0.72,R*0.88,R*0.18,0,0,Math.PI*2);
  const botG=cx.createRadialGradient(ox,oy+R*0.72,10,ox,oy+R*0.72,R*0.88);
  botG.addColorStop(0,'#1e1b4b');botG.addColorStop(1,'#0c0a1e');
  cx.fillStyle=botG;cx.fill();
  cx.strokeStyle='rgba(124,58,237,0.5)';cx.lineWidth=1.5;cx.stroke();

  // lati del cilindro
  cx.beginPath();cx.moveTo(ox-R*0.88,oy-R*0.68);cx.lineTo(ox-R*0.88,oy+R*0.72);
  cx.strokeStyle='rgba(56,189,248,0.2)';cx.lineWidth=1;cx.stroke();
  cx.beginPath();cx.moveTo(ox+R*0.88,oy-R*0.68);cx.lineTo(ox+R*0.88,oy+R*0.72);
  cx.strokeStyle='rgba(56,189,248,0.2)';cx.lineWidth=1;cx.stroke();

  // riempimento bulk (gradiente radiale)
  const bulkFill=cx.createRadialGradient(ox,oy,10,ox,oy,R*0.7);
  bulkFill.addColorStop(0,'rgba(124,58,237,0.22)');
  bulkFill.addColorStop(0.6,'rgba(56,189,248,0.07)');
  bulkFill.addColorStop(1,'rgba(0,0,16,0)');
  cx.beginPath();cx.ellipse(ox,oy,R*0.88,R*0.78,0,0,Math.PI*2);
  cx.fillStyle=bulkFill;cx.fill();

  // geodetiche nel bulk
  for(let g=0;g<8;g++){
    const a=(g/8)*Math.PI*2+T*0.04;
    const bx3=ox+R*0.85*Math.cos(a), by3=oy+R*0.7*Math.sin(a)*0.82;
    cx.beginPath();
    cx.moveTo(bx3,by3);
    cx.quadraticCurveTo(ox+R*0.1*Math.cos(a+0.5),oy+R*0.08*Math.sin(a+0.5)*0.82, ox,oy);
    cx.strokeStyle='rgba(74,222,128,0.12)';cx.lineWidth=1;
    cx.setLineDash([4,6]);cx.stroke();cx.setLineDash([]);
  }

  // faccia superiore (bordo CFT)
  cx.beginPath();cx.ellipse(ox,oy-R*0.68,R*0.88,R*0.18,0,0,Math.PI*2);
  const topG=cx.createRadialGradient(ox,oy-R*0.68,5,ox,oy-R*0.68,R*0.88);
  topG.addColorStop(0,'rgba(56,189,248,0.25)');
  topG.addColorStop(0.7,'rgba(56,189,248,0.12)');
  topG.addColorStop(1,'rgba(56,189,248,0.05)');
  cx.fillStyle=topG;glow('#38bdf8',18);cx.fill();ng();
  cx.strokeStyle='#38bdf8';cx.lineWidth=2.5;cx.stroke();

  // operatori sul bordo (punti luminosi)
  for(let p=0;p<10;p++){
    const a2=(p/10)*Math.PI*2+T*0.15;
    const r2=R*0.5*(0.3+0.6*((p%3)/2));
    const px2=ox+r2*Math.cos(a2), py2=oy-R*0.68+r2*0.18*Math.sin(a2);
    cx.beginPath();cx.arc(px2,py2,3+Math.sin(T*1.5+p)*1.2,0,Math.PI*2);
    cx.fillStyle=`hsl(${200+p*16},90%,70%)`;glow(`hsl(${200+p*16},90%,60%)`,8);cx.fill();ng();
  }

  // particella nel bulk
  const partA=T*0.4;
  const partR=R*0.38;
  const partX=ox+partR*Math.cos(partA), partY=oy+partR*0.6*Math.sin(partA);
  cx.beginPath();cx.arc(partX,partY,7,0,Math.PI*2);
  const pGr=cx.createRadialGradient(partX-2,partY-2,1,partX,partY,7);
  pGr.addColorStop(0,'#fff');pGr.addColorStop(1,'#a78bfa');
  cx.fillStyle=pGr;glow('#a78bfa',15);cx.fill();ng();
  lbl(partX+14,partY+4,'φ(r,x)','#c4b5fd',10,'left');

  // asse z
  cx.beginPath();cx.moveTo(ox+R*0.95,oy+R*0.6);cx.lineTo(ox+R*0.95,oy-R*0.75);
  cx.strokeStyle='rgba(148,163,184,0.35)';cx.lineWidth=1;cx.stroke();
  lbl(ox+R*0.95+8,oy+R*0.6,'z→∞ (IR)','#7c3aed',9,'left');
  lbl(ox+R*0.95+8,oy-R*0.75,'z→0 (UV)','#38bdf8',9,'left');

  // etichette
  lbl(ox,oy-R*0.68-22,'BORDO (r→∞)','#38bdf8',14,'center',true);
  lbl(ox,oy-R*0.68-6,'CFT₄ — teoria quantistica di campo senza gravità','#60a5fa',10);
  lbl(ox,oy+8,'BULK','#7c3aed',20,'center',true);
  lbl(ox,oy+28,'AdS₅','#a78bfa',13,'center');
  lbl(ox,oy+44,'gravità + stringhe','#64748b',10);
  lbl(ox,oy+R*0.68+22,'Dimensione extra (radiale)','#64748b',10,'center');
  lbl(ox,oy+R*0.68+36,'r = scala di energia nella CFT','#475569',9,'center');

  lbl(W*0.5,H*0.1,'Bulk AdS₅ e il suo Bordo','#f1f5f9',18,'center',true);
  lbl(W*0.5,H*0.1+22,'La dimensione radiale di AdS = scala di energia (RG flow) nella CFT','#64748b',12);
}

// ── FASE 4: dualità ───────────────────────────────────────
function ph4(){
  const lx=W*0.22, rx=W*0.78, my=H*0.50;

  // --- lato sinistro: BULK ---
  const bulkR=H*0.28;
  cx.beginPath();cx.arc(lx,my,bulkR,0,Math.PI*2);
  const bG=cx.createRadialGradient(lx-20,my-20,10,lx,my,bulkR);
  bG.addColorStop(0,'rgba(124,58,237,0.35)');bG.addColorStop(1,'rgba(14,0,40,0.5)');
  cx.fillStyle=bG;cx.fill();
  cx.strokeStyle='#7c3aed';cx.lineWidth=2;glow('#7c3aed',12);cx.stroke();ng();

  // particelle nel bulk
  for(let p=0;p<6;p++){
    const a=(p/6)*Math.PI*2+T*0.3*(p%2?1:-1);
    const r=bulkR*(0.3+0.4*(p%3)/2);
    const px2=lx+r*Math.cos(a), py2=my+r*0.7*Math.sin(a);
    cx.beginPath();cx.arc(px2,py2,5,0,Math.PI*2);
    cx.fillStyle=`hsl(${260+p*20},80%,70%)`;glow(`hsl(${260+p*20},80%,60%)`,8);cx.fill();ng();
  }
  // stringa nel bulk
  cx.beginPath();
  for(let k=0;k<=60;k++){
    const f=k/60, a=f*Math.PI*3+T*0.5;
    const r=bulkR*0.5*f;
    const px2=lx+r*Math.cos(a), py2=my+r*0.7*Math.sin(a);
    k===0?cx.moveTo(px2,py2):cx.lineTo(px2,py2);
  }
  cx.strokeStyle='rgba(167,139,250,0.6)';cx.lineWidth=1.5;
  cx.setLineDash([4,4]);cx.stroke();cx.setLineDash([]);

  lbl(lx,my-bulkR-20,'BULK','#a78bfa',16,'center',true);
  lbl(lx,my-bulkR-4, 'Stringa IIB in AdS₅×S⁵','#7c3aed',11);
  lbl(lx,my,'Gravità quantistica','#c4b5fd',13,'center',true);
  lbl(lx,my+18,'+ stringhe + brane','#7c3aed',10);
  lbl(lx,my+bulkR+16,'5 dimensioni','#64748b',10,'center');

  // --- simbolo ≡ al centro ---
  lbl(W*0.5,my-12,'=','#4ade80',52,'center',true);
  lbl(W*0.5,my+28,'ESATTAMENTE','#4ade80',11,'center',true);
  lbl(W*0.5,my+42,'equivalenti','#4ade80',10);

  // frecce doppia
  cx.beginPath();cx.moveTo(lx+bulkR+10,my);cx.lineTo(W*0.5-25,my);
  cx.strokeStyle='rgba(74,222,128,0.5)';cx.lineWidth=2;
  cx.setLineDash([6,4]);cx.stroke();cx.setLineDash([]);
  cx.beginPath();cx.moveTo(rx-bulkR-10,my);cx.lineTo(W*0.5+25,my);
  cx.strokeStyle='rgba(74,222,128,0.5)';cx.lineWidth=2;
  cx.setLineDash([6,4]);cx.stroke();cx.setLineDash([]);

  // --- lato destro: BORDO CFT ---
  cx.beginPath();cx.arc(rx,my,bulkR,0,Math.PI*2);
  const bG2=cx.createRadialGradient(rx-20,my-20,10,rx,my,bulkR);
  bG2.addColorStop(0,'rgba(56,189,248,0.35)');bG2.addColorStop(1,'rgba(0,14,40,0.5)');
  cx.fillStyle=bG2;cx.fill();
  cx.strokeStyle='#38bdf8';cx.lineWidth=2;glow('#38bdf8',12);cx.stroke();ng();

  // linee di campo CFT
  for(let l=0;l<8;l++){
    const a=(l/8)*Math.PI*2;
    const r1=bulkR*0.2, r2=bulkR*0.8;
    cx.beginPath();
    const steps2=30;
    for(let k=0;k<=steps2;k++){
      const f=k/steps2, r=r1+(r2-r1)*f;
      const wiggle=5*Math.sin(4*Math.PI*f+T*2+l);
      const px2=rx+(r+wiggle)*Math.cos(a+(0.3*Math.sin(T*0.5+l)));
      const py2=my+(r+wiggle)*0.7*Math.sin(a+(0.3*Math.sin(T*0.5+l)));
      k===0?cx.moveTo(px2,py2):cx.lineTo(px2,py2);
    }
    cx.strokeStyle=`rgba(56,189,248,${0.15+0.1*(l%3)})`;cx.lineWidth=1.2;cx.stroke();
  }

  lbl(rx,my-bulkR-20,'BORDO','#38bdf8',16,'center',true);
  lbl(rx,my-bulkR-4,'𝒩=4 Super Yang-Mills','#60a5fa',11);
  lbl(rx,my,'Campo di gauge SU(N)','#7dd3fc',13,'center',true);
  lbl(rx,my+18,'senza gravità','#38bdf8',10);
  lbl(rx,my+bulkR+16,'4 dimensioni','#64748b',10,'center');

  lbl(W*0.5,H*0.1,'AdS/CFT — La Dualità Olografica','#f1f5f9',18,'center',true);
  lbl(W*0.5,H*0.1+24,'Juan Maldacena, 1997 — una delle corrispondenze più profonde della fisica teorica','#64748b',12);

  // box Maldacena
  cx.fillStyle='rgba(8,14,30,0.88)';
  cx.beginPath();cx.roundRect(W*0.5-130,H*0.82,260,50,8);cx.fill();
  cx.strokeStyle='#1e3a5f';cx.lineWidth=1;cx.stroke();
  lbl(W*0.5,H*0.82+18,'Stringa IIB / AdS₅×S⁵','#a78bfa',11,'center',true);
  lbl(W*0.5,H*0.82+34,'↕','#4ade80',13,'center');
  lbl(W*0.5,H*0.82+50,'𝒩=4 SYM  SU(N), d=4','#38bdf8',11,'center',true);
}

// ── FASE 5: dizionario ────────────────────────────────────
function ph5(){
  const entries=[
    { bulk:'Campo scalare  φ(z,x)',      arrow:'↔', bdy:'Operatore O (dim. Δ)',       col:'#a78bfa' },
    { bulk:'Massa  m²L²=Δ(Δ−4)',        arrow:'↔', bdy:'Dimensione conforme Δ',       col:'#60a5fa' },
    { bulk:'Black Hole AdS (TH)',        arrow:'↔', bdy:'Stato termico CFT  (T=TH)',   col:'#f59e0b' },
    { bulk:'Orizzonte degli eventi',     arrow:'↔', bdy:'Entropia di Von Neumann',     col:'#ef4444' },
    { bulk:'Stringa (endpoint su bdy)',  arrow:'↔', bdy:'Operatore di Wilson W[C]',    col:'#f97316' },
    { bulk:'Gravitone  gμν',            arrow:'↔', bdy:'Tensore energia-impulso Tμν', col:'#4ade80'  },
    { bulk:'Campo di gauge Aμ (bulk)',   arrow:'↔', bdy:'Corrente conservata Jμ',      col:'#38bdf8' },
    { bulk:'Azione on-shell SUGRA',      arrow:'↔', bdy:'Funzione generatrice W[J]',   col:'#c4b5fd' },
  ];

  lbl(W*0.5,H*0.1,'Dizionario AdS/CFT','#f1f5f9',20,'center',true);
  lbl(W*0.5,H*0.1+26,'Ogni oggetto fisico nel bulk ha un esatto corrispondente nella CFT sul bordo','#64748b',12);

  const headerY=H*0.2;
  const lCol=W*0.08, rCol=W*0.58, mCol=W*0.5;
  const rowH=H*0.08;

  // header
  cx.fillStyle='rgba(8,14,30,0.9)';
  cx.beginPath();cx.roundRect(lCol,headerY-20,W*0.38,28,5);cx.fill();
  cx.beginPath();cx.roundRect(rCol,headerY-20,W*0.38,28,5);cx.fill();
  lbl(lCol+W*0.19,headerY,'BULK  (AdS₅, con gravità)','#7c3aed',13,'center',true);
  lbl(rCol+W*0.19,headerY,'BORDO  (CFT₄, senza gravità)','#38bdf8',13,'center',true);
  lbl(mCol,headerY,'↔','#4ade80',14,'center',true);

  entries.forEach((e,i)=>{
    const y=headerY+rowH*(i+1);
    const pulse=0.7+0.3*Math.sin(T*1.5+i*0.7);

    // riga di sfondo alternata
    if(i%2===0){
      cx.fillStyle='rgba(255,255,255,0.02)';
      cx.beginPath();cx.roundRect(lCol-5,y-14,W*0.88+10,rowH-2,4);cx.fill();
    }

    // bulk
    cx.fillStyle='rgba(124,58,237,0.1)';
    cx.beginPath();cx.roundRect(lCol,y-14,W*0.37,rowH-4,5);cx.fill();
    cx.strokeStyle=e.col+'44';cx.lineWidth=1;cx.stroke();
    lbl(lCol+10,y+4,e.bulk,e.col,12,'left');

    // freccia centrale pulsante
    cx.globalAlpha=pulse;
    lbl(mCol,y+4,'↔','#4ade80',16,'center',true);
    cx.globalAlpha=1;

    // boundary
    cx.fillStyle='rgba(56,189,248,0.08)';
    cx.beginPath();cx.roundRect(rCol,y-14,W*0.37,rowH-4,5);cx.fill();
    cx.strokeStyle=e.col+'44';cx.lineWidth=1;cx.stroke();
    lbl(rCol+10,y+4,e.bdy,e.col,12,'left');
  });

  // formula GKPW
  const fy=H*0.88;
  cx.fillStyle='rgba(8,14,30,0.92)';
  cx.beginPath();cx.roundRect(W*0.5-220,fy-16,440,46,8);cx.fill();
  cx.strokeStyle='#4ade80';cx.lineWidth=1;cx.stroke();
  lbl(W*0.5,fy+2,'Formula GKPW:   ⟨e∫Jᵢ·Oⁱ⟩CFT = ZString[φ|∂AdS = J]','#4ade80',12,'center',true);
  lbl(W*0.5,fy+22,'(Gubser-Klebanov-Polyakov, Witten — 1998)','#64748b',10);
}

// ── FASE 6: ologramma completo ────────────────────────────
function ph6(){
  const ox=W*0.5, oy=H*0.52;
  const R=Math.min(W*0.38,H*0.36);

  // ── ologramma 3D: semisfera AdS ──
  // linee di longitudine
  const nLon=18;
  for(let l=0;l<nLon;l++){
    const a=(l/nLon)*Math.PI*2;
    cx.beginPath();
    for(let s=0;s<=50;s++){
      const theta=(s/50)*Math.PI*0.9;
      const r=R*Math.sin(theta), z=-R*Math.cos(theta);
      const x=ox+r*Math.cos(a+T*0.05);
      const y=oy+r*0.38*Math.sin(a+T*0.05)+z*0.55;
      s===0?cx.moveTo(x,y):cx.lineTo(x,y);
    }
    const depth=(Math.cos(a+T*0.05)+1)/2;
    cx.strokeStyle=`rgba(124,58,237,${0.06+0.14*depth})`;cx.lineWidth=0.8;cx.stroke();
  }

  // linee di latitudine
  const nLat=8;
  for(let lt=1;lt<nLat;lt++){
    const theta=(lt/nLat)*Math.PI*0.9;
    const r=R*Math.sin(theta), z=-R*Math.cos(theta);
    cx.beginPath();cx.ellipse(ox,oy+z*0.55,r,r*0.38,0,0,Math.PI*2);
    cx.strokeStyle=`rgba(56,189,248,${0.04+0.12*(lt/nLat)})`;cx.lineWidth=0.8;cx.stroke();
  }

  // bordo (base del cilindro / disco)
  cx.beginPath();cx.ellipse(ox,oy,R,R*0.38,0,0,Math.PI*2);
  cx.strokeStyle='#38bdf8';cx.lineWidth=3;glow('#38bdf8',20);cx.stroke();ng();

  // CFT operatori sul bordo (onda)
  const nOps=80;
  for(let p=0;p<nOps;p++){
    const a=(p/nOps)*Math.PI*2;
    const wave=1+0.12*Math.sin(5*a+T*2)+0.06*Math.sin(11*a-T*1.5)+0.04*Math.sin(17*a+T*3.2);
    const r2=R*wave;
    const px2=ox+r2*Math.cos(a), py2=oy+r2*0.38*Math.sin(a);
    cx.beginPath();cx.arc(px2,py2,1.8,0,Math.PI*2);
    cx.fillStyle=`hsl(${190+p*2},90%,70%)`;cx.fill();
  }

  // raggi olografici (dal bordo al centro)
  for(let r=0;r<12;r++){
    const a=(r/12)*Math.PI*2+T*0.06;
    const bx3=ox+R*Math.cos(a), by3=oy+R*0.38*Math.sin(a);
    const prog=(T*0.3+r*0.5)%1;
    const ex2=ox+(R*prog*0.9)*Math.cos(a), ey2=oy+(R*prog*0.9)*0.38*Math.sin(a)-R*0.45*prog*0.6;
    cx.beginPath();cx.moveTo(bx3,by3);cx.lineTo(ex2,ey2);
    cx.strokeStyle=`rgba(74,222,128,${0.08*(1-prog)+0.04})`;cx.lineWidth=1;cx.stroke();
    // punto in moto
    cx.beginPath();cx.arc(ex2,ey2,2.5,0,Math.PI*2);
    cx.fillStyle=`rgba(74,222,128,${0.6*(1-prog)})`;cx.fill();
  }

  // cuore: punto centrale (black hole / centro AdS)
  const bhR=14+3*Math.sin(T*0.8);
  cx.beginPath();cx.arc(ox,oy-R*0.4,bhR,0,Math.PI*2);
  const bhG=cx.createRadialGradient(ox,oy-R*0.4,2,ox,oy-R*0.4,bhR);
  bhG.addColorStop(0,'#fde68a');bhG.addColorStop(0.4,'#f59e0b');bhG.addColorStop(1,'rgba(180,83,9,0)');
  cx.fillStyle=bhG;glow('#f59e0b',25);cx.fill();ng();
  lbl(ox,oy-R*0.4+4,'BH','#fde68a',10,'center',true);

  // frecce concettuali
  const arrowData=[
    { x:W*0.08, y:H*0.28, text:['Entropia BH', '= Entropia CFT', 'S = A/4Gℏ'], col:'#ef4444' },
    { x:W*0.08, y:H*0.62, text:['Hawking T', '= Temperatura', 'della CFT'], col:'#f59e0b' },
    { x:W*0.88, y:H*0.28, text:['Scattering', 'nel bulk ↔', 'correlatori CFT'], col:'#a78bfa' },
    { x:W*0.88, y:H*0.62, text:['RG flow CFT', '= moto radiale', 'in AdS (z)'], col:'#4ade80' },
  ];
  arrowData.forEach(d=>{
    cx.fillStyle='rgba(8,14,30,0.88)';
    cx.beginPath();cx.roundRect(d.x-70,d.y-20,140,60,7);cx.fill();
    cx.strokeStyle=d.col+'66';cx.lineWidth=1;cx.stroke();
    d.text.forEach((t2,i)=>lbl(d.x,d.y-4+i*16,t2,i===0?d.col:'#94a3b8',i===0?11:10));
  });

  // linea centrale orizzontale
  lbl(ox,H*0.1,'Il Principio Olografico','#f1f5f9',20,'center',true);
  lbl(ox,H*0.1+26,'La fisica 5D del bulk è completamente codificata nel campo 4D sul bordo','#64748b',12);
  lbl(ox,H*0.1+44,'Come un ologramma 3D inciso su una lastra 2D','#475569',11);

  lbl(ox,oy+R*0.38+24,'BORDO 4D — CFT (operatori, correlatori, entropia...)','#38bdf8',12,'center',true);
  lbl(ox,oy-R*0.38,'BULK 5D — AdS (BH, stringhe, gravitoni...)','#a78bfa',11,'center',true);

  // formula entropia
  cx.fillStyle='rgba(8,14,30,0.92)';
  cx.beginPath();cx.roundRect(W*0.5-175,H*0.88,350,42,8);cx.fill();
  cx.strokeStyle='#ef4444';cx.lineWidth=1;cx.stroke();
  lbl(W*0.5,H*0.88+16,'Bekenstein-Hawking:   S = A / 4Gℏ','#ef4444',12,'center',true);
  lbl(W*0.5,H*0.88+32,'= Entropia entanglement della CFT sul bordo','#64748b',10,'center');
}

// ── MAIN LOOP ─────────────────────────────────────────────
function draw(){
  cx.clearRect(0,0,W,H); bg(); stars();
  switch(ph){
    case 0:ph0();break; case 1:ph1();break; case 2:ph2();break;
    case 3:ph3();break; case 4:ph4();break; case 5:ph5();break;
    case 6:ph6();break;
  }
  T+=0.022; pT++;
  if(pT>520&&ph<6) go(ph+1);
  requestAnimationFrame(draw);
}

go(0); draw();
</script>
</body>
</html>
```

---

## Struttura dell'animazione — 7 fasi 🔭

| Fase | Contenuto |
|---|---|
| **① Stack di D3-Brane** | N brane sovrapposte con stringhe aperte vibranti tra di esse → campo SU(N) |
| **② Curvatura spaziotempo** | La massa-energia delle brane deforma la griglia metrica (Rμν − ½gμνR = 8πGTμν) |
| **③ Geometria AdS** | Modello del disco di Poincaré, isocordinate, metrica ds²=L²/z²(dz²+dx²μ), Λ<0 |
| **④ Bulk vs Bordo** | Cilindro ESU: bulk 5D (viola) con geodetiche, bordo 4D (celeste) con operatori CFT, asse radiale z = scala di energia |
| **⑤ Dualità** | I due lati della corrispondenza — stringa IIB ↔ 𝒩=4 SYM — con il simbolo = al centro |
| **⑥ Dizionario** | Tabella completa: φ↔O, m²↔Δ, BH↔stato termico, gravitone↔Tμν, formula GKPW |
| **⑦ Ologramma completo** | Semisfera AdS con raggi olografici, BH centrale, entropia di Bekenstein-Hawking, RG flow |

> **Salva come `.html`** e aprilo nel browser — avanza automaticamente, o clicca i bottoni per navigare.

## @Vicianzu

spiega cosa è uno stack di brane, e nella pagina di curvatura di minkowski crea l'animazione di come la brana genera la curvatura negativa creando la gola ads

## Copilot

## Cos'è uno Stack di Brane 📚

Prima la spiegazione, poi l'animazione aggiornata.

### Una singola D-brana
Una **D-brana** (Dirichlet-brana) è un oggetto esteso nello spazio su cui gli **estremi delle stringhe aperte sono vincolati a muoversi**. Una D3-brana è un oggetto con 3 dimensioni spaziali + 1 temporale — esattamente come il nostro universo.

### Uno Stack = N brane coincidenti
Quando porti **N brane identiche a occupare la stessa posizione**:

```
Brana 1  ══════════════════
Brana 2  ══════════════════   ← tutte sovrapposte
Brana 3  ══════════════════     nello stesso punto
  ...
Brana N  ══════════════════
```

Succedono due cose simultaneamente:

**1. Lato gauge (stringhe aperte):**
Ogni coppia di brane può avere una stringa aperta tesa tra di esse. Con N brane ci sono N² combinazioni possibili → il campo di gauge diventa **SU(N)**. Questo è la teoria di Yang-Mills sul bordo.

**2. Lato gravitazionale (stringhe chiuse):**
La massa-energia totale di N brane deforma lo spaziotempo. La metrica della supergravità è:
`ds² = H(r)^(-½)(−dt²+dx²) + H(r)^(½)(dr²+r²dΩ₅²)`
con `H(r) = 1 + L⁴/r⁴` e `L⁴ ~ gₛ·N·α'²`

### Il limite near-horizon → Gola AdS
Quando `r ≪ L` (vicino alle brane), il "1" in H(r) diventa trascurabile e la metrica diventa **esattamente AdS₅×S⁵** — uno spaziotempo a curvatura **negativa costante** con la forma di una gola (throat) che si approfondisce all'avvicinarsi alle brane.

---

Ora ecco la pagina aggiornata con l'animazione della **curvatura + gola AdS**:

```html name=ads_cft_v2.html
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>AdS/CFT — Stack di Brane e Gola AdS</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { background:#000010; color:#e2e8f0; font-family:'Georgia',serif; overflow:hidden; }
#canvas { display:block; }
#ui {
  position:fixed; top:0; left:0; right:0;
  display:flex; justify-content:space-between; align-items:center;
  padding:11px 22px; background:rgba(0,0,16,0.92);
  border-bottom:1px solid #1e293b; z-index:100; gap:12px;
}
#title    { font-size:13px; color:#38bdf8; letter-spacing:3px; text-transform:uppercase; white-space:nowrap; }
#phase-desc { font-size:11.5px; color:#94a3b8; text-align:center; line-height:1.5; max-width:580px; }
#phase-name { font-size:14px; color:#7dd3fc; font-weight:bold; text-align:right; white-space:nowrap; }
#bottom {
  position:fixed; bottom:0; left:0; right:0; padding:9px 20px;
  background:rgba(0,0,16,0.92); border-top:1px solid #1e293b;
  display:flex; justify-content:center; gap:8px; z-index:100; flex-wrap:wrap;
}
.btn { padding:6px 14px; border:1px solid #1e3a5f; background:#0c1a2e; color:#7dd3fc;
  border-radius:20px; cursor:pointer; font-size:11px; transition:all 0.3s; }
.btn:hover, .btn.active { background:#0c4a6e; border-color:#38bdf8; color:#e0f2fe; }
#panel {
  position:fixed; right:14px; top:66px; width:210px;
  background:rgba(8,14,30,0.95); border:1px solid #1e3a5f; border-radius:10px;
  padding:14px; font-size:11px; color:#64748b; line-height:1.7; z-index:100;
}
#panel h3 { color:#38bdf8; font-size:12px; margin-bottom:8px;
  border-bottom:1px solid #1e293b; padding-bottom:5px; letter-spacing:1px; }
.pr { display:flex; justify-content:space-between; margin-bottom:3px; }
.pv { color:#e2e8f0; font-weight:bold; }
</style>
</head>
<body>
<div id="ui">
  <div id="title">AdS/CFT</div>
  <div id="phase-desc">—</div>
  <div id="phase-name">—</div>
</div>
<canvas id="canvas"></canvas>
<div id="panel">
  <h3>PARAMETRI</h3>
  <div class="pr"><span>Fase:</span><span class="pv" id="s-phase">—</span></div>
  <div class="pr"><span>N brane:</span><span class="pv" id="s-n">—</span></div>
  <div class="pr"><span>L⁴ ~ gₛNα'²:</span><span class="pv" id="s-l">—</span></div>
  <div class="pr"><span>H(r):</span><span class="pv" id="s-hr">1+L⁴/r⁴</span></div>
  <div class="pr"><span>Geometria:</span><span class="pv" id="s-geo">—</span></div>
  <hr style="border-color:#1e293b;margin:8px 0;">
  <div style="font-size:10px;color:#475569;line-height:1.6;">
    <b style="color:#f59e0b">Lontano (r≫L):</b><br>H≈1 → spazio piatto<br><br>
    <b style="color:#a78bfa">Vicino (r≪L):</b><br>H≈L⁴/r⁴ → AdS₅×S⁵<br><br>
    <b style="color:#4ade80">Limit:</b><br>N→∞, gₛ→0<br>λ=gₛN fisso
  </div>
</div>
<div id="bottom">
  <button class="btn active" onclick="go(0)">① Cos'è una D-Brana</button>
  <button class="btn"        onclick="go(1)">② Stack N brane</button>
  <button class="btn"        onclick="go(2)">③ Curvatura + Gola AdS</button>
  <button class="btn"        onclick="go(3)">④ Near-horizon limit</button>
  <button class="btn"        onclick="go(4)">⑤ Geometria AdS₅×S⁵</button>
  <button class="btn"        onclick="go(5)">⑥ Dualità olografica</button>
</div>

<script>
const cv=document.getElementById('canvas');
const c=cv.getContext('2d');
let W,H;
function resize(){W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;}
resize(); window.addEventListener('resize',resize);

let ph=0,T=0,pT=0;
let N_branes=1;

const PHASES=[
  { name:"Cos'è una D₃-Brana",
    desc:"Una D3-brana è un oggetto 3+1D su cui si ancorano gli estremi delle stringhe aperte. È piatta e non deforma lo spaziotempo (per N=1 piccolo). Le stringhe chiuse invece si propagano liberamente nel bulk 10D.",
    n:1, geo:"R¹·⁹ piatto" },
  { name:"Stack di N D₃-Brane",
    desc:"N brane coincidenti: le N² stringhe aperte tra di esse generano il campo di gauge SU(N). La massa-energia totale scala come N·Tₐ. Quando N→∞ e λ=gₛN≫1, la teoria di gauge diventa fortemente accoppiata e la descrizione duale è gravitazionale.",
    n:8, geo:"SU(N) gauge" },
  { name:"Curvatura dello spaziotempo e Gola AdS",
    desc:"Lo stack di N brane genera la metrica: ds²=H(r)^(-½)η_μν dx^μdx^ν + H(r)^(½)(dr²+r²dΩ₅²) con H(r)=1+L⁴/r⁴. Lontano: spazio piatto. Vicino alle brane: si forma la 'gola' (throat) con curvatura negativa — la geometria AdS.",
    n:8, geo:"H(r)=1+L⁴/r⁴" },
  { name:"Near-Horizon Limit",
    desc:"Nel limite r≪L: H(r)≈L⁴/r⁴. La metrica diventa AdS₅: ds²=(r²/L²)(-dt²+dx²)+(L²/r²)dr². Con z=L²/r: ds²=(L²/z²)(η_μν dx^μdx^ν+dz²). Il bordo AdS è a z→0 (UV della CFT), il centro (IR) a z→∞.",
    n:8, geo:"AdS₅×S⁵" },
  { name:"Geometria AdS₅×S⁵",
    desc:"La gola converge alla geometria prodotto AdS₅×S⁵. AdS₅ ha curvatura negativa costante R=-20/L². S⁵ è una 5-sfera di raggio L. Le isometrie SO(2,4)×SO(6) coincidono esattamente con le simmetrie della teoria 𝒩=4 SYM sul bordo.",
    n:8, geo:"AdS₅×S⁵" },
  { name:"La Dualità: due facce della stessa fisica",
    desc:"Le N brane ammettono DUE descrizioni equivalenti: (1) Stringa IIB nella geometria AdS₅×S⁵ [bulk con gravità] ↔ (2) Teoria di gauge 𝒩=4 SU(N) SYM in 4D [bordo senza gravità]. Questa è la corrispondenza AdS/CFT di Maldacena (1997).",
    n:8, geo:"AdS/CFT" },
];

function go(n){
  ph=n; pT=0; N_branes=PHASES[n].n;
  document.querySelectorAll('.btn').forEach((b,i)=>b.classList.toggle('active',i===n));
  document.getElementById('s-phase').textContent=(n+1)+'/6';
  document.getElementById('s-n').textContent='N='+PHASES[n].n;
  document.getElementById('s-l').textContent=n>=1?'L⁴~gₛNα\'²':'—';
  document.getElementById('s-geo').textContent=PHASES[n].geo;
  document.getElementById('phase-desc').textContent=PHASES[n].desc;
  document.getElementById('phase-name').textContent=PHASES[n].name;
}

function lbl(x,y,txt,col,sz,al='center',bold=false){
  c.fillStyle=col; c.font=`${bold?'bold ':''}${sz}px Georgia,serif`;
  c.textAlign=al; c.fillText(txt,x,y);
}
function gw(col,b){c.shadowColor=col;c.shadowBlur=b;}
function ng(){c.shadowBlur=0;}

// stelle
let _st=null;
function stars(){
  if(!_st)_st=Array.from({length:160},()=>({x:Math.random()*3000,y:Math.random()*2000,r:Math.random()*1.2+0.2,o:Math.random()*0.35+0.08}));
  _st.forEach(s=>{c.beginPath();c.arc(s.x,s.y,s.r,0,Math.PI*2);c.fillStyle=`rgba(255,255,255,${s.o*(0.5+0.5*Math.sin(T*0.3+s.x*.01))})`;c.fill();});
}
function bgDraw(){
  const g=c.createRadialGradient(W/2,H/2,80,W/2,H/2,Math.max(W,H));
  g.addColorStop(0,'#020920');g.addColorStop(1,'#000010');
  c.fillStyle=g;c.fillRect(0,0,W,H);
}

// ─── FASE 0: singola brana ────────────────────────────────
function ph0(){
  const ox=W*.5, oy=H*.5;
  const bW=W*.62, bH=32;

  // griglia Minkowski piatta
  drawFlatGrid(ox,oy,W*.72,H*.5,0);

  // brana
  drawBrana(ox,oy,bW,bH,'#f59e0b',0.9,1);

  // stringhe aperte (su di essa)
  for(let i=0;i<5;i++){
    const sx=ox-bW*.35+i*bW*.17+Math.sin(T*0.8+i)*8;
    const amp=35+8*Math.sin(T*1.5+i*1.2);
    drawOpenStr(sx,oy,sx+Math.cos(T*0.4+i)*12,oy-amp,i%2===0?'#f97316':'#a78bfa');
  }

  // stringa chiusa (nel bulk sopra)
  const clX=ox+W*.22, clY=oy-H*.22;
  drawClosedStr(clX,clY,22,'#fde68a',2);
  lbl(clX,clY-34,'stringa chiusa','#fde68a',11,'center');
  lbl(clX,clY-20,'(bulk libero)','#b45309',10,'center');

  // annotazioni
  lbl(ox,oy-bH/2-16,'Stringhe aperte ancorano i loro estremi alla D₃-Brana','#f59e0b',12,'center',true);
  lbl(ox,oy+bH/2+18,'D₃-Brana (3+1 dimensioni)','#fde68a',13,'center',true);
  lbl(ox,oy+bH/2+34,'La brana singola è PIATTA — non curva lo spaziotempo','#64748b',11,'center');

  // freccia con N=1
  const bx2=W*.08, by2=H*.3;
  c.fillStyle='rgba(8,14,30,0.88)';
  c.beginPath();c.roundRect(bx2,by2,170,78,8);c.fill();
  c.strokeStyle='#f59e0b44';c.lineWidth=1;c.stroke();
  lbl(bx2+85,by2+18,'N = 1','#f59e0b',16,'center',true);
  lbl(bx2+85,by2+36,'Tensione: T₃ ~ 1/(gₛα\'²)','#94a3b8',10,'center');
  lbl(bx2+85,by2+52,'Carica RR: Q = 1','#64748b',10,'center');
  lbl(bx2+85,by2+68,'Curv. spaziotemps.: ≈ 0','#4ade80',10,'center');

  lbl(W*.5,H*.1,'La D₃-Brana','#f1f5f9',20,'center',true);
  lbl(W*.5,H*.1+24,'Oggetto 3+1 dimensionale su cui si ancorano le stringhe aperte','#64748b',12,'center');
}

// ─── FASE 1: stack N brane ─────────────────────────────────
function ph1(){
  const ox=W*.44, oy=H*.5;
  const N=8, sep=22, bW=W*.52, bH=24;

  // stringhe tra brane
  for(let i=0;i<N-1;i++){
    const y0=oy-(N/2)*sep+i*sep+sep/2;
    const y1=oy-(N/2)*sep+(i+1)*sep+sep/2;
    for(let s=0;s<4;s++){
      const sx=ox-bW*.38+s*bW*.25;
      c.beginPath();
      for(let k=0;k<=40;k++){
        const f=k/40, env=Math.sin(Math.PI*f);
        const xw=sx+18*env*Math.sin(3*Math.PI*f-T*3.5+s*1.2);
        const yw=y0+(y1-y0)*f;
        k===0?c.moveTo(xw,yw):c.lineTo(xw,yw);
      }
      c.strokeStyle=`hsl(${20+s*50},80%,60%)`; c.lineWidth=1.5;
      gw(`hsl(${20+s*50},80%,60%)`,5);c.stroke();ng();
    }
  }

  // brane
  for(let i=0;i<N;i++){
    const by=oy-(N/2)*sep+i*sep;
    const alpha=0.5+0.35*(i/(N-1));
    drawBrana(ox,by,bW,bH,'#f59e0b',alpha,i);
    if(i===0||i===N-1) lbl(ox+bW/2+8,by+bH/2,'D₃','#fde68a',9,'left');
  }

  // parentesi N
  const topY=oy-(N/2)*sep, botY=oy+(N/2)*sep+bH;
  c.beginPath();c.moveTo(ox-bW/2-22,topY);c.lineTo(ox-bW/2-30,topY);c.lineTo(ox-bW/2-30,botY);c.lineTo(ox-bW/2-22,botY);
  c.strokeStyle='rgba(245,158,11,0.6)';c.lineWidth=2;c.stroke();
  lbl(ox-bW/2-44,(topY+botY)/2,'N','#f59e0b',18,'center',true);

  // pannello SU(N)
  const px=W*.76, py=H*.28;
  c.fillStyle='rgba(8,14,30,0.92)';c.beginPath();c.roundRect(px,py,W*.2,H*.42,10);c.fill();
  c.strokeStyle='#f59e0b44';c.lineWidth=1;c.stroke();
  lbl(px+W*.1,py+20,'Campo di Gauge','#f59e0b',13,'center',true);
  lbl(px+W*.1,py+36,'SU(N)','#fde68a',22,'center',true);
  lbl(px+W*.1,py+62,'N² stringhe aperte','#94a3b8',10,'center');
  lbl(px+W*.1,py+76,'(N²−1 bosoni di gauge)','#64748b',9,'center');
  c.fillStyle='#1e293b';c.beginPath();c.roundRect(px+14,py+92,W*.2-28,1,1);c.fill();
  lbl(px+W*.1,py+108,'λ = gₛN','#4ade80',12,'center',true);
  lbl(px+W*.1,py+124,"'t Hooft coupling",'#64748b',9,'center');
  c.fillStyle='#1e293b';c.beginPath();c.roundRect(px+14,py+136,W*.2-28,1,1);c.fill();
  lbl(px+W*.1,py+152,'N→∞, gₛ→0','#a78bfa',11,'center',true);
  lbl(px+W*.1,py+168,'λ=gₛN fisso','#7c3aed',10,'center');
  lbl(px+W*.1,py+188,'↓','#4ade80',14,'center');
  lbl(px+W*.1,py+206,'Gauge fortemente','#38bdf8',10,'center',true);
  lbl(px+W*.1,py+220,'accoppiata','#38bdf8',10,'center');
  lbl(px+W*.1,py+236,'↕ duale a','#4ade80',10,'center');
  lbl(px+W*.1,py+252,'Gravità classica','#a78bfa',10,'center',true);
  lbl(px+W*.1,py+268,'in AdS₅×S⁵','#7c3aed',10,'center');

  lbl(W*.5,H*.1,'Stack di N D₃-Brane','#f1f5f9',20,'center',true);
  lbl(W*.5,H*.1+24,'N brane coincidenti → N² stringhe aperte → campo SU(N) → duale alla gravità','#64748b',12,'center');
}

// ─── FASE 2: CURVATURA + GOLA ADS (animazione principale) ──
function ph2(){
  const ox=W*.5, oy=H*.36;

  // ─ Griglia Minkowski warped in tempo reale ─
  // La griglia si deforma con la funzione warp factor H(r) = 1 + L^4/r^4
  const gW=W*.78, gH=H*.44;
  const cols=28, rows=20;
  const L4=0.028; // parametro visivo
  const throatDepth=H*.38; // profondità visiva della gola

  // calcola punto griglia con warp
  function gridPt(fi,fj){
    const dx=fi-0.5, dy=fj-0.5;
    const r2=dx*dx+dy*dy+0.0001;
    const r=Math.sqrt(r2);
    const H_r=1+L4/(r2*r2*16); // H(r) = 1 + L^4/r^4 (normalizzato)
    // la deformazione è verso il basso (terza dimensione visiva)
    const warpZ=throatDepth*(H_r-1)/(H_r); // mappatura in profondità
    const pulse=1+0.025*Math.sin(T*1.2+r*8); // leggera pulsazione
    return {
      x: ox+(dx*gW)*pulse,
      y: oy+(dy*gH)*pulse + warpZ*0.72,
      z: warpZ,
      Hr: H_r
    };
  }

  // disegna griglia con z-depth (colore e spessore variano)
  // righe orizzontali
  for(let j=0;j<=rows;j++){
    c.beginPath();
    for(let i=0;i<=cols;i++){
      const {x,y,z,Hr}=gridPt(i/cols, j/rows);
      const depth=Math.min(z/throatDepth,1);
      i===0?c.moveTo(x,y):c.lineTo(x,y);
    }
    // colore varia da blu (piatto) a viola (warped)
    const fj=j/rows, cjdx=Math.abs(fj-0.5)*2;
    const r=Math.floor(56+cjdx*68), g2=Math.floor(189-cjdx*120), b2=Math.floor(248-cjdx*50);
    c.strokeStyle=`rgba(${r},${g2},${b2},${0.15+cjdx*0.25})`;
    c.lineWidth=0.8+cjdx*0.6;
    c.stroke();
  }
  // colonne verticali
  for(let i=0;i<=cols;i++){
    c.beginPath();
    for(let j=0;j<=rows;j++){
      const {x,y,z}=gridPt(i/cols, j/rows);
      const fi=i/cols, cidx=Math.abs(fi-0.5)*2;
      j===0?c.moveTo(x,y):c.lineTo(x,y);
    }
    const fi=i/cols, cidx=Math.abs(fi-0.5)*2;
    const r=Math.floor(56+cidx*68), g2=Math.floor(189-cidx*120), b2=Math.floor(248-cidx*50);
    c.strokeStyle=`rgba(${r},${g2},${b2},${0.15+cidx*0.25})`;
    c.lineWidth=0.8+cidx*0.6;
    c.stroke();
  }

  // ─ Gola AdS 3D sotto la griglia ─
  // Rappresentazione della gola come imbuto iperbolico
  const throatOx=ox, throatOy=oy+H*.12;
  const nSlices=28;
  for(let s=0;s<=nSlices;s++){
    const f=s/nSlices; // 0=bordo (lontano) 1=fondo gola (vicino brane)
    const z=f*throatDepth*1.0;
    // raggio della gola: iperbolico ~ L²/r ~ L²/(L²(1-f)) = 1/(1-f) → diventa stretto vicino
    const throatR=(gW*.42)*(1-f*0.82);
    const alpha=0.1+f*0.5;
    const col_r=Math.floor(124+f*60), col_g=Math.floor(58-f*30), col_b=Math.floor(237+f*10);
    c.beginPath();
    c.ellipse(throatOx, throatOy+z*0.5, throatR, throatR*0.22, 0, 0, Math.PI*2);
    c.strokeStyle=`rgba(${col_r},${col_g},${col_b},${alpha})`;
    c.lineWidth=f<0.1?2:0.8+f;
    c.stroke();
    // riempi leggermente l'interno
    if(s>0){
      const fPrev=(s-1)/nSlices;
      const zPrev=fPrev*throatDepth*1.0;
      const rPrev=(gW*.42)*(1-fPrev*0.82);
      c.beginPath();
      c.moveTo(throatOx-rPrev, throatOy+zPrev*0.5);
      c.lineTo(throatOx-throatR, throatOy+z*0.5);
      c.lineTo(throatOx+throatR, throatOy+z*0.5);
      c.lineTo(throatOx+rPrev, throatOy+zPrev*0.5);
      c.closePath();
      c.fillStyle=`rgba(${col_r},${col_g},${col_b},${0.025+f*0.04})`;
      c.fill();
    }
  }

  // linee verticali della gola (generatrici)
  for(let k=0;k<16;k++){
    const a=(k/16)*Math.PI*2;
    c.beginPath();
    for(let s=0;s<=40;s++){
      const f=s/40;
      const z=f*throatDepth;
      const r=(gW*.42)*(1-f*0.82);
      const x2=throatOx+r*Math.cos(a);
      const y2=throatOy+z*0.5+r*0.22*Math.sin(a);
      s===0?c.moveTo(x2,y2):c.lineTo(x2,y2);
    }
    const dep=0.15+0.35*(k%4)/3;
    c.strokeStyle=`rgba(167,139,250,${dep})`;
    c.lineWidth=0.7;
    c.setLineDash([4,6]);c.stroke();c.setLineDash([]);
  }

  // ─ Stack brane al fondo della gola ─
  const bOy=throatOy+throatDepth*0.5;
  const bW2=gW*.24;
  for(let i=0;i<5;i++){
    const by=bOy-10+i*7;
    const al=0.5+0.3*(i/4);
    c.beginPath();c.roundRect(throatOx-bW2/2,by,bW2,10,2);
    const bg=c.createLinearGradient(throatOx-bW2/2,by,throatOx+bW2/2,by+10);
    bg.addColorStop(0,`rgba(245,158,11,${al*.8})`);
    bg.addColorStop(1,`rgba(180,83,9,${al*.6})`);
    c.fillStyle=bg;gw('#f59e0b',8);c.fill();ng();
  }
  lbl(throatOx, bOy+42,'Stack N D₃-Brane','#fde68a',11,'center',true);
  lbl(throatOx, bOy+56,'(sorgente della curvatura)','#b45309',9,'center');

  // ─ Annotazioni a lato ─
  // freccia "r" radiale
  c.beginPath();
  c.moveTo(ox+gW*.42+8, oy);
  c.lineTo(ox+gW*.42+8, oy+throatDepth*.52);
  c.strokeStyle='rgba(148,163,184,0.5)';c.lineWidth=1.5;c.stroke();
  // punta
  c.beginPath();c.moveTo(ox+gW*.42+3,oy+throatDepth*.52);
  c.lineTo(ox+gW*.42+8,oy+throatDepth*.52+10);
  c.lineTo(ox+gW*.42+13,oy+throatDepth*.52);
  c.fillStyle='rgba(148,163,184,0.5)';c.fill();
  lbl(ox+gW*.42+28, oy+8,'r ≫ L','#f59e0b',11,'left');
  lbl(ox+gW*.42+28, oy+8+14,'spazio piatto','#64748b',9,'left');
  lbl(ox+gW*.42+28, oy+throatDepth*.26,'r ~ L','#94a3b8',11,'left');
  lbl(ox+gW*.42+28, oy+throatDepth*.26+14,'transizione','#64748b',9,'left');
  lbl(ox+gW*.42+28, oy+throatDepth*.50,'r ≪ L','#a78bfa',11,'left');
  lbl(ox+gW*.42+28, oy+throatDepth*.50+14,'gola AdS','#7c3aed',9,'left');

  // metrica
  const mx=W*.02, my2=H*.68;
  c.fillStyle='rgba(8,14,30,0.92)';c.beginPath();c.roundRect(mx,my2,W*.38,H*.22,10);c.fill();
  c.strokeStyle='#1e3a5f';c.lineWidth=1;c.stroke();
  lbl(mx+W*.19,my2+18,'Metrica dello Stack N D₃-Brane','#38bdf8',12,'center',true);
  lbl(mx+W*.19,my2+38,'ds² = H(r)^(-½) η_μν dx^μdx^ν','#c4b5fd',11,'center',true);
  lbl(mx+W*.19,my2+54,'      + H(r)^(½) (dr²+r²dΩ₅²)','#c4b5fd',11,'center',true);
  lbl(mx+W*.19,my2+74,'H(r) = 1 + L⁴/r⁴','#4ade80',13,'center',true);
  lbl(mx+W*.19,my2+94,'L⁴ = 4πgₛNα\'²','#94a3b8',10,'center');
  lbl(mx+W*.19,my2+110,'r→∞: H→1 (piatto)   r→0: H→L⁴/r⁴ (AdS)','#64748b',10,'center');

  lbl(W*.5,H*.04,'Curvatura dello Spaziotempo e Gola AdS','#f1f5f9',18,'center',true);
  lbl(W*.5,H*.04+22,'Lo stack di N brane deforma la griglia di Minkowski: nasce la "gola" (throat) con curvatura negativa','#64748b',11,'center');
}

// ─── FASE 3: near-horizon limit ────────────────────────────
function ph3(){
  const ox=W*.5, oy=H*.48;
  const R=Math.min(W*.32,H*.3);

  // due rappresentazioni: sinistra = full solution, destra = AdS
  // divider
  c.beginPath();c.moveTo(ox,H*.12);c.lineTo(ox,H*.88);
  c.strokeStyle='rgba(100,116,139,0.3)';c.lineWidth=1;c.setLineDash([6,6]);c.stroke();c.setLineDash([]);
  lbl(ox,H*.12-8,'→ Near-Horizon Limit →','#4ade80',12,'center',true);

  // --- lato sinistro: soluzione completa ---
  const lx=W*.22;
  // griglia flat + throat piccolo
  drawMiniGrid(lx,oy,W*.36,H*.44,0.04);
  // brana
  c.beginPath();c.ellipse(lx,oy+H*.16,W*.14,10,0,0,Math.PI*2);
  const bg=c.createRadialGradient(lx,oy+H*.16,2,lx,oy+H*.16,W*.14);
  bg.addColorStop(0,'#fde68a');bg.addColorStop(1,'rgba(180,83,9,0.3)');
  c.fillStyle=bg;gw('#f59e0b',10);c.fill();ng();
  lbl(lx,oy-R*.4,'Soluzione completa','#94a3b8',13,'center',true);
  lbl(lx,oy-R*.4+18,'H(r) = 1 + L⁴/r⁴','#c4b5fd',12,'center',true);
  lbl(lx,H*.78,'Spazio piatto +','#f59e0b',10,'center');
  lbl(lx,H*.78+14,'gola piccola','#f59e0b',10,'center');

  // --- lato destro: limite AdS ---
  const rx=W*.78;
  // disco AdS puro
  for(let k=1;k<=7;k++){
    const r2=R*(k/7);
    c.beginPath();c.arc(rx,oy,r2,0,Math.PI*2);
    c.strokeStyle=`rgba(124,58,237,${0.15+0.08*k})`;
    c.lineWidth=k===1?2:0.8;c.stroke();
  }
  c.beginPath();c.arc(rx,oy,R,0,Math.PI*2);
  c.strokeStyle='#38bdf8';c.lineWidth=2.5;gw('#38bdf8',12);c.stroke();ng();
  // geodetiche
  for(let g=0;g<10;g++){
    const a=(g/10)*Math.PI*2+T*0.05;
    c.beginPath();c.moveTo(rx+R*Math.cos(a),oy+R*.45*Math.sin(a));c.lineTo(rx,oy);
    c.strokeStyle='rgba(74,222,128,0.12)';c.lineWidth=1;c.stroke();
  }
  lbl(rx,oy-R-20,'Limite Near-Horizon','#94a3b8',13,'center',true);
  lbl(rx,oy-R-4,'H(r) ≈ L⁴/r⁴','#c4b5fd',12,'center',true);
  lbl(rx,oy,'AdS₅ puro','#a78bfa',14,'center',true);
  lbl(rx,oy+18,'(+ S⁵)','#7c3aed',11,'center');
  lbl(rx,H*.78,'Geometria AdS','#a78bfa',10,'center');
  lbl(rx,H*.78+14,'curvatura negativa','#7c3aed',10,'center');

  // box matematica
  c.fillStyle='rgba(8,14,30,0.92)';c.beginPath();c.roundRect(W*.2,H*.82,W*.6,H*.1,10);c.fill();
  c.strokeStyle='#4ade80';c.lineWidth=1;c.stroke();
  lbl(W*.5,H*.82+16,'r≪L: H≈L⁴/r⁴  →  ds² = r²/L²(−dt²+dx²)+L²/r²dr²+L²dΩ₅²','#4ade80',11,'center',true);
  lbl(W*.5,H*.82+34,'Cambio: z=L²/r  →  ds² = L²/z² (η_μν dx^μdx^ν + dz²) + L²dΩ₅²  =  AdS₅ × S⁵','#94a3b8',10,'center');

  lbl(W*.5,H*.07,'Near-Horizon Limit: il "1" scompare','#f1f5f9',18,'center',true);
  lbl(W*.5,H*.07+22,'Vicino alle brane (r≪L): H(r)≈L⁴/r⁴ — la geometria diventa esattamente AdS₅×S⁵','#64748b',12,'center');
}

// ─── FASE 4: AdS5 × S5 ────────────────────────────────────
function ph4(){
  const ox=W*.38, oy=H*.5;
  const R=Math.min(W*.28,H*.32);

  // AdS5 (disco)
  for(let k=1;k<=8;k++){
    const r2=R*(k/8);
    c.beginPath();c.arc(ox,oy,r2,0,Math.PI*2);
    c.strokeStyle=`rgba(124,58,237,${0.12+0.1*(k/8)})`;
    c.lineWidth=k===1?2:0.8;c.stroke();
  }
  c.beginPath();c.arc(ox,oy,R,0,Math.PI*2);
  c.strokeStyle='#7c3aed';c.lineWidth=3;gw('#7c3aed',14);c.stroke();ng();

  // geodetiche nel disco
  for(let g=0;g<12;g++){
    const a=(g/12)*Math.PI*2+T*0.04;
    const bx3=ox+R*Math.cos(a),by3=oy+R*.55*Math.sin(a);
    c.beginPath();c.moveTo(bx3,by3);c.lineTo(ox,oy);
    c.strokeStyle='rgba(74,222,128,0.09)';c.lineWidth=1;c.stroke();
  }

  // bordo luminoso con operatori
  for(let p=0;p<14;p++){
    const a=(p/14)*Math.PI*2+T*0.12;
    c.beginPath();c.arc(ox+R*Math.cos(a),oy+R*.55*Math.sin(a),3+Math.sin(T*2+p),0,Math.PI*2);
    c.fillStyle=`hsl(${200+p*12},90%,70%)`;gw(`hsl(${200+p*12},90%,60%)`,6);c.fill();ng();
  }

  lbl(ox,oy,'AdS₅','#a78bfa',22,'center',true);
  lbl(ox,oy+24,'Curvatura: R=−20/L²','#7c3aed',10,'center');
  lbl(ox,oy+38,'Isometria: SO(2,4)','#64748b',9,'center');
  lbl(ox,oy-R-22,'BULK (5D con gravità)','#7c3aed',12,'center',true);
  lbl(ox,oy+R*.55+22,'BORDO: CFT₄  SO(2,4)≅conf.4D','#38bdf8',11,'center',true);

  // S5 (a destra)
  const sx=W*.76, sy=H*.5, sR=R*.58;
  for(let l=0;l<10;l++){
    const a=(l/10)*Math.PI;
    c.beginPath();c.ellipse(sx,sy,sR*Math.sin(a)+2,sR,0,0,Math.PI*2);
    c.strokeStyle=`rgba(56,189,248,${0.08+0.14*(l%2)})`;c.lineWidth=0.8;c.stroke();
  }
  for(let l=0;l<8;l++){
    const a=(l/8)*Math.PI*2+T*0.15;
    c.beginPath();c.ellipse(sx,sy,sR,sR*.45,a,0,Math.PI*2);
    c.strokeStyle=`rgba(56,189,248,0.12)`;c.lineWidth=0.7;c.stroke();
  }
  c.beginPath();c.arc(sx,sy,sR,0,Math.PI*2);
  c.strokeStyle='#38bdf8';c.lineWidth=2;gw('#38bdf8',10);c.stroke();ng();
  lbl(sx,sy,'S⁵','#38bdf8',20,'center',true);
  lbl(sx,sy+20,'Raggio L','#60a5fa',10,'center');
  lbl(sx,sy+34,'Isometria: SO(6)','#64748b',9,'center');
  lbl(sx,sy-sR-18,'Sfera 5D compatta','#38bdf8',11,'center',true);

  // simbolo ×
  lbl((ox+sx)/2,sy,'×','#4ade80',28,'center',true);

  // box isometrie
  c.fillStyle='rgba(8,14,30,0.92)';c.beginPath();c.roundRect(W*.08,H*.8,W*.84,H*.12,10);c.fill();
  c.strokeStyle='#1e3a5f';c.lineWidth=1;c.stroke();
  lbl(W*.5,H*.8+16,'Isometrie AdS₅×S⁵:  SO(2,4) × SO(6)  ≅  Simmetrie 𝒩=4 SYM:  Conforme(4D) × R-simmetria SU(4)','#4ade80',11,'center',true);
  lbl(W*.5,H*.8+34,'L⁴=4πgₛNα\'²   •   L/lₛ=(4πgₛN)^(¼)   •   Nel limite N→∞,gₛ→0: geometria classica (ℏ→0)','#64748b',10,'center');

  lbl(W*.5,H*.07,'AdS₅ × S⁵','#f1f5f9',22,'center',true);
  lbl(W*.5,H*.07+26,'La geometria near-horizon si fattorizza nel prodotto di due spazi a curvatura costante','#64748b',12,'center');
}

// ─── FASE 5: dualità completa ──────────────────────────────
function ph5(){
  const ox=W*.5, oy=H*.5;
  // due cerchi dualità
  const R=Math.min(W*.23,H*.26);
  const lx=W*.24, rx=W*.76;

  // BULK
  c.beginPath();c.arc(lx,oy,R,0,Math.PI*2);
  const bG=c.createRadialGradient(lx,oy,10,lx,oy,R);
  bG.addColorStop(0,'rgba(124,58,237,0.3)');bG.addColorStop(1,'rgba(14,0,40,0.4)');
  c.fillStyle=bG;c.fill();
  c.strokeStyle='#7c3aed';c.lineWidth=2;gw('#7c3aed',12);c.stroke();ng();
  for(let p=0;p<5;p++){
    const a=(p/5)*Math.PI*2+T*0.25*(p%2?1:-1);
    const r2=R*(0.25+0.4*(p%3)/2);
    c.beginPath();c.arc(lx+r2*Math.cos(a),oy+r2*.7*Math.sin(a),5,0,Math.PI*2);
    c.fillStyle=`hsl(${250+p*20},80%,70%)`;gw(`hsl(${250+p*20},80%,60%)`,8);c.fill();ng();
  }
  lbl(lx,oy-14,'Stringa IIB','#a78bfa',13,'center',true);
  lbl(lx,oy+4,'in AdS₅×S⁵','#7c3aed',11,'center');
  lbl(lx,oy-R-20,'BULK','#7c3aed',14,'center',true);
  lbl(lx,oy+R+16,'Gravità quantistica','#64748b',10,'center');
  lbl(lx,oy+R+28,'5 dimensioni','#64748b',9,'center');

  // CFT
  c.beginPath();c.arc(rx,oy,R,0,Math.PI*2);
  const bG2=c.createRadialGradient(rx,oy,10,rx,oy,R);
  bG2.addColorStop(0,'rgba(56,189,248,0.28)');bG2.addColorStop(1,'rgba(0,14,40,0.4)');
  c.fillStyle=bG2;c.fill();
  c.strokeStyle='#38bdf8';c.lineWidth=2;gw('#38bdf8',12);c.stroke();ng();
  for(let l=0;l<7;l++){
    const a=(l/7)*Math.PI*2+T*0.2;
    const r2=R*(0.3+0.45*(l%3)/2);
    c.beginPath();
    for(let k=0;k<=30;k++){
      const f=k/30,rw=r2+10*Math.sin(3*Math.PI*f+T*2.5+l);
      const x2=rx+rw*Math.cos(a+f*.3),y2=oy+rw*.7*Math.sin(a+f*.3);
      k===0?c.moveTo(x2,y2):c.lineTo(x2,y2);
    }
    c.strokeStyle=`rgba(56,189,248,${0.15+0.1*(l%2)})`;c.lineWidth=1.2;c.stroke();
  }
  lbl(rx,oy-14,'𝒩=4 SYM','#38bdf8',13,'center',true);
  lbl(rx,oy+4,'SU(N), d=4','#60a5fa',11,'center');
  lbl(rx,oy-R-20,'BORDO','#38bdf8',14,'center',true);
  lbl(rx,oy+R+16,'Teoria di gauge','#64748b',10,'center');
  lbl(rx,oy+R+28,'4 dimensioni','#64748b',9,'center');

  // frecce e simbolo
  const midX=ox;
  c.beginPath();c.moveTo(lx+R+8,oy-6);c.lineTo(midX-20,oy-6);
  c.strokeStyle='rgba(74,222,128,0.6)';c.lineWidth=2;c.stroke();
  c.beginPath();c.moveTo(midX+20,oy+6);c.lineTo(rx-R-8,oy+6);
  c.strokeStyle='rgba(74,222,128,0.6)';c.lineWidth=2;c.stroke();
  lbl(midX,oy,'⇔','#4ade80',32,'center',true);
  lbl(midX,oy+32,'Maldacena 1997','#4ade80',10,'center');

  // origine comune: stack brane
  c.fillStyle='rgba(8,14,30,0.92)';c.beginPath();c.roundRect(ox-110,H*.12,220,48,8);c.fill();
  c.strokeStyle='#f59e0b66';c.lineWidth=1;c.stroke();
  lbl(ox,H*.12+16,'Origine comune:','#f59e0b',11,'center',true);
  lbl(ox,H*.12+32,'Stack N D₃-Brane in tipo IIB','#fde68a',12,'center',true);

  // frecce dall'origine
  c.beginPath();c.moveTo(ox-30,H*.12+48);c.lineTo(lx+20,oy-R-8);
  c.strokeStyle='rgba(245,158,11,0.35)';c.lineWidth=1;c.setLineDash([4,5]);c.stroke();c.setLineDash([]);
  c.beginPath();c.moveTo(ox+30,H*.12+48);c.lineTo(rx-20,oy-R-8);
  c.strokeStyle='rgba(245,158,11,0.35)';c.lineWidth=1;c.setLineDash([4,5]);c.stroke();c.setLineDash([]);

  lbl(lx,H*.22,'Descrizione','#64748b',10,'center');
  lbl(lx,H*.22+13,'gravitazionale','#64748b',10,'center');
  lbl(rx,H*.22,'Descrizione','#64748b',10,'center');
  lbl(rx,H*.22+13,'di gauge','#64748b',10,'center');

  // formula
  c.fillStyle='rgba(8,14,30,0.92)';c.beginPath();c.roundRect(W*.12,H*.84,W*.76,H*.1,10);c.fill();
  c.strokeStyle='#4ade80';c.lineWidth=1;c.stroke();
  lbl(W*.5,H*.84+18,'⟨e∫d⁴x J(x)O(x)⟩CFT = Zstringa[φ|z=0 = J]','#4ade80',13,'center',true);
  lbl(W*.5,H*.84+36,'(GKPW: Gubser-Klebanov-Polyakov 1998, Witten 1998)','#64748b',10,'center');

  lbl(W*.5,H*.05,'La Dualità AdS/CFT','#f1f5f9',20,'center',true);
  lbl(W*.5,H*.05+22,'Lo stesso stack di N brane ammette due descrizioni equivalenti e complementari','#64748b',12,'center');
}

// ─── UTILITIES ───────────────────────────────────────────
function drawFlatGrid(ox,oy,gW,gH,warp){
  const cols=16,rows=10;
  for(let j=0;j<=rows;j++){
    c.beginPath();
    for(let i=0;i<=cols;i++){
      const x=ox-gW/2+(i/cols)*gW, y=oy-gH/2+(j/rows)*gH;
      i===0?c.moveTo(x,y):c.lineTo(x,y);
    }
    c.strokeStyle='rgba(56,189,248,0.12)';c.lineWidth=0.7;c.stroke();
  }
  for(let i=0;i<=cols;i++){
    c.beginPath();
    for(let j=0;j<=rows;j++){
      const x=ox-gW/2+(i/cols)*gW, y=oy-gH/2+(j/rows)*gH;
      j===0?c.moveTo(x,y):c.lineTo(x,y);
    }
    c.strokeStyle='rgba(56,189,248,0.12)';c.lineWidth=0.7;c.stroke();
  }
}

function drawMiniGrid(ox,oy,gW,gH,L4){
  const cols=14,rows=10;
  for(let j=0;j<=rows;j++){
    c.beginPath();
    for(let i=0;i<=cols;i++){
      const fx=i/cols,fy=j/rows,dx=fx-.5,dy=fy-.5;
      const r2=dx*dx+dy*dy+.001;
      const Hr=1+L4/(r2*r2*4);
      const wZ=(Hr-1)/Hr*H*.18;
      const x=ox+(fx-.5)*gW, y=oy+(fy-.5)*gH+wZ;
      i===0?c.moveTo(x,y):c.lineTo(x,y);
    }
    c.strokeStyle='rgba(56,189,248,0.15)';c.lineWidth=0.7;c.stroke();
  }
  for(let i=0;i<=cols;i++){
    c.beginPath();
    for(let j=0;j<=rows;j++){
      const fx=i/cols,fy=j/rows,dx=fx-.5,dy=fy-.5;
      const r2=dx*dx+dy*dy+.001;
      const Hr=1+L4/(r2*r2*4);
      const wZ=(Hr-1)/Hr*H*.18;
      const x=ox+(fx-.5)*gW, y=oy+(fy-.5)*gH+wZ;
      j===0?c.moveTo(x,y):c.lineTo(x,y);
    }
    c.strokeStyle='rgba(56,189,248,0.15)';c.lineWidth=0.7;c.stroke();
  }
}

function drawBrana(ox,oy,bW,bH,col,alpha,idx){
  c.beginPath();c.ellipse(ox,oy+bH/2+3,bW/2,bH*.18,0,0,Math.PI*2);
  c.fillStyle='rgba(0,0,0,0.25)';c.fill();
  c.beginPath();c.roundRect(ox-bW/2,oy,bW,bH,3);
  const bg=c.createLinearGradient(ox-bW/2,oy,ox+bW/2,oy+bH);
  bg.addColorStop(0,`rgba(245,158,11,${alpha*.9})`);
  bg.addColorStop(.5,`rgba(253,230,138,${alpha})`);
  bg.addColorStop(1,`rgba(180,83,9,${alpha*.7})`);
  c.fillStyle=bg;gw(col,8*(alpha));c.fill();ng();
  c.strokeStyle=`rgba(253,230,138,${alpha*.5})`;c.lineWidth=1;c.stroke();
}

function drawOpenStr(x1,y1,x2,y2,col){
  c.beginPath();
  const steps=30;
  for(let k=0;k<=steps;k++){
    const f=k/steps,env=Math.sin(Math.PI*f);
    const xw=x1+(x2-x1)*f+env*10*Math.sin(3*Math.PI*f-T*3.5);
    const yw=y1+(y2-y1)*f;
    k===0?c.moveTo(xw,yw):c.lineTo(xw,yw);
  }
  c.strokeStyle=col;c.lineWidth=1.5;gw(col,6);c.stroke();ng();
  c.beginPath();c.arc(x1,y1,4,0,Math.PI*2);c.fillStyle='#fff';gw('#fff',5);c.fill();ng();
  c.beginPath();c.arc(x2,y2,4,0,Math.PI*2);c.fillStyle=col;gw(col,5);c.fill();ng();
}

function drawClosedStr(ox,oy,r,col,mode){
  c.beginPath();
  for(let i=0;i<=200;i++){
    const a=(i/200)*Math.PI*2;
    const d=1+.18*Math.sin(mode*a-T*2.5)+.07*Math.cos(2*mode*a+T*1.5);
    const x=ox+r*d*Math.cos(a), y=oy+r*d*.62*Math.sin(a);
    i===0?c.moveTo(x,y):c.lineTo(x,y);
  }
  c.closePath();c.strokeStyle=col;c.lineWidth=2;
  c.setLineDash([5,4]);gw(col,10);c.stroke();ng();c.setLineDash([]);
}

// ─── LOOP ─────────────────────────────────────────────────
function draw(){
  c.clearRect(0,0,W,H);bgDraw();stars();
  switch(ph){
    case 0:ph0();break;case 1:ph1();break;case 2:ph2();break;
    case 3:ph3();break;case 4:ph4();break;case 5:ph5();break;
  }
  T+=0.022;pT++;
  if(pT>560&&ph<5)go(ph+1);
  requestAnimationFrame(draw);
}
go(0);draw();
</script>
</body>
</html>
```

---

## Cosa mostra la fase ③ (Curvatura + Gola AdS) 🔭

L'animazione della curvatura risolve esattamente il tuo punto — la griglia di Minkowski si **deforma fisicamente** in base alla funzione:

```
H(r) = 1 + L⁴/r⁴
```

- **Lontano dalle brane** (r ≫ L): H≈1, la griglia è **piatta** — spazio di Minkowski normale
- **Transizione** (r ~ L): la griglia inizia a curvare verso il basso
- **Vicino alle brane** (r ≪ L): H≈L⁴/r⁴, si forma la **gola** (throat) — curvatura negativa, geometria AdS

Lo stack di brane sta **al fondo della gola**, visibile come sorgente della curvatura. Le linee trattinate della gola mostrano le superf

## @Vicianzu

aggiungi una pagina di animazione del bulk reconstruction, da una parte particelle che si scontrano, dall'altra materia barionica e i gravitoni che viaggiano da entrambe le parti

*System: User retried message*

## Copilot

```html name=bulk_reconstruction.html
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Bulk Reconstruction — AdS/CFT</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { background:#000010; color:#e2e8f0; font-family:'Georgia',serif; overflow:hidden; }
#canvas { display:block; }
#ui {
  position:fixed; top:0; left:0; right:0;
  display:flex; justify-content:space-between; align-items:center;
  padding:11px 22px; background:rgba(0,0,16,0.92);
  border-bottom:1px solid #1e293b; z-index:100; gap:12px;
}
#title    { font-size:13px; color:#38bdf8; letter-spacing:3px; text-transform:uppercase; white-space:nowrap; }
#phase-desc { font-size:11.5px; color:#94a3b8; text-align:center; line-height:1.5; max-width:600px; }
#phase-name { font-size:14px; color:#7dd3fc; font-weight:bold; text-align:right; white-space:nowrap; }
#bottom {
  position:fixed; bottom:0; left:0; right:0; padding:9px 20px;
  background:rgba(0,0,16,0.92); border-top:1px solid #1e293b;
  display:flex; justify-content:center; gap:8px; z-index:100; flex-wrap:wrap;
}
.btn { padding:6px 15px; border:1px solid #1e3a5f; background:#0c1a2e; color:#7dd3fc;
  border-radius:20px; cursor:pointer; font-size:11px; transition:all 0.3s; }
.btn:hover,.btn.active { background:#0c4a6e; border-color:#38bdf8; color:#e0f2fe; }
#panel {
  position:fixed; right:14px; top:66px; width:215px;
  background:rgba(8,14,30,0.96); border:1px solid #1e3a5f; border-radius:10px;
  padding:14px; font-size:11px; color:#64748b; line-height:1.7; z-index:100;
}
#panel h3 { color:#38bdf8; font-size:12px; margin-bottom:8px;
  border-bottom:1px solid #1e293b; padding-bottom:5px; letter-spacing:1px; }
.pr { display:flex; justify-content:space-between; margin-bottom:3px; }
.pv { color:#e2e8f0; font-weight:bold; }
.leg { display:flex; align-items:center; gap:7px; margin-bottom:4px; }
.ld  { width:18px; height:3px; border-radius:2px; flex-shrink:0; }
</style>
</head>
<body>
<div id="ui">
  <div id="title">Bulk Reconstruction</div>
  <div id="phase-desc">—</div>
  <div id="phase-name">—</div>
</div>
<canvas id="canvas"></canvas>
<div id="panel">
  <h3>HKLL DICTIONARY</h3>
  <div class="pr"><span>Fase:</span><span class="pv" id="s-ph">1/5</span></div>
  <div class="pr"><span>Bulk:</span><span class="pv" id="s-bulk">AdS₅</span></div>
  <div class="pr"><span>Bordo:</span><span class="pv" id="s-bdy">CFT₄</span></div>
  <hr style="border-color:#1e293b;margin:7px 0;">
  <div class="leg"><div class="ld" style="background:#38bdf8;"></div><span>Bordo CFT (operatori)</span></div>
  <div class="leg"><div class="ld" style="background:#a78bfa;"></div><span>Bulk AdS (campi)</span></div>
  <div class="leg"><div class="ld" style="background:#fde68a; border:1px dashed #fde68a; height:1px;"></div><span>Gravitone (spin 2)</span></div>
  <div class="leg"><div class="ld" style="background:#f97316;"></div><span>Smearing kernel K</span></div>
  <div class="leg"><div class="ld" style="background:#ef4444;"></div><span>Quark/adroni</span></div>
  <div class="leg"><div class="ld" style="background:#4ade80;"></div><span>Segnale olografico</span></div>
  <hr style="border-color:#1e293b;margin:7px 0;">
  <div style="font-size:10px;color:#475569;line-height:1.6;">
    <b style="color:#f97316;">HKLL:</b><br>
    φ(z,x) = ∫ K(z,x|x') O(x') dx'<br><br>
    <b style="color:#fde68a;">Gravitone:</b><br>
    hμν ↔ Tμν (CFT)<br><br>
    <b style="color:#4ade80;">Witten diagrams:</b><br>
    bulk ↔ correlatori CFT
  </div>
</div>
<div id="bottom">
  <button class="btn active" onclick="go(0)">① Panoramica</button>
  <button class="btn"        onclick="go(1)">② Collisione → segnale bulk</button>
  <button class="btn"        onclick="go(2)">③ Smearing HKLL</button>
  <button class="btn"        onclick="go(3)">④ Gravitoni bulk↔bordo</button>
  <button class="btn"        onclick="go(4)">⑤ Materia barionica ↔ AdS</button>
</div>

<script>
const cv=document.getElementById('canvas');
const c=cv.getContext('2d');
let W,H;
function resize(){W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;}
resize();window.addEventListener('resize',resize);

let ph=0, T=0, pT=0;

// pool di oggetti animati
let collParticles=[], gravitons=[], smearRays=[], baryons=[], witten=[];

const PHASES=[
  { name:"Bulk Reconstruction — Panoramica",
    desc:"Il bulk AdS₅ e il suo bordo CFT₄ sono equivalenti. Ogni evento nel bulk (scattering, gravitoni) ha un corrispettivo esatto sul bordo (correlatori, operatore Tμν). La ricostruzione va in entrambe le direzioni." },
  { name:"Collisione al bordo → segnale nel bulk",
    desc:"Una collisione di particelle sul bordo CFT (ad es. scattering e⁺e⁻ o quark-antiquark) crea un operatore locale O(x). Questo eccita un campo φ nel bulk tramite il kernel HKLL: il segnale si propaga dall'interno verso il fondo della gola AdS." },
  { name:"Smearing Kernel HKLL",
    desc:"La ricostruzione HKLL: φ(z,x) = ∫ K(z,x|x') O(x') dx'. Il kernel K è una funzione di smearing non locale: un singolo punto del bulk riceve contributi da una regione estesa del bordo. Più si va in profondità nel bulk (z→∞), più il kernel è diffuso." },
  { name:"Gravitoni: bulk ↔ bordo",
    desc:"Il gravitone (stringa chiusa, spin 2) viaggia nel bulk. Sul bordo è duale al tensore energia-impulso Tμν. I diagrammi di Witten per lo scambio di gravitoni nel bulk corrispondono esattamente ai correlatori ⟨Tμν Tρσ⟩ nel CFT." },
  { name:"Materia Barionica ↔ Stringa nel Bulk",
    desc:"Un barione (protone, neutrone) nel CFT = una stringa verticale nel bulk AdS con un estremo sul bordo e l'altro avvolto attorno alla S⁵. La materia nucleare densa (QGP) corrisponde a un Black Hole AdS. La viscosità η/s = ℏ/4πkB è calcolata dal bulk." },
];

function go(n){
  ph=n; pT=0;
  collParticles=[]; gravitons=[]; smearRays=[]; baryons=[]; witten=[];
  document.querySelectorAll('.btn').forEach((b,i)=>b.classList.toggle('active',i===n));
  document.getElementById('s-ph').textContent=(n+1)+'/5';
  document.getElementById('phase-desc').textContent=PHASES[n].desc;
  document.getElementById('phase-name').textContent=PHASES[n].name;
}

// ── helpers ───────────────────────────────────────────────
function lbl(x,y,t,col,sz,al='center',bold=false){
  c.fillStyle=col;c.font=`${bold?'bold ':''}${sz}px Georgia,serif`;
  c.textAlign=al;c.fillText(t,x,y);
}
function gw(col,b){c.shadowColor=col;c.shadowBlur=b;}
function ng(){c.shadowBlur=0;}

let _st=null;
function stars(){
  if(!_st)_st=Array.from({length:160},()=>({x:Math.random()*3000,y:Math.random()*2000,r:Math.random()*1.2+0.2,o:Math.random()*0.3+0.08}));
  _st.forEach(s=>{c.beginPath();c.arc(s.x,s.y,s.r,0,Math.PI*2);c.fillStyle=`rgba(255,255,255,${s.o*(0.5+0.5*Math.sin(T*0.3+s.x*.01))})`;c.fill();});
}
function bgDraw(){
  const g=c.createRadialGradient(W/2,H/2,80,W/2,H/2,Math.max(W,H));
  g.addColorStop(0,'#020920');g.addColorStop(1,'#000010');
  c.fillStyle=g;c.fillRect(0,0,W,H);
}

// ── struttura base: cilindro AdS + bordo ─────────────────
// Il bulk è un cilindro con:
//   - bordo TOP (ellisse in alto) = CFT bordo
//   - corpo = bulk AdS (gradiente viola→blu)
//   - fondo = brane/centro IR

function drawAdsCylinder(ox,oy,R,depth,alpha=1){
  c.save();c.globalAlpha=alpha;

  // ombre
  c.beginPath();c.ellipse(ox,oy+depth+10,R*.9,R*.18,0,0,Math.PI*2);
  c.fillStyle='rgba(0,0,0,0.35)';c.fill();

  // lati del cilindro
  const lGrad=c.createLinearGradient(ox-R,oy,ox-R,oy+depth);
  lGrad.addColorStop(0,'rgba(124,58,237,0.25)');
  lGrad.addColorStop(1,'rgba(124,58,237,0.05)');
  c.fillStyle=lGrad;
  c.beginPath();
  c.moveTo(ox-R,oy);c.lineTo(ox-R,oy+depth);
  c.ellipse(ox,oy+depth,R,R*.2,0,Math.PI,0);
  c.lineTo(ox+R,oy);
  c.ellipse(ox,oy,R,R*.2,0,0,Math.PI);
  c.fill();

  // linee verticali struttura
  for(let k=0;k<16;k++){
    const a=(k/16)*Math.PI*2;
    const x1=ox+R*Math.cos(a), x2=ox+R*Math.cos(a);
    const y1=oy+R*.2*Math.sin(a), y2=oy+depth+R*.2*Math.sin(a);
    c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);
    c.strokeStyle=`rgba(124,58,237,${0.06+0.08*Math.max(0,Math.cos(a))})`;
    c.lineWidth=0.7;c.stroke();
  }

  // anelli interni (geodetiche z=cost)
  for(let s=1;s<=8;s++){
    const f=s/8, zOff=f*depth;
    const alpha2=0.04+f*0.12;
    const R2=R*(1-f*.08);
    c.beginPath();c.ellipse(ox,oy+zOff,R2,R2*.2,0,0,Math.PI*2);
    c.strokeStyle=`rgba(${Math.floor(124+f*50)},${Math.floor(58-f*20)},${Math.floor(237+f*10)},${alpha2})`;
    c.lineWidth=0.7;c.stroke();
  }

  // fondo (IR / brane)
  c.beginPath();c.ellipse(ox,oy+depth,R,R*.2,0,0,Math.PI*2);
  const botG=c.createRadialGradient(ox,oy+depth,5,ox,oy+depth,R);
  botG.addColorStop(0,'rgba(245,158,11,0.35)');botG.addColorStop(.5,'rgba(100,30,0,0.15)');botG.addColorStop(1,'rgba(0,0,0,0)');
  c.fillStyle=botG;c.fill();
  c.strokeStyle='rgba(245,158,11,0.3)';c.lineWidth=1.5;c.stroke();

  // bordo TOP (CFT)
  c.beginPath();c.ellipse(ox,oy,R,R*.2,0,0,Math.PI*2);
  const topG=c.createRadialGradient(ox,oy,10,ox,oy,R);
  topG.addColorStop(0,'rgba(56,189,248,0.3)');
  topG.addColorStop(.6,'rgba(56,189,248,0.15)');
  topG.addColorStop(1,'rgba(56,189,248,0.05)');
  c.fillStyle=topG;gw('#38bdf8',20);c.fill();ng();
  c.strokeStyle='#38bdf8';c.lineWidth=2.5;c.stroke();

  c.restore();
}

// punto nel cilindro (sistema di coordinate)
// fr = 0..1 radiale nel bordo, fa = angolo, fz = 0(bordo)..1(fondo)
function cylPt(ox,oy,R,depth,fr,fa,fz){
  const x=ox+R*fr*Math.cos(fa);
  const y=oy+R*.2*fr*Math.sin(fa)+fz*depth;
  return {x,y};
}

// ── FASE 0: panoramica ────────────────────────────────────
function ph0(){
  const ox=W*.5, oy=H*.14, R=W*.3, dep=H*.58;

  drawAdsCylinder(ox,oy,R,dep);

  // BORDO: operatori CFT pulsanti
  for(let p=0;p<12;p++){
    const a=(p/12)*Math.PI*2+T*0.08;
    const px=ox+R*Math.cos(a), py=oy+R*.2*Math.sin(a);
    const pulse=3+2*Math.sin(T*2+p);
    c.beginPath();c.arc(px,py,pulse,0,Math.PI*2);
    c.fillStyle=`hsl(${195+p*15},90%,70%)`;gw(`hsl(${195+p*15},90%,65%)`,10);c.fill();ng();
    if(p%3===0){
      lbl(px+(px>ox?12:-12),py,['O(x)','Tμν','J(x)','O†'][p%4],`hsl(${195+p*15},90%,70%)`,9,px>ox?'left':'right');
    }
  }

  // campo scalare nel BULK (φ animato)
  const bulkPt=cylPt(ox,oy,R,dep,0.45,T*0.2+1,0.38);
  c.beginPath();c.arc(bulkPt.x,bulkPt.y,9,0,Math.PI*2);
  const bG=c.createRadialGradient(bulkPt.x,bulkPt.y,1,bulkPt.x,bulkPt.y,9);
  bG.addColorStop(0,'#fff');bG.addColorStop(1,'#a78bfa');
  c.fillStyle=bG;gw('#a78bfa',15);c.fill();ng();
  lbl(bulkPt.x+16,bulkPt.y+4,'φ(z,x)','#c4b5fd',10,'left');

  // gravitone nel bulk (tratteggiato)
  const grav1=cylPt(ox,oy,R,dep,0.3,T*0.15+2.5,0.55);
  drawGraviton(grav1.x,grav1.y,28,'#fde68a');
  lbl(grav1.x,grav1.y-22,'gravitone','#fde68a',9,'center');
  lbl(grav1.x,grav1.y-10,'h_μν','#b45309',9,'center');

  // barione (stringa verticale)
  const barPt=cylPt(ox,oy,R,dep,0.7,T*0.1+4,0);
  const barBot=cylPt(ox,oy,R,dep,0.6,T*0.1+4,0.6);
  c.beginPath();c.moveTo(barPt.x,barPt.y);
  for(let k=0;k<=30;k++){
    const f=k/30;
    const xw=barPt.x+(barBot.x-barPt.x)*f+8*Math.sin(4*Math.PI*f+T*3);
    const yw=barPt.y+(barBot.y-barPt.y)*f;
    c.lineTo(xw,yw);
  }
  c.strokeStyle='#ef4444';c.lineWidth=2;gw('#ef4444',8);c.stroke();ng();
  c.beginPath();c.arc(barPt.x,barPt.y,5,0,Math.PI*2);c.fillStyle='#ef4444';gw('#ef4444',8);c.fill();ng();
  lbl(barPt.x+14,barPt.y+6,'barione','#ef4444',9,'left');
  lbl(barPt.x+14,barPt.y+18,'(stringa)','#7f1d1d',9,'left');

  // frecce segnale bordo→bulk
  for(let r=0;r<6;r++){
    const a=(r/6)*Math.PI*2+0.3;
    const p0=cylPt(ox,oy,R,dep,1,a,0);
    const prog=((T*0.18+r*0.25)%1);
    const pEnd=cylPt(ox,oy,R,dep,(1-prog)*.9,a,prog*.7);
    c.beginPath();c.moveTo(p0.x,p0.y);c.lineTo(pEnd.x,pEnd.y);
    c.strokeStyle=`rgba(74,222,128,${0.2*(1-prog)+0.05})`;c.lineWidth=1;c.stroke();
    c.beginPath();c.arc(pEnd.x,pEnd.y,2,0,Math.PI*2);
    c.fillStyle=`rgba(74,222,128,${0.6*(1-prog)})`;c.fill();
  }

  // etichette struttura
  lbl(ox,oy-28,'BORDO CFT₄ — Operatori O(x), Tμν, J(x)','#38bdf8',13,'center',true);
  lbl(ox,oy+dep+28,'FONDO IR — Brane / Black Hole AdS','#f59e0b',11,'center',true);
  lbl(ox-R-16,oy+dep*.5,'BULK AdS₅','#7c3aed',12,'center');
  lbl(ox-R-16,oy+dep*.5+16,'(gravità + campi)','#475569',9,'center');

  // asse z
  c.beginPath();c.moveTo(ox+R+16,oy);c.lineTo(ox+R+16,oy+dep);
  c.strokeStyle='rgba(148,163,184,0.4)';c.lineWidth=1.5;c.stroke();
  lbl(ox+R+32,oy+6,'z=0  UV (bordo)','#38bdf8',9,'left');
  lbl(ox+R+32,oy+dep*.5,'z=L    (bulk)','#94a3b8',9,'left');
  lbl(ox+R+32,oy+dep-6,'z→∞  IR (fondo)','#f59e0b',9,'left');

  lbl(W*.5,H*.93,'φ(z,x) = ∫ K(z,x|x\') O(x\') dx\'   —   ricostruzione HKLL','#4ade80',12,'center',true);
}

// ── FASE 1: collisione al bordo ───────────────────────────
function ph1(){
  const ox=W*.5, oy=H*.13, R=W*.28, dep=H*.56;
  drawAdsCylinder(ox,oy,R,dep,0.9);

  // ─ sinistra: collisione e+e- sul bordo ─
  if(pT%45===0 && collParticles.length<30){
    const a=Math.random()*Math.PI*2;
    const px=ox+R*Math.cos(a), py=oy+R*.2*Math.sin(a);
    const antiA=a+Math.PI;
    const apx=ox+R*Math.cos(antiA), apy=oy+R*.2*Math.sin(antiA);
    // coppia
    collParticles.push({
      x:px,y:py,tx:ox,ty:oy,
      col:'#ef4444',lbl:'e⁻',age:0,life:90,phase:'in',
      vz:0, fr:1, fa:a, fz:0
    });
    collParticles.push({
      x:apx,y:apy,tx:ox,ty:oy,
      col:'#60a5fa',lbl:'e⁺',age:0,life:90,phase:'in',
      vz:0, fr:1, fa:antiA, fz:0
    });
  }

  collParticles.forEach((p,i)=>{
    p.age++;
    if(p.phase==='in'){
      const prog=p.age/45;
      p.x=p.x+(p.tx-p.x)*0.08;
      p.y=p.y+(p.ty-p.y)*0.08;
      if(prog>=1 && p.age===45){
        p.phase='explode';
        // crea segnale verso bulk
        for(let k=0;k<8;k++){
          const fa2=(k/8)*Math.PI*2;
          smearRays.push({x:ox,y:oy,fa:fa2,fz:0,fr:0,
            speed:0.008+Math.random()*.006, col:'#4ade80',age:0,life:120});
        }
        // crea gravitone verso bulk
        gravitons.push({x:ox,y:oy,fz:0,fa:Math.random()*Math.PI*2,fr:0.1,
          vz:0.006, col:'#fde68a', age:0, life:140, spin:T});
      }
    } else if(p.phase==='explode'){
      p.x=ox+(p.x-ox)*0.85;
      p.y=oy+(p.y-oy)*0.85;
    }
    // disegna
    const alpha=Math.max(0,1-p.age/p.life);
    c.beginPath();c.arc(p.x,p.y,8-p.age/15,0,Math.PI*2);
    c.fillStyle=p.col;gw(p.col,10*alpha);c.globalAlpha=alpha;c.fill();ng();
    c.globalAlpha=1;
    if(p.age<30){ lbl(p.x,p.y-14,p.lbl,p.col,9); }
    if(p.age>=p.life) collParticles.splice(i,1);
  });

  // segnali HKLL nel bulk
  smearRays.forEach((r,i)=>{
    r.age++; r.fz+=r.speed;
    const pt=cylPt(ox,oy,R,dep, Math.min(r.fr+r.fz*.3, 0.92), r.fa, Math.min(r.fz,0.95));
    const alpha=Math.max(0,1-r.age/r.life);
    c.beginPath();c.arc(pt.x,pt.y,2.5,0,Math.PI*2);
    c.fillStyle=r.col;c.globalAlpha=alpha*0.9;gw(r.col,8);c.fill();ng();
    c.globalAlpha=1;
    // trail
    const pt2=cylPt(ox,oy,R,dep,Math.min(r.fr+r.fz*.3-.06, .92),r.fa,Math.max(r.fz-.06,0));
    c.beginPath();c.moveTo(pt2.x,pt2.y);c.lineTo(pt.x,pt.y);
    c.strokeStyle=r.col;c.lineWidth=1.2;c.globalAlpha=alpha*.4;c.stroke();c.globalAlpha=1;
    if(r.age>=r.life) smearRays.splice(i,1);
  });

  // gravitoni nel bulk
  gravitons.forEach((g,i)=>{
    g.age++; g.fz+=g.vz; g.fa+=0.018;
    g.fr=0.35*Math.sin(g.fz*Math.PI);
    const pt=cylPt(ox,oy,R,dep,g.fr,g.fa,Math.min(g.fz,0.95));
    const alpha=Math.max(0,1-g.age/g.life);
    drawGraviton(pt.x,pt.y,16,'#fde68a');
    c.globalAlpha=alpha*0.7;
    if(g.fz>.05){
      const ptPrev=cylPt(ox,oy,R,dep,g.fr*.9,g.fa-.018,Math.max(g.fz-g.vz,0));
      c.beginPath();c.moveTo(ptPrev.x,ptPrev.y);c.lineTo(pt.x,pt.y);
      c.strokeStyle='rgba(253,230,138,0.4)';c.lineWidth=1;c.setLineDash([4,4]);c.stroke();c.setLineDash([]);
    }
    c.globalAlpha=1;
    if(g.age>=g.life) gravitons.splice(i,1);
  });

  // punto collisione centrale (lampeggia)
  const flash=Math.abs(Math.sin(T*3));
  c.beginPath();c.arc(ox,oy,6+flash*8,0,Math.PI*2);
  const fg=c.createRadialGradient(ox,oy,0,ox,oy,14+flash*8);
  fg.addColorStop(0,`rgba(255,255,255,${flash*.9})`);
  fg.addColorStop(1,'rgba(0,0,0,0)');
  c.fillStyle=fg;c.fill();

  // etichette
  lbl(ox,oy-32,'Collisione e⁺e⁻ sul Bordo CFT','#38bdf8',14,'center',true);
  lbl(ox,oy-14,'Il punto di interazione eccita operatori O(x) e Tμν','#64748b',11,'center');
  lbl(ox,oy+dep+24,'Segnale HKLL φ(z,x) si propaga nel bulk','#4ade80',12,'center',true);
  lbl(ox,oy+dep+40,'Il gravitone hμν viaggia dalla collisione verso il fondo AdS','#fde68a',11,'center');

  // legenda collisione a sx
  const lx=W*.04, ly=H*.35;
  c.fillStyle='rgba(8,14,30,0.9)';c.beginPath();c.roundRect(lx,ly,175,100,8);c.fill();
  c.strokeStyle='#1e3a5f';c.lineWidth=1;c.stroke();
  lbl(lx+87,ly+16,'Evento di collisione','#e2e8f0',11,'center',true);
  c.beginPath();c.arc(lx+20,ly+36,6,0,Math.PI*2);c.fillStyle='#ef4444';c.fill();
  lbl(lx+30,ly+40,'e⁻  (quark)','#ef4444',10,'left');
  c.beginPath();c.arc(lx+20,ly+56,6,0,Math.PI*2);c.fillStyle='#60a5fa';c.fill();
  lbl(lx+30,ly+60,'e⁺  (antiquark)','#60a5fa',10,'left');
  c.beginPath();c.arc(lx+20,ly+76,4,0,Math.PI*2);c.fillStyle='#4ade80';c.fill();
  lbl(lx+30,ly+80,'segnale bulk φ','#4ade80',10,'left');
  c.beginPath();c.arc(lx+20,ly+95,5,0,Math.PI*2);c.fillStyle='#fde68a';c.fill();
  lbl(lx+30,ly+99,'gravitone h_μν','#fde68a',10,'left');
}

// ── FASE 2: smearing HKLL ─────────────────────────────────
function ph2(){
  const ox=W*.52, oy=H*.13, R=W*.26, dep=H*.55;
  drawAdsCylinder(ox,oy,R,dep,0.88);

  // punto nel bulk target
  const zT=0.45+0.15*Math.sin(T*0.4);
  const bulkPt=cylPt(ox,oy,R,dep,0,0,zT);
  c.beginPath();c.arc(bulkPt.x,bulkPt.y,10,0,Math.PI*2);
  const bpG=c.createRadialGradient(bulkPt.x,bulkPt.y,2,bulkPt.x,bulkPt.y,10);
  bpG.addColorStop(0,'#fff');bpG.addColorStop(1,'#a78bfa');
  c.fillStyle=bpG;gw('#a78bfa',18);c.fill();ng();
  lbl(bulkPt.x+18,bulkPt.y+4,'φ(z,x)','#c4b5fd',12,'left',true);
  lbl(bulkPt.x+18,bulkPt.y+18,'punto bulk','#7c3aed',9,'left');
  lbl(bulkPt.x+18,bulkPt.y+30,`z = ${zT.toFixed(2)}L`,'#64748b',9,'left');

  // raggi smearing dal bordo verso il punto bulk
  const nRays=18;
  for(let k=0;k<nRays;k++){
    const a=(k/nRays)*Math.PI*2;
    const bPt=cylPt(ox,oy,R,dep,1,a,0); // punto sul bordo
    // kernel K: ampiezza varia con angolo e z
    const kernelA=Math.abs(Math.cos(2*a+0.1))*0.7+0.3;
    const prog=((T*0.6+k*0.15)%1);
    // interpola dal bordo al punto bulk
    const ix=bPt.x+(bulkPt.x-bPt.x)*prog;
    const iy=bPt.y+(bulkPt.y-bPt.y)*prog;
    // linea di base (fissa)
    c.beginPath();c.moveTo(bPt.x,bPt.y);c.lineTo(bulkPt.x,bulkPt.y);
    c.strokeStyle=`rgba(249,115,22,${0.05+kernelA*0.12})`;c.lineWidth=0.8;c.stroke();
    // punto in moto
    c.beginPath();c.arc(ix,iy,2.5+kernelA*1.5,0,Math.PI*2);
    c.fillStyle=`rgba(249,115,22,${0.7*(1-prog)+0.1})`;
    gw('#f97316',6*(1-prog));c.fill();ng();
    // punto bordo (operatore)
    c.beginPath();c.arc(bPt.x,bPt.y,3+kernelA*3,0,Math.PI*2);
    c.fillStyle=`hsl(${195+k*15},90%,65%)`;
    c.globalAlpha=0.6+kernelA*0.4;c.fill();c.globalAlpha=1;
  }

  // visualizzazione kernel K(z,x|x') sulla sinistra
  const kx=W*.06, ky=H*.2, kW=W*.2, kH=H*.55;
  c.fillStyle='rgba(8,14,30,0.92)';c.beginPath();c.roundRect(kx,ky,kW,kH,10);c.fill();
  c.strokeStyle='#f97316';c.lineWidth=1;c.stroke();
  lbl(kx+kW/2,ky+18,'Kernel K(z,x|x\')','#f97316',12,'center',true);
  lbl(kx+kW/2,ky+32,'Smearing function','#64748b',9,'center');

  // grafico kernel (gaussiana allargata per z grande)
  const kGy=ky+kH*.35, kGH=kH*.45, kGW=kW-24;
  for(let d=0;d<3;d++){
    const zVal=[0.2,0.45,0.75][d];
    const colK=['#38bdf8','#f97316','#a78bfa'][d];
    const sigma=0.05+zVal*.35; // più largo per z grande
    c.beginPath();
    for(let px2=0;px2<=kGW;px2+=2){
      const fx=px2/kGW-.5;
      const kVal=Math.exp(-fx*fx/(2*sigma*sigma));
      const x2=kx+12+px2, y2=kGy+kGH-kVal*kGH*.9;
      px2===0?c.moveTo(x2,y2):c.lineTo(x2,y2);
    }
    c.strokeStyle=colK;c.lineWidth=1.5;c.stroke();
    lbl(kx+kW-8,kGy+kGH-[kGH*.85,kGH*.55,kGH*.2][d],`z=${zVal.toFixed(2)}`,colK,8,'right');
  }
  // assi
  c.beginPath();c.moveTo(kx+12,kGy);c.lineTo(kx+12,kGy+kGH);c.lineTo(kx+kW-8,kGy+kGH);
  c.strokeStyle='rgba(148,163,184,0.3)';c.lineWidth=1;c.stroke();
  lbl(kx+kW/2,kGy+kGH+14,'x\' (bordo)','#64748b',9,'center');
  lbl(kx+6,kGy+kGH/2,'K','#64748b',9,'center');

  lbl(kx+kW/2,ky+kH-28,'z piccolo:','#38bdf8',9,'center');
  lbl(kx+kW/2,ky+kH-16,'kernel stretto (locale)','#38bdf8',8,'center');
  lbl(kx+kW/2,ky+kH-4,'z grande: kernel diffuso','#a78bfa',8,'center');

  // formula
  c.fillStyle='rgba(8,14,30,0.92)';c.beginPath();c.roundRect(W*.3,H*.86,W*.46,H*.09,10);c.fill();
  c.strokeStyle='#f97316';c.lineWidth=1;c.stroke();
  lbl(W*.53,H*.86+16,'φ(z,x) = ∫ K(z,x|x\') O(x\') d⁴x\'','#f97316',13,'center',true);
  lbl(W*.53,H*.86+34,'Ogni punto del bulk = integrale non locale di operatori CFT sul bordo','#64748b',10,'center');

  lbl(W*.5,H*.06,'Smearing Kernel HKLL','#f1f5f9',18,'center',true);
  lbl(W*.5,H*.06+22,'Un campo bulk φ(z,x) è codificato in modo non locale sul bordo CFT — il kernel si allarga con z','#64748b',12,'center');
}

// ── FASE 3: gravitoni bulk↔bordo ─────────────────────────
function ph3(){
  const ox=W*.5, oy=H*.13, R=W*.27, dep=H*.55;
  drawAdsCylinder(ox,oy,R,dep,0.88);

  // ─ scambio gravitone nel bulk (diagramma di Witten) ─
  // due punti sul bordo
  const ptA=cylPt(ox,oy,R,dep,1,Math.PI*0.2,0);
  const ptB=cylPt(ox,oy,R,dep,1,Math.PI*1.2,0);
  // punto di vertice nel bulk
  const vz=0.5+0.1*Math.sin(T*.6);
  const ptV=cylPt(ox,oy,R,dep,0,0,vz);

  // linee Witten (bulk→bordo)
  c.beginPath();c.moveTo(ptA.x,ptA.y);c.lineTo(ptV.x,ptV.y);
  c.strokeStyle='rgba(56,189,248,0.5)';c.lineWidth=1.5;c.stroke();
  c.beginPath();c.moveTo(ptB.x,ptB.y);c.lineTo(ptV.x,ptV.y);
  c.strokeStyle='rgba(167,139,250,0.5)';c.lineWidth=1.5;c.stroke();

  // propagatore del gravitone (tratteggiato giallo tra due vertici)
  const ptV2=cylPt(ox,oy,R,dep,0.3,T*0.3,0.3);
  c.beginPath();c.moveTo(ptV.x,ptV.y);c.lineTo(ptV2.x,ptV2.y);
  c.strokeStyle='rgba(253,230,138,0.7)';c.lineWidth=2;c.setLineDash([5,4]);c.stroke();c.setLineDash([]);

  // punti vertice
  c.beginPath();c.arc(ptA.x,ptA.y,6,0,Math.PI*2);c.fillStyle='#38bdf8';gw('#38bdf8',10);c.fill();ng();
  c.beginPath();c.arc(ptB.x,ptB.y,6,0,Math.PI*2);c.fillStyle='#a78bfa';gw('#a78bfa',10);c.fill();ng();
  c.beginPath();c.arc(ptV.x,ptV.y,7,0,Math.PI*2);c.fillStyle='#fde68a';gw('#fde68a',12);c.fill();ng();
  c.beginPath();c.arc(ptV2.x,ptV2.y,6,0,Math.PI*2);c.fillStyle='#f97316';gw('#f97316',10);c.fill();ng();

  lbl(ptA.x+(ptA.x>ox?12:-12),ptA.y-8,'Tμν(x)','#38bdf8',10,ptA.x>ox?'left':'right');
  lbl(ptB.x+(ptB.x>ox?12:-12),ptB.y-8,'Tρσ(x\')','#a78bfa',10,ptB.x>ox?'left':'right');
  lbl(ptV.x-16,ptV.y-16,'gravitone','#fde68a',9,'right');
  lbl(ptV.x-16,ptV.y-4,'hμν','#b45309',9,'right');

  // gravitoni animati che emergono dal bulk al bordo
  if(pT%30===0 && gravitons.length<12){
    const fa=Math.random()*Math.PI*2;
    const fz0=0.3+Math.random()*0.4;
    gravitons.push({
      x:0,y:0,fa,fz:fz0,fr:0.2,vz:-0.007,
      col:'#fde68a',age:0,life:100,spin:T,dir:Math.random()>.5?1:-1
    });
  }
  gravitons.forEach((g,i)=>{
    g.age++;g.fz+=g.vz;g.fa+=0.02*g.dir;
    g.fr=0.2+Math.sin(g.fz*Math.PI*.5)*.3;
    const pt=cylPt(ox,oy,R,dep,Math.min(g.fr,0.95),g.fa,Math.max(g.fz,0));
    const alpha=Math.max(0,1-g.age/g.life);
    c.globalAlpha=alpha;
    drawGraviton(pt.x,pt.y,14,'#fde68a');
    c.globalAlpha=1;
    if(g.fz<=0 || g.age>=g.life){
      // flash al bordo
      const bPt=cylPt(ox,oy,R,dep,1,g.fa,0);
      c.beginPath();c.arc(bPt.x,bPt.y,12,0,Math.PI*2);
      c.fillStyle=`rgba(253,230,138,${0.4*alpha})`;gw('#fde68a',15);c.fill();ng();
      gravitons.splice(i,1);
    }
  });

  // box dualità a sinistra
  const bx=W*.02, by=H*.22;
  c.fillStyle='rgba(8,14,30,0.92)';c.beginPath();c.roundRect(bx,by,W*.22,H*.42,10);c.fill();
  c.strokeStyle='#fde68a44';c.lineWidth=1;c.stroke();
  lbl(bx+W*.11,by+16,'Gravitone','#fde68a',13,'center',true);
  lbl(bx+W*.11,by+32,'nel Bulk','#b45309',11,'center');
  lbl(bx+W*.11,by+52,'hμν (spin 2)','#fde68a',11,'center',true);
  lbl(bx+W*.11,by+68,'stringa chiusa','#64748b',9,'center');
  lbl(bx+W*.11,by+80,'libera nel bulk','#64748b',9,'center');
  c.fillStyle='#1e293b';c.fillRect(bx+14,by+92,W*.22-28,1);
  lbl(bx+W*.11,by+106,'⇕','#4ade80',20,'center');
  c.fillStyle='#1e293b';c.fillRect(bx+14,by+120,W*.22-28,1);
  lbl(bx+W*.11,by+138,'Tensore','#38bdf8',13,'center',true);
  lbl(bx+W*.11,by+154,'Energia-Impulso','#60a5fa',11,'center');
  lbl(bx+W*.11,by+174,'Tμν (CFT)','#38bdf8',11,'center',true);
  lbl(bx+W*.11,by+190,'generatore delle','#64748b',9,'center');
  lbl(bx+W*.11,by+202,'simmetrie conforme','#64748b',9,'center');
  c.fillStyle='#1e293b';c.fillRect(bx+14,by+214,W*.22-28,1);
  lbl(bx+W*.11,by+230,'⟨Tμν Tρσ⟩CFT','#4ade80',10,'center',true);
  lbl(bx+W*.11,by+244,'= diagramma Witten','#64748b',9,'center');
  lbl(bx+W*.11,by+256,'gravitone bulk','#64748b',9,'center');

  // diagramma Witten semplificato (a destra fuori cilindro)
  const wx=W*.78, wy=H*.3;
  c.fillStyle='rgba(8,14,30,0.9)';c.beginPath();c.roundRect(wx,wy,W*.2,H*.28,10);c.fill();
  c.strokeStyle='#fde68a44';c.lineWidth=1;c.stroke();
  lbl(wx+W*.1,wy+16,'Diagramma Witten','#fde68a',11,'center',true);
  // schema ASCII visivo
  const wCx=wx+W*.1, wCy=wy+H*.16;
  c.beginPath();c.arc(wCx,wCy,12,0,Math.PI*2);c.fillStyle='rgba(253,230,138,0.2)';c.fill();
  c.strokeStyle='#fde68a';c.lineWidth=1;c.stroke();
  lbl(wCx,wCy+4,'V','#fde68a',10,'center');
  const arms=[0,Math.PI*.5,Math.PI,Math.PI*1.5];
  arms.forEach(a=>{
    const ex=wCx+35*Math.cos(a),ey=wCy+20*Math.sin(a);
    c.beginPath();c.moveTo(wCx,wCy);c.lineTo(ex,ey);
    c.strokeStyle='rgba(56,189,248,0.6)';c.lineWidth=1.5;
    if(a===Math.PI*.5||a===Math.PI*1.5){c.strokeStyle='rgba(253,230,138,0.7)';c.setLineDash([4,3]);}
    c.stroke();c.setLineDash([]);
    c.beginPath();c.arc(ex,ey,4,0,Math.PI*2);
    c.fillStyle=a===0||a===Math.PI?'#38bdf8':'#fde68a';c.fill();
  });
  lbl(wCx,wy+H*.28-8,'Bulk-to-boundary','#64748b',8,'center');
  lbl(wCx,wy+H*.28+4,'propagator K(z,x|x\')','#64748b',8,'center');

  lbl(W*.5,H*.06,'Gravitoni: Bulk ↔ Bordo CFT','#f1f5f9',18,'center',true);
  lbl(W*.5,H*.06+22,'I gravitoni nel bulk AdS sono duali al tensore Tμν sul bordo — i diagrammi di Witten = correlatori CFT','#64748b',12,'center');
}

// ── FASE 4: materia barionica ↔ AdS ─────────────────────
function ph4(){
  const ox=W*.5, oy=H*.13, R=W*.27, dep=H*.55;
  drawAdsCylinder(ox,oy,R,dep,0.88);

  // ─ stringa barionica verticale ─
  // estremo sul bordo
  const baryonA=T*0.12;
  const bTop=cylPt(ox,oy,R,dep,0.7,baryonA,0);
  const bBot=cylPt(ox,oy,R,dep,0.15,baryonA,0.65);

  // disegna stringa (wiggly verticale)
  c.beginPath();
  const steps2=60;
  for(let k=0;k<=steps2;k++){
    const f=k/steps2;
    const fz=f*0.65, fr=0.7-f*0.55;
    const pt=cylPt(ox,oy,R,dep,fr,baryonA,fz);
    const wigX=6*Math.sin(5*Math.PI*f+T*3)*Math.sin(Math.PI*f);
    const wigY=3*Math.cos(5*Math.PI*f+T*3)*Math.sin(Math.PI*f);
    k===0?c.moveTo(pt.x+wigX,pt.y+wigY):c.lineTo(pt.x+wigX,pt.y+wigY);
  }
  c.strokeStyle='#ef4444';c.lineWidth=2.5;gw('#ef4444',10);c.stroke();ng();

  // quark in cima
  c.beginPath();c.arc(bTop.x,bTop.y,9,0,Math.PI*2);
  const qG=c.createRadialGradient(bTop.x,bTop.y,1,bTop.x,bTop.y,9);
  qG.addColorStop(0,'#fff');qG.addColorStop(1,'#ef4444');
  c.fillStyle=qG;gw('#ef4444',14);c.fill();ng();
  lbl(bTop.x+(bTop.x>ox?12:-12),bTop.y+4,'Barione','#ef4444',10,bTop.x>ox?'left':'right',true);
  lbl(bTop.x+(bTop.x>ox?12:-12),bTop.y+16,'(quark)','#7f1d1d',9,bTop.x>ox?'left':'right');

  // vertice D-brana al fondo
  c.beginPath();c.arc(bBot.x,bBot.y,7,0,Math.PI*2);
  c.fillStyle='#f59e0b';gw('#f59e0b',10);c.fill();ng();
  lbl(bBot.x-16,bBot.y+4,'wrap S⁵','#f59e0b',8,'right');

  // ─ Black Hole AdS (QGP) ─
  const bhA=baryonA+Math.PI*.8;
  const bhPt=cylPt(ox,oy,R,dep,0,0,0.62);
  const bhR=Math.min(R,dep*.2)*.38+4*Math.sin(T*.7);
  // orizzonte
  c.beginPath();c.arc(bhPt.x,bhPt.y,bhR,0,Math.PI*2);
  const bhG=c.createRadialGradient(bhPt.x,bhPt.y,2,bhPt.x,bhPt.y,bhR);
  bhG.addColorStop(0,'rgba(0,0,0,1)');bhG.addColorStop(.7,'rgba(50,0,80,.8)');bhG.addColorStop(1,'rgba(0,0,0,0)');
  c.fillStyle=bhG;gw('#7c3aed',20);c.fill();ng();
  // alone Hawking
  for(let r=1;r<=3;r++){
    c.beginPath();c.arc(bhPt.x,bhPt.y,bhR+r*8,0,Math.PI*2);
    c.strokeStyle=`rgba(124,58,237,${0.15-r*0.04})`;c.lineWidth=1;c.stroke();
  }
  // particelle di Hawking
  for(let hk=0;hk<5;hk++){
    const hA=(hk/5)*Math.PI*2+T*1.5;
    const hr=bhR+6+4*Math.sin(T*2+hk);
    c.beginPath();c.arc(bhPt.x+hr*Math.cos(hA),bhPt.y+hr*.5*Math.sin(hA),2.5,0,Math.PI*2);
    c.fillStyle='rgba(253,230,138,0.7)';c.fill();
  }
  lbl(bhPt.x,bhPt.y+bhR+18,'BH AdS','#a78bfa',11,'center',true);
  lbl(bhPt.x,bhPt.y+bhR+30,'(QGP duale)','#7c3aed',9,'center');

  // ─ gravitoni che attraversano bulk↔bordo ─
  if(pT%25===0 && gravitons.length<10){
    const dir=Math.random()>.5?1:-1;
    const fz0=dir>0?0:0.7;
    gravitons.push({x:0,y:0,fa:Math.random()*Math.PI*2,fz:fz0,fr:0.5+Math.random()*.3,
      vz:dir*0.007,col:'#fde68a',age:0,life:120,dir});
  }
  gravitons.forEach((g,i)=>{
    g.age++;g.fz+=g.vz;g.fa+=0.015;
    const pt=cylPt(ox,oy,R,dep,g.fr,g.fa,Math.min(Math.max(g.fz,0),0.95));
    const alpha=Math.max(0,1-g.age/g.life);
    c.globalAlpha=alpha;
    drawGraviton(pt.x,pt.y,13,'#fde68a');
    c.globalAlpha=1;
    if(g.age>=g.life||g.fz>0.95||g.fz<0) gravitons.splice(i,1);
  });

  // pannello dualità a sinistra
  const px=W*.02, py=H*.2;
  c.fillStyle='rgba(8,14,30,0.92)';c.beginPath();c.roundRect(px,py,W*.23,H*.55,10);c.fill();
  c.strokeStyle='#ef444444';c.lineWidth=1;c.stroke();
  lbl(px+W*.115,py+16,'Materia Barionica','#ef4444',12,'center',true);
  lbl(px+W*.115,py+30,'↔  Stringa nel Bulk','#94a3b8',10,'center');
  c.fillStyle='#1e293b';c.fillRect(px+10,py+40,W*.23-20,1);
  lbl(px+W*.115,py+56,'BORDO CFT','#38bdf8',10,'center',true);
  lbl(px+W*.115,py+70,'Barione (p,n)','#ef4444',10,'center');
  lbl(px+W*.115,py+84,'Nucleo atomico','#ef4444',10,'center');
  lbl(px+W*.115,py+98,'Plasma QGP','#f97316',10,'center');
  lbl(px+W*.115,py+112,'(RHIC, LHC)','#64748b',9,'center');
  c.fillStyle='#1e293b';c.fillRect(px+10,py+122,W*.23-20,1);
  lbl(px+W*.115,py+138,'⇕','#4ade80',18,'center');
  c.fillStyle='#1e293b';c.fillRect(px+10,py+152,W*.23-20,1);
  lbl(px+W*.115,py+168,'BULK AdS','#7c3aed',10,'center',true);
  lbl(px+W*.115,py+182,'Stringa verticale','#ef4444',10,'center');
  lbl(px+W*.115,py+196,'(wrap su S⁵)','#7f1d1d',9,'center');
  lbl(px+W*.115,py+210,'Black Hole AdS','#a78bfa',10,'center');
  lbl(px+W*.115,py+224,'(duale al QGP)','#7c3aed',9,'center');
  c.fillStyle='#1e293b';c.fillRect(px+10,py+236,W*.23-20,1);
  lbl(px+W*.115,py+252,'Viscosità η/s:','#4ade80',10,'center',true);
  lbl(px+W*.115,py+266,'η/s = ℏ/4πkB','#4ade80',11,'center',true);
  lbl(px+W*.115,py+282,'limite universale KSS','#64748b',9,'center');

  // pannello a destra
  const rx=W*.76, ry=H*.25;
  c.fillStyle='rgba(8,14,30,0.92)';c.beginPath();c.roundRect(rx,ry,W*.22,H*.38,10);c.fill();
  c.strokeStyle='#fde68a44';c.lineWidth=1;c.stroke();
  lbl(rx+W*.11,ry+16,'Gravitoni','#fde68a',12,'center',true);
  lbl(rx+W*.11,ry+30,'bulk ↔ bordo','#b45309',10,'center');
  c.fillStyle='#1e293b';c.fillRect(rx+10,ry+40,W*.22-20,1);
  lbl(rx+W*.11,ry+56,'Bulk → Bordo:','#7dd3fc',10,'center',true);
  lbl(rx+W*.11,ry+70,'segnale gravitazionale','#64748b',9,'center');
  lbl(rx+W*.11,ry+84,'→ T_μν sul bordo','#64748b',9,'center');
  c.fillStyle='#1e293b';c.fillRect(rx+10,ry+96,W*.22-20,1);
  lbl(rx+W*.11,ry+112,'Bordo → Bulk:','#7dd3fc',10,'center',true);
  lbl(rx+W*.11,ry+126,'operatori T_μν','#64748b',9,'center');
  lbl(rx+W*.11,ry+140,'→ hμν nel

## @Vicianzu

non funziona

*System: User retried message*

## Copilot

Il file precedente era troncato. Ecco la versione completa e funzionante, riscritta da zero più pulita:

```html name=bulk_reconstruction.html
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Bulk Reconstruction — AdS/CFT</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { background:#000010; color:#e2e8f0; font-family:'Georgia',serif; overflow:hidden; }
canvas { display:block; }
#ui {
  position:fixed; top:0; left:0; right:0;
  display:flex; justify-content:space-between; align-items:center;
  padding:10px 20px; background:rgba(0,0,16,0.93);
  border-bottom:1px solid #1e293b; z-index:100; gap:10px;
}
#title { font-size:12px; color:#38bdf8; letter-spacing:3px; white-space:nowrap; }
#pdesc { font-size:11px; color:#94a3b8; text-align:center; line-height:1.5; max-width:580px; }
#pname { font-size:13px; color:#7dd3fc; font-weight:bold; text-align:right; white-space:nowrap; }
#bar {
  position:fixed; bottom:0; left:0; right:0; padding:8px 16px;
  background:rgba(0,0,16,0.93); border-top:1px solid #1e293b;
  display:flex; justify-content:center; gap:8px; z-index:100; flex-wrap:wrap;
}
.btn { padding:6px 14px; border:1px solid #1e3a5f; background:#0c1a2e;
  color:#7dd3fc; border-radius:20px; cursor:pointer; font-size:11px; transition:all .3s; }
.btn:hover,.btn.active { background:#0c4a6e; border-color:#38bdf8; color:#e0f2fe; }
#info {
  position:fixed; right:12px; top:60px; width:200px;
  background:rgba(8,14,30,0.96); border:1px solid #1e3a5f;
  border-radius:10px; padding:12px; font-size:10px; color:#64748b;
  line-height:1.7; z-index:100;
}
#info h3 { color:#38bdf8; font-size:11px; margin-bottom:7px;
  border-bottom:1px solid #1e293b; padding-bottom:4px; }
.row { display:flex; justify-content:space-between; margin-bottom:2px; }
.val { color:#e2e8f0; font-weight:bold; }
.dot { width:10px; height:10px; border-radius:50%; display:inline-block; margin-right:5px; }
</style>
</head>
<body>
<div id="ui">
  <div id="title">BULK RECONSTRUCTION</div>
  <div id="pdesc">—</div>
  <div id="pname">—</div>
</div>
<canvas id="cv"></canvas>
<div id="info">
  <h3>DIZIONARIO</h3>
  <div class="row"><span>Fase:</span><span class="val" id="inf-ph">1/5</span></div>
  <div class="row"><span>Bulk:</span><span class="val">AdS₅</span></div>
  <div class="row"><span>Bordo:</span><span class="val">CFT₄</span></div>
  <hr style="border-color:#1e293b;margin:6px 0">
  <div><span class="dot" style="background:#38bdf8"></span>Bordo CFT</div>
  <div><span class="dot" style="background:#a78bfa"></span>Bulk AdS</div>
  <div><span class="dot" style="background:#fde68a"></span>Gravitone</div>
  <div><span class="dot" style="background:#f97316"></span>Kernel HKLL</div>
  <div><span class="dot" style="background:#ef4444"></span>Quark/barioni</div>
  <div><span class="dot" style="background:#4ade80"></span>Segnale ologr.</div>
  <hr style="border-color:#1e293b;margin:6px 0">
  <div style="color:#475569;font-size:9px;line-height:1.6">
    φ(z,x)=∫K(z,x|x')O(x')dx'<br>
    h_μν ↔ T_μν (CFT)<br>
    η/s = ℏ/4πk_B (KSS)
  </div>
</div>
<div id="bar">
  <button class="btn active" onclick="go(0)">① Panoramica</button>
  <button class="btn" onclick="go(1)">② Collisione → Bulk</button>
  <button class="btn" onclick="go(2)">③ Smearing HKLL</button>
  <button class="btn" onclick="go(3)">④ Gravitoni ↔ Bordo</button>
  <button class="btn" onclick="go(4)">⑤ Materia Barionica</button>
</div>

<script>
// ── setup ─────────────────────────────────────────────────
const cv = document.getElementById('cv');
const ctx = cv.getContext('2d');
let W, H;
function resize() { W = cv.width = window.innerWidth; H = cv.height = window.innerHeight; }
resize();
window.addEventListener('resize', resize);

let phase = 0, T = 0, pT = 0;
let pool = []; // pool particelle/gravitoni per ogni fase

const PHASES = [
  { name: "Panoramica Bulk Reconstruction",
    desc: "Bulk e bordo CFT sono equivalenti. Ogni evento nel bulk (gravitoni, campi scalari) ha un corrispondente esatto sul bordo (operatori, correlatori). La ricostruzione funziona in entrambe le direzioni." },
  { name: "Collisione sul Bordo → Segnale nel Bulk",
    desc: "Una collisione e⁺e⁻ sul bordo CFT crea operatori O(x) e T_μν. Questi eccitano campi φ nel bulk tramite kernel HKLL. Il segnale si propaga verso il fondo AdS mentre i gravitoni viaggiano attraverso il bulk." },
  { name: "Smearing Kernel HKLL",
    desc: "φ(z,x) = ∫ K(z,x|x') O(x') dx'. Un campo bulk in un punto riceve contributi non locali da tutto il bordo. Il kernel K si allarga con la profondità z: più sei nel bulk, più devi 'mediare' su una regione ampia del bordo." },
  { name: "Gravitoni: Bulk ↔ Bordo CFT",
    desc: "Il gravitone h_μν (stringa chiusa, spin 2) viaggia liberamente nel bulk. Sul bordo è duale al tensore energia-impulso T_μν. I diagrammi di Witten per gravitoni nel bulk = correlatori ⟨T_μν T_ρσ⟩ nel CFT." },
  { name: "Materia Barionica ↔ Stringa nel Bulk",
    desc: "Un barione (protone) nel CFT = stringa verticale nel bulk AdS con un estremo sul bordo. Il plasma quark-gluoni (QGP) creato a LHC/RHIC corrisponde a un Black Hole AdS. La viscosità η/s = ℏ/4πk_B è calcolata dal bulk." }
];

function go(n) {
  phase = n; pT = 0; pool = [];
  document.querySelectorAll('.btn').forEach((b, i) => b.classList.toggle('active', i === n));
  document.getElementById('inf-ph').textContent = (n + 1) + '/5';
  document.getElementById('pdesc').textContent = PHASES[n].desc;
  document.getElementById('pname').textContent = PHASES[n].name;
}

// ── utilità ───────────────────────────────────────────────
function txt(x, y, s, col, sz, al = 'center', bold = false) {
  ctx.fillStyle = col;
  ctx.font = (bold ? 'bold ' : '') + sz + 'px Georgia,serif';
  ctx.textAlign = al;
  ctx.fillText(s, x, y);
}
function glow(col, b) { ctx.shadowColor = col; ctx.shadowBlur = b; }
function noglow() { ctx.shadowBlur = 0; }
function circle(x, y, r, fill, glowCol = null, glowB = 0) {
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
  if (glowCol) { glow(glowCol, glowB); }
  ctx.fillStyle = fill; ctx.fill(); noglow();
}
function line(x1, y1, x2, y2, col, w = 1, dash = []) {
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
  ctx.strokeStyle = col; ctx.lineWidth = w;
  ctx.setLineDash(dash); ctx.stroke(); ctx.setLineDash([]);
}

// stelle di sfondo
let stars = null;
function drawStars() {
  if (!stars) stars = Array.from({ length: 150 }, () => ({
    x: Math.random() * 3000, y: Math.random() * 2000,
    r: Math.random() * 1.2 + 0.2, o: Math.random() * 0.3 + 0.08
  }));
  stars.forEach(s => {
    ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${s.o * (0.5 + 0.5 * Math.sin(T * 0.3 + s.x * 0.01))})`;
    ctx.fill();
  });
}

function drawBG() {
  const g = ctx.createRadialGradient(W / 2, H / 2, 80, W / 2, H / 2, Math.max(W, H));
  g.addColorStop(0, '#020920'); g.addColorStop(1, '#000010');
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
}

// ── cilindro AdS (bulk) ──────────────────────────────────
// ox,oy = centro ellisse superiore, R = raggio, D = profondità
function drawCylinder(ox, oy, R, D) {
  const ry = R * 0.22; // schiacciamento ellissi

  // riempimento laterale
  ctx.beginPath();
  ctx.moveTo(ox - R, oy);
  ctx.lineTo(ox - R, oy + D);
  ctx.ellipse(ox, oy + D, R, ry, 0, Math.PI, 0, false);
  ctx.lineTo(ox + R, oy);
  ctx.ellipse(ox, oy, R, ry, 0, 0, Math.PI, false);
  const lg = ctx.createLinearGradient(ox - R, oy, ox + R, oy + D);
  lg.addColorStop(0, 'rgba(60,20,120,0.18)');
  lg.addColorStop(1, 'rgba(20,0,50,0.08)');
  ctx.fillStyle = lg; ctx.fill();

  // anelli interni (isolinee z)
  for (let i = 1; i <= 7; i++) {
    const f = i / 7, zOff = f * D;
    ctx.beginPath(); ctx.ellipse(ox, oy + zOff, R * (1 - f * 0.04), ry * (1 - f * 0.04), 0, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${Math.floor(80 + f * 80)},${Math.floor(30 + f * 20)},${Math.floor(180 + f * 50)},${0.06 + f * 0.1})`;
    ctx.lineWidth = 0.7; ctx.stroke();
  }

  // linee verticali struttura
  for (let k = 0; k < 12; k++) {
    const a = (k / 12) * Math.PI * 2;
    const x1 = ox + R * Math.cos(a), x2 = ox + R * Math.cos(a);
    const y1 = oy + ry * Math.sin(a), y2 = oy + D + ry * Math.sin(a);
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
    ctx.strokeStyle = `rgba(100,60,200,${0.04 + 0.06 * Math.max(0, Math.cos(a))})`;
    ctx.lineWidth = 0.6; ctx.stroke();
  }

  // fondo IR (brane)
  ctx.beginPath(); ctx.ellipse(ox, oy + D, R, ry, 0, 0, Math.PI * 2);
  const fg = ctx.createRadialGradient(ox, oy + D, 5, ox, oy + D, R);
  fg.addColorStop(0, 'rgba(245,158,11,0.4)'); fg.addColorStop(0.5, 'rgba(100,30,0,0.15)'); fg.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = fg; ctx.fill();
  ctx.beginPath(); ctx.ellipse(ox, oy + D, R, ry, 0, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(245,158,11,0.35)'; ctx.lineWidth = 1.5; ctx.stroke();

  // bordo superiore (CFT)
  ctx.beginPath(); ctx.ellipse(ox, oy, R, ry, 0, 0, Math.PI * 2);
  const tg = ctx.createRadialGradient(ox, oy, 8, ox, oy, R);
  tg.addColorStop(0, 'rgba(56,189,248,0.28)'); tg.addColorStop(0.6, 'rgba(56,189,248,0.12)'); tg.addColorStop(1, 'rgba(56,189,248,0.04)');
  ctx.fillStyle = tg; glow('#38bdf8', 18); ctx.fill(); noglow();
  ctx.beginPath(); ctx.ellipse(ox, oy, R, ry, 0, 0, Math.PI * 2);
  ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2.5; glow('#38bdf8', 14); ctx.stroke(); noglow();
}

// punto nel cilindro: fr=0..1 radiale, fa=angolo, fz=0(top)..1(bottom)
function cylPt(ox, oy, R, D, fr, fa, fz) {
  const ry = R * 0.22;
  return {
    x: ox + R * fr * Math.cos(fa),
    y: oy + ry * fr * Math.sin(fa) + fz * D
  };
}

// gravitone (loop tratteggiato pulsante)
function drawGraviton(x, y, r, col) {
  ctx.beginPath();
  for (let i = 0; i <= 200; i++) {
    const a = (i / 200) * Math.PI * 2;
    const d = 1 + 0.22 * Math.sin(2 * a - T * 2.5) + 0.08 * Math.cos(4 * a + T * 1.5);
    const px = x + r * d * Math.cos(a), py = y + r * d * 0.6 * Math.sin(a);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.strokeStyle = col; ctx.lineWidth = 1.8;
  ctx.setLineDash([5, 3]); glow(col, 12); ctx.stroke(); noglow(); ctx.setLineDash([]);
}

// particella con alone
function drawParticle(x, y, r, col, label = '') {
  const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 1, x, y, r);
  g.addColorStop(0, '#fff'); g.addColorStop(1, col);
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = g; glow(col, 12); ctx.fill(); noglow();
  if (label) { txt(x, y + r * 0.4, label, '#fff', r * 0.9, 'center', true); }
}

// box con sfondo scuro
function box(x, y, w, h, borderCol = '#1e3a5f') {
  ctx.fillStyle = 'rgba(8,14,30,0.92)';
  ctx.beginPath(); ctx.roundRect(x, y, w, h, 8); ctx.fill();
  ctx.strokeStyle = borderCol; ctx.lineWidth = 1; ctx.stroke();
}

// ── FASE 0: panoramica ───────────────────────────────────
function drawPhase0() {
  const ox = W * 0.5, oy = H * 0.14, R = W * 0.28, D = H * 0.58;
  const ry = R * 0.22;
  drawCylinder(ox, oy, R, D);

  // operatori sul bordo (punti pulsanti)
  for (let p = 0; p < 14; p++) {
    const a = (p / 14) * Math.PI * 2 + T * 0.06;
    const px = ox + R * Math.cos(a), py = oy + ry * Math.sin(a);
    const r = 3 + 2 * Math.sin(T * 2.5 + p);
    circle(px, py, r, `hsl(${195 + p * 15},90%,70%)`, `hsl(${195 + p * 15},90%,65%)`, 9);
    if (p % 4 === 0) {
      const side = px > ox ? 1 : -1;
      txt(px + side * 12, py + 4, ['O(x)', 'Tμν', 'J(x)', 'O†'][p / 4 | 0], `hsl(${195 + p * 15},90%,70%)`, 9, side > 0 ? 'left' : 'right');
    }
  }

  // campo scalare φ nel bulk
  const bp = cylPt(ox, oy, R, D, 0.42, T * 0.18 + 1, 0.38);
  drawParticle(bp.x, bp.y, 9, '#a78bfa', 'φ');
  txt(bp.x + 16, bp.y - 6, 'φ(z,x)', '#c4b5fd', 10, 'left');
  txt(bp.x + 16, bp.y + 8, 'campo bulk', '#7c3aed', 9, 'left');

  // gravitone nel bulk
  const gp = cylPt(ox, oy, R, D, 0.28, T * 0.13 + 2.8, 0.55);
  drawGraviton(gp.x, gp.y, 18, '#fde68a');
  txt(gp.x, gp.y - 28, 'h_μν', '#fde68a', 10, 'center', true);
  txt(gp.x, gp.y - 16, 'gravitone', '#b45309', 9);

  // barione (stringa verticale rossa)
  const bTop = cylPt(ox, oy, R, D, 0.72, T * 0.08 + 4.2, 0.0);
  const bBot

## @Vicianzu

non funziona

*System: User retried message*

## Copilot



*System: User retried message*

## Copilot



*System: User retried message*

## @Vicianzu

aggiungi una pagina di animazione del bulk reconstruction, da una parte particelle che si scontrano, dall'altra materia barionica e i gravitoni che viaggiano da entrambe le parti

*System: User retried message*

## Copilot

```html name=bulk_reconstruction.html
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Bulk Reconstruction — AdS/CFT</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { background:#000010; color:#e2e8f0; font-family:'Georgia',serif; overflow:hidden; }
#canvas { display:block; }
#ui {
  position:fixed; top:0; left:0; right:0;
  display:flex; justify-content:space-between; align-items:center;
  padding:10px 20px; background:rgba(0,0,16,0.93);
  border-bottom:1px solid #1e293b; z-index:100; gap:10px;
}
#title    { font-size:12px; color:#38bdf8; letter-spacing:3px; text-transform:uppercase; white-space:nowrap; }
#phase-desc { font-size:11px; color:#94a3b8; text-align:center; line-height:1.5; max-width:600px; }
#phase-name { font-size:13px; color:#7dd3fc; font-weight:bold; text-align:right; white-space:nowrap; min-width:180px; }
#bottom {
  position:fixed; bottom:0; left:0; right:0; padding:8px 16px;
  background:rgba(0,0,16,0.93); border-top:1px solid #1e293b;
  display:flex; justify-content:center; gap:8px; z-index:100; flex-wrap:wrap;
}
.btn { padding:5px 13px; border:1px solid #1e3a5f; background:#0c1a2e; color:#7dd3fc;
  border-radius:18px; cursor:pointer; font-size:11px; transition:all 0.3s; }
.btn:hover, .btn.active { background:#0c4a6e; border-color:#38bdf8; color:#e0f2fe; }
#legend {
  position:fixed; left:12px; top:62px; width:195px;
  background:rgba(8,14,30,0.95); border:1px solid #1e3a5f; border-radius:10px;
  padding:12px; font-size:10px; color:#64748b; line-height:1.7; z-index:100;
}
#legend h3 { color:#38bdf8; font-size:11px; margin-bottom:7px;
  border-bottom:1px solid #1e293b; padding-bottom:4px; letter-spacing:1px; }
.lr { display:flex; align-items:center; gap:7px; margin-bottom:4px; }
.ld { width:14px; height:3px; border-radius:2px; flex-shrink:0; }
.lc { width:10px; height:10px; border-radius:50%; flex-shrink:0; }
</style>
</head>
<body>
<div id="ui">
  <div id="title">Bulk Reconstruction</div>
  <div id="phase-desc">—</div>
  <div id="phase-name">—</div>
</div>
<canvas id="canvas"></canvas>

<div id="legend">
  <h3>LEGENDA</h3>
  <div class="lr"><div class="lc" style="background:#f59e0b;"></div><span>Quark / adroni (bordo)</span></div>
  <div class="lr"><div class="lc" style="background:#60a5fa;"></div><span>Elettroni (bordo)</span></div>
  <div class="lr"><div class="lc" style="background:#fde68a;border:1px dashed #fde68a;"></div><span>Gravitoni (bulk↔bordo)</span></div>
  <div class="lr"><div class="lc" style="background:#a78bfa;"></div><span>Campo scalare φ (bulk)</span></div>
  <div class="lr"><div class="ld" style="background:#38bdf8;"></div><span>Bordo CFT₄</span></div>
  <div class="lr"><div class="ld" style="background:#7c3aed;"></div><span>Bulk AdS₅</span></div>
  <div class="lr"><div class="ld" style="background:#4ade80;border-top:1px dashed #4ade80;"></div><span>Kernel HKLL K(z,x|x')</span></div>
  <div class="lr"><div class="ld" style="background:#ef4444;"></div><span>Entanglement wedge</span></div>
  <hr style="border-color:#1e293b;margin:6px 0;">
  <div style="color:#334155;font-size:9px;line-height:1.5;">
    φ(x,z) = ∫K(x,z|x')O(x')dx'<br>
    h_μν ~ ∫K·T_μν dx'<br>
    Ryu-Takayanagi: S=A/4G
  </div>
</div>

<div id="bottom">
  <button class="btn active" onclick="go(0)">① Scenario</button>
  <button class="btn"        onclick="go(1)">② CFT: collisioni sul bordo</button>
  <button class="btn"        onclick="go(2)">③ Gravitoni nel bulk</button>
  <button class="btn"        onclick="go(3)">④ HKLL Reconstruction</button>
  <button class="btn"        onclick="go(4)">⑤ Entanglement Wedge</button>
  <button class="btn"        onclick="go(5)">⑥ Bulk ↔ Bordo completo</button>
</div>

<script>
const cv=document.getElementById('canvas');
const ctx=cv.getContext('2d');
let W,H;
function resize(){ W=cv.width=window.innerWidth; H=cv.height=window.innerHeight; }
resize(); window.addEventListener('resize',resize);

let ph=0, T=0, pT=0;

// pool di oggetti
let cftParticles=[], bulkParticles=[], gravitons=[], hkllKernels=[], wedgeAlpha=0;

const PHASES=[
  { name:"Scenario: due mondi speculari",
    desc:"A sinistra: il BORDO (CFT₄) — particelle che si scontrano, materia barionica, quark, adroni. A destra: il BULK (AdS₅) — campi scalari, gravitoni. I due lati sono la stessa fisica vista da due prospettive diverse." },
  { name:"Bordo CFT: collisioni e materia",
    desc:"Sul bordo 4D vivono le particelle del Modello Standard. Le collisioni ad alta energia (quark-antiquark, e⁺e⁻...) generano operatori compositi O(x). La funzione a due punti ⟨O(x)O(y)⟩ è il correlatore CFT." },
  { name:"Bulk: gravitoni e campi scalari",
    desc:"Nel bulk AdS i gravitoni (spin 2) si propagano lungo geodetiche iperboliche. Ogni gravitone porta informazione dall'interno al bordo. La metrica bulk g_μν fluctua: h_μν = g_μν − ḡ_μν (perturbazione di AdS)." },
  { name:"HKLL Bulk Reconstruction",
    desc:"Il campo bulk φ(x,z) si ricostruisce dal bordo via smearing: φ(x,z)=∫K(x,z|x')O(x')dx'. Il kernel K è la funzione di Green di AdS. Ogni punto del bulk è una sovrapposizione non-locale di operatori CFT." },
  { name:"Entanglement Wedge",
    desc:"Una regione A del bordo codifica il suo 'cuneo di entanglement' nel bulk (wedge). La superficie di Ryu-Takayanagi (minima nel bulk) separa le regioni. Gli operatori bulk nel wedge si possono ricostruire solo da A." },
  { name:"Bulk ↔ Bordo: scambio completo",
    desc:"Il flusso di informazione è bidirezionale: materia barionica e collisioni sul bordo ↔ gravitoni e geometria nel bulk. Tutto ciò che accade nel bulk 5D è codificato fedelmente nel bordo 4D — e viceversa." },
];

function go(n){
  ph=n; pT=0;
  cftParticles=[]; bulkParticles=[]; gravitons=[]; hkllKernels=[]; wedgeAlpha=0;
  document.querySelectorAll('.btn').forEach((b,i)=>b.classList.toggle('active',i===n));
  document.getElementById('phase-desc').textContent=PHASES[n].desc;
  document.getElementById('phase-name').textContent=PHASES[n].name;
}

// ── helpers ───────────────────────────────────────────────
function lbl(x,y,t,col,sz,al='center',bold=false){
  ctx.fillStyle=col; ctx.font=`${bold?'bold ':''}${sz}px Georgia,serif`;
  ctx.textAlign=al; ctx.fillText(t,x,y);
}
function gw(c,b){ctx.shadowColor=c;ctx.shadowBlur=b;}
function ng(){ctx.shadowBlur=0;}
function lerp(a,b,t){return a+(b-a)*t;}
function rnd(a,b){return a+Math.random()*(b-a);}

let _st=null;
function drawStars(){
  if(!_st)_st=Array.from({length:140},()=>({x:rnd(0,3000),y:rnd(0,2000),r:rnd(0.2,1.3),o:rnd(0.05,0.3)}));
  _st.forEach(s=>{ ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(255,255,255,${s.o*(0.5+0.5*Math.sin(T*0.25+s.x*.01))})`;ctx.fill(); });
}
function drawBG(){
  const g=ctx.createRadialGradient(W/2,H/2,60,W/2,H/2,Math.max(W,H));
  g.addColorStop(0,'#020920');g.addColorStop(1,'#000010');
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
}

// ── LAYOUT: divider verticale ─────────────────────────────
const DIV=()=>W/2;

function drawDivider(){
  // linea centrale
  ctx.beginPath();ctx.moveTo(DIV(),58);ctx.lineTo(DIV(),H-50);
  ctx.strokeStyle='rgba(100,116,139,0.25)';ctx.lineWidth=1;
  ctx.setLineDash([6,8]);ctx.stroke();ctx.setLineDash([]);

  // etichette header
  const py=H*.04+28;
  // bordo
  ctx.fillStyle='rgba(8,22,50,0.85)';
  ctx.beginPath();ctx.roundRect(DIV()-380,py-16,190,30,20);ctx.fill();
  ctx.strokeStyle='#38bdf844';ctx.lineWidth=1;ctx.stroke();
  lbl(DIV()-285,py+6,'BORDO  —  CFT₄','#38bdf8',12,'center',true);

  // bulk
  ctx.fillStyle='rgba(20,8,50,0.85)';
  ctx.beginPath();ctx.roundRect(DIV()+190,py-16,190,30,20);ctx.fill();
  ctx.strokeStyle='#7c3aed44';ctx.lineWidth=1;ctx.stroke();
  lbl(DIV()+285,py+6,'BULK  —  AdS₅','#a78bfa',12,'center',true);
}

// ── STRUTTURA CILINDRO ADS (sempre presente a destra) ─────
function drawAdsCylinder(alpha=1){
  const ox=DIV()+W*.26, oy=H*.5;
  const rx=W*.21, ry=H*.38;
  ctx.save(); ctx.globalAlpha=alpha;

  // riempimento bulk
  const bg=ctx.createRadialGradient(ox,oy,20,ox,oy,rx*.9);
  bg.addColorStop(0,'rgba(124,58,237,0.18)');bg.addColorStop(1,'rgba(0,0,16,0.05)');
  ctx.beginPath();ctx.ellipse(ox,oy,rx,ry,0,0,Math.PI*2);
  ctx.fillStyle=bg;ctx.fill();

  // linee di latitudine (orizzontali)
  for(let k=1;k<=7;k++){
    const f=k/8;
    ctx.beginPath();ctx.ellipse(ox,oy,rx*f,ry*f,0,0,Math.PI*2);
    ctx.strokeStyle=`rgba(124,58,237,${0.06+0.06*f})`;ctx.lineWidth=0.7;ctx.stroke();
  }
  // linee di longitudine
  for(let k=0;k<12;k++){
    const a=(k/12)*Math.PI*2;
    ctx.beginPath();ctx.moveTo(ox,oy);
    ctx.lineTo(ox+rx*Math.cos(a),oy+ry*Math.sin(a));
    ctx.strokeStyle='rgba(124,58,237,0.06)';ctx.lineWidth=0.6;ctx.stroke();
  }

  // bordo (ellisse esterna brillante)
  ctx.beginPath();ctx.ellipse(ox,oy,rx,ry,0,0,Math.PI*2);
  ctx.strokeStyle='#7c3aed';ctx.lineWidth=2;gw('#7c3aed',12);ctx.stroke();ng();

  // etichetta
  lbl(ox,oy-ry-16,'AdS₅ (bulk)','#7c3aed',11,'center',true);
  lbl(ox,oy+ry+14,'z=0 (bordo UV)','#64748b',9,'center');
  lbl(ox,oy,'z→∞ (IR)','#475569',9,'center');

  ctx.restore();
  return {ox,oy,rx,ry};
}

// ── STRUTTURA BORDO CFT (a sinistra) ──────────────────────
function drawCftBoundary(alpha=1){
  const ox=DIV()-W*.26, oy=H*.5;
  const rx=W*.2, ry=H*.36;
  ctx.save(); ctx.globalAlpha=alpha;

  // riempimento
  const bg=ctx.createRadialGradient(ox,oy,20,ox,oy,rx*.9);
  bg.addColorStop(0,'rgba(56,189,248,0.14)');bg.addColorStop(1,'rgba(0,0,16,0.04)');
  ctx.beginPath();ctx.ellipse(ox,oy,rx,ry,0,0,Math.PI*2);
  ctx.fillStyle=bg;ctx.fill();

  // griglia campo
  const cols=10,rows=8;
  for(let i=0;i<=cols;i++){
    const a=(i/cols)*Math.PI*2;
    ctx.beginPath();ctx.moveTo(ox,oy);
    ctx.lineTo(ox+rx*Math.cos(a),oy+ry*Math.sin(a));
    ctx.strokeStyle='rgba(56,189,248,0.06)';ctx.lineWidth=0.6;ctx.stroke();
  }
  for(let k=1;k<=5;k++){
    ctx.beginPath();ctx.ellipse(ox,oy,rx*(k/5),ry*(k/5),0,0,Math.PI*2);
    ctx.strokeStyle=`rgba(56,189,248,${0.06+0.04*(k/5)})`;ctx.lineWidth=0.7;ctx.stroke();
  }

  // cerchio bordo
  ctx.beginPath();ctx.ellipse(ox,oy,rx,ry,0,0,Math.PI*2);
  ctx.strokeStyle='#38bdf8';ctx.lineWidth=2.5;gw('#38bdf8',14);ctx.stroke();ng();

  lbl(ox,oy-ry-16,'CFT₄ (bordo)','#38bdf8',11,'center',true);
  lbl(ox,oy+ry+14,'operatori O(x)','#64748b',9,'center');

  ctx.restore();
  return {ox,oy,rx,ry};
}

// ── PARTICELLA ────────────────────────────────────────────
function drawParticle(x,y,r,col,label,trail=[]){
  // trail
  trail.forEach((pt,i)=>{
    ctx.beginPath();ctx.arc(pt.x,pt.y,r*.4,0,Math.PI*2);
    ctx.fillStyle=col;ctx.globalAlpha=(i/trail.length)*.3;ctx.fill();ctx.globalAlpha=1;
  });
  // corpo
  ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);
  const g=ctx.createRadialGradient(x-r*.3,y-r*.3,1,x,y,r);
  g.addColorStop(0,'#fff');g.addColorStop(.5,col);g.addColorStop(1,'rgba(0,0,16,.3)');
  ctx.fillStyle=g;gw(col,10);ctx.fill();ng();
  if(label){
    ctx.fillStyle='#fff';ctx.font=`bold ${Math.max(8,r*.8)}px sans-serif`;
    ctx.textAlign='center';ctx.fillText(label,x,y+r*.35);
  }
}

// ── GRAVITONE ─────────────────────────────────────────────
function drawGraviton(x,y,r,alpha=1){
  ctx.save();ctx.globalAlpha=alpha;
  // onda circolare doppia (spin 2)
  for(let ring=0;ring<2;ring++){
    ctx.beginPath();
    for(let i=0;i<=80;i++){
      const a=(i/80)*Math.PI*2;
      const dr=r*(1+.22*Math.sin(2*a+T*3+ring*Math.PI));
      ctx.lineTo(x+dr*Math.cos(a),y+dr*Math.sin(a));
    }
    ctx.closePath();
    ctx.strokeStyle=ring===0?'#fde68a':'#f59e0b';
    ctx.lineWidth=1.5;ctx.setLineDash([3,3]);gw('#fde68a',8);ctx.stroke();ng();ctx.setLineDash([]);
  }
  ctx.beginPath();ctx.arc(x,y,r*.35,0,Math.PI*2);
  ctx.fillStyle='#fde68a';gw('#fde68a',10);ctx.fill();ng();
  ctx.fillStyle='#000';ctx.font=`bold ${Math.round(r*.55)}px sans-serif`;ctx.textAlign='center';
  ctx.fillText('g',x,y+r*.2);
  ctx.restore();
}

// ── FASE 0: scenario overview ────────────────────────────
function ph0(){
  const cft=drawCftBoundary(1);
  const ads=drawAdsCylinder(1);
  drawDivider();

  // particelle sul bordo (statiche, demo)
  const bParticles=[
    {x:cft.ox-cft.rx*.5,y:cft.oy-cft.ry*.3,r:9, col:'#f59e0b',lbl:'u'},
    {x:cft.ox+cft.rx*.3,y:cft.oy+cft.ry*.25,r:9,col:'#3b82f6',lbl:'d'},
    {x:cft.ox-cft.rx*.2,y:cft.oy+cft.ry*.4, r:8,col:'#60a5fa',lbl:'e⁻'},
    {x:cft.ox+cft.rx*.5,y:cft.oy-cft.ry*.2, r:10,col:'#ef4444',lbl:'p'},
    {x:cft.ox-cft.rx*.55,y:cft.oy+cft.ry*.1,r:9,col:'#10b981',lbl:'n'},
    {x:cft.ox,y:cft.oy-cft.ry*.55, r:8,col:'#a78bfa',lbl:'γ'},
  ];
  bParticles.forEach(p=>drawParticle(p.x+Math.sin(T*.5+p.r)*3,p.y+Math.cos(T*.4+p.r)*3,p.r,p.col,p.lbl));

  // campi nel bulk
  const bkParticles=[
    {x:ads.ox-ads.rx*.4,y:ads.oy-ads.ry*.3, r:11,col:'#a78bfa',lbl:'φ'},
    {x:ads.ox+ads.rx*.35,y:ads.oy+ads.ry*.2,r:10,col:'#a78bfa',lbl:'φ'},
  ];
  bkParticles.forEach(p=>drawParticle(p.x+Math.sin(T*.3+p.r)*4,p.y+Math.cos(T*.35+p.r)*4,p.r,p.col,p.lbl));

  // gravitoni nel bulk
  for(let g=0;g<3;g++){
    const ga=T*.3+g*2.1, gr=ads.rx*(.3+.3*((g)%2));
    drawGraviton(ads.ox+gr*Math.cos(ga),ads.oy+ads.ry*.6*Math.sin(ga),14);
  }

  // frecce bidirezionali al centro
  const ay=H*.5;
  for(let i=-2;i<=2;i++){
    const y2=ay+i*H*.08;
    const prog=(T*.4+i*.5)%1;
    const col=prog<.5?'#fde68a':'#4ade80';
    const x2=DIV()-100+200*prog;
    ctx.beginPath();ctx.arc(x2,y2,4,0,Math.PI*2);
    ctx.fillStyle=col;gw(col,8);ctx.fill();ng();
  }
  // etichetta frecce
  lbl(DIV(),H*.5-H*.22,'gravitoni  /  info olografica','#4ade80',10,'center');
  lbl(DIV(),H*.5-H*.22+14,'↔','#4ade80',14,'center',true);

  // box info
  ctx.fillStyle='rgba(8,14,30,0.9)';
  ctx.beginPath();ctx.roundRect(W*.03,H*.78,W*.94,H*.14,10);ctx.fill();
  ctx.strokeStyle='#1e3a5f';ctx.lineWidth=1;ctx.stroke();
  lbl(W*.5,H*.78+16,'Il principio di bulk reconstruction','#38bdf8',13,'center',true);
  lbl(W*.5,H*.78+34,'Ogni evento sul bordo (collisioni, materia) è codificato nei campi del bulk — e viceversa.','#94a3b8',11,'center');
  lbl(W*.5,H*.78+52,'I gravitoni viaggiano dal bulk al bordo portando l\'impronta della geometria. Gli operatori CFT si','#64748b',10,'center');
  lbl(W*.5,H*.78+66,'combinano (HKLL) per ricostruire ogni punto dello spazio AdS, fin dentro l\'orizzonte degli eventi.','#64748b',10,'center');

  lbl(W*.5,H*.04+22,'Bulk Reconstruction — AdS/CFT','#f1f5f9',18,'center',true);
  lbl(W*.5,H*.04+40,'Due facce della stessa realtà fisica: bordo e bulk si rispecchiano fedelmente','#64748b',11,'center');
}

// ── FASE 1: collisioni sul bordo ────────────────────────
function ph1(){
  const cft=drawCftBoundary(1);
  drawAdsCylinder(0.25);
  drawDivider();

  // spawn collisioni
  if(pT%35===0 && cftParticles.length<50){
    const types=[
      {col:'#f59e0b',lbl:'u', r:9},  {col:'#3b82f6',lbl:'d', r:9},
      {col:'#60a5fa',lbl:'e⁻',r:8}, {col:'#ef4444',lbl:'ū', r:9},
      {col:'#10b981',lbl:'s', r:8},  {col:'#a78bfa',lbl:'ν', r:7},
      {col:'#f97316',lbl:'g', r:8},  {col:'#fde68a',lbl:'γ', r:7},
    ];
    // coppia che si scontra
    const tp1=types[Math.floor(Math.random()*4)];
    const tp2=types[Math.floor(Math.random()*4)];
    const cx2=cft.ox+rnd(-cft.rx*.5,cft.rx*.5);
    const cy2=cft.oy+rnd(-cft.ry*.5,cft.ry*.5);
    const ang=Math.random()*Math.PI*2;
    const spd=1.4+Math.random();
    cftParticles.push({x:cx2+50*Math.cos(ang),y:cy2+50*Math.sin(ang),
      vx:-spd*Math.cos(ang),vy:-spd*Math.sin(ang),...tp1,trail:[],age:0,collided:false,cx:cx2,cy:cy2});
    cftParticles.push({x:cx2-50*Math.cos(ang),y:cy2-50*Math.sin(ang),
      vx:spd*Math.cos(ang),vy:spd*Math.sin(ang),...tp2,trail:[],age:0,collided:false,cx:cx2,cy:cy2});
  }

  // aggiorna e disegna particelle
  cftParticles.forEach((p,i)=>{
    p.trail.push({x:p.x,y:p.y});
    if(p.trail.length>18)p.trail.shift();
    if(!p.collided){
      p.x+=p.vx;p.y+=p.vy;p.age++;
      // collisione
      if(Math.hypot(p.x-p.cx,p.y-p.cy)<8&&p.age>10){
        p.collided=true;
        // explosion
        for(let k=0;k<6;k++){
          const ea=Math.random()*Math.PI*2,es=2+Math.random()*2;
          const prodTypes=[{col:'#f59e0b',lbl:'u',r:7},{col:'#3b82f6',lbl:'d',r:7},
            {col:'#fde68a',lbl:'γ',r:6},{col:'#f97316',lbl:'g',r:6}];
          const pt=prodTypes[k%4];
          cftParticles.push({x:p.cx,y:p.cy,vx:es*Math.cos(ea),vy:es*Math.sin(ea),
            ...pt,trail:[],age:0,collided:true,cx:p.cx,cy:p.cy,product:true});
        }
      }
    } else {
      p.x+=p.vx*.96;p.y+=p.vy*.96;p.age++;
      p.vx*=0.97;p.vy*=0.97;
    }
    drawParticle(p.x,p.y,p.r,p.col,p.lbl,p.trail);

    // operatore CFT sul bordo
    if(p.collided&&p.age>5&&p.age%12===0){
      ctx.beginPath();ctx.arc(p.x,p.y,p.r+6+Math.sin(T*3)*3,0,Math.PI*2);
      ctx.strokeStyle='rgba(56,189,248,0.4)';ctx.lineWidth=1;ctx.stroke();
    }
    if(p.age>90||Math.hypot(p.x-cft.ox,p.y-cft.oy)>Math.max(cft.rx,cft.ry)*1.1)
      cftParticles.splice(i,1);
  });

  // protone (materia barionica statica)
  const prX=cft.ox+cft.rx*.65, prY=cft.oy;
  drawBaryonMatter(prX,prY,32);

  // etomi
  const atX=cft.ox-cft.rx*.7, atY=cft.oy+cft.ry*.5;
  drawAtom(atX,atY,28);

  // annotazioni
  lbl(cft.ox,cft.oy-cft.ry-22,'Collisioni ad alta energia','#38bdf8',13,'center',true);
  lbl(cft.ox,cft.oy-cft.ry-6,'quark, antiquark, elettroni — operatori O(x) della CFT','#60a5fa',10,'center');
  lbl(cft.ox+cft.rx*.65,prY+50,'Materia barionica','#ef4444',10,'center');
  lbl(cft.ox-cft.rx*.7,atY+42,'Atomo H','#38bdf8',10,'center');

  // correlatori
  if(cftParticles.length>2){
    const p1=cftParticles[0], p2=cftParticles[Math.min(1,cftParticles.length-1)];
    ctx.beginPath();ctx.moveTo(p1.x,p1.y);ctx.lineTo(p2.x,p2.y);
    ctx.strokeStyle='rgba(74,222,128,0.15)';ctx.lineWidth=1;
    ctx.setLineDash([3,5]);ctx.stroke();ctx.setLineDash([]);
  }

  ctx.fillStyle='rgba(8,14,30,0.9)';
  ctx.beginPath();ctx.roundRect(DIV()+W*.02,H*.78,W*.44,H*.14,10);ctx.fill();
  ctx.strokeStyle='#1e3a5f';ctx.lineWidth=1;ctx.stroke();
  lbl(DIV()+W*.24,H*.78+16,'Correlatore CFT','#4ade80',11,'center',true);
  lbl(DIV()+W*.24,H*.78+34,'⟨O(x)O(y)⟩ = |x−y|^(−2Δ)','#4ade80',11,'center',true);
  lbl(DIV()+W*.24,H*.78+52,'Δ = dimensione conforme','#64748b',10,'center');
  lbl(DIV()+W*.24,H*.78+66,'↔ massa campo bulk: m²L²=Δ(Δ−4)','#7c3aed',10,'center');

  lbl(W*.5,H*.04+22,'CFT sul Bordo: Collisioni e Operatori','#f1f5f9',17,'center',true);
  lbl(W*.5,H*.04+40,'Le collisioni generano inserzioni di operatori compositi — il "dato al contorno" per il bulk','#64748b',11,'center');
}

// ── FASE 2: gravitoni nel bulk ───────────────────────────
function ph2(){
  const cft=drawCftBoundary(0.4);
  const ads=drawAdsCylinder(1);
  drawDivider();

  // spawn gravitoni nel bulk
  if(pT%28===0&&bulkParticles.length<18){
    const a2=Math.random()*Math.PI*2;
    const r2=ads.rx*rnd(.15,.75);
    bulkParticles.push({
      x:ads.ox+r2*Math.cos(a2), y:ads.oy+ads.ry*rnd(.35,.75)*Math.sin(a2),
      targetBdy: Math.random()<.5, // va al bordo o al centro?
      r:12, trail:[], age:0,
      // per geodetiche iperboliche
      startA:a2, startR:r2,
      vr: Math.random()<.5 ? 1.5 : -1.5,
      va: (Math.random()-.5)*.03,
      curA:a2, curR:r2, type:'graviton'
    });
  }

  // campi scalari
  if(pT%45===0&&bulkParticles.length<22){
    const a2=Math.random()*Math.PI*2, r2=ads.rx*rnd(.1,.5);
    bulkParticles.push({
      x:ads.ox+r2*Math.cos(a2), y:ads.oy+ads.ry*.65*Math.sin(a2),
      r:9, trail:[], age:0, type:'scalar',
      vx:(Math.random()-.5)*1.5, vy:(Math.random()-.5)*1.0,
    });
  }

  bulkParticles.forEach((p,i)=>{
    p.trail.push({x:p.x,y:p.y});
    if(p.trail.length>20)p.trail.shift();

    if(p.type==='graviton'){
      // moto geodetic: r aumenta verso bordo o diminuisce verso centro
      p.curR+=p.vr*.8;
      p.curA+=p.va;
      p.x=ads.ox+p.curR*Math.cos(p.curA);
      p.y=ads.oy+ads.ry*.7*Math.sin(p.curA);
      p.age++;

      // trail
      p.trail.forEach((pt,ti)=>{
        ctx.beginPath();ctx.arc(pt.x,pt.y,3,0,Math.PI*2);
        ctx.fillStyle='rgba(253,230,138,0.15)';ctx.fill();
      });
      drawGraviton(p.x,p.y,p.r);

      // quando raggiunge bordo: flash sul bordo CFT
      const distBdy=Math.hypot(p.x-ads.ox,p.y-ads.oy);
      if(distBdy>ads.rx*.88||p.curR<8){
        // impulso sul bordo corrispondente
        const bAngle=Math.atan2(p.y-ads.oy,p.x-ads.ox);
        const bx=ads.ox+ads.rx*.95*Math.cos(bAngle);
        const by=ads.oy+ads.ry*.95*Math.sin(bAngle);
        ctx.beginPath();ctx.arc(bx,by,8+Math.random()*4,0,Math.PI*2);
        ctx.strokeStyle='rgba(253,230,138,0.6)';ctx.lineWidth=2;gw('#fde68a',12);ctx.stroke();ng();
        bulkParticles.splice(i,1);
      }
    } else {
      // scalare
      p.x+=p.vx; p.y+=p.vy; p.age++;
      // riflessione dentro ads
      if(Math.hypot(p.x-ads.ox,(p.y-ads.oy)/(.7))>ads.rx*.85){p.vx*=-.9;p.vy*=-.9;}
      p.trail.forEach((pt,ti)=>{
        ctx.beginPath();ctx.arc(pt.x,pt.y,2.5,0,Math.PI*2);
        ctx.fillStyle='rgba(167,139,250,0.12)';ctx.fill();
      });
      drawParticle(p.x,p.y,p.r,'#a78bfa','φ',p.trail);
      if(p.age>200)bulkParticles.splice(i,1);
    }
  });

  // geodetiche iperboliche decorative
  for(let g=0;g<8;g++){
    const a2=(g/8)*Math.PI*2+T*.04;
    ctx.beginPath();
    for(let s=0;s<=40;s++){
      const f=s/40, r2=ads.rx*f*.9;
      const x2=ads.ox+r2*Math.cos(a2), y2=ads.oy+ads.ry*.7*r2/ads.rx*Math.sin(a2);
      s===0?ctx.moveTo(x2,y2):ctx.lineTo(x2,y2);
    }
    ctx.strokeStyle='rgba(74,222,128,0.07)';ctx.lineWidth=1;ctx.stroke();
  }

  // propagatore bordo→bordo via bulk
  const p1A=T*.25, p2A=T*.25+Math.PI*.7;
  const b1x=ads.ox+ads.rx*Math.cos(p1A), b1y=ads.oy+ads.ry*.9*Math.sin(p1A);
  const b2x=ads.ox+ads.rx*Math.cos(p2A), b2y=ads.oy+ads.ry*.9*Math.sin(p2A);
  ctx.beginPath();ctx.moveTo(b1x,b1y);
  ctx.quadraticCurveTo(ads.ox,ads.oy,b2x,b2y);
  ctx.strokeStyle='rgba(74,222,128,0.3)';ctx.lineWidth=1.5;
  ctx.setLineDash([5,5]);ctx.stroke();ctx.setLineDash([]);
  ctx.beginPath();ctx.arc(b1x,b1y,5,0,Math.PI*2);ctx.fillStyle='#4ade80';gw('#4ade80',8);ctx.fill();ng();
  ctx.beginPath();ctx.arc(b2x,b2y,5,0,Math.PI*2);ctx.fillStyle='#4ade80';gw('#4ade80',8);ctx.fill();ng();

  // pannello info
  ctx.fillStyle='rgba(8,14,30,0.9)';
  ctx.beginPath();ctx.roundRect(W*.02,H*.78,W*.44,H*.14,10);ctx.fill();
  ctx.strokeStyle='#1e3a5f';ctx.lineWidth=1;ctx.stroke();
  lbl(W*.25,H*.78+16,'Propagatore bulk-to-boundary','#a78bfa',11,'center',true);
  lbl(W*.25,H*.78+34,'G(x,z;x\') = Cₐ(z/(z²+|x−x\'|²))^Δ','#c4b5fd',10,'center',true);
  lbl(W*.25,H*.78+52,'Gravitone: spin 2 | m=0 | geod. iperb.','#fde68a',10,'center');
  lbl(W*.25,H*.78+66,'Campo scalare: spin 0 | m²L²=Δ(Δ−4)','#a78bfa',10,'center');

  lbl(W*.5,H*.04+22,'Bulk AdS: Gravitoni e Campi','#f1f5f9',17,'center',true);
  lbl(W*.5,H*.04+40,'I gravitoni percorrono geodetiche iperboliche nel bulk — trasportano informazione geometrica al bordo','#64748b',11,'center');
}

// ── FASE 3: HKLL reconstruction ──────────────────────────
function ph3(){
  const cft=drawCftBoundary(0.7);
  const ads=drawAdsCylinder(0.7);
  drawDivider();

  // punto bulk da ricostruire
  const bulkX=ads.ox-ads.rx*.28, bulkY=ads.oy-ads.ry*.22;
  ctx.beginPath();ctx.arc(bulkX,bulkY,14,0,Math.PI*2);
  const bg2=ctx.createRadialGradient(bulkX-4,bulkY-4,2,bulkX,bulkY,14);
  bg2.addColorStop(0,'#fff');bg2.addColorStop(.4,'#a78bfa');bg2.addColorStop(1,'rgba(0,0,16,.3)');
  ctx.fillStyle=bg2;gw('#a78bfa',20);ctx.fill();ng();
  ctx.strokeStyle='#c4b5fd';ctx.lineWidth=2;ctx.stroke();
  lbl(bulkX,bulkY+22,'φ(x,z)','#c4b5fd',11,'center',true);
  lbl(bulkX,bulkY+36,'punto bulk','#64748b',9,'center');

  // kernel HKLL: raggi dal punto bulk al bordo
  const nKernels=22;
  for(let k=0;k<nKernels;k++){
    const a2=(k/nKernels)*Math.PI*2;
    const bx=ads.ox+ads.rx*.97*Math.cos(a2);
    const by=ads.oy+ads.ry*.97*Math.sin(a2);
    const prog=(T*.5+k*.2)%1;

    // raggio (smearing kernel)
    ctx.beginPath();
    ctx.moveTo(bulkX,bulkY);
    ctx.lineTo(bx,by);
    ctx.strokeStyle=`rgba(74,222,128,${0.08+0.12*Math.sin(T*1.5+k*.4)})`;
    ctx.lineWidth=0.8;ctx.setLineDash([3,5]);ctx.stroke();ctx.setLineDash([]);

    // punto kernel sul bordo
    const ka=0.4+0.6*Math.abs(Math.sin(a2-T*.5));
    ctx.beginPath();ctx.arc(bx,by,4+2*Math.sin(T*2+k),0,Math.PI*2);
    ctx.fillStyle=`rgba(74,222,128,${ka})`;gw('#4ade80',6*ka);ctx.fill();ng();

    // pallino in moto lungo il raggio
    const px2=bulkX+(bx-bulkX)*prog, py2=bulkY+(by-bulkY)*prog;
    ctx.beginPath();ctx.arc(px2,py2,3,0,Math.PI*2);
    ctx.fillStyle='rgba(74,222,128,0.7)';gw('#4ade80',5);ctx.fill();ng();
  }

  // operatori O sul bordo (CFT side)
  const opsOnBdy=8;
  for(let o=0;o<opsOnBdy;o++){
    const a2=(o/opsOnBdy)*Math.PI*2+T*.08;
    const ox2=cft.ox+cft.rx*.93*Math.cos(a2);
    const oy2=cft.oy+cft.ry*.93*Math.sin(a2);
    ctx.beginPath();ctx.arc(ox2,oy2,6+2*Math.sin(T*2+o),0,Math.PI*2);
    ctx.fillStyle='#38bdf8';gw('#38bdf8',8);ctx.fill();ng();
    lbl(ox2+Math.cos(a2)*14,oy2+Math.sin(a2)*14,'O','#60a5fa',9,'center');
  }

  // frecce smearing (dal bordo CFT al bordo bulk)
  for(let f=0;f<5;f++){
    const a2=(f/5)*Math.PI*2+T*.08;
    const sx=cft.ox+cft.rx*.85*Math.cos(a2);
    const sy=cft.oy+cft.ry*.85*Math.sin(a2);
    const prog2=(T*.4+f*.4)%1;
    const ex=lerp(sx,DIV(),prog2);
    const ey=lerp(sy,H*.5,prog2);
    ctx.beginPath();ctx.arc(ex,ey,3,0,Math.PI*2);
    ctx.fillStyle='rgba(56,189,248,0.5)';gw('#38bdf8',5);ctx.fill();ng();
  }

  // formula
  ctx.fillStyle='rgba(8,14,30,0.92)';
  ctx.beginPath();ctx.roundRect(W*.03,H*.78,W*.94,H*.15,10);ctx.fill();
  ctx.strokeStyle='#4ade80';ctx.lineWidth=1;ctx.stroke();
  lbl(W*.5,H*.78+16,'HKLL Bulk Reconstruction  (Hamilton, Kabat, Lifschytz, Lowe — 2006)','#4ade80',12,'center',true);
  lbl(W*.5,H*.78+36,'φ(x,z) = ∫_bordo  K(x,z|x\')  O(x\')  d⁴x\'','#c4b5fd',13,'center',true);
  lbl(W*.5,H*.78+58,'K = kernel di smearing (funzione di Green di AdS) | O = operatore CFT sul bordo','#64748b',10,'center');
  lbl(W*.5,H*.78+72,'Per gravitoni: h_μν(x,z) = ∫ K_μν(x,z|x\') T_μν(x\') d⁴x\'  (T = stress tensor CFT)','#fde68a',10,'center');

  lbl(W*.5,H*.04+22,'HKLL Bulk Reconstruction','#f1f5f9',17,'center',true);
  lbl(W*.5,H*.04+40,'Ogni punto del bulk è una sovrapposizione non-locale di operatori CFT sul bordo — smeared con kernel K','#64748b',11,'center');
}

// ── FASE 4: entanglement wedge ───────────────────────────
function ph4(){
  const ads=drawAdsCylinder(0.8);
  drawDivider();

  // regione A del bordo (arco)
  const aStart=-0.5, aEnd=Math.PI+0.5;
  ctx.beginPath();
  for(let i=0;i<=60;i++){
    const a2=aStart+(aEnd-aStart)*(i/60);
    const x2=ads.ox+ads.rx*Math.cos(a2), y2=ads.oy+ads.ry*.97*Math.sin(a2);
    i===0?ctx.moveTo(x2,y2):ctx.lineTo(x2,y2);
  }
  ctx.strokeStyle='#38bdf8';ctx.lineWidth=4;gw('#38bdf8',16);ctx.stroke();ng();
  lbl(ads.ox,ads.oy-ads.ry*1.08,'Regione A del bordo','#38bdf8',11,'center',true);

  // regione Ā
  ctx.beginPath();
  for(let i=0;i<=60;i++){
    const a2=aEnd+(Math.PI*2-(aEnd-aStart))*(i/60);
    const x2=ads.ox+ads.rx*Math.cos(a2), y2=ads.oy+ads.ry*.97*Math.sin(a2);
    i===0?ctx.moveTo(x2,y2):ctx.lineTo(x2,y2);
  }
  ctx.strokeStyle='#ef4444';ctx.lineWidth=3;gw('#ef4444',8);ctx.stroke();ng();
  lbl(ads.ox,ads.oy+ads.ry*1.08,'Regione Ā','#ef4444',11,'center',true);

  // superficie di Ryu-Takayanagi (curva minima nel bulk)
  const rtAlpha=0.7+0.3*Math.sin(T*.5);
  ctx.beginPath();
  const rtSteps=60;
  for(let i=0;i<=rtSteps;i++){
    const f=i/rtSteps;
    const a2=aStart+(aEnd-aStart)*f;
    // la RT surface si incurva verso il centro (geodetic)
    const depth=Math.sin(Math.PI*f)*.72;
    const r2=ads.rx*(1-depth);
    const x2=ads.ox+r2*Math.cos(a2), y2=ads.oy+ads.ry*.7*(1-depth*.4)*Math.sin(a2);
    i===0?ctx.moveTo(x2,y2):ctx.lineTo(x2,y2);
  }
  ctx.strokeStyle=`rgba(253,230,138,${rtAlpha})`;ctx.lineWidth=2.5;
  ctx.setLineDash([6,4]);gw('#fde68a',10);ctx.stroke();ng();ctx.setLineDash([]);
  lbl(ads.ox-ads.rx*.3,ads.oy,'RT Surface','#fde68a',10,'center',true);
  lbl(ads.ox-ads.rx*.3,ads.oy+14,'S = Area/4Gℏ','#b45309',9,'center');

  // entanglement wedge (area colorata)
  wedgeAlpha=Math.min(wedgeAlpha+.008,.35);
  ctx.save();ctx.globalAlpha=wedgeAlpha;
  ctx.beginPath();
  for(let i=0;i<=rtSteps;i++){
    const f=i/rtSteps, a2=aStart+(aEnd-aStart)*f;
    const depth=Math.sin(Math.PI*f)*.72;
    const r2=ads.rx*(1-depth);
    const x2=ads.ox+r2*Math.cos(a2),y2=ads.oy+ads.ry*.7*(1-depth*.4)*Math.sin(a2);
    i===0?ctx.moveTo(x2,y2):ctx.lineTo(x2,y2);
  }
  for(let i=60;i>=0;i--){
    const f=i/60,a2=aStart+(aEnd-aStart)*f;
    const x2=ads.ox+ads.rx*Math.cos(a2),y2=ads.oy+ads.ry*.97*Math.sin(a2);
    ctx.lineTo(x2,y2);
  }
  ctx.closePath();
  ctx.fillStyle='rgba(56,189,248,1)';ctx.fill();
  ctx.restore();
  lbl(ads.ox-ads.rx*.18,ads.oy-ads.ry*.38,'Entanglement','#38bdf8',11,'center',true);
  lbl(ads.ox-ads.rx*.18,ads.oy-ads.ry*.38+16,'Wedge di A','#38bdf8',10,'center');

  // operatore bulk nel wedge (ricostruibile)
  const wbX=ads.ox-ads.rx*.32, wbY=ads.oy-ads.ry*.32;
  ctx.beginPath();ctx.arc(wbX,wbY,11,0,Math.PI*2);
  const wg=ctx.createRadialGradient(wbX-3,wbY-3,1,wbX,wbY,11);
  wg.addColorStop(0,'#fff');wg.addColorStop(.5,'#4ade80');wg.addColorStop(1,'rgba(0,0,16,.2)');
  ctx.fillStyle=wg;gw('#4ade80',14);ctx.fill();ng();
  ctx.strokeStyle='#4ade80';ctx.lineWidth=1.5;ctx.stroke();
  lbl(wbX+18,wbY+4,'φ ✓','#4ade80',10,'left',true);
  lbl(wbX+18,wbY+16,'ricostruibile','#4ade80',9,'left');

  // operatore fuori wedge (non ricostruibile da A)
  const owX=ads.ox+ads.rx*.55, owY=ads.oy+ads.ry*.2;
  ctx.beginPath();ctx.arc(owX,owY,11,0,Math.PI*2);
  const og=ctx.createRadialGradient(owX-3,owY-3,1,owX,owY,11);
  og.addColorStop(0,'#fff');og.addColorStop(.5,'#ef4444');og.addColorStop(1,'rgba(0,0,16,.2)');
  ctx.fillStyle=og;gw('#ef4444',10);ctx.fill();ng();
  lbl(owX+14,owY+4,'φ ✗','#ef4444',10,'left',true);
  lbl(owX+14,owY+16,'non da A','#ef4444',9,'left');

  // box
  ctx.fillStyle='rgba(8,14,30,0.9)';
  ctx.beginPath();ctx.roundRect(W*.02,H*.78,W*.96,H*.15,10);ctx.fill();
  ctx.strokeStyle='#1e3a5f';ctx.lineWidth=1;ctx.stroke();
  lbl(W*.5,H*.78+16,'Entanglement Wedge Reconstruction  (Dong, Harlow, Wall — 2016)','#4ade80',12,'center',true);
  lbl(W*.5,H*.78+34,'La regione A del bordo codifica il suo wedge nel bulk. Solo i campi nel wedge si ricostruiscono da A.','#94a3b8',10,'center');
  lbl(W*.5,H*.78+50,'Ryu-Takayanagi: S(A) = Area(RT)/4Gℏ — l\'entropia di entanglement CFT = area di una superficie minima bulk.','#64748b',10,'center');
  lbl(W*.5,H*.78+66,'Questo è equivalente alla quantum error correction: il bulk è un codice che protegge l\'informazione della CFT.','#64748b',10,'center');

  lbl(W*.5,H*.04+22,'Entanglement Wedge','#f1f5f9',17,'center',true);
  lbl(W*.5,H*.04+40,'La regione del bulk ricostruibile da A è il suo "cuneo di entanglement" — delimitato dalla superficie RT','#64748b',11,'center');
}

// ── FASE 5: flusso completo bulk↔bordo ───────────────────
function ph5(){
  const cft=drawCftBoundary(1);
  const ads=drawAdsCylinder(1);
  drawDivider();

  // CFT: collisioni + materia
  if(pT%30===0&&cftParticles.length<30){
    const types=[
      {col:'#f59e0b',lbl:'u',r:8},{col:'#3b82f6',lbl:'d',r:8},
      {col:'#60a5fa',lbl:'e⁻',r:7},{col:'#ef4444',lbl:'ū',r:8},
    ];
    const tp=types[Math.floor(Math.random()*types.length)];
    const a2=Math.random()*Math.PI*2;
    const r2=cft.rx*rnd(.2,.75);
    cftParticles.push({
      x:cft.ox+r2*Math.cos(a2), y:cft.oy+cft.ry*.85*Math.sin(a2),
      vx:(Math.random()-.5)*2, vy:(Math.random()-.5)*1.5,
      ...tp, trail:[], age:0,
    });
  }
  cftParticles.forEach((p,i)=>{
    p.trail.push({x:p.x,y:p.y});
    if(p.trail.length>16)p.trail.shift();
    p.x+=p.vx*.97;p.y+=p.vy*.97;p.age++;
    if(Math.hypot(p.x-cft.ox,(p.y-cft.oy))>cft.rx*.9){p.vx*=-.85;p.vy*=-.85;}
    drawParticle(p.x,p.y,p.r,p.col,p.lbl,p.trail);
    if(p.age>180)cftParticles.splice(i,1);
  });

  // materia barionica a sinistra
  drawBaryonMatter(cft.ox+cft.rx*.6,cft.oy-cft.ry*.25,30);
  drawAtom(cft.ox-cft.rx*.6,cft.oy+cft.ry*.3,25);

  // BULK: gravitoni
  if(pT%22===0&&bulkParticles.length<14){
    const a2=Math.random()*Math.PI*2, r2=ads.rx*rnd(.1,.65);
    bulkParticles.push({
      x:ads.ox+r2*Math.cos(a2), y:ads.oy+ads.ry*.65*Math.sin(a2),
      curA:a2, curR:r2, vr:rnd(-1.8,1.8), va:(Math.random()-.5)*.025,
      r:12, trail:[], age:0, type:'graviton'
    });
  }
  bulkParticles.forEach((p,i)=>{
    p.trail.push({x:p.x,y:p.y});
    if(p.trail.length>18)p.trail.shift();
    if(p.type==='graviton'){
      p.curR+=p.vr*.7; p.curA+=p.va;
      p.x=ads.ox+p.curR*Math.cos(p.curA);
      p.y=ads.oy+ads.ry*.65*Math.sin(p.curA);
      p.age++;
      p.trail.forEach(pt=>{ ctx.beginPath();ctx.arc(pt.x,pt.y,2.5,0,Math.PI*2);
        ctx.fillStyle='rgba(253,230,138,0.12)';ctx.fill(); });
      drawGraviton(p.x,p.y,p.r);
      const d=Math.hypot(p.x-ads.ox,(p.y-ads.oy)/.65);
      if(d>ads.rx*.88||p.curR<6) bulkParticles.splice(i,1);
    }
  });

  // ── FRECCE BIDIREZIONALI nel centro ──
  const nArrows=7;
  for(let k=0;k<nArrows;k++){
    const yA=H*.28+k*(H*.45/nArrows);
    const dir=k%2===0?1:-1; // destra o sinistra
    const prog=(T*.5+k*.35)%1;
    const startX=dir>0?DIV()-30:DIV()+30;
    const endX=dir>0?DIV()+30:DIV()-30;
    const curX=startX+(endX-startX)*prog;
    const col=dir>0?'#fde68a':'#4ade80';
    const label2=dir>0?'g→':'←O';

    // linea
    ctx.beginPath();ctx.moveTo(DIV()-28,yA);ctx.lineTo(DIV()+28,yA);
    ctx.strokeStyle=`rgba(${dir>0?'253,230,138':'74,222,128'},0.15)`;
    ctx.lineWidth=1;ctx.stroke();
    // pallino
    ctx.beginPath();ctx.arc(curX,yA,4,0,Math.PI*2);
    ctx.fillStyle=col;gw(col,8);ctx.fill();ng();
    if(k%2===0) lbl(DIV

## @Vicianzu

    if(k===3) lbl(DIV(),yA-10,'bulk ↔ bordo','rgba(255,255,255,0.18)',9,'center');
  }

  // HKLL kernel decorativi (linee verdi dal bulk al bordo)
  const nK=14;
  for(let k=0;k<nK;k++){
    const a2=(k/nK)*Math.PI*2+T*.03;
    const bx=ads.ox+ads.rx*.97*Math.cos(a2);
    const by=ads.oy+ads.ry*.97*Math.sin(a2);
    const innerR=ads.rx*(.1+.5*Math.abs(Math.sin(k*1.3+T*.2)));
    const ix=ads.ox+innerR*Math.cos(a2+.15);
    const iy=ads.oy+ads.ry*.65*Math.sin(a2+.15);
    const alpha=0.05+0.08*Math.sin(T*1.2+k*.5);
    ctx.beginPath();ctx.moveTo(ix,iy);ctx.lineTo(bx,by);
    ctx.strokeStyle=`rgba(74,222,128,${alpha})`;
    ctx.lineWidth=0.8;ctx.setLineDash([2,5]);ctx.stroke();ctx.setLineDash([]);
  }

  // pannello info in basso
  ctx.fillStyle='rgba(8,14,30,0.9)';
  ctx.beginPath();ctx.roundRect(W*.02,H*.78,W*.96,H*.15,10);ctx.fill();
  ctx.strokeStyle='#1e3a5f';ctx.lineWidth=1;ctx.stroke();
  lbl(W*.5,H*.78+16,'Flusso completo Bulk ↔ Bordo','#38bdf8',13,'center',true);
  lbl(W*.5,H*.78+34,'Materia barionica, collisioni, operatori CFT sul bordo  ↔  gravitoni, campi scalari, geometria nel bulk AdS₅','#94a3b8',10,'center');
  lbl(W*.5,H*.78+50,'φ(x,z)=∫K(x,z|x\')O(x\')d⁴x\'  |  h_μν=∫K_μν T_μν d⁴x\'  |  S(A)=Area(RT)/4Gℏ','#4ade80',10,'center',true);
  lbl(W*.5,H*.78+66,'L\'informazione del bulk 5D è completamente e fedelmente codificata nel bordo 4D — olografia quantistica.','#64748b',10,'center');

  lbl(W*.5,H*.04+22,'Bulk ↔ Bordo: Scambio Completo','#f1f5f9',17,'center',true);
  lbl(W*.5,H*.04+40,'Il principio olografico in azione: i due mondi sono una sola realtà fisica descritta da due linguaggi equivalenti','#64748b',11,'center');
}

// ── MATERIA BARIONICA (protone) ────────────────────────────
function drawBaryonMatter(cx,cy,r){
  // 3 quark collegati
  const qPos=[
    {dx:-r*.5,dy: r*.45,col:'#f59e0b',lbl:'u'},
    {dx: r*.5,dy: r*.45,col:'#3b82f6',lbl:'d'},
    {dx:  0,  dy:-r*.5, col:'#ef4444',lbl:'u'},
  ];
  // gluoni (linee)
  for(let i=0;i<3;i++){
    for(let j=i+1;j<3;j++){
      const p1=qPos[i], p2=qPos[j];
      const x1=cx+p1.dx+Math.sin(T*1.5+i)*3;
      const y1=cy+p1.dy+Math.cos(T*1.3+i)*3;
      const x2=cx+p2.dx+Math.sin(T*1.5+j)*3;
      const y2=cy+p2.dy+Math.cos(T*1.3+j)*3;
      // linea ondulata (gluone)
      ctx.beginPath();
      const steps=18;
      for(let s=0;s<=steps;s++){
        const f=s/steps;
        const mx=x1+(x2-x1)*f;
        const my=y1+(y2-y1)*f;
        const perp=Math.sin(f*Math.PI*3+T*2)*3;
        const nx=-(y2-y1)/Math.hypot(x2-x1,y2-y1);
        const ny= (x2-x1)/Math.hypot(x2-x1,y2-y1);
        s===0?ctx.moveTo(mx+nx*perp,my+ny*perp):ctx.lineTo(mx+nx*perp,my+ny*perp);
      }
      ctx.strokeStyle='rgba(251,191,36,0.5)';ctx.lineWidth=1.2;ctx.stroke();
    }
  }
  // quark
  qPos.forEach(q=>{
    const qx=cx+q.dx+Math.sin(T*1.5+q.lbl.charCodeAt(0)*.3)*2.5;
    const qy=cy+q.dy+Math.cos(T*1.3+q.lbl.charCodeAt(0)*.3)*2.5;
    ctx.beginPath();ctx.arc(qx,qy,r*.28,0,Math.PI*2);
    const qg=ctx.createRadialGradient(qx-2,qy-2,1,qx,qy,r*.28);
    qg.addColorStop(0,'#fff');qg.addColorStop(.5,q.col);qg.addColorStop(1,'rgba(0,0,16,.3)');
    ctx.fillStyle=qg;gw(q.col,8);ctx.fill();ng();
    ctx.fillStyle='#fff';ctx.font=`bold ${Math.round(r*.22)}px sans-serif`;
    ctx.textAlign='center';ctx.fillText(q.lbl,qx,qy+r*.08);
  });
  // cerchio protone
  ctx.beginPath();ctx.arc(cx,cy,r*.85,0,Math.PI*2);
  ctx.strokeStyle='rgba(239,68,68,0.35)';ctx.lineWidth=1.5;
  ctx.setLineDash([4,4]);ctx.stroke();ctx.setLineDash([]);
}

// ── ATOMO DI IDROGENO ─────────────────────────────────────
function drawAtom(cx,cy,r){
  // nucleo
  ctx.beginPath();ctx.arc(cx,cy,r*.2,0,Math.PI*2);
  const ng2=ctx.createRadialGradient(cx-2,cy-2,1,cx,cy,r*.2);
  ng2.addColorStop(0,'#fff');ng2.addColorStop(.5,'#ef4444');ng2.addColorStop(1,'rgba(0,0,16,.3)');
  ctx.fillStyle=ng2;gw('#ef4444',8);ctx.fill();
  ctx.restore && null; ng();
  ctx.fillStyle='#fff';ctx.font=`bold ${Math.round(r*.18)}px sans-serif`;
  ctx.textAlign='center';ctx.fillText('p⁺',cx,cy+r*.07);

  // orbite
  const orbits=[
    {rx:r*.75,ry:r*.32,angle:T*.8},
    {rx:r*.55,ry:r*.72,angle:T*.6+1.2},
  ];
  orbits.forEach((orb,oi)=>{
    ctx.save();
    ctx.translate(cx,cy);ctx.rotate(orb.angle);
    ctx.beginPath();ctx.ellipse(0,0,orb.rx,orb.ry,0,0,Math.PI*2);
    ctx.strokeStyle='rgba(96,165,250,0.35)';ctx.lineWidth=1;ctx.stroke();
    // elettrone
    const ea=T*1.8+oi*Math.PI;
    const ex=orb.rx*Math.cos(ea), ey=orb.ry*Math.sin(ea);
    ctx.beginPath();ctx.arc(ex,ey,r*.13,0,Math.PI*2);
    const eg=ctx.createRadialGradient(ex-1,ey-1,0.5,ex,ey,r*.13);
    eg.addColorStop(0,'#fff');eg.addColorStop(.5,'#60a5fa');eg.addColorStop(1,'rgba(0,0,16,.3)');
    ctx.fillStyle=eg;gw('#60a5fa',7);ctx.fill();ng();
    ctx.restore();
  });
}

// ── LOOP PRINCIPALE ────────────────────────────────────────
function loop(){
  requestAnimationFrame(loop);
  T+=0.016; pT++;
  drawBG();
  drawStars();
  ctx.save();
  switch(ph){
    case 0: ph0(); break;
    case 1: ph1(); break;
    case 2: ph2(); break;
    case 3: ph3(); break;
    case 4: ph4(); break;
    case 5: ph5(); break;
  }
  ctx.restore();
}

// avvio
go(0);
loop();
</script>
</body>
</html>

aggiungi questo pezzo di codice

## Copilot

Il tool ha bisogno del contenuto completo. Lo carico direttamente:

## @Vicianzu

@Copilot Accepted Confirmation: Are you sure?

## Copilot


