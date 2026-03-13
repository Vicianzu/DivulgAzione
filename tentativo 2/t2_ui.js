/* t2_ui.js — shared UI logic for Tentativo 2 pages */
/* Based on vixra divulgazione/v1_hydrogen_old_quantum_vs_qm.html */
'use strict';

// ── Globals (set by each page before calling t2Init) ──────────────────────────
// window.T2_PHASES  — array of { name, desc, scene } objects
// window.T2_N       — total number of phases (set from PHASES.length)
// window.t2Draw     — function(T, phaseIdx, ctx, W, H) called each frame

// ── State ─────────────────────────────────────────────────────────────────────
let _currentPhase = 1;
let _paused = false;
let _T = 0;
let _animRafId = null;
const _reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Canvas
let _cv, _ctx, _W, _H;

// ── Exposed helpers ───────────────────────────────────────────────────────────
function t2Lerp(a, b, t) { return a + (b - a) * t; }
function t2Clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function t2Glow(col, blur) { _ctx.shadowColor = col; _ctx.shadowBlur = blur; }
function t2NoGlow() { _ctx.shadowBlur = 0; }
function t2Txt(x, y, s, col, sz, align, font) {
  _ctx.fillStyle = col;
  _ctx.font = sz + 'px ' + (font || 'Georgia,serif');
  _ctx.textAlign = align || 'center';
  _ctx.textBaseline = 'middle';
  _ctx.fillText(s, x, y);
}
function t2AnimCX() { return _W > 820 ? _W * 0.72 : _W * 0.5; }
function t2AnimCY() { return _W > 820 ? _H * 0.5 : _H * 0.77; }
function t2ReducedMotion() { return _reducedMotion; }
function t2GetCtx() { return _ctx; }
function t2GetW() { return _W; }
function t2GetH() { return _H; }

// ── Stars ─────────────────────────────────────────────────────────────────────
let _stars = [];
function _initStars() {
  _stars = [];
  const n = t2Clamp(Math.floor(_W * _H / 9000), 80, 220);
  for (let i = 0; i < n; i++) {
    _stars.push({
      x: Math.random() * _W, y: Math.random() * _H,
      r: Math.random() * 1.1 + 0.2,
      a: Math.random(),
      da: (Math.random() * 0.005 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
    });
  }
}

function _drawStars() {
  for (const s of _stars) {
    if (!_reducedMotion) { s.a += s.da; if (s.a > 1 || s.a < 0) s.da = -s.da; }
    _ctx.beginPath();
    _ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    _ctx.fillStyle = 'rgba(190,215,255,' + t2Clamp(s.a, 0, 1) * 0.55 + ')';
    _ctx.fill();
  }
}

// ── Navigation ────────────────────────────────────────────────────────────────
function goPhase(n) {
  const N = window.T2_PHASES ? window.T2_PHASES.length : (window.T2_N || 1);
  _currentPhase = Math.max(1, Math.min(N, n));

  document.querySelectorAll('.phase-content').forEach(el => el.classList.remove('active'));
  const phEl = document.getElementById('ph-' + _currentPhase);
  if (phEl) phEl.classList.add('active');

  document.querySelectorAll('#bottom .btn:not(#btn-pause)').forEach((btn, i) => {
    btn.classList.toggle('active', i + 1 === _currentPhase);
  });

  if (window.T2_PHASES) {
    const ph = window.T2_PHASES[_currentPhase - 1];
    const phaseEl = document.getElementById('ui-phase');
    if (phaseEl && ph) phaseEl.textContent = ph.desc;
  }

  const panel = document.getElementById('panel');
  if (panel) panel.scrollTop = 0;
  history.replaceState(null, '', '#p' + _currentPhase);
  _T = 0;
}

function togglePause() {
  _paused = !_paused;
  const btn = document.getElementById('btn-pause');
  if (btn) {
    btn.textContent = _paused ? '▶' : '⏸';
    btn.setAttribute('aria-label', _paused ? 'Riprendi animazione' : 'Pausa animazione');
  }
  if (!_paused) {
    _animRafId = requestAnimationFrame(_loop);
  }
}

function _initFromHash() {
  const N = window.T2_PHASES ? window.T2_PHASES.length : (window.T2_N || 1);
  const m = window.location.hash.match(/^#p(\d+)$/);
  if (m) { const v = parseInt(m[1]); if (v >= 1 && v <= N) { goPhase(v); return; } }
  const sp = new URLSearchParams(window.location.search);
  const qn = parseInt(sp.get('phase') || '');
  if (qn >= 1 && qn <= N) { goPhase(qn); return; }
  goPhase(1);
}

// ── Main loop ─────────────────────────────────────────────────────────────────
function _loop() {
  _ctx.clearRect(0, 0, _W, _H);

  // Background gradient
  const bg = _ctx.createRadialGradient(_W * 0.62, _H * 0.5, 0, _W * 0.62, _H * 0.5, Math.max(_W, _H) * 0.75);
  bg.addColorStop(0, '#001828');
  bg.addColorStop(1, '#000a14');
  _ctx.fillStyle = bg;
  _ctx.fillRect(0, 0, _W, _H);

  _drawStars();

  if (window.t2Draw) window.t2Draw(_T, _currentPhase - 1, _ctx, _W, _H);

  if (!_reducedMotion && !_paused) _T += 0.016;
  if (!_paused) _animRafId = requestAnimationFrame(_loop);
}

// ── Init ──────────────────────────────────────────────────────────────────────
function t2Init() {
  _cv = document.getElementById('canvas');
  _ctx = _cv.getContext('2d');

  function resize() {
    _W = _cv.width = window.innerWidth;
    _H = _cv.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', function () { resize(); _initStars(); });

  _initStars();

  // Keyboard navigation
  window.addEventListener('keydown', function (e) {
    const N = window.T2_PHASES ? window.T2_PHASES.length : (window.T2_N || 1);
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goPhase(_currentPhase + 1);
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goPhase(_currentPhase - 1);
    if (e.key === ' ') { e.preventDefault(); togglePause(); }
  });

  _initFromHash();
  _loop();
}

// Expose to global
window.goPhase     = goPhase;
window.togglePause = togglePause;
window.t2Init      = t2Init;
window.t2Lerp      = t2Lerp;
window.t2Clamp     = t2Clamp;
window.t2Glow      = t2Glow;
window.t2NoGlow    = t2NoGlow;
window.t2Txt       = t2Txt;
window.t2AnimCX    = t2AnimCX;
window.t2AnimCY    = t2AnimCY;
window.t2ReducedMotion = t2ReducedMotion;
window.t2GetCtx    = t2GetCtx;
window.t2GetW      = t2GetW;
window.t2GetH      = t2GetH;
