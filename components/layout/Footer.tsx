import Image from "next/image";
import { brand, contactChannels, navItems } from "@/content/site";
import { images } from "@/content/images";
import { products } from "@/content/products";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <Image
            src={images.logoFull.src}
            width={images.logoFull.width}
            height={images.logoFull.height}
            alt={images.logoFull.alt}
            className="h-24 w-auto"
          />
          <p className="mt-6 font-display text-2xl font-light text-forest italic">{brand.slogan}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{brand.description}</p>
        </div>

        <nav aria-label="Liên kết chân trang" className="lg:col-span-2">
          <h2 className="eyebrow text-earth">Khám phá</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-char/80 transition-colors hover:text-forest">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#hoi-dap" className="text-char/80 transition-colors hover:text-forest">
                Hỏi đáp
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <h2 className="eyebrow text-earth">Sản phẩm</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {products.map((p) => (
              <li key={p.id}>
                <a href={`#san-pham-${p.id}`} className="text-char/80 transition-colors hover:text-forest">
                  {p.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#hop-tac" className="text-char/80 transition-colors hover:text-forest">
                Hợp tác doanh nghiệp
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="eyebrow text-earth">Liên hệ</h2>
          <dl className="mt-5 space-y-3 text-sm">
            {contactChannels.map((c) => (
              <div key={c.label}>
                <dt className="text-muted">{c.label}</dt>
                <dd className="text-char/85">{c.href ? <a href={c.href}>{c.value}</a> : c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {brand.company}. Dự án {brand.name}.
          </p>
          <p>Hình ảnh bao bì là thiết kế định hướng; thông tin sản phẩm đang trong giai đoạn thử nghiệm.</p>
        </div>
      </div>
    </footer>
  );
}
