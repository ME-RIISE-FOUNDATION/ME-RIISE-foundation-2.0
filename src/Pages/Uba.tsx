import { motion } from "framer-motion";
import { FaCalendarAlt, FaFilePdf } from "react-icons/fa";
import { UBA_EVENTS, UBA_INTRO } from "@/data/uba";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05, ease: "easeOut" as const },
  }),
};

function imageGridCols(count: number) {
  if (count === 1) return "grid-cols-1";
  if (count === 2) return "grid-cols-1 sm:grid-cols-2";
  if (count === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return "grid-cols-2 lg:grid-cols-4";
}

export default function UbaPage() {
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
          {UBA_INTRO.title}
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          Bridging College &amp; Village — {UBA_EVENTS.length} Community Initiatives
        </motion.p>
      </div>

      {/* ── Intro ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-20 space-y-10">
        <motion.div
          className="space-y-5"
          variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
            About UBA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Activities in UBA Visit</h2>
          <div className="h-1 w-12 rounded-full bg-brand-blue" />
          <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
            {UBA_INTRO.description}
          </p>
        </motion.div>

        {/* Hero image + gallery */}
        <motion.div
          className="overflow-hidden rounded-2xl shadow-xl"
          variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <img src={UBA_INTRO.heroImage} alt="Unnat Bharat Abhiyan" className="w-full object-cover" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {UBA_INTRO.galleryImages.map((src, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md"
              variants={fadeUp} custom={i + 2} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            >
              <img src={src} alt="UBA activity" className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Events ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-24 space-y-14">

        <motion.div
          className="text-center"
          variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">UBA Events</h2>
          <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-brand-blue" />
        </motion.div>

        {UBA_EVENTS.map((event, idx) => (
          <motion.article
            key={event.id}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg overflow-hidden transition-shadow duration-300"
            variants={fadeUp} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          >
            {/* top accent bar */}
            <div className="h-1 w-full bg-linear-to-r from-brand-blue to-brand-navy" />

            <div className="p-8 md:p-10 space-y-6">
              {/* Title + date */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 text-brand-blue text-sm font-medium">
                  <FaCalendarAlt />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-navy leading-snug">
                  {event.title}
                </h3>
                {event.subtitle && (
                  <p className="text-slate-500 text-sm md:text-base font-medium">{event.subtitle}</p>
                )}
                <div className="h-0.5 w-10 rounded-full bg-brand-blue mt-2" />
              </div>

              {/* Images */}
              <div className={`grid gap-4 ${imageGridCols(event.images.length)}`}>
                {event.images.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-xl shadow-md">
                    <img
                      src={src}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
                {event.description}
              </p>

              {/* PDF links */}
              {event.pdfs.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {event.pdfs.map((pdf, i) => (
                    <a
                      key={i}
                      href={pdf.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-navy text-white text-sm font-medium px-4 py-2 rounded-xl shadow hover:bg-brand-blue transition-colors duration-200"
                    >
                      <FaFilePdf className="shrink-0" />
                      {pdf.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </section>

    </div>
  );
}
