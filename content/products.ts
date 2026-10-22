import { images, type SiteImage } from "./images";

export type ProductId = "chunk" | "powder";

export type Product = {
  id: ProductId;
  index: string;
  name: string;
  vietnameseName: string;
  summary: string;
  description: string;
  suitableFor: string[];
  uses: string[];
  specNote: string;
  image: SiteImage;
  tone: "char" | "kraft";
};

export const products: Product[] = [
  {
    id: "chunk",
    index: "01",
    name: "Biochar Chunk",
    vietnameseName: "Than sinh học dạng cục / mảnh",
    summary: "Giữ cấu trúc xốp tự nhiên của gáo dừa sau nhiệt phân.",
    description:
      "Biochar dạng cục hoặc mảnh dành cho khách hàng cần khối lượng lớn, sử dụng trực tiếp hoặc làm nguyên liệu cho các quá trình chế biến tiếp theo.",
    suitableFor: ["Trang trại", "Hợp tác xã", "Doanh nghiệp nông nghiệp", "Đơn vị chế biến tiếp"],
    uses: [
      "Sử dụng trực tiếp trong hoạt động cải tạo đất",
      "Mua số lượng lớn theo đơn hàng hoặc hợp đồng",
      "Nguyên liệu đầu vào cho quá trình chế biến tiếp theo",
    ],
    specNote: "Quy cách theo nhu cầu — liên hệ để nhận thông số sản phẩm.",
    image: images.packChunk,
    tone: "char",
  },
  {
    id: "powder",
    index: "02",
    name: "Biochar Powder",
    vietnameseName: "Than sinh học dạng nghiền / bột",
    summary: "Kích thước hạt nhỏ, đồng đều hơn, thuận tiện phối trộn.",
    description:
      "Biochar dạng nghiền thuận tiện cho việc phối trộn với đất, phân hữu cơ hoặc giá thể — phù hợp với doanh nghiệp sản xuất đất trồng, giá thể và đơn vị dùng Biochar làm nguyên liệu đầu vào.",
    suitableFor: [
      "Doanh nghiệp phân bón hữu cơ",
      "Doanh nghiệp đất trồng, giá thể",
      "Vườn ươm",
      "Người làm vườn (quy cách nhỏ)",
    ],
    uses: [
      "Phối trộn với đất trồng và giá thể",
      "Nguyên liệu phối trộn cho phân bón hữu cơ",
      "Đóng gói quy cách nhỏ cho người trồng cây tại nhà",
    ],
    specNote: "Quy cách theo nhu cầu — liên hệ để nhận thông số sản phẩm.",
    image: images.packPowder,
    tone: "kraft",
  },
];

export const productById = (id: ProductId) => products.find((p) => p.id === id)!;
