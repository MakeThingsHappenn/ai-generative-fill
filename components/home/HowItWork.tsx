import SectionBg from "@/components/icons/section-bg";
import Image from "next/image";
const HowItWork = ({ id, locale }: { id: string; locale: any }) => {
  return (
    <>
      <div
        id={id}
        className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 max-w-7xl mx-auto"
      >
        {/* <div className="absolute inset-0 -z-10 overflow-hidden">
          <SectionBg />
        </div> */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                {/* <p className="text-base font-semibold leading-7 text-indigo-600">
                  {locale.subTitle}
                </p> */}
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {locale.title}
                </h2>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              alt="Illusion Diffusion AI working principle diagram"
              loading="lazy"
              width="500"
              height="500"
              decoding="async"
              data-nimg="1"
              className="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 h-auto"
              sizes=""
              src=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>{locale.description}</p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  {locale.steps.map((step: any) => {
                    return (
                      <li key={step.title} className="flex gap-x-3">
                        <span>
                          <strong className="font-semibold text-gray-900">
                            {step.title}
                          </strong>
                          {step.description}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWork;

