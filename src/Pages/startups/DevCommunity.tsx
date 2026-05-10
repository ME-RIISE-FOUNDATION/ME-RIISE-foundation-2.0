import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const mission = [
  "Spread knowledge and develop interest in students to learn coding at industry standard.",
  "Contribute to the college and society through technology-driven solutions.",
  "Build real-world projects that solve genuine problems faced by communities.",
];

const projects = [
  {
    title: "COVID Quarantine Monitoring App",
    desc: "Developed a web-based application to monitor people under home quarantine during the COVID-19 pandemic. The app was handed over to the local police department for active use.",
    highlight: true,
  },
  {
    title: "Leave Management Systems",
    desc: "Built leave application systems for college departments, automating approval workflows and reducing paperwork.",
    highlight: false,
  },
  {
    title: "MCE College Systems",
    desc: "Developed internal systems for Malnad College of Engineering to streamline administrative processes.",
    highlight: false,
  },
  {
    title: "Temple Management Portal",
    desc: "Created a management portal for a local temple to handle events, donations, and visitor information.",
    highlight: false,
  },
];

const teams = [
  { label: "Senior Members", count: 6 },
  { label: "Junior Members", count: 9 },
  { label: "Sophomore Members", count: 1 },
];

export default function DevCommunity() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">

      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden bg-linear-to-br from-slate-900 via-brand-navy to-slate-900 py-24 px-6 text-center">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-(--brand-blue)/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-blue)/10 blur-3xl" />

        <motion.p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue-light"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        >
          ME-RIISE Startups
        </motion.p>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          Developers Community
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          Building real-world solutions at industry standard
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-16 py-20 space-y-16">

        {/* ── About ── */}
        <motion.div
          variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">About the Community</h2>
          <div className="h-1 w-12 rounded-full bg-brand-blue mb-5" />
          <p className="text-slate-600 leading-relaxed mb-4">
            Founded by <strong>Adarsh D</strong> and <strong>Manoj Kumar H R</strong> in <strong>2020</strong>,
            the Developers Community was established with a clear motto: to spread knowledge and develop a genuine
            interest in students to learn coding at industry standard.
          </p>
          <p className="text-slate-600 leading-relaxed">
            The community focuses on building applications that have real-world impact — from monitoring
            systems handed to law enforcement, to college administrative tools and community portals. Every
            project is built with the same discipline and quality expected in the industry.
          </p>
        </motion.div>

        {/* ── Mission ── */}
        <motion.div
          variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Our Mission</h2>
          <div className="space-y-4">
            {mission.map((point, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-brand-blue text-white text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-slate-600 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Team Size ── */}
        <motion.div
          variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Team Composition</h2>
          <div className="grid grid-cols-3 gap-6">
            {teams.map((t) => (
              <div key={t.label} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                <p className="text-4xl font-extrabold text-brand-blue">{t.count}</p>
                <p className="text-sm text-slate-500 mt-2">{t.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Projects ── */}
        <motion.div
          variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Projects Built</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className={`rounded-2xl p-6 shadow-sm border ${
                  p.highlight
                    ? "bg-linear-to-br from-brand-navy to-brand-blue border-transparent text-white"
                    : "bg-white border-gray-100"
                }`}
              >
                <h3 className={`font-semibold mb-2 ${p.highlight ? "text-white" : "text-brand-navy"}`}>
                  {p.title}
                </h3>
                <p className={`text-sm leading-relaxed ${p.highlight ? "text-white/80" : "text-slate-600"}`}>
                  {p.desc}
                </p>
                {p.highlight && (
                  <span className="inline-block mt-3 text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">
                    Deployed to Police
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
