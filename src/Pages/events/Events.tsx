import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CalendarDays, ArrowRight } from "lucide-react";

const years = [
  { year: "2026", route: "/events/2026", badge: "Latest" },
  { year: "2025", route: "/events/2025" },
  { year: "2024", route: "/events/2024" },
  { year: "2023", route: "/events/2023" },
  { year: "2022", route: "/events/2022" },
  { year: "2021", route: "/events/2021" },
  { year: "2020", route: "/events/2020" },
  { year: "2019", route: "/events/2019" },
  { year: "2018", route: "/events/2018" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Events() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#06090f]">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden py-28 px-6 text-center border-b border-white/5"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #0d1c3a 0%, #06090f 70%)" }}>

        <div className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-[#01adfc]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#1B3461]/30 blur-3xl" />

        <motion.p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#01adfc]"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        >
          ME-RIISE Foundation
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white leading-none tracking-tight"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our Events
        </motion.h1>

        <motion.div
          className="mx-auto mt-5 h-[3px] w-24 rounded-full"
          style={{ background: "linear-gradient(to right, #01adfc, #7DD3F0)" }}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.25 }}
        />

        <motion.p
          className="mt-6 text-slate-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.35 }}
        >
          Browse our complete archive of events, workshops, and programs — organized by year.
        </motion.p>
      </div>

      {/* ── Year Grid ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">

        <motion.p
          className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[#01adfc]/50 mb-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Select a year to explore
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}
        >
          {years.map(({ year, route, badge }) => (
            <motion.button
              key={year}
              variants={cardVariant}
              onClick={() => navigate(route)}
              className="group relative flex items-center justify-between rounded-2xl border border-white/[0.07] px-7 py-7 text-left transition-all duration-300 hover:border-[#01adfc]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01adfc]"
              style={{ background: "rgba(255,255,255,0.03)" }}
              whileHover={{ backgroundColor: "rgba(1,173,252,0.06)", boxShadow: "0 0 36px rgba(1,173,252,0.10)" }}
            >
              {/* left accent bar */}
              <span className="pointer-events-none absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-[#01adfc] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* year + badge */}
              <div className="flex flex-col gap-1">
                {badge && (
                  <span className="inline-block w-fit rounded-full bg-[#01adfc]/15 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#01adfc]">
                    {badge}
                  </span>
                )}
                <span className="text-[2.6rem] font-extrabold leading-none tracking-tight text-white transition-colors duration-300 group-hover:text-[#7DD3F0]">
                  {year}
                </span>
              </div>

              {/* icon cluster */}
              <div className="flex flex-col items-center gap-2.5 pr-1">
                <CalendarDays className="h-5 w-5 text-white/15 transition-colors duration-300 group-hover:text-[#01adfc]/60" />
                <ArrowRight className="h-4 w-4 text-white/10 transition-all duration-300 group-hover:text-[#01adfc] group-hover:translate-x-1" />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
