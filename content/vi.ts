import { contactInfo } from "./contact-info";
import type { Dictionary } from "./types";

/** Vietnamese copy. Sources per item are listed in docs/content-inventory.md. */
export const vi: Dictionary = {
  meta: {
    title: "Agrichar Vĩnh Long — Eco Biochar, than sinh học từ gáo dừa",
    description:
      "Công ty Cổ phần Agrichar Vĩnh Long sản xuất Eco Biochar — than sinh học dạng cục và dạng bột từ gáo dừa Bến Tre và Đồng bằng sông Cửu Long. Tái sinh giá trị – Xanh hóa nông nghiệp.",
    ogAlt: "Bao bì Biochar Chunk và Biochar Powder của AGRICHAR VĨNH LONG",
  },
  common: {
    skipLink: "Bỏ qua điều hướng",
    homeLabel: "Eco Biochar — về đầu trang",
    mainNav: "Điều hướng chính",
    mobileNav: "Điều hướng di động",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    menuDialog: "Menu điều hướng",
    themeToggle: "Chuyển giao diện sáng / tối",
    themeLight: "Sáng",
    themeDark: "Tối",
    languageLabel: "Ngôn ngữ",
    close: "Đóng",
  },
  intro: {
    label: "Giới thiệu Agrichar Vĩnh Long",
    product: "Dòng sản phẩm Eco Biochar",
    cornerTop: "Việt Nam · Than sinh học tuần hoàn",
    cornerBottom: "Gáo dừa → Biochar",
    skip: "Bỏ qua intro",
  },
  brand: {
    company: "Agrichar Vĩnh Long",
    legalName: "Công ty Cổ phần Agrichar Vĩnh Long",
    product: "Eco Biochar",
    slogan: "Tái sinh giá trị – Xanh hóa nông nghiệp",
    description:
      "Agrichar Vĩnh Long phát triển Eco Biochar — than sinh học từ gáo dừa, phế phụ phẩm của các cơ sở chế biến dừa tại Bến Tre và Đồng bằng sông Cửu Long — phục vụ nông nghiệp.",
    logoAlt: "Logo AGRICHAR VĨNH LONG",
    logoNote:
      "Logo AGRICHAR VĨNH LONG: mầm cây lớn lên từ than sinh học trong lòng gáo dừa, bao quanh bởi vòng tuần hoàn.",
  },
  nav: [
    { label: "Sản phẩm", href: "#san-pham" },
    { label: "Ứng dụng", href: "#ung-dung" },
    { label: "Quy trình", href: "#quy-trinh" },
    { label: "Về Eco Biochar", href: "#ve-chung-toi" },
    { label: "Liên hệ", href: "#lien-he" },
  ],
  primaryCta: { label: "Hợp tác cùng chúng tôi", href: "#hop-tac" },
  hero: {
    companyLabel: "Công ty Cổ phần",
    productLine: "Dòng sản phẩm Eco Biochar · Than sinh học từ gáo dừa",
    // \u00a0 keeps "giá trị" and "gáo dừa" from breaking across lines.
    title: "Tái sinh giá\u00a0trị từ gáo\u00a0dừa.",
    accent: "Nuôi dưỡng tương\u00a0lai xanh.",
    body: "Agrichar Vĩnh Long chuyển hóa phế phụ phẩm nông nghiệp thành than sinh học Eco Biochar, hướng đến những giải pháp sử dụng tài nguyên hiệu quả hơn cho nông nghiệp.",
    ctaPrimary: "Khám phá sản phẩm",
    ctaSecondary: "Hợp tác cùng chúng tôi",
    facts: [
      { label: "Nguyên liệu pilot", value: "Gáo dừa" },
      { label: "Hai quy cách", value: "Chunk · Powder" },
    ],
    imageCaption: "Biochar Chunk & Biochar Powder",
    imageNote: "Thiết kế bao bì định hướng",
    scrollCue: "Cuộn để khám phá",
    marquee: [
      "Agrichar Vĩnh Long",
      "Tái sinh giá trị",
      "Xanh hóa nông nghiệp",
      "Biochar Chunk",
      "Biochar Powder",
      "Từ gáo dừa Bến Tre",
    ],
  },
  story: {
    index: "01",
    eyebrow: "Câu chuyện Agrichar Vĩnh Long",
    title: "Mọi vòng tuần hoàn",
    accent: "bắt đầu từ thứ bị bỏ lại.",
    intro:
      "Công ty Cổ phần Agrichar Vĩnh Long phát triển Eco Biochar — than sinh học từ phế phụ phẩm nông nghiệp, theo định hướng kinh tế tuần hoàn.",
    logoCaption:
      "Logo AGRICHAR VĨNH LONG: mầm cây lớn lên từ than sinh học trong lòng gáo dừa, bao quanh bởi vòng tuần hoàn.",
    statPrefix: "Trên",
    statNumber: "156,8",
    statUnit: "triệu tấn",
    statLabel:
      "là tổng khối lượng phụ phẩm nông nghiệp của cả nước năm 2020 theo Tổng cục Thống kê — một nguồn sinh khối có thể được chuyển hóa thay vì bỏ đi.",
    statSource: {
      label: "Nguồn trích dẫn",
      title: "Phụ phẩm nông nghiệp: Nguồn tài nguyên đang bị lãng phí",
      meta: "Báo Điện tử Chính phủ (Chinhphu.vn), 10/09/2021 · Số liệu của Tổng cục Thống kê, năm 2020",
      openHint: "mở bài báo gốc trong tab mới",
      url: "https://baochinhphu.vn/phu-pham-nong-nghiep-nguon-tai-nguyen-dang-bi-lang-phi-102300165.htm",
    },
    points: [
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
    ],
    chainLabel: "Chuỗi giá trị",
    chain: ["Gáo dừa", "Thu gom & sơ chế", "Nhiệt phân", "Biochar", "Phân phối", "Nông nghiệp"],
  },
  products: {
    index: "02",
    eyebrow: "Sản phẩm",
    title: "Hai quy cách.",
    accent: "Một nguồn gáo dừa.",
    intro:
      "Dòng EcoBiochar Base được cung cấp dưới hai dạng để phục vụ các nhu cầu sử dụng khác nhau, từ cải tạo đất trực tiếp đến phối trộn giá thể và phân bón.",
    suitableLabel: "Phù hợp với",
    specNote: "Quy cách theo nhu cầu — liên hệ để nhận thông số sản phẩm.",
    cta: "Tìm hiểu sản phẩm",
    items: [
      {
        id: "chunk",
        index: "01",
        name: "Biochar Chunk",
        localName: "Than sinh học dạng cục / mảnh",
        formatLabel: "Dạng cục",
        summary: "Giữ cấu trúc xốp tự nhiên của gáo dừa sau nhiệt phân.",
        description:
          "Biochar dạng cục hoặc mảnh dành cho khách hàng cần khối lượng lớn, sử dụng trực tiếp hoặc làm nguyên liệu cho các quá trình chế biến tiếp theo.",
        suitableFor: ["Trang trại", "Hợp tác xã", "Doanh nghiệp nông nghiệp", "Đơn vị chế biến tiếp"],
        uses: [
          "Sử dụng trực tiếp trong hoạt động cải tạo đất",
          "Mua số lượng lớn theo đơn hàng hoặc hợp đồng",
          "Nguyên liệu đầu vào cho quá trình chế biến tiếp theo",
        ],
        tone: "char",
      },
      {
        id: "powder",
        index: "02",
        name: "Biochar Powder",
        localName: "Than sinh học dạng nghiền / bột",
        formatLabel: "Dạng bột",
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
        tone: "kraft",
      },
    ],
    imageAlt: {
      chunk: "Thiết kế bao bì Biochar Chunk – than sinh học dạng cục, có ô cửa sổ nhìn thấy những mảnh than đen",
      powder: "Thiết kế bao bì Biochar Powder – than sinh học dạng bột, có ô cửa sổ nhìn thấy than nghiền mịn",
    },
    compare: {
      eyebrow: "So sánh nhanh",
      title: "Chọn quy cách phù hợp",
      caption: "So sánh Biochar Chunk và Biochar Powder",
      criterion: "Tiêu chí",
      rows: [
        {
          label: "Dạng sản phẩm",
          chunk: "Cục / mảnh, giữ cấu trúc xốp của gáo dừa",
          powder: "Nghiền, hạt nhỏ và đồng đều hơn",
        },
        {
          label: "Cách dùng chính",
          chunk: "Dùng trực tiếp hoặc làm nguyên liệu chế biến tiếp",
          powder: "Phối trộn với đất, phân hữu cơ, giá thể",
        },
        {
          label: "Khách hàng phù hợp",
          chunk: "Trang trại, hợp tác xã, doanh nghiệp nông nghiệp",
          powder: "Doanh nghiệp phân bón, giá thể, đất trồng; vườn ươm",
        },
        {
          label: "Hình thức mua",
          chunk: "Số lượng lớn theo đơn hàng hoặc hợp đồng",
          powder: "Hợp đồng cho doanh nghiệp; quy cách nhỏ cho người làm vườn",
        },
        { label: "Thông số kỹ thuật", both: "Đang chuẩn hóa trong giai đoạn pilot — liên hệ để nhận thông số" },
        {
          label: "Nên chọn khi",
          chunk: "Bạn cần dùng trực tiếp với khối lượng lớn",
          powder: "Bạn cần phối trộn đồng đều vào sản phẩm khác",
        },
      ],
      note: "Chưa chắc chọn dạng nào? Gửi nhu cầu — Eco Biochar sẽ tư vấn và có thể đề xuất thử nghiệm.",
    },
    dialog: {
      eyebrow: "EcoBiochar Base",
      usesLabel: "Hướng sử dụng",
      specTitle: "Thông số kỹ thuật:",
      specBody:
        "đang được chuẩn hóa trong giai đoạn thử nghiệm. Quy cách theo nhu cầu — liên hệ để nhận thông số và trao đổi mẫu thử. Hiệu quả sử dụng phụ thuộc vào loại đất, cây trồng và cách phối trộn.",
      cta: "Yêu cầu thông số & mẫu thử",
      prefill: "Tôi muốn nhận thông số kỹ thuật và thông tin mẫu thử cho {product}.",
    },
  },
  process: {
    index: "03",
    eyebrow: "Quy trình tuần hoàn",
    title: "Từ gáo dừa",
    accent: "trở về với đất.",
    intro: "Chín công đoạn từ thu gom gáo dừa đến đóng gói và phân phối, theo quy trình tổng quát của dự án.",
    stages: [
      {
        number: "01",
        title: "Thu gom gáo dừa",
        keyword: "Nguồn nguyên liệu",
        summary:
          "Thu gom phế phụ phẩm gáo dừa từ hộ nông dân, hợp tác xã và cơ sở chế biến dừa tại Bến Tre và Đồng bằng sông Cửu Long.",
        steps: [
          "Chủ động nguồn nguyên liệu đầu vào tương đối ổn định cho sản xuất",
          "Đánh giá sản lượng, độ ẩm, tạp chất và khoảng cách vận chuyển trước khi chọn nhà cung cấp",
          "Định hướng giảm lượng sinh khối bị đốt bỏ",
        ],
      },
      {
        number: "02",
        title: "Phân loại và làm sạch",
        keyword: "Kiểm soát đầu vào",
        summary: "Loại bỏ tạp chất vô cơ như đất, đá, kim loại, rác thải nhựa và các tạp chất có hại.",
        steps: ["Bảo vệ hệ thống máy băm/nghiền", "Giữ độ tinh khiết của sản phẩm Biochar", "Bảo đảm an toàn vận hành"],
      },
      {
        number: "03",
        title: "Băm, nghiền sơ bộ",
        keyword: "Đồng nhất kích thước",
        summary: "Gáo dừa sau khi làm sạch được đưa vào máy băm/nghiền để điều chỉnh về kích thước đồng đều.",
        steps: [
          "Giúp quá trình sấy khô diễn ra nhanh hơn",
          "Giúp nhiệt truyền đều trong lò nhiệt phân",
          "Kích thước nghiền sơ bộ điều chỉnh linh hoạt theo độ ẩm từng lô",
        ],
      },
      {
        number: "04",
        title: "Sấy khô nguyên liệu",
        keyword: "Giảm độ ẩm",
        summary: "Giảm độ ẩm nguyên liệu xuống mức tiêu chuẩn (thường dưới 15–20%) trước khi đưa vào lò nhiệt phân.",
        steps: [
          "Độ ẩm cao làm tốn năng lượng gia nhiệt và giảm hiệu suất nhiệt phân",
          "Định hướng tận dụng nhiệt dư từ hệ thống nhiệt phân để sấy",
          "Giúp tiết kiệm nhiên liệu đầu vào",
        ],
        highlight: "Độ ẩm < 15–20%",
      },
      {
        number: "05",
        title: "Nhiệt phân thiếu oxy",
        keyword: "Công đoạn trung tâm",
        summary:
          "Gáo dừa khô được đưa vào lò kín và gia nhiệt trong điều kiện yếm khí, tạo ra than sinh học giàu carbon cố định.",
        steps: [
          "Gia nhiệt trong khoảng 400–600°C theo phương án của dự án",
          "Định hướng thu hồi dòng khí nhiệt phân (syngas) và đốt tuần hoàn để cấp nhiệt lại cho lò sấy và lò nhiệt phân",
          "Đây là công đoạn quyết định chất lượng Biochar",
        ],
        highlight: "400–600°C",
      },
      {
        number: "06",
        title: "Làm nguội an toàn",
        keyword: "Kiểm soát an toàn",
        summary:
          "Biochar sau khi ra khỏi lò nhiệt phân có nhiệt độ rất cao và dễ tự bốc cháy khi tiếp xúc đột ngột với oxy trong không khí.",
        steps: [
          "Làm nguội có kiểm soát: băng tải giải nhiệt hoặc tưới ẩm nhẹ",
          "Hạn chế nguy cơ cháy âm ỉ, bảo đảm an toàn lao động",
          "Giữ ổn định cấu trúc carbon của sản phẩm",
        ],
      },
      {
        number: "07",
        title: "Nghiền, sàng, phân loại",
        keyword: "Hai quy cách",
        summary: "Biochar thô sau khi làm nguội được nghiền, sàng và phân loại thành hai quy cách thương mại chính.",
        steps: [
          "Dạng cục/mảnh: giữ cấu trúc xốp tự nhiên, dành cho trang trại cải tạo đất",
          "Dạng nghiền: hạt nhỏ, đồng nhất, dành cho doanh nghiệp phân bón, giá thể và đất sạch",
        ],
      },
      {
        number: "08",
        title: "Kiểm định chất lượng (QC)",
        keyword: "Theo từng lô",
        summary:
          "Mỗi lô sản phẩm được kiểm định các chỉ tiêu kỹ thuật cốt lõi trước khi đóng gói (theo định hướng tiêu chuẩn IBI).",
        steps: [
          "Độ ẩm, tỷ lệ carbon cố định, hàm lượng tro",
          "Độ pH, độ xốp, kích thước hạt",
          "Ghi nhận dữ liệu theo lô để bảo đảm đồng đều và tạo niềm tin với khách hàng B2B",
        ],
      },
      {
        number: "09",
        title: "Đóng gói và phân phối",
        keyword: "B2B · Đại lý · Trực tuyến",
        summary: "Sản phẩm đạt chuẩn được đóng gói, lưu kho và phân phối đến khách hàng.",
        steps: [
          "Quy cách nhỏ cho hộ gia đình và người làm vườn",
          "Bao lớn tiêu chuẩn đến bao jumbo cho trang trại, HTX và nhà máy phân bón",
          "Phân phối qua hợp đồng B2B trực tiếp, đại lý và thương mại điện tử",
        ],
      },
    ],
    outputsLabel: "Sản phẩm đầu ra",
    outputs: ["Than sinh học dạng cục/mảnh", "Than sinh học dạng nghiền"],
    disclaimer:
      "Quy trình và thông số được xây dựng trong giai đoạn pilot; nhiệt độ, độ ẩm và các chỉ tiêu chất lượng sẽ tiếp tục được chuẩn hóa qua các lô sản xuất thực tế.",
  },
  applications: {
    index: "04",
    eyebrow: "Ứng dụng",
    title: "Phù hợp từng nhu cầu,",
    accent: "không hứa hẹn chung chung.",
    intro:
      "Hiệu quả của Biochar thay đổi theo loại đất, đặc tính sản phẩm và cách sử dụng. Vì vậy Eco Biochar giới thiệu từng hướng ứng dụng kèm điều kiện cụ thể.",
    tablistLabel: "Hướng ứng dụng",
    formatLabel: "Dạng sản phẩm",
    audienceLabel: "Dành cho",
    noteLabel: "Lưu ý",
    items: [
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
    ],
  },
  why: {
    index: "05",
    eyebrow: "Vì sao Eco Biochar",
    title: "Khác biệt không nằm ở một công nghệ,",
    accent: "mà ở cả chuỗi giá trị.",
    strategyLabel: "Định hướng giai đoạn khởi nghiệp",
    strategy: ["Tập trung", "Kiểm chứng", "Chuẩn hóa", "Mở rộng"],
    strategyBody:
      "Tập trung vào gáo dừa và nhóm khách hàng B2B cụ thể, kiểm chứng chất lượng và mức độ chấp nhận, chuẩn hóa quy trình — rồi mới mở rộng công suất và nguồn nguyên liệu.",
    items: [
      {
        title: "Chuỗi giá trị tuần hoàn",
        body: "Kết nối nguồn phụ phẩm, thu gom và kiểm soát nguyên liệu, sản xuất, phân loại sản phẩm đến hỗ trợ khách hàng trong cùng một mô hình.",
      },
      {
        title: "Tập trung vào gáo dừa",
        body: "Giai đoạn đầu chỉ dùng một nguyên liệu chính để chuẩn hóa quy trình và kiểm soát chất lượng, trước khi xem xét trấu, mùn cưa hay rơm rạ.",
      },
      {
        title: "Hai quy cách cho hai nhu cầu",
        body: "Dạng cục/mảnh và dạng nghiền giúp đáp ứng các yêu cầu khác nhau về kích thước và cách sử dụng thay vì một quy cách cố định.",
      },
      {
        title: "Hướng dẫn và thử nghiệm cùng khách hàng",
        body: "Không chỉ bán theo khối lượng: Eco Biochar định hướng cung cấp mẫu thử, hướng dẫn phối trộn và mô hình thử nghiệm cho khách hàng doanh nghiệp.",
      },
      {
        title: "Sử dụng tài nguyên có trách nhiệm",
        body: "Nghiên cứu tận dụng nhiệt dư và dòng khí nhiệt phân; tiếp cận giá trị lưu giữ carbon một cách thận trọng, khi đủ điều kiện đo lường và chứng nhận.",
      },
    ],
  },
  partnership: {
    index: "06",
    eyebrow: "Hợp tác doanh nghiệp",
    title: "Cùng đối tác kiến tạo",
    accent: "chuỗi giá trị nông nghiệp tuần hoàn.",
    intro:
      "Khách hàng doanh nghiệp là trọng tâm của Eco Biochar. Chúng tôi ưu tiên bắt đầu bằng mẫu thử và mô hình thử nghiệm trước khi trao đổi cung ứng dài hạn.",
    needLabel: "Nhu cầu",
    offerLabel: "Eco Biochar",
    partners: [
      {
        title: "Trang trại & hợp tác xã",
        need: "Giải pháp có thể kiểm chứng trong điều kiện thực tế.",
        offer: "Mẫu thử, hướng dẫn kỹ thuật và phối hợp mô hình thử nghiệm trước khi cung ứng dài hạn.",
      },
      {
        title: "Doanh nghiệp phân bón & giá thể",
        need: "Nguồn nguyên liệu ổn định về quy cách và sản lượng.",
        offer: "Biochar dạng nghiền, mẫu kỹ thuật, thông tin lô sản xuất và trao đổi hợp đồng cung ứng.",
      },
      {
        title: "Đại lý & nhà phân phối",
        need: "Sản phẩm rõ nguồn gốc, dễ tư vấn cho người dùng địa phương.",
        offer: "Thông tin sản phẩm, tài liệu truyền thông, hỗ trợ bán hàng và chính sách theo quy mô đơn hàng.",
      },
      {
        title: "Cơ sở chế biến dừa & nhà cung cấp",
        need: "Phương án tận dụng gáo dừa phát sinh.",
        offer: "Liên kết thu gom, phân loại và tiếp nhận nguyên liệu theo yêu cầu sản xuất.",
      },
    ],
    shortcutsLabel: "Bạn cần trao đổi về",
    shortcuts: [
      { label: "Yêu cầu mẫu thử", type: "sample" },
      { label: "Thông số kỹ thuật", type: "specs" },
      { label: "Cung ứng số lượng lớn", type: "bulk" },
      { label: "Hợp tác phân phối", type: "distribution" },
      { label: "Cung cấp nguyên liệu", type: "feedstock" },
    ],
    cta: "Trao đổi nhu cầu hợp tác",
    disclaimer:
      "Các nhóm đối tác trên là định hướng hợp tác của dự án; trang này không giới thiệu tổ chức nào như đối tác đã ký kết.",
  },
  faq: {
    index: "07",
    eyebrow: "Hỏi đáp",
    title: "Câu hỏi",
    accent: "thường gặp.",
    introBefore: "Chưa thấy câu trả lời bạn cần? Gửi câu hỏi qua",
    introLink: "biểu mẫu liên hệ",
    items: [
      {
        question: "Biochar là gì?",
        answer:
          "Biochar (than sinh học) là vật liệu rắn giàu carbon, tạo ra từ quá trình nhiệt phân sinh khối trong điều kiện hạn chế oxy. Đặc tính của Biochar phụ thuộc vào loại nguyên liệu và điều kiện nhiệt phân.",
      },
      {
        question: "Eco Biochar sử dụng nguyên liệu nào?",
        answer:
          "Trong giai đoạn đầu, Eco Biochar dùng gáo dừa thu gom từ các cơ sở chế biến dừa tại Bến Tre và Đồng bằng sông Cửu Long. Trấu, mùn cưa, rơm rạ là hướng mở rộng có thể xem xét khi quy trình và nguồn cung đã ổn định — hiện chưa phải dòng sản xuất.",
      },
      {
        question: "Biochar Chunk và Biochar Powder khác nhau như thế nào?",
        answer:
          "Biochar Chunk là dạng cục/mảnh, giữ cấu trúc xốp của gáo dừa, phù hợp với khách hàng mua số lượng lớn để sử dụng trực tiếp hoặc chế biến tiếp. Biochar Powder là dạng nghiền, hạt nhỏ và đồng đều hơn, thuận tiện phối trộn với đất, phân hữu cơ hoặc giá thể.",
      },
      {
        question: "Sản phẩm phù hợp với những nhu cầu sử dụng nào?",
        answer:
          "Các hướng sử dụng chính gồm phối trộn đất trồng và giá thể, hỗ trợ sản xuất nông nghiệp tại trang trại – hợp tác xã, và làm nguyên liệu cho phân bón hữu cơ, giá thể. Hiệu quả thay đổi theo loại đất, đặc tính sản phẩm và cách sử dụng, vì vậy Eco Biochar khuyến khích trao đổi nhu cầu cụ thể và thử nghiệm trước khi dùng ở quy mô lớn.",
      },
      {
        question: "Làm thế nào để nhận thông tin kỹ thuật hoặc yêu cầu mẫu thử?",
        answer:
          "Gửi nhu cầu qua biểu mẫu liên hệ trên trang này và chọn “Yêu cầu mẫu thử” hoặc “Thông số kỹ thuật”. Thông số chi tiết và chính sách mẫu thử sẽ được trao đổi theo từng trường hợp.",
      },
      {
        question: "Eco Biochar có hỗ trợ khách hàng doanh nghiệp không?",
        answer:
          "Có. Khách hàng doanh nghiệp là trọng tâm của Eco Biochar. Dự án định hướng hỗ trợ lựa chọn dòng sản phẩm, hướng dẫn phối trộn, phối hợp mô hình thử nghiệm và trao đổi đơn hàng hoặc hợp đồng cung ứng định kỳ.",
      },
    ],
  },
  contact: {
    index: "08",
    eyebrow: "Liên hệ",
    title: "Bắt đầu một vòng tuần hoàn",
    accent: "giá trị mới.",
    body: "Chia sẻ nhu cầu sản phẩm, yêu cầu thông tin kỹ thuật, mẫu thử hoặc cơ hội hợp tác. Đội ngũ Eco Biochar sẽ trao đổi phương án phù hợp với điều kiện sử dụng của bạn.",
    // Email/phone are invented placeholders: see content/contact-info.ts.
    channels: [
      { label: "Đơn vị", value: "Công ty Cổ phần Agrichar Vĩnh Long" },
      { label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
      { label: "Điện thoại", value: contactInfo.phone, href: contactInfo.phoneHref },
      { label: "Khu vực hoạt động", value: "Vĩnh Long · Bến Tre · Đồng bằng sông Cửu Long" },
    ],
    form: {
      fullName: "Họ và tên",
      organization: "Công ty / Tổ chức",
      email: "Email",
      phone: "Số điện thoại",
      customerType: "Bạn là",
      customerTypePlaceholder: "Chọn nhóm khách hàng",
      inquiryType: "Nhu cầu liên hệ",
      inquiryTypePlaceholder: "Chọn nhu cầu",
      message: "Nội dung",
      messagePlaceholder: "Ví dụ: loại cây trồng, quy mô sử dụng, dạng sản phẩm quan tâm…",
      optional: "Không bắt buộc",
      note: "Các trường có dấu * là bắt buộc. Thông tin chỉ dùng để phản hồi yêu cầu của bạn.",
      submit: "Gửi yêu cầu",
      submitting: "Đang gửi…",
      customerTypes: [
        { value: "farm", label: "Trang trại / Hợp tác xã" },
        { value: "manufacturer", label: "Doanh nghiệp phân bón, giá thể, đất trồng" },
        { value: "distributor", label: "Đại lý / Nhà phân phối" },
        { value: "supplier", label: "Cơ sở chế biến dừa / Nhà cung cấp nguyên liệu" },
        { value: "home", label: "Người làm vườn / Cá nhân" },
        { value: "other", label: "Khác" },
      ],
      inquiryTypes: [
        { value: "sample", label: "Yêu cầu mẫu thử" },
        { value: "specs", label: "Thông số kỹ thuật" },
        { value: "bulk", label: "Cung ứng số lượng lớn" },
        { value: "distribution", label: "Hợp tác phân phối" },
        { value: "feedstock", label: "Cung cấp nguyên liệu gáo dừa" },
        { value: "product-chunk", label: "Tìm hiểu Biochar Chunk" },
        { value: "product-powder", label: "Tìm hiểu Biochar Powder" },
        { value: "other", label: "Khác" },
      ],
      errors: {
        fullName: "Vui lòng nhập họ và tên.",
        emailRequired: "Vui lòng nhập email.",
        emailInvalid: "Email chưa đúng định dạng, ví dụ: ten@congty.vn.",
        phone: "Số điện thoại chưa hợp lệ (8–16 chữ số).",
        customerType: "Vui lòng chọn nhóm khách hàng.",
        inquiryType: "Vui lòng chọn nhu cầu liên hệ.",
        message: "Vui lòng mô tả nhu cầu (tối thiểu 10 ký tự).",
      },
      demoTitle: "Đã ghi nhận trên trình duyệt — đây là bản demo.",
      demoBody: "Thông tin chưa được gửi tới Agrichar Vĩnh Long vì trang chưa kết nối hệ thống tiếp nhận.",
      sentTitle: "Cảm ơn bạn! Yêu cầu đã được gửi.",
      sentBody: "Đội ngũ Agrichar Vĩnh Long sẽ phản hồi qua email bạn cung cấp.",
      errorTitle: "Chưa gửi được yêu cầu.",
      errorBody: "Vui lòng thử lại sau ít phút.",
    },
  },
  footer: {
    explore: "Khám phá",
    faqLink: "Hỏi đáp",
    productsHeading: "Sản phẩm",
    partnershipLink: "Hợp tác doanh nghiệp",
    contactHeading: "Liên hệ",
    footerNav: "Liên kết chân trang",
    copyright: "© 2026 Công ty Cổ phần Agrichar Vĩnh Long. Dự án Eco Biochar.",
    team: "Nhóm 5: Quản trị kinh doanh - IUH",
    disclaimer: "Hình ảnh bao bì là thiết kế định hướng; thông tin sản phẩm đang trong giai đoạn thử nghiệm.",
  },
};
