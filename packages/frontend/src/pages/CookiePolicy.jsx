import Seo from '../components/Seo';

const CookiePolicy = () => {
  return (
    <div className="py-12 reveal" data-reveal>
      <Seo
        title="Cookie Policy | BuildIT"
        description="Learn how BuildIT uses cookies to improve your experience."
      />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-semibold text-gray-900 reveal" data-reveal>
            Cookie Policy
          </h1>
          <p className="text-sm text-gray-600 reveal reveal-delay-100" data-reveal>
            We use cookies to understand site usage and improve the experience. By continuing to browse,
            you agree to the use of cookies.
          </p>
          <div className="space-y-4 text-sm text-gray-600 reveal reveal-delay-200" data-reveal>
            <p>
              Cookies are small files stored on your device. They help us analyze traffic and enhance site
              performance.
            </p>
            <p>
              You can disable cookies in your browser settings. Some site features may not function
              correctly without cookies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
