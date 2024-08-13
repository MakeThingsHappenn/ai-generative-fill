import { HOW_TO_USE_IMAGES } from '@/config/howToUse';
const HowToUse = ({ locale, CTALocale }: { locale: any, CTALocale: any }) => {
  return (
    <>
      <div id="HowToUse">
        <div className="bg-[#F3F5FF] py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center font-bold text-4xl leading-[60px] text-black mb-8">{locale.title}</h2>
            <div className="flex flex-col md:flex-row justify-between items-center mt-20 mb-12">
              <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
                <img className="w-[290px] h-[290px] rounded-xl" src={HOW_TO_USE_IMAGES[0]} alt="Step 1: Upload the Picture" />
                <div className="flex flex-col max-w-[290px]">
                  <div className="mx-auto my-6 text-[#2F2F2F] text-2xl font-medium leading-9 relative z-10">
                    <span className="absolute w-8 h-8 bg-gradient-to-tr from-[#FFD6F8] to-[#C6BDFF] rounded-full -left-2.5 -z-10"></span>
                    {locale.steps[0].title}
                  </div>
                  <div className="text-left text-[#2F2F2F] opacity-70">{locale.steps[0].description}</div>
                </div>
              </div>
              <img className="hidden md:block w-[77px] h-[55px] mt-[-108px]" src="https://static.artguru.ai/_next/static/media/arrow_down.09156f6d.png" alt="Next Step Arrow" />
              <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
                <img className="w-[290px] h-[290px] rounded-xl" src={HOW_TO_USE_IMAGES[1]} alt="Step 2: Enter a prompt" />
                <div className="flex flex-col max-w-[290px]">
                  <div className="mx-auto my-6 text-[#2F2F2F] text-2xl font-medium leading-9 relative z-10">
                    <span className="absolute w-8 h-8 bg-gradient-to-tr from-[#FFD6F8] to-[#C6BDFF] rounded-full -left-2.5 -z-10"></span>
                    {locale.steps[1].title}
                  </div>
                  <div className="text-left text-[#2F2F2F] opacity-70">{locale.steps[1].description}</div>
                </div>
              </div>
              <img className="hidden md:block w-[77px] h-[55px] mt-[-108px]" src="https://static.artguru.ai/_next/static/media/arrow_down.09156f6d.png" alt="Next Step Arrow" />
              <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
                <img className="w-[290px] h-[290px] rounded-xl" src={HOW_TO_USE_IMAGES[2]} alt="Step 3: Generate the Image" />
                <div className="flex flex-col max-w-[290px]">
                  <div className="mx-auto my-6 text-[#2F2F2F] text-2xl font-medium leading-9 relative z-10">
                    <span className="absolute w-8 h-8 bg-gradient-to-tr from-[#FFD6F8] to-[#C6BDFF] rounded-full -left-2.5 -z-10"></span>
                    {locale.steps[2].title}
                  </div>
                  <div className="text-left text-[#2F2F2F] opacity-70">{locale.steps[2].description}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <a className="btn btn-primary btn-wide" href="/app">{CTALocale.title}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default HowToUse;