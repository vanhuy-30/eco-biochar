export type Application = {
  id: string;
  label: string;
  title: string;
  description: string;
  format: string;
  audience: string;
  note: string;
};

export const applications: Application[] = [
  {
    id: "dat-gia-the",
    label: "Đất & giá thể",
    title: "Thành phần cho đất trồng và giá thể",
    description:
      "Biochar có thể được phối trộn với đất hoặc giá thể nhằm hỗ trợ khả năng giữ nước và giữ một số chất dinh dưỡng. Cấu trúc xốp của gáo dừa sau nhiệt phân là đặc điểm Eco Biochar hướng đến khai thác.",
    format: "Biochar Powder để phối trộn; Biochar Chunk cho nhu cầu sử dụng trực tiếp",
    audience: "Vườn ươm, nhà vườn, người trồng cây tại nhà",
    note: "Mức độ tác động phụ thuộc vào đặc tính đất, đặc tính Biochar và cách sử dụng.",
  },
  {
    id: "san-xuat-nong-nghiep",
    label: "Sản xuất nông nghiệp",
    title: "Đồng hành cùng trang trại và hợp tác xã",
    description:
      "Với khách hàng sử dụng trực tiếp, Eco Biochar cung cấp sản phẩm cùng hướng dẫn lựa chọn dòng sản phẩm và phối hợp xây dựng mô hình thử nghiệm theo điều kiện đất, cây trồng và mục đích sử dụng.",
    format: "Biochar Chunk hoặc Biochar Powder theo nhu cầu",
    audience: "Trang trại, hợp tác xã, doanh nghiệp sản xuất nông nghiệp",
    note: "Chưa áp dụng một tỷ lệ phối trộn cố định cho mọi loại đất hoặc cây trồng.",
  },
  {
    id: "phan-bon-phoi-tron",
    label: "Phân bón & phối trộn",
    title: "Nguyên liệu đầu vào cho phân bón hữu cơ và giá thể",
    description:
      "Dạng nghiền có kích thước hạt nhỏ và đồng đều hơn, thuận tiện làm thành phần phối trộn cho phân bón hữu cơ, đất sạch thương mại và giá thể ươm giống.",
    format: "Biochar Powder",
    audience: "Doanh nghiệp sản xuất phân bón, giá thể, đất trồng",
    note: "Quy cách hạt, độ ẩm và sản lượng được trao đổi theo từng nhu cầu cụ thể.",
  },
  {
    id: "moi-truong",
    label: "Môi trường (tiềm năng)",
    title: "Hướng ứng dụng môi trường trong dài hạn",
    description:
      "Than sinh học có thể được sử dụng làm vật liệu hấp phụ trong một số ứng dụng xử lý đất và nước, và có khả năng lưu giữ carbon. Đây là các hướng Eco Biochar tiếp tục nghiên cứu.",
    format: "Đang nghiên cứu",
    audience: "Đơn vị xử lý môi trường, đối tác nghiên cứu",
    note: "Tín chỉ carbon là cơ hội tương lai, phụ thuộc phương pháp chứng nhận và hệ thống đo lường – báo cáo – xác minh; chưa phải nguồn doanh thu của dự án.",
  },
];
