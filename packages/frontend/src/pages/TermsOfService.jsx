import Seo from '../components/Seo';

const TermsOfService = () => {
  return (
    <div className="py-12">
      <Seo
        title="Terms of Service | BuildIT"
        description="Read the terms governing the use of BuildIT services."
      />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-semibold text-gray-900">Terms of Service</h1>
          <p className="text-sm text-gray-600">
            By engaging with BuildIT, you agree to the following terms. Please review them carefully.
          </p>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              BuildIT provides digital services including web development, AI automation, marketing, and
              consulting. Specific deliverables are defined in project proposals or agreements.
            </p>
            <p>
              Clients are responsible for providing accurate project information and timely feedback to
              enable delivery.
            </p>
            <p>
              Payment terms, timelines, and deliverables are outlined in each project agreement and take
              priority over this summary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
