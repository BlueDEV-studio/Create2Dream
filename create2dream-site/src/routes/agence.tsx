import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Palette } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/agence")({
  head: () => ({
    meta: [
      { title: "L'agence — Create2Dream" },
      { name: "description", content: "Deux frères, une vision. Découvrez l'histoire du studio Create2Dream basé à Cannes." },
      { property: "og:title", content: "L'agence — Create2Dream" },
      { property: "og:description", content: "Deux frères, une vision créative. Studio basé à Cannes." },
    ],
  }),
  component: Agence,
});

function Agence() {
  return (
    <div className="pt-40 pb-20">
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">— L'agence</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-balance text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95]">
            Deux <span className="font-display text-shine text-7xl md:text-9xl">frères</span>,<br />
            une seule obsession : <em className="font-display not-italic">créer</em>.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-10 max-w-2xl text-lg text-white/70 leading-relaxed">
            Create2Dream est un studio créatif basé à Cannes, fondé par deux frères qui ont décidé
            de transformer leur passion en métier. L'un code, l'autre dessine. À deux, ils signent
            des projets sur-mesure pour des marques qui veulent sortir du lot.
          </p>
        </Reveal>
      </section>

      {/* FOUNDERS */}
      <section className="mx-auto max-w-7xl px-6 mt-32 grid md:grid-cols-2 gap-6">
        {[
          {
            age: "16",
            role: "Direction Créative",
            icon: Palette,
            desc: "Direction artistique, identité visuelle, contenus. Il pense l'esthétique de chaque projet, du concept au moindre détail graphique.",
            tags: ["Art Direction", "Branding", "Content"],
          },
          {
            age: "14",
            role: "Direction Technique",
            icon: Code2,
            desc: "Développement web, performance, intégration. Il transforme le design en expérience interactive, rapide et solide.",
            tags: ["Web Dev", "Performance", "Motion"],
          },
        ].map((f, i) => (
          <Reveal key={f.role} delay={i * 120}>
            <div className="relative p-10 md:p-12 rounded-3xl border border-white/10 hover:border-white/30 transition group overflow-hidden h-full">
              <div className="absolute -bottom-20 -right-20 font-display text-[20rem] leading-none text-white/[0.04] group-hover:text-white/[0.08] transition-colors select-none">
                {f.age}
              </div>
              <f.icon className="size-8 mb-8 text-white/80" strokeWidth={1.5} />
              <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-2">{f.age} ans</p>
              <h3 className="font-display text-5xl md:text-6xl mb-4">{f.role}</h3>
              <p className="text-white/70 leading-relaxed mb-6 relative">{f.desc}</p>
              <div className="flex flex-wrap gap-2 relative">
                {f.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/70">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-6xl px-6 mt-32">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">— Nos valeurs</p>
          <h2 className="font-display text-6xl md:text-7xl mb-16">Comment nous travaillons</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Sur-mesure", d: "Aucun template, aucun copier-coller. Chaque projet part d'une page blanche." },
            { t: "Proximité", d: "Vous parlez directement avec ceux qui créent. Pas d'intermédiaires." },
            { t: "Exigence", d: "Du pixel à la performance, nous ne livrons que ce dont nous serions fiers." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 100}>
              <div className="border-t border-white/20 pt-6">
                <h3 className="font-display text-4xl mb-3">{v.t}</h3>
                <p className="text-white/60">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section className="mx-auto max-w-6xl px-6 mt-32">
        <Reveal>
          <div className="rounded-3xl glass p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">— Basés à</p>
              <h2 className="font-display text-6xl md:text-7xl">Cannes, 06400</h2>
              <p className="text-white/60 mt-3">French Riviera · disponibles partout en France & au-delà.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 font-medium">
              Nous rencontrer <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
