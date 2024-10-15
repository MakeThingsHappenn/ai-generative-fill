export const FOOTER_LINKS_EN = [
  {
    title: "Help Center",
    links: [
      {
        title: "Contact Us",
        href: "mailto:team@ai-generative-fill.com",
      },
    ],
  },
  {
    title: "Products",
    links: [],
  },
  {
    title: "Friends",
    links: [],
  },
  {
    title: "Credits",
    links: [
      {
        title: "Landing page boilerplate",
        href: "https://landingpage.weijunext.com/",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Privacy",
        href: "/privacy",
        internal: true,
      },
      {
        title: "Terms of Service",
        href: "/tos",
        internal: true,
      },
    ],
  },
];

export const FOOTER_LINKS_ZH = [
  {
    title: "Help Center",
    links: [
      {
        title: "Contact Us",
        href: "mailto:team@ai-generative-fill.com",
      },
    ],
  },
  {
    title: "Products",
    links: [],
  },
  {
    title: "Friends",
    links: [],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Privacy",
        href: "/privacy",
        internal: true,
      },
      {
        title: "Terms of Service",
        href: "/tos",
        internal: true,
      },
    ],
  },
];

export const FOOTER_LINKS_JA = [
  {
    title: "Help Center",
    links: [
      {
        title: "Contact Us",
        href: "mailto:team@ai-generative-fill.com",
      },
    ],
  },
  {
    title: "Products",
    links: [],
  },
  {
    title: "Friends",
    links: [],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Privacy",
        href: "/privacy",
        internal: true,
      },
      {
        title: "Terms of Service",
        href: "/tos",
        internal: true,
      },
    ],
  },
];

export const FOOTER_LINKS_AR = [
  {
    title: "Help Center",
    links: [
      {
        title: "Contact Us",
        href: "mailto:team@ai-generative-fill.com",
      },
    ],
  },
  {
    title: "Products",
    links: [],
  },
  {
    title: "Friends",
    links: [],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Privacy",
        href: "/privacy",
        internal: true,
      },
      {
        title: "Terms of Service",
        href: "/tos",
        internal: true,
      },
    ],
  },
];

export const FOOTER_LINKS_ES = [
  {
    title: "Help Center",
    links: [
      {
        title: "Contact Us",
        href: "mailto:team@ai-generative-fill.com",
      },
    ],
  },
  {
    title: "Products",
    links: [],
  },
  {
    title: "Friends",
    links: [],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Privacy",
        href: "/privacy",
        internal: true,
      },
      {
        title: "Terms of Service",
        href: "/tos",
        internal: true,
      },
    ],
  },
];

export const FOOTER_LINKS_RU = [
  {
    title: "Help Center",
    links: [
      {
        title: "Contact Us",
        href: "mailto:team@ai-generative-fill.com",
      },
    ],
  },
  {
    title: "Products",
    links: [],
  },
  {
    title: "Friends",
    links: [],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Privacy",
        href: "/privacy",
        internal: true,
      },
      {
        title: "Terms of Service",
        href: "/tos",
        internal: true,
      },
    ],
  },
];

interface FooterLinkCollection {
  [key: `FOOTER_LINKS_${string}`]: {
    title: string;
    links: any[];
  }[];
}

export const ALL_FOOTER_LINKS: FooterLinkCollection = {
  FOOTER_LINKS_EN,
  FOOTER_LINKS_ZH,
  FOOTER_LINKS_JA,
  FOOTER_LINKS_AR,
  FOOTER_LINKS_ES,
  FOOTER_LINKS_RU,
};

