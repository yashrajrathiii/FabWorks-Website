// All business details live here — edit this one file to update the site.

export const site = {
  name: "Tarbha Industries",
  tagline: "Custom mild steel fabrication, built to last",
  city: "Raipur",
  address: "Station Road, Raipur, Chhattisgarh",
  phone: "+91 75091 15513",
  phoneHref: "tel:+917509115513",
  whatsapp: "+91 82699 70857",
  whatsappHref:
    "https://wa.me/918269970857?text=Hi%20Tarbha%20Industries%2C%20I%27d%20like%20a%20quote%20for%20a%20fabrication%20job.",
  hours: "Mon – Sat, 9:00 AM – 7:00 PM",
  location: { lat: 21.250156, lng: 81.631988 },
  googleMapsHref:
    "https://www.google.com/maps/search/?api=1&query=Tarbha%20Industries%2C%20Station%20Road%2C%20Raipur%2C%20Chhattisgarh",
  areasServed: [
    "Chhattisgarh",
    "Odisha",
    "Maharashtra",
    "Rajasthan",
    "Madhya Pradesh",
  ],
} as const;

export const stats = [
  { value: 25, suffix: "+", label: "Years of experience" },
  { value: 2000, suffix: "+", label: "Happy clients" },
  { value: 5, suffix: "", label: "States served" },
] as const;

export const services = [
  {
    icon: "factory",
    title: "Custom MS Fabrication",
    desc: "Made-to-spec MS components for industrial, infrastructure and commercial projects.",
  },
  {
    icon: "grip",
    title: "Heavy-Duty Clamps",
    desc: "Rugged clamps engineered for load, grip and long service life in the field.",
  },
  {
    icon: "box",
    title: "Chambers",
    desc: "Precision-fabricated MS chambers built to exact project dimensions.",
  },
  {
    icon: "utilityPole",
    title: "Electric Poles",
    desc: "Durable electrical poles manufactured for utility and infrastructure work.",
  },
  {
    icon: "lightbulb",
    title: "Street Light Brackets",
    desc: "Corrosion-resistant brackets fabricated for municipal and highway lighting.",
  },
  {
    icon: "fence",
    title: "Grills & Gates",
    desc: "Strong, cleanly finished grills and gates for commercial and residential use.",
  },
  {
    icon: "frame",
    title: "Hoarding & Board Frames",
    desc: "Structural frames for hoardings and signboards, sized for wind and weather.",
  },
  {
    icon: "droplets",
    title: "Fountains & Custom Works",
    desc: "One-off fabrication — fountains, brackets, structures — from drawing to delivery.",
  },
] as const;

export const whyUs = [
  {
    title: "Precision workmanship",
    desc: "Every product is manufactured with attention to detail, durability and functionality — to exact specifications.",
  },
  {
    title: "Transparent quotations",
    desc: "Accurate, honest quotes with clear communication from enquiry to delivery. No surprises.",
  },
  {
    title: "On-time delivery",
    desc: "Deadlines matter. We plan production so your project stays on schedule.",
  },
  {
    title: "Long-term relationships",
    desc: "2,000+ clients across five states keep coming back — industrial, infrastructure and commercial.",
  },
] as const;

// Real client photos (optimized 1200×900 WebP) for the hero parallax +
// work gallery. Regenerate via scripts/import-work-photos.js.
export const workItems = [
  { title: "Heavy-Duty Clamps", image: "/work/clamps.webp" },
  { title: "Electric Poles", image: "/work/electric-poles.webp" },
  { title: "Street Light Brackets", image: "/work/street-light-brackets.webp" },
  { title: "Chamber Frames", image: "/work/chamber-frames.webp" },
  { title: "Grills & Gates", image: "/work/grills-gates.webp" },
  { title: "Inside our workshop", image: "/work/workshop.webp" },
] as const;

// 15 hero tiles cycling through the six photos.
export const heroProducts = Array.from({ length: 15 }, (_, i) => {
  const item = workItems[i % workItems.length];
  return { title: item.title, link: "#work", thumbnail: item.image };
});
