import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const PrivacyPolicy = () => {
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
              Privacy Policy for AI Generative Fill
            </h1>
            <div className="leading-relaxed space-y-6">
              <p>Effective Date: March 15, 2024</p>

              <p>
                At AI Generative Fill (
                <a
                  href="https://ai-generative-fill.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  https://ai-generative-fill.com
                </a>
                ), we are committed to protecting your privacy and ensuring the
                security of your personal information. This Privacy Policy
                outlines our practices concerning the collection, use, and
                protection of your data when you use our website and services.
              </p>

              <div>
                <p className="font-bold">1. Information We Collect</p>
                <p>a) Personal Information:</p>
                <ul className="list-disc pl-5">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>
                    Payment information (processed securely through our payment
                    providers)
                  </li>
                  <li>Images you upload for processing</li>
                </ul>
                <p>b) Non-Personal Information:</p>
                <ul className="list-disc pl-5">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>IP address</li>
                  <li>Usage data and preferences</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">2. How We Use Your Information</p>
                <p>
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-5">
                  <li>To provide and maintain our services</li>
                  <li>To process payments and manage your account</li>
                  <li>To improve and personalize your experience</li>
                  <li>
                    To communicate with you about our services, updates, and
                    offers
                  </li>
                  <li>To analyze usage patterns and improve our website</li>
                  <li>To detect and prevent fraudulent activities</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">3. Data Storage and Security</p>
                <p>
                  We implement industry-standard security measures to protect
                  your personal information. Your data is stored securely and is
                  only accessible to authorized personnel. We retain your data
                  only for as long as necessary to provide our services and
                  comply with legal obligations.
                </p>
              </div>

              <div>
                <p className="font-bold">
                  4. Data Sharing and Third-Party Services
                </p>
                <p>
                  We do not sell your personal information to third parties. We
                  may share your information with:
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Service providers who assist us in operating our website and
                    services (e.g., payment processors, cloud storage providers)
                  </li>
                  <li>
                    Legal authorities when required by law or to protect our
                    rights
                  </li>
                </ul>
                <p>
                  These third parties are obligated to protect your information
                  and may not use it for any other purpose.
                </p>
              </div>

              <div>
                <p className="font-bold">5. Your Rights and Choices</p>
                <p>You have the right to:</p>
                <ul className="list-disc pl-5">
                  <li>Access, correct, or delete your personal information</li>
                  <li>Object to or restrict the processing of your data</li>
                  <li>Request a copy of your data in a portable format</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the
                  information provided at the end of this policy.
                </p>
              </div>

              <div>
                <p className="font-bold">
                  6. Cookies and Tracking Technologies
                </p>
                <p>
                  We use cookies and similar technologies to enhance your
                  experience on our website. You can manage your cookie
                  preferences through your browser settings.
                </p>
              </div>

              <div>
                <p className="font-bold">7. Children's Privacy</p>
                <p>
                  Our services are not intended for children under the age of
                  13. We do not knowingly collect personal information from
                  children under 13. If you believe we have collected
                  information from a child under 13, please contact us
                  immediately.
                </p>
              </div>

              <div>
                <p className="font-bold">8. International Data Transfers</p>
                <p>
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure appropriate
                  safeguards are in place to protect your information in
                  compliance with applicable data protection laws.
                </p>
              </div>

              <div>
                <p className="font-bold">9. Changes to This Privacy Policy</p>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any significant changes by posting a notice on
                  our website or sending you an email.
                </p>
              </div>

              <div>
                <p className="font-bold">10. Contact Us</p>
                <p>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us
                  at:
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:team@ai-generative-fill.com"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    team@ai-generative-fill.com
                  </a>
                </p>
                <p>Address: [Your Company Address]</p>
              </div>

              <p>
                By using AI Generative Fill, you consent to the collection and
                use of your information as described in this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;

