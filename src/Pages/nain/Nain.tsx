import { motion } from "framer-motion";
import { FaLightbulb, FaRocket } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { Link } from "react-router-dom";
import { NAIN_INTRO, NAIN_INFRASTRUCTURE } from "@/data/naininfrastructure";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const cards = [
  {
    title: "NAIN 1.0 & 1.2",
    description:
      "New Age Innovation Network (NAIN) 1.0 by the ME-RIISE Foundation is a pioneering initiative designed to support budding innovators, entrepreneurs, and changemakers. At the core of NAIN 1.0 lies a commitment to fostering creativity, empowering young minds, and providing a robust platform for groundbreaking ideas to thrive.",
    icon: <FaLightbulb className="text-yellow-300 w-8 h-8" />,
    button: "NAIN 1.0 & 1.2 Events",
    button2: "NAIN 1.0 Projects",
    link: "/nain/nain1",
    link2: "/nain/nain1",
    gradient: "from-brand-navy to-brand-blue",
  },
  {
    title: "NAIN 2.0",
    description:
      "New Age Innovation Network (NAIN) 2.0 by the ME-RIISE Foundation is an advanced platform designed to accelerate groundbreaking ideas with funding, mentorship, and market access. Building on the success of NAIN 1.0, this initiative fosters next-gen entrepreneurs, innovators, and changemakers.",
    icon: <FaRocket className="text-brand-blue-light w-8 h-8" />,
    button: "NAIN 2.0 Events",
    button2: "NAIN 2.0 Projects",
    link: "/nain/nain2",
    link2: "/nain/nain2-projects",
    gradient: "from-slate-800 to-brand-navy",
  },
  {
    title: "NAIN 2.0 Batch-2",
    description:
      "NAIN 2.0 Batch-2 by the ME-RIISE Foundation continues to accelerate groundbreaking ideas with deeper funding, mentorship, and market access. This batch focuses on strengthening entrepreneur readiness and scaling next-generation innovations.",
    icon: <FaRocket className="text-brand-blue-light w-8 h-8" />,
    button: "NAIN 2.0 Batch 2 Events",
    button2: "NAIN 2.0 Batch 2 Projects",
    link: "/nain/nain2",
    link2: "/nain/nain2-projects",
    gradient: "from-slate-800 to-brand-navy",
  },
];

export default function NAINPage() {
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
          {NAIN_INTRO.title}
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          K-tech District Innovation Hub — Malnad College of Engineering
        </motion.p>
      </div>

      {/* ── Intro: Description + Flowchart ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Description */}
          <motion.div
            className="space-y-5"
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
              About NAIN K-tech DIH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy leading-snug">
              Fostering Innovation &amp; Entrepreneurship
            </h2>
            <div className="h-1 w-12 rounded-full bg-brand-blue" />
            <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
              {NAIN_INTRO.description}
            </p>
          </motion.div>

          {/* Flowchart */}
          <motion.div
            className="overflow-hidden rounded-2xl shadow-xl border border-gray-100"
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={NAIN_INTRO.flowchartImage}
              alt="NAIN K-tech DIH Flowchart"
              className="w-full object-contain"
            />
          </motion.div>

        </div>
      </section>

      {/* ── About NAIN Cards ── */}
      <section className="bg-slate-50 px-2 md:px-6">
        <div className="max-w-8xl mx-auto space-y-12">

          {/* Section header */}
          <motion.div
            className="text-center"
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">About NAIN</h2>
            <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-brand-blue" />
          </motion.div>

          {/* Cards — 3 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((item, idx) => (
              <motion.div
                key={idx}
                className={`relative flex flex-col bg-linear-to-br ${item.gradient} rounded-3xl p-10 shadow-xl text-white overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}
                variants={fadeUp} custom={idx + 1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              >
                {/* decorative blob */}
                <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />

                {/* Icon badge */}
                <div className="mb-6 w-fit p-4 bg-white/15 rounded-2xl shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
                <div className="h-0.5 w-10 rounded-full bg-white/40 mb-4" />
                <p className="text-white/80 leading-relaxed text-sm md:text-base flex-grow mb-8">
                  {item.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Link
                    to={item.link}
                    className="flex items-center justify-center gap-2 bg-white text-brand-navy font-semibold px-5 py-3 rounded-xl shadow hover:bg-gray-100 transition-colors duration-200 text-sm"
                  >
                    <MdEvent className="text-lg shrink-0" />
                    {item.button}
                  </Link>
                  <Link
                    to={item.link2}
                    className="flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-semibold px-5 py-3 rounded-xl hover:bg-white/25 transition-colors duration-200 text-sm"
                  >
                    <MdEvent className="text-lg shrink-0" />
                    {item.button2}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Infrastructure ── */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Section header */}
          <motion.div
            className="text-center"
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
              Infrastructure – NAIN
            </h2>
            <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-brand-blue" />
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
              Explore the NAIN-supported facilities designed to enhance innovation,
              collaboration, and research at our campus.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NAIN_INFRASTRUCTURE.map((item, idx) => {
              const Icon = item.Icon;
              return (
                <motion.div
                  key={item.id}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl overflow-hidden transition-shadow duration-300"
                  variants={fadeUp} custom={idx + 1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
                >
                  {/* Image */}
                  <div className="overflow-hidden h-60">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Footer bar */}
                  <div className="flex items-center gap-4 px-6 py-5 border-t border-gray-100">
                    <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-blue-50 shrink-0">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-brand-navy">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
