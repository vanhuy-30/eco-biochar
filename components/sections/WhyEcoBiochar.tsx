import Image from "next/image";
import { differentiators } from "@/content/why";
import { images } from "@/content/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const strategy = ["Tập trung", "Kiểm chứng", "Chuẩn hóa", "Mở rộng"];

export function WhyEcoBiochar() {
  return (
    <section id="khac-biet" aria-labelledby="why-title" className="section-pad bg-paper">
      <div className="container-page">
        <SectionHeading
          id="why-title"
          index="05"
          eyebrow="Vì sao Eco Biochar"
          title="Khác biệt không nằm ở một công nghệ,"
          accent="mà ở cả chuỗi giá trị."
        />

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="grain sticky top-28 overflow-hidden rounded-[4px] bg-char p-8 text-cream md:p-10">
              <Image
                src={images.logoMark.src}
                width={images.logoMark.width}
                height={images.logoMark.height}
                alt=""
                className="h-20 w-auto"
              />
              <p className="eyebrow mt-10 text-mint">Định hướng giai đoạn khởi nghiệp</p>
              <ol className="mt-6 space-y-1">
                {strategy.map((s, i) => (
                  <li key={s} className="flex items-baseline gap-4 font-display text-3xl font-light md:text-4xl">
                    <span className="text-sm font-sans font-semibold text-coconut">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={i === strategy.length - 1 ? "text-mint italic" : ""}>{s}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm leading-relaxed text-cream/60">
                Tập trung vào gáo dừa và nhóm khách hàng B2B cụ thể, kiểm chứng chất lượng và mức độ chấp nhận, chuẩn
                hóa quy trình — rồi mới mở rộng công suất và nguồn nguyên liệu.
              </p>
            </Reveal>
          </div>

          <ol className="border-t border-line lg:col-span-7">
            {differentiators.map((d, i) => (
              <Reveal
                as="li"
                key={d.title}
                delay={i * 60}
                className="grid gap-4 border-b border-line py-9 md:grid-cols-[6rem_1fr] md:py-11"
              >
                <span className="font-display text-5xl leading-none font-light text-forest/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium text-forest-ink">{d.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
