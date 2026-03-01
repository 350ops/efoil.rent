import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <span
                className="text-zinc-900 dark:text-white tracking-[-0.04em] leading-none select-none text-3xl"
                style={{ fontFamily: "var(--font-young-serif)" }}
              >
                manta
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              B2B fleet operations and managed services for yachts, resorts, and marinas. Fuel, maintenance, and procurement — controlled.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {["twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center  transition-colors"
                  aria-label={social}
                >
                  <DynamicIcon name={social as any} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {["E-foil Rentals", "Fleet Management", "B2B Packages", "Safety & Training"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-zinc-600 dark:text-zinc-400  transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "Press Kit"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-zinc-600 dark:text-zinc-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-3">
              {["Help Centre", "Contact Us", "Cancellation Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-zinc-600 dark:text-zinc-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-600 dark:text-zinc-400 text-sm text-center md:text-left">
            <p>© {currentYear} efoil.rent is a trading name of Manta Fleet Limited (Company No. 17041670).+44 7311 132677</p>
            <p className="mt-1">Registered in England and Wales · 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-zinc-600 dark:text-zinc-400 hover:text-lime-500 dark:hover:text-lime-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-zinc-600 dark:text-zinc-400 hover:text-lime-500 dark:hover:text-lime-400 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

