import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { NAIN2_EVENTS } from "@/data/nain/nain2";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: "easeOut" as const },
  }),
};

export default function Nain2Page() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-linear-to-br from-slate-900 via-brand-navy to-slate-900 py-24 px-6 text-center">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-(--brand-blue)/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--brand-blue)/10 blur-3xl" />

        <button
          onClick={() => navigate("/nain")}
          className="absolute top-6 left-6 flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to NAIN
        </button>

        <motion.p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue-light"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        >
          ME-RIISE Foundation · NAIN
        </motion.p>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          New Age Innovation Network
          <span className="block text-brand-blue mt-1">2.0</span>
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          Complete archive of events, workshops, and activities from NAIN 2.0
        </motion.p>
      </div>

      {/* ── Event count strip ── */}
      <div className="bg-brand-navy/5 border-b border-brand-navy/10 py-4 px-6 text-center">
        <p className="text-sm font-medium text-brand-navy">
          <span className="font-bold text-brand-blue">{NAIN2_EVENTS.length}</span> events &amp; activities
        </p>
      </div>

      {/* ── Events list ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 space-y-14">
        {NAIN2_EVENTS.map((event, idx) => (
          <motion.div
            key={event.id}
            variants={fadeUp} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          >
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">

              {/* Header bar */}
              <div className="bg-linear-to-r from-slate-800 to-brand-navy px-8 py-6 flex items-start gap-5">
                <span className="text-4xl md:text-5xl font-light text-white/30 leading-none shrink-0 select-none">
                  {String(event.id).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-snug">
                    {event.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-1.5 text-white/60 text-sm">
                    <CalendarDays className="w-3.5 h-3.5 shrink-0" />
                    {event.date}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-8 py-6">
                <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
                  {event.description}
                </p>

                {event.images.length > 0 && (
                  <div
                    className={`mt-6 grid gap-3 ${
                      event.images.length === 1
                        ? "grid-cols-1"
                        : event.images.length === 2
                        ? "grid-cols-2"
                        : event.images.length === 3
                        ? "grid-cols-3"
                        : "grid-cols-2 md:grid-cols-4"
                    }`}
                  >
                    {event.images.map((src, i) => (
                      <div
                        key={i}
                        className="overflow-hidden rounded-xl aspect-video bg-slate-100"
                      >
                        <img
                          src={src}
                          alt={`${event.title} — photo ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
