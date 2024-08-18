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
          <div className="basis-1/2">
            <div className="collapse collapse-plus bg-base-200 border-b-1 rounded-none border-slate-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-semibold">Click to open this one and close others</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
