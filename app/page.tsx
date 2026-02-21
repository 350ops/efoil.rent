import { Hero } from "./sections/hero";
import { Features } from "./sections/features";
import { Mission } from "./sections/mission";
import { FAQ } from "./sections/faq";
import { CTA } from "./sections/cta";
import { Footer } from "./sections/footer";
import { Navbar } from "./sections/navbar";
import { Testimonials } from "./sections/testimonials";
import { Pricing } from "./sections/pricing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Mission />
      <Testimonials />
      <CTA />
      <Pricing />
      <FAQ />
      
      <Footer />
    </main>
  );
}
