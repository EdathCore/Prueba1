// ✅ Tienda de Objetos: Mejores y Edificios
// Objetos comunes (comprables múltiples veces)
const SHOP_OBJECTS = [
  {
    id: "webShooter",
    name: "Lanzatelarañas",
    icon: "🕸️",
    baseCost: 15,
    basePps: 1,
    description: "Tus lanzatelarañas automáticos generan telarañas por ti.",
    type: "repeatable"
  },
  {
    id: "auntMay",
    name: "Tía May",
    icon: "👵",
    baseCost: 100,
    basePps: 8,
    description: "Tía May te hornea galletas... ¡de telaraña!",
    type: "repeatable"
  },
  {
    id: "uncleBen",
    name: "Tío Ben",
    icon: "👴",
    baseCost: 500,
    basePps: 20,
    description: "Un gran poder conlleva una gran responsabilidad.",
    type: "repeatable"
  },
  {
    id: "mj",
    name: "MJ",
    icon: "❤️",
    baseCost: 20000,
    basePps: 2000,
    description: "MJ te inspira a ser mejor Spider-Man.",
    type: "repeatable"
  },
  {
    id: "gwen",
    name: "Gwen Stacy",
    icon: "🎓",
    baseCost: 22000,
    basePps: 2200,
    description: "Gwen te ayuda con tus estudios... y tu corazón.",
    type: "repeatable"
  },
  {
    id: "miles",
    name: "Miles Morales",
    icon: "🕷️",
    baseCost: 8000,
    basePps: 600,
    description: "¡Miles ayuda a patrullar la ciudad!",
    type: "repeatable"
  },
  {
    id: "blackCat",
    name: "Felicia Hardy",
    icon: "🐾",
    baseCost: 25000,
    basePps: 2400,
    description: "Felicia \"Black Cat\" coquetea... y roba telarañas extra.",
    type: "repeatable"
  },
  {
    id: "otto",
    name: "Otto Octavius",
    icon: "🧠",
    baseCost: 30000,
    basePps: 2500,
    description: "¡Doc Ock crea máquinas de telaraña (sin querer)!",
    type: "repeatable"
  },
  {
    id: "greenGoblin",
    name: "Duende Verde",
    icon: "🎃",
    baseCost: 50000,
    basePps: 4000,
    description: "¡Te regalo una bomba de calabaza!",
    type: "repeatable"
  },
  {
    id: "eddie",
    name: "Eddie Brock",
    icon: "🕸️",
    baseCost: 85000,
    basePps: 5000,
    description: "Nosotros somos Venom... y queremos telarañas.",
    type: "repeatable"
  },
  {
    id: "harry",
    name: "Harry Osborn",
    icon: "🧪",
    baseCost: 120000,
    basePps: 0,
    description: "Harry activa un bono de +5 por clic durante 5 segundos.",
    type: "special"
  }
];

// Objetos únicos (solo se compran una vez)
const PERMANENT_BUILDINGS = [
  {
    id: "mayHouse",
    name: "Casa de la Tía May",
    icon: "🏠",
    cost: 10000,
    description: "El hogar donde Peter aprendió responsabilidad.",
    effect: (gameState) => gameState.pointsPerClick += 1
  },
  {
    id: "dailyBugle",
    name: "Daily Bugle",
    icon: "📰",
    cost: 40000,
    description: "Publican tus hazañas. ¡Más fama, más recursos!",
    effect: (gameState) => gameState.pointsPerClick += 5
  },
  {
    id: "midtown",
    name: "Midtown High School",
    icon: "🏫",
    cost: 70000,
    description: "La escuela que lo vio crecer... y balancearse.",
    effect: (gameState) => gameState.pointsPerClick += 5
  },
  {
    id: "oscorp",
    name: "Oscorp",
    icon: "🧪",
    cost: 90000,
    description: "Tecnología para multiplicar tu eficiencia.",
    effect: (gameState) => gameState.pointsPerClick += 10
  },
  {
    id: "avengers",
    name: "Avenger Tower",
    icon: "🏢",
    cost: 500000,
    description: "Recibes ayuda de los Vengadores.",
    effect: (gameState) => gameState.pointsPerClick += 50
  },
  {
    id: "starkIndustries",
    name: "Stark Industries",
    icon: "🧠",
    cost: 1000000,
    description: "Inteligencia y recursos ilimitados.",
    effect: (gameState) => gameState.pointsPerClick += 100
  },
  {
    id: "dimensionalPortal",
    name: "Portal Dimensional",
    icon: "🌌",
    cost: 2000000,
    description: "Accede al multiverso y recluta Spider-Mans.",
    effect: (gameState) => gameState.dimensionalPortalUnlocked = true
  }
];

// Héroes reclutables
const RECRUITABLE_HEROES = [
  {
    id: "scarletSpider",
    name: "Scarlet Spider (Ben Reilly)",
    icon: "🩸",
    cost: 2200000,
    description: "Ben Reilly se une desde los clones del pasado."
  },
  {
    id: "superiorSpider",
    name: "Superior Spider-Man (Otto)",
    icon: "👓",
    cost: 2400000,
    description: "Otto Octavius toma el control... de forma superior."
  },
  {
    id: "spiderHam",
    name: "Spider-Ham (Peter Porker)",
    icon: "🐷",
    cost: 2600000,
    description: "Desde los cómics más absurdos... ¡Peter Porker!"
  },
  {
    id: "killerSpider",
    name: "Spider-Man Asesino",
    icon: "🔪",
    cost: 2700000,
    description: "El Spider-Man que cruzó la línea definitiva."
  },
  {
    id: "spiderNoir",
    name: "Spider-Noir",
    icon: "🕵️",
    cost: 2750000,
    description: "Investiga las sombras del multiverso."
  },
  {
    id: "spiderPunk",
    name: "Spider-Punk",
    icon: "🎸",
    cost: 3000000,
    description: "Rompe las reglas dimensionales con poder punk."
  },
  {
    id: "spiderGwen",
    name: "Spider-Gwen",
    icon: "🎧",
    cost: 3200000,
    description: "Gwen patrulla con estilo desde su universo."
  },
  {
    id: "peniParker",
    name: "Peni Parker",
    icon: "🤖",
    cost: 3250000,
    description: "Peni y su robot SP//dr se unen al escuadrón."
  },
  {
    id: "spider2099",
    name: "Spider-Man 2099",
    icon: "🔵",
    cost: 4000000,
    description: "Miguel O'Hara mejora la tecnología dimensional."
  },
  {
    id: "ps4Peter",
    name: "Spider-Man (PS4)",
    icon: "🎮",
    cost: 4500000,
    description: "Peter Parker de la era PS4, más fuerte y más rápido."
  },
  {
    id: "silk",
    name: "Cindy Moon/Silk",
    icon: "🕸️",
    cost: 5200000,
    description: "La arácnida más poderosa de Nueva York, maestra en el sigilo y el combate."
  },
  {
    id: "andrew",
    name: "Andrew Garfield",
    icon: "🎭",
    cost: 6500000,
    description: "El spider-man más emotivo y dramático."
  },
  {
    id: "tobeyPeter",
    name: "Peter (Tobey Maguire)",
    icon: "🕶️",
    cost: 7000000,
    description: "Peter clásico se lanza a balancearse."
  },
  {
    id: "tomPeter",
    name: "Peter (Tom Holland)",
    icon: "🌆",
    cost: 8000000,
    description: "Nuestro vecino amigable entra al multiverso."
  },
  {
    id: "spider2211",
    name: "Spider-Man 2211",
    icon: "🛰️",
    cost: 9000000,
    description: "Spider-Man del futuro llega con tecnodrones."
  },
  {
    id: "captainUniverse",
    name: "Capitán Universo (Peter Parker)",
    icon: "🌌",
    cost: 10000000,
    description: "El casi dios Peter activa el Enigma Force."
  }
];

// Estado del juego
let gameState = {
  score: 0,
  pointsPerClick: 1,
  shopObjects: SHOP_OBJECTS.map((obj) => ({ ...obj, owned: 0, cost: obj.baseCost })),
  permanentBuildings: PERMANENT_BUILDINGS.map((b) => ({ ...b, purchased: false })),
  dimensionalPortalUnlocked: false,
  recruitableHeroesState: RECRUITABLE_HEROES.reduce((acc, hero) => {
    acc[hero.id] = { count: 0, currentCost: hero.cost };
    return acc;
  }, {}),
};

// DOM Elements
const scoreDisplay = document.getElementById("score");
const pointsPerSecondDisplay = document.getElementById("pointsPerSecond");
const clickButton = document.getElementById("clickButton");
const shopList = document.getElementById("shopList");
const buildingsRows = document.getElementById("buildingsRows");
const comicEffectContainer = document.getElementById("comicEffectContainer");

// Calcular puntos por segundo
function getTotalPPS() {
  const basePps = gameState.shopObjects.reduce((sum, obj) => sum + obj.basePps * obj.owned, 0);
  const heroPps = Object.values(gameState.recruitableHeroesState).reduce((sum, hero) => sum + hero.count * 500, 0);
  return basePps + heroPps;
}

// Actualizar display
function updateDisplay() {
  scoreDisplay.textContent = Math.floor(gameState.score);
  pointsPerSecondDisplay.textContent = getTotalPPS();
  updateShopButtons(); // Actualizar solo los botones de la tienda
}

// Actualizar solo los botones de la tienda
function updateShopButtons() {
  // Actualizar botones de objetos y edificios
  document.querySelectorAll(".shop-item-btn").forEach((btn) => {
    const type = btn.dataset.type;
    const idx = parseInt(btn.dataset.idx, 10);
    let isLocked = false;
    if (type === "object") {
      isLocked = gameState.score < gameState.shopObjects[idx].cost;
    } else if (type === "building") {
      isLocked = gameState.score < gameState.permanentBuildings[idx].cost || gameState.permanentBuildings[idx].purchased;
    }
    btn.disabled = isLocked;
  });

  // Actualizar botones de héroes reclutables
  document.querySelectorAll(".recruit-hero-btn").forEach((btn) => {
    const heroId = btn.dataset.heroId;
    const heroState = gameState.recruitableHeroesState[heroId];
    btn.disabled = gameState.score < heroState.currentCost;
  });
}

// Renderizar tienda
function renderShop() {
  shopList.innerHTML = "";

  // Renderizar objetos repetibles
  shopList.innerHTML += "<h3 class='shop-section-title'>Objetos de la Tienda</h3>";
  SHOP_OBJECTS.forEach((obj, index) => {
    const item = document.createElement("div");
    item.className = "shop-item" + (gameState.score < gameState.shopObjects[index].cost ? " locked" : "");
    item.innerHTML = `
      <div class="shop-item-icon">${obj.icon}</div>
      <div class="shop-item-info">
        <div class="shop-item-title">${obj.name}</div>
        <div class="shop-item-cost">Costo: <span>${gameState.shopObjects[index].cost}</span></div>
        <div class="shop-item-owned">Poseídos: ${gameState.shopObjects[index].owned}</div>
        <div class="shop-item-desc">${obj.description}</div>
      </div>
      <button class="shop-item-btn" data-type="object" data-idx="${index}">Comprar</button>
    `;
    shopList.appendChild(item);
  });

  // Renderizar edificios permanentes
  shopList.innerHTML += "<h3 class='shop-section-title'>Edificios</h3>";
  PERMANENT_BUILDINGS.forEach((building, index) => {
    const item = document.createElement("div");
    item.className = "shop-item" + (gameState.score < building.cost ? " locked" : "");
    item.innerHTML = `
      <div class="shop-item-icon">${building.icon}</div>
      <div class="shop-item-info">
        <div class="shop-item-title">${building.name}</div>
        <div class="shop-item-cost">Costo: <span>${building.cost}</span></div>
        <div class="shop-item-desc">${building.description}</div>
      </div>
      <button class="shop-item-btn" data-type="building" data-idx="${index}">${gameState.permanentBuildings[index].purchased ? "Comprado" : "Comprar"}</button>
    `;
    shopList.appendChild(item);
  });

  // Renderizar Héroes Reclutables
  shopList.innerHTML += "<h3 class='shop-section-title'>Spider-Héroes</h3>";
  RECRUITABLE_HEROES.forEach(hero => {
    const heroState = gameState.recruitableHeroesState[hero.id];
    const item = document.createElement("div");
    item.className = "shop-item" + (gameState.score < heroState.currentCost ? " locked" : "");
    item.innerHTML = `
      <div class="shop-item-icon">${hero.icon}</div>
      <div class="shop-item-info">
        <div class="shop-item-title">${hero.name} (Nivel: ${heroState.count})</div>
        <div class="shop-item-cost">Costo: <span>${heroState.currentCost}</span></div>
        <div class="shop-item-desc">${hero.description}</div>
      </div>
      <button class="shop-item-btn recruit-hero-btn" data-hero-id="${hero.id}">Reclutar</button>
    `;
    shopList.appendChild(item);
  });

  // Actualizar botones de la tienda
  document.querySelectorAll(".shop-item-btn").forEach((btn) => {
    btn.onclick = () => {
      const type = btn.dataset.type;
      const idx = parseInt(btn.dataset.idx, 10);
      if (type === "object") {
        buyObject(idx);
      } else if (type === "building") {
        buyBuilding(idx);
      }
    };
  });

  // Lógica del botón de compra de héroes
  document.querySelectorAll(".recruit-hero-btn").forEach((btn) => {
    btn.onclick = () => {
      const heroId = btn.dataset.heroId;
      const hero = RECRUITABLE_HEROES.find(h => h.id === heroId);
      const state = gameState.recruitableHeroesState[heroId];
      if (gameState.score >= state.currentCost) {
        gameState.score -= state.currentCost;
        state.count++;
        state.currentCost = Math.floor(hero.cost * Math.pow(1.25, state.count));
        updateDisplay();
        renderShop();
      }
    };
  });
}

// Comprar objeto repetible
function buyObject(idx) {
  const obj = gameState.shopObjects[idx];
  if (gameState.score >= obj.cost) {
    gameState.score -= obj.cost;
    gameState.score = Math.max(0, Math.round(gameState.score * 1e6) / 1e6);
    if (gameState.score < 0.00001) gameState.score = 0;
    obj.owned++;
    if (obj.type === "special") {
      // Aplicar efecto especial
      if (obj.id === "harry") {
        gameState.harryBonus = true;
        gameState.pointsPerClick += 5;
        setTimeout(() => {
          gameState.harryBonus = false;
          gameState.pointsPerClick -= 5;
        }, 5000);
      }
    }
    // Escalado de coste
    obj.cost = Math.floor(obj.baseCost * Math.pow(1.15, obj.owned));
    updateDisplay();
    renderShop();
  }
}

// Comprar edificio único
function buyBuilding(idx) {
  const b = gameState.permanentBuildings[idx];
  if (!b.purchased && gameState.score >= b.cost) {
    gameState.score -= b.cost;
    gameState.score = Math.max(0, Math.round(gameState.score * 1e6) / 1e6);
    if (gameState.score < 0.00001) gameState.score = 0;
    b.purchased = true;
    b.effect(gameState);
    updateDisplay();
    renderShop();
  }
}

// Click principal
clickButton.addEventListener("click", () => {
  gameState.score += gameState.pointsPerClick;
  updateDisplay();
});

// Sistema de generación automática de puntos
function generatePoints() {
  const pps = getTotalPPS();
  gameState.score += pps;
  updateDisplay();
}

// Iniciar generación automática
generatePoints();
setInterval(generatePoints, 1000); // Cada segundo

// Efecto de cómic al hacer clic
function showComicEffect() {
  const comicEffectContainer = document.getElementById('comicEffectContainer');
  const el = document.createElement('div');
  
  // Array de onomatopeyas
  const onomatopeyas = [
    'POW!', 'BAM!', 'KAPOW!', 'ZAP!', 'BOOM!', 'CRASH!', 'WHAM!', 
    'BLOOP!', 'TWIP!', 'ZOOM!', 'SMASH!', 'KABOOM!', 'WHACK!', 'CRUNCH!',
    'BLOOP!', 'ZAP!', 'ZING!', 'WHIZ!', 'CRACK!', 'BANG!', 'THUD!'
  ];
  
  // Elegir una onomatopeya aleatoria
  const onomatopeya = onomatopeyas[Math.floor(Math.random() * onomatopeyas.length)];
  
  // Elegir una animación aleatoria
  const animations = ['comicBounce', 'comicPop', 'comicTwirl', 'comicFade'];
  const animation = animations[Math.floor(Math.random() * animations.length)];
  
  // Elegir un color aleatorio
  const colors = ['blue', 'red', 'yellow', 'green', 'purple', 'orange', 'pink'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  // Obtener posición del botón
  const button = document.getElementById('clickButton');
  const rect = button.getBoundingClientRect();
  const buttonCenterX = rect.left + rect.width / 2;
  const buttonCenterY = rect.top + rect.height / 2;
  
  // Calcular posición aleatoria alrededor del botón
  const radius = 80; // Radio máximo reducido
  const angle = Math.random() * 2 * Math.PI;
  const x = buttonCenterX + radius * Math.cos(angle);
  const y = buttonCenterY + radius * Math.sin(angle);
  
  el.className = `comic-effect ${color}`;
  el.style.animation = `${animation} 0.7s ease-out`;
  el.textContent = onomatopeya;
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.transform = `translateX(-50%) translateY(-50%)`;
  
  comicEffectContainer.appendChild(el);
  
  // Añadir un ligero retraso aleatorio para variedad
  const delay = Math.random() * 100;
  setTimeout(() => {
    el.remove();
  }, 700);
}

clickButton.addEventListener("click", showComicEffect);

// Noticias del Daily Bugle
const NEWS = [
  {
    title: "¡NUEVO CONFLICTO DE VENGADORES!",
    subtitle: "Tensiones entre equipos",
    body: "Los Thunderbolts, conocidos como 'The New Avengers', han causado controversia en el mundo superheroico. Sam Wilson, Capitán América, ha expresado su descontento con la formación de un nuevo equipo de Vengadores."
  },
  {
    title: "SINIESTRO SEXTETO EN ACCIÓN!",
    subtitle: "Ataque masivo en Nueva York",
    body: "El Siniestro Sexteto liderado por Doc Ock ha sido avistado en el centro de la ciudad. Spider-Man se prepara para enfrentar a sus archienemigos en una batalla épica."
  },
  {
    title: "¡ATENCIÓN! HOMBRE DE ARENA EN LIBERTAD",
    subtitle: "Robo en el Banco Central",
    body: "El criminal conocido como Hombre de Arena ha sido visto robando el Banco Central de Nueva York. La policía ha pedido ayuda a Spider-Man para detenerlo."
  },
  {
    title: "DESCUBRIMIENTO HISTÓRICO",
    subtitle: "El Capitán América original",
    body: "Arqueólogos han encontrado pruebas del proyecto Super Soldado original. Se cree que este descubrimiento podría cambiar nuestra comprensión de la historia de los Vengadores."
  },
  {
    title: "¡NUEVO PATRULLAJE!",
    subtitle: "Miles Morales en acción",
    body: "El joven Spider-Man de Brooklyn ha comenzado a patrullar la ciudad. Los ciudadanos están emocionados por tener un nuevo héroe en sus calles."
  },
  {
    title: "CHASQUIDO: 5 AÑOS DESPUÉS",
    subtitle: "Impacto en la sociedad",
    body: "La sociedad continúa lidiando con las consecuencias del Chasquido. Expertos debaten sobre la mejor manera de reconstruir y ayudar a los afectados."
  },
  {
    title: "BLACK CAT EN ACCIÓN",
    subtitle: "Robo espectacular",
    body: "Felicia Hardy, conocida como Black Cat, ha sido vista robando una joyería de lujo. Spider-Man se ha comprometido a detenerla, pero la relación entre ambos es complicada."
  },
  {
    title: "VENGADORES: NUEVA ALIANZA",
    subtitle: "Reunión de héroes",
    body: "Los Vengadores originales se han reunido para discutir la amenaza de los Thunderbolts. Se espera una conferencia de prensa para anunciar sus planes."
  },
  {
    title: "OSCORP: NUEVOS DESARROLLOS",
    subtitle: "Tecnología avanzada",
    body: "Norman Osborn ha anunciado nuevos proyectos en Oscorp. Se rumorea que están desarrollando tecnología que podría cambiar el juego en el mundo superheroico."
  },
  {
    title: "DIMENSIONAL PORTAL ACTIVO",
    subtitle: "Alerta de multiverso",
    body: "Científicos han detectado actividad en el portal dimensional. Se teme que esto podría traer más visitantes del multiverso a nuestra realidad."
  }
];

// Función para mostrar noticias con animación de rebote
function showRandomNews() {
  const randomIndex = Math.floor(Math.random() * NEWS.length);
  const news = NEWS[randomIndex];
  
  // Primero ocultamos los elementos con animación de salida
  const subtitle = document.getElementById('newsSubtitle');
  const body = document.getElementById('newsBody');
  
  subtitle.classList.remove('visible');
  body.classList.remove('visible');
  
  // Actualizamos el contenido
  document.getElementById('newsTitle').textContent = news.title;
  subtitle.textContent = news.subtitle;
  body.textContent = news.body;
  
  // Esperamos que la animación de salida termine
  setTimeout(() => {
    // Mostramos los elementos con animación de entrada
    subtitle.classList.add('visible');
    body.classList.add('visible');
  }, 400); // Ajustado para coincidir con la duración de la animación de salida
}

// Actualizar noticias cada 7 segundos
setInterval(showRandomNews, 7000);

// Mostrar la primera noticia al inicio
showRandomNews();

// Inicializar
updateDisplay();
renderShop();

// Actualizar el display de puntos por segundo cada segundo
setInterval(() => {
  pointsPerSecondDisplay.textContent = Math.floor(getTotalPPS());
}, 1000);
