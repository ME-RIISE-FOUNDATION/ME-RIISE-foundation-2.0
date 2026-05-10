import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/data/documents/certifications";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease: "easeOut" as const },
  }),
};

export default function CertificationsPage() {
  const reversed = [...CERTIFICATIONS].reverse();

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
          Certifications
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          Annual recognitions, institutional certifications &amp; IIC star ratings
        </motion.p>
      </div>

      {/* ── Cards ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reversed.map((item, index) => {
            const Icon = item.Icon;
            const correctId = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={correctId}
                className="flex flex-col bg-linear-to-br from-brand-navy to-brand-blue rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition-transform duration-300"
                variants={fadeUp} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
              >
                <div className="flex items-start justify-between">
                  <h2 className="text-4xl md:text-5xl font-light text-white">{correctId}</h2>
                  <Icon className="w-8 h-8 text-white/80" />
                </div>

                <h3 className="text-xl font-semibold mt-3 text-white">{item.title}</h3>

                <p className="flex-1 text-sm md:text-base mt-3 text-white/80 leading-relaxed">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  className="mt-6 block bg-white text-brand-navy text-center py-2.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  View Certificate
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
