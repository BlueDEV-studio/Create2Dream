import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Instagram, Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SplashIntro } from "./SplashIntro";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/agence", label: "Agence" },
  { to: "/services", label: "Services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SplashIntro />
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || open ? "py-3" : "py-5"}`}>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-between gap-3">
            {/* Brand bubble */}
            <Link to="/" className="bubble flex items-center gap-2 pl-2 pr-4 py-2 group">
              <Logo className="size-8" />
              <span className="font-display text-2xl leading-none pb-1">Create2Dream</span>
            </Link>

            {/* Nav bubble */}
            <nav className="hidden md:flex items-center gap-1 bubble px-1.5 py-1.5">
              {nav.map((n) => {
                const active = pathname === n.to;
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`px-4 py-2 text-sm tracking-wide rounded-full transition-all ${active ? "bg-white text-black shadow-[0_4px_20px_rgba(255,255,255,0.15)]" : "text-white/70 hover:text-white hover:bg-white/5"}`}
                  >
                    {n.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA bubble */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium bubble px-5 py-2.5 hover:bg-white hover:text-black transition-colors"
            >
              Démarrer
            </Link>

            <button onClick={() => setOpen((o) => !o)} className="md:hidden bubble p-2.5" aria-label="Menu">
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden mt-2 bubble p-4 animate-reveal">
              <nav className="flex flex-col">
                {nav.map((n) => (
                  <Link key={n.to} to={n.to} className="px-4 py-3 text-base border-b border-white/5 last:border-0">
                    {n.label}
                  </Link>
                ))}
                <Link to="/contact" className="mt-3 text-center bg-white text-black rounded-full py-3 font-medium">
                  Démarrer un projet
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <Logo className="size-10" />
            <span className="font-display text-4xl pb-1">Create2Dream</span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-white/60 leading-relaxed">
            Studio créatif basé à Cannes. Nous concevons des marques, des sites et des contenus
            qui transforment l'attention en désir.
          </p>
          <p className="mt-4 text-xs text-white/40">Cannes, 06400 — France</p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-white/70 hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="tel:+33661480052" className="flex items-center gap-2 text-white/70 hover:text-white"><Phone className="size-4" />+33 6 61 48 00 52</a></li>
            <li><a href="mailto:clergue.romain@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white"><Mail className="size-4" />clergue.romain@gmail.com</a></li>
            <li><a href="https://instagram.com/create2dream" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white"><Instagram className="size-4" />@create2dream</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} Create2Dream. Tous droits réservés.</p>
          <p>Crafted in Cannes — French Riviera</p>
        </div>
      </div>
    </footer>
  );
}
