import Seo from '../components/Seo';

/**
 * About page component
 */
const About = () => {
  const getRevealDelayClass = (index) => `reveal-delay-${((index % 5) + 1) * 100}`;

  return (
    <div className="py-12 reveal" data-reveal>
      <Seo
        title="About BuildIT | Young Digital & AI Experts"
        description="A team of young professionals with hands-on experience building impactful digital solutions."
      />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-semibold text-gray-900 reveal" data-reveal>
            About BuildIT
          </h1>
          <p className="mt-4 text-lg text-gray-600 reveal reveal-delay-100" data-reveal>
            BuildIT is a team of young professionals transforming ideas into scalable digital solutions for
            small and medium businesses.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm reveal ${getRevealDelayClass(0)}`} data-reveal>
              <h2 className="text-lg font-semibold text-gray-900">Who we are</h2>
              <p className="mt-3 text-sm text-gray-600">
                We combine strategy, design, and engineering to build websites, automation flows, and digital
                systems that help businesses grow efficiently.
              </p>
            </div>
            <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm reveal ${getRevealDelayClass(1)}`} data-reveal>
              <h2 className="text-lg font-semibold text-gray-900">Hands-on experience</h2>
              <p className="mt-3 text-sm text-gray-600">
                Our team delivers practical solutions based on real project experience, not just theory. We
                stay close to implementation to ensure results.
              </p>
            </div>
            <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm reveal ${getRevealDelayClass(2)}`} data-reveal>
              <h2 className="text-lg font-semibold text-gray-900">Vision</h2>
              <p className="mt-3 text-sm text-gray-600">
                Empower businesses with smart digital systems that streamline operations and create new
                growth opportunities.
              </p>
            </div>
            <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm reveal ${getRevealDelayClass(3)}`} data-reveal>
              <h2 className="text-lg font-semibold text-gray-900">Mission</h2>
              <p className="mt-3 text-sm text-gray-600">
                Deliver AI-driven automation, modern web platforms, and marketing solutions that improve
                customer experience and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

