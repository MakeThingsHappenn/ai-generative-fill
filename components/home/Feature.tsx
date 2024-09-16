"use client";
import { FEATURE_IMAGES } from "@/config/feature";
import Image from "next/image";
import { useRef, useState } from "react";
import CaseImage from "@/components/common/caseImage";
const Feature = ({
  id,
  locale,
  CTALocale,
}: {
  id: string;
  locale: any;
  CTALocale: any;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    const carousel = carouselRef.current;
    if (carousel) {
      const item = carousel.querySelector(`#item${index + 1}`);
      item?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <>
      <div id={id} className="-mt-48">
        <h2 className="text-center font-bold text-4xl leading-[60px] text-black">
          {locale.title}
        </h2>
        <div className="w-full flex">
          <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
            <div className="flex flex-row">
              <div
                ref={carouselRef}
                className="w-2/3 h-[663px] overflow-hidden"
              >
                {locale.steps.map((step: any, index: number) => (
                  <div
                    key={index}
                    id={`item${index + 1}`}
                    className="carousel-item w-full mx-auto flex justify-center"
                  >
                    <CaseImage
                      beforeImg={FEATURE_IMAGES[index].beforeImg}
                      afterImg={FEATURE_IMAGES[index].afterImg}
                      width={450}
                      height={350}
                      direction="vertical"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center w-1/3 gap-4 py-4 pl-8">
                <div className="w-full">
                  {locale.steps.map((step: any, index: number) => (
                    <div key={index} className="relative mb-6">
                      <div
                        className={`absolute left-0 top-2 w-1 transition-all duration-300 ease-in-out ${
                          index === activeIndex ? "bg-blue-500" : "bg-gray-300"
                        }`}
                        style={{
                          height:
                            index === activeIndex
                              ? "calc(100% - 1rem)"
                              : "1.5rem",
                          transition: "height 0.3s ease-in-out",
                          background:
                            index === activeIndex
                              ? "linear-gradient(to bottom, #EEA7D3, #8B5CF6)"
                              : undefined,
                        }}
                      ></div>
                      <div className="ml-6 pt-2 pb-4">
                        <button
                          className={`text-lg font-extrabold ${
                            index === activeIndex
                              ? "text-homeBackground"
                              : "text-gray-700"
                          } hover:text-homeBackground transition-colors duration-300 ease-in-out`}
                          onClick={() => handleClick(index)}
                        >
                          {step.title}
                        </button>
                        {index === activeIndex && (
                          <div className="mt-2 overflow-hidden transition-all duration-300 ease-in-out">
                            <ul className="list-disc pl-5 text-sm text-gray-600 leading-7">
                              {step.description
                                .split(". ")
                                .map((sentence: any, index: number) => (
                                  <li key={index}>{sentence}</li>
                                ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="py-20 px-4 sm:px-8 -mt-60">
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
                        className="rounded-xl"
                        width={290}
                        height={290}
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
                        className="hidden md:block mt-[-108px]"
                        width={77}
                        height={55}
                        src=""
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
        </div> */}
      </div>
    </>
  );
};

export default Feature;

