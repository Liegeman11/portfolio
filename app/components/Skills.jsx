const skillGroups = [
  {
    category: 'Machine Learning & AI',
    color: 'emerald',
    description: 'Full ML lifecycle — from feature engineering and model training to deployment and monitoring in production.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'HuggingFace', 'LightGBM', 'XGBoost', 'SHAP', 'MLflow'],
  },
  {
    category: 'Data Engineering & Pipelines',
    color: 'blue',
    description: 'Reliable data infrastructure — ETL/ELT pipelines, real-time streaming, orchestration and warehousing built for scale.',
    skills: ['Apache Spark', 'PySpark', 'Apache Kafka', 'Airflow', 'dbt', 'PostgreSQL', 'Snowflake', 'BeautifulSoup', 'Selenium'],
  },
  {
    category: 'Backend & Systems Engineering',
    color: 'violet',
    description: 'High-performance APIs and services that connect models, pipelines and databases into systems real users depend on.',
    skills: ['FastAPI', 'Django', 'REST APIs', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Git', 'CI/CD'],
  },
  {
    category: 'Analytics & Business Intelligence',
    color: 'amber',
    description: 'Dashboards, KPI frameworks and statistical analyses that give business teams genuine visibility into what is happening and why.',
    skills: ['SQL', 'Power BI', 'Tableau', 'dbt', 'A/B Testing', 'Pandas', 'Matplotlib', 'Seaborn', 'Excel'],
  },
];

const colorMap = {
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', badge: 'bg-emerald-100 text-emerald-700', label: 'text-emerald-600', number: 'text-emerald-600' },
  blue: { bg: 'bg-blue-50', border: 'border-blue-100', badge: 'bg-blue-100 text-blue-700', label: 'text-blue-600', number: 'text-blue-600' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-100', badge: 'bg-violet-100 text-violet-700', label: 'text-violet-600', number: 'text-violet-600' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-100', badge: 'bg-amber-100 text-amber-700', label: 'text-amber-600', number: 'text-amber-600' },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-sm text-emerald-600 font-medium mb-3 uppercase tracking-widest">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What I work with.</h2>
          <p className="text-gray-500 text-lg max-w-xl">Four deep areas. One integrated practice.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => {
            const c = colorMap[group.color];
            return (
              <div key={index} className={"rounded-2xl p-8 border " + c.bg + " " + c.border}>
                <p className={"text-xs font-semibold uppercase tracking-widest mb-3 " + c.label}>
                  0{index + 1}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{group.category}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{group.description}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span key={i} className={"text-xs font-medium px-3 py-1 rounded-full " + c.badge}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}