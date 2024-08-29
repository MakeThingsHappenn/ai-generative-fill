import { ALL_FEATURES, COLOR_MAP } from "@/config/feature";
import Image from "next/image";

const Feature = ({
  id,
  langName,
  CTALocale,
}: {
  id: string;
  langName: string;
  CTALocale: any;
}) => {
  const FEATURES = ALL_FEATURES[`FEATURES_${langName.toUpperCase()}`];
  return (
    <>
      <div id={id} className="container mx-auto  mt-20 mb-40">
        <h2 className="text-center font-bold text-4xl leading-[60px] text-black mb-20">
          Features of Generative Fill
        </h2>
        <div className="flex flex-row justify-between">
          {FEATURES.map((feature, i) => {
            return (
              <section
                className="w-[27%] h-96 rounded-lg"
                key={feature.title}
                style={{ backgroundColor: COLOR_MAP[i] }}
              >
                <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
                  <div className="h-full">
                    <h2 className="mb-4 text-2xl font-bold md:text-2xl">
                      {feature.title}
                    </h2>
                    <div className="mt-10 mb-6 text-base max-w-[480px] md:mb-10 lg:mb-12">
                      <p>{feature.description}</p>
                    </div>
                  </div>
                  {/* <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
                  {i % 2 === 0 && (
                    <div className="">
                      <Image
                        src={feature.img}
                        width={100}
                        height={150}
                        alt="Font art showing a quote"
                        className="mx-auto inline-block h-full w-full max-w-[640px] object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  )}
                  <div className="max-w-[720px] lg:max-w-lg">
                    <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                      {feature.title}
                    </h2>
                    <div className="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                      <p className="text-[#636262]">{feature.description}</p>
                    </div>
                    <a className="btn btn-primary btn-wide" href="/app">
                      {CTALocale.title}
                    </a>
                  </div>
                  {i % 2 === 1 && (
                    <div className="">
                      <Image
                        src={feature.img}
                        width={100}
                        height={150}
                        alt="Font art showing a quote"
                        className="mx-auto inline-block h-full w-full max-w-[640px] object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  )}
                </div> */}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Feature;

