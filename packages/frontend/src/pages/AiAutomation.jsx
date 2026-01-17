import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { getWhatsAppLink } from '../utils/whatsapp';

const automationUseCases = [
  {
    title: 'AI agents for customer replies',
    description: 'Instant responses on WhatsApp, Instagram, and web chat with brand-consistent messaging.',
  },
  {
    title: 'Lead qualification',
    description: 'Automate lead capture, scoring, and routing to your sales team.',
  },
  {
    title: 'Support automation',
    description: 'Answer FAQs, create tickets, and escalate high-priority requests automatically.',
  },
  {
    title: 'Workflow integration',
    description: 'Connect automation to CRMs, dashboards, and internal tools to reduce manual work.',
  },
];

const AiAutomation = () => {
  const getRevealDelayClass = (index) => `reveal-delay-${((index % 5) + 1) * 100}`;
  const whatsappLink = getWhatsAppLink();

  return (
    <div className="py-12 reveal" data-reveal>
      <Seo
        title="AI Agents & Automation | BuildIT"
        description="Automate customer replies with AI agents across WhatsApp, Instagram, websites, and multiple platforms."
      />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold text-gray-900 reveal" data-reveal>
            AI Agents & Automation
          </h1>
          <p className="mt-4 text-lg text-gray-600 reveal reveal-delay-100" data-reveal>
            Save time and scale customer communication with AI agents that work across WhatsApp, social
            media, and web platforms.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {automationUseCases.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm reveal ${getRevealDelayClass(index)}`}
              data-reveal
            >
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 p-8 reveal reveal-delay-200" data-reveal>
          <h2 className="text-2xl font-semibold text-blue-900">Automation-first mindset</h2>
          <p className="mt-3 text-sm text-blue-800">
            We design automation that complements your team instead of replacing it. Your staff gains more
            time to focus on strategic work while customers receive faster, more consistent responses.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Automate Your Business
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-100"
            >
              Talk to Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAutomation;
