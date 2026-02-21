/**
 * Template Configuration
 * 
 * Customize your landing page by editing the values below.
 * This centralizes common customizations for easier template management.
 */

export const templateConfig = {
  // Brand Information
  brand: {
    name: "efoil.rent",
    legalName: "Manta Fleet Limited",
    companyNumber: "17041670",
    tagline: "Ride the Future of Watersports",
    description: "Electric hydrofoil rentals and professional marine fleet management. Available for individuals, groups, yachts, resorts, and marinas.",
    address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom",
  },

  // Contact & Social
  contact: {
    email: "hello@efoil.rent",
    phone: "",
  },

  social: {
    twitter: "https://twitter.com/efoilrent",
    github: "",
    linkedin: "https://linkedin.com/company/manta-fleet",
    facebook: "https://facebook.com/efoilrent",
    instagram: "https://instagram.com/efoilrent",
  },

  // Theme Colors (Tailwind classes)
  theme: {
    primary: "lime-400",
    primaryDark: "lime-500",
    secondary: "emerald-500",
    accent: "lime-400",
  },

  // Features Section
  features: [
    {
      icon: "⚡",
      title: "Electric Hydrofoil",
      description: "Ride the latest e-foil boards for an unforgettable experience above the water",
      link: "#",
    },
    {
      icon: "🌊",
      title: "Prime Locations",
      description: "Operating across top UK and international waterways and coastal destinations",
      link: "#",
    },
    {
      icon: "👥",
      title: "Expert Instructors",
      description: "Professional training for all skill levels — from complete beginners to advanced riders",
      link: "#",
    },
    {
      icon: "🚢",
      title: "Fleet Management",
      description: "Full B2B marine operations for yachts, resorts, and marinas",
      link: "#",
    },
  ],

  // Stats
  stats: {
    sessions: "500+",
    rating: "5★",
    locations: "UK & Global",
  },

  // Navigation Links
  navigation: {
    main: [
      { name: "Services", href: "#features" },
      { name: "About", href: "#about" },
      { name: "FAQ", href: "#faq" },
    ],
    services: [
      { name: "E-foil Rentals", href: "#" },
      { name: "Fleet Management", href: "#" },
      { name: "B2B Packages", href: "#" },
      { name: "Safety & Training", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press Kit", href: "#" },
    ],
    support: [
      { name: "Help Centre", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Cancellation Policy", href: "#" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },

  // SEO & Metadata
  seo: {
    title: "efoil.rent – Electric Hydrofoil Rentals & Marine Fleet Management",
    description: "Ride the latest electric hydrofoils with Manta Fleet. E-foil rentals for individuals, groups, yachts, resorts, and marinas across the UK and beyond.",
    keywords: ["efoil", "e-foil rental", "electric hydrofoil", "marine fleet", "watersports", "UK", "Manta Fleet"],
    ogImage: "/og-image.png",
    twitterHandle: "@efoilrent",
  },
};

export type TemplateConfig = typeof templateConfig;

