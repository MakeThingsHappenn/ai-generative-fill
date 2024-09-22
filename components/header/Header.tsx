"use client";
import { siteConfig } from "@/config/site";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { HEADER_LINK_HREFS } from "@/config/header";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Header.module.css";

const links = HEADER_LINK_HREFS;

const Header = ({ lang }: { lang: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    console.log("handleSmoothScroll");
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById("#" + targetId);
    if (elem) {
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      router.push(`/${lang}${href}`);
    }
  };

  const goToPlayground = () => {
    router.push(`/${lang}/playground`);
  };

  return (
    <header className="py-10 mx-auto px-4 sm:px-6 lg:px-8 bg-homeBackground h-4">
      <nav className="container flex items-center justify-between px-8 mx-auto h-full max-2xl:w-full">
        <div className="flex lg:flex-1">
          <a
            className="flex items-center gap-2 shrink-0 "
            title={siteConfig.name}
            href="/"
          >
            <Image
              src="/logo.png"
              alt="Illusion Diffusion logo"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              className="w-10"
            />
            <span className="font-extrabold text-xl sm:text-2xl">
              {siteConfig.name}
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          ></button>
          <span className="sr-only">Open main menu</span>
        </div>
        <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
          {links.map((link) => {
            return (
              <a
                key={link.href}
                className="link link-hover font-semibold"
                title={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:justify-end lg:flex-1">
          <div className={styles.signupButtonWrapper}>
            <button className={styles.signupButton} onClick={goToPlayground}>
              {siteConfig.buttonText}
            </button>
            <div className={styles.circleEffect}></div>
          </div>
          {/* <button className="btn btn-primary">{siteConfig.buttonText}</button> */}
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
                      <span className="font-extrabold text-xl sm:text-2xl text-pink-500">
                        {siteConfig.name}
                      </span>
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
                  <button className="btn btn-primary" onClick={goToPlayground}>
                    {siteConfig.buttonText}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

