const projects = [
  {
    title: 'Fraud Detection Pipeline',
    domain: 'Fintech',
    summary: 'Real-time transaction fraud detection system with sub-100ms inference latency.',
    problem: 'Rule-based fraud system could not adapt to new patterns, causing both missed fraud and false positives blocking legitimate transactions.',
    results: 'Reduced fraud losses significantly, lowered false positive rate, and maintained under 100ms latency at peak load.',
    stack: ['Python', 'PySpark', 'Scikit-learn', 'FastAPI', 'Airflow', 'Docker', 'PostgreSQL'],
    color: 'emerald',
  },
  {
    title: 'Customer Churn Prediction',
    domain: 'E-commerce',
    summary: 'Behavioural churn prediction model giving weeks of early warning before customers disengaged.',
    problem: 'Retention team was reacting to churn after it happened, offering discounts to customers who had already left.',
    results: 'High prediction accuracy weeks ahead of churn. Retention intervention rate increased and customer lifetime value improved among flagged cohorts.',
    stack: ['Python', 'LightGBM', 'SHAP', 'dbt', 'Power BI', 'PostgreSQL', 'BeautifulSoup'],
    color: 'blue',
  },
  {
    title: 'Clinical Data Pipeline & Risk Scoring',
    domain: 'Healthcare',
    summary: 'Automated clinical data pipeline and patient risk scoring system reducing manual reporting from hours to minutes.',
    problem: 'Healthcare provider managed patient risk through spreadsheets and manual data pulls from disconnected systems, giving clinicians no early warning.',
    results: 'Reporting time cut to under 30 minutes weekly. Risk model flagged high-risk patients with strong recall. Zero missed data quality failures in production.',
    stack: ['Python', 'Apache Kafka', 'Airflow', 'dbt', 'Scikit-learn', 'FastAPI', 'PostgreSQL'],
    color: 'violet',
  },
  {
    title: 'Property Valuation Model',
    domain: 'Real Estate',
    summary: 'Automated property valuation model replacing a fully manual appraisal process with instant, data-driven estimates.',
    problem: 'Real estate firm spent significant time on manual valuations that varied widely depending on which appraiser handled them.',
    results: 'Valuation accuracy within a small margin of actual sale price. Appraisal turnaround reduced from days to under 2 minutes.',
    stack: ['Python', 'XGBoost', 'Selenium', 'Django', 'PostgreSQL', 'Pandas', 'GeoPandas'],
    color: 'amber',
  },
];

const colorMap = {
  emerald: { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', border: 'hover:border-emerald-300' },
  blue: { badge: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500', border: 'hover:border-blue-300' },
  violet: { badge: 'bg-violet-50 text-violet-700 border-violet-200', dot: 'bg-violet-500', border: 'hover:border-violet-300' },
  amber: { badge: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500', border: 'hover:border-amber-300' },
};

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-sm text-emerald-600 font-medium mb-3 uppercase tracking-widest">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects that shipped.</h2>
          <p className="text-gray-500 text-lg max-w-xl">Real problems. Real data. Real production systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const c = colorMap[project.color];
            return (
              <div
                key={index}
                className={"bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-lg " + c.border}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className={"text-xs font-medium px-3 py-1 rounded-full border " + c.badge}>
                    {project.domain}
                  </span>
                  <div className={"w-2 h-2 rounded-full " + c.dot}></div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.summary}</p>

                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">The problem</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{project.problem}</p>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">Results</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{project.results}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1">
                    GitHub ↗
                  </a>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1">
                    Live Demo ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}