# Customization Guide

This guide will help you customize the landing page template to match your brand and product.

## 🎨 Quick Start Customization

### 1. Brand Identity

#### Update App Name
Replace "AppName" in these files:
- `app/sections/navbar.tsx` (lines 15, 16)
- `app/sections/footer.tsx` (lines 17, 18)

#### Update Logo
Replace the logo placeholder in:
- `app/sections/navbar.tsx` (line 13-15)
- `app/sections/footer.tsx` (line 12-15)

You can replace the simple letter with an actual logo image:

```tsx
<Image src="/logo.png" alt="Logo" width={32} height={32} />
```

### 2. Color Scheme

The template uses `lime-400` as the primary accent color. To change:

**Find and Replace:**
- `lime-400` → Your color (e.g., `blue-500`, `purple-600`, `pink-500`)
- `lime-500` → Your darker shade
- `emerald-500` → Your complementary color (for gradients)

**Files to update:**
- `app/sections/hero.tsx`
- `app/sections/features.tsx`
- `app/sections/cta.tsx`
- `app/sections/faq.tsx`
- `app/sections/footer.tsx`
- `app/components/theme-toggle.tsx`

### 3. Typography

The template uses Geist Sans and Geist Mono. To change fonts:

1. Update `app/layout.tsx`:
```tsx
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

2. Update `app/globals.css`:
```css
--font-sans: var(--font-your-font);
```

## 📝 Content Customization

### Hero Section (`app/sections/hero.tsx`)

```tsx
// Update the badge text
<span>🚀 Launching Soon</span>

// Update the main headline
<h1>
  Your Main<br />
  Headline<br />
  <span>Goes Here</span>
</h1>

// Update the description
<p>Your product description goes here...</p>
```

### Features Section (`app/sections/features.tsx`)

Update the features array:

```tsx
const features = [
  {
    icon: "🔒", // Use emoji or replace with <Icon />
    title: "Your Feature Title",
    description: "Feature description",
    accentColor: "lime", // Not currently used, but available
  },
  // Add more features...
];
```

### FAQ Section (`app/sections/faq.tsx`)

Update the faqs array:

```tsx
const faqs = [
  {
    question: "Your question?",
    answer: "Your detailed answer goes here...",
  },
  // Add more FAQs...
];
```

### Testimonials Section (`app/sections/testimonials.tsx`)

Update the testimonials array:

```tsx
const testimonials = [
  {
    name: "Customer Name",
    role: "Job Title",
    company: "Company Name",
    image: "👤", // Use emoji or replace with image URL
    content: "Testimonial text...",
    rating: 5,
  },
  // Add more testimonials...
];
```

## 🔧 Advanced Customization

### Adding/Removing Sections

The main page (`app/page.tsx`) imports all sections:

```tsx
import { Navbar, Hero, Features, Mission, FAQ, CTA, Footer } from "./sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Mission />
      {/* <Testimonials /> - Uncomment to add */}
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
```

Simply comment out or remove sections you don't need.

### Creating New Sections

1. Create a new file: `app/sections/your-section.tsx`

```tsx
export function YourSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Your content */}
      </div>
    </section>
  );
}
```

2. Export it in `app/sections/index.ts`:
```tsx
export { YourSection } from "./your-section";
```

3. Use it in `app/page.tsx`:
```tsx
import { YourSection } from "./sections";
// Add <YourSection /> in the return statement
```

### Customizing Phone Mockups

The hero and mission sections include phone mockups. To customize:

1. **Replace with real screenshots:**
```tsx
<Image 
  src="/screenshots/app-screen.png" 
  alt="App Screenshot"
  fill
  className="object-cover"
/>
```

2. **Adjust mockup size:**
```tsx
// Change w-72 h-[600px] to your preferred dimensions
<div className="w-80 h-[650px] ...">
```

### Modifying the Navbar

**Add more navigation links:**

```tsx
<Link href="#pricing">Pricing</Link>
<Link href="#testimonials">Testimonials</Link>
```

**Add a mobile menu:**

You'll need to add state and a hamburger menu for mobile devices. Example:

```tsx
const [isOpen, setIsOpen] = useState(false);

// Add hamburger button
<button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
  {/* Hamburger icon */}
</button>

// Add mobile menu
{isOpen && (
  <div className="md:hidden">
    {/* Mobile navigation links */}
  </div>
)}
```

## 🎯 SEO Optimization

Update metadata in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your App Name - Tagline",
  description: "Your app description for search engines",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "Your App Name",
    description: "Your description",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your App Name",
    description: "Your description",
    images: ["/twitter-image.png"],
  },
};
```

## 🖼️ Adding Images

1. Place images in the `public` folder
2. Use Next.js Image component:

```tsx
import Image from "next/image";

<Image 
  src="/your-image.png"
  alt="Description"
  width={500}
  height={300}
  priority // For above-the-fold images
/>
```

## 🎨 Tailwind Customization

For global Tailwind customization, edit `app/globals.css`:

```css
@theme {
  --color-primary: #your-color;
  --color-secondary: #your-color;
}
```

## 📱 Responsive Design

The template uses Tailwind's responsive prefixes:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

Example:
```tsx
<div className="text-2xl md:text-4xl lg:text-6xl">
  Responsive Text
</div>
```

## 🔗 External Links

Update social media and external links in `app/sections/footer.tsx`:

```tsx
<a href="https://twitter.com/yourhandle">
  {/* Twitter icon */}
</a>
```

## ✅ Final Checklist

Before deploying:

- [ ] Update all placeholder text
- [ ] Replace "AppName" with your brand
- [ ] Update colors to match your brand
- [ ] Add real images/screenshots
- [ ] Update metadata for SEO
- [ ] Test dark mode appearance
- [ ] Test on mobile devices
- [ ] Update footer links
- [ ] Add your social media links
- [ ] Configure analytics (if needed)
- [ ] Test all interactive elements
- [ ] Optimize images for web

## 🚀 Deployment

The template is ready to deploy to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

Simply run:
```bash
npm run build
```

And deploy the `.next` folder.

---

Need help? Check the main README.md for more information!

