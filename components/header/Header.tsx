"use client";
import { siteConfig } from "@/config/site";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import "./Header.css";

const links = [
  {
    label: 'How to Use',
    href: '#HowToUse'
  },
  {
    label: 'Playground',
    href: '/Playground'
  },
  {
    label: 'Pricing',
    href: '#Pricing'
  },
  {
    label: 'FAQ',
    href: '#FAQ'
  },
  // {
  //   label: "Features",
  //   href: "#Features",
  // },
  // {
  //   label: "Pricing",
  //   href: "#Pricing",
  // },
  // {
  //   label: "Wall of Love",
  //   href: "#WallOfLove",
  // },
  // {
  //   label: "FAQ",
  //   href: "#FAQ",
  // },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="py-10 mx-auto px-4 sm:px-6 lg:px-8 bg-headerBackground h-4">
      <nav className="container flex items-center justify-between px-8 mx-auto h-full max-2xl:w-full" >
        <div className="flex lg:flex-1">
          <a className="flex items-center gap-2 shrink-0 " title={siteConfig.name} href="/">
            <img src="/logo.png" alt="Illusion Diffusion logo" width="32" height="32" decoding="async" data-nimg="1" className="w-10 sm:w-12" />
            <span className="font-extrabold text-xl sm:text-2xl text-logo">{siteConfig.name}</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"></button>
          <span className="sr-only">Open main menu</span>
        </div>
        <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
          <a className="link link-hover" title="How To Use" href="/#HowToUse">How To Use</a>
          <a className="link link-hover" title="Playground" href="/playground">Playground</a>
          <a className="link link-hover" title="Pricing" href="/#pricing">Pricing</a>
          <a className="link link-hover" title="FAQ" href="/#faq">FAQ</a>
        </div>
        <div className="hidden lg:flex lg:justify-end lg:flex-1">
          <button className="btn btn-primary">{siteConfig.buttonText}</button>
        </div>

        {/* 小屏折叠菜单 */}
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full h-full bg-headerBackground z-50">
              <div className="p-5 bg-background rounded bg-headerBackground">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Landing Page Boilerplate"
                      title="Landing Page Boilerplate"
                      className="inline-flex items-center"
                    >
                      {/* <Image
                        alt={siteConfig.name}
                        src="/logo.svg"
                        className="w-8 h-8"
                        width={32}
                        height={32}
                      /> */}
                      <span className="font-extrabold text-xl sm:text-2xl text-pink-500">{siteConfig.name}</span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="tracking-wide transition-colors duration-200 font-norma"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <CgClose />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          aria-label={link.label}
                          key={link.label}
                          title={link.label}
                          className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="divider"></div>
                <div className="flex flex-col">
                  <button className="btn btn-primary">{siteConfig.buttonText}</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header >
  );
};

export default Header;
