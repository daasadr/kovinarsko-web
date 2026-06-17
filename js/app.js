/* ═══════════════════════════════════════════════════
   KOVINARSKO ATELJE BREZNIK — Main Application
   Sparks · Language · Map · Animations · Nav
   ═══════════════════════════════════════════════════ */

'use strict';

/* ───────────────────────────────────────
   TRANSLATIONS
─────────────────────────────────────── */
const TR = {
  sl: {
    logo_sub:     'Kovinarsko atelje',
    nav_about:    'O nas',
    nav_story:    'Naša zgodba',
    nav_gallery:  'Galerija',
    nav_services: 'Storitve',
    nav_contact:  'Kontakt',
    // Hero
    hero_eyebrow: 'Umetnost ognja in kovine',
    hero_desc:    'Ročno kovano železo z dušo — od elegantnih ograj do monumentalnih umetniških del',
    hero_cta1:    'Oglej si galerijo',
    hero_cta2:    'Povpraši nas',
    // Stats
    stat_years:   'let izkušenj',
    stat_pieces:  'unikatnih kosov',
    stat_countries: 'držav',
    stat_hand:    'ročno delo',
    // About
    about_label:  'O nas',
    about_title:  'Kovačija z dušo in tradicijo',
    about_p1:     'Kovinarsko atelje Breznik je ročna kovačija s sedežem v srcu Gorenjske. Z več kot tremi desetletji izkušenj ustvarjamo unikatne kovane predmete, ki združujejo starodavno obrt z modernim dizajnom.',
    about_p2:     'Vsak kos, ki zapusti našo delavnico, je sad ur predanega dela, natančnosti in ljubezni do kovine. Delamo izključno po naročilu — od enostavnih ročajev do kompleksnih ograj, vrat in umetniških instalacij.',
    badge_since:  'Ustanovljeno',
    feat1_h:      '100% ročno delo',
    feat1_p:      'Vsak kos obdelamo ročno v naši delavnici',
    feat2_h:      'Tradicionalne metode',
    feat2_p:      'Ohranjamo starodavno znanje kovačije',
    feat3_h:      'Unikatni dizajn',
    feat3_p:      'Vsak kos je edinstvena umetnina',
    // Story
    story_label:  'Naša zgodba',
    story_title:  'Tri generacije ognja in jekla',
    story_p1:     'Zgodba Kovinarskega ateljeja Breznik se začne leta 1988, ko je Franc Breznik v majhni delavnici v Gorenjski dolini prvič prižgal oganj pod kladivom. Naučil se je rokodelstva pri svojem očetu in ga združil z lastno vizijo — kovinarstvo ne sme biti le obrt, ampak umetnost.',
    story_p2:     'Danes atelje vodi njegova hčerka Maja Breznik, ki je tradicijo obogatila z modernimi dizajnerskimi pristopi, ne da bi izgubila tisto, kar nas ločuje od masovne proizvodnje: vsak kos nastane pod enim samim parom rok, od surovega jekla do končnega izdelka.',
    story_p3:     'Naši kovaški izdelki krasijo domove, hotele in javne prostore po vsej Evropi. A ne glede na velikost naročila ostajamo zvesti enakemu principu: kvaliteta, ki jo čutiš ob dotiku. Obrt, ki jo vidiš v vsakem detajlu.',
    story_cta:    'Začni projekt z nami',
    // Gallery
    gal_label:    'Naše delo',
    gal_title:    'Galerija del',
    gal_lead:     'Vsak projekt je unikat — oglejte si le nekatera izmed naših del',
    gf_all:       'Vse',
    gf_rail:      'Ograje',
    gf_gate:      'Vrata & portali',
    gf_decor:     'Dekoracija',
    gf_furn:      'Pohištvo',
    g1_h: 'Kovana balkonska ograja',        g1_p: 'Klasičen motiv s spiralami, vroče cinkano',
    g2_h: 'Vhodna vrata z ornamentom',       g2_p: 'Kovano železo z bronastimi detajli',
    g3_h: 'Stenska umetnina — jelen',        g3_p: 'Ročno kovana dekoracija za notranjost',
    g4_h: 'Jedilna miza — jeklo & hrast',    g4_p: 'Kombinacija kovine in masivnega lesa',
    g5_h: 'Stopniščna ograja — modern',      g5_p: 'Minimalistični dizajn z ravnimi linijami',
    g6_h: 'Kovaški svečnik',                 g6_p: 'Unikatni svečnik za restavracijo',
    g7_h: 'Portalni lok',                    g7_p: 'Monumentalni lok s klasičnim ornamentom',
    g8_h: 'Pisalna miza — kovano podnožje',  g8_p: 'Industrijski dizajn z leseno ploščo',
    g9_h: 'Kovaška roža — stenski detajl',   g9_p: 'Ročno kovana dekorativna roža',
    g10_h:'Vrtna ograja — klasični motiv',   g10_p:'Kovana ograja z ornamentalnimi konicami',
    g11_h:'Kovaška klop — vrt',              g11_p:'Masivna kovana klop za zunanjo uporabo',
    g12_h:'Drsna garažna vrata',             g12_p:'Kovano železo s sodobnim sistemom vodil',
    shop_label: 'Naša delavnica',
    // Services
    svc_label:   'Storitve',
    svc_title:   'Kaj ustvarjamo po naročilu',
    svc_lead:    'Specializiramo se za ročno kovane produkte, prilagojene točno vašim željam in prostoru',
    s1_h: 'Vrata & portali',
    s1_p: 'Vhodna vrata za hiše in vile, portalni loki, vrtnska vrata. Klasičen ali sodoben dizajn po vaših željah.',
    s1_l1:'Vhodna vrata hiš',      s1_l2:'Vrtnska vrata in ograje',  s1_l3:'Garažna vrata',         s1_l4:'Portalni loki',
    s2_h: 'Ograje & stopnišča',
    s2_p: 'Balkonske in stopniščne ograje, terasne ograje — od elegantno klasičnih do modernih minimalističnih linij.',
    s2_l1:'Balkonske ograje',      s2_l2:'Stopniščne ograje',        s2_l3:'Terasne ograje',         s2_l4:'Notranje pregradne ograje',
    s3_h: 'Notranja dekoracija',
    s3_p: 'Unikatni kovaški elementi za notranjost: svečniki, stenski okraski, kljuke, ročaji, pohištveni okov.',
    s3_l1:'Svečniki in svetilke',  s3_l2:'Stenski okraski',          s3_l3:'Pohištveni okov',        s3_l4:'Kljuke in ročaji',
    s4_h: 'Vrtna arhitektura',
    s4_p: 'Pergole, loki, okrasni kovaški elementi za vrt — trpežni in estetski, za vsak stil vrta.',
    s4_l1:'Pergole in loki',       s4_l2:'Vrtne skulpture',          s4_l3:'Žardinjere',             s4_l4:'Okrasne ograje',
    s5_h: 'Pohištvo po meri',
    s5_p: 'Mize, stoli, police z kovaškimi detajli — industrijski in rustikalni stil, kovinski ali kombiniran.',
    s5_l1:'Jedilne in pisalne mize', s5_l2:'Kovaška podnožja',       s5_l3:'Kovinski stoli',         s5_l4:'Police in konzole',
    s6_h: 'Javni & poslovni prostori',
    s6_p: 'Večje instalacije za hotele, restavracije, pisarne in javne prostore — od manjših akcentov do monumentalnih del.',
    s6_l1:'Hotelski in restavracijski dekor', s6_l2:'Pisarniška signalizacija', s6_l3:'Javne skulpture', s6_l4:'Arhitekturni elementi',
    svc_cta_txt: 'Imate posebno idejo? Skupaj jo uresničimo.',
    svc_cta_btn: 'Pošljite povpraševanje',
    // Contact
    con_label:  'Kontakt',
    con_title:  'Začnimo pogovor',
    con_lead:   'Vsak projekt se začne z idejo — povejte nam svojo',
    f_name:     'Vaše ime',
    f_email:    'E-pošta',
    f_phone:    'Telefon',
    f_optional: '(neobvezno)',
    f_svc:      'Vrsta storitve',
    f_msg:      'Opišite projekt',
    f_send:     'Pošlji povpraševanje',
    f_note:     'Odgovorimo v roku 24 ur — delovni dnevi',
    fo_0: 'Izberite...', fo_1:'Vrata & portali', fo_2:'Ograje & stopnišča', fo_3:'Notranja dekoracija',
    fo_4:'Vrtna arhitektura', fo_5:'Pohištvo po meri', fo_6:'Javni prostori', fo_7:'Drugo',
    ci_loc:       'Lokacija',
    ci_loc_note:  'Točen naslov sporočimo ob dogovoru',
    ci_tel:       'Telefon',
    ci_mail:      'E-pošta',
    ci_hrs:       'Delovni čas',
    ci_hrs1:      'Pon–Pet: 8:00 – 17:00',
    ci_hrs2:      'Sob: 8:00 – 12:00',
    map_note:     'Točen naslov sporočimo ob dogovoru.',
    // Footer
    ft_tagline: 'Ročno kovano. Z dušo. Od 1988.',
    ft_rights:  'Vse pravice pridržane.',
    // Form feedback
    form_ok:    'Hvala! Vaše sporočilo je bilo poslano. Odgovorili bomo v kratkem.',
    form_err:   'Prosimo, izpolnite vsa obvezna polja.',
  },

  en: {
    logo_sub:     'Blacksmith Atelier',
    nav_about:    'About',
    nav_story:    'Our Story',
    nav_gallery:  'Gallery',
    nav_services: 'Services',
    nav_contact:  'Contact',
    // Hero
    hero_eyebrow: 'The Art of Fire and Iron',
    hero_desc:    'Hand-forged ironwork with soul — from elegant railings to monumental works of art',
    hero_cta1:    'View Gallery',
    hero_cta2:    'Contact Us',
    // Stats
    stat_years:    'years of experience',
    stat_pieces:   'unique pieces',
    stat_countries:'countries',
    stat_hand:     'handmade',
    // About
    about_label:  'About Us',
    about_title:  'A Forge with Soul and Tradition',
    about_p1:     'Kovinarsko atelje Breznik is a hand forge situated in the heart of Gorenjska, Slovenia. With over three decades of experience, we create unique wrought-iron pieces that blend ancient craftsmanship with modern design.',
    about_p2:     'Every piece that leaves our workshop is the result of hours of dedicated work, precision and love for metal. We work exclusively to order — from simple handles to complex railings, gates and artistic installations.',
    badge_since:  'Established',
    feat1_h:      '100% Handmade',
    feat1_p:      'Every piece is crafted by hand in our workshop',
    feat2_h:      'Traditional Methods',
    feat2_p:      'We preserve the ancient art of blacksmithing',
    feat3_h:      'Unique Design',
    feat3_p:      'Every piece is a one-of-a-kind work of art',
    // Story
    story_label:  'Our Story',
    story_title:  'Three Generations of Fire and Steel',
    story_p1:     'The story of Kovinarsko atelje Breznik begins in 1988, when Franc Breznik lit the fire under his hammer for the first time in a small workshop in the Gorenjska valley. He learned the craft from his father and combined it with his own vision — blacksmithing must not be mere craft, but art.',
    story_p2:     'Today the atelier is run by his daughter Maja Breznik, who has enriched the tradition with modern design approaches without losing what sets us apart from mass production: every piece is made by a single pair of hands, from raw steel to the finished product.',
    story_p3:     'Our forged pieces adorn homes, hotels and public spaces across Europe. But regardless of the size of the order, we remain true to the same principle: quality you can feel to the touch. Craftsmanship visible in every detail.',
    story_cta:    'Start a Project with Us',
    // Gallery
    gal_label:    'Our Work',
    gal_title:    'Gallery',
    gal_lead:     'Every project is unique — here are just some of our works',
    gf_all:       'All',
    gf_rail:      'Railings',
    gf_gate:      'Gates & Portals',
    gf_decor:     'Decoration',
    gf_furn:      'Furniture',
    g1_h:'Forged Balcony Railing',      g1_p:'Classic spiral motif, hot-dip galvanized',
    g2_h:'Entry Gate with Ornament',    g2_p:'Wrought iron with bronze details',
    g3_h:'Wall Art — Deer',             g3_p:'Hand-forged interior decoration',
    g4_h:'Dining Table — Steel & Oak',  g4_p:'Combination of metal and solid wood',
    g5_h:'Staircase Railing — Modern',  g5_p:'Minimalist design with clean lines',
    g6_h:'Blacksmith Candelabra',       g6_p:'Unique candelabra for a restaurant',
    g7_h:'Portal Arch',                 g7_p:'Monumental arch with classic ornament',
    g8_h:'Writing Desk — Forged Base',        g8_p:'Industrial design with wooden top',
    g9_h:'Forged Rose — Wall Detail',         g9_p:'Hand-forged decorative rose',
    g10_h:'Garden Fence — Classic Motif',     g10_p:'Forged fence with ornamental finials',
    g11_h:'Forged Garden Bench',              g11_p:'Heavy-duty forged bench for outdoor use',
    g12_h:'Sliding Garage Gate',              g12_p:'Wrought iron with modern sliding rail system',
    shop_label: 'Our Workshop',
    // Services
    svc_label:  'Services',
    svc_title:  'What We Create to Order',
    svc_lead:   'We specialise in hand-forged products tailored exactly to your wishes and space',
    s1_h:'Gates & Portals',
    s1_p:'Entry gates for homes and villas, portal arches, garden gates. Classic or modern design to your specification.',
    s1_l1:'Home entry gates', s1_l2:'Garden gates and fences', s1_l3:'Garage doors', s1_l4:'Portal arches',
    s2_h:'Railings & Staircases',
    s2_p:'Balcony and staircase railings, terrace railings — from elegantly classical to modern minimalist lines.',
    s2_l1:'Balcony railings', s2_l2:'Staircase railings', s2_l3:'Terrace railings', s2_l4:'Interior partition railings',
    s3_h:'Interior Decoration',
    s3_p:'Unique forged elements for interiors: candelabras, wall decorations, hooks, handles, furniture hardware.',
    s3_l1:'Candelabras and lamps', s3_l2:'Wall art and panels', s3_l3:'Furniture hardware', s3_l4:'Hooks and handles',
    s4_h:'Garden Architecture',
    s4_p:'Pergolas, arches, decorative forged elements for the garden — durable and aesthetic for every garden style.',
    s4_l1:'Pergolas and arches', s4_l2:'Garden sculptures', s4_l3:'Planters', s4_l4:'Decorative fencing',
    s5_h:'Custom Furniture',
    s5_p:'Tables, chairs, shelving with forged details — industrial and rustic styles, metal or combined.',
    s5_l1:'Dining and writing tables', s5_l2:'Forged table bases', s5_l3:'Metal chairs', s5_l4:'Shelves and consoles',
    s6_h:'Public & Commercial Spaces',
    s6_p:'Larger installations for hotels, restaurants, offices and public spaces — from small accents to monumental works.',
    s6_l1:'Hotel & restaurant décor', s6_l2:'Office signage', s6_l3:'Public sculptures', s6_l4:'Architectural elements',
    svc_cta_txt: 'Have a special idea? Let\'s bring it to life together.',
    svc_cta_btn: 'Send an Enquiry',
    // Contact
    con_label:  'Contact',
    con_title:  'Let\'s Start a Conversation',
    con_lead:   'Every project begins with an idea — tell us yours',
    f_name:     'Your Name',
    f_email:    'Email',
    f_phone:    'Phone',
    f_optional: '(optional)',
    f_svc:      'Type of Service',
    f_msg:      'Describe Your Project',
    f_send:     'Send Enquiry',
    f_note:     'We respond within 24 hours — working days',
    fo_0:'Select...', fo_1:'Gates & Portals', fo_2:'Railings & Staircases', fo_3:'Interior Decoration',
    fo_4:'Garden Architecture', fo_5:'Custom Furniture', fo_6:'Public Spaces', fo_7:'Other',
    ci_loc:       'Location',
    ci_loc_note:  'Exact address provided upon arrangement',
    ci_tel:       'Phone',
    ci_mail:      'Email',
    ci_hrs:       'Working Hours',
    ci_hrs1:      'Mon–Fri: 8:00 – 17:00',
    ci_hrs2:      'Sat: 8:00 – 12:00',
    map_note:     'Exact address provided upon arrangement.',
    // Footer
    ft_tagline: 'Hand-forged. With soul. Since 1988.',
    ft_rights:  'All rights reserved.',
    // Form feedback
    form_ok:  'Thank you! Your message has been sent. We will respond shortly.',
    form_err: 'Please fill in all required fields.',
  }
};

/* ───────────────────────────────────────
   LANGUAGE SWITCHER
─────────────────────────────────────── */
let currentLang = localStorage.getItem('breznik-lang') || 'sl';

function applyTranslations(lang) {
  const t = TR[lang];
  if (!t) return;

  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);

  // Update all [data-tr] elements
  document.querySelectorAll('[data-tr]').forEach(el => {
    const key = el.getAttribute('data-tr');
    if (t[key] === undefined) return;
    // For inputs keep placeholder separate
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.setAttribute('placeholder', t[key]);
    } else {
      el.textContent = t[key];
    }
  });

  // Update lang button label
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = lang === 'sl' ? 'EN' : 'SL';
}

function initLang() {
  applyTranslations(currentLang);

  const btn = document.getElementById('langBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    currentLang = currentLang === 'sl' ? 'en' : 'sl';
    localStorage.setItem('breznik-lang', currentLang);
    applyTranslations(currentLang);
  });
}

/* ───────────────────────────────────────
   NAVIGATION
─────────────────────────────────────── */
function initNav() {
  const navbar  = document.getElementById('navbar');
  const toggle  = document.getElementById('navToggle');
  const links   = document.getElementById('navLinks');

  // Scroll behaviour
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile toggle
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a[href^="#"]');

  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAs.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(s => sectionObs.observe(s));
}

/* ───────────────────────────────────────
   SPARKS PARTICLE SYSTEM
─────────────────────────────────────── */
class Spark {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
  }

  reset() {
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Emit from forge area — bottom center, slightly random
    this.x = w * (0.35 + Math.random() * 0.3);
    this.y = h * (0.78 + Math.random() * 0.1);

    // Upward + slightly sideways
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.1;
    const speed = 1.5 + Math.random() * 4.5;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;

    // Drag
    this.drag = 0.988 + Math.random() * 0.008;

    // Gravity
    this.gravity = 0.025 + Math.random() * 0.04;

    // Size: mostly tiny, occasionally larger
    this.size = Math.random() < 0.85
      ? 0.8 + Math.random() * 1.6
      : 2 + Math.random() * 2.5;

    // Life
    this.maxLife = 55 + Math.random() * 130;
    this.life    = this.maxLife;

    // Lateral drift
    this.drift = (Math.random() - 0.5) * 0.04;

    // Trail: store previous positions
    this.trail = [];
    this.trailLen = Math.floor(3 + Math.random() * 5);

    // Is this an ember that lands and glows?
    this.isEmber = Math.random() < 0.08;
    this.landed  = false;
    this.landY   = h * (0.82 + Math.random() * 0.12);
    this.landLife = 0;
  }

  update() {
    if (this.landed) {
      this.landLife--;
      return this.landLife > 0;
    }

    // Store trail
    this.trail.unshift({ x: this.x, y: this.y });
    if (this.trail.length > this.trailLen) this.trail.pop();

    this.vx += this.drift;
    this.vx *= this.drag;
    this.vy *= this.drag;
    this.vy += this.gravity;

    this.x += this.vx;
    this.y += this.vy;
    this.life--;

    // Ember landing
    if (this.isEmber && !this.landed && this.y >= this.landY && this.vy > 0) {
      this.landed  = true;
      this.landLife = 25 + Math.random() * 30;
      return true;
    }

    if (this.life <= 0) return false;
    if (this.y < -20) return false;
    if (this.x < -50 || this.x > this.canvas.width + 50) return false;
    return true;
  }

  draw(ctx) {
    const alpha = this.life / this.maxLife;

    // Ember glow on ground
    if (this.landed) {
      const a = this.landLife / 55;
      ctx.save();
      ctx.globalAlpha = a * 0.9;
      ctx.shadowBlur  = 12 * a;
      ctx.shadowColor = '#e85d04';
      ctx.fillStyle   = `rgba(250,100,4,${a})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 1.4 * a, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      return;
    }

    const t = 1 - alpha; // 0=birth → 1=death

    // Color temperature: white-yellow → orange → red
    let r, g, b;
    if (t < 0.15) {
      r = 255; g = 255; b = Math.round(200 * (1 - t / 0.15));
    } else if (t < 0.45) {
      r = 255; g = Math.round(255 - 150 * ((t - 0.15) / 0.3)); b = 0;
    } else if (t < 0.75) {
      r = 255; g = Math.round(105 - 105 * ((t - 0.45) / 0.3)); b = 0;
    } else {
      r = Math.round(255 * (1 - (t - 0.75) / 0.25)); g = 0; b = 0;
    }

    ctx.save();
    ctx.globalAlpha = Math.min(1, alpha * 1.6);

    // Trail
    if (this.trail.length > 1) {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      this.trail.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.35})`;
      ctx.lineWidth   = this.size * 0.6;
      ctx.lineCap     = 'round';
      ctx.stroke();
    }

    // Core spark
    ctx.shadowBlur  = this.size > 2 ? 10 : 6;
    ctx.shadowColor = `rgb(${r},${Math.min(255,g+40)},0)`;
    ctx.fillStyle   = `rgb(${r},${g},${b})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(0.3, this.size * alpha), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function initSparks() {
  const canvas = document.getElementById('sparksCanvas');
  if (!canvas) return;

  const hero = document.getElementById('hero');
  const ctx  = canvas.getContext('2d');
  let particles = [];
  let animId;
  let lastSpawn = 0;
  const SPAWN_INTERVAL = 45; // ms between spawns
  const MAX_PARTICLES  = 180;

  function resize() {
    canvas.width  = hero.clientWidth;
    canvas.height = hero.clientHeight;
  }
  resize();

  const resizeObs = new ResizeObserver(resize);
  resizeObs.observe(hero);

  function spawnBurst(count = 1) {
    for (let i = 0; i < count; i++) {
      if (particles.length < MAX_PARTICLES) {
        particles.push(new Spark(canvas));
      }
    }
  }

  // Initial burst
  spawnBurst(40);

  function tick(now) {
    animId = requestAnimationFrame(tick);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Spawn
    if (now - lastSpawn > SPAWN_INTERVAL) {
      spawnBurst(Math.random() < 0.3 ? 3 : 1);
      lastSpawn = now;
    }

    // Update + draw
    particles = particles.filter(p => {
      const alive = p.update();
      if (alive) p.draw(ctx);
      return alive;
    });
  }

  animId = requestAnimationFrame(tick);

  // Pause when hero not visible
  const heroObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      if (!animId) animId = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(animId);
      animId = null;
    }
  });
  heroObs.observe(hero);
}

/* ───────────────────────────────────────
   LEAFLET DARK MAP
─────────────────────────────────────── */
function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined') return;

  // Radovljica, Gorenjska — intentionally city-level zoom, no exact address
  const LAT = 46.3440;
  const LNG = 14.1720;
  const ZOOM = 12;

  const map = L.map('map', {
    center: [LAT, LNG],
    zoom: ZOOM,
    zoomControl: true,
    scrollWheelZoom: false,
    dragging: true,
    attributionControl: true,
  });

  // CartoDB Dark Matter tiles — beautiful dark style, no API key needed
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  // Custom ember-coloured marker
  const icon = L.divIcon({
    className: '',
    html: `<div style="
      width:28px; height:28px;
      background: #e85d04;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 0 0 4px rgba(232,93,4,0.25), 0 4px 16px rgba(0,0,0,0.6);
      border: 2px solid #fff;
    "></div>`,
    iconSize:   [28, 28],
    iconAnchor: [14, 28],
    popupAnchor:[0, -32],
  });

  const marker = L.marker([LAT, LNG], { icon }).addTo(map);
  marker.bindPopup(`
    <div style="font-family:'Lato',sans-serif; font-size:13px; line-height:1.5; color:#e8ddd0; min-width:160px">
      <strong style="font-family:'Cinzel',serif; font-size:12px; letter-spacing:0.06em; color:#e85d04">
        Kovinarsko atelje Breznik
      </strong><br>
      Radovljica, Gorenjska<br>
      <span style="font-size:11px; color:#6b5a4a">Točen naslov ob dogovoru</span>
    </div>
  `, { maxWidth: 220 }).openPopup();
}

/* ───────────────────────────────────────
   SCROLL REVEAL (IntersectionObserver)
─────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => obs.observe(el));
}

/* ───────────────────────────────────────
   STATS COUNTER ANIMATION
─────────────────────────────────────── */
function initCounters() {
  const statsBar = document.getElementById('statsBar');
  if (!statsBar) return;

  const nums = statsBar.querySelectorAll('.stat-num[data-count]');

  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();

    nums.forEach(el => {
      const target  = parseInt(el.getAttribute('data-count'), 10);
      const dur     = 1600;
      const start   = performance.now();

      function step(now) {
        const p = Math.min(1, (now - start) / dur);
        const ease = 1 - Math.pow(1 - p, 3); // ease-out cubic
        el.textContent = Math.floor(ease * target);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.5 });

  obs.observe(statsBar);
}

/* ───────────────────────────────────────
   GALLERY FILTER
─────────────────────────────────────── */
function initGallery() {
  const btns  = document.querySelectorAll('.gal-filter');
  const items = document.querySelectorAll('.gal-item');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-cat');

      items.forEach(item => {
        const matches = cat === 'all' || item.getAttribute('data-cat') === cat;
        item.classList.toggle('hidden', !matches);
        // Re-trigger fade animation
        if (matches) {
          item.style.animation = 'none';
          requestAnimationFrame(() => {
            item.style.animation = '';
          });
        }
      });
    });
  });
}

/* ───────────────────────────────────────
   CONTACT FORM (demo — no real send)
─────────────────────────────────────── */
function initForm() {
  const form    = document.getElementById('contactForm');
  const msgEl   = document.getElementById('formMsg');
  if (!form || !msgEl) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const t = TR[currentLang];

    const name  = form.querySelector('#fname').value.trim();
    const email = form.querySelector('#femail').value.trim();
    const msg   = form.querySelector('#fmsg').value.trim();

    if (!name || !email || !msg) {
      msgEl.textContent = t.form_err;
      msgEl.className   = 'form-feedback error';
      return;
    }

    // Demo: simulate sending
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = '...';

    setTimeout(() => {
      msgEl.textContent = t.form_ok;
      msgEl.className   = 'form-feedback success';
      form.reset();
      btn.disabled = false;
      btn.textContent = t.f_send;
    }, 900);
  });
}

/* ───────────────────────────────────────
   HERO BACKGROUND IMAGE LOAD
─────────────────────────────────────── */
function initHeroBg() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;
  const url = heroBg.style.backgroundImage.replace(/url\(['"]?([^'"]+)['"]?\)/, '$1');
  if (!url) return;
  const img = new Image();
  img.onload = () => heroBg.classList.add('loaded');
  img.src = url;
}

/* ───────────────────────────────────────
   BOOT
─────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initNav();
  initSparks();
  initReveal();
  initCounters();
  initGallery();
  initForm();
  initHeroBg();

  // Map needs a small delay so the container is visible before Leaflet measures it
  setTimeout(initMap, 200);
});
