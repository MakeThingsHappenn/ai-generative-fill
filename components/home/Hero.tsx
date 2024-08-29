"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = ({ locale, CTALocale }: { locale: any; CTALocale: any }) => {
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: "tween", // tween spring
            // damping: 10, // if spring
            // stiffness: 50, // if spring
            // restDelta: 0.001, // if spring
          },
        }}
      > */}
      <section className="bg-homeBackground w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
          <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start order-2 sm:order-1">
            <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
              {locale.title}
            </h1>
            <p className="text-lg opacity-80 leading-relaxed">
              {locale.description}
            </p>
            <div>
              <a className="btn btn-primary btn-wide" href="/app">
                {CTALocale.title}
              </a>
              <p className="text-sm opacity-70 mt-2">{locale.noRequire}</p>
            </div>
            <div className="flex-col md:flex-row justify-center items-center md:items-start gap-3 hidden sm:flex">
              <div className="-space-x-5 avatar-group justy-start">
                {Array(5)
                  .fill(null)
                  .map((item, i) => {
                    return (
                      <div key={i} className="avatar w-12 h-12">
                        <Image
                          src="/home/avatar.png"
                          alt="User"
                          width="50"
                          height="50"
                          decoding="async"
                          data-nimg="1"
                        />
                      </div>
                    );
                  })}
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-1">
                <div className="rating rating-sm">
                  {Array(5)
                    .fill(null)
                    .map((item, i) => {
                      return (
                        <input
                          key={i}
                          defaultChecked
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-yellow-500"
                        />
                      );
                    })}
                </div>
                <div className="text-base text-base-content/80">
                  Loved by{" "}
                  <span className="font-semibold text-base-content">
                    {locale.lovedUsersCount}
                  </span>{" "}
                  {locale.users}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-full order-1 sm:order-2">
            <Image
              src="/home/1.png"
              alt="Product Demo"
              width="500"
              height="500"
              decoding="async"
              data-nimg="1"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <Image
        src="/common/wave-bottom.svg"
        alt="Wave Bottom"
        width={1440}
        height={260}
        className="w-full -mt-10"
      />
      {/* </motion.div> */}
    </>
  );
};

export default Hero;

