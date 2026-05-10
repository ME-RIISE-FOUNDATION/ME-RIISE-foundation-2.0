import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Handshake, FileArchive, FolderOpen } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const cards = [
  {
    icon: FileArchive,
    title: "Certifications",
    desc: "Annual recognitions, institutional certifications & IIC star ratings.",
    route: "/certifications",
  },
  {
    icon: Handshake,
    title: "Collaborations",
    desc: "MoUs, industry partnerships, and institutional collaborations.",
    route: "/collaborations",
  },
  {
    icon: FolderOpen,
    title: "NISP Policy",
    desc: "National Innovation and Startup Policy guidelines for 2023–24.",
    route: "/nisp",
  },
];

const Documents: React.FC = () => {
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
          Documents
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          Official certifications, collaborations, MoUs, and policy documents
        </motion.p>
      </div>

      {/* ── Category Cards ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {cards.map(({ icon: Icon, title, desc, route }, idx) => (
            <motion.div
              key={title}
              onClick={() => navigate(route)}
              className="cursor-pointer group flex flex-col items-center bg-white border border-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-shadow duration-300"
              variants={fadeUp} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-50 mb-5 group-hover:bg-brand-blue transition-colors duration-300">
                <Icon className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">{title}</h3>
              <div className="h-0.5 w-8 rounded-full bg-brand-blue mb-3" />
              <p className="text-slate-500 text-sm text-center leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Documents;
