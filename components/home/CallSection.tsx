"use client";
import { useRouter } from "next/navigation";

const CallSection = ({
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
      <div className="bg-homeBackground w-full">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {locale.question}
            <br />
            {locale.title}
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a className="btn btn-primary btn-wide" onClick={goToPlayground}>
              {CTALocale.title}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallSection;

