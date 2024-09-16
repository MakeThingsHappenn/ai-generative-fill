import SectionBg from "@/components/icons/section-bg";
import Image from "next/image";
const HowItWork = ({ id, locale }: { id: string; locale: any }) => {
  return (
    <>
      <div id={id} className="relative bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale.title}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              {locale.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {locale.steps.map((step: any, index: number) => (
              <div key={step.title} className="text-center">
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <div className="w-16 h-16 rounded-full bg-indigo-500 text-white flex items-center justify-center mx-auto text-2xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl leading-6 font-medium text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-base text-gray-500 px-20">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div
        id={id}
        className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 max-w-7xl mx-auto"
      >
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {locale.title}
                </h2>
              </div>
            </div>
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
      </div> */}
    </>
  );
};

export default HowItWork;

