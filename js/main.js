/* Godfada Beltings — shared script */

/* ======= SMART IMAGE LOADER =======
   Tries a short list of extensions for a given short code (no extension).
   Calls onOk() if one loads, onFail() if none do. This lets every image
   slot on the site auto-fit whatever file type/size is dropped in, as
   long as the filename (the short code) matches. */
var EXTS = ['jpg','jpeg','png','webp','JPG','JPEG','PNG','WEBP','Jpg','Jpeg','Png','Webp'];
var IMG_DIR = 'public/images/';
function smartLoad(imgEl, code, onOk, onFail){
  var i = 0;
  function tryNext(){
    if(i >= EXTS.length){ onFail && onFail(); return; }
    imgEl.onerror = function(){ i++; tryNext(); };
    imgEl.onload = function(){ onOk && onOk(); };
    imgEl.src = IMG_DIR + code + '.' + EXTS[i];
  }
  tryNext();
}

/* ======= NAV DRAWER ======= */
document.addEventListener('DOMContentLoaded', function(){
  var overlay = document.getElementById('navOverlay');
  var menuBtn = document.getElementById('menuBtn');
  var navClose = document.getElementById('navClose');
  if(menuBtn) menuBtn.addEventListener('click', function(){ overlay.classList.add('show'); });
  if(navClose) navClose.addEventListener('click', function(){ overlay.classList.remove('show'); });
  if(overlay){
    overlay.addEventListener('click', function(e){ if(e.target === overlay) overlay.classList.remove('show'); });
    overlay.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ overlay.classList.remove('show'); }); });
  }
});

/* ======= SCROLL REVEAL ======= */
document.addEventListener('DOMContentLoaded', function(){
  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
});

/* ======= CATALOGUE DATA (inlined) ======= */
var CATALOGUE = {"products": [{"id": "TB01", "name": "Neoprene/Rubber Timing Belt \u2013 3M", "cat": "Timing Belts", "catCode": "TB", "specs": [["Material", "Neoprene / Rubber"], ["Pitch / Size", "3M"], ["Note", "Teeth sizes available"]], "imgs": ["C4", "C5", "C6", "C7"]}, {"id": "TB02", "name": "Neoprene/Rubber Timing Belt \u2013 5M", "cat": "Timing Belts", "catCode": "TB", "specs": [["Material", "Neoprene / Rubber"], ["Pitch / Size", "5M"], ["Note", "Teeth sizes available"]], "imgs": ["C8", "C9", "D1", "D2"]}, {"id": "TB03", "name": "Neoprene/Rubber Timing Belt \u2013 8M", "cat": "Timing Belts", "catCode": "TB", "specs": [["Material", "Neoprene / Rubber"], ["Pitch / Size", "8M"], ["Note", "Teeth sizes available"]], "imgs": ["D3", "D4", "D5", "D6"]}, {"id": "TB04", "name": "Neoprene/Rubber Timing Belt \u2013 14M", "cat": "Timing Belts", "catCode": "TB", "specs": [["Material", "Neoprene / Rubber"], ["Pitch / Size", "14M"], ["Note", "Teeth sizes available"]], "imgs": ["D7", "D8", "D9", "E1"]}, {"id": "TB05", "name": "Neoprene/Rubber Timing Belt \u2013 H", "cat": "Timing Belts", "catCode": "TB", "specs": [["Material", "Neoprene / Rubber"], ["Pitch / Size", "H"], ["Note", "Teeth sizes available"]], "imgs": ["E2", "E3", "E4", "E5"]}, {"id": "TB06", "name": "Neoprene/Rubber Timing Belt \u2013 L", "cat": "Timing Belts", "catCode": "TB", "specs": [["Material", "Neoprene / Rubber"], ["Pitch / Size", "L"], ["Note", "Teeth sizes available"]], "imgs": ["E6", "E7", "E8", "E9"]}, {"id": "TB07", "name": "Polyurethane (PU) Timing Belt \u2013 AT5", "cat": "Timing Belts", "catCode": "TB", "specs": [["Material", "Polyurethane (PU)"], ["Pitch / Size", "AT5"], ["Note", "Teeth sizes available"]], "imgs": ["F1", "F2", "F3", "F4"]}, {"id": "TB08", "name": "Polyurethane (PU) Timing Belt \u2013 T5", "cat": "Timing Belts", "catCode": "TB", "specs": [["Material", "Polyurethane (PU)"], ["Pitch / Size", "T5"], ["Note", "Teeth sizes available"]], "imgs": ["F5", "F6", "F7", "F8"]}, {"id": "TB09", "name": "Polyurethane (PU) Timing Belt \u2013 AT10", "cat": "Timing Belts", "catCode": "TB", "specs": [["Material", "Polyurethane (PU)"], ["Pitch / Size", "AT10"], ["Note", "Teeth sizes available"]], "imgs": ["F9", "G1", "G2", "G3"]}, {"id": "TB10", "name": "Polyurethane (PU) Timing Belt \u2013 T10", "cat": "Timing Belts", "catCode": "TB", "specs": [["Material", "Polyurethane (PU)"], ["Pitch / Size", "T10"], ["Note", "Teeth sizes available"]], "imgs": ["G4", "G5", "G6", "G7"]}, {"id": "TB11", "name": "Polyurethane (PU) Timing Belt \u2013 AT20", "cat": "Timing Belts", "catCode": "TB", "specs": [["Material", "Polyurethane (PU)"], ["Pitch / Size", "AT20"], ["Note", "Teeth sizes available"]], "imgs": ["G8", "G9", "H1", "H2"]}, {"id": "TB12", "name": "Polyurethane (PU) Timing Belt \u2013 T20", "cat": "Timing Belts", "catCode": "TB", "specs": [["Material", "Polyurethane (PU)"], ["Pitch / Size", "T20"], ["Note", "Teeth sizes available"]], "imgs": ["H3", "H4", "H5", "H6"]}, {"id": "TB13", "name": "Polyurethane (PU) Timing Belt with Special Coating", "cat": "Timing Belts", "catCode": "TB", "specs": [["Material", "Polyurethane (PU), special coating"], ["Note", "Coating adds extra grip / wear resistance"], ["Sizes", "AT and T profiles \u2014 specify on request"]], "imgs": ["M2", "M3", "M4", "M5"]}, {"id": "TB14", "name": "Double-Sided Tooth Belt", "cat": "Timing Belts", "catCode": "TB", "specs": [["Material", "Rubber, double-sided"], ["Profile", "Teeth on both faces"], ["Application", "Synchronous drives needing reverse-side engagement"]], "imgs": ["M6", "M7", "M8", "M9"]}, {"id": "CB01", "name": "PVC Conveyor Belt", "cat": "Conveyor Belts", "catCode": "CB", "specs": [["Type", "Conveyor Belt"], ["Material", "PVC"], ["Application", "General material handling / conveying"]], "imgs": ["H7", "H8", "H9", "I1"]}, {"id": "CB02", "name": "PU Conveyor Belt", "cat": "Conveyor Belts", "catCode": "CB", "specs": [["Type", "Conveyor Belt"], ["Material", "Polyurethane (PU)"], ["Application", "General material handling / conveying"]], "imgs": ["I2", "I3", "I4", "I5"]}, {"id": "CB03", "name": "PTFE Conveyor Belt", "cat": "Conveyor Belts", "catCode": "CB", "specs": [["Type", "Conveyor Belt"], ["Material", "PTFE-coated fabric"], ["Application", "General material handling / conveying"]], "imgs": ["I6", "I7", "I8", "I9"]}, {"id": "CB04", "name": "Black Rubber Conveyor Belt", "cat": "Conveyor Belts", "catCode": "CB", "specs": [["Type", "Conveyor Belt"], ["Material", "Black Rubber"], ["Application", "General material handling / conveying"]], "imgs": ["J1", "J2", "J3", "J4"]}, {"id": "TR01", "name": "Flat Belt", "cat": "Transmission Belts", "catCode": "TR", "specs": [["Type", "Flat power-transmission belt"], ["Application", "General power transmission / machine drives"]], "imgs": ["J5", "J6", "J7", "J8"]}, {"id": "TR02", "name": "Feeder Belt", "cat": "Transmission Belts", "catCode": "TR", "specs": [["Type", "Feeder belt"], ["Application", "Sheet and paper feeding systems"]], "imgs": ["J9", "K1", "K2", "K3"]}, {"id": "TR03", "name": "Vacuum Belt", "cat": "Transmission Belts", "catCode": "TR", "specs": [["Type", "Perforated vacuum belt"], ["Application", "Suction conveying & packaging lines"]], "imgs": ["K4", "K5", "K6", "K7"]}, {"id": "TR04", "name": "Folder Gluer Transport Belt", "cat": "Transmission Belts", "catCode": "TR", "specs": [["Type", "Transport belt"], ["Application", "Carton / box folder-gluer transport section"]], "imgs": ["K8", "K9", "L1", "L2"]}, {"id": "GK01", "name": "Dividing Knife", "cat": "Guillotine Knives", "catCode": "GK", "specs": [["Application", "Guillotine / cutting machine blade"], ["Material", "Tool steel or carbide-tipped \u2014 specify on request"]], "imgs": ["L3", "L4", "L5", "L6"]}, {"id": "GK02", "name": "Trimming Knife", "cat": "Guillotine Knives", "catCode": "GK", "specs": [["Application", "Guillotine / cutting machine blade"], ["Material", "Tool steel or carbide-tipped \u2014 specify on request"]], "imgs": ["L7", "L8", "L9", "M1"]}], "categories": [{"code": "TB", "name": "Timing Belts", "blurb": "Precision synchronous belts in neoprene/rubber and polyurethane, across standard tooth profiles from 3M to 20M and AT5 to T20."}, {"code": "CB", "name": "Conveyor Belts", "blurb": "Conveyor belting in PVC, PU, PTFE and black rubber constructions for general material handling lines."}, {"code": "TR", "name": "Transmission Belts", "blurb": "Flat, feeder, vacuum and folder-gluer transport belts for machine drives and finishing lines."}, {"code": "GK", "name": "Guillotine Knives", "blurb": "Dividing and trimming knives for guillotine and cutting machines."}], "heroCodes": ["A1", "A2", "A3", "A4", "A5"], "aboutCode": "A6", "galleryCodes": ["A7", "A8", "A9", "B1", "B2", "B3"], "sponsorCodes": {"intl": ["B4", "B5", "B6", "x1"], "local": ["B7", "B8", "B9", "C1", "C2", "M10"]}, "mapCode": "C3"};

var HERO_SLIDES = [
  { code: CATALOGUE.heroCodes[0], eyebrow: "Industrial Belting & Power Transmission",
    title: "Belts, blades and transmission parts built for the factory floor",
    text: "Godfada Beltings supplies timing belts, conveyor belts, transmission belts and guillotine knives to keep manufacturing and processing lines running." },
  { code: CATALOGUE.heroCodes[1], eyebrow: "Timing Belts",
    title: "Precision timing belts for every drive",
    text: "Neoprene, rubber and polyurethane timing belts across standard and metric tooth profiles \u2014 3M to 20M, AT5 to T20." },
  { code: CATALOGUE.heroCodes[2], eyebrow: "Conveyor Belts",
    title: "Conveyor belts that keep production moving",
    text: "PVC, PU, PTFE and black rubber conveyor belting for every material handling line." },
  { code: CATALOGUE.heroCodes[3], eyebrow: "Transmission Belts",
    title: "Reliable transmission belts for machine drives",
    text: "Flat, feeder, vacuum and folder-gluer transport belts, ready to supply." },
  { code: CATALOGUE.heroCodes[4], eyebrow: "Guillotine Knives",
    title: "Sharp, dependable guillotine knives",
    text: "Dividing and trimming knives built for continuous cutting machines." }
];

/* ======= HERO SLIDER (background AND wording change together) ======= */
function initHeroSlider(){
  var track = document.getElementById('heroSlides');
  var dotsWrap = document.getElementById('heroDots');
  if(!track) return;
  var slides = [];

  HERO_SLIDES.forEach(function(s, idx){
    var slide = document.createElement('div');
    slide.className = 'hero-slide' + (idx===0 ? ' active' : '');
    slide.innerHTML =
      '<div class="ph-label">Add photo: ' + s.code + '.jpg</div>' +
      '<div class="wrap hero-inner-wrap"><div class="hero-text">' +
        '<div class="eyebrow">' + s.eyebrow + '</div>' +
        '<h2>' + s.title + '</h2>' +
        '<p>' + s.text + '</p>' +
        '<div class="hero-actions">' +
          '<a class="btn" href="products.html">Product Showcase</a>' +
          '<a class="btn ghost" href="contact.html">Contact Us</a>' +
        '</div>' +
      '</div></div>';
    track.appendChild(slide);
    slides.push(slide);

    var dot = document.createElement('button');
    if(idx===0) dot.className = 'active';
    dot.addEventListener('click', function(){ showSlide(idx); });
    dotsWrap.appendChild(dot);

    var probe = new Image();
    smartLoad(probe, s.code,
      function(){
        slide.style.backgroundImage = "url('" + probe.src + "')";
        slide.querySelector('.ph-label').style.display = 'none';
      },
      function(){ slide.style.background = 'linear-gradient(135deg,#0b3d24,#14803f)'; }
    );
  });

  var current = 0;
  function showSlide(idx){
    slides[current].classList.remove('active');
    dotsWrap.children[current].classList.remove('active');
    current = idx;
    slides[current].classList.add('active');
    dotsWrap.children[current].classList.add('active');
  }
  setInterval(function(){ showSlide((current + 1) % slides.length); }, 5000);
}

/* ======= CATEGORY TILES (Home page) ======= */
/* One representative product photo per category, shown in the tile circle */
var CAT_THUMB = { TB: 'F5', CB: 'H7', TR: 'K4', GK: 'L3' };

function initCatTiles(){
  var wrap = document.getElementById('catTiles');
  if(!wrap) return;
  wrap.innerHTML = CATALOGUE.categories.map(function(c){
    var count = CATALOGUE.products.filter(function(p){ return p.catCode === c.code; }).length;
    var thumbCode = CAT_THUMB[c.code] || (CATALOGUE.products.find(function(p){ return p.catCode === c.code; }) || {}).imgs[0];
    return '<a class="cat-tile reveal" href="products.html#' + c.code + '">' +
      '<div class="thumb" data-code="' + thumbCode + '">' +
        '<img alt="' + c.name + '">' +
        '<div class="ph">Add photo<code>' + thumbCode + '.jpg</code></div>' +
      '</div>' +
      '<div class="n">' + c.name + '</div>' +
      '<div class="c">' + count + ' items</div>' +
      '</a>';
  }).join('');
  wrap.querySelectorAll('.thumb').forEach(function(el){
    var img = el.querySelector('img');
    smartLoad(img, el.dataset.code, function(){ el.classList.add('loaded'); }, function(){});
  });
  observeNew(wrap);
}

/* Re-run scroll-reveal observation for elements injected after DOMContentLoaded */
var _io2 = ('IntersectionObserver' in window) ? new IntersectionObserver(function(entries){
  entries.forEach(function(entry){ if(entry.isIntersecting){ entry.target.classList.add('in'); _io2.unobserve(entry.target); } });
}, { threshold: 0.12 }) : null;
function observeNew(container){
  if(!_io2){ container.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); }); return; }
  container.querySelectorAll('.reveal').forEach(function(el){ _io2.observe(el); });
}

/* ======= PRODUCTS PAGE ======= */
var activeCat = 'All';
function initProducts(){
  var chipsEl = document.getElementById('chips');
  if(!chipsEl) return;

  var hash = window.location.hash.replace('#','');
  if(hash && CATALOGUE.categories.some(function(c){ return c.code === hash; })) activeCat = hash;

  function buildChips(){
    var cats = [{code:'All', name:'All'}].concat(CATALOGUE.categories);
    chipsEl.innerHTML = cats.map(function(c){
      return '<button class="chip ' + (c.code===activeCat?'active':'') + '" data-code="' + c.code + '">' + c.name + '</button>';
    }).join('');
    chipsEl.querySelectorAll('.chip').forEach(function(btn){
      btn.addEventListener('click', function(){ activeCat = btn.dataset.code; buildChips(); renderProducts(); });
    });
  }

  function renderProducts(){
    var q = document.getElementById('search').value.trim().toLowerCase();
    var byCat = {};
    CATALOGUE.categories.forEach(function(c){ byCat[c.code] = []; });
    var total = 0;
    CATALOGUE.products.forEach(function(p){
      if(activeCat !== 'All' && p.catCode !== activeCat) return;
      var hay = (p.name + ' ' + p.cat).toLowerCase();
      if(q && hay.indexOf(q) === -1) return;
      byCat[p.catCode].push(p);
      total++;
    });
    document.getElementById('count').textContent = total + ' product' + (total===1?'':'s');

    var gridWrap = document.getElementById('gridWrap');
    if(!gridWrap) return;
    var html = '';
    CATALOGUE.categories.forEach(function(c){
      var items = byCat[c.code];
      if(!items.length) return;
      html += '<div class="cat-group" id="' + c.code + '">' +
        '<h3>' + c.name + '</h3><p class="blurb">' + c.blurb + '</p>' +
        '<div class="grid">' + items.map(cardHtml).join('') + '</div></div>';
    });
    gridWrap.innerHTML = html || '<p style="text-align:center;color:var(--steel-light)">No products match your search.</p>';

    gridWrap.querySelectorAll('.card-avatar').forEach(function(av){
      var img = av.querySelector('img');
      smartLoad(img, av.dataset.cover,
        function(){ av.classList.add('loaded'); },
        function(){ /* stays placeholder */ }
      );
    });
    observeNew(gridWrap);
  }

  function cardHtml(p){
    var mini = p.specs ? ('<div class="mini-specs"><b>' + p.specs[0][1] + '</b> &middot; ' + p.specs[1][1] + '</div>') : '';
    return '<div class="card reveal">' +
      '<div class="card-avatar" data-cover="' + p.imgs[0] + '">' +
        '<img alt="' + p.name + '">' +
        '<div class="ph">Add photo<code>' + p.imgs[0] + '.jpg</code></div>' +
      '</div>' +
      '<div class="card-tag">' + p.cat + '</div>' +
      '<h4>' + p.name + '</h4>' +
      mini +
      '<button class="btn" onclick="openModal(\'' + p.id + '\')">View</button>' +
      '</div>';
  }

  document.getElementById('search').addEventListener('input', renderProducts);
  buildChips();
  renderProducts();
}

/* ======= SPONSORS (Home + About pages) =======
   First 3 codes = international suppliers, remaining 5 = local delivery
   partners. Same underlying codes/files as before — just split by group. */
function initSponsors(){
  var wraps = document.querySelectorAll('.sponsor-grid');
  if(!wraps.length) return;
  var intlCodes = CATALOGUE.sponsorCodes.intl;
  var localCodes = CATALOGUE.sponsorCodes.local;

  function fillGrid(wrap, codes){
    codes.forEach(function(code){
      var card = document.createElement('div');
      card.className = 'sponsor-card missing reveal';
      card.innerHTML = '<img alt="Sponsor logo"><div class="ph2"><span class="plus">+</span>Add logo as<br><code>' + code + '.jpg</code></div>';
      wrap.appendChild(card);
      var img = card.querySelector('img');
      smartLoad(img, code,
        function(c){ return function(){ c.classList.remove('missing'); c.classList.add('loaded'); }; }(card),
        function(){}
      );
    });
    observeNew(wrap);
  }

  wraps.forEach(function(wrap){
    var group = wrap.dataset.group;
    if(group === 'intl') fillGrid(wrap, intlCodes);
    else if(group === 'local') fillGrid(wrap, localCodes);
    else fillGrid(wrap, intlCodes.concat(localCodes)); /* fallback for any ungrouped grid */
  });
}

/* ======= GALLERY (About page) ======= */
function initGallery(){
  var wrap = document.getElementById('galleryGrid');
  if(!wrap) return;
  CATALOGUE.galleryCodes.forEach(function(code){
    var cell = document.createElement('div');
    cell.className = 'gallery-cell reveal';
    cell.innerHTML = '<img alt="Gallery photo"><div class="ph">Add photo<code>' + code + '.jpg</code></div>';
    wrap.appendChild(cell);
    var img = cell.querySelector('img');
    smartLoad(img, code,
      function(c){ return function(){ c.classList.add('loaded'); }; }(cell),
      function(){}
    );
  });
  observeNew(wrap);
}

/* ======= ABOUT PAGE SINGLE PHOTO ======= */
function initAboutPhoto(){
  var el = document.getElementById('aboutPhoto');
  if(!el) return;
  var img = el.querySelector('img');
  smartLoad(img, CATALOGUE.aboutCode, function(){ el.classList.add('loaded'); }, function(){});
}

/* ======= CTA BANNER FALLBACK ======= */
function initCtaBanner(){
  document.querySelectorAll('.cta-banner[data-img]').forEach(function(el){
    var probe = new Image();
    smartLoad(probe, el.dataset.img,
      function(){ el.style.backgroundImage = "linear-gradient(rgba(9,46,27,.82),rgba(9,46,27,.82)), url('" + probe.src + "')"; },
      function(){ el.style.backgroundImage = 'linear-gradient(135deg,#0b3d24,#14803f)'; }
    );
  });
}

/* ======= CONTACT MAP PLACEHOLDER ======= */
function initMapSlot(){
  var slot = document.getElementById('mapSlot');
  if(!slot) return;
  var img = slot.querySelector('img');
  smartLoad(img, CATALOGUE.mapCode, function(){ slot.classList.add('loaded'); }, function(){});
}

/* ======= CONTACT FORM (opens a pre-filled email — no server needed) ======= */
function initContactForm(){
  var form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('cfName').value.trim();
    var email = document.getElementById('cfEmail').value.trim();
    var phone = document.getElementById('cfPhone').value.trim();
    var msg = document.getElementById('cfMessage').value.trim();
    var body = 'Name: ' + name + '\nEmail: ' + email + '\nTelephone: ' + phone + '\n\nMessage:\n' + msg;
    window.location.href = 'mailto:Godfadabeltingsnig@gmail.com?subject=' +
      encodeURIComponent('Website enquiry from ' + (name || 'website visitor')) +
      '&body=' + encodeURIComponent(body);
  });
}

/* ======= PRODUCT MODAL — 4-image swipe/auto-advance carousel ======= */
var pmTimer = null;
var pmIndex = 0;
var pmTotal = 4;

function buildCarousel(imgs){
  var wrap = document.getElementById('pmCarousel');
  var dotsWrap = document.getElementById('pmDots');
  if(!wrap || !dotsWrap) return;
  wrap.querySelectorAll('.pm-slide').forEach(function(el){ el.remove(); });
  imgs.forEach(function(code, i){
    var slide = document.createElement('div');
    slide.className = 'pm-slide' + (i===0 ? ' active' : '');
    slide.innerHTML = '<img alt="Product photo ' + (i+1) + '"><div class="ph">Photo ' + (i+1) + '<code>' + code + '.jpg</code></div>';
    wrap.appendChild(slide);
    var img = slide.querySelector('img');
    smartLoad(img, code, function(){ slide.classList.add('loaded'); }, function(){});
  });

  dotsWrap.innerHTML = '';
  imgs.forEach(function(_, i){
    var dot = document.createElement('button');
    if(i===0) dot.className = 'active';
    dot.addEventListener('click', function(){ pmShow(i); resetAutoplay(); });
    dotsWrap.appendChild(dot);
  });

  pmIndex = 0;
  pmTotal = imgs.length;
  resetAutoplay();
}

function pmShow(idx){
  var slides = document.querySelectorAll('#pmCarousel .pm-slide');
  var dots = document.querySelectorAll('#pmDots button');
  if(!slides.length) return;
  slides[pmIndex].classList.remove('active');
  dots[pmIndex] && dots[pmIndex].classList.remove('active');
  pmIndex = (idx + pmTotal) % pmTotal;
  slides[pmIndex].classList.add('active');
  dots[pmIndex] && dots[pmIndex].classList.add('active');
}
function resetAutoplay(){
  if(pmTimer) clearInterval(pmTimer);
  pmTimer = setInterval(function(){ pmShow(pmIndex + 1); }, 3000);
}
function stopAutoplay(){
  if(pmTimer){ clearInterval(pmTimer); pmTimer = null; }
}

function openModal(id){
  var p = CATALOGUE.products.find(function(x){ return x.id === id; });
  if(!p) return;
  var modal = document.getElementById('modal');
  if(!modal) return;

  buildCarousel(p.imgs);

  document.getElementById('mTag').textContent = p.cat;
  document.getElementById('mTitle').textContent = p.name;
  var specsWrap = document.getElementById('mSpecs');
  var descEl = document.getElementById('mDesc');
  if(p.specs && p.specs.length){
    descEl.style.display = 'none';
    specsWrap.style.display = 'block';
    specsWrap.innerHTML = p.specs.map(function(s){
      return '<div><span class="spec-label">' + s[0] + '</span><span class="spec-val">' + s[1] + '</span></div>';
    }).join('');
  } else {
    var cat = CATALOGUE.categories.find(function(c){ return c.code === p.catCode; });
    descEl.style.display = 'block';
    descEl.textContent = cat ? cat.blurb : '';
    specsWrap.style.display = 'none';
    specsWrap.innerHTML = '';
  }

  var waMsg = encodeURIComponent('Hello Godfada Beltings, I\'d like to enquire about: ' + p.name + ' (' + p.cat + ').');
  document.getElementById('optWa').href = 'https://wa.me/2348145406250?text=' + waMsg;
  document.getElementById('optCall').href = 'tel:+2348145406250';
  document.getElementById('optMail').href = 'mailto:Godfadabeltingsnig@gmail.com?subject=' +
    encodeURIComponent('Enquiry: ' + p.name) + '&body=' +
    encodeURIComponent('Hello, I\'d like to enquire about: ' + p.name + ' (' + p.cat + ').');

  document.getElementById('requestOptions').classList.remove('show');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  var modal = document.getElementById('modal');
  if(!modal) return;
  modal.classList.remove('show');
  document.body.style.overflow = '';
  stopAutoplay();
}
document.addEventListener('DOMContentLoaded', function(){
  var modal = document.getElementById('modal');
  if(!modal) return;
  document.getElementById('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', function(e){ if(e.target===modal) closeModal(); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeModal(); });
  document.getElementById('requestBtn').addEventListener('click', function(){
    document.getElementById('requestOptions').classList.toggle('show');
  });
  document.getElementById('pmPrev').addEventListener('click', function(){ pmShow(pmIndex - 1); resetAutoplay(); });
  document.getElementById('pmNext').addEventListener('click', function(){ pmShow(pmIndex + 1); resetAutoplay(); });

  /* swipe support */
  var carousel = document.getElementById('pmCarousel');
  var touchStartX = 0, touchDeltaX = 0;
  carousel.addEventListener('touchstart', function(e){ touchStartX = e.touches[0].clientX; touchDeltaX = 0; }, {passive:true});
  carousel.addEventListener('touchmove', function(e){ touchDeltaX = e.touches[0].clientX - touchStartX; }, {passive:true});
  carousel.addEventListener('touchend', function(){
    if(Math.abs(touchDeltaX) > 40){
      pmShow(pmIndex + (touchDeltaX < 0 ? 1 : -1));
      resetAutoplay();
    }
  });
});

/* ======= INIT ======= */
document.addEventListener('DOMContentLoaded', function(){
  initHeroSlider();
  initCatTiles();
  initSponsors();
  initGallery();
  initProducts();
  initContactForm();
  initMapSlot();
  initAboutPhoto();
  initCtaBanner();
});
