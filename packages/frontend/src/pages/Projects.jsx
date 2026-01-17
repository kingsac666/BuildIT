import Seo from '../components/Seo';

const projects = [
  {
    title: 'Hospitality Lead Automation',
    problem: 'Slow WhatsApp response time caused missed bookings.',
    solution: 'AI agent triaged inquiries and qualified leads automatically.',
    result: '60% faster responses and 35% higher conversion rates.',
  },
  {
    title: 'Retail Operations Dashboard',
    problem: 'Dispersed spreadsheets made it hard to track inventory and sales.',
    solution: 'Unified dashboard with real-time KPIs and alerts.',
    result: 'Improved decision-making and reduced stockouts by 20%.',
  },
  {
    title: 'Professional Services Website',
    problem: 'Legacy site lacked credibility and SEO visibility.',
    solution: 'Modern UX redesign with SEO optimization and lead capture.',
    result: '2x website leads in three months.',
  },
  {
    title: 'Community Management Workflow',
    problem: 'Manual social media responses slowed engagement.',
    solution: 'Automated response templates with content scheduling.',
    result: '40% improvement in engagement rate.',
  },
];

const Projects = () => {
  return (
    <div className="py-12">
      <Seo
        title="Our Projects | BuildIT"
        description="Explore how BuildIT transforms ideas into real digital systems across multiple industries."
      />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold text-gray-900">Our Projects</h1>
          <p className="mt-4 text-lg text-gray-600">
            Real outcomes from businesses that chose BuildIT for digital transformation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">Problem:</span> {project.problem}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Solution:</span> {project.solution}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Result:</span> {project.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
