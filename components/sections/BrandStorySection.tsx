import Image from "next/image";
import { images } from "@/content/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const chain = ["Gáo dừa", "Thu gom & sơ chế", "Nhiệt phân", "Biochar", "Phân phối", "Nông nghiệp"];

const points = [
  {
    title: "Một nguồn tài nguyên chưa được khai thác tối ưu",
    body: "Phụ phẩm phát sinh từ sản xuất và chế biến nông sản có thể được chuyển hóa thành sản phẩm có giá trị thay vì chỉ xem là chất thải cần xử lý.",
  },
  {
    title: "Bắt đầu từ gáo dừa",
    body: "Giai đoạn pilot tập trung vào gáo dừa từ các cơ sở chế biến tại Bến Tre và Đồng bằng sông Cửu Long, để kiểm soát tốt đầu vào, quy trình và chất lượng.",
  },
  {
    title: "Nối nguồn nguyên liệu với nơi sử dụng",
    body: "Eco Biochar kết nối thu gom nguyên liệu, sản xuất và ứng dụng thực tế — đưa giá trị của gáo dừa trở lại phục vụ sản xuất nông nghiệp.",
  },
];

export function BrandStorySection() {
  return (
    <section id="ve-chung-toi" aria-labelledby="story-title" className="section-pad bg-cream">
      <div className="container-page">
        <SectionHeading
          id="story-title"
          index="01"
          eyebrow="Câu chuyện Eco Biochar"
          title="Mọi vòng tuần hoàn"
          accent="bắt đầu từ thứ bị bỏ lại."
          intro="Eco Biochar là dự án của Công ty Cổ phần Agrichar Vĩnh Long, sản xuất than sinh học từ phế phụ phẩm nông nghiệp theo định hướng kinh tế tuần hoàn."
        />

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure className="grain relative overflow-hidden rounded-[4px] bg-kraft">
              <Image
                src={images.logoFull.src}
                width={images.logoFull.width}
                height={images.logoFull.height}
                alt={images.logoFull.alt}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="mx-auto w-4/5 max-w-md py-10 mix-blend-multiply"
              />
              <figcaption className="border-t border-char/10 px-6 py-5 text-sm leading-relaxed text-char/75">
                Logo AGRICHAR VĨNH LONG: mầm cây lớn lên từ than sinh học trong lòng gáo dừa, bao quanh bởi vòng tuần
                hoàn.
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-title font-light text-forest-ink">
                Theo số liệu của Tổng cục Thống kê, Việt Nam phát sinh trên{" "}
                <strong className="font-medium text-forest">156,8 triệu tấn</strong> phụ phẩm nông nghiệp năm 2020.
              </p>
              <p className="mt-3 text-xs text-muted">
                Nguồn: Báo Điện tử Chính phủ (2021), dẫn số liệu Tổng cục Thống kê.
              </p>
            </Reveal>

            <ol className="mt-12 border-t border-line">
              {points.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.title}
                  delay={i * 80}
                  className="grid gap-3 border-b border-line py-7 md:grid-cols-[4rem_1fr]"
                >
                  <span className="font-display text-2xl font-light text-earth">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-forest-ink">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        <Reveal className="mt-16 lg:mt-24">
          <p className="eyebrow text-earth">Chuỗi giá trị</p>
          <ol className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3 font-display text-xl text-forest-ink md:text-2xl">
            {chain.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className={i === chain.length - 1 ? "text-forest italic" : ""}>{step}</span>
                {i < chain.length - 1 ? (
                  <span aria-hidden className="text-mint">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
