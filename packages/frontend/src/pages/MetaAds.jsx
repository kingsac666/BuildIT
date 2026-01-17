import Seo from '../components/Seo';
import { getWhatsAppLink } from '../utils/whatsapp';

const metaServices = [
  'Web development',
  'SEO & growth',
  'AI automation',
  'Marketing campaigns',
];

const MetaAds = () => {
  const getRevealDelayClass = (index) => `reveal-delay-${((index % 5) + 1) * 100}`;
  const whatsappLink = getWhatsAppLink();

  return (
    <div className="py-12 reveal" data-reveal>
      <Seo
        title="BuildIT | Free Strategy Call"
        description="Get a free strategy call to build your digital system with web, AI automation, and marketing."
      />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold text-gray-900 reveal" data-reveal>
            Build Your Digital System
          </h1>
          <p className="mt-4 text-lg text-gray-600 reveal reveal-delay-100" data-reveal>
            Web, AI automation, and marketing solutions tailored to help your business grow efficiently.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm reveal ${getRevealDelayClass(0)}`} data-reveal>
            <h2 className="text-xl font-semibold text-gray-900">What we deliver</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {metaServices.map((service) => (
                <li key={service}>• {service}</li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
              Automate customer replies, lead qualification, and support with AI agents across WhatsApp,
              Instagram, and your website.
            </div>
          </div>

          <form className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm reveal ${getRevealDelayClass(1)}`} data-reveal>
            <h2 className="text-xl font-semibold text-gray-900">Get a Free Strategy Call</h2>
            <div className="mt-4 grid gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700" htmlFor="meta-name">
                  Full name
                </label>
                <input
                  id="meta-name"
                  name="meta-name"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700" htmlFor="meta-phone">
                  Phone / WhatsApp
                </label>
                <input
                  id="meta-phone"
                  name="meta-phone"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="+212..."
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700" htmlFor="meta-project">
                  What do you want to build?
                </label>
                <textarea
                  id="meta-project"
                  name="meta-project"
                  rows="4"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="Tell us about your project"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Get a Free Strategy Call
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="text-center text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Automate Your Business on WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MetaAds;
