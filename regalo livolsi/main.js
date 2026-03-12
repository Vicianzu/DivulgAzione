/* main.js — Regalo Livolsi
   Funzioni JavaScript condivise per animazioni e interattività
   ============================================================ */

'use strict';

/* ============================================================
   1. TYPEWRITER EFFECT
   Scrive il testo carattere per carattere in un elemento
   ============================================================ */
function typewriterEffect(element, text, speed = 50) {
  if (!element) return;
  element.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

/* ============================================================
   2. PARTICLE CANVAS
   Sfondo con particelle animate (stelle/atomi che si muovono)
   ============================================================ */
function particleCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  /* Crea N particelle con proprietà casuali */
  function createParticles(n = 120) {
    particles = Array.from({ length: n }, () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      r:     Math.random() * 1.8 + 0.3,       // raggio
      vx:    (Math.random() - 0.5) * 0.3,     // velocità x
      vy:    (Math.random() - 0.5) * 0.3,     // velocità y
      alpha: Math.random() * 0.7 + 0.15,      // trasparenza
      hue:   Math.random() < 0.5 ? 260 : 185, // viola o cyan
      pulse: Math.random() * Math.PI * 2,     // fase pulsazione
    }));
  }

  /* Disegna e aggiorna il frame */
  function draw(t) {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      /* Pulsazione lenta */
      p.pulse += 0.01;
      const a = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${a})`;
      ctx.fill();

      /* Movimento */
      p.x += p.vx;
      p.y += p.vy;

      /* Rimbalzo sui bordi con un piccolo margine */
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;
    });

    /* Disegna linee tra particelle vicine (effetto rete cosmica) */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${0.12 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  window.addEventListener('resize', () => { resize(); createParticles(); });
  requestAnimationFrame(draw);
}

/* ============================================================
   3. ANIMATE COUNTER
   Anima un numero da 0 al target in `duration` millisecondi
   ============================================================ */
function animateCounter(element, target, duration = 2000) {
  if (!element) return;
  const start = performance.now();
  const startVal = 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    /* Easing: easeOutExpo */
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.round(startVal + (target - startVal) * eased);
    element.textContent = current.toLocaleString('it-IT');
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

/* ============================================================
   4. REVEAL ON SCROLL
   Elementi con classe .reveal appaiono con fade-in quando
   entrano nel viewport
   ============================================================ */
function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal, .timeline-item, .pillar-card, .claim-box, .redflag-item, .criterion');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        /* Piccolo delay progressivo per elementi multipli */
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach((el, i) => {
    /* Assegna delay progressivo agli elementi nella stessa sezione */
    if (!el.dataset.delay) {
      el.dataset.delay = (i % 10) * 80;
    }
    observer.observe(el);
  });
}

/* ============================================================
   5. ANIMATE TABLE ROWS ON SCROLL
   Anima le righe della tabella comparativa una per una
   ============================================================ */
function animateTableRows() {
  const rows = document.querySelectorAll('.compare-table tbody tr');
  if (!rows.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const allRows = document.querySelectorAll('.compare-table tbody tr');
        allRows.forEach((row, i) => {
          setTimeout(() => row.classList.add('visible'), i * 150);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });

  if (rows[0]) observer.observe(rows[0]);
}

/* ============================================================
   6. ANIMATE PROGRESS BARS
   Riempie le progress bar quando entrano nel viewport
   ============================================================ */
function animateProgressBars() {
  const bars = document.querySelectorAll('.progress-fill, .fuffometro-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = el.dataset.target || '100';
        setTimeout(() => {
          el.style.width = target + '%';
        }, 200);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(b => observer.observe(b));
}

/* ============================================================
   7. CONFETTI SAD (grigi) — pagina 6
   Coriandoli grigi che cadono lentamente (mood triste)
   ============================================================ */
function sadConfetti(canvasId, count = 60) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: count }, () => ({
    x:       Math.random() * canvas.width,
    y:       -20 - Math.random() * 300,
    size:    Math.random() * 8 + 4,
    speed:   Math.random() * 1 + 0.4,
    drift:   (Math.random() - 0.5) * 0.4,
    rot:     Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.04,
    alpha:   Math.random() * 0.5 + 0.2,
    color:   `hsl(260, 10%, ${30 + Math.random() * 40}%)`, // grigio-viola
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();

      p.y     += p.speed;
      p.x     += p.drift;
      p.rot   += p.rotSpeed;
      p.alpha  = Math.max(0, p.alpha - 0.001);

      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
        p.alpha = Math.random() * 0.4 + 0.15;
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ============================================================
   8. COLORFUL CONFETTI — pagina 3 (fine-tuning sezione)
   Coriandoli colorati per la sezione sul fine-tuning
   ============================================================ */
function colorConfettiBurst(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#a855f7', '#22d3ee', '#fbbf24', '#4ade80', '#f87171', '#f472b6'];
  const pieces = Array.from({ length: 80 }, () => ({
    x:       Math.random() * canvas.width,
    y:       canvas.height * 0.5 + (Math.random() - 0.5) * 200,
    vx:      (Math.random() - 0.5) * 8,
    vy:      -(Math.random() * 12 + 4),
    size:    Math.random() * 10 + 4,
    color:   colors[Math.floor(Math.random() * colors.length)],
    rot:     Math.random() * Math.PI * 2,
    rotSpeed:(Math.random() - 0.5) * 0.15,
    alpha:   1,
  }));

  let frame = 0;
  function draw() {
    if (frame > 180) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
      p.x   += p.vx;
      p.y   += p.vy;
      p.vy  += 0.3; // gravità
      p.rot += p.rotSpeed;
      p.alpha -= 0.008;
    });
    frame++;
    requestAnimationFrame(draw);
  }
  draw();
}

/* ============================================================
   9. AMBITION CHART — pagina 4
   Grafico "Complessità vs Pretese" disegnato su canvas
   ============================================================ */
function drawAmbitionChart(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.offsetWidth || 600;
  const H = canvas.offsetHeight || 350;
  canvas.width  = W;
  canvas.height = H;

  const pad = { top: 30, right: 40, bottom: 50, left: 60 };
  const cW = W - pad.left - pad.right;
  const cH = H - pad.top - pad.bottom;

  /* Dati: [complessità matematica 0-10, pretese 0-10, nome, colore] */
  const points = [
    [7, 7, 'QFT / Modello Standard', '#22d3ee'],
    [9, 6, 'Stringhe', '#4ade80'],
    [8, 8, 'Loop Quantum Gravity', '#f472b6'],
    [6, 6, 'Relatività Generale', '#fbbf24'],
    [5, 10, 'Livolsi Ψ', '#f87171'],
    [3, 3, 'Fisica Classica', '#94a3b8'],
  ];

  /* Sfondo */
  ctx.fillStyle = '#0f0f2a';
  ctx.fillRect(0, 0, W, H);

  /* Griglia */
  ctx.strokeStyle = 'rgba(168,85,247,0.12)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 10; i++) {
    const x = pad.left + (i / 10) * cW;
    const y = pad.top  + (i / 10) * cH;
    ctx.beginPath(); ctx.moveTo(x, pad.top); ctx.lineTo(x, pad.top + cH); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + cW, y); ctx.stroke();
  }

  /* Assi */
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top);
  ctx.lineTo(pad.left, pad.top + cH);
  ctx.lineTo(pad.left + cW, pad.top + cH);
  ctx.stroke();

  /* Etichette assi */
  ctx.fillStyle = '#94a3b8';
  ctx.font = '11px Courier New';
  ctx.textAlign = 'center';
  ctx.fillText('Complessità Matematica →', pad.left + cW / 2, H - 8);
  ctx.save();
  ctx.translate(14, pad.top + cH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('Pretese →', 0, 0);
  ctx.restore();

  /* Tick labels */
  ctx.fillStyle = '#64748b';
  ctx.font = '10px Courier New';
  ctx.textAlign = 'center';
  for (let i = 0; i <= 10; i += 2) {
    ctx.fillText(i, pad.left + (i / 10) * cW, pad.top + cH + 18);
    ctx.textAlign = 'right';
    ctx.fillText(i, pad.left - 6, pad.top + cH - (i / 10) * cH + 4);
    ctx.textAlign = 'center';
  }

  /* Punti + etichette */
  points.forEach(([cx, cy, label, color], idx) => {
    const px = pad.left + (cx / 10) * cW;
    const py = pad.top  + cH - (cy / 10) * cH;

    /* Animazione: disegna dopo un delay */
    setTimeout(() => {
      /* Cerchio */
      ctx.beginPath();
      ctx.arc(px, py, 8, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;

      /* Etichetta */
      ctx.fillStyle = color;
      ctx.font = `bold 11px Courier New`;
      ctx.textAlign = cx > 5 ? 'right' : 'left';
      const labelX = cx > 5 ? px - 12 : px + 12;
      ctx.fillText(label, labelX, py - 12);

      /* Freccia speciale per Livolsi */
      if (label.includes('Livolsi')) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.moveTo(pad.left + cW * 0.7, pad.top + cH * 0.15);
        ctx.lineTo(px + 2, py - 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }, idx * 200);
  });
}

/* ============================================================
   10. SCORE RING ANIMATION — pagina 6
   Anima l'anello circolare del punteggio
   ============================================================ */
function animateScoreRing(fillId, numberId, score, maxScore = 10) {
  const fill   = document.getElementById(fillId);
  const numEl  = document.getElementById(numberId);
  if (!fill || !numEl) return;

  const circumference = 502; // 2π × 80
  const fraction = score / maxScore;

  /* Breve pausa drammatica, poi anima */
  setTimeout(() => {
    fill.style.strokeDashoffset = circumference * (1 - fraction);
    numEl.style.opacity = '1';
    animateCounter(numEl, score, 2500);
  }, 800);
}

/* ============================================================
   11. INIT — chiamato da ogni pagina
   ============================================================ */
function initPage() {
  revealOnScroll();
  animateProgressBars();
  animateTableRows();
}

/* Avvia quando il DOM è pronto */
document.addEventListener('DOMContentLoaded', initPage);
