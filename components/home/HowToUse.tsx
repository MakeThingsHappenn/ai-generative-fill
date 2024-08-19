import { HOW_TO_USE_IMAGES } from "@/config/howToUse";
import Image from "next/image";
const HowToUse = ({
  id,
  locale,
  CTALocale,
}: {
  id: string;
  locale: any;
  CTALocale: any;
}) => {
  return (
    <>
      <div id={id}>
        <div className="bg-[#F3F5FF] py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center font-bold text-4xl leading-[60px] text-black mb-8">
              {locale.title}
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center mt-20 mb-12">
              {locale.steps.map((step: any, i: number) => {
                return (
                  <div key={step.title}>
                    <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
                      <Image
                        className="w-[290px] h-[290px] rounded-xl"
                        src={HOW_TO_USE_IMAGES[i]}
                        alt={step.title}
                      />
                      <div className="flex flex-col max-w-[290px]">
                        <div className="mx-auto my-6 text-[#2F2F2F] text-2xl font-medium leading-9 relative z-10">
                          <span className="absolute w-8 h-8 bg-gradient-to-tr from-[#FFD6F8] to-[#C6BDFF] rounded-full -left-2.5 -z-10"></span>
                          {step.title}
                        </div>
                        <div className="text-left text-[#2F2F2F] opacity-70">
                          {step.description}
                        </div>
                      </div>
                    </div>
                    {locale.steps.length - 1 !== i && (
                      <Image
                        className="hidden md:block w-[77px] h-[55px] mt-[-108px]"
                        src="https://static.artguru.ai/_next/static/media/arrow_down.09156f6d.png"
                        alt="Next Step Arrow"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center mt-12">
              <a className="btn btn-primary btn-wide" href="/app">
                {CTALocale.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToUse;

