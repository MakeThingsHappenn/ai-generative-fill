"use client";
import { ALL_FAQS } from "@/config/faqs";

// update rough notation highlight
function triggerResizeEvent() {
  const event = new Event("resize");
  window.dispatchEvent(event);
}

const FAQ = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const FAQS = ALL_FAQS[`FAQS_${langName.toUpperCase()}`];

  return (
    <>
      <section className="bg-base-200" id="faq">
        <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex flex-col text-left basis-1/2">
            <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
            <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
          </div>
          <ul className="basis-1/2">
            <li>
              <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false">
                <span className="flex-1 text-base-content ">How do you use my photos?</span>
                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                </svg>
              </button>
              <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden">
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">Your photos are used only for internal AI processing. We do not and will not share them with any third parties or anyone without. We take privacy concerns seriously.</div>
                </div>
              </div>
            </li>
            <li>
              <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false">
                <span className="flex-1 text-base-content ">Can I download generated images to my computer?</span>
                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                </svg>
              </button>
              <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden">
                <div className="pb-5 leading-relaxed">
                  <p>Yes, you can download the generated images to your computer. You can also share the images on social media platforms like Facebook, Twitter, and Instagram.</p>
                </div>
              </div>
            </li>
            <li>
              <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false">
                <span className="flex-1 text-base-content ">Is the payment service secure?</span>
                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                </svg>
              </button>
              <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden">
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">Absolutely, our payment service is secure. We entrust all financial processing to Stripe and do not retain any of your card details. Stripe guarantees security standards on par with those of banks.</div>
                </div>
              </div>
            </li>
            <li>
              <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false">
                <span className="flex-1 text-base-content ">Can I get a refund?</span>
                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                </svg>
              </button>
              <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden">
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">Regrettably, due to the significant resources required for image processing, we're unable to offer refunds.</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default FAQ;
