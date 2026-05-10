import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const years = [
  { year: "2026", route: "/events/2026" },
  { year: "2025", route: "/events/2025" },
  { year: "2024", route: "/events/2024" },
  { year: "2023", route: "/events/2023" },
  { year: "2022", route: "/events/2022" },
  { year: "2021", route: "/events/2021" },
  { year: "2020", route: "/events/2020" },
  { year: "2019", route: "/events/2019" },
  { year: "2018", route: "/events/2018" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function Events() {
  const navigate = useNavigate();

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
          ME-RIISE Foundation
        </motion.p>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          Events
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          Explore our events across the years
        </motion.p>
      </div>

      {/* ── Year Grid ── */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {years.map(({ year, route }, idx) => (
            <motion.button
              key={year}
              onClick={() => navigate(route)}
              className="bg-black text-[#01adfc] rounded-2xl h-24 text-3xl font-bold border border-white/10 hover:border-[#01adfc]/60 hover:scale-105 transition-all duration-200"
              variants={fadeUp} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            >
              {year}
            </motion.button>
          ))}
        </div>
      </div>

    </div>
  );
}
