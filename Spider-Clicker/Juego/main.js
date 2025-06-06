// ✅ Tienda de Objetos: Mejores y Edificios
// Objetos comunes (comprables múltiples veces)
const ultimaFraseMostrada = {};
const frasesPorItem = {
  webShooter: [
    "Arriba, arriba y ¡al vuelo, telaraña!",
    "Los lanzatelarañas son mi sello personal.",
    "¡Con estos lanzatelarañas, puedo ser Spider-Man!",
    "El balanceo es ciencia y arte.",
    "¡Estos cartuchos se agotan rápido!",
    "¡No hay nada como el sonido de un lanzatelarañas!",
    "Mi mejor invento... después de las telarañas inteligentes.",
    "¿Alguna vez viste un disparo más elegante?",
    "¡Balanceo total, estilo Spidey!",
    "Hechos en casa, como todo héroe de barrio."
  ],
  auntMay: [
    "Sé bueno. Eso es todo lo que importa.",
    "Peter, siempre estoy orgullosa de vos.",
    "Ayudá a quien lo necesite, sin esperar nada.",
    "Creo que hay un héroe en cada uno de nosotros...",
    "El mundo es cruel, pero vos no tenés que serlo.",
    "Tenés más bondad que cualquier otro héroe.",
    "No necesitás poderes para hacer el bien.",
    "Sos mi esperanza.",
    "El amor es tu mayor fuerza.",
    "No importa en qué te conviertas... siempre serás mi Peter."
  ],
  uncleBen: [
    "Un gran poder conlleva una gran responsabilidad.",
    "Haz lo correcto, incluso si duele.",
    "No luches por venganza, luchá por justicia.",
    "Sos más fuerte de lo que pensás.",
    "No siempre se puede ganar, así es la vida.",
    "No es lo que tenés... es lo que hacés con ello.",
    "Peter, fuiste criado con valores.",
    "El verdadero héroe se mide en sacrificios.",
    "Tu corazón siempre guiará tu poder.",
    "Elegí ser mejor. Siempre."
  ],
  mj: [
    "Vas a lograrlo, tigre.",
    "No te ofendas, pero te equivocas, no estamos en caminos separados, tú eres mi camino, y siempre vas a ser mi camino.",
    "Peter, incluso con la máscara, sé quién eres.",
    "Si esperas la decepción, entonces nunca podrás lograrlo realmente...",
    "No te rindas, Peter.",
    "Sos mi héroe, con o sin traje.",
    "Te quiero por lo que sos.",
    "Incluso los héroes necesitan amor.",
    "No importa cuántas veces caigas.",
    "Siempre estaré para levantarte."
  ],
  gwen: [
    "Moriría sabiendo que te quise.",
    "A veces, los héroes también aman.",
    "Tú eres mi camino y siempre vas a ser mi camino",
    "Lo hiciste lo mejor que pudiste.",
    "Yo creí en vos.",
    "Fuiste mi primer y único amor.",
    "Nunca dejes de luchar, por vos... y por mí.",
    "Te recordarán como un héroe.",
    "El amor también salva.",
    "Incluso sin poderes, fui valiente."
  ],
  miles: [
    "Cualquiera puede usar la máscara.",
    "El salto de fe es el primer paso.",
    "Todos podemos hacer el bien.",
    "Mi estilo. Mi ritmo. Mi ciudad.",
    "Ser Spider-Man es más que balancearse.",
    "No se trata de imitar, se trata de ser.",
    "Lo hago a mi manera.",
    "Brooklyn está a salvo conmigo.",
    "Tengo miedo... pero lo hago igual.",
    "No nací héroe. Me convertí."
  ],
  blackCat: [
    "¿Te dejé sin palabras, arañita?",
    "El peligro me queda bien.",
    "¿Me estás siguiendo o es casualidad?",
    "Una ladrona con estilo... y corazón.",
    "No soy del todo buena... ni del todo mala.",
    "¿Me atrapaste o fue al revés?",
    "Felicia siempre deja huella.",
    "Tu sentido arácnido vibra... ¿por mí?",
    "Riesgo y encanto. Mi especialidad.",
    "Una gata siempre cae de pie."
  ],
  otto: [
    "El poder del sol... en la palma de mi mano.",
    "Soy un científico, no un monstruo.",
    "Superioridad es eficiencia.",
    "La lógica supera la emoción.",
    "El error fue sentir.",
    "Peter... admiré tu mente.",
    "Mis brazos... mis fallas... mi redención.",
    "Estoy por encima de la moral común.",
    "No más caos. Solo control.",
    "La ciencia siempre gana."
  ],
  greenGoblin: [
    "¿Sabés cuántos he matado por menos?",
    "¡No sabés lo que sacrifico por vos!",
    "¡Peter, fuiste como un hijo!",
    "¡Moriremos como familia!",
    "Norman ya no está... solo queda el Duende.",
    "¡Vamos, acaba conmigo si te atrevés!",
    "¡Soy tu peor pesadilla hecha risa!",
    "No podés esconderte de mí.",
    "¡Todo héroe necesita su villano!",
    "¡Este es el legado que te dejo, Peter!"
  ],
  eddie: [
    "Nosotros somos Venom.",
    "Spider-Man... ¿extrañás mi sombra?",
    "No necesitás red para atrapar miedo.",
    "Nuestra ira no se calma.",
    "Fuiste mi ruina... ahora soy tu castigo.",
    "Nadie se esconde de Venom.",
    "Somos el monstruo que creaste.",
    "Te vamos a devorar... lentamente.",
    "El protector letal está en casa.",
    "La justicia no siempre es limpia."
  ],
  harry: [
    "Fuiste mi mejor amigo.",
    "No quiero convertirme en él... pero no sé cómo evitarlo.",
    "Siempre pensé que estarías de mi lado.",
    "Tal vez me perdí... pero no estoy roto.",
    "Esto no era lo que quería, Pete.",
    "Odio lo que siento... pero no te odio a vos.",
    "No soy como mi padre... ¿o sí?",
    "No es fácil cargar con ese apellido.",
    "Te necesito ahora más que nunca.",
    "No quiero perderte otra vez."
  ],
  // Edificios (compras permanentes)
  mayHouse: [
    "Aquí empezó todo para Peter.",
    "El hogar es donde vive la esperanza.",
    "Tía May siempre dejó la luz encendida.",
    "No importa qué tan lejos vayas... siempre podés volver.",
    "Esta casa crió al héroe detrás de la máscara."
  ],
  dailyBugle: [
    "¡SPIDER-MAN ES UNA MENAZA! — J.J. Jameson",
    "Ningún acto heroico escapa a nuestras portadas.",
    "Las noticias vuelan... como una telaraña.",
    "La fama tiene un precio, y empieza con tinta.",
    "Si no está en el Bugle, no pasó."
  ],
  midtown: [
    "Donde Peter aprendió más que ciencia.",
    "Acá se balanceó entre la adolescencia y la responsabilidad.",
    "Midtown: donde nacen genios... o superhéroes.",
    "Entre deberes y telarañas.",
    "Un aula, una picadura, un destino."
  ],
  oscorp: [
    "Tecnología... y consecuencias.",
    "No todo avance es progreso.",
    "Oscorp: donde el futuro se vuelve inestable.",
    "Detrás de cada descubrimiento, una sombra.",
    "Ciencia sin ética es caos."
  ],
  avengers: [
    "Un héroe no está solo.",
    "La torre más segura… ¿o la más atacada?",
    "Donde se decide el destino del mundo.",
    "Un llamado, una misión, un equipo.",
    "Incluso Spider-Man necesita aliados."
  ],
  starkIndustries: [
    "Inteligencia, recursos… y un toque de ego.",
    "Peter, esto es solo para genios.",
    "Stark dejó algo para vos.",
    "Donde la ciencia se viste de armadura.",
    "Stark siempre tuvo visión... incluso para vos."
  ],
  dimensionalPortal: [
    "Los hilos del multiverso se entretejen.",
    "¡El Spider-Verso está abierto!",
    "Cada universo... un nuevo aliado.",
    "Una grieta en la realidad... una oportunidad.",
    "El destino de todos los Spider está en tus manos."
  ],
  scarletSpider: [
    "No soy Peter... pero tengo su corazón.",
    "Ben Reilly al servicio del bien.",
    "El clon con más sentido de responsabilidad.",
    "A veces, ser copia te hace único.",
    "Vivo con sus recuerdos... pero lucho con los míos.",
    "Scarlet Spider en acción.",
    "El pasado me persigue, pero yo corro más rápido.",
    "Soy mi propia araña.",
    "Aprendí de Peter. Ahora soy mejor.",
    "El héroe que nunca debió existir… pero lo hizo."
  ],
  superiorSpider: [
    "¡Ahora soy superior en todo sentido!",
    "Peter fue bueno... yo soy mejor.",
    "La ciudad merece un protector más eficiente.",
    "Con gran inteligencia... viene superioridad.",
    "No más errores emocionales.",
    "Los crímenes se resuelven, no se perdonan.",
    "Spider-Bots patrullando. Orden restaurada.",
    "Doc Ock con propósito... eso da miedo.",
    "La moralidad es relativa.",
    "¡El mundo conocerá al Superior Spider-Man!"
  ],
  spiderHam: [
    "¡Hola, soy Peter Porker!",
    "¡La justicia es divertida!",
    "¡Cerdo arácnido en acción!",
    "¡Los malos son más malos en mi universo!",
    "¡No hay problema que una telaraña no pueda resolver!",
    "¡Soy el cerdo más heroico del multiverso!",
    "¡Los villanos jamás ganarán... ¡ni siquiera en mis sueños!",
    "¡La granja necesita un héroe!",
    "¡A veces, ser cerdo es ser el mejor!",
    "¡Los cerdos también pueden ser héroes!"
  ],
  killerSpider: [
    "No más segundas oportunidades.",
    "Los criminales entienden una sola lengua: miedo.",
    "Peter fracasó. Yo no.",
    "El mundo necesita castigo, no compasión.",
    "Soy lo que pasa cuando el dolor no se cura.",
    "Los inocentes están seguros… si yo estoy cerca.",
    "No juego a ser héroe. Soy sentencia.",
    "Mi camino es oscuro... y necesario.",
    "Si cruzás la línea, no hay regreso.",
    "El asesino que protege… sin piedad."
  ],
  spiderNoir: [
    "En las sombras es donde cazo.",
    "Las calles tienen memoria, y yo soy su fantasma.",
    "Fumo la injusticia y la escupo envuelta en telaraña.",
    "No hay luz sin oscuridad.",
    "Spider-Noir nunca duerme.",
    "La ciudad tiene secretos. Yo los escucho.",
    "Mi sombrero no es solo estilo, es advertencia.",
    "El crimen no se esconde... se silencia.",
    "No tengo tiempo para bromas. Solo venganza.",
    "Entre humo y neón, nace justicia."
  ],
  spiderPunk: [
    "¡Contra el sistema y contra el crimen!",
    "Telarañas y guitarras: ¡revolución arácnida!",
    "¡El punk no está muerto, solo se balancea!",
    "No sigo reglas. Las rompo.",
    "Spider-Punk levanta el puño y lanza red.",
    "Cada golpe... un acorde.",
    "La resistencia lleva máscara.",
    "¡Anti-establishment con estilo!",
    "El multiverso necesita ruido... ¡y telarañas!",
    "¡Gritá si odiás la opresión!"
  ],
  spiderGwen: [
    "No soy quien creés, pero soy suficiente.",
    "Mi universo. Mis reglas.",
    "Puedo caer, pero me levanto balanceando.",
    "La música me calma, el deber me llama.",
    "Gwen Stacy murió… ahora vive como héroe.",
    "No soy solo la chica del héroe.",
    "Telaraña de ritmos y decisiones.",
    "Mi pasado no me define.",
    "Incluso con dolor... sigo luchando.",
    "Soy Spider-Woman. Punto."
  ],
  peniParker: [
    "SP//dr listo para sincronización.",
    "Unidad conectada. Patrulla activada.",
    "Mi padre empezó esto. Yo lo continúo.",
    "No estoy sola. SP//dr está conmigo.",
    "Tecnología y corazón, la mezcla perfecta.",
    "No todos los héroes usan trajes. Algunos pilotan.",
    "SP//dr está recibiendo señales multiversales.",
    "No importa la edad. Importa el coraje.",
    "La ciencia también lucha por la justicia.",
    "Códigos listos. ¡Vamos, SP//dr!"
  ],
  spider2099: [
    "El futuro no necesita héroes... necesita soluciones.",
    "Soy Miguel O’Hara. Y sí, tengo colmillos.",
    "Tecnología, ética... y garras.",
    "Spider-Man 2099 no pregunta. Actúa.",
    "No nací para esto. Pero lo perfeccioné.",
    "Las reglas se rompen en mi línea temporal.",
    "Mi traje es más que elegante.",
    "Ni el tiempo detiene a Spider-Man.",
    "Genética mejorada. Coraje intacto.",
    "El futuro es ahora. Y es mío."
  ],
  ps4Peter: [
    "Ya me golpearon peor que esto. Varias veces.",
    "Ser héroe no es glamoroso, pero vale la pena.",
    "Mi ciudad, mis reglas, mis telarañas.",
    "¡El traje avanzado no hace al héroe... pero ayuda!",
    "Fisk, Shocker, Mister Negative... ¡la rutina de un lunes!",
    "No tengo tiempo para descansar. Siempre hay más.",
    "Este traje aguanta más que yo.",
    "Peter Parker: héroe, científico, repartidor.",
    "Mi sentido arácnido se cansó de sonar.",
    "¿Salvar la ciudad otra vez? ¡Vamos allá!"
  ],
  silk: [
    "Cierro los ojos... y veo el camino.",
    "Fui encerrada por años. Ahora soy libre.",
    "Telarañas más rápidas. Respuestas más fuertes.",
    "No soy Peter... soy Cindy.",
    "El instinto es mi guía.",
    "Silencio, precisión y fuerza.",
    "Aprendí a luchar sola.",
    "Sigo mi propio hilo.",
    "Mi conexión con la red es única.",
    "Lo que escondieron... ahora protege."
  ],
  andrew: [
    "Intento ser mejor cada día.",
    "No pude salvar a todos… pero sigo intentando.",
    "Perder duele. Pero rendirse, más.",
    "¡Soy Spider-Man! ¿Qué esperaban?",
    "Siempre me levantaré... aunque duela.",
    "A veces, ser gracioso es todo lo que me queda.",
    "Lucho por redimirme, no por gloria.",
    "Fallé... y aprendí.",
    "Ser Spider-Man no es una elección. Es un deber.",
    "Cada caída me hizo más fuerte."
  ],
  tobeyPeter: [
    "¡Mi espalda...!",
    "Soy solo un chico de Queens... con suerte radioactiva.",
    "El poder no te hace especial. La elección sí.",
    "El tío Ben tenía razón… siempre la tuvo.",
    "Incluso el héroe necesita ayuda.",
    "Los amigos... los verdaderos... siempre vuelven.",
    "Peter Parker y Spider-Man pueden coexistir.",
    "El traje no hace al héroe. El corazón sí.",
    "Balancearse nunca se olvida.",
    "Siempre vuelvo... porque debo hacerlo."
  ],
  tomPeter: [
    "¿Aún soy un Vengador, cierto?",
    "¡Soy tu amigable vecino Spider-Man!",
    "Sr. Stark… lo logré.",
    "Puedo hacer esto todo el día... espera, eso no era mío.",
    "El deber no espera vacaciones.",
    "A veces, sólo quiero ser un chico normal.",
    "No soy Iron Man. Pero haré lo mejor que pueda.",
    "Mi ciudad me necesita.",
    "Siempre hay alguien a quien salvar.",
    "El barrio me cuida porque yo cuido del barrio."
  ],
  spider2211: [
    "Protocolos temporales activos.",
    "Spider-Man 2211: online y preparado.",
    "Los tecnodrones han escaneado tu amenaza.",
    "La línea temporal debe mantenerse estable.",
    "No interfieras con la historia.",
    "El tiempo no es aliado. Es arma.",
    "Balanceo cuántico en proceso.",
    "¡Acceso al hiperespacio concedido!",
    "Soy el vigilante de múltiples eras.",
    "El futuro depende del presente... y de mí."
  ],
  captainUniverse: [
    "¡Soy el universo hecho araña!",
    "La Enigma Force me guía.",
    "Mi poder... es más que telarañas.",
    "Siento cada átomo vibrar.",
    "Estoy más allá del tiempo... y del miedo.",
    "La responsabilidad ahora pesa como galaxias.",
    "Peter Parker... ahora parte del cosmos.",
    "Nada me detiene. Nada me toca.",
    "La red se ha expandido... al infinito.",
    "Capitán Universo: la forma final del héroe."
  ]
};

// Mostrar globo de texto tipo cómic (estilo notificación)
function showPurchaseMessage(id) {
  const frases = frasesPorItem[id];
  if (!frases || frases.length === 0) return;

  // Evita repetir la misma frase consecutivamente
  let frase;
  do {
    frase = frases[Math.floor(Math.random() * frases.length)];
  } while (frase === ultimaFraseMostrada[id] && frases.length > 1);

  ultimaFraseMostrada[id] = frase;

  const bubble = document.createElement("div");
  bubble.className = "notification-bubble";
  bubble.textContent = frase;
  document.body.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 2000);
}

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
    baseCost: 2200000,
    basePps: 250,
    description: "Ben Reilly se une desde los clones del pasado.",
    type: "repeatable"
  },
  {
    id: "superiorSpider",
    name: "Superior Spider-Man (Otto)",
    icon: "👓",
    baseCost: 2400000,
    basePps: 300,
    description: "Otto Octavius toma el control... de forma superior.",
    type: "repeatable"
  },
  {
    id: "spiderHam",
    name: "Spider-Ham (Peter Porker)",
    icon: "🐷",
    baseCost: 2600000,
    basePps: 280,
    description: "Desde los cómics más absurdos... ¡Peter Porker!",
    type: "repeatable"
  },
  {
    id: "killerSpider",
    name: "Spider-Man Asesino",
    icon: "🔪",
    baseCost: 2700000,
    basePps: 250,
    description: "El Spider-Man que cruzó la línea definitiva.",
    type: "repeatable"
  },
  {
    id: "spiderNoir",
    name: "Spider-Noir",
    icon: "🕵️",
    baseCost: 2750000,
    basePps: 260,
    description: "Investiga las sombras del multiverso.",
    type: "repeatable"
  },
  {
    id: "spiderPunk",
    name: "Spider-Punk",
    icon: "🎸",
    baseCost: 3000000,
    basePps: 270,
    description: "Rompe las reglas dimensionales con poder punk.",
    type: "repeatable"
  },
  {
    id: "spiderGwen",
    name: "Spider-Gwen",
    icon: "🎧",
    baseCost: 3200000,
    basePps: 280,
    description: "Gwen patrulla con estilo desde su universo.",
    type: "repeatable"
  },
  {
    id: "peniParker",
    name: "Peni Parker",
    icon: "🤖",
    baseCost: 3250000,
    basePps: 290,
    description: "Peni y su robot SP//dr se unen al escuadrón.",
    type: "repeatable"
  },
  {
    id: "spider2099",
    name: "Spider-Man 2099",
    icon: "🔵",
    baseCost: 4000000,
    basePps: 300,
    description: "Miguel O'Hara mejora la tecnología dimensional.",
    type: "repeatable"
  },
  {
    id: "ps4Peter",
    name: "Spider-Man (PS4)",
    icon: "🎮",
    baseCost: 4500000,
    basePps: 320,
    description: "Peter Parker de la era PS4, más fuerte y más rápido.",
    type: "repeatable"
  },
  {
    id: "silk",
    name: "Cindy Moon/Silk",
    icon: "🕸️",
    baseCost: 5200000,
    basePps: 350,
    description: "La arácnida más poderosa de Nueva York, maestra en el sigilo y el combate.",
    type: "repeatable"
  },
  {
    id: "andrew",
    name: "Andrew Garfield",
    icon: "🎭",
    baseCost: 6500000,
    basePps: 380,
    description: "El spider-man más emotivo y dramático.",
    type: "repeatable"
  },
  {
    id: "tobeyPeter",
    name: "Peter (Tobey Maguire)",
    icon: "🕶️",
    baseCost: 7000000,
    basePps: 400,
    description: "Peter clásico se lanza a balancearse.",
    type: "repeatable"
  },
  {
    id: "tomPeter",
    name: "Peter (Tom Holland)",
    icon: "🌆",
    baseCost: 8000000,
    basePps: 450,
    description: "Nuestro vecino amigable entra al multiverso.",
    type: "repeatable"
  },
  {
    id: "spider2211",
    name: "Spider-Man 2211",
    icon: "🛰️",
    baseCost: 9000000,
    basePps: 500,
    description: "Spider-Man del futuro llega con tecnodrones.",
    type: "repeatable"
  },
  {
    id: "captainUniverse",
    name: "Capitán Universo (Peter Parker)",
    icon: "🌌",
    baseCost: 10000000,
    basePps: 600,
    description: "El casi dios Peter activa el Enigma Force.",
    type: "repeatable"
  }
];

// Estado del juego
let gameState = {
  score: 0,
  pointsPerClick: 1,
  shopObjects: SHOP_OBJECTS.map((obj) => ({ ...obj, owned: 0, cost: obj.baseCost })),
  permanentBuildings: PERMANENT_BUILDINGS.map((b) => ({ ...b, purchased: false })),
  spiderHeroes: RECRUITABLE_HEROES.map(hero => ({
    ...hero,
    owned: 0,
    cost: hero.baseCost
  })),
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
  // Sumar puntos de objetos
  const objectPPS = gameState.shopObjects.reduce((sum, obj) => {
    const basePps = obj.basePps || 0;
    const owned = obj.owned || 0;
    return sum + basePps * owned;
  }, 0);
  
  // Sumar puntos de héroes
  const heroesPPS = gameState.spiderHeroes.reduce((sum, hero) => {
    const basePps = hero.basePps || 0;
    const owned = hero.owned || 0;
    return sum + basePps * owned;
  }, 0);
  
  return Math.floor(objectPPS + heroesPPS);
}

// Actualizar display
function updateDisplay() {
  scoreDisplay.textContent = Math.floor(gameState.score || 0);
  pointsPerSecondDisplay.textContent = Math.floor(getTotalPPS() || 0);
  updateShopButtons(); // Actualizar solo los botones de la tienda
}

// Actualizar solo los botones de la tienda
function updateShopButtons() {
  // Actualizar botones de objetos repetibles
  document.querySelectorAll(".shop-item-btn[data-type='object']").forEach((btn) => {
    const idx = parseInt(btn.dataset.idx, 10);
    const obj = gameState.shopObjects[idx];
    btn.disabled = gameState.score < obj.cost;
  });

  // Actualizar botones de edificios
  document.querySelectorAll(".shop-item-btn[data-type='building']").forEach((btn) => {
    const idx = parseInt(btn.dataset.idx, 10);
    const building = gameState.permanentBuildings[idx];
    btn.disabled = gameState.score < building.cost || building.purchased;
  });

  // Actualizar botones de Spider-Héroes
  document.querySelectorAll(".shop-item-btn[data-type='hero']").forEach((btn) => {
    const idx = parseInt(btn.dataset.idx, 10);
    const hero = gameState.spiderHeroes[idx];
    btn.disabled = gameState.score < hero.cost;
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

  // Sección de Spider-Héroes
  shopList.innerHTML += "<h3 class='shop-section-title'>Spider-Héroes del Multiverso</h3>";
  gameState.spiderHeroes.forEach((hero, idx) => {
    const item = document.createElement("div");
    item.className = "shop-item" + (gameState.score < hero.cost ? " locked" : "");
    item.innerHTML = `
      <div class="shop-item-icon">${hero.icon}</div>
      <div class="shop-item-info">
        <div class="shop-item-title">${hero.name} (Lvl ${hero.owned})</div>
        <div class="shop-item-cost">Costo: <span>${hero.cost}</span></div>
        <div class="shop-item-desc">${hero.description}</div>
      </div>
      <button class="shop-item-btn" data-type="hero" data-idx="${idx}">
        Reclutar
      </button>
    `;
    shopList.appendChild(item);
  });

  // Actualizar botones de la tienda
  document.querySelectorAll(".shop-item-btn").forEach((btn) => {
    btn.onclick = () => {
      const type = btn.dataset.type;
      if (type === "object") {
        const idx = parseInt(btn.dataset.idx, 10);
        buyObject(idx);
      } else if (type === "building") {
        const idx = parseInt(btn.dataset.idx, 10);
        buyBuilding(idx);
      } else if (type === "hero") {
        const idx = parseInt(btn.dataset.idx, 10);
        const hero = gameState.spiderHeroes[idx];
        if (gameState.score >= hero.cost) {
          gameState.score -= hero.cost;
          hero.owned++;
          hero.cost = Math.floor(hero.baseCost * Math.pow(1.15, hero.owned));
          updateDisplay();
          renderShop();
          showPurchaseMessage(hero.id);
        }
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
    showPurchaseMessage(obj.id);
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
    showPurchaseMessage(b.id);
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
