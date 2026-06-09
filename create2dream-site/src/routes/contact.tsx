import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Instagram, MapPin, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Create2Dream" },
      { name: "description", content: "Discutons de votre projet. Studio créatif basé à Cannes 06400." },
      { property: "og:title", content: "Contact — Create2Dream" },
      { property: "og:description", content: "Échangeons sur votre projet. Réponse sous 24h." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({ name: "", email: "", offer: "Création de site web", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Create2Dream] Nouveau projet — ${data.offer}`);
    const body = encodeURIComponent(
      `Nom: ${data.name}\nEmail: ${data.email}\nOffre: ${data.offer}\n\n${data.message}`
    );
    window.location.href = `mailto:clergue.romain@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="pt-40 pb-20">
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">— Contact</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-balance text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95]">
            Racontez-nous votre <span className="font-display text-shine text-7xl md:text-9xl">rêve</span>.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg text-white/70">
            Un projet en tête, une simple question, une envie d'échanger ? Nous répondons sous 24 heures, du lundi au vendredi.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 mt-24 grid lg:grid-cols-5 gap-8">
        {/* FORM */}
        <Reveal className="lg:col-span-3">
          <form onSubmit={onSubmit} className="glass rounded-3xl p-8 md:p-10 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Nom">
                <input required value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-base" />
              </Field>
              <Field label="Email">
                <input required type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-base" />
              </Field>
            </div>

            <Field label="Type de projet">
              <select value={data.offer} onChange={(e) => setData({ ...data, offer: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-base [&>option]:bg-black">
                <option>Création de site web</option>
                <option>Identité visuelle</option>
                <option>Gestion des réseaux sociaux</option>
                <option>Sur mesure</option>
              </select>
            </Field>

            <Field label="Votre message">
              <textarea required rows={5} value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-base resize-none" />
            </Field>

            <button type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black rounded-full px-7 py-3.5 font-medium hover:bg-white/90 transition">
              {sent ? (<><Check className="size-4" /> Message préparé</>) : (<>Envoyer le message <ArrowUpRight className="size-4" /></>)}
            </button>
            <p className="text-xs text-white/40">En cliquant, votre client mail s'ouvrira pré-rempli avec vos informations.</p>
          </form>
        </Reveal>

        {/* INFO */}
        <Reveal delay={150} className="lg:col-span-2">
          <div className="space-y-4">
            <InfoCard icon={Phone} label="Téléphone" value="+33 6 61 48 00 52" href="tel:+33661480052" />
            <InfoCard icon={Mail} label="Email" value="clergue.romain@gmail.com" href="mailto:clergue.romain@gmail.com" />
            <InfoCard icon={Instagram} label="Instagram" value="@create2dream" href="https://instagram.com/create2dream" />
            <InfoCard icon={MapPin} label="Adresse" value="Cannes, 06400 — France" />
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-2">{label}</span>
      {children}
    </label>
  );
}

function InfoCard({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const Tag = (href ? "a" : "div") as React.ElementType;
  return (
    <Tag href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
      className="block group rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/[0.03] transition p-6">
      <div className="flex items-center gap-4">
        <span className="size-11 rounded-full border border-white/20 grid place-items-center group-hover:bg-white group-hover:text-black transition">
          <Icon className="size-4" />
        </span>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-white/40">{label}</p>
          <p className="text-base font-medium mt-1">{value}</p>
        </div>
      </div>
    </Tag>
  );
}
