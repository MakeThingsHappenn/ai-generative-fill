"use client";

import { BoltIcon, CheckIcon } from "@heroicons/react/24/solid";

const Pricing = ({ id, locale }: { id: string; locale: any }) => {
  return (
    <>
      <section className="bg-base-200 overflow-hidden" id="pricing">
        <div className="py-24 px-8 max-w-5xl mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <p className="font-medium text-primary mb-8">{locale.title}</p>
            <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
              {locale.title2}
            </h2>
            <p className="mt-4 text-base-content/80 lg:w-3/4 mx-auto xl:w-2/3 2xl:w-1/2">
              {locale.description}
            </p>
          </div>
          <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
            {locale.plans.map((plan: any) => {
              return (
                <div key={plan.title} className="relative w-full max-w-lg">
                  {plan.isPopular && (
                    <>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <span className="badge text-xs text-primary-content font-semibold border-0 bg-primary">
                          POPULAR
                        </span>
                      </div>
                      <div className="absolute -inset-[1px] rounded-[9px] bg-primary z-10"></div>
                    </>
                  )}
                  <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
                    <div className="flex justify-between items-center gap-4">
                      <div>
                        <p className="text-lg lg:text-xl font-bold">
                          {plan.title}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex flex-col justify-end mb-[4px] text-lg ">
                        <p className="relative">
                          <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                          <span className="text-base-content/80">
                            {plan.originalPrice}
                          </span>
                        </p>
                      </div>
                      <p className="text-5xl tracking-tight font-extrabold">
                        {plan.currPrice}
                      </p>
                      <div className="flex flex-col justify-end mb-[4px]">
                        <p className="text-xs text-base-content/60 uppercase font-semibold">
                          {locale.priceUnit}
                        </p>
                      </div>
                    </div>
                    <p className="text-xl text-base-content/80 leading-3 font-bold">
                      {plan.credits} {locale.creditText}
                    </p>
                    <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                      {plan.features.map((feature: string) => {
                        return (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckIcon className="size-5" />
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="space-y-2">
                      <button className="btn btn-primary btn-block group">
                        <BoltIcon className="size-5" />
                        One-time payment
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;

