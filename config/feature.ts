export const FEATURES_EN = [
  {
    title: "Instant Image Transformation.",
    description:
      "Select any part of your image, type a prompt, and watch AI Generative Fill generate new content instantly. Add elements, alter scenes, or create new visuals in seconds.",
    img: "/home/5.png",
  },
  {
    title: "Creative Control at Your Fingertips.",
    description:
      "Guide the AI with simple prompts to seamlessly blend new objects into your image. Creativity is made simple—no design skills needed.",
    img: "/home/6.png",
  },
  {
    title: "Creative Control at Your Fingertips.",
    description:
      "Guide the AI with simple prompts to seamlessly blend new objects into your image. Creativity is made simple—no design skills needed.",
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
    description:
      "どのデバイス上でも最適に表示されるように細心のデザインを施したテンプレート。",
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
    description:
      "Completamente gratuito con una riqueza de opciones de personalización.",
    img: "/home/5.png",
  },
  {
    title: "Diseño Responsivo",
    description:
      "Plantillas diseñadas meticulosamente para garantizar una visualización óptima en cualquier dispositivo.",
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
    description:
      "Шаблоны, тщательно разработанные для обеспечения оптимального отображения на любом устройстве.",
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
  FEATURES_RU,
};

export const COLOR_MAP = ["#B587E5", "#F3AE77", "#E88CB3"];

