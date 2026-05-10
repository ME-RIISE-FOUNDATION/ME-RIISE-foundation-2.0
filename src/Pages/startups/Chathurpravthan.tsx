import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const directors = [
  { name: "Dr. Geetha Kiran A", role: "Director" },
  { name: "Dr. Mohana Lakshmi J", role: "Director" },
  { name: "Mr. Achal J", role: "Director" },
];

export default function Chathurpravthan() {
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
          Chathurpravarthan
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          Chathur Pravarthan Private Limited — Est. November 2022
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-16 py-20 space-y-16">

        {/* ── About ── */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-start"
          variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">About the Company</h2>
            <div className="h-1 w-12 rounded-full bg-brand-blue mb-5" />
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>Chathur Pravarthan Private Limited</strong>, established in <strong>November 2022</strong>,
              is a remarkable success story that originated as a startup within the premises of
              Malnad College of Engineering.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              It was born out of the successful implementation of the <strong>Solar Panel Cleaning Robot</strong> project,
              which received recognition and funding through NAIN and K-Tech — selected as one of only
              9 projects across the entire initiative.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The company represents the journey from academic innovation to a registered private limited
              company, demonstrating the impact of ME-RIISE Foundation's startup incubation ecosystem.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/startups/chathurpravthan.png" alt="Chathurpravthan" className="w-full h-72 object-contain bg-white p-4" />
          </div>
        </motion.div>

        {/* ── Product Highlight ── */}
        <motion.div
          className="bg-linear-to-br from-brand-navy to-brand-blue rounded-2xl p-8 text-white shadow-xl"
          variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-3">Solar Panel Cleaning Robot</h2>
          <div className="h-1 w-12 rounded-full bg-white/40 mb-5" />
          <p className="text-white/85 leading-relaxed">
            The flagship product — a Solar Panel Cleaning Robot — addresses one of the most critical
            challenges in solar energy: efficiency loss due to dust and debris accumulation on panels.
            The automated cleaning mechanism restores panel efficiency without manual intervention,
            significantly reducing maintenance costs and improving energy output.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">NAIN Funded</span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">K-Tech Selected</span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">1 of 9 Projects</span>
          </div>
        </motion.div>

        {/* ── Photo Gallery ── */}
        <motion.div
          variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Gallery</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src="/startups/Pic3.jfif" alt="Chathurpravthan Robot" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src="/startups/pic2.jfif" alt="Chathurpravthan Team" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>

        {/* ── Directors ── */}
        <motion.div
          variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Board of Directors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {directors.map((d) => (
              <div key={d.name} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-blue font-bold text-xl">{d.name.charAt(0)}</span>
                </div>
                <p className="font-semibold text-brand-navy">{d.name}</p>
                <p className="text-xs text-slate-500 mt-1">{d.role}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
