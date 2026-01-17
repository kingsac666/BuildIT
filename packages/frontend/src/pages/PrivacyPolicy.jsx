import Seo from '../components/Seo';

const PrivacyPolicy = () => {
  return (
    <div className="py-12 reveal" data-reveal>
      <Seo
        title="Privacy Policy | BuildIT"
        description="Learn how BuildIT collects, uses, and protects your data."
      />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-semibold text-gray-900 reveal" data-reveal>
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 reveal reveal-delay-100" data-reveal>
            BuildIT respects your privacy and is committed to protecting your personal information.
          </p>
          <div className="space-y-4 text-sm text-gray-600 reveal reveal-delay-200" data-reveal>
            <p>
              We collect information you provide when you contact us, request a consultation, or use our
              services. This can include your name, email, company name, and project details.
            </p>
            <p>
              We use your information to respond to inquiries, deliver services, and improve our offerings.
              We do not sell your data to third parties.
            </p>
            <p>
              You may request access, correction, or deletion of your data by emailing hello@buildit.ma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
