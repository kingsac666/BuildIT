import React from 'react';

/**
 * Hero component converted from the provided Tailwind markup.
 * - Uses React state for the mobile `expanded` toggle instead of Alpine.js
 * - Keeps Tailwind classes intact
 */
const Hero = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="" className="flex">
                {/* <img
                  className="w-auto h-9"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg"
                  alt=""
                /> */}
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded((s) => !s)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <span aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </span>
                ) : (
                  <span aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                )}
              </button>
            </div>

            {/* <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                Products
              </a>

              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                Features
              </a>

              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                Pricing
              </a>

              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                Support
              </a>
            </nav> */}
          </div>

          {/* Mobile menu */}
          {/* {expanded && (
            <nav>
              <div className="flex flex-col pt-8 pb-4 space-y-6 md:hidden">
                <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                  Products
                </a>

                <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                  Features
                </a>

                <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                  Pricing
                </a>

                <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                  Support
                </a>
              </div>
            </nav>
          )} */}
        </div>
      </header>

      <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative lg:flex lg:items-start lg:justify-between">
            <div className="lg:w-2/3">
              <p className="text-sm font-normal tracking-widest text-gray-300 uppercase mt-14">A Hub for Designers, Developers &amp; Marketers</p>
              <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Unlimited Design</span> Inspiration
              </h1>
              <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
               BuildIT is a team of young, passionate professionals with strong hands-on experience in building digital and AI-driven solutions. We specialize in transforming ideas from a wide range of industries into efficient, scalable systems that help our clients optimize operations, automate processes, and grow their businesses. From websites and mobile applications to custom internal platforms, AI agents, and marketing systems, we focus on delivering practical, results-oriented solutions tailored to real business needs. Our approach combines technical expertise, creativity, and a deep understanding of client objectives to turn vision into reliable, high-impact digital products.
              </p>

              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button">
                  Start Exploring Inspiration
                </a>
              </div>

              <div>
                <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17" stroke="url(#a)" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="a" x1="3" y1="7.00003" x2="22.2956" y2="12.0274" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" style={{ stopColor: 'var(--color-cyan-500)' }} />
                        <stop offset="100%" style={{ stopColor: 'var(--color-purple-500)' }} />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* <span className="ml-2 text-base font-normal text-white">42 new design inspiration was added last week</span> */}
                </div>
              </div>
            </div>

            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
              <img className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
