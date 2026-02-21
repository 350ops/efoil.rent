/**
 * Template Configuration
 * 
 * Customize your landing page by editing the values below.
 * This centralizes common customizations for easier template management.
 */

export const templateConfig = {
  // Brand Information
  brand: {
    name: "AppName",
    tagline: "Secure & Easy-to-Use App Solution",
    description: "Store, Send & Receive everything with confidence. Experience the future of digital solutions.",
  },

  // Contact & Social
  contact: {
    email: "hello@yourapp.com",
    phone: "+1 (555) 123-4567",
  },

  social: {
    twitter: "https://twitter.com/yourapp",
    github: "https://github.com/yourapp",
    linkedin: "https://linkedin.com/company/yourapp",
    facebook: "https://facebook.com/yourapp",
    instagram: "https://instagram.com/yourapp",
  },

  // App Store Links
  appStores: {
    ios: "https://apps.apple.com/app/yourapp",
    android: "https://play.google.com/store/apps/details?id=com.yourapp",
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
      icon: "🔒",
      title: "Non-Custodial Wallet",
      description: "Full control over your private keys",
      link: "#",
    },
    {
      icon: "🔄",
      title: "Built-in Exchange",
      description: "Swap cryptocurrencies directly within the app",
      link: "#",
    },
    {
      icon: "👤",
      title: "Biometric Security",
      description: "Face ID & multifactor authentication for extra protection",
      link: "#",
    },
    {
      icon: "📱",
      title: "QR Code Payments",
      description: "Send and receive crypto effortlessly",
      link: "#",
    },
  ],

  // Stats for CTA Section
  stats: {
    users: "500K+",
    rating: "4.9★",
    countries: "150+",
  },

  // Navigation Links
  navigation: {
    main: [
      { name: "About us", href: "#about" },
      { name: "Features", href: "#features" },
      { name: "FAQ", href: "#faq" },
    ],
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Security", href: "#" },
      { name: "Roadmap", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press Kit", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Status", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },

  // SEO & Metadata
  seo: {
    title: "AppName - Secure & Easy-to-Use App Solution",
    description: "Store, Send & Receive everything with confidence. Experience the future of digital solutions.",
    keywords: ["app", "secure", "easy-to-use", "digital", "solution"],
    ogImage: "/og-image.png",
    twitterHandle: "@yourapp",
  },
};

export type TemplateConfig = typeof templateConfig;

