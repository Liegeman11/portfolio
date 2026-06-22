export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <p className="text-sm text-emerald-600 font-medium mb-3 uppercase tracking-widest">About</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">The person behind the pipelines.</h2>

            <div className="space-y-5 leading-relaxed [&>p]:text-gray-600">
              <p className="text-gray-600">
                I did not start out planning to become a data scientist — I started out trying to understand why systems fail.
                Studying Statistics at Ladoke Akintola University of Technology, I kept running into the same question:
                the data existed, the problem was clear, but nobody had built the bridge between them.
                That gap became my obsession.
              </p>
              <p className="text-gray-600">
                Today I work across the full data stack — designing ETL pipelines that move and clean data at scale,
                training and deploying ML models that stay reliable in production, building backend APIs that serve
                those models to real users, and creating dashboards that translate outputs into decisions.
                I have done this across fintech, healthcare, e-commerce, and real estate.
              </p>
              <p className="text-gray-600">
                Right now I am deepening my work in MLOps and large-scale pipeline orchestration —
                specifically making ML systems more observable, reproducible, and maintainable over time,
                not just accurate at launch.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-emerald-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors"
              >
                Get in touch
              </a>
              <a
                href="/taiwo-emmanuel-cv.pdf"
                className="border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:border-gray-400 transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right — Stats + Details */}
          <div className="space-y-6">

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Quick facts</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-emerald-600 mt-0.5">&#x1F4CD;</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Based in</p>
                    <p className="text-sm text-gray-500">Ogbomosho, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-emerald-600 mt-0.5">&#x1F393;</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Education</p>
                    <p className="text-sm text-gray-500">BTech Statistics, Ladoke Akintola University of Technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-emerald-600 mt-0.5">&#x1F4BC;</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Experience</p>
                    <p className="text-sm text-gray-500">3 years across fintech, healthcare, e-commerce & real estate</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-emerald-600 mt-0.5">&#x1F30D;</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Availability</p>
                    <p className="text-sm text-gray-500">Open to remote, hybrid, freelance & relocation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-emerald-600 mt-0.5">&#x1F3AF;</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Currently focused on</p>
                    <p className="text-sm text-gray-500">MLOps, pipeline observability & large-scale orchestration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="text-3xl font-bold text-gray-900">3+</div>
                <div className="text-xs text-gray-500 mt-1">Years</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="text-3xl font-bold text-gray-900">4</div>
                <div className="text-xs text-gray-500 mt-1">Industries</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-xs text-gray-500 mt-1">Projects</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}