const CallSection2 = ({
  locale,
  CTALocale,
}: {
  locale: any;
  CTALocale: any;
}) => {
  return (
    <>
      <section className="relative hero overflow-hidden min-h-96 bg-slate-500">
        <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
        <div className="relative hero-content text-center text-neutral-content p-8">
          <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
            <h2 className="text-slate-300 font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
              {locale.title}
            </h2>
            <p className="text-lg opacity-80 mb-12 md:mb-16">
              {locale.description}
            </p>
            <a className="btn btn-primary btn-wide" href="/app">
              {CTALocale.title}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallSection2;

