import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const TOS = () => {
  return (
    <>
      <main className="w-full bg-homeBackground">
        <div className="max-w-xl mx-auto">
          <div className="p-5">
            <a className="btn btn-ghost mb-6" href="/">
              <ArrowLeftIcon className="size-4" />
              Back
            </a>
            <h1 className="text-3xl font-extrabold pb-6">
              Terms and Conditions for Illusion Diffusion
            </h1>
            <pre className="leading-relaxed whitespace-pre-wrap">
              Effective Date: April 20, 2024
              <br />
              <br />
              Welcome to Illusion Diffusion (https://illusiondiffusion.net).
              These terms govern your use of our online photo(face) AI optical
              illusion image generator and our services. By accessing or using
              our website, you agree to be bound by these terms.
              <br />
              <br />
              1. Services
              <br />
              - Illusion Diffusion provides a platform for creating optical
              illusion art using AI technology.
              <br />
              <br />
              2. Ownership and Usage Rights
              <br />
              - Upon purchasing a package, you can use our application to create
              images. You own the generated images, but you are not permitted to
              resell them.
              <br />
              <br />
              3. Refund Policy
              <br />
              - You may request a full refund within 7 days of purchase if you
              are not satisfied with our product.
              <br />
              <br />
              4. User Data
              <br />
              - We collect personal data such as your name, email, and payment
              information as described in our Privacy Policy, which can be
              accessed here: [Privacy
              Policy](https://illusiondiffusion.net/privacy-policy). - We also
              collect non-personal data through web cookies.
              <br />
              <br />
              5. Governing Law
              <br />
              - These Terms of Service are governed by the laws of France.
              <br />
              <br />
              6. Changes to Terms
              <br />
              - We reserve the right to modify these terms at any time. Any
              changes will be communicated via email.
              <br />
              <br />
              7. Contact Us
              <br />
              - For any questions or concerns regarding these terms, please
              contact us at contact@illusiondiffusion.net.
              <br />
              <br />
              By using our website, you acknowledge that you have read and
              agreed to these Terms of Service.
            </pre>
          </div>
        </div>
      </main>
    </>
  );
};

export default TOS;

