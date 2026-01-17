import Seo from '../components/Seo';

const Contact = () => {
  return (
    <div className="py-12">
      <Seo
        title="Contact BuildIT | Start Your Project"
        description="Get in touch with BuildIT to discuss your web, AI, or automation needs."
      />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-semibold text-gray-900">Contact BuildIT</h1>
          <p className="mt-4 text-lg text-gray-600">
            Tell us about your project. We respond quickly and can jump on a strategy call.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <form className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700" htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700" htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700" htmlFor="message">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                    placeholder="Tell us what you want to build"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Start Your Project
                </button>
              </div>
            </form>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">WhatsApp</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Chat with us for quick questions or to schedule a call.
                </p>
                <a
                  href="https://wa.me/212000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                >
                  Talk to Us on WhatsApp
                </a>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Email</h2>
                <p className="mt-2 text-sm text-gray-600">hello@buildit.ma</p>
                <h2 className="mt-6 text-lg font-semibold text-gray-900">Social</h2>
                <div className="mt-2 flex gap-4 text-sm text-gray-600">
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
                    Instagram
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
