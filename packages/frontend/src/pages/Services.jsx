import Seo from '../components/Seo';

const services = [
  {
    title: 'Website Development',
    description:
      'Fast, scalable websites built with modern tech stacks and conversion-focused UX.',
  },
  {
    title: 'SEO & Content Strategy',
    description:
      'Technical SEO audits, content planning, and on-page optimization to improve rankings.',
  },
  {
    title: 'AI Agents & Automation',
    description:
      'AI agents that reply instantly, qualify leads, and automate customer communication.',
  },
  {
    title: 'Mobile Apps',
    description:
      'Native-like mobile experiences for iOS and Android that keep your users engaged.',
  },
  {
    title: 'Marketing Campaigns',
    description:
      'Paid ads, social campaigns, and creative assets optimized for measurable growth.',
  },
  {
    title: 'Dashboards & Custom Systems',
    description:
      'Operational dashboards and internal systems that centralize data and automate workflows.',
  },
  {
    title: 'Community Management',
    description:
      'Social media presence, content planning, and community support that build trust.',
  },
  {
    title: 'Platform Setup & Integrations',
    description:
      'Set up and manage professional accounts with integrations that reduce manual work.',
  },
];

const Services = () => {
  const getRevealDelayClass = (index) => `reveal-delay-${((index % 5) + 1) * 100}`;

  return (
    <div className="py-12 reveal" data-reveal>
      <Seo
        title="Our Services | BuildIT Digital Solutions"
        description="Website development, SEO, AI automation, mobile apps, marketing campaigns, dashboards, and custom systems."
      />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold text-gray-900 reveal" data-reveal>
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 reveal reveal-delay-100" data-reveal>
            From digital strategy to implementation, we provide everything needed to build smart systems and
            grow efficiently.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm reveal ${getRevealDelayClass(index)}`}
              data-reveal
            >
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
