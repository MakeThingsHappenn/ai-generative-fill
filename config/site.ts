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
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: "repo", href: OPEN_SOURCE_URL, icon: BsGithub },
    {
      name: "twitter",
      href: "https://twitter.com/weijunext",
      icon: BsTwitterX,
    },
    {
      name: "buyMeCoffee",
      href: "https://www.buymeacoffee.com/weijunext",
      icon: SiBuymeacoffee,
    },
  ],
  footerLinks: [
    { name: "email", href: "mailto:weijunext@gmail.com", icon: MdEmail },
    {
      name: "twitter",
      href: "https://twitter.com/weijunext",
      icon: BsTwitterX,
    },
    { name: "github", href: "https://github.com/weijunext/", icon: BsGithub },
    {
      name: "buyMeCoffee",
      href: "https://www.buymeacoffee.com/weijunext",
      icon: SiBuymeacoffee,
    },
    {
      name: "juejin",
      href: "https://juejin.cn/user/26044008768029",
      icon: SiJuejin,
    },
    {
      name: "weChat",
      href: "https://weijunext.com/make-a-friend",
      icon: BsWechat,
    },
  ],
  footerProducts: [
    { url: "https://weijunext.com/", name: "J实验室" },
    { url: "https://smartexcel.cc/", name: "Smart Excel" },
    {
      url: "https://landingpage.weijunext.com/",
      name: "Landing Page Boilerplate",
    },
    { url: "https://nextjs.weijunext.com/", name: "Next.js Practice" },
    { url: "https://starter.weijunext.com/", name: "Next.js Starter" },
    { url: "https://githubbio.com", name: "Github Bio Generator" },
    {
      url: "https://github.com/weijunext/indie-hacker-tools",
      name: "Indie Hacker Tools",
    },
  ],
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

