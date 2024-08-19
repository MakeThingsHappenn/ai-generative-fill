const Discover = ({ locale }: { locale: any }) => {
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-16 md:pb-12">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                {locale.subTitle}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {locale.title}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {locale.description}
              </p>
            </div>
            <div className="mt-16 sm:mt-10 lg:mt-12 ">
              <div className="relative">
                <div
                  className="max-w-sm mx-auto sm:max-w-none grid gap-6 sm:grid-cols-2 md:grid-cols-3 items-start"
                  data-aos-id-inpspiration="true"
                >
                  {Array(9)
                    .fill(null)
                    .map((item, i) => {
                      return (
                        <img
                          key={i}
                          alt="Illusion Diffusion AI Art Image 1"
                          loading="lazy"
                          width="352"
                          height="352"
                          decoding="async"
                          data-nimg="1"
                          className="w-full aspect-square object-cover"
                          src="/home/9.png"
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;

