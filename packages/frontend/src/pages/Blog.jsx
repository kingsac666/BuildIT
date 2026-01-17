import Seo from '../components/Seo';

const insights = [
  {
    title: 'SEO tips for service businesses',
    description: 'Practical steps to improve rankings and attract qualified leads.',
  },
  {
    title: 'AI automation use cases',
    description: 'How AI agents reduce response time and improve customer satisfaction.',
  },
  {
    title: 'Digital transformation roadmap',
    description: 'A simple framework to prioritize the right systems for your business.',
  },
];

const Blog = () => {
  const getRevealDelayClass = (index) => `reveal-delay-${((index % 5) + 1) * 100}`;

  return (
    <div className="py-12 reveal" data-reveal>
      <Seo
        title="Insights | BuildIT"
        description="Practical insights on SEO, AI automation, and digital transformation."
      />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold text-gray-900 reveal" data-reveal>
            Blog & Insights
          </h1>
          <p className="mt-4 text-lg text-gray-600 reveal reveal-delay-100" data-reveal>
            Optional articles to grow your digital presence and automation strategy.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {insights.map((item, index) => (
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
      </div>
    </div>
  );
};

export default Blog;