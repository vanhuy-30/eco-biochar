import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { images } from "@/content/images";
import { ButtonLink } from "@/components/ui/Button";
import { CircularMark } from "@/components/ui/CircularMark";
import { Marquee } from "@/components/ui/Marquee";

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title" className="grain relative bg-forest-ink text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_30%,rgba(0,200,150,0.14),transparent_70%)]"
      />
      <div className="container-page relative pt-32 pb-16 md:pt-40 lg:pb-24">
        <p className="eyebrow flex items-center gap-3 text-mint">
          <span aria-hidden className="h-px w-8 bg-mint/60" />
          Than sinh học từ gáo dừa · Đồng bằng sông Cửu Long
        </p>

        <h1
          id="hero-title"
          className="mt-7 max-w-[15ch] font-display text-display font-medium tracking-[-0.03em] md:max-w-[17ch]"
        >
          Tái sinh giá trị từ gáo dừa. <span className="font-light text-mint italic">Nuôi dưỡng tương lai xanh.</span>
        </h1>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-between gap-10 lg:col-span-4">
            <div>
              <p className="max-w-md text-lg leading-relaxed text-cream/80">
                Eco Biochar chuyển hóa phế phụ phẩm nông nghiệp thành than sinh học, hướng đến những giải pháp sử dụng
                tài nguyên hiệu quả hơn cho nông nghiệp.
              </p>
              <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6 lg:flex-col lg:items-start lg:gap-2 xl:flex-row xl:items-center xl:gap-6">
                <ButtonLink href="#san-pham" variant="light">
                  Khám phá sản phẩm
                </ButtonLink>
                <ButtonLink href="#hop-tac" variant="text-light" className="justify-start">
                  Hợp tác cùng chúng tôi
                </ButtonLink>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-6 border-t border-line-light pt-6 text-sm">
              <div>
                <dt className="text-cream/55">Nguyên liệu pilot</dt>
                <dd className="mt-1 font-medium">Gáo dừa</dd>
              </div>
              <div>
                <dt className="text-cream/55">Hai quy cách</dt>
                <dd className="mt-1 font-medium">Chunk · Powder</dd>
              </div>
            </dl>
          </div>

          <figure className="relative lg:col-span-8">
            <CircularMark className="absolute -top-14 -right-10 hidden size-56 text-mint/40 md:block lg:-top-20 lg:-right-16 lg:size-72" />
            <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[4px] bg-forest-deep sm:rounded-t-[220px] lg:rounded-t-[280px]">
              <Image
                src={images.packagingDuo.src}
                width={images.packagingDuo.width}
                height={images.packagingDuo.height}
                alt={images.packagingDuo.alt}
                priority
                sizes="(min-width: 1320px) 860px, (min-width: 1024px) 64vw, 100vw"
                className="aspect-[4/3] w-full object-cover object-center sm:aspect-[1420/847]"
              />
            </div>
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-cream/55">
              <span>Biochar Chunk &amp; Biochar Powder</span>
              <span>{images.packagingDuo.note}</span>
            </figcaption>
          </figure>
        </div>

        <a
          href="#ve-chung-toi"
          className="mt-14 hidden items-center gap-3 text-xs tracking-[0.2em] text-cream/60 uppercase transition-colors hover:text-mint lg:inline-flex"
        >
          <ArrowDown aria-hidden className="size-4 animate-bounce motion-reduce:animate-none" strokeWidth={1.5} />
          Cuộn để khám phá
        </a>
      </div>

      <Marquee
        items={["Tái sinh giá trị", "Xanh hóa nông nghiệp", "Biochar Chunk", "Biochar Powder", "Từ gáo dừa Bến Tre"]}
      />
    </section>
  );
}
