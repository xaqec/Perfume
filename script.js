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
        BG_ENGINE.mode = 'game'; // Arka planı değiştir
    },

    renderStep: () => {
        const stories = STORY_DATA[GAME.gender];
        
        // Oyun Bitti mi?
        if (GAME.step >= stories.length) {
            GAME.finish();
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
        BG_ENGINE.sceneType = currentStory.bg;

        // Progress Bar
        const progressPercent = ((GAME.step + 1) / stories.length) * 100;
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

    finish: () => {
        document.getElementById('screen-game').classList.remove('active');
        document.getElementById('screen-result').classList.add('active');
        BG_ENGINE.mode = 'result';

        // Kazananı Hesapla
        let winner = Object.keys(GAME.scores).reduce((a, b) => GAME.scores[a] > GAME.scores[b] ? a : b);
        
        // Veritabanından Seç (Yedekli)
        let pool = PERFUME_DB[GAME.gender].filter(p => p.cat === winner);
        if (pool.length === 0) pool = PERFUME_DB[GAME.gender];
        
        const r = pool[Math.floor(Math.random() * pool.length)];

        // DOM Doldur
        document.getElementById('res-img').src = r.img;
        document.getElementById('res-brand').innerText = r.brand;
        document.getElementById('res-name').innerText = r.name;
        document.getElementById('res-desc').innerText = r.desc;
        document.getElementById('res-top').innerText = r.top;
        document.getElementById('res-heart').innerText = r.heart;
        document.getElementById('res-base').innerText = r.base;
    }
};

// --- ARKA PLAN & ATEŞBÖCEĞİ MOTORU (CANVAS) ---
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

// Ateşböceği Sınıfı (Flicker Düzeltildi)
class Firefly {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5; // Yavaşlatıldı
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.alpha = Math.random();
        this.fadeSpeed = Math.random() * 0.01 + 0.002; // Çok yumuşak geçiş
        this.fadingOut = Math.random() > 0.5;
        this.color = `255, 215, 0`; // Gold
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Yumuşak Alpha Geçişi
        if (this.fadingOut) {
            this.alpha -= this.fadeSpeed;
            if (this.alpha <= 0) { this.fadingOut = false; this.reset(); }
        } else {
            this.alpha += this.fadeSpeed;
            if (this.alpha >= 1) this.fadingOut = true;
        }

        // Sınır Kontrolü
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) this.reset();
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${this.color}, 1)`;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

// Ortam Çizimi (Abstract Shapes for Scenes)
const BG_ENGINE = {
    mode: 'welcome',
    sceneType: 'forest', // forest, mansion, city...
    
    drawScene: () => {
        // Burada basit geometrik şekillerle "hissi" vereceğiz, fotoğraf yok.
        if (BG_ENGINE.sceneType === 'forest') {
            // Hafif yeşil/sisli gradient overlay (CSS'ten ziyade canvas manipülasyonu)
            // Ama basit tutmak için sadece renk tonunu değiştirebiliriz.
        }
    }
};

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

function init() {
    resize();
    for (let i = 0; i < 150; i++) { // Sayı arttırıldı
        particles.push(new Firefly());
    }
    loop();
}

function loop() {
    // Hafif iz bırakarak temizleme (Motion Trail)
    ctx.fillStyle = 'rgba(10, 5, 15, 0.2)'; // Arka plan rengiyle uyumlu, az şeffaf
    ctx.fillRect(0, 0, width, height);

    // Ateşböcekleri
    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(loop);
}

window.addEventListener('resize', resize);
init();
