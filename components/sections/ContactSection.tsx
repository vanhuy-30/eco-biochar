import type { Dictionary } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

export function ContactSection({ t }: { t: Dictionary["contact"] }) {
  return (
    <section id="lien-he" aria-labelledby="contact-title" className="grain section-pad bg-section-dark text-cream">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-3 text-mint">
            <span aria-hidden className="h-px w-8 bg-mint/60" />
            {t.index} / {t.eyebrow}
          </p>
          <h2
            id="contact-title"
            className="mt-6 font-display text-[clamp(2.1rem,1.4rem+2.4vw,3.6rem)] leading-[1.06] font-medium tracking-[-0.02em]"
          >
            {t.title} <span className="font-light text-mint italic">{t.accent}</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">{t.body}</p>

          <dl className="mt-12 space-y-5 border-t border-line-light pt-8">
            {t.channels.map((c) => (
              <div key={c.label} className="grid grid-cols-[8.5rem_1fr] gap-4 text-sm">
                <dt className="text-cream/50">{c.label}</dt>
                <dd className="min-w-0 text-cream/90 [overflow-wrap:anywhere]">
                  {c.href ? <a href={c.href}>{c.value}</a> : c.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <ContactForm t={t.form} />
        </Reveal>
      </div>
    </section>
  );
}
