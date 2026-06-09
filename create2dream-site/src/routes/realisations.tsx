import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, TrendingUp, Eye, Users } from "lucide-react";
import { Reveal } from "../components/Reveal";
import proofPerf from "../assets/proof-perf.png.asset.json";
import proofReels from "../assets/proof-reels.png.asset.json";
import proofVues from "../assets/proof-vues.png.asset.json";


export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Create2Dream" },
      { name: "description", content: "Nos clients et projets : Antibes Jet Spot, Mouans Optique et bien d'autres." },
      { property: "og:title", content: "Réalisations — Create2Dream" },
      { property: "og:description", content: "Nos clients et projets en cours." },
    ],
  }),
  component: Realisations,
});

const projects = [
  {
    name: "Antibes Jet Spot",
    cat: "Réseaux sociaux",
    year: "2025",
    desc: "Stratégie social media pour un loueur de jet-ski premium sur la Côte d'Azur. Contenus immersifs, ambiance estivale, croissance de la communauté.",
    tags: ["Instagram", "Reels", "Content"],
    href: "https://www.instagram.com/antibes.jetspot/",
  },
  {
    name: "Mouans Optique",
    cat: "Réseaux sociaux",
    year: "2025",
    desc: "Création de contenus pour un opticien indépendant à Mouans-Sartoux. Mise en valeur des montures, des nouveautés et de l'expertise de la boutique.",
    tags: ["Instagram", "Content", "Photo"],
    href: "#",
  },
];

function Realisations() {
  return (
    <div className="pt-40 pb-20">
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">— Réalisations</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-balance text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95]">
            Des marques que nous faisons <span className="font-display text-shine text-7xl md:text-9xl">briller</span>.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg text-white/70">
            Une sélection de clients qui nous font confiance pour leur image et leur présence digitale.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-24 space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <a href={p.href} target="_blank" rel="noreferrer" className="group block rounded-3xl border border-white/10 hover:border-white/40 hover:bg-white/[0.03] transition p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -bottom-32 -right-10 font-display text-[18rem] leading-none text-white/[0.03] group-hover:text-white/[0.07] transition-colors select-none whitespace-nowrap">
                {p.name.split(" ")[0]}
              </div>
              <div className="grid md:grid-cols-12 gap-6 relative">
                <div className="md:col-span-3 flex flex-col gap-2">
                  <span className="text-xs tracking-[0.25em] uppercase text-white/40">{p.cat}</span>
                  <span className="text-xs text-white/40">{p.year}</span>
                </div>
                <div className="md:col-span-7">
                  <h2 className="font-display text-5xl md:text-6xl mb-3">{p.name}</h2>
                  <p className="text-white/70 max-w-xl mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/70">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <span className="inline-flex items-center justify-center size-14 rounded-full border border-white/20 group-hover:bg-white group-hover:text-black transition">
                    <ArrowUpRight className="size-5 group-hover:rotate-45 transition-transform" />
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}

      </section>

      {/* PROOF / RESULTS */}
      <section className="mx-auto max-w-7xl px-6 mt-40">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">— Preuves</p>
          <h2 className="font-display text-5xl md:text-6xl mb-4">Les chiffres parlent</h2>
          <p className="max-w-2xl text-white/60 mb-12">
            Quelques statistiques réelles tirées des comptes que nous gérons. Croissance, vues et engagement — sans filtre.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { src: proofPerf.url, icon: TrendingUp, kpi: "+656%", label: "Vues de reels & publications" },
            { src: proofVues.url, icon: Eye, kpi: "+657%", label: "Vues mensuelles vs mois précédent" },
            { src: proofReels.url, icon: Users, kpi: "+933%", label: "Vues de non-followers" },
          ].map((p, i) => (
            <Reveal key={p.label} delay={i * 100}>
              <div className="group rounded-3xl border border-white/10 hover:border-white/30 transition overflow-hidden bg-white/[0.02]">
                <div className="aspect-[9/16] bg-black overflow-hidden">
                  <img src={p.src} alt={p.label} className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <p.icon className="size-5 text-white/60 mb-3" strokeWidth={1.5} />
                  <p className="font-display text-4xl text-shine pb-1">{p.kpi}</p>
                  <p className="text-sm text-white/60 mt-1">{p.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-12 rounded-3xl bubble p-10 md:p-14 text-center">
            <p className="font-display text-4xl md:text-5xl mb-3">Vous voulez les mêmes résultats ?</p>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              On pose un cadre stratégique, on crée des contenus qui captent, on suit la performance chaque mois.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-7 py-3.5 font-medium hover:bg-white/90">
              Lancer mon projet <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        {/* Empty slot */}
        <Reveal delay={200}>
          <div className="mt-12 rounded-3xl border border-dashed border-white/15 p-12 text-center">
            <p className="font-display text-4xl md:text-5xl mb-3">Et vous ?</p>
            <p className="text-white/60 mb-6">La prochaine marque que nous faisons rayonner pourrait être la vôtre.</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 font-medium">
              Démarrer un projet <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
