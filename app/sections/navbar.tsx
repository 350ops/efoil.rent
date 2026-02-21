"use client";

import { ThemeToggle } from "../components/theme-toggle";

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#DBED2E]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div onClick={() => scrollToSection("hero")} className="cursor-pointer">
            <span
              className="text-black tracking-[-0.04em] leading-none select-none text-4xl"
              style={{ fontFamily: "var(--font-young-serif)" }}
            >
              manta
            </span>
          </div>

          {/* Right side: Navigation Links + CTA Buttons */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-end justify-start gap-8 text-sm flex-wrap box-content pt-3.5 pb-3.5 pl-0 pr-0">
              <button
                onClick={() => scrollToSection("features")}
                className="text-black cursor-pointer hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-black cursor-pointer hover:text-white transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-black cursor-pointer hover:text-white transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-black cursor-pointer hover:text-white transition-colors"
              >
                FAQ
              </button>
            </div>

            <div className="flex items-center gap-3">
              <a href="mailto:hello@efoil.rent" className="px-4 cursor-pointer py-2 text-xs bg-black text-white rounded-xl font-medium hover:bg-zinc-200 transition-colors">
                Get a Quote
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

