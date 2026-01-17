import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, fast, and SEO-friendly websites that convert visitors into leads.',
  },
  {
    title: 'SEO & Growth',
    description: 'Data-driven SEO strategies to help your business show up and scale.',
  },
  {
    title: 'AI Agents',
    description: 'Automate customer replies and lead qualification across WhatsApp and web.',
  },
  {
    title: 'Mobile Apps',
    description: 'Intuitive mobile experiences that keep your customers connected.',
  },
  {
    title: 'Marketing',
    description: 'Campaigns, creatives, and ad management optimized for ROI.',
  },
  {
    title: 'Dashboards & Systems',
    description: 'Custom dashboards and internal tools that turn data into decisions.',
  },
];

const projects = [
  {
    title: 'Hospitality Lead Automation',
    description: 'AI agent that qualifies leads from WhatsApp and reduces response time by 60%.',
  },
  {
    title: 'Retail Operations Dashboard',
    description: 'Centralized dashboard that tracks sales, inventory, and staff KPIs in real time.',
  },
  {
    title: 'E-commerce Growth Website',
    description: 'High-converting storefront with SEO optimizations and automated abandoned cart flows.',
  },
  {
    title: 'Community Engagement Hub',
    description: 'Social and community management workflow that streamlines messaging and content.',
  },
];

const Home = () => {
  return (
    <div>
      <Seo
        title="BuildIT | Web, AI Automation & Digital Solutions"
        description="BuildIT helps businesses build websites, AI agents, mobile apps, and scalable digital systems to grow efficiently."
      />

      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Digital transformation for small & medium businesses
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              We Build Digital Systems That Scale Your Business
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Web, AI automation, mobile apps, and marketing solutions tailored to your needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100"
              >
                Get a Free Consultation
              </Link>
              <a
                href="https://wa.me/212000000000"
                className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-semibold text-gray-900">Services overview</h2>
            <p className="text-gray-600">
              Everything you need to modernize your operations and grow with confidence.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">Why BuildIT</h2>
              <p className="mt-4 text-gray-600">
                We are a team of young professionals with hands-on experience delivering impactful digital
                solutions across industries.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li>Young & skilled professionals</li>
                <li>Hands-on project experience</li>
                <li>Business-oriented solutions</li>
                <li>Automation-first mindset</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
              <h3 className="text-lg font-semibold text-blue-900">Clients & industries</h3>
              <p className="mt-3 text-sm text-blue-800">
                We support retail, hospitality, professional services, e-commerce, and growing startups that
                need modern systems and community management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold">AI Automation Highlight</h2>
              <p className="mt-4 text-blue-100">
                Automate customer replies, lead qualification, and support using AI agents on WhatsApp,
                Instagram, and websites.
              </p>
              <Link
                to="/ai-automation"
                className="mt-6 inline-flex rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
              >
                Automate Your Business
              </Link>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-blue-100">
              <p>
                We design AI agents that respond instantly, qualify leads, and escalate complex requests to
                your team. That means faster response times, happier customers, and more conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">Projects preview</h2>
              <p className="mt-2 text-gray-600">A glimpse at the transformations we deliver.</p>
            </div>
            <Link to="/projects" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
              View All Projects
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <div key={project.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900">Value proposition (FR)</h3>
              <p className="mt-3 text-sm text-gray-600">
                BuildIT accompagne les entreprises dans la création de solutions digitales performantes. De
                la conception de sites web optimisés SEO aux agents IA automatisant la relation client, nous
                transformons vos idées en systèmes efficaces et évolutifs.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900">Value proposition (Darija)</h3>
              <p className="mt-3 text-sm text-gray-600">
                BuildIT katkhdem m3a l-businessat bach tbni solutions digitales ذكية. Men sites web moptimizin
                SEO, l-AI agents li kayjawbou clients automatiquement, kat7awlo l-afkar dyalkom l-systems li
                kaykhdmo bfa3liya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Ready to build smarter systems?</h2>
          <p className="mt-3 text-gray-600">Start your project today and unlock efficient growth.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Start Your Project
            </Link>
            <a
              href="https://wa.me/212000000000"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
              target="_blank"
              rel="noreferrer"
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

