import { inquiryShortcuts, partnerTypes } from "@/content/partners";
import { ButtonLink } from "@/components/ui/Button";
import { CircularMark } from "@/components/ui/CircularMark";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InquiryChip } from "./InquiryChip";

export function PartnershipSection() {
  return (
    <section
      id="hop-tac"
      aria-labelledby="partnership-title"
      className="grain section-pad relative overflow-hidden bg-forest text-cream"
    >
      <CircularMark className="pointer-events-none absolute -right-40 -bottom-40 size-[36rem] text-cream/10" />
      <div className="container-page relative">
        <SectionHeading
          id="partnership-title"
          index="06"
          eyebrow="Hợp tác doanh nghiệp"
          title="Cùng đối tác kiến tạo"
          accent="chuỗi giá trị nông nghiệp tuần hoàn."
          intro="Khách hàng doanh nghiệp là trọng tâm của Eco Biochar. Chúng tôi ưu tiên bắt đầu bằng mẫu thử và mô hình thử nghiệm trước khi trao đổi cung ứng dài hạn."
          tone="dark"
        />

        <ul className="mt-16 grid border-t border-line-light md:grid-cols-2 lg:mt-20">
          {partnerTypes.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 80}
              className={`border-b border-line-light py-9 md:px-8 md:py-11 ${i % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}
            >
              <h3 className="font-display text-2xl font-medium">{p.title}</h3>
              <p className="mt-4 text-sm text-cream/55">
                <span className="eyebrow mr-2 text-mint">Nhu cầu</span>
                {p.need}
              </p>
              <p className="mt-3 leading-relaxed text-cream/85">
                <span className="eyebrow mr-2 text-coconut">Eco Biochar</span>
                {p.offer}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-cream/60">Bạn cần trao đổi về</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {inquiryShortcuts.map((s) => (
                <li key={s.type}>
                  <InquiryChip label={s.label} type={s.type} />
                </li>
              ))}
            </ul>
          </div>
          <ButtonLink href="#lien-he" variant="light" className="shrink-0">
            Trao đổi nhu cầu hợp tác
          </ButtonLink>
        </Reveal>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-cream/50">
          Các nhóm đối tác trên là định hướng hợp tác của dự án; trang này không giới thiệu tổ chức nào như đối tác đã
          ký kết.
        </p>
      </div>
    </section>
  );
}
