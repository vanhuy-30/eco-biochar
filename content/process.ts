export type ProcessStage = {
  number: string;
  title: string;
  keyword: string;
  summary: string;
  steps: string[];
  highlight?: string;
};

/** Six stages grouping the nine production steps described in the report (mục 2.3). */
export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "Thu gom gáo dừa",
    keyword: "Nguồn nguyên liệu",
    summary:
      "Gáo dừa được thu gom từ cơ sở chế biến dừa, hợp tác xã và nông hộ tại Bến Tre và Đồng bằng sông Cửu Long.",
    steps: [
      "Liên kết nguồn cung theo cụm vùng nguyên liệu",
      "Đánh giá sản lượng, độ ẩm, tạp chất và khoảng cách vận chuyển",
    ],
  },
  {
    number: "02",
    title: "Sơ chế nguyên liệu",
    keyword: "Phân loại · Băm · Sấy",
    summary: "Nguyên liệu được phân loại, làm sạch, băm sơ bộ cho đồng đều và sấy giảm độ ẩm trước khi nhiệt phân.",
    steps: [
      "Loại bỏ đất, đá, kim loại và tạp chất không phù hợp",
      "Băm / nghiền sơ bộ để kích thước đồng đều hơn",
      "Sấy khô, định hướng tận dụng nhiệt dư của hệ thống",
    ],
  },
  {
    number: "03",
    title: "Nhiệt phân hạn chế oxy",
    keyword: "Công đoạn trung tâm",
    summary:
      "Gáo dừa khô được gia nhiệt trong lò kín, điều kiện hạn chế oxy, chuyển hóa thành vật liệu rắn giàu carbon.",
    steps: [
      "Gia nhiệt trong khoảng 400–600°C theo phương án của dự án",
      "Định hướng thu hồi dòng khí nhiệt phân để cấp nhiệt lại cho hệ thống",
      "Làm nguội có kiểm soát để bảo đảm an toàn",
    ],
    highlight: "400–600°C",
  },
  {
    number: "04",
    title: "Xử lý và phân loại",
    keyword: "Nghiền · Sàng · QC",
    summary: "Biochar được nghiền, sàng thành hai quy cách và kiểm tra chất lượng theo từng lô.",
    steps: [
      "Tạo hai quy cách: dạng cục/mảnh và dạng nghiền",
      "Kiểm tra theo lô: độ ẩm, carbon cố định, tro, pH, độ xốp, kích thước hạt",
      "Ghi nhận dữ liệu lô để so sánh và truy xuất",
    ],
  },
  {
    number: "05",
    title: "Đóng gói và phân phối",
    keyword: "B2B · Đại lý · Trực tuyến",
    summary: "Đóng gói theo quy cách cho khách hàng doanh nghiệp và người dùng cá nhân, phân phối qua nhiều kênh.",
    steps: [
      "Quy cách lớn cho trang trại, HTX và nhà máy",
      "Quy cách nhỏ cho người làm vườn",
      "Bán trực tiếp B2B, qua đại lý và kênh trực tuyến",
    ],
  },
  {
    number: "06",
    title: "Ứng dụng trong nông nghiệp",
    keyword: "Thử nghiệm · Phản hồi",
    summary: "Sản phẩm trở lại phục vụ sản xuất nông nghiệp; phản hồi thực tế được dùng để cải tiến sản phẩm.",
    steps: [
      "Hướng dẫn sử dụng và mô hình thử nghiệm với khách hàng B2B",
      "Thu thập phản hồi về quy cách, phối trộn và mức độ phù hợp",
      "Cải tiến sản phẩm theo dữ liệu thực tế",
    ],
  },
];
