import { createFileRoute, Link } from "@tanstack/react-router";
import heroVideo from "../assets/hero-bg.mp4.asset.json";
import { ArrowUpRight, Sparkles, Star } from "lucide-react";
import proofPerf from "../assets/proof-perf.png.asset.json";
import proofVues from "../assets/proof-vues.png.asset.json";
import proofReels from "../assets/proof-reels.png.asset.json";

import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Create2Dream — Studio créatif à Cannes" },
      { name: "description", content: "Agence de communication premium à Cannes. Création de sites, identité visuelle et réseaux sociaux." },
      { property: "og:title", content: "Create2Dream — Studio créatif à Cannes" },
      { property: "og:description", content: "Création de sites, identité visuelle et réseaux sociaux. Studio créatif basé à Cannes." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO with video background */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo.url}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 noise"><div className="noise-overlay" /></div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center pt-24">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-reveal">
            <Sparkles className="size-3.5" />
            <span className="text-xs tracking-[0.2em] uppercase">Studio créatif · Cannes</span>
          </div>

          <h1 className="text-balance text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] animate-reveal" style={{ animationDelay: "100ms" }}>
            Nous transformons<br />
            vos idées en{" "}
            <span className="font-display text-shine text-6xl md:text-8xl lg:text-9xl align-baseline">rêves</span>
            <br />visuels.
          </h1>


          <p className="mt-8 max-w-xl mx-auto text-base md:text-lg text-white/70 animate-reveal" style={{ animationDelay: "300ms" }}>
            Sites web, identité visuelle et réseaux sociaux. Un studio créatif fondé par deux frères, animé par une obsession : faire rayonner les marques.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-reveal" style={{ animationDelay: "450ms" }}>
            <Link to="/contact" className="group inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 font-medium hover:bg-white/90 transition">
              Démarrer un projet
              <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 rounded-full px-6 py-3 font-medium transition">
              Découvrir nos offres
            </Link>
          </div>
        </div>

      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/10 py-8 overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              {["Brand Design", "Web Experience", "Social Media", "Art Direction", "Motion", "Strategy", "Identity", "Cannes 06400"].map((w) => (
                <span key={w} className="font-display text-4xl md:text-5xl text-white/30 hover:text-white transition-colors">{w} ✦</span>
              ))}

            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="mx-auto max-w-6xl px-6 py-32">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">— Nous</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="text-balance text-4xl md:text-6xl font-light leading-tight max-w-4xl">
            Chaque marque mérite une <span className="font-display text-shine text-5xl md:text-7xl">histoire</span> que l'on retient,
            une esthétique que l'on désire.
          </h2>

        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 max-w-2xl text-white/60 text-lg leading-relaxed">
            Create2Dream est né de la rencontre de deux frères : l'un façonne la technique, l'autre dessine
            le rêve. Ensemble, nous concevons des expériences sur-mesure, du concept au pixel final.
          </p>
        </Reveal>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">— Nos offres</p>
            <h2 className="font-display text-5xl md:text-6xl">Ce que nous faisons</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm border-b border-white/40 hover:border-white pb-1">
            Voir tous les services <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { n: "01", t: "Création de site web", d: "Sites vitrines, e-commerce et expériences immersives. Performance, design et SEO.", price: "à partir de 1000€" },
            { n: "02", t: "Identité visuelle", d: "Logo, charte graphique, papeterie. Une marque cohérente et mémorable.", price: "à partir de 500€" },
            { n: "03", t: "Réseaux sociaux", d: "Stratégie de contenu, création visuelle, animation de communauté.", price: "à partir de 500€/mois" },
            { n: "04", t: "Sur mesure", d: "Direction artistique, motion design, projets spéciaux. Tout est possible.", price: "sur devis" },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <Link to="/services" className="group block p-8 md:p-10 rounded-3xl border border-white/10 hover:border-white/30 hover:bg-white/[0.02] transition-all h-full">
                <div className="flex items-start justify-between mb-12">
                  <span className="font-display text-3xl text-white/40">{s.n}</span>
                  <ArrowUpRight className="size-5 text-white/40 group-hover:text-white group-hover:rotate-45 transition-all" />
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-3">{s.t}</h3>
                <p className="text-white/60 mb-6">{s.d}</p>
                <span className="text-sm font-display text-xl text-white/80">{s.price}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">— Ils nous font confiance</p>
          <h2 className="font-display text-5xl md:text-6xl mb-12">Nos clients</h2>

        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Antibes Jet Spot", desc: "Gestion des réseaux sociaux · Location de jet-ski sur la Côte d'Azur." },
            { name: "Mouans Optique", desc: "Gestion des réseaux sociaux · Opticien indépendant à Mouans-Sartoux." },
          ].map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <div className="group p-10 rounded-3xl glass hover:bg-white/[0.06] transition relative overflow-hidden">
                <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-15 transition-opacity">
                  <Star className="size-48" strokeWidth={0.5} />
                </div>
                <p className="font-display text-4xl md:text-5xl mb-3 relative">{c.name}</p>
                <p className="text-white/60 relative">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* PROOF teaser */}
        <Reveal delay={200}>
          <div className="mt-12 rounded-3xl bubble p-6 md:p-8 grid md:grid-cols-[auto,1fr,auto] items-center gap-6">
            <div className="flex -space-x-3">
              {[proofPerf.url, proofVues.url, proofReels.url].map((src, i) => (
                <div key={i} className="size-20 md:size-24 rounded-2xl overflow-hidden border-2 border-black bg-black">
                  <img src={src} alt="Statistique réseau social" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl pb-1">+656% de vues en un mois</p>
              <p className="text-white/60 text-sm">Résultats réels obtenus pour nos clients. Voir tous les chiffres.</p>
            </div>
            <Link to="/realisations" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 font-medium hover:bg-white/90 whitespace-nowrap">
              Voir les preuves <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>


      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <div className="rounded-[2.5rem] glass p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 noise"><div className="noise-overlay" /></div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6 relative">— Prêt à créer ?</p>
            <h2 className="text-balance text-4xl md:text-6xl lg:text-7xl font-light leading-tight relative">
              Donnons vie à votre <span className="font-display text-shine text-5xl md:text-7xl lg:text-8xl">prochain rêve</span>.
            </h2>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 relative">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-7 py-3.5 font-medium hover:bg-white/90">
                Parler à un humain <ArrowUpRight className="size-4" />
              </Link>
              <a href="mailto:clergue.romain@gmail.com" className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 rounded-full px-7 py-3.5 font-medium">
                clergue.romain@gmail.com
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
