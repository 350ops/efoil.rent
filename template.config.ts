/**
 * Template Configuration
 *
 * Customize your landing page by editing the values below.
 * This centralizes common customizations for easier template management.
 */

export const templateConfig = {
  // Brand Information
  brand: {
    name: "eFoil Maldives",
    tagline: "The Pinnacle of Electric Hydrofoiling",
    description: "Premium Audi e-tron eFoil rentals delivered to your yacht, resort, or private island in Maldives.",
  },

  // Contact & Social
  contact: {
    email: "hello@efoil.rent",
    phone: "+960 9606783344",
    whatsapp: "https://wa.me/9606783344",
    instagram: "https://ig.me/m/efoil.rent",
    booking: "https://cal.com/efoil-maldives",
    website: "https://www.efoil.rent",
  },

  social: {
    twitter: "#",
    github: "#",
    linkedin: "#",
    facebook: "#",
    instagram: "https://www.instagram.com/efoil.rent/",
  },

  // Theme Colors (Tailwind classes)
  theme: {
    primary: "cyan-400",
    primaryDark: "cyan-500",
    secondary: "sky-500",
    accent: "cyan-400",
  },

  // Features Section
  features: [
    {
      icon: "anchor",
      title: "Yacht & Boat Delivery",
      description: "We deliver the eFoil directly to your vessel anywhere in the Maldives atolls",
      link: "#",
    },
    {
      icon: "building",
      title: "Resort Service",
      description: "Premium eFoil sessions at luxury resorts and private islands on demand",
      link: "#",
    },
    {
      icon: "graduation-cap",
      title: "Expert Instruction",
      description: "Professional instructor included with every session — beginners welcome",
      link: "#",
    },
    {
      icon: "zap",
      title: "Audi e-tron eFoil",
      description: "Ride the world's finest electric hydrofoil — engineered by Audi for performance",
      link: "#",
    },
  ],

  // Stats for CTA Section
  stats: {
    users: "95%",
    rating: "4.9★",
    countries: "Maldives-wide",
  },

  // Navigation Links
  navigation: {
    main: [
      { name: "Features", href: "#features" },
      { name: "About", href: "#about" },
      { name: "Packages", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    experiences: [
      { name: "Yacht Delivery", href: "#" },
      { name: "Resort Service", href: "#" },
      { name: "Crew Trips", href: "#" },
      { name: "Audi e-tron Board", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Events", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Blog", href: "#" },
    ],
    contact: [
      { name: "WhatsApp Us", href: "https://wa.me/9606783344" },
      { name: "Email Us", href: "mailto:hello@efoil.rent" },
      { name: "Instagram", href: "https://www.instagram.com/efoil.rent/" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },

  // SEO & Metadata
  seo: {
    title: "eFoil Maldives — Premium eFoil Rentals",
    description: "Premium Audi e-tron eFoil rentals in Maldives. Delivered to yachts, boats, and resorts.",
    keywords: ["efoil", "maldives", "electric hydrofoil", "audi efoil", "efoil rental", "watersport maldives"],
    ogImage: "/img/efoil-hero.jpeg",
    twitterHandle: "@efoilmaldives",
  },
};

export type TemplateConfig = typeof templateConfig;
