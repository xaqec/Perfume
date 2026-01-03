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
        
        // Hata Kontrolü: Eğer hikaye verisi yoksa
        if (!stories) {
            console.error("Hikaye verisi bulunamadı!");
            return;
        }

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
const bgContainer = document.getElementById('canvas-container');

let width, height;
let particles = [];

// Ateşböceği Sınıfı
class Firefly {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.alpha = Math.random();
        this.fadeSpeed = Math.random() * 0.01 + 0.002;
        this.fadingOut = Math.random() > 0.5;
        this.color = `255, 215, 0`; // Gold
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.fadingOut) {
            this.alpha -= this.fadeSpeed;
            if (this.alpha <= 0) { this.fadingOut = false; this.reset(); }
        } else {
            this.alpha += this.fadeSpeed;
            if (this.alpha >= 1) this.fadingOut = true;
        }

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

// Arka Plan Renk Motoru
const BG_ENGINE = {
    mode: 'welcome',
    sceneType: 'forest',
    
    // Sahneye göre renk paleti döndürür
    getSceneColor: () => {
        const type = BG_ENGINE.sceneType;
        if (type === 'forest') return 'radial-gradient(circle at bottom, #0a1a0a 0%, #000 100%)'; // Yeşilimsi
        if (type === 'mansion' || type === 'hall') return 'radial-gradient(circle at bottom, #1a0b0b 0%, #000 100%)'; // Kırmızımsı
        if (type === 'city' || type === 'rain') return 'radial-gradient(circle at bottom, #0b0b1a 0%, #000 100%)'; // Mavimsi
        if (type === 'luxury' || type === 'room') return 'radial-gradient(circle at bottom, #1a1505 0%, #000 100%)'; // Altınımsı
        return 'radial-gradient(circle at bottom, #100515 0%, #000000 100%)'; // Default Morumsu
    },

    // Döngüde kontrol etmeye gerek yok, setter ile değiştirelim
    set sceneType(val) {
        this._sceneType = val;
        if(bgContainer) bgContainer.style.background = this.getSceneColor();
    },
    get sceneType() { return this._sceneType; }
};

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

function init() {
    resize();
    for (let i = 0; i < 150; i++) {
        particles.push(new Firefly());
    }
    loop();
}

function loop() {
    ctx.clearRect(0, 0, width, height); // Temizle

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(loop);
}

window.addEventListener('resize', resize);
init();
