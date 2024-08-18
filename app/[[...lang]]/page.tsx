import CallSection from "@/components/home/CallSection";
import Discover from "@/components/home/Discover";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import HowItWork from "@/components/home/HowItWork";
import HowToUse from "@/components/home/HowToUse";
import Pricing from "@/components/home/Pricing";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // const langName = (lang && lang[0]) || defaultLocale;
  let langName =
    lang && lang[0] && lang[0] !== "index" ? lang[0] : defaultLocale;

  const dict = await getDictionary(langName);

  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Hero} CTALocale={dict.CTAButton} />
      <HowToUse locale={dict.HowToUse} CTALocale={dict.CTAButton} />
      <Feature langName={langName} CTALocale={dict.CTAButton} />
      <Discover />
      <CallSection CTALocale={dict.CTAButton} />
      <HowItWork />
      <Pricing id="pricing" locale={dict.Pricing} langName={langName} />
      <FAQ id="faq" locale={dict.FAQ} langName={langName} />
    </>
  );

}
