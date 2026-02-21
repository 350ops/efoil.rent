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
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-xs">eF</span>
              </div>
              <span className="text-xl font-bold text-zinc-900 dark:text-white">eFoil Maldives</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              The pinnacle of electric hydrofoiling — delivered to your yacht, resort, or private island in Maldives.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/efoil.rent/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <DynamicIcon name="instagram" className="size-4" />
              </a>
              <a
                href="https://wa.me/9606783344"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <DynamicIcon name="message-circle" className="size-4" />
              </a>
              <a
                href="mailto:hello@efoil.rent"
                className="w-10 h-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <DynamicIcon name="mail" className="size-4" />
              </a>
            </div>
          </div>

          {/* Experiences Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              Experiences
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Yacht Delivery", href: "#" },
                { name: "Resort Service", href: "#" },
                { name: "Crew Trips", href: "#" },
                { name: "Audi e-tron Board", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 dark:text-zinc-400 transition-colors"
                  >
                    {item.name}
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
              {[
                { name: "About Us", href: "#" },
                { name: "Events", href: "#" },
                { name: "Partners", href: "#" },
                { name: "Blog", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 dark:text-zinc-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/9606783344" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="mailto:hello@efoil.rent" className="text-zinc-600 dark:text-zinc-400 transition-colors">
                  hello@efoil.rent
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/efoil.rent/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 transition-colors">
                  @efoil.rent
                </a>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-600 dark:text-zinc-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            © {currentYear} eFoil Maldives. All rights reserved.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            <a href="https://www.efoil.rent" className="hover:underline">efoil.rent</a>
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
