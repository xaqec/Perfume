/* script.js */

// --- CANVAS ENGINE V2 ---
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width, height;

const DRAW = {
    clear: (color) => { ctx.fillStyle = color || '#000'; ctx.fillRect(0, 0, width, height); },
    gradient: (c1, c2, dir = 'b') => {
        const grd = dir === 'b' ? ctx.createLinearGradient(0, height, 0, 0) : ctx.createRadialGradient(width/2, height/2, 10, width/2, height/2, width);
        grd.addColorStop(0, c1); grd.addColorStop(1, c2); ctx.fillStyle = grd; ctx.fillRect(0, 0, width, height);
    },
    stars: (count = 100, speed = 0.5) => {
        ctx.fillStyle = '#fff';
        for(let i=0; i<count; i++) {
            const x = (Math.sin(Date.now()*0.0001*speed + i) * width + width) % width;
            const y = (Math.cos(Date.now()*0.0002*speed + i*9) * height + height) % height;
            ctx.globalAlpha = Math.random(); ctx.beginPath(); ctx.arc(x,y,Math.random()*2,0,Math.PI*2); ctx.fill();
        }
        ctx.globalAlpha = 1;
    },
    mist: (color, density = 5) => {
        ctx.fillStyle = color; const t = Date.now() * 0.0005;
        for(let i=0; i<density; i++) {
            const y = height - (Math.sin(t + i)*100) - (i*50);
            ctx.globalAlpha = 0.1; ctx.fillRect(0, y, width, 100);
        }
        ctx.globalAlpha = 1;
    },
    rain: (intensity = 100, color = 'rgba(150,150,255,0.5)') => {
        ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.beginPath();
        for(let i=0; i<intensity; i++) {
            const x = Math.random() * width; const y = Math.random() * height;
            ctx.moveTo(x,y); ctx.lineTo(x, y+Math.random()*20+10);
        }
        ctx.stroke();
    },
    neonGrid: (color = '#0ff') => {
        ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.globalAlpha = 0.3;
        const t = (Date.now() * 0.05) % 50; ctx.beginPath();
        for(let y=height; y>height/2; y-=50) { ctx.moveTo(0, y+t); ctx.lineTo(width, y+t); }
        const cx = width/2; const cy = height/2;
        for(let x=-width; x<width*2; x+=100) { ctx.moveTo(x, height); ctx.lineTo(cx, cy); }
        ctx.stroke(); ctx.globalAlpha = 1;
    },
    fireflies: (count = 30) => {
        ctx.fillStyle = '#D4AF37'; ctx.shadowBlur = 10; ctx.shadowColor = 'gold';
        for(let i=0; i<count; i++) {
            const x = (Math.sin(Date.now()*0.001 + i)*width/2 + width/2);
            const y = (Math.cos(Date.now()*0.0013 + i)*height/2 + height/2);
            ctx.beginPath(); ctx.arc(x,y,2,0,Math.PI*2); ctx.fill();
        }
        ctx.shadowBlur = 0;
    },
    geometric: (color) => {
        ctx.strokeStyle = color; ctx.lineWidth = 2; const t = Date.now() * 0.001; const cx = width/2, cy = height/2;
        ctx.strokeRect(cx - 100 + Math.sin(t)*20, cy - 100 + Math.cos(t)*20, 200, 200);
        ctx.beginPath(); ctx.arc(cx, cy, 150 + Math.sin(t)*10, 0, Math.PI*2); ctx.stroke();
    }
};

const SCENES = {
    // FEMALE
    'f_1': () => { DRAW.gradient('#051005', '#1a3020'); DRAW.mist('#2f4f30', 8); DRAW.fireflies(10); },
    'f_2': () => { DRAW.gradient('#0b1026', '#2b3046'); DRAW.mist('#505060', 3); DRAW.rain(50, 'rgba(255,255,255,0.1)'); },
    'f_3': () => { DRAW.gradient('#150505', '#301010'); DRAW.stars(50, 0.2); DRAW.geometric('rgba(255,215,0,0.2)'); },
    'f_4': () => { DRAW.clear('#1a0f0a'); DRAW.mist('#d4af37', 2); },
    'f_5': () => { DRAW.gradient('#000', '#222'); DRAW.geometric('rgba(255,255,255,0.1)'); },
    'f_6': () => { DRAW.clear('#201020'); DRAW.stars(20, 0.1); },
    'f_7': () => { DRAW.gradient('#100010', '#400040', 'r'); },
    'f_8': () => { DRAW.clear('#050505'); DRAW.fireflies(5); },
    'f_9': () => { DRAW.gradient('#000', '#101050'); DRAW.stars(200, 2); },
    'f_10': () => { DRAW.gradient('#402010', '#805030'); DRAW.mist('#fff', 5); },
    'f_11': () => { DRAW.gradient('#000000', '#ffffff', 'r'); },
    'f_12': () => { DRAW.clear('#1a0520'); DRAW.geometric('#f0f'); },
    'f_13': () => { DRAW.gradient('#200000', '#f00'); DRAW.mist('#ffaa00', 10); },
    'f_14': () => { DRAW.gradient('#002000', '#00ff00', 'r'); },
    'f_15': () => { DRAW.clear('#fff'); },
    'f_16': () => { DRAW.clear('#001'); DRAW.rain(200, '#fff'); },
    'f_17': () => { DRAW.gradient('#101020', '#303050'); DRAW.rain(100); DRAW.geometric('rgba(255,255,255,0.3)'); },
    'f_18': () => { DRAW.gradient('#302010', '#804010'); },
    'f_19': () => { DRAW.gradient('#000', '#333'); DRAW.fireflies(50); },
    'f_20': () => { DRAW.gradient('#D4AF37', '#000', 'r'); DRAW.stars(100, 5); },
    // MALE
    'm_1': () => { DRAW.clear('#020205'); DRAW.neonGrid('#00f'); },
    'm_2': () => { DRAW.gradient('#101010', '#202020'); },
    'm_3': () => { DRAW.clear('#100505'); DRAW.mist('#f00', 2); },
    'm_4': () => { DRAW.gradient('#201505', '#504010'); },
    'm_5': () => { DRAW.gradient('#100020', '#300050'); DRAW.neonGrid('#f0f'); },
    'm_6': () => { DRAW.gradient('#000', '#555', 'r'); },
    'm_7': () => { DRAW.clear('#0f2010'); },
    'm_8': () => { DRAW.clear('#000'); DRAW.geometric('#fff'); },
    'm_9': () => { DRAW.clear('#000'); if(Math.random()>0.9) DRAW.clear('#fff'); },
    'm_10': () => { DRAW.clear('#020210'); DRAW.rain(150); DRAW.neonGrid('#0ff'); },
    'm_11': () => { DRAW.gradient('#101010', '#303030'); },
    'm_12': () => { DRAW.clear('#051015'); DRAW.mist('#fff', 2); },
    'm_13': () => { DRAW.gradient('#000', '#001040'); DRAW.stars(50); },
    'm_14': () => { DRAW.clear('#101020'); if(Math.random()>0.95) ctx.fillRect(0,0,width,height); DRAW.rain(200); },
    'm_15': () => { DRAW.gradient('#000', '#402010', 'b'); },
    'm_16': () => { DRAW.clear('#eee'); },
    'm_17': () => { DRAW.gradient('#101010', '#505050', 'r'); },
    'm_18': () => { DRAW.gradient('#201005', '#402010'); },
    'm_19': () => { DRAW.clear('#000'); DRAW.stars(200, 0.1); },
    'm_20': () => { DRAW.gradient('#000', '#fff', 'b'); DRAW.geometric('#D4AF37'); },
    // SYSTEMS
    'welcome': () => { DRAW.gradient('#000', '#100515', 'r'); DRAW.stars(50, 0.5); DRAW.fireflies(10); },
    'analysis': () => { 
        DRAW.clear('#000'); ctx.fillStyle = '#0f0'; ctx.font = '12px monospace';
        for(let i=0; i<50; i++) ctx.fillText(String.fromCharCode(0x30A0 + Math.random()*96), Math.random()*width, Math.random()*height);
    },
    'default': () => { DRAW.clear('#111'); }
};

// --- GAME LOGIC ---
const GAME = {
    data: null,
    step: 0,
    scores: {},
    
    start: (gender) => {
        if (!STORY_DATA || !STORY_DATA[gender]) { alert('Veri hatası!'); return; }
        GAME.data = STORY_DATA[gender];
        GAME.step = 0;
        GAME.scores = { romantik:0, sik:0, enerjik:0, gizemli:0, gurme:0, temiz:0, maskulen:0, centilmen:0 };

        document.getElementById('screen-welcome').classList.remove('active');
        document.getElementById('screen-game').classList.add('active');
        
        // 100ms gecikme ile DOM'un hazır olmasını bekle
        setTimeout(GAME.renderStep, 100);
    },

    renderStep: () => {
        if (!GAME.data) return;
        if (GAME.step >= GAME.data.length) { GAME.startAnalysis(); return; }

        const s = GAME.data[GAME.step];
        RENDERER.activeScene = s.bg || 'default';

        const card = document.querySelector('.story-card');
        const textField = document.getElementById('q-text');
        const optsField = document.getElementById('opts-container');
        const progressFill = document.getElementById('progress-fill');

        if(textField) textField.innerHTML = s.text;
        
        if(optsField) {
            optsField.innerHTML = '';
            if(s.opts && s.opts.length > 0) {
                s.opts.forEach(o => {
                    const btn = document.createElement('button'); // div yerine button daha güvenli
                    btn.className = 'opt-btn';
                    btn.textContent = o.t;
                    btn.onclick = () => GAME.choose(o.c);
                    optsField.appendChild(btn);
                });
            }
        }

        if(progressFill) {
            const pct = ((GAME.step) / GAME.data.length) * 100;
            progressFill.style.width = `${pct}%`;
        }

        if(card) {
            card.classList.remove('swipe-left', 'swipe-right');
            card.classList.add('card-enter');
            setTimeout(() => card.classList.remove('card-enter'), 400);
        }
    },

    choose: (cat) => {
        if(GAME.scores[cat] !== undefined) GAME.scores[cat]++;
        const card = document.querySelector('.story-card');
        if(card) card.classList.add('swipe-left');
        setTimeout(() => {
            GAME.step++;
            GAME.renderStep();
        }, 300);
    },

    startAnalysis: () => {
        document.getElementById('screen-game').classList.remove('active');
        document.getElementById('screen-analysis').classList.add('active');
        RENDERER.activeScene = 'analysis';
        setTimeout(GAME.showResult, 4000);
    },

    showResult: () => {
        document.getElementById('screen-analysis').classList.remove('active');
        document.getElementById('screen-result').classList.add('active');
        RENDERER.activeScene = 'f_19';

        let maxScore = -1, winner = 'sik';
        for (const [key, value] of Object.entries(GAME.scores)) {
            if (value > maxScore) { maxScore = value; winner = key; }
        }

        const genderKey = GAME.data === STORY_DATA.female ? 'female' : 'male';
        let pool = PERFUME_DB[genderKey].filter(p => p.cat === winner);
        if (pool.length === 0) pool = PERFUME_DB[genderKey];
        const r = pool[Math.floor(Math.random() * pool.length)];

        document.getElementById('res-img').src = r.img;
        document.getElementById('res-brand').innerText = r.brand;
        document.getElementById('res-name').innerText = r.name;
        document.getElementById('res-desc').innerText = r.desc;
        document.getElementById('res-top').innerText = r.top;
        document.getElementById('res-heart').innerText = r.heart;
        document.getElementById('res-base').innerText = r.base;
    }
};

const RENDERER = {
    activeScene: 'welcome',
    loop: () => {
        if (SCENES[RENDERER.activeScene]) SCENES[RENDERER.activeScene]();
        else SCENES['default']();
        requestAnimationFrame(RENDERER.loop);
    },
    resize: () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
};

window.addEventListener('resize', RENDERER.resize);
window.onload = () => { RENDERER.resize(); RENDERER.loop(); };
