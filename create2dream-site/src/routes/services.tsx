import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & tarifs — Create2Dream" },
      { name: "description", content: "Création de site web, identité visuelle, réseaux sociaux et projets sur-mesure. Découvrez nos offres." },
      { property: "og:title", content: "Services & tarifs — Create2Dream" },
      { property: "og:description", content: "Sites web, branding, réseaux sociaux et sur-mesure." },
    ],
  }),
  component: Services,
});

const offers = [
  {
    n: "01",
    title: "Création de site web",
    price: "1 000€",
    suffix: "à partir de",
    desc: "Sites vitrines, e-commerce et expériences sur-mesure. Conçus pour convertir, optimisés pour le SEO et pensés pour durer.",
    features: ["Design sur-mesure", "Responsive & performant", "SEO optimisé", "CMS au choix", "Hébergement & maintenance"],
  },
  {
    n: "02",
    title: "Identité visuelle",
    price: "500€",
    suffix: "à partir de",
    desc: "Logo, charte graphique, typographie, palette. Une marque cohérente qui se reconnaît partout, du print au digital.",
    features: ["Logo & déclinaisons", "Charte graphique complète", "Palette & typographies", "Templates réseaux sociaux", "Guide d'utilisation"],
  },
  {
    n: "03",
    title: "Gestion des réseaux sociaux",
    price: "500€",
    suffix: "à partir de · /mois",
    desc: "Stratégie, création de contenus, animation de communauté. Nous donnons une voix et un visage à votre marque.",
    features: ["Stratégie éditoriale", "Création visuelle", "Calendrier de publication", "Animation & engagement", "Reportings mensuels"],
  },
  {
    n: "04",
    title: "Sur mesure",
    price: "Sur devis",
    suffix: "varie selon le projet",
    desc: "Direction artistique, motion, événementiel, projets hybrides. Si vous l'imaginez, nous pouvons le construire.",
    features: ["Brief approfondi", "Recommandation créative", "Équipe dédiée", "Itérations illimitées", "Suivi long-terme"],
  },
];

function Services() {
  return (
    <div className="pt-40 pb-20">
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">— Services</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-balance text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95]">
            Des offres pensées pour <span className="font-display text-shine text-7xl md:text-9xl">rayonner</span>.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg text-white/70">
            Quatre formats pour répondre à chaque ambition. Tous nos projets démarrent par un échange — gratuit, honnête, sans engagement.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-24 space-y-6">
        {offers.map((o, i) => (
          <Reveal key={o.n} delay={i * 80}>
            <article className="group rounded-3xl border border-white/10 hover:border-white/30 hover:bg-white/[0.02] transition p-8 md:p-12 grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <p className="font-display text-5xl text-white/40">{o.n}</p>
              </div>
              <div className="md:col-span-6">
                <h2 className="text-3xl md:text-4xl font-medium mb-4">{o.title}</h2>
                <p className="text-white/60 mb-6 max-w-xl">{o.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {o.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="size-4 text-white/50" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-4 md:text-right">
                <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-2">{o.suffix}</p>
                <p className="font-display text-6xl md:text-7xl text-shine">{o.price}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-white text-black rounded-full px-5 py-2.5 font-medium hover:bg-white/90">
                  Demander un devis <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-6 mt-32">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">— Méthode</p>
          <h2 className="font-display text-6xl md:text-7xl mb-16">Notre process</h2>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { n: "01", t: "Écoute", d: "On comprend vos enjeux, votre marque, vos rêves." },
            { n: "02", t: "Direction", d: "Une recommandation créative claire et chiffrée." },
            { n: "03", t: "Création", d: "Design, dev, contenu. On itère jusqu'au point parfait." },
            { n: "04", t: "Livraison", d: "Mise en ligne, formation, suivi. On reste à vos côtés." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="border-t border-white/20 pt-6">
                <p className="font-display text-4xl text-white/40 mb-2">{s.n}</p>
                <h3 className="text-xl font-medium mb-2">{s.t}</h3>
                <p className="text-white/60 text-sm">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
