"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CallSection2 = ({
  locale,
  CTALocale,
  lang,
}: {
  locale: any;
  CTALocale: any;
  lang: string;
}) => {
  const router = useRouter();

  const goToPlayground = () => {
    router.push(`/${lang}/playground`);
  };

  return (
    <>
      <Image
        src="/common/wave-top.svg"
        alt="Wave Top"
        width={1440}
        height={280}
        className="w-full -mb-10"
      />
      <section className="bg-homeBackground relative hero overflow-hidden min-h-96">
        <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
        <div className="relative hero-content text-center text-neutral-content p-8">
          <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
            <h2 className="text-gray-900 font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
              {locale.title}
            </h2>
            <p className="text-lg opacity-80 mb-12 md:mb-16">
              {locale.description}
            </p>
            <a className="btn btn-primary btn-wide" onClick={goToPlayground}>
              {CTALocale.title}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallSection2;

