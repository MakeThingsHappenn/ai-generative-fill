import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const TOS = () => {
  return (
    <>
      <main className="w-full bg-homeBackground">
        <div className="max-w-3xl mx-auto">
          <div className="p-5">
            <a className="btn btn-ghost mb-6" href="/">
              <ArrowLeftIcon className="size-4" />
              Back
            </a>
            <h1 className="text-3xl font-extrabold pb-6">
              Terms of Service for AI Generative Fill
            </h1>
            <div className="leading-relaxed space-y-6">
              <p>Effective Date: March 15, 2024</p>
              <p>
                Welcome to AI Generative Fill (
                <a
                  href="https://ai-generative-fill.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  https://ai-generative-fill.com
                </a>
                ). By accessing or using our website and services, you agree to
                be bound by these Terms of Service.
              </p>

              <div>
                <p className="font-bold">1. Services</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    AI Generative Fill provides an AI-powered platform for
                    extending and inpainting images.
                  </li>
                  <li>
                    Our services are intended for both personal and commercial
                    use, subject to the limitations outlined in these terms.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold">2. User Accounts</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    You may be required to create an account to access certain
                    features of our service.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your account information and for all activities that occur
                    under your account.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold">3. Acceptable Use</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    You agree not to use our services for any unlawful or
                    prohibited purpose.
                  </li>
                  <li>
                    You may not upload content that infringes on intellectual
                    property rights, contains malicious code, or violates any
                    applicable laws.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold">4. Intellectual Property</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    You retain ownership of the original images you upload to
                    our service.
                  </li>
                  <li>
                    You grant AI Generative Fill a non-exclusive, worldwide
                    license to use, store, and process your images solely for
                    the purpose of providing and improving our services.
                  </li>
                  <li>
                    The AI-generated portions of images created using our
                    service are provided to you under a non-exclusive license
                    for your use.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold">5. Payments & Refund Policy</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    We offer both free and paid plans. Pricing for paid plans is
                    available on our website.
                  </li>
                  <li>
                    Payments are processed securely through our payment
                    providers.
                  </li>
                  <li>
                    Subscriptions are billed in advance on a monthly or annual
                    basis.
                  </li>
                  <li>
                    You may cancel your subscription at any time. Upon
                    cancellation, you will continue to have access to the
                    service until the end of your current billing period.
                  </li>
                  <li>
                    We offer a 7-day money-back guarantee for new subscriptions.
                    If you are not satisfied with our service, you may request a
                    full refund within 7 days of your initial purchase.
                  </li>
                  <li>
                    Refunds for subscriptions cancelled after the 7-day period
                    will be processed on a pro-rata basis for the unused portion
                    of the service.
                  </li>
                  <li>
                    One-time purchases of credits or other non-subscription
                    services are non-refundable unless required by law.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold">6. Limitation of Liability</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    AI Generative Fill provides its services on an "as is" and
                    "as available" basis.
                  </li>
                  <li>
                    We are not liable for any indirect, incidental, special,
                    consequential, or punitive damages resulting from your use
                    of our services.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold">7. Privacy</p>
                <p>
                  Our collection and use of personal information is governed by
                  our Privacy Policy, which can be found at [Privacy Policy
                  URL].
                </p>
              </div>

              <div>
                <p className="font-bold">8. Changes to Terms</p>
                <p>
                  We reserve the right to modify these Terms of Service at any
                  time. We will notify users of any significant changes via
                  email or through our website.
                </p>
              </div>

              <div>
                <p className="font-bold">9. Termination</p>
                <p>
                  We reserve the right to terminate or suspend your account and
                  access to our services at our sole discretion, without notice,
                  for conduct that we believe violates these Terms of Service or
                  is harmful to other users, us, or third parties, or for any
                  other reason.
                </p>
              </div>

              <div>
                <p className="font-bold">10. Governing Law</p>
                <p>
                  These Terms of Service are governed by and construed in
                  accordance with the laws of [Your Jurisdiction], without
                  regard to its conflict of law principles.
                </p>
              </div>

              <div>
                <p className="font-bold">11. Contact Us</p>
                <p>
                  For any questions or concerns regarding these Terms of
                  Service, please contact us at{" "}
                  <a
                    href="mailto:team@ai-generative-fill.com"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    team@ai-generative-fill.com
                  </a>
                  .
                </p>
              </div>

              <p>
                By using AI Generative Fill, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TOS;

