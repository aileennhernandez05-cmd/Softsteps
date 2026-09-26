/* soft steps. — shop behavior: language, filters, sizes, bag with bundle pricing, popups */
(function () {
  'use strict';

  // ---------- copy (English, Spanish) ----------
  const D = {};
  Object.assign(D, {"m3": ["any 3 pairs $60", "3 pares por $60"], "m5": ["any 5 pairs $90", "5 pares por $90"], "mMix": ["mix & match", "combínalos como quieras"], "mAria": ["Any 3 pairs for $60, any 5 pairs for $90", "3 pares por $60, 5 pares por $90"], "nShop": ["Shop", "Tienda"], "nBundles": ["Bundles", "Paquetes"], "nReviews": ["Reviews", "Reseñas"], "nPartners": ["Partners", "Socios"], "nFaq": ["FAQ", "Preguntas"], "bag": ["Bag", "Bolsa"], "openBag": ["Open bag", "Abrir bolsa"], "heroLabel": ["pilates grip socks", "calcetines antideslizantes de pilates"], "heroA": ["little bows, ", "moños pequeñitos, "], "heroB": ["big grip.", "gran agarre."], "heroP": ["Soft, cushioned socks with bow grips on every sole. Steady on the reformer, sweet everywhere else.", "Calcetines suaves y acolchados con agarres de moño en cada suela. Firmes en el reformer, lindos en todas partes."], "ctaShop": ["Shop the collection", "Ver la colección"], "cta3": ["3 for $60", "3 por $60"], "pt1": ["bow grips", "agarres de moño"], "pt1s": ["steady through footwork & planks", "firmeza en footwork y planchas"], "pt2": ["soft, cushioned knit", "tejido suave y acolchado"], "pt2s": ["cozy from class to coffee", "cómodos de la clase al café"], "pt3": ["11 dreamy styles", "11 estilos soñados"], "pt3s": ["slouch, crew & ruffle", "slouch, crew y con volantes"], "mixA": ["mix, match ", "combina "], "mixB": ["& save", "y ahorra"], "onePair": ["1 pair", "1 par"], "any3": ["any 3", "3 pares"], "any5": ["any 5", "5 pares"], "save6": ["save $6", "ahorra $6"], "save20": ["save $20", "ahorra $20"], "dealsAuto": ["Deals apply automatically in your bag.", "Las ofertas se aplican automáticamente en tu bolsa."], "readyA": ["ready-made ", "paquetes "], "readyB": ["bundles", "listos"], "chooseSize": ["Please choose a size", "Elige una talla"], "colA": ["the ", "la "], "colB": ["collection", "colección"], "lovedA": ["loved ", "favoritos "], "lovedB": ["in class", "en clase"], "partnerLabel": ["partner with us", "colabora con nosotros"], "bringA": ["bring soft steps. ", "lleva soft steps. "], "bringB": ["to your studio", "a tu estudio"], "forStudios": ["for studios", "para estudios"], "studiosP": ["Stock our bow grip socks at your front desk, so clients never forget their pair.", "Ofrece nuestros calcetines con moños en tu recepción para que a tus clientes nunca les falte su par."], "forInstr": ["for instructors", "para instructores"], "instrP": ["Join our ambassadors: free pairs to wear in class and your own code for your students.", "Únete a nuestras embajadoras: pares gratis para usar en clase y tu propio código para tus alumnos."], "yourName": ["Your name", "Tu nombre"], "email": ["Email", "Correo electrónico"], "pErrMsg": ["Please add your name and a valid email.", "Agrega tu nombre y un correo válido."], "apply": ["Apply", "Enviar solicitud"], "thanks": ["thank you, ", "gracias, "], "touch1": ["We'll be in touch at", "Te escribiremos pronto a"], "touch2": [" soon.", "."], "questions": ["questions", "preguntas"], "faq1q": ["How do the bundle deals work?", "¿Cómo funcionan las ofertas por paquete?"], "faq1a": ["Add any mix of styles to your bag. 3 pairs become $60 and 5 pairs become $90, automatically.", "Agrega cualquier combinación de estilos a tu bolsa. 3 pares quedan en $60 y 5 pares en $90, automáticamente."], "faq2q": ["What sizes do you carry?", "¿Qué tallas tienen?"], "faq2a": ["Every style comes in Small, Medium and Large. [ADD WHICH SHOE SIZES FIT EACH]", "Todos los estilos vienen en talla Chica, Mediana y Grande. [AGREGA QUÉ NÚMEROS DE CALZADO CORRESPONDEN A CADA TALLA]"], "faq3q": ["How should I wash them?", "¿Cómo debo lavarlos?"], "faq4q": ["How long does shipping take?", "¿Cuánto tarda el envío?"], "off15": ["15% off", "15% de descuento"], "welcome": ["welcome to soft steps.", "te damos la bienvenida a soft steps."], "popB": ["your first order", "en tu primera compra"], "popP": ["Join our list for your welcome code, new colors first and sweet little surprises.", "Únete a nuestra lista para recibir tu código de bienvenida, los colores nuevos antes que nadie y lindas sorpresas."], "emailErr": ["Please enter a valid email address.", "Escribe un correo electrónico válido."], "getOff": ["Get my 15% off", "Quiero mi 15% de descuento"], "noThanks": ["No thanks", "No, gracias"], "almost": ["almost there", "ya casi"], "checkA": ["check your ", "revisa tu "], "checkB": ["inbox", "correo"], "sent1": ["We sent a verification email to ", "Te enviamos un correo de verificación a "], "sent2": [". Tap the link inside to confirm, and your 15% off code will be on its way.", ". Toca el enlace para confirmar y tu código de 15% de descuento llegará pronto."], "keepShopping": ["Keep shopping", "Seguir comprando"], "viewerPrice": ["$22 · any 3 for $60", "$22 · 3 por $60"], "yourA": ["your ", "tu "], "yourB": ["bag", "bolsa"], "empty": ["Your bag is empty. Time to pick some bows.", "Tu bolsa está vacía. Es hora de elegir unos moños."], "regular": ["Regular price", "Precio normal"], "bundleSavings": ["Bundle savings", "Ahorro por paquete"], "total": ["Total", "Total"], "checkout": ["Checkout", "Pagar"], "closeOffer": ["Close offer", "Cerrar oferta"], "closePhoto": ["Close photo", "Cerrar foto"], "prevSock": ["Previous sock", "Calcetín anterior"], "nextSock": ["Next sock", "Siguiente calcetín"], "closeBag": ["Close bag", "Cerrar bolsa"], "removeOne": ["Remove one", "Quitar uno"], "addOne": ["Add one", "Agregar uno"], "sizeAria": ["Size", "Talla"], "iAmA": ["I am a", "Soy"], "stars": ["5 out of 5 stars", "5 de 5 estrellas"], "altHero1": ["Ivory ruffle socks with baby blue trim", "Calcetines marfil con volantes azul cielo"], "altHero2": ["Blush slouch socks with bow grips", "Calcetines slouch rosa palo con agarres de moño"], "altHero3": ["Cocoa crew socks with cream bow grips and soft steps. on the sole", "Calcetines crew color cacao con agarres de moño crema y soft steps. en la suela"], "viewLarger": ["View larger:", "Ver en grande:"], "emailPh": ["you@email.com", "tu@correo.com"], "hint0": ["Any 3 pairs for $60 · any 5 for $90", "3 pares por $60 · 5 por $90"], "hintAdd": ["Add ", "Agrega "], "hint3": [" more for 3 pairs at $60", " más para 3 pares por $60"], "hint5": [" more for 5 pairs at $90", " más para 5 pares por $90"], "hintDone": ["Bundle pricing applied 🤍", "Precio de paquete aplicado 🤍"], "added": ["Added ✓", "Agregado ✓"], "addBag": ["Add to bag", "Agregar a la bolsa"], "addBundle": ["Add bundle", "Agregar paquete"], "small": ["Small", "Chica"], "medium": ["Medium", "Mediana"], "large": ["Large", "Grande"], "sizeWord": ["Size ", "Talla "], "tabAll": ["All socks", "Todos"], "tabSlouch": ["Slouch", "Slouch"], "tabCrew": ["Crew", "Crew"], "tabRuffle": ["Ruffle", "Volantes"], "roleStudio": ["Studio", "Estudio"], "roleInstr": ["Instructor", "Instructor(a)"], "handleStudio": ["Studio name & city", "Nombre del estudio y ciudad"], "handleInstr": ["Instagram or TikTok", "Instagram o TikTok"], "bNeutrals": ["the neutrals", "los neutros"], "bBlush": ["the blush set", "el set rosa"], "bRuffle": ["the ruffle set", "el set de volantes"], "bWeek": ["the reformer week", "la semana de reformer"], "fivePairs": ["5 pairs: ", "5 pares: "]});
  Object.assign(D, {"altHero1": ["Blush slouch socks with bow grips", "Calcetines slouch rosa palo con agarres de moño"], "altHero2": ["Cocoa double-ruffle socks with pink trim, pink bow and pink bow grips", "Calcetines café con doble volante rosa, moño rosa y agarres de moño rosas"], "altHero3": ["Ivory double-ruffle socks with baby blue trim", "Calcetines marfil con doble volante azul cielo"], "pt3": ["the double ruffle", "el doble volante"], "pt3s": ["our signature two-layer cuff", "nuestro puño de dos capas distintivo"], "sigLabel": ["our signature", "nuestro sello"], "sigA": ["the double ", "el doble "], "sigB": ["ruffle", "volante"], "sigP": ["Two layers of soft frills in contrasting colors, finished with a stitched bow and bow grips that match. It is the detail that makes a soft steps. sock a soft steps. sock.", "Dos capas de volantes suaves en colores que contrastan, con un moño bordado y agarres de moño a juego. Es el detalle que hace que un calcetín soft steps. sea soft steps."], "sig1": ["two-tone, double-layer ruffle cuff", "puño de doble volante en dos tonos"], "sig2": ["embroidered bow on every leg", "moño bordado en cada pierna"], "sig3": ["bow grips that match the trim", "agarres de moño a juego con el ribete"], "sigCta": ["Shop the ruffles", "Ver los volantes"], "sigAlt1": ["Baby blue socks with a white and blue double ruffle cuff", "Calcetines azul cielo con doble volante blanco y azul"], "sigAlt2": ["Ivory socks with a peach and white double ruffle cuff", "Calcetines marfil con doble volante durazno y blanco"]});
  Object.assign(D, {"filter": ["Filter", "Filtrar"], "filterAria": ["Open filters", "Abrir filtros"], "filterTitle": ["filter", "filtrar"], "closeFilter": ["Close filters", "Cerrar filtros"], "fType": ["Sock type", "Tipo de calcetín"], "fColor": ["Color", "Color"], "fSize": ["Your size", "Tu talla"], "sizeNote": ["Every style comes in all three sizes. Picking yours here pre-selects it on every sock.", "Todos los estilos vienen en las tres tallas. Al elegir la tuya aquí, queda seleccionada en cada calcetín."], "clearAll": ["Clear all", "Borrar todo"], "showN": ["Show ", "Ver "], "socksWord": [" socks", " calcetines"], "sockWord": [" sock", " calcetín"], "showing": ["Showing ", "Mostrando "], "of": [" of ", " de "], "noMatch": ["No socks match those filters", "Ningún calcetín coincide con esos filtros"], "cPink": ["Pink", "Rosa"], "cWhite": ["White & ivory", "Blanco y marfil"], "cBrown": ["Brown", "Café"], "cBlue": ["Blue", "Azul"], "cPeach": ["Peach", "Durazno"]});
  Object.assign(D, {"front": ["Front", "Frente"], "soleWord": ["Sole", "Suela"], "photosAria": ["Photos", "Fotos"], "soleAlt": ["Sole with bow grips and the soft steps. logo: ", "Suela con agarres de moño y el logo soft steps.: "]});
  Object.assign(D, {"cRed": ["Red", "Rojo"], "tabBallet": ["Ballet wrap", "Estilo ballet"]});
  Object.assign(D, {"motionLabel": ["move with grace", "muévete con gracia"], "motionA": ["fresh off ", "recién salidos "], "motionB": ["the ribbon", "del listón"], "motionAlt": ["Illustration of three soft steps. socks swaying on a pink satin ribbon while little bows float up", "Ilustración de tres calcetines soft steps. meciéndose en un listón de satín rosa mientras flotan moñitos"]});
  Object.assign(D, {"prevPhoto": ["Previous photo", "Foto anterior"], "nextPhoto": ["Next photo", "Siguiente foto"]});

  // ---------- products ----------
  const CATALOG = [
    { id: 'blush-slouch', colors: ['pink'], cat: 'slouch', name: 'Bow Slouch · Blush', img: 'images/bow-slouch-blush.jpg', alt: 'Blush pink slouch socks with pink bow grips', desc: 'Our signature slouchy cuff in soft blush, with tone-on-tone bow grips.', altEs: 'Calcetines slouch rosa palo con agarres de moño rosa', descEs: 'Nuestro puño slouch estrella en rosa palo suave, con agarres de moño del mismo tono.' },
    { id: 'ivory-slouch', colors: ['white'], cat: 'slouch', name: 'Bow Slouch · Ivory', img: 'images/bow-slouch-ivory.jpg', alt: 'Ivory slouch socks with pink bow grips', desc: 'Creamy ivory with a scrunchy cuff and pink bows on the soles.', altEs: 'Calcetines slouch marfil con agarres de moño rosa', descEs: 'Marfil cremoso con puño fruncido y moños rosas en las suelas.' },
    { id: 'mocha-slouch', colors: ['brown'], cat: 'slouch', name: 'Bow Slouch · Mocha', img: 'images/bow-slouch-mocha.jpg', alt: 'Mocha brown slouch socks with pale pink bow grips', desc: 'Warm mocha with a slouchy cuff and pale pink bows underfoot.', altEs: 'Calcetines slouch color moca con agarres de moño rosa pálido', descEs: 'Moca cálido con puño slouch y moños rosa pálido en la suela.' },
    { id: 'ivory-crew', colors: ['white'], cat: 'crew', name: 'Bow Crew · Ivory', img: 'images/bow-crew-ivory.jpg', alt: 'Ivory crew socks with an embroidered pink bow', desc: 'A neat classic crew with an embroidered bow and pink bow grips.', altEs: 'Calcetines crew marfil con un moño rosa bordado', descEs: 'Un crew clásico y pulido con moño bordado y agarres de moño rosas.' },
    { id: 'rose-crew', colors: ['pink'], cat: 'crew', name: 'Bow Crew · Rose', img: 'images/bow-crew-rose.jpg', sole: 'images/bow-crew-rose-sole.jpg', alt: 'Rose pink crew socks with white bows', desc: 'Dusty rose with a little white bow on the cuff, white bow grips and our soft steps. logo on the sole.', altEs: 'Calcetines crew rosa con moños blancos', descEs: 'Rosa empolvado con un moñito blanco en el puño, agarres de moño blancos y nuestro logo soft steps. en la suela.' },
    { id: 'cocoa-crew', colors: ['brown'], cat: 'crew', name: 'Bow Crew · Cocoa', img: 'images/bow-crew-cocoa.jpg', sole: 'images/bow-crew-cocoa-sole.jpg', alt: 'Chocolate brown crew socks with cream bows on the cuff and cream bow grips', desc: 'Rich cocoa with cream bows and our soft steps. logo on the sole.', altEs: 'Calcetines crew color chocolate con moños crema en el puño y agarres de moño crema', descEs: 'Cacao intenso con moños crema y nuestro logo soft steps. en la suela.' },
    { id: 'logo-crew', colors: ['pink'], cat: 'crew', name: 'Logo Crew · Blush', img: 'images/logo-crew-blush.jpg', alt: 'Light pink ribbed crew socks with soft steps. stitched on the cuff', desc: 'A taller ribbed crew with soft steps. stitched on the leg.', altEs: 'Calcetines crew rosa claro acanalados con soft steps. bordado', descEs: 'Un crew acanalado más alto con soft steps. bordado en la pierna.' },
    { id: 'ruffle-sky', colors: ['white', 'blue'], cat: 'ruffle', name: 'Ruffle · Sky & Ivory', img: 'images/ruffle-sky-ivory.jpg', alt: 'White ruffle socks with blue trim and blue bow grips', desc: 'Frilly ivory with a baby blue ruffle trim, bow and grips.', altEs: 'Calcetines blancos con volantes azules y agarres de moño azules', descEs: 'Marfil con volantes y ribete azul cielo, moño y agarres a juego.' },
    { id: 'ruffle-peach', colors: ['white', 'peach'], cat: 'ruffle', name: 'Ruffle · Peach & Ivory', img: 'images/ruffle-peach-ivory.jpg', alt: 'White ruffle socks with peach trim and peach bow grips', desc: 'Frilly ivory with a sweet peach ruffle, bow and grips.', altEs: 'Calcetines blancos con volantes durazno y agarres de moño durazno', descEs: 'Marfil con un dulce volante durazno, moño y agarres a juego.' },
    { id: 'ruffle-blue', colors: ['blue'], cat: 'ruffle', name: 'Ruffle · Baby Blue', img: 'images/ruffle-baby-blue.jpg', alt: 'Baby blue ruffle socks with white bow and grips', desc: 'Soft baby blue with layered ruffles and a white bow.', altEs: 'Calcetines azul cielo con volantes, moño y agarres blancos', descEs: 'Azul cielo suave con volantes en capas y un moño blanco.' },
    { id: 'ruffle-cocoa', colors: ['brown', 'pink'], cat: 'ruffle', name: 'Ruffle · Cocoa & Pink', img: 'images/ruffle-cocoa-pink.jpg', alt: 'Brown ruffle socks with pink trim and pink bow grips', desc: 'Chocolate brown with a pink ruffle, pink bow and pink grips.', altEs: 'Calcetines café con volantes rosas y agarres de moño rosas', descEs: 'Café chocolate con volante rosa, moño rosa y agarres rosas.' },
    { id: 'ruffle-cherry', colors: ['red', 'white'], cat: 'ruffle', name: 'Ruffle · Cherry & Ivory', img: 'images/ruffle-cherry-ivory.jpg', sole: 'images/ruffle-cherry-ivory-sole.jpg', alt: 'Ivory socks with a cherry red and white double ruffle cuff, red bow and red bow grips', desc: 'Frilly ivory with a deep cherry ruffle, a cherry bow and our soft steps. logo on the sole.', altEs: 'Calcetines marfil con doble volante rojo cereza y blanco, moño rojo y agarres de moño rojos', descEs: 'Marfil con volantes y un volante rojo cereza, un moño cereza y nuestro logo soft steps. en la suela.' },
    { id: 'ballet-blush', colors: ['pink'], cat: 'ballet', name: 'Ballet Wrap · Blush', img: 'images/ballet-wrap-blush.jpg', sole: 'images/ballet-wrap-blush-sole.jpg', alt: 'Blush pink ballet-style grip socks with crossed straps over an open top and a slouchy ribbed leg', desc: 'A ballet flat–inspired sock with crossed straps, a slouchy leg and our soft steps. logo on the sole.', altEs: 'Calcetines estilo ballet rosa palo con tiras cruzadas sobre el empeine abierto y pierna slouch acanalada', descEs: 'Un calcetín inspirado en las balerinas, con tiras cruzadas, pierna slouch y nuestro logo soft steps. en la suela.' }
  ];
  const BY_ID = {};
  CATALOG.forEach((p) => { BY_ID[p.id] = p; });

  const BUNDLES = [
    { id: 'b-neutrals', nameKey: 'bNeutrals', ids: ['ivory-slouch', 'mocha-slouch', 'cocoa-crew'], price: 60 },
    { id: 'b-blush', nameKey: 'bBlush', ids: ['blush-slouch', 'rose-crew', 'logo-crew'], price: 60 },
    { id: 'b-ruffle', nameKey: 'bRuffle', ids: ['ruffle-sky', 'ruffle-peach', 'ruffle-blue'], price: 60 },
    { id: 'b-week', nameKey: 'bWeek', ids: ['blush-slouch', 'ivory-crew', 'ruffle-cocoa', 'mocha-slouch', 'ruffle-sky'], price: 90 }
  ];

  const SIZES = ['S', 'M', 'L'];
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ---------- state ----------
  const state = {
    lang: 'en', fType: [], fColor: [], fSize: null, filterOpen: false,
    viewing: null, viewPhoto: 0, cart: {}, cartOpen: false, justAdded: null,
    sizes: {}, sizeErr: null,
    pRole: 'studio', pName: '', pEmail: '', pHandle: '', pErr: false, pDone: false,
    promo: 'closed', promoStep: 'form', email: '', emailError: false
  };
  let t = {};
  let addedTimer = null;
  let promoTimer = null;

  // ---------- helpers ----------
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  const L = () => (state.lang === 'es' ? 1 : 0);

  function buildT() {
    t = {};
    Object.keys(D).forEach((k) => { t[k] = D[k][L()]; });
  }

  // 1 pair $22, any 3 for $60, any 5 for $90
  function price(n) {
    const fives = Math.floor(n / 5);
    const rest = n - fives * 5;
    const threes = Math.floor(rest / 3);
    const singles = rest - threes * 3;
    return fives * 90 + threes * 60 + singles * 22;
  }

  function cartCount() {
    return Object.keys(state.cart).reduce((s, k) => s + state.cart[k], 0);
  }

  function dealHint() {
    const count = cartCount();
    if (count === 0) return t.hint0;
    if (count < 3) return t.hintAdd + (3 - count) + t.hint3;
    if (count < 5) return t.hintAdd + (5 - count) + t.hint5;
    return t.hintDone;
  }

  function setQty(key, q) {
    if (q <= 0) delete state.cart[key]; else state.cart[key] = q;
  }

  function flashAdded(id) {
    state.justAdded = id;
    clearTimeout(addedTimer);
    addedTimer = setTimeout(() => { state.justAdded = null; render(); }, 1400);
  }

  function matches(p) {
    return (!state.fType.length || state.fType.indexOf(p.cat) >= 0) &&
      (!state.fColor.length || p.colors.some((c) => state.fColor.indexOf(c) >= 0));
  }
  const shownProducts = () => CATALOG.filter(matches);
  const activeFilters = () => state.fType.length + state.fColor.length + (state.fSize ? 1 : 0);
  const chosenSize = (id) => state.sizes[id] || state.fSize || null;
  const alt = (p) => (L() && p.altEs ? p.altEs : p.alt);
  const desc = (p) => (L() && p.descEs ? p.descEs : p.desc);

  const closeIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  const bowIcon = '<svg width="16" height="10" viewBox="0 0 32 20" fill="none" stroke="#A35C6B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 10c-3-5-9-8-12-6s-1 9 5 8l7-2z"/><path d="M16 10c3-5 9-8 12-6s1 9-5 8l-7-2z"/><circle cx="16" cy="10" r="1.6"/></svg>';

  function sizeButtons(ownerId) {
    const chosen = chosenSize(ownerId);
    const names = { S: t.small, M: t.medium, L: t.large };
    return '<div class="sizes" role="group" aria-label="' + esc(t.sizeAria) + '">' +
      SIZES.map((z) => '<button type="button" class="size' + (chosen === z ? ' on' : '') + '" data-action="pick-size" data-id="' + ownerId + '" data-size="' + z + '" aria-label="' + esc(names[z]) + '" aria-pressed="' + (chosen === z) + '" data-key="size-' + ownerId + '-' + z + '">' + z + '</button>').join('') +
      '</div>' +
      (state.sizeErr === ownerId ? '<span class="err" role="alert">' + esc(t.chooseSize) + '</span>' : '');
  }

  function addButton(id, label, cls) {
    const added = state.justAdded === id;
    return '<button type="button" class="btn-outline' + (added ? ' on' : '') + (cls ? ' ' + cls : '') + '" data-action="add" data-id="' + id + '" data-key="add-' + id + '">' + esc(added ? t.added : label) + '</button>';
  }

  // ---------- static copy ----------
  function applyStatic() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll('[data-t]').forEach((el) => { el.textContent = t[el.getAttribute('data-t')]; });
    document.querySelectorAll('[data-t-aria]').forEach((el) => { el.setAttribute('aria-label', t[el.getAttribute('data-t-aria')]); });
    document.querySelectorAll('[data-t-alt]').forEach((el) => { el.setAttribute('alt', t[el.getAttribute('data-t-alt')]); });
    $('#lang-label').textContent = L() ? 'EN' : 'ES';
    $('#lang-btn').setAttribute('aria-label', L() ? 'Switch to English' : 'Cambiar a español');

    const item = '<span class="ribbon-item"><span>' + esc(t.m3) + '</span>' + bowIcon + '<span>' + esc(t.m5) + '</span>' + bowIcon + '<span>' + esc(t.mMix) + '</span>' + bowIcon + '</span>';
    const set = '<div class="ribbon-set">' + item + item + item + item + '</div>';
    const ribbon = $('#ribbon');
    ribbon.setAttribute('aria-label', t.mAria);
    ribbon.setAttribute('role', 'note');
    ribbon.innerHTML = '<div class="ribbon-track" aria-hidden="true">' + set + set + '</div>';
  }

  // ---------- dynamic regions ----------
  function renderShop() {
    const products = shownProducts();
    const n = activeFilters();
    let h = '<div class="shop-bar">' +
      '<button type="button" class="btn-outline filter-btn' + (n ? ' on' : '') + '" data-action="open-filter" aria-label="' + esc(t.filterAria) + '" data-key="open-filter">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>' +
      '<span>' + esc(t.filter + (n ? ' (' + n + ')' : '')) + '</span></button>' +
      '<div class="showing"><span>' + esc(t.showing + products.length + t.of + CATALOG.length) + '</span>' +
      (n ? '<button type="button" class="link-btn" data-action="clear-filters" data-key="clear-top">' + esc(t.clearAll) + '</button>' : '') +
      '</div></div>' +
      '<div class="deal-hint" aria-live="polite">' + esc(dealHint()) + '</div>';
    if (!products.length) {
      h += '<div class="no-results"><span>' + esc(t.noMatch) + '</span><button type="button" class="btn-outline" data-action="clear-filters" data-key="clear-empty">' + esc(t.clearAll) + '</button></div>';
    }
    h += '<div class="products">' + products.map((p) =>
      '<article class="card">' +
      '<button type="button" class="card-img" data-action="view" data-id="' + p.id + '" aria-label="' + esc(t.viewLarger + ' ' + p.name) + '" data-key="view-' + p.id + '"><img src="' + p.img + '" alt="' + esc(alt(p)) + '" loading="lazy"></button>' +
      '<h3>' + esc(p.name) + '</h3><span class="price">$22</span>' +
      sizeButtons(p.id) + addButton(p.id, t.addBag) +
      '</article>').join('') + '</div>';
    $('#shop-dynamic').innerHTML = h;
  }

  function renderBundles() {
    const shortName = (id) => BY_ID[id].name.replace('Bow ', '').replace('Ruffle · ', 'Ruffle ');
    $('#bundles').innerHTML = BUNDLES.map((b) =>
      '<article class="bundle">' +
      '<div class="bundle-imgs">' + b.ids.slice(0, 3).map((id) => '<img src="' + BY_ID[id].img + '" alt="' + esc(alt(BY_ID[id])) + '" loading="lazy">').join('') + '</div>' +
      '<h4>' + esc(t[b.nameKey]) + '</h4>' +
      '<span class="bundle-items">' + esc((b.ids.length === 5 ? t.fivePairs : '') + b.ids.map(shortName).join(', ')) + '</span>' +
      '<span class="bundle-price"><b>$' + b.price + '</b> <s>$' + (b.ids.length * 22) + '</s></span>' +
      sizeButtons(b.id) + addButton(b.id, t.addBundle) +
      '</article>').join('');
  }

  function renderPartner() {
    const box = $('#partner-box');
    if (state.pDone) {
      const first = (state.pName || '').trim().split(' ')[0];
      box.innerHTML = '<div class="done"><h3 class="serif">' + esc(t.thanks) + '<em>' + esc(first) + '</em></h3>' +
        '<p class="muted">' + esc(t.touch1) + ' ' + esc(state.pEmail) + esc(t.touch2) + '</p></div>';
      return;
    }
    const roles = [['studio', t.roleStudio], ['instructor', t.roleInstr]];
    box.innerHTML = '<div class="form">' +
      '<div class="roles" role="group" aria-label="' + esc(t.iAmA) + '">' +
      roles.map((r) => '<button type="button" class="chip' + (state.pRole === r[0] ? ' on' : '') + '" data-action="pick-role" data-role="' + r[0] + '" aria-pressed="' + (state.pRole === r[0]) + '" data-key="role-' + r[0] + '">' + esc(r[1]) + '</button>').join('') +
      '</div>' +
      '<label class="field-label" for="pt-name">' + esc(t.yourName) + '</label>' +
      '<input class="input" id="pt-name" type="text" autocomplete="name" data-field="pName" value="' + esc(state.pName) + '">' +
      '<label class="field-label" for="pt-email">' + esc(t.email) + '</label>' +
      '<input class="input" id="pt-email" type="email" autocomplete="email" data-field="pEmail" value="' + esc(state.pEmail) + '">' +
      '<label class="field-label" for="pt-handle">' + esc(state.pRole === 'studio' ? t.handleStudio : t.handleInstr) + '</label>' +
      '<input class="input" id="pt-handle" type="text" data-field="pHandle" value="' + esc(state.pHandle) + '">' +
      (state.pErr ? '<span class="form-err" id="p-err" role="alert">' + esc(t.pErrMsg) + '</span>' : '') +
      '<button type="button" class="pill pill-dark" data-action="submit-partner" data-key="submit-partner" style="margin-top:4px;min-height:52px">' + esc(t.apply) + '</button>' +
      '</div>';
  }

  function renderPromoTab() {
    const show = state.promo !== 'open' && state.promoStep === 'form';
    $('#promo-tab').innerHTML = show ? '<button type="button" class="promo-tab" data-action="open-promo" data-key="promo-tab">' + esc(t.off15) + '</button>' : '';
  }

  function promoHTML() {
    let body;
    if (state.promoStep === 'form') {
      body = '<span class="label">' + esc(t.welcome) + '</span>' +
        '<h2 class="serif" id="promo-title">' + esc(t.off15) + ' <em>' + esc(t.popB) + '</em></h2>' +
        '<p class="muted">' + esc(t.popP) + '</p>' +
        '<label class="field-label" for="promo-email">' + esc(t.email) + '</label>' +
        '<input class="input" id="promo-email" type="email" autocomplete="email" data-field="email" placeholder="' + esc(t.emailPh) + '" value="' + esc(state.email) + '">' +
        (state.emailError ? '<span class="form-err" id="e-err" role="alert">' + esc(t.emailErr) + '</span>' : '') +
        '<button type="button" class="pill pill-dark" data-action="submit-email" data-key="submit-email">' + esc(t.getOff) + '</button>' +
        '<button type="button" class="link-btn muted" data-action="close-promo" data-key="no-thanks">' + esc(t.noThanks) + '</button>';
    } else {
      body = '<span class="label">' + esc(t.almost) + '</span>' +
        '<h2 class="serif sm" id="promo-title">' + esc(t.checkA) + '<em>' + esc(t.checkB) + '</em></h2>' +
        '<p class="muted">' + esc(t.sent1) + '<strong>' + esc(state.email) + '</strong>' + esc(t.sent2) + '</p>' +
        '<button type="button" class="pill pill-dark" data-action="close-promo" data-key="keep-shopping" style="margin-top:6px">' + esc(t.keepShopping) + '</button>';
    }
    return '<div class="overlay center z-promo" role="dialog" aria-modal="true" aria-labelledby="promo-title">' +
      '<button type="button" class="scrim dark" tabindex="-1" aria-label="' + esc(t.closeOffer) + '" data-action="close-promo"></button>' +
      '<div class="popup"><img src="images/bow-crew-rose-sole.jpg" alt="">' +
      '<button type="button" class="icon-btn close" aria-label="' + esc(t.closeOffer) + '" data-action="close-promo" data-key="promo-x">' + closeIcon + '</button>' +
      '<div class="popup-body">' + body + '</div></div></div>';
  }

  function filterHTML() {
    const chip = (group, value, label, on, swatch) =>
      '<button type="button" class="chip' + (on ? ' on' : '') + '" data-action="toggle-filter" data-group="' + group + '" data-value="' + value + '" aria-pressed="' + on + '" data-key="f-' + group + '-' + value + '">' +
      (swatch ? '<span class="swatch" aria-hidden="true" style="background:' + swatch + '"></span>' : '') + '<span>' + esc(label) + '</span></button>';
    const types = [['slouch', t.tabSlouch], ['crew', t.tabCrew], ['ruffle', t.tabRuffle], ['ballet', t.tabBallet]];
    const colors = [['pink', t.cPink, '#F2B8C2'], ['white', t.cWhite, '#FBF6EF'], ['brown', t.cBrown, '#6B4A3A'], ['blue', t.cBlue, '#B9D3EE'], ['peach', t.cPeach, '#F8C39B'], ['red', t.cRed, '#8E1B2C']];
    const sizes = [['S', t.small], ['M', t.medium], ['L', t.large]];
    const n = shownProducts().length;
    return '<div class="overlay z-filter" role="dialog" aria-modal="true" aria-labelledby="filter-title">' +
      '<button type="button" class="scrim" tabindex="-1" aria-label="' + esc(t.closeFilter) + '" data-action="close-filter"></button>' +
      '<aside class="drawer left">' +
      '<div class="drawer-head"><h2 class="serif" id="filter-title"><em>' + esc(t.filterTitle) + '</em></h2>' +
      '<button type="button" class="icon-btn" aria-label="' + esc(t.closeFilter) + '" data-action="close-filter" data-key="filter-x">' + closeIcon + '</button></div>' +
      '<div class="drawer-body">' +
      '<div class="fgroup" role="group" aria-label="' + esc(t.fType) + '"><span class="fgroup-title">' + esc(t.fType) + '</span><div class="chips">' +
      types.map((o) => chip('fType', o[0], o[1], state.fType.indexOf(o[0]) >= 0)).join('') + '</div></div>' +
      '<div class="fgroup" role="group" aria-label="' + esc(t.fColor) + '"><span class="fgroup-title">' + esc(t.fColor) + '</span><div class="chips">' +
      colors.map((o) => chip('fColor', o[0], o[1], state.fColor.indexOf(o[0]) >= 0, o[2])).join('') + '</div></div>' +
      '<div class="fgroup" role="group" aria-label="' + esc(t.fSize) + '"><span class="fgroup-title">' + esc(t.fSize) + '</span><div class="chips">' +
      sizes.map((o) => chip('fSize', o[0], o[1], state.fSize === o[0])).join('') + '</div></div>' +
      '<span class="size-note">' + esc(t.sizeNote) + '</span>' +
      '</div>' +
      '<div class="drawer-foot">' +
      '<button type="button" class="btn-outline" data-action="clear-filters" data-key="clear-panel">' + esc(t.clearAll) + '</button>' +
      '<button type="button" class="pill pill-dark" data-action="close-filter" data-key="show-n">' + esc(t.showN + n + (n === 1 ? t.sockWord : t.socksWord)) + '</button>' +
      '</div></aside></div>';
  }

  function viewerHTML() {
    const p = BY_ID[state.viewing];
    const onSole = !!(p.sole && state.viewPhoto === 1);
    const src = onSole ? p.sole : p.img;
    const a = onSole ? t.soleAlt + p.name : alt(p);
    const chev = (d) => '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>';
    let h = '<div class="overlay center z-viewer" role="dialog" aria-modal="true" aria-labelledby="viewer-title">' +
      '<button type="button" class="scrim dark" tabindex="-1" aria-label="' + esc(t.closePhoto) + '" data-action="close-view"></button>' +
      '<div class="viewer"><div class="viewer-photo">' +
      '<img src="' + src + '" alt="' + esc(a) + '">' +
      '<button type="button" class="icon-btn close" aria-label="' + esc(t.closePhoto) + '" data-action="close-view" data-key="view-x">' + closeIcon + '</button>';
    if (p.sole) {
      h += '<button type="button" class="icon-btn prev" aria-label="' + esc(t.prevPhoto) + '" data-action="flip-photo" data-key="view-prev">' + chev('M15 6l-6 6 6 6') + '</button>' +
        '<button type="button" class="icon-btn next" aria-label="' + esc(t.nextPhoto) + '" data-action="flip-photo" data-key="view-next">' + chev('M9 6l6 6-6 6') + '</button>';
    }
    h += '</div>';
    if (p.sole) {
      h += '<div class="thumbs" role="group" aria-label="' + esc(t.photosAria) + '">' +
        [[0, t.front, p.img], [1, t.soleWord, p.sole]].map((o) =>
          '<button type="button" class="thumb' + (state.viewPhoto === o[0] ? ' on' : '') + '" data-action="pick-photo" data-photo="' + o[0] + '" aria-label="' + esc(o[1]) + '" aria-pressed="' + (state.viewPhoto === o[0]) + '" data-key="thumb-' + o[0] + '">' +
          '<img src="' + o[2] + '" alt=""><span>' + esc(o[1]) + '</span></button>').join('') + '</div>';
    }
    h += '<div class="viewer-info"><h2 class="serif" id="viewer-title">' + esc(p.name) + '</h2>' +
      '<span class="muted small14">' + esc(t.viewerPrice) + '</span>' +
      '<p class="muted">' + esc(desc(p)) + '</p></div>' +
      sizeButtons(p.id) + addButton(p.id, t.addBag) +
      '</div></div>';
    return h;
  }

  function cartHTML() {
    const count = cartCount();
    const regular = count * 22;
    const total = price(count);
    const names = { S: t.small, M: t.medium, L: t.large };
    let lines = '';
    CATALOG.forEach((p) => SIZES.forEach((z) => {
      const key = p.id + '|' + z;
      if (!state.cart[key]) return;
      lines += '<div class="line"><img src="' + p.img + '" alt="">' +
        '<div class="line-info"><span class="line-name">' + esc(p.name) + '</span>' +
        '<span class="line-size">' + esc(t.sizeWord + names[z]) + '</span>' +
        '<div class="qty"><button type="button" aria-label="' + esc(t.removeOne + ': ' + p.name) + '" data-action="dec" data-line="' + key + '" data-key="dec-' + key + '">−</button>' +
        '<span>' + state.cart[key] + '</span>' +
        '<button type="button" aria-label="' + esc(t.addOne + ': ' + p.name) + '" data-action="inc" data-line="' + key + '" data-key="inc-' + key + '">+</button></div>' +
        '</div></div>';
    }));
    return '<div class="overlay z-bag" role="dialog" aria-modal="true" aria-labelledby="bag-title">' +
      '<button type="button" class="scrim" tabindex="-1" aria-label="' + esc(t.closeBag) + '" data-action="close-cart"></button>' +
      '<aside class="drawer right">' +
      '<div class="drawer-head"><h2 class="serif" id="bag-title">' + esc(t.yourA) + '<em>' + esc(t.yourB) + '</em></h2>' +
      '<button type="button" class="icon-btn" aria-label="' + esc(t.closeBag) + '" data-action="close-cart" data-key="bag-x">' + closeIcon + '</button></div>' +
      '<div class="drawer-body">' + (count === 0 ? '<p class="empty">' + esc(t.empty) + '</p>' : lines) + '</div>' +
      '<div class="drawer-foot">' +
      '<div class="bag-hint">' + esc(dealHint()) + '</div>' +
      '<div class="sum"><span>' + esc(t.regular) + '</span><span>$' + regular + '</span></div>' +
      '<div class="sum save"><span>' + esc(t.bundleSavings) + '</span><span>−$' + (regular - total) + '</span></div>' +
      '<div class="sum total"><span>' + esc(t.total) + '</span><span>$' + total + '</span></div>' +
      '<button type="button" class="pill pill-dark" data-action="checkout" data-key="checkout">' + esc(t.checkout) + '</button>' +
      '</div></aside></div>';
  }

  function renderOverlays() {
    let h = '';
    if (state.cartOpen) h += cartHTML();
    if (state.filterOpen) h += filterHTML();
    if (state.viewing && BY_ID[state.viewing]) h += viewerHTML();
    if (state.promo === 'open') h += promoHTML();
    $('#overlays').innerHTML = h;
    document.body.classList.toggle('locked', !!h);
  }

  function render() {
    const active = document.activeElement;
    const key = active && active.getAttribute && active.getAttribute('data-key');
    const fieldId = active && active.tagName === 'INPUT' ? active.id : null;
    const hadOverlay = !!$('#overlays').innerHTML;

    $('#bag-label').textContent = t.bag + ' (' + cartCount() + ')';
    renderShop();
    renderBundles();
    renderPartner();
    renderPromoTab();
    renderOverlays();

    // keep keyboard focus where it was after a redraw
    let target = null;
    if (key) target = document.querySelector('[data-key="' + key + '"]');
    else if (fieldId) target = document.getElementById(fieldId);
    if (target) { target.focus({ preventScroll: true }); return; }
    // move focus into a newly opened panel
    const dialogs = document.querySelectorAll('#overlays [role="dialog"]');
    if (dialogs.length && !hadOverlay) {
      const first = dialogs[dialogs.length - 1].querySelector('[data-key]');
      if (first) first.focus({ preventScroll: true });
    }
  }

  // ---------- actions ----------
  function addItem(id) {
    const z = chosenSize(id);
    if (!z) { state.sizeErr = id; return; }
    state.sizeErr = null;
    const bundle = BUNDLES.find((b) => b.id === id);
    const ids = bundle ? bundle.ids : [id];
    ids.forEach((pid) => { const k = pid + '|' + z; setQty(k, (state.cart[k] || 0) + 1); });
    flashAdded(id);
  }

  let lastOpener = null;

  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const a = el.getAttribute('data-action');
    const id = el.getAttribute('data-id');
    if (/^open-|^view$/.test(a)) lastOpener = el.getAttribute('data-key');

    switch (a) {
      case 'toggle-lang': state.lang = L() ? 'en' : 'es'; buildT(); applyStatic(); break;
      case 'open-cart': state.cartOpen = true; break;
      case 'close-cart': state.cartOpen = false; break;
      case 'open-filter': state.filterOpen = true; break;
      case 'close-filter': state.filterOpen = false; break;
      case 'clear-filters': state.fType = []; state.fColor = []; state.fSize = null; break;
      case 'shop-ruffles': state.fType = ['ruffle']; state.fColor = []; break;
      case 'toggle-filter': {
        const g = el.getAttribute('data-group');
        const v = el.getAttribute('data-value');
        if (g === 'fSize') state.fSize = state.fSize === v ? null : v;
        else state[g] = state[g].indexOf(v) >= 0 ? state[g].filter((x) => x !== v) : state[g].concat([v]);
        break;
      }
      case 'pick-size': state.sizes[id] = el.getAttribute('data-size'); state.sizeErr = null; break;
      case 'add': addItem(id); break;
      case 'view': state.viewing = id; state.viewPhoto = 0; break;
      case 'close-view': state.viewing = null; break;
      case 'flip-photo': state.viewPhoto = state.viewPhoto ? 0 : 1; break;
      case 'pick-photo': state.viewPhoto = Number(el.getAttribute('data-photo')); break;
      case 'inc': { const k = el.getAttribute('data-line'); setQty(k, state.cart[k] + 1); break; }
      case 'dec': { const k = el.getAttribute('data-line'); setQty(k, state.cart[k] - 1); break; }
      case 'pick-role': state.pRole = el.getAttribute('data-role'); break;
      case 'submit-partner': {
        const ok = state.pName.trim() && EMAIL_RE.test(state.pEmail.trim());
        if (!ok) { state.pErr = true; break; }
        // TODO: send the application somewhere (e.g. Formspree, Netlify Forms, or your email tool)
        state.pDone = true;
        break;
      }
      case 'open-promo': state.promo = 'open'; break;
      case 'close-promo': clearTimeout(promoTimer); state.promo = 'closed'; break;
      case 'submit-email': {
        if (!EMAIL_RE.test(state.email.trim())) { state.emailError = true; break; }
        // TODO: connect to your email list (e.g. Klaviyo, Mailchimp, Shopify)
        state.email = state.email.trim();
        state.promoStep = 'done';
        break;
      }
      case 'checkout':
        // TODO: connect checkout (e.g. Shopify Buy Button, Stripe Payment Links)
        return;
      default: return;
    }
    render();
    // after closing a panel, send focus back to the button that opened it
    if (/^close-/.test(a) && lastOpener && !$('#overlays').innerHTML) {
      const back = document.querySelector('[data-key="' + lastOpener + '"]');
      if (back) back.focus({ preventScroll: true });
    }
  });

  // typing in forms updates state without redrawing
  document.addEventListener('input', (e) => {
    const f = e.target.getAttribute && e.target.getAttribute('data-field');
    if (!f) return;
    state[f] = e.target.value;
    if (f === 'pName' || f === 'pEmail') {
      if (state.pErr) { state.pErr = false; const x = $('#p-err'); if (x) x.remove(); }
    }
    if (f === 'email' && state.emailError) { state.emailError = false; const x = $('#e-err'); if (x) x.remove(); }
  });

  // Enter submits the email popup
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.id === 'promo-email') {
      e.preventDefault();
      const btn = document.querySelector('[data-action="submit-email"]');
      if (btn) btn.click();
    }
    if (e.key === 'Escape') {
      let closeAction = null;
      if (state.promo === 'open') closeAction = 'close-promo';
      else if (state.viewing) closeAction = 'close-view';
      else if (state.filterOpen) closeAction = 'close-filter';
      else if (state.cartOpen) closeAction = 'close-cart';
      if (closeAction) {
        const btn = document.querySelector('#overlays [data-action="' + closeAction + '"]');
        if (btn) btn.click();
      }
    }
  });

  // ---------- start ----------
  buildT();
  applyStatic();
  render();
  promoTimer = setTimeout(() => {
    if (state.promoStep === 'form' && state.promo !== 'open') { state.promo = 'open'; render(); }
  }, 2500);
})();
