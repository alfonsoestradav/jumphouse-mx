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
} as const;

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/atracciones", label: "Atracciones" },
  { href: "/precios", label: "Precios" },
  { href: "/fiestas", label: "Fiestas" },
  { href: "/galeria", label: "Galería" },
  { href: "/reglas", label: "Reglas" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function waLink(text?: string) {
  const msg = encodeURIComponent(
    text ??
      "Hola Jump House, quiero información para visitar el parque en Plaza Santa Catarina.",
  );
  return `https://wa.me/${site.whatsapp}?text=${msg}`;
}

export const prices = [
  {
    id: "lunes",
    day: "Súper lunes",
    price: "$130",
    detail: "Entrada general todo el día",
    note: "Tiempo ilimitado",
    highlight: true,
  },
  {
    id: "semana",
    day: "Martes a jueves",
    price: "$180",
    detail: "Entrada general antes de las 3:30 p.m.",
    note: "Tiempo ilimitado",
    highlight: false,
  },
  {
    id: "finde",
    day: "Jump Pack fin de semana",
    price: "$250",
    detail: "Entrada general + limonada refill + bolsa de palomitas",
    note: "Sábado y domingo, todo el día",
    highlight: true,
  },
] as const;

export const extras = [
  { label: "Calcetas antiderrapantes", value: "$40" },
  { label: "Cumpleañeros", value: "Entran gratis" },
  { label: "Acompañantes que no saltan", value: "No pagan entrada" },
  { label: "Tiempo de salto", value: "Ilimitado" },
] as const;

export const attractions = [
  {
    slug: "salto-libre",
    title: "Zona de salto",
    copy: "Camas elásticas conectadas para brincar, girar y soltar energía. Para todas las edades: niños, teens y adultos.",
    image: "/images/court.jpg",
    alt: "Cancha de trampolines con iluminación neón rosa y azul",
  },
  {
    slug: "tobogan",
    title: "Tobogán",
    copy: "Toma carrera, deslízate y cae a la zona de cubos. El plan favorito cuando el salto pide un extra de adrenalina.",
    image: "/images/slide.jpg",
    alt: "Tobogán de trampolines hacia un pozo de cubos de espuma",
  },
  {
    slug: "cubos",
    title: "Pozo de cubos",
    copy: "Una cama de cubos de espuma para aterrizar, hundirte y volver a subir. Risa garantizada en cada caída.",
    image: "/images/foam.jpg",
    alt: "Pozo de cubos de espuma de colores en el parque",
  },
  {
    slug: "pelotas",
    title: "Zona de pelotas",
    copy: "Color, caos bueno y juego libre. Ideal para los más chicos y para quien quiere un break del trampolín.",
    image: "/images/balls.jpg",
    alt: "Alberca de pelotas de colores junto a los trampolines",
  },
  {
    slug: "fiestas",
    title: "Área de fiestas",
    copy: "Mesas, globos, palomitas y limonada junto a la cancha. El cumpleañero salta; la familia celebra sin irse a otro lado.",
    image: "/images/party.jpg",
    alt: "Zona de fiesta junto a las canchas de trampolines",
  },
  {
    slug: "snacks",
    title: "Snacks en el parque",
    copy: "Recarga con palomitas y limonada refill en el Jump Pack de fin de semana. Pregunta en caja por más opciones del día.",
    image: "/images/lobby.jpg",
    alt: "Recepción del parque con calcetas y luces de neón",
  },
] as const;

export const rules = [
  "Las calcetas antiderrapantes son obligatorias en las zonas de salto. Si no traes, se venden en caja ($40).",
  "Solo pagan quienes suben a brincar. Quien acompaña y se queda fuera de la cancha no paga entrada.",
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
    a: "Puedes llegar directo. Para fiestas y grupos grandes te recomendamos apartar por WhatsApp, sobre todo en fin de semana.",
  },
  {
    q: "¿El precio es por hora?",
    a: "No. La entrada general es por tiempo ilimitado dentro del horario del parque.",
  },
  {
    q: "¿Los papás pagan si no brincan?",
    a: "No. Solo pagan las personas que suben a la zona de salto.",
  },
  {
    q: "¿Incluye calcetas?",
    a: "No. Las calcetas antiderrapantes cuestan $40 y son obligatorias para saltar.",
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
  { src: "/images/hero.jpg", alt: "Vista general de las canchas y el tobogán" },
  { src: "/images/court.jpg", alt: "Trampolines con luz neón y canasta" },
  { src: "/images/slide.jpg", alt: "Tobogán hacia el pozo de cubos" },
  { src: "/images/foam.jpg", alt: "Pozo de cubos de espuma" },
  { src: "/images/party.jpg", alt: "Área de fiestas junto al parque" },
  { src: "/images/lobby.jpg", alt: "Recepción y calcetas del parque" },
  { src: "/images/mezzanine.jpg", alt: "Vista desde la zona de espectadores" },
  { src: "/images/balls.jpg", alt: "Zona de pelotas de colores" },
] as const;
