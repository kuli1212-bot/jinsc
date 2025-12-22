import { Product, NavItem } from './types';

export const COMPANY_NAME = {
  zh: "金欣全精密工業",
  en: "JINSC Precision"
};

export const COMPANY_FULL_NAME = {
  zh: "金欣全精密工業股份有限公司",
  en: "Jin Xin Quan Precision Industrial Co., Ltd."
};

export const CONTACT_INFO = {
  address: "521-43彰化縣北斗鎮中寮里北勢寮路388號",
  address_en: "No. 388, Beishiliao Rd., Beidou Township, Changhua County 521, Taiwan (R.O.C.)",
  phone: "04-887-6528",
  fax: "04-888-6725",
  email: "Jam@jinsc.com.tw",
  google_maps_embed: "https://maps.google.com.tw/maps/ms?hl=zh-TW&ie=UTF8&msa=0&brcurrent=3,0x34694a80b292a67b:0xf088f91ad191d4df&msid=115297809018358425066.00045e9f28dbbd5152aae&ll=23.892901,120.510921&spn=0.051009,0.068665&z=13&output=embed"
};

export const NAV_LABELS: any = {
  zh: { 
    home: '首頁', company: '公司簡介', products: '產品介紹', download: '目錄下載', contact: '聯絡方式', lang: 'English',
    footer_products: '產品分類', footer_links: '快速連結', footer_contact: '聯絡資訊', footer_copy: '版權所有。',
    download_hint: '縮小圖可點擊放大觀看，或直接下載型錄圖片。',
    list_prefix: '產品如下：'
  },
  en: { 
    home: 'Home', company: 'About', products: 'Products', download: 'Download', contact: 'Contact', lang: '繁體中文',
    footer_products: 'Categories', footer_links: 'Quick Links', footer_contact: 'Contact Info', footer_copy: 'All Rights Reserved.',
    download_hint: 'Click thumbnails to enlarge or download catalog images.',
    list_prefix: 'Products List:'
  }
};

export const COMPANY_SUB_NAV: any = {
  zh: [
    { label: '公司沿革', path: '/company' },
    { label: '經營理念', path: '/company/philosophy' },
    { label: '設備介紹', path: '/company/equipment' },
    { label: '加工項目', path: '/company/processing' },
    { label: '品質認證', path: '/company/iso' },
  ],
  en: [
    { label: 'History', path: '/company' },
    { label: 'Philosophy', path: '/company/philosophy' },
    { label: 'Equipment', path: '/company/equipment' },
    { label: 'Processing', path: '/company/processing' },
    { label: 'Certification', path: '/company/iso' },
  ]
};

export const ABOUT_TEXT: any = {
  zh: {
    history_title: "公司沿革",
    history_content: "本公司創立於西元1978年，專業的製程能力於五金零組件與各式各樣的金屬零組件代工，並且在將近三十年的經驗中，亦製造出精美禮品產品。在不斷的更新與創新中，發展出精美的刮鬍刀禮品組合、與脈衝波穴道按摩系列。在國內與多家飯店合作使用本公司的刮鬍刀禮品組合，國外亦有許多合作銷售。本公司在多年的經驗中，接受各國各式代工，與各式禮品與產品製造，因此在客戶所要求的各種客製化產品皆可為之完成目標，並在ISO驗證之下，所有產品品質必達到最高品質的要求，以完成雙方最佳的績效表現。",
    history_image: "https://duk.tw/iYtF4a.png",
    philosophy_title: "經營理念",
    philosophy_content: "金欣全秉持著「誠信」、「服務」、「創新」、「品質」、「卓越」的經營理念。金欣全在掌握市場需求與技術動向，透過系統化、標準化及制度化的運作體系，在技術力、生產力、行銷力的持續提昇，創新發展、立足世界。",
    philosophy_list: ["誠信", "服務", "創新", "品質", "卓越"],
    processing_title: "加工項目",
    processing_content: "本公司可以處理各種螺絲與螺母的製作，特別是以特殊車件為主，可製作的最大直徑可達42 mm, 最小可達2.5 mm，單料送件最大直徑可達180 mm。本公司的機台為走心式CNC機台可以一次完成前端與後端的加工，省去二次加工的時程，達到更佳績效與品質。",
    processing_items: ["銅製插端", "機械用元件", "特殊螺絲與螺母", "各種硬體元件", "需要特殊處理的元件", "五金製品-花底螺絲與螺母"],
    processing_image: "https://duk.tw/v6HNxq.jpg",
    iso_title: "品質認證",
    iso_subtitle: "ISO 9001 : 2015",
    iso_content: "本公司從事各種螺絲及五金零組件製造及銷售。產品除了供應給國內外相關產業外，由於在價格、品質上具有達到世界市場所需條件的能力，在國際環境競爭上更是外銷到世界各地，始終深得客戶信賴與支持。精益求精、品質用心、客戶安心，為公司多年來之品質政策。",
    iso_policy: "精益求精、品質用心、客戶安心"
  },
  en: {
    history_title: "History",
    history_content: "Founded in 1978, JINSC specializes in precision hardware and metal components OEM. With nearly 30 years of experience, we have also developed exquisite gift products. Through continuous innovation, we have launched premium razor gift sets and pulse wave acupoint massage series. Our razor sets are used by numerous domestic hotels and sold internationally. With decades of experience in global OEM and product manufacturing, we meet all customized requirements under ISO certification standards to achieve peak performance for both parties.",
    history_image: "https://duk.tw/iYtF4a.png",
    philosophy_title: "Philosophy",
    philosophy_content: "JINSC adheres to the business philosophy of 'Integrity', 'Service', 'Innovation', 'Quality', and 'Excellence'. By keeping pace with market demands and technological trends, we operate through a systematic and standardized framework. We continuously enhance our technical, production, and marketing capabilities to innovate and stand strong globally.",
    philosophy_list: ["Integrity", "Service", "Innovation", "Quality", "Excellence"],
    processing_title: "Processing Capabilities",
    processing_content: "We handle various screws and nuts, specializing in custom turned parts. Capabilities include diameters from 2.5mm to 42mm, with single feed items up to 180mm. Our sliding head CNC machines complete front and back processing in a single operation, eliminating secondary processes and ensuring superior quality and efficiency.",
    processing_items: ["Copper Terminals", "Mechanical Components", "Special Screws & Nuts", "Hardware Components", "Special Treatment Parts", "Flower Bottom Fasteners"],
    processing_image: "https://duk.tw/v6HNxq.jpg",
    iso_title: "Quality Certification",
    iso_subtitle: "ISO 9001 : 2015",
    iso_content: "Engaged in manufacturing and selling various fasteners and hardware components. Our products serve domestic and international industries. Due to our competitive pricing and quality that meets global market standards, we export worldwide and have earned long-standing customer trust. 'Excellence, Quality Diligence, Customer Peace of Mind' has been our quality policy for years.",
    iso_policy: "Excellence, Quality Diligence, Customer Peace of Mind"
  }
};

export const EQUIPMENT_LIST = [
  { name: '走心式CNC自動車床', brand: 'Sliding Head CNC', count: 'Precision Auto Lathe', description: '具備高精度、高穩定性的加工能力。', image: 'https://duk.tw/VhIomx.png' },
  { name: '傳統車床', brand: 'Traditional Lathe', count: 'Manual Lathe', description: '用於產品打樣、少量多樣開發。', image: 'https://duk.tw/5qImQJ.png' },
  { name: 'CNC自動車床', brand: 'CNC Auto Lathe', count: 'Automated Production', description: '高效率自動化量產設備。', image: 'https://duk.tw/3u9iGB.png' }
];

export const DOWNLOAD_RESOURCES = [
  // 五金零組件
  { id: 'hw-1', title_zh: '五金型錄 P1', title_en: 'Hardware P1', category: 'hardware', image: 'https://duk.tw/uWgs13.jpg' },
  { id: 'hw-2', title_zh: '五金型錄 P2', title_en: 'Hardware P2', category: 'hardware', image: 'https://duk.tw/QHKY0I.jpg' },
  { id: 'hw-3', title_zh: '五金型錄 P3', title_en: 'Hardware P3', category: 'hardware', image: 'https://duk.tw/TJlsOz.jpg' },
  // 刮鬍刀
  { id: 'rz-1', title_zh: '刮鬍刀目錄 P1', title_en: 'Razor P1', category: 'razors', image: 'https://duk.tw/2onq0G.jpg' },
  { id: 'rz-2', title_zh: '刮鬍刀目錄 P2', title_en: 'Razor P2', category: 'razors', image: 'https://duk.tw/LcVwgD.jpg' },
  { id: 'rz-3', title_zh: '刮鬍刀目錄 P3', category: 'razors', image: 'https://duk.tw/W0yDW2.jpg' },
  { id: 'rz-4', title_zh: '刮鬍刀目錄 P4', category: 'razors', image: 'https://duk.tw/ETWnaZ.jpg' },
  { id: 'rz-5', title_zh: '刮鬍刀目錄 P5', category: 'razors', image: 'https://duk.tw/ycm9vx.jpg' },
  { id: 'rz-6', title_zh: '刮鬍刀目錄 P6', category: 'razors', image: 'https://duk.tw/F07Yc4.jpg' },
  // 禮品
  { id: 'gf-1', title_zh: '禮品手冊 P1', title_en: 'Gift P1', category: 'gifts', image: 'https://duk.tw/2fnvxE.jpg' },
  { id: 'gf-2', title_zh: '禮品手冊 P2', title_en: 'Gift P2', category: 'gifts', image: 'https://duk.tw/mfdveD.jpg' },
  { id: 'gf-3', title_zh: '禮品手冊 P3', title_en: 'Gift P3', category: 'gifts', image: 'https://duk.tw/psCx7y.jpg' },
];

export const PRODUCT_CATEGORIES: any = {
  zh: [
    { 
      label: '五金零組件', 
      path: '/products/hardware', 
      id: 'hardware', 
      description: '本公司設有最新CNC走心式機台，可一次完成高度的前後混和加工，具有高生產力與低成本的績效品質，歡迎隨時詢問與估價。',
      items: ["銅製插端", "機械用元件", "特殊螺絲與螺母", "各種硬體元件", "需要特殊處理的元件", "五金製品-花底螺絲與螺母"],
      featuredImage: "https://duk.tw/v6HNxq.jpg"
    },
    { 
      label: '刮鬍刀', 
      path: '/products/razors', 
      id: 'razors', 
      description: '所有產品皆可依照客人喜好更改與設計，材質都可依需求替換。請點擊圖面瞭解細部規格，歡迎詢問報價。' 
    },
    { 
      label: '禮品', 
      path: '/products/gifts', 
      id: 'gifts', 
      description: '所有產品皆可依照客人喜好更改與設計，材質都可依需求替換。' 
    },
  ],
  en: [
    { 
      label: 'Hardware Parts', 
      path: '/products/hardware', 
      id: 'hardware', 
      description: 'Equipped with latest CNC machines for high-efficiency front and back processing with cost-effective solutions.',
      items: ["Copper Terminals", "Mechanical Components", "Special Screws & Nuts", "Hardware Components", "Special Treatment Parts", "Flower Bottom Fasteners"],
      featuredImage: "https://duk.tw/v6HNxq.jpg"
    },
    { 
      label: 'Razors', 
      path: '/products/razors', 
      id: 'razors', 
      description: 'Fully customizable designs and premium materials. Click on images for detailed specifications and quotes.' 
    },
    { 
      label: 'Gifts', 
      path: '/products/gifts', 
      id: 'gifts', 
      description: 'Premium metal gifts, stationery sets, and corporate gifts, all customizable.' 
    },
  ]
};

export const HOME_TEXT: any = {
  zh: {
    hero_title_1: "精密製造",
    hero_title_2: "卓越傳承",
    description: "本公司成立於1978年，擁有45年的代工製造經驗，專注於五金零件、金屬零件、電子零件、腳踏車零件等客製化產品的設計、生產和品質控制。",
    feature_title: "網站功能導覽",
    feature_subtitle: "快速連結至本公司各項主要服務與資訊。"
  },
  en: {
    hero_title_1: "Precision Mfg",
    hero_title_2: "Excellence",
    description: "Founded in 1978, JINSC has over 45 years of expertise in hardware, metal, and electronic components manufacturing with strict quality control.",
    feature_title: "Navigation",
    feature_subtitle: "Quick links to our primary services and information."
  }
};

export const CONTACT_PAGE_TEXT: any = {
  zh: {
    title: "聯絡我們",
    subtitle: "隨時與我們聯繫以獲取專業諮詢",
    address_label: "公司地址",
    phone_label: "電話",
    fax_label: "傳真",
    email_label: "電子信箱",
    consultation: "立即諮詢"
  },
  en: {
    title: "Contact Us",
    subtitle: "Get in touch for professional consultation",
    address_label: "Address",
    phone_label: "Phone",
    fax_label: "Fax",
    email_label: "Email",
    consultation: "Inquiry Now"
  }
};

export const MAIN_FEATURES: any = {
  zh: [
    { id: 'company', title: '公司簡介', subtitle: 'About Profile', path: '/company', description: '創立於西元1978年，具備專業的五金零組件與金屬代工能力。', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
    { id: 'products', title: '產品介紹', subtitle: 'Products', path: '/products', description: '提供刮鬍刀禮品組、筆座、筆組及精密電子五金零件。', image: 'https://duk.tw/iYtF4a.png' },
    { id: 'download', title: '目錄下載', subtitle: 'Download', path: '/download', description: '下載最新產品規格與代工製程能力手冊 PDF。', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800' },
    { id: 'contact', title: '聯絡方式', subtitle: 'Contact', path: '/contact', description: '歡迎來電或 E-mail 諮詢您的代工與採購需求處理。', image: 'https://images.unsplash.com/photo-1423666639041-f142fcb93370?auto=format&fit=crop&q=80&w=800' }
  ],
  en: [
    { id: 'company', title: 'About JINSC', subtitle: 'Company Profile', path: '/company', description: 'Founded in 1978, specializing in precision hardware and metal OEM services.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
    { id: 'products', title: 'Our Products', subtitle: 'Portfolio', path: '/products', description: 'High-quality razors, gift sets, and precision hardware parts.', image: 'https://duk.tw/iYtF4a.png' },
    { id: 'download', title: 'Download', subtitle: 'Catalog', path: '/download', description: 'Access our latest product catalogs and technical specifications.', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800' },
    { id: 'contact', title: 'Connect', subtitle: 'Contact Us', path: '/contact', description: 'Reach out for quotes, technical consultation, or partnership inquiries.', image: 'https://images.unsplash.com/photo-1423666639041-f142fcb93370?auto=format&fit=crop&q=80&w=800' }
  ]
};

export const PRODUCTS: Product[] = [
  // Razors
  { id: 'rz-01', name: 'TC-001', category_id: 'razors', description_zh: '人體工學手柄，專業拋光工法。', description_en: 'Ergonomic handle, professional polishing.', image: 'https://duk.tw/DZcvhG.jpg', specs_zh: ['顏色：銀色', '毛刷：單色毛刷', '刀頭：通用刀頭'], specs_en: ['Color: Silver', 'Brush: Single Color', 'Head: Universal'] },
  { id: 'rz-04', name: 'TC-004', category_id: 'razors', description_zh: '深邃黑質感，防滑手柄設計。', description_en: 'Matte black texture, non-slip design.', image: 'https://duk.tw/7ipKus.jpg', specs_zh: ['顏色：黑色', '毛刷：單色毛刷', '刀頭：通用刀頭'], specs_en: ['Color: Black', 'Brush: Single Color', 'Head: Universal'] },
  { id: 'rz-55', name: 'TC-055', category_id: 'razors', description_zh: '搭配頂級獾毛毛刷，極致刮鬍體驗。', description_en: 'Top-grade badger brush for ultimate shaving.', image: 'https://duk.tw/gIQHgq.jpg', specs_zh: ['顏色：銀色', '毛刷：獾毛毛刷', '刀頭：通用刀頭'], specs_en: ['Color: Silver', 'Brush: Badger', 'Head: Universal'] },
  { id: 'rz-74', name: 'TC-074', category_id: 'razors', description_zh: '相容吉利刀頭，黑色經典款。', description_en: 'Gillette compatible, black classic.', image: 'https://duk.tw/ItKY8g.jpg', specs_zh: ['顏色：黑色', '毛刷：獾毛毛刷', '刀頭：吉利刀頭'], specs_en: ['Color: Black', 'Brush: Badger', 'Head: Gillette'] },
  { id: 'rz-681', name: 'TC-681', category_id: 'razors', description_zh: '時尚銀色手柄，雙色刷毛設計。', description_en: 'Stylish silver handle, dual-color brush.', image: 'https://duk.tw/5ZK45d.jpg', specs_zh: ['顏色：銀色', '毛刷：雙色毛刷', '刀頭：通用刀頭'], specs_en: ['Color: Silver', 'Brush: Dual Color', 'Head: Universal'] },
  { id: 'rz-714', name: 'TC-714', category_id: 'razors', description_zh: '霧黑質感，簡約而不簡單。', description_en: 'Matte black, minimal yet elegant.', image: 'https://duk.tw/TfgI3B.jpg', specs_zh: ['顏色：黑色', '毛刷：單色毛刷', '刀頭：通用刀頭'], specs_en: ['Color: Black', 'Brush: Single Color', 'Head: Universal'] },
  { id: 'rz-733', name: 'TC-733', category_id: 'razors', description_zh: '熱情紅亮面塗裝，獨特品味。', description_en: 'Vibrant red gloss, unique taste.', image: 'https://duk.tw/hjlZIr.jpg', specs_zh: ['顏色：紅色', '毛刷：獾毛毛刷', '刀頭：通用刀頭'], specs_en: ['Color: Red', 'Brush: Badger', 'Head: Universal'] },

  // Gifts
  { id: 'gf-01', name: '刮鬍刀禮品組', category_id: 'gifts', name_en: 'Razor Gift Set', description_zh: '精品等級禮盒包裝，適合作為高階企業贈禮。', description_en: 'Premium gift box for corporate gifting.', image: 'https://duk.tw/zyZtyl.jpg', specs_zh: ['客製化設計', '高質感禮盒裝'], specs_en: ['Customizable', 'High Quality Box'] },
  { id: 'gf-02', name: '筆座', category_id: 'gifts', name_en: 'Pen Stand', description_zh: '金屬車件加工，鏡面拋光處理。', description_en: 'Metal machined parts, mirror polished.', image: 'https://duk.tw/wofbzB.jpg', specs_zh: ['材質：黃銅/鋁合金', '鏡面拋光'], specs_en: ['Material: Brass/Alu', 'Mirror Polished'] },
  { id: 'gf-03', name: '筆組 - 銀色款', category_id: 'gifts', name_en: 'Pen Set - Silver', description_zh: '流暢書寫體驗，金屬質感握柄。', description_en: 'Smooth writing, metallic grip.', image: 'https://duk.tw/f6CIlb.jpg', specs_zh: ['金屬筆身', '可更換替芯'], specs_en: ['Metal Body', 'Refillable'] },
  { id: 'gf-04', name: '筆組 - 黑色款', category_id: 'gifts', name_en: 'Pen Set - Black', description_zh: '經典黑色商務筆組。', description_en: 'Classic black business pen set.', image: 'https://duk.tw/GCoten.jpg', specs_zh: ['商務禮贈首選', '質感烤漆'], specs_en: ['Best for Gifts', 'Texture Paint'] },
  { id: 'gf-05', name: '鏡面組 - A款', category_id: 'gifts', name_en: 'Mirror Set - A', description_zh: '高品質鏡面反射，搭配精美金屬框。', description_en: 'High quality reflection with metal frame.', image: 'https://duk.tw/lJf9XB.jpg', specs_zh: ['鏡面加工', '耐用度高'], specs_en: ['Mirror Process', 'High Durability'] },
  { id: 'gf-06', name: '鏡面組 - B款', category_id: 'gifts', name_en: 'Mirror Set - B', description_zh: '簡約圓潤設計，隨身精品。', description_en: 'Rounded minimal design, portable luxury.', image: 'https://duk.tw/LBUdx6.jpg', specs_zh: ['人體工學握把', '精品配件'], specs_en: ['Ergonomic Grip', 'Luxury Accessory'] }
];
