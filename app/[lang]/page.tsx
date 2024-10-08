import CallSection from "@/components/home/CallSection";
import CallSection2 from "@/components/home/CallSection2";
import Discover from "@/components/home/Discover";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import HowItWork from "@/components/home/HowItWork";
// import HowToUse from "@/components/home/HowToUse";
import Pricing from "@/components/home/Pricing";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { HEADER_LINK_HREFS } from "@/config/header";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  let langName = lang || defaultLocale;

  const dict = await getDictionary(langName);

  const getHrefByLabel = (label: string) => {
    return HEADER_LINK_HREFS.filter((item) => item.label === label)[0]?.href;
  };

  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Hero} CTALocale={dict.CTAButton} lang={langName} />
      <Feature
        id={getHrefByLabel("Use Cases")}
        locale={dict.Feature}
        CTALocale={dict.CTAButton}
      />
      {/* <HowToUse
        id={getHrefByLabel("How to Use")}
        locale={dict.HowToUse}
        CTALocale={dict.CTAButton}
      /> */}
      {/* <Discover locale={dict.Discover} /> */}
      <CallSection
        locale={dict.CallSection}
        CTALocale={dict.CTAButton}
        lang={langName}
      />
      <HowItWork id={getHrefByLabel("How it Work")} locale={dict.HowItWork} />
      <Pricing id={getHrefByLabel("Pricing")} locale={dict.Pricing} />
      <FAQ id={getHrefByLabel("FAQ")} langName={langName} />
      <CallSection2
        locale={dict.CallSection2}
        CTALocale={dict.CTAButton}
        lang={langName}
      />
    </>
  );
}

