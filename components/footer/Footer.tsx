import { siteConfig } from "@/config/site";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const { authors } = siteConfig;

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <footer aria-labelledby="footer-heading" className="relative border-t border-gray-900/10 py-12 sm:pt-16 sm:pb-8">
          <h2 id="footer-heading" className="sr-only">Footer</h2>
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img className="h-7" src="https://imgc.cc/2023/10/15/652bb54cba40c.png" alt="Illusion Diffusion AI Logo" />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Help Center</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="mailto:contact@illusiondiffusion.net" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Products</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="https://xw.ai" className="text-sm leading-6 text-gray-600 hover:text-gray-900">XW.AI Ai Writer</a>
                    </li>
                    <li>
                      <a href="https://www.animateanyone.com" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Animate Anyone</a>
                    </li>
                    <li>
                      <a href="https://text.is" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Markdown Pastebin</a>
                    </li>
                    <li>
                      <a href="https://www.bingimagecreator.net" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Bing Image Creator</a>
                    </li>
                    <li>
                      <a href="https://facetomany.com" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Face to Many</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Friends</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="https://aicomicfactory.com" className="text-sm leading-6 text-gray-600 hover:text-gray-900">AI Comic Generator</a>
                    </li>
                    <li>
                      <a href="https://phind-ai.com" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Phind AI</a>
                    </li>
                    <li>
                      <a href="https://fooocus.one" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Fooocus</a>
                    </li>
                    <li>
                      <a href="https://magnificai.co" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Magnific AI</a>
                    </li>
                    <li>
                      <a href="https://gigapixelai.com" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Gigapixel AI</a>
                    </li>
                    <li>
                      <a href="https://outfitanyoneai.com" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Outfit Anyone</a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="/privacy-policy" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a>
                    </li>
                    <li>
                      <a href="/tos" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms of Service</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-900/10 pt-8 sm:mt-10 lg:mt-12">
            <p className="text-xs leading-5 text-gray-500">© 2024 Illusion Diffusion. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>

  )
}

export default Footer;
