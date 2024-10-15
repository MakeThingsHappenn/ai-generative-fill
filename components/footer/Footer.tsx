import { ALL_FOOTER_LINKS } from "@/config/footer";
import Image from "next/image";

const Footer = ({ lang }: { lang: string }) => {
  const footerLinks = ALL_FOOTER_LINKS[`FOOTER_LINKS_${lang.toUpperCase()}`];
  return (
    <>
      <div className="bg-homeBackground w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <footer
            aria-labelledby="footer-heading"
            className="relative border-t border-gray-900/10 py-12 sm:pt-16 sm:pb-8"
          >
            <h2 id="footer-heading" className="sr-only">
              Footer
            </h2>
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <Image
                src="/logo.webp"
                alt="Ai Generative Fill logo"
                width="32"
                height="32"
                decoding="async"
                data-nimg="1"
                className="w-10 sm:w-12"
              />
              <div className="flex justify-around mt-16 grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                {footerLinks.map((footer) => {
                  return footer.links.length ? (
                    <div key={footer.title}>
                      <h3 className="text-sm font-semibold leading-6 text-gray-900">
                        {footer.title}
                      </h3>
                      <ul role="list" className="mt-6 space-y-4">
                        {footer.links.map((link) => {
                          return (
                            <li key={link.title}>
                              <a
                                href={
                                  link.internal
                                    ? "/" + lang + link.href
                                    : link.href
                                }
                                className="text-sm leading-6 text-gray-900 hover:text-gray-900"
                              >
                                {link.title}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : (
                    <div key={footer.title} />
                  );
                })}
              </div>
            </div>
            <div className="mt-4 border-t border-gray-900/10 pt-8 sm:mt-10 lg:mt-12">
              <p className="text-xs leading-5 text-gray-500">
                © 2024 AI Generative Fill. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;

