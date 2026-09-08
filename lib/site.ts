export const site = {
  name: "Jump House",
  fullName: "Jump House Trampoline Park",
  tagline: "El parque de trampolines de Santa Catarina",
  description:
    "Parque de trampolines en Plaza Santa Catarina, Santa Catarina, Nuevo León. Salto ilimitado, fiestas de cumpleaños, promociones de lunes a domingo y diversión para todas las edades.",
  url: "https://jumphouse-mx.vercel.app",
  locale: "es_MX",
  city: "Santa Catarina, N.L.",
  address: {
    street: "Av. Lic. Manuel Ordóñez 322",
    place: "Plaza Santa Catarina",
    neighborhood: "Centro",
    city: "Santa Catarina",
    state: "Nuevo León",
    zip: "66350",
    country: "México",
  },
  mapsUrl: "https://maps.app.goo.gl/S8D1Kq7xdsYWg7e39",
  mapsEmbed:
    "https://www.google.com/maps?q=25.673675,-100.4579527&z=17&output=embed",
  lat: 25.673675,
  lng: -100.4579527,
  hoursLabel: "1:00 p.m. a 9:00 p.m.",
  hoursShort: "13:00 – 21:00",
  hoursNote: "Todos los días",
  phoneDisplay: "81 3407 1953",
  phoneTel: "+528134071953",
  whatsappDisplay: "81 3122 0641",
  whatsapp: "528131220641",
  facebook: "https://www.facebook.com/JumpHouseMx/",
  instagram: "https://www.instagram.com/jumphousemx/",
  instagramHandle: "@jumphousemx",
  tiktok: "https://www.tiktok.com/@jumphousemx",
} as const;

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/atracciones", label: "Atracciones" },
  { href: "/precios", label: "Precios" },
  { href: "/menu", label: "Menú" },
  { href: "/fiestas", label: "Fiestas" },
  { href: "/galeria", label: "Galería" },
  { href: "/reglas", label: "Reglas" },
  { href: "/vacantes", label: "Vacantes" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function waLink(text?: string) {
  const msg = encodeURIComponent(
    text ??
      "Hola Jump House, tengo una pregunta.",
  );
  return `https://wa.me/${site.whatsapp}?text=${msg}`;
}

export const prices = [
  {
    id: "general",
    day: "Entrada general",
    price: "$250",
    detail: "No incluye calcetas antiderrapantes",
    note: "Tiempo ilimitado, de 1:00 p.m. a 9:00 p.m.",
    highlight: false,
  },
  {
    id: "lunes",
    day: "Lunes de Locura",
    price: "$130",
    detail: "Entrada general todo el día",
    note: "Tiempo ilimitado",
    highlight: true,
  },
  {
    id: "semana",
    day: "Happy Hour",
    price: "$180",
    detail: "Martes a jueves, si llegas antes de las 3:30 p.m.",
    note: "Después de las 3:30 p.m. aplica entrada general $250",
    highlight: false,
  },
  {
    id: "finde",
    day: "Jump Pack",
    price: "$250",
    detail: "Entrada general + limonada refill + bolsa de palomitas",
    note: "Sábado y domingo, todo el día",
    highlight: true,
  },
] as const;

export const menuNote =
  "Servicio de cafetería en el parque. Precios de referencia; confirma en caja el día de tu visita.";

export const menu = [
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { name: "Agua", price: "$20" },
      { name: "Café", price: "$35" },
      { name: "Refresco", price: "$30" },
      { name: "Limonada", price: "$35" },
      { name: "Limonada refill", price: "$45" },
      { name: "Jugo", price: "$30" },
    ],
  },
  {
    id: "snacks",
    title: "Snacks",
    items: [
      { name: "Palomitas", price: "$40" },
      { name: "Elote", price: "$45" },
      { name: "Esquite", price: "$45" },
      { name: "Nachos con queso", price: "$55" },
      { name: "Papas a la francesa", price: "$50" },
      { name: "Churros", price: "$40" },
    ],
  },
  {
    id: "comida",
    title: "Para comer",
    items: [
      { name: "Pizza personal", price: "$90" },
      { name: "Pizza pepperoni", price: "$110" },
      { name: "Nuggets con papas", price: "$75" },
      { name: "Hamburguesa con papas", price: "$85" },
      { name: "Hot dog", price: "$50" },
      { name: "Quesadillas", price: "$60" },
    ],
  },
] as const;

export const menuHighlights = [
  { name: "Palomitas", price: "$40" },
  { name: "Limonada", price: "$35" },
  { name: "Café", price: "$35" },
  { name: "Agua", price: "$20" },
  { name: "Pizza personal", price: "$90" },
  { name: "Nuggets con papas", price: "$75" },
  { name: "Elote", price: "$45" },
  { name: "Hamburguesa con papas", price: "$85" },
] as const;

export const partyRate = 245;

export const partyServices = [
  { id: "pastel", name: "Pastel", price: 350 },
  { id: "fotos", name: "Sesión de fotos", price: 500 },
  { id: "globos", name: "Decoración de globos", price: 250 },
  { id: "pinata", name: "Piñata", price: 200 },
  { id: "dulces", name: "Mesa de dulces", price: 400 },
  { id: "animador", name: "Animador extra", price: 300 },
] as const;

export const extras = [
  { label: "Calcetas antiderrapantes", value: "$40 · no incluidas" },
  { label: "Cumpleañeros", value: "Gratis con CURP o acta" },
  { label: "Acompañantes", value: "Sin costo en área de mesas" },
  { label: "Tiempo de salto", value: "Ilimitado, no por hora" },
] as const;

export const jobs = {
  title: "Únete a nuestro equipo",
  role: "Animador(a) de Trampolín",
  intro:
    "Estamos buscando Animadores(as) de Trampolín para formar parte de nuestro equipo. Si eres una persona activa, responsable y con buena actitud, queremos conocerte.",
  shifts: [
    { label: "Medio turno", hours: "12:30 p.m. a 5:00 p.m." },
    { label: "Medio turno", hours: "5:00 p.m. a 9:30 p.m." },
  ],
  image: "/images/vacantes.jpg",
  alt: "Convocatoria de Jump House: vacantes de animador de trampolín, medio turno",
  whatsappText:
    "Hola Jump House, me interesa la vacante de Animador(a) de Trampolín.",
} as const;

export const attractions = [
  {
    slug: "salto-libre",
    title: "Zona de salto",
    copy: "Camas elásticas de colores para brincar sin reloj. Niños, teens y adultos: el parque es para todas las edades.",
    image: "/images/maps-08.jpg",
    alt: "Gente saltando en las canchas de Jump House",
    object: "object-[center_80%]",
  },
  {
    slug: "cubos",
    title: "Pozo de cubos",
    copy: "Tírate a los cubos de espuma, escálalos y vuelve a saltar. El rincón favorito para reírse a lo grande.",
    image: "/images/maps-11.jpg",
    alt: "Pozo de cubos de espuma en Jump House",
  },
  {
    slug: "gladiadores",
    title: "Gladiadores",
    copy: "Toma un tubo, equilibra y tumba a tu rival sobre los cubos. El duelo de la cancha.",
    image: "/images/battle.jpg",
    alt: "Duelo con tubos inflables sobre el pozo de cubos",
  },
  {
    slug: "basquet",
    title: "Básquet en el aire",
    copy: "Toma carrera, salta y lanza. Canasta, pelota y trampolín al mismo tiempo.",
    image: "/images/maps-09.jpg",
    alt: "Canastas de básquet sobre los trampolines de Jump House",
  },
  {
    slug: "escalar",
    title: "Muro de escalar",
    copy: "Presas de colores sobre el muro. Sube, baja y lánzate otra vez a los cubos.",
    image: "/images/maps-04.jpg",
    alt: "Muro de escalar en Jump House",
  },
  {
    slug: "playground",
    title: "Playground",
    copy: "Torre de juegos infantiles con toboganes de tubo y redes. Está dentro del parque, junto a la zona de mesas.",
    image: "/images/maps-03.jpg",
    alt: "Playground infantil con toboganes en Jump House Santa Catarina",
  },
  {
    slug: "fiestas",
    title: "Fiestas",
    copy: "El cumpleañero entra gratis. Trampolines, merienda, limonada y palomitas: la fecha se arma por WhatsApp.",
    image: "/images/maps-07.jpg",
    alt: "Área de fiestas en Jump House, con mesas y tobogán",
  },
] as const;

export const rules = [
  "Las calcetas antiderrapantes son obligatorias en las zonas de salto. Si no traes, se venden en caja ($40).",
  "Solo pagan quienes suben a brincar. Acompañantes no pagan y pueden estar en el área de mesas.",
  "El tiempo de salto es ilimitado dentro del horario de operación.",
  "Es para todas las edades. Los menores deben entrar con un adulto responsable.",
  "Usa ropa cómoda. Nada de zapatos, hebillas, joyería suelta ni objetos en los bolsillos sobre los trampolines.",
  "Respeta el aforo, las indicaciones del staff y las zonas de cada atracción.",
  "No se permite comida ni bebidas sobre las camas elásticas.",
  "Si estás embarazada o tienes una lesión reciente, no te recomendamos saltar.",
  "El parque se reserva el derecho de admisión y de suspender el salto si hay riesgo para ti o para otros.",
] as const;

export const faqs = [
  {
    q: "¿Tengo que reservar para entrar?",
    a: "No. Cualquiera puede llegar a saltar en horario abierto. Solo las fiestas se reservan con anticipación.",
  },
  {
    q: "¿El precio es por hora?",
    a: "No. La entrada general es por tiempo ilimitado dentro del horario del parque.",
  },
  {
    q: "¿Los papás pagan si no brincan?",
    a: "No. Acompañantes no pagan y pueden estar en el área de mesas. Solo pagan quienes suben a brincar.",
  },
  {
    q: "¿Incluye calcetas?",
    a: "No. Las calcetas antiderrapantes cuestan $40 y son obligatorias para saltar. No vienen en la entrada general.",
  },
  {
    q: "¿Los cumpleañeros entran gratis?",
    a: "Sí, el día de tu cumpleaños. Presenta CURP o acta de nacimiento.",
  },
  {
    q: "¿A partir de qué edad pueden entrar?",
    a: "El parque es para todas las edades. Los niños pequeños entran con un adulto responsable.",
  },
  {
    q: "¿Hacen fiestas de cumpleaños?",
    a: "Sí. Los paquetes empiezan desde $245 por persona y el cumpleañero entra gratis. Escríbenos para armar tu fecha.",
  },
] as const;

export const gallery = [
  { src: "/images/maps-06.jpg", alt: "Fachada de Jump House en Plaza Santa Catarina" },
  { src: "/images/maps-11.jpg", alt: "Canchas de Jump House con pozo de cubos" },
  { src: "/images/maps-01.jpg", alt: "Pozo de cubos y trampolines de Jump House" },
  { src: "/images/maps-13.jpg", alt: "Vista panorámica de las canchas de Jump House" },
  { src: "/images/maps-12.jpg", alt: "Pistas de trampolín en Jump House" },
  { src: "/images/maps-02.jpg", alt: "Zona de mesas junto a las canchas de Jump House" },
  { src: "/images/maps-08.jpg", alt: "Grupo saltando en las canchas de Jump House" },
  { src: "/images/maps-07.jpg", alt: "Área de fiestas en Jump House" },
  { src: "/images/maps-09.jpg", alt: "Aros de básquet en los trampolines" },
  { src: "/images/maps-05.jpg", alt: "Calcetas antiderrapantes Jump House" },
  { src: "/images/maps-04.jpg", alt: "Muro de escalar en Jump House" },
  { src: "/images/maps-03.jpg", alt: "Playground infantil en Jump House Santa Catarina" },
  { src: "/images/maps-10.jpg", alt: "Promociones de Jump House" },
  { src: "/images/park.jpg", alt: "Canchas de Jump House con el letrero del parque" },
  { src: "/images/jump.jpg", alt: "Salto en trampolín en Jump House" },
  { src: "/images/leap.jpg", alt: "Niña saltando en Jump House" },
  { src: "/images/dunk.jpg", alt: "Básquet en los trampolines" },
  { src: "/images/battle.jpg", alt: "Gladiadores sobre el pozo de cubos" },
  { src: "/images/cubos.jpg", alt: "Pozo de cubos y muro de escalar" },
  { src: "/images/party.jpg", alt: "Fiesta en las canchas de Jump House" },
  { src: "/images/pack.jpg", alt: "Grupo en Jump House, Jump Pack de fin de semana" },
  { src: "/images/friends.jpg", alt: "Amigas en los trampolines de Jump House" },
] as const;
