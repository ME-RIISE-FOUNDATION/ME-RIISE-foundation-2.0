import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, ExternalLink } from "lucide-react";
import { NAIN2_PROJECTS } from "@/data/nain/nain2projects";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Nain2ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#07090f]">

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden py-28 px-6 text-center border-b border-white/5"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #0d1c3a 0%, #07090f 70%)" }}
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />

        <button
          onClick={() => navigate("/nain")}
          className="absolute top-6 left-6 flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to NAIN
        </button>

        <motion.p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue-light"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        >
          ME-RIISE Foundation · NAIN 2.0
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white leading-none tracking-tight"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          Projects
        </motion.h1>
        <motion.div
          className="mx-auto mt-5 h-[3px] w-24 rounded-full bg-linear-to-r from-brand-blue to-brand-blue-light"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.25 }}
        />
        <motion.p
          className="mt-6 text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.35 }}
        >
          Groundbreaking innovations funded and mentored under the New Age Innovation Network 2.0
        </motion.p>

        {/* project count pill */}
        <motion.div
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.45 }}
        >
          <FileText className="w-3.5 h-3.5" />
          {NAIN2_PROJECTS.length} funded projects
        </motion.div>
      </div>

      {/* ── Project Grid ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}
        >
          {NAIN2_PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={card}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.03] hover:border-brand-blue/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(41,171,226,0.08)]"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />

                {/* Number badge */}
                <div className="absolute top-3 left-3 flex items-center justify-center h-8 w-8 rounded-full bg-brand-blue text-white text-xs font-bold shadow-lg">
                  {String(project.id).padStart(2, "0")}
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#07090f] via-transparent to-transparent opacity-60" />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 gap-4">
                <h3 className="text-base font-semibold text-white leading-snug group-hover:text-brand-blue-light transition-colors duration-200">
                  {project.title}
                </h3>

                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 rounded-xl border border-brand-blue/30 bg-brand-blue/10 px-4 py-2.5 text-sm font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-200"
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  View Project PDF
                  <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-60" />
                </a>
              </div>

              {/* Bottom accent line */}
              <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
