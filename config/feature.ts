

export const FEATURES_EN = [
  {
    title: "Words Reimagined as Visual Symphony.",
    description: "Give life to your favorite quotes, transform any text into a landscape of visual wonder. Let Illusion Diffusion turn your words into a masterpiece.",
    img: "/home/5.png",
  },
  {
    title: "Brand Identities Redrawn by Imagination.",
    description:
      "Redefine your logo by blending it with the aesthetics of nature and art. Illusion Diffusion invites you to envision your brand like never before.",
    img: "/home/6.png",
  },
];

export const FEATURES_ZH = [
  {
    title: "开源优势",
    description: "完全免费，提供丰富的自定义选项。",
    img: "/home/5.png",
  },
  {
    title: "响应式设计",
    description: "精心设计的模板，确保在任何设备上都能优化显示。",
    img: "/home/5.png",
  },
];

export const FEATURES_JA = [
  {
    title: "オープンソースの利点",
    description: "完全無料で、豊富なカスタマイズオプションを提供。",
    img: "/home/5.png",
  },
  {
    title: "レスポンシブデザイン",
    description: "どのデバイス上でも最適に表示されるように細心のデザインを施したテンプレート。",
    img: "/home/5.png",
  },
];

export const FEATURES_AR = [
  {
    title: "ميزة المصدر المفتوح",
    description: "مجانية بالكامل مع ثروة من خيارات التخصيص.",
    img: "/home/5.png",
  },
  {
    title: "تصميم متجاوب",
    description: "تم تصميم القوالب بعناية لضمان عرض مثالي على أي جهاز.",
    img: "/home/5.png",
  },
];

export const FEATURES_ES = [
  {
    title: "Ventaja del Código Abierto",
    description: "Completamente gratuito con una riqueza de opciones de personalización.",
    img: "/home/5.png",
  },
  {
    title: "Diseño Responsivo",
    description: "Plantillas diseñadas meticulosamente para garantizar una visualización óptima en cualquier dispositivo.",
    img: "/home/5.png",
  },
];

export const FEATURES_RU = [
  {
    title: "Преимущество Открытого Исходного Кода",
    description: "Полностью бесплатно с широкими возможностями настройки.",
    img: "/home/5.png",
  },
  {
    title: "Адаптивный Дизайн",
    description: "Шаблоны, тщательно разработанные для обеспечения оптимального отображения на любом устройстве.",
    img: "/home/5.png",
  },
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    description: string;
    img: string;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
  FEATURES_ZH,
  FEATURES_JA,
  FEATURES_AR,
  FEATURES_ES,
  FEATURES_RU
}