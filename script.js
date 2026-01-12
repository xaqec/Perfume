/* script.js */

// --- OYUN MOTORU ---
const GAME = {
    gender: null,
    step: 0,
    scores: {},

    start: (gender) => {
        GAME.gender = gender;
        GAME.step = 0;
        GAME.scores = {};

        document.getElementById('screen-welcome').classList.remove('active');
        document.getElementById('screen-game').classList.add('active');

        GAME.renderStep();
        BG_ENGINE.mode = 'game';
    },

    renderStep: () => {
        const stories = STORY_DATA[GAME.gender];

        if (!stories) return;

        // Oyun Bitti mi?
        if (GAME.step >= stories.length) {
            GAME.startAnalysis();
            return;
        }

        const currentStory = stories[GAME.step];
        const qText = document.getElementById('q-text');
        const optsContainer = document.getElementById('opts-container');
        const progressBar = document.getElementById('progress');

        // Metin Güncelle
        qText.style.opacity = 0;
        setTimeout(() => {
            qText.innerText = currentStory.text;
            qText.style.opacity = 1;
        }, 200);

        // Arka Planı Güncelle (Sahneye Göre)
        BG_ENGINE.sceneType = currentStory.bg || 'default';

        // Progress Bar
        const progressPercent = ((GAME.step) / stories.length) * 100;
        progressBar.style.width = `${progressPercent}%`;

        // Seçenekleri Oluştur
        optsContainer.innerHTML = '';
        currentStory.opts.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.innerText = opt.t;
            btn.onclick = () => GAME.next(opt.c);
            optsContainer.appendChild(btn);
        });
    },

    next: (category) => {
        if (!GAME.scores[category]) GAME.scores[category] = 0;
        GAME.scores[category]++;
        GAME.step++;
        GAME.renderStep();
    },

    startAnalysis: () => {
        document.getElementById('screen-game').classList.remove('active');
        document.getElementById('screen-analysis').classList.add('active');
        BG_ENGINE.sceneType = 'analysis'; // Matrix style or chaotic

        // 3 Saniye bekle sonra sonuca git
        setTimeout(() => {
            GAME.finish();
        }, 3000);
    },

    finish: () => {
        document.getElementById('screen-analysis').classList.remove('active');
        document.getElementById('screen-result').classList.add('active');
        BG_ENGINE.mode = 'result';
        BG_ENGINE.sceneType = 'result';

        // Kazananı Hesapla
        let winner = Object.keys(GAME.scores).reduce((a, b) => GAME.scores[a] > GAME.scores[b] ? a : b);

        // Veritabanından Seç (Yedekli)
        let pool = PERFUME_DB[GAME.gender].filter(p => p.cat === winner);
        // Eğer kategori boşsa tüm DB'den seç (Fallback)
        if (pool.length === 0) pool = PERFUME_DB[GAME.gender];

        const r = pool[Math.floor(Math.random() * pool.length)];

        // DOM Doldur
        const imgEl = document.getElementById('res-img');
        imgEl.src = r.img;

        document.getElementById('res-brand').innerText = r.brand;
        document.getElementById('res-name').innerText = r.name;
        document.getElementById('res-desc').innerText = r.desc;
        document.getElementById('res-top').innerText = r.top;
        document.getElementById('res-heart').innerText = r.heart;
        document.getElementById('res-base').innerText = r.base;
    }
};

// --- ARKA PLAN (CANVAS) MOTORU ---
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width, height;

class Particle {
    constructor(type) {
        this.reset(type);
    }
    reset(type) {
        this.type = type;
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        if (type === 'forest') {
            this.y = Math.random() * height;
            this.size = Math.random() * 20 + 50; // Ağaç gövdesi veya sis
            this.speedY = 0;
            this.speedX = (Math.random() - 0.5) * 0.2;
            this.alpha = Math.random() * 0.05;
        } else if (type === 'rain') {
            this.y = Math.random() * height - height;
            this.size = Math.random() * 2 + 1;
            this.len = Math.random() * 20 + 10;
            this.speedY = Math.random() * 10 + 10;
            this.speedX = 0;
            this.alpha = 0.3;
        } else if (type === 'sky') {
            this.size = Math.random() * 2;
            this.speedX = 0;
            this.speedY = 0;
            this.alpha = Math.random();
            this.twinkle = Math.random() * 0.02;
        } else if (type === 'analysis') {
            this.x = Math.floor(Math.random() * (width / 20)) * 20;
            this.y = Math.random() * height - height;
            this.val = Math.floor(Math.random() * 10); // 0-9
            this.speedY = Math.random() * 5 + 5;
            this.size = 14;
            this.color = '#D4AF37';
        } else {
            // Default (Firefly)
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 1;
            this.speedY = (Math.random() - 0.5) * 1;
            this.alpha = Math.random();
            this.fade = Math.random() * 0.01 + 0.005;
            this.dir = 1;
        }
    }

    update() {
        if (this.type === 'forest') {
            this.x += this.speedX;
            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
        } else if (this.type === 'rain') {
            this.y += this.speedY;
            if (this.y > height) this.y = -50;
        } else if (this.type === 'sky') {
            this.alpha += this.twinkle;
            if (this.alpha > 1 || this.alpha < 0) this.twinkle *= -1;
        } else if (this.type === 'analysis') {
            this.y += this.speedY;
            if (this.y > height) {
                this.y = -20;
                this.val = Math.floor(Math.random() * 10);
            }
        } else {
            // Firefly behavior
            this.x += this.speedX;
            this.y += this.speedY;
            this.alpha += this.fade * this.dir;
            if (this.alpha > 1 || this.alpha < 0) this.dir *= -1;
            if (this.x > width || this.x < 0 || this.y > height || this.y < 0) this.reset();
        }
    }

    draw() {
        if (this.type === 'forest') {
            ctx.fillStyle = `rgba(20, 40, 20, ${this.alpha})`;
            ctx.fillRect(this.x, 0, this.size, height); // Dikey gölgeler (ağaçlar)
        } else if (this.type === 'rain') {
            ctx.strokeStyle = `rgba(100, 150, 255, ${this.alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y + this.len);
            ctx.stroke();
        } else if (this.type === 'sky') {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.type === 'analysis') {
            ctx.fillStyle = this.color;
            ctx.font = '14px monospace';
            ctx.fillText(this.val, this.x, this.y);
        } else {
            ctx.fillStyle = `rgba(212, 175, 55, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            // Glow
            ctx.shadowBlur = 10;
            ctx.shadowColor = "gold";
            ctx.stroke();
            ctx.shadowBlur = 0;
        }
    }
}

// Mansion için özel çizim (partikül değil şekil)
function drawMansionBg() {
    // Arkaplan karartma
    ctx.fillStyle = 'rgba(10, 5, 5, 0.1)';
    ctx.fillRect(0, 0, width, height);

    // Temsili Malikane Silueti (Basit geometrik)
    ctx.fillStyle = '#0f0f0f';
    const mw = 300;
    const mh = 200;
    const mx = width / 2 - mw / 2;
    const my = height / 2;

    // Çatı
    ctx.beginPath();
    ctx.moveTo(mx, my);
    ctx.lineTo(mx + mw / 2, my - 100);
    ctx.lineTo(mx + mw, my);
    ctx.fill();

    // Bina
    ctx.fillRect(mx, my, mw, mh);

    // Pencereler (Sarı ışık)
    ctx.fillStyle = `rgba(255, 215, 0, ${Math.random() * 0.5 + 0.2})`;
    if (Math.random() > 0.05) { // Hafif titreme
        ctx.fillRect(mx + 40, my + 40, 40, 60);
        ctx.fillRect(mx + 220, my + 40, 40, 60);
        ctx.fillRect(mx + 130, my + 120, 40, 80); // Kapı
    }
}

let particles = [];
const BG_ENGINE = {
    _sceneType: 'default',
    set sceneType(val) {
        if (this._sceneType !== val) {
            this._sceneType = val;
            this.initParticles(); // Sahne değişince partikülleri resetle
        }
    },
    get sceneType() { return this._sceneType; },

    initParticles: () => {
        particles = [];
        let count = 100;
        let type = 'default';

        if (BG_ENGINE.sceneType === 'forest') { count = 50; type = 'forest'; }
        else if (BG_ENGINE.sceneType === 'rain') { count = 300; type = 'rain'; }
        else if (BG_ENGINE.sceneType === 'sky' || BG_ENGINE.sceneType === 'dream') { count = 200; type = 'sky'; }
        else if (BG_ENGINE.sceneType === 'analysis') { count = 150; type = 'analysis'; }
        else if (BG_ENGINE.sceneType === 'mansion') { count = 0; } // Özel çizim

        for (let i = 0; i < count; i++) {
            particles.push(new Particle(type));
        }
    }
};

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    BG_ENGINE.initParticles();
}

function loop() {
    // Trail effect for smooth fading or clear for crisp
    if (BG_ENGINE.sceneType === 'rain' || BG_ENGINE.sceneType === 'analysis') {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; // Trail bırak
        ctx.fillRect(0, 0, width, height);
    } else if (BG_ENGINE.sceneType === 'mansion') {
        // Mansion un kendi loop u var içinde temizliyor gibi
        ctx.clearRect(0, 0, width, height);
        drawMansionBg();
    } else {
        ctx.clearRect(0, 0, width, height);
    }

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(loop);
}

// Modal Functions
function openAbout(e) {
    if (e) e.preventDefault();
    document.getElementById('aboutModal').classList.add('open');
}
function closeAbout() {
    document.getElementById('aboutModal').classList.remove('open');
}

window.addEventListener('resize', resize);
window.onload = function () {
    resize();
    loop();
};
