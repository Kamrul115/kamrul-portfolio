/* --- VARIABLES --- */
:root {
    --bg-main: #0a0f1c;        /* Deep Space Blue */
    --bg-card: rgba(30, 41, 59, 0.5);
    --primary: #00f0ff;        /* Cyber Cyan */
    --secondary: #7000ff;      /* Neon Purple */
    --text-main: #ffffff;
    --text-muted: #94a3b8;
    --border: 1px solid rgba(255, 255, 255, 0.1);
    --gradient: linear-gradient(135deg, #00f0ff, #7000ff);
}

/* --- RESET --- */
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
    font-family: 'Outfit', sans-serif;
    background-color: var(--bg-main);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
}
h1, h2, h3, h4 { font-family: 'Space Grotesk', sans-serif; color: white; }
a { text-decoration: none; transition: 0.3s; }
ul { list-style: none; }

/* --- BACKGROUND GRID (Fills empty space) --- */
.grid-bg {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: -1;
}

/* --- UTILS --- */
.container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
.section-padding { padding: 8rem 0; }
.section-heading { font-size: 3rem; margin-bottom: 1rem; text-align: center; }
.section-sub { text-align: center; color: var(--text-muted); margin-bottom: 4rem; font-size: 1.2rem; }
.highlight { background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.bg-darker { background: rgba(0,0,0,0.2); }

/* --- NAVBAR --- */
nav {
    position: fixed; width: 100%; top: 0; z-index: 1000;
    background: rgba(10, 15, 28, 0.9);
    backdrop-filter: blur(15px);
    border-bottom: var(--border);
    padding: 1.2rem 0;
}
.nav-container { display: flex; justify-content: space-between; align-items: center; }
.logo { font-size: 1.5rem; font-weight: 700; color: white; letter-spacing: -1px; }
.logo span { color: var(--primary); }
.nav-links { display: flex; gap: 2rem; }
.nav-links a { color: var(--text-muted); font-weight: 500; }
.nav-links a:hover { color: var(--primary); }
.btn-primary {
    background: var(--gradient); color: white;
    padding: 0.8rem 2rem; border-radius: 50px; font-weight: 700;
}
.menu-toggle { display: none; color: white; font-size: 1.5rem; cursor: pointer; }

/* --- HERO --- */
.hero { min-height: 100vh; display: flex; align-items: center; padding-top: 80px; }
.hero-container { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 4rem; align-items: center; }
.status-badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: rgba(0, 240, 255, 0.1); border: 1px solid var(--primary);
    padding: 0.5rem 1rem; border-radius: 50px; font-size: 0.9rem; color: var(--primary);
    margin-bottom: 1.5rem;
}
.pulse { width: 8px; height: 8px; background: var(--primary); border-radius: 50%; box-shadow: 0 0 10px var(--primary); }

.hero h1 { font-size: 4rem; line-height: 1.1; margin-bottom: 1.5rem; }
.hero-desc { font-size: 1.2rem; color: var(--text-muted); margin-bottom: 2rem; max-width: 600px; }
.hero-stats { display: flex; gap: 3rem; margin-bottom: 2.5rem; border-left: 3px solid var(--secondary); padding-left: 1.5rem; }
.h-stat { display: flex; flex-direction: column; }
.h-stat .num { font-size: 2rem; font-weight: 700; color: white; }
.h-stat .txt { font-size: 0.9rem; color: var(--text-muted); }

.hero-btns { display: flex; gap: 1rem; }
.btn-secondary {
    border: 1px solid rgba(255,255,255,0.2); padding: 0.8rem 2rem;
    border-radius: 50px; color: white;
}

/* Image Frame */
.img-frame {
    position: relative; width: 380px; height: 480px;
    margin: 0 auto;
}
.img-frame img {
    width: 100%; height: 100%; object-fit: cover;
    border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 50px rgba(0, 240, 255, 0.1);
}
.floating-card {
    position: absolute; background: rgba(10, 15, 28, 0.9);
    border: 1px solid var(--border); padding: 0.8rem 1.5rem;
    border-radius: 12px; font-weight: 600; display: flex; gap: 0.5rem; align-items: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.floating-card i { color: var(--primary); }
.top { top: 40px; right: -20px; }
.bottom { bottom: 40px; left: -20px; }

/* --- TIMELINE (Detailed Experience) --- */
.timeline { position: relative; max-width: 900px; margin: 0 auto; }
.timeline::before {
    content: ''; position: absolute; left: 0; top: 0; height: 100%; width: 2px;
    background: linear-gradient(to bottom, var(--primary), var(--secondary));
}
.timeline-row { padding-left: 3rem; margin-bottom: 4rem; position: relative; }
.timeline-row::after {
    content: ''; position: absolute; left: -9px; top: 0; width: 20px; height: 20px;
    background: var(--bg-main); border: 2px solid var(--primary); border-radius: 50%;
}
.timeline-time { color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; }
.timeline-content {
    background: var(--bg-card); padding: 2.5rem; border-radius: 16px; border: var(--border);
}
.job-header h3 { font-size: 1.8rem; margin-bottom: 0.2rem; }
.company { font-size: 1.1rem; color: var(--text-muted); font-style: italic; }
.role-desc { margin: 1rem 0; font-size: 1.05rem; }
.job-details li { margin-bottom: 0.8rem; display: flex; gap: 1rem; color: #ccc; }
.job-details i { color: var(--secondary); margin-top: 5px; }

/* --- RESEARCH LAB --- */
.research-grid { display: grid; gap: 2rem; max-width: 1000px; margin: 0 auto; }
.research-card {
    background: linear-gradient(160deg, rgba(255,255,255,0.03), rgba(0,0,0,0));
    border: var(--border); padding: 3rem; border-radius: 20px;
}
.research-card.featured { border-color: var(--secondary); box-shadow: 0 0 30px rgba(112, 0, 255, 0.1); }
.card-badge {
    background: var(--secondary); display: inline-block; padding: 0.3rem 0.8rem;
    border-radius: 6px; font-size: 0.8rem; margin-bottom: 1.5rem; font-weight: 600;
}
.research-card h3 { font-size: 2rem; margin-bottom: 1rem; }
.res-desc { font-size: 1.1rem; color: var(--text-muted); margin-bottom: 2rem; }
.res-details { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); }
.res-details h4 { color: var(--primary); margin-bottom: 1rem; }
.res-details li { margin-bottom: 0.5rem; font-size: 0.95rem; color: #ddd; list-style: disc; margin-left: 1.2rem; }

/* --- XR SECTION --- */
.xr-container { display: flex; flex-direction: column; gap: 3rem; }
.xr-card {
    display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem;
    background: var(--bg-card); border: var(--border); border-radius: 24px; padding: 3rem;
    align-items: center;
}
.xr-card.ar-style { direction: rtl; } /* Flip for visual interest */
.xr-card.ar-style .xr-content { direction: ltr; }
.xr-icon { font-size: 3rem; color: var(--primary); margin-bottom: 1.5rem; }
.xr-content h3 { font-size: 2rem; margin-bottom: 1rem; }
.xr-content p { color: var(--text-muted); margin-bottom: 1.5rem; font-size: 1.1rem; }
.xr-content ul li { margin-bottom: 0.5rem; list-style: square; margin-left: 1.2rem; color: #ccc; }
.visual-placeholder {
    width: 100%; height: 250px; background: #000;
    border: 1px dashed var(--text-muted); display: flex; align-items: center; justify-content: center;
    border-radius: 12px; color: var(--text-muted);
}
.tech-tags { display: flex; gap: 0.8rem; flex-wrap: wrap; margin-top: 1.5rem; }
.tech-tags span {
    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
    padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.85rem;
}

/* --- ENGINEERING GRID --- */
.project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
.p-card {
    background: var(--bg-card); padding: 2rem; border-radius: 16px; border: var(--border);
    transition: 0.3s;
}
.p-card:hover { transform: translateY(-10px); border-color: var(--primary); }
.p-icon { font-size: 2rem; color: var(--secondary); margin-bottom: 1.5rem; }
.p-card h3 { font-size: 1.4rem; margin-bottom: 1rem; }
.p-card p { color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.95rem; }
.p-list li { font-size: 0.85rem; color: #ccc; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 0.5rem 0; }

/* --- CONTACT --- */
.contact-box {
    text-align: center; background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(0,0,0,0));
    padding: 4rem; border-radius: 30px; border: var(--border); max-width: 800px; margin: 0 auto;
}
.contact-box h2 { font-size: 2.5rem; margin-bottom: 1rem; }
.contact-info { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-top: 2rem; }
.c-item { display: flex; align-items: center; gap: 0.5rem; color: white; background: rgba(0,0,0,0.3); padding: 1rem 2rem; border-radius: 50px; border: 1px solid rgba(255,255,255,0.1); }
.c-item:hover { background: var(--primary); color: black; }

footer { text-align: center; padding: 2rem; border-top: var(--border); color: var(--text-muted); }

/* --- MOBILE --- */
@media (max-width: 768px) {
    .hero-container, .res-details, .xr-card { grid-template-columns: 1fr; }
    .hero h1 { font-size: 2.8rem; }
    .hero-stats { flex-direction: column; gap: 1rem; border-left: none; padding-left: 0; }
    .hero-btns { flex-direction: column; }
    .timeline::before { left: 0; }
    .timeline-row { padding-left: 1.5rem; }
    .img-frame { width: 100%; height: auto; aspect-ratio: 4/5; }
    .xr-card.ar-style { direction: ltr; }
    .nav-links { display: none; }
    .menu-toggle { display: block; }
}
