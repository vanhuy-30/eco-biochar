import type { Dictionary, Locale } from "@/content/types";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const linkClass = "text-ink/80 transition-colors hover:text-accent";
  return (
    <footer className="border-t border-line bg-surface-alt">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <Logo company={t.brand.company} product={t.brand.product} size="lg" />
          <p className="mt-6 font-display text-2xl font-light text-accent italic">{t.brand.slogan}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">{t.brand.description}</p>
          <div className="mt-6 flex items-center gap-2 text-ink">
            <LanguageSwitch locale={locale} label={t.common.languageLabel} />
            <span aria-hidden className="h-5 w-px bg-line" />
            <ThemeToggle label={t.common.themeToggle} className="hover:bg-ink/5" />
          </div>
        </div>

        <nav aria-label={t.footer.footerNav} className="lg:col-span-2">
          <h2 className="eyebrow text-eyebrow">{t.footer.explore}</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {t.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#hoi-dap" className={linkClass}>
                {t.footer.faqLink}
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <h2 className="eyebrow text-eyebrow">{t.footer.productsHeading}</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {t.products.items.map((p) => (
              <li key={p.id}>
                <a href={`#san-pham-${p.id}`} className={linkClass}>
                  {p.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#hop-tac" className={linkClass}>
                {t.footer.partnershipLink}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="eyebrow text-eyebrow">{t.footer.contactHeading}</h2>
          <dl className="mt-5 space-y-3 text-sm">
            {t.contact.channels.map((c) => (
              <div key={c.label}>
                <dt className="text-ink-muted">{c.label}</dt>
                <dd className="text-ink/85 [overflow-wrap:anywhere]">
                  {c.href ? <a href={c.href}>{c.value}</a> : c.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <div>
            <p>{t.footer.copyright}</p>
            <p className="mt-1 font-medium text-ink/75">{t.footer.team}</p>
          </div>
          <p>{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
