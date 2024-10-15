import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const OPEN_SOURCE_URL = "https://github.com/weijunext/landing-page-boilerplate";

const baseSiteConfig = {
  name: "AI Generative Fill",
  title: "AI Generative Fill Online | Free Photoshop Image Inpainting Tool",
  description:
    "Experience AI Generative Fill online for free! No software download needed – just a simple,free online solution for image inpainting. Try our AI Generative Fill tool now!",
  canonical: "https://ai-generative-fill.com",
  url: "https://landingpage.weijunext.com",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: "/",
  keywords: [],
  authors: [
    {
      name: "",
      url: "",
      twitter: "",
    },
  ],
  creator: "@kristennn",
  buttonText: "Get Started",
  openSourceURL: "https://github.com/weijunext/landing-page-boilerplate",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "light", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.webp",
    apple: "/logo.webp",
  },
  headerLinks: [],
  footerLinks: [],
  footerProducts: [],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};

