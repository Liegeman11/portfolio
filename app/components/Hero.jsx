export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center">

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Open to Remote, Freelance & Relocation
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
          I build systems that turn
          <span className="text-emerald-600"> raw data</span> into
          <span className="text-emerald-600"> decisions</span> that scale.
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Senior Data Scientist & ML Engineer based in Nigeria.
          End-to-end pipelines, production ML, backend systems & BI
          across fintech, healthcare, e-commerce and real estate.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#work"
            className="bg-emerald-600 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors w-full sm:w-auto text-center"
          >
            View my work
          </a>
          <a
            href="/taiwo-emmanuel-cv.pdf"
            className="border border-gray-200 text-gray-700 px-8 py-4 rounded-full text-sm font-medium hover:border-gray-400 transition-colors w-full sm:w-auto text-center"
          >
            Download CV
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-gray-100 pt-12">
          <div>
            <div className="text-3xl font-bold text-gray-900">3+</div>
            <div className="text-sm text-gray-500 mt-1">Years experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">4</div>
            <div className="text-sm text-gray-500 mt-1">Industries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">10+</div>
            <div className="text-sm text-gray-500 mt-1">Projects shipped</div>
          </div>
        </div>

      </div>
    </section>
  );
}