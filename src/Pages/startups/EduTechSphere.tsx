import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const galleryImages = [
  "/startups/edtech1.jpeg",
  "/startups/edtech2.jpeg",
  "/startups/edtech3.jpeg",
  "/startups/edtech4.jpeg",
  "/startups/edtech5.jpeg",
  "/startups/edtech6.jpeg",
];

export default function EduTechSphere() {
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
          EduTechSphere
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          We Teach to Learn, Share to Grow
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-16 py-20 space-y-16">

        {/* ── Founder + About ── */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-start"
          variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">About EduTechSphere</h2>
            <div className="h-1 w-12 rounded-full bg-brand-blue mb-5" />
            <p className="text-slate-600 leading-relaxed mb-4">
              EduTechSphere was founded by <strong>Mohammed Fahad Khan</strong>, Executive Lead (2024–25),
              with a motto that defines everything they do: <em>"We Teach to Learn, Share to Grow."</em>
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The startup is built on the belief that technology and education together have the power to
              create transformative learning experiences. EduTechSphere empowers learners and educators
              with innovative tools and solutions that inspire growth and unlock potential.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By focusing on skill development through technology education, EduTechSphere is shaping
              the future of learning — one student at a time.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/startups/FahadEdutechSphere.jfif" alt="Mohammed Fahad Khan" className="w-full h-80 object-cover" />
            <div className="bg-brand-navy text-white text-center py-3">
              <p className="font-semibold text-sm">Mohammed Fahad Khan</p>
              <p className="text-xs text-slate-300">Founder & Executive Lead, 2024–25</p>
            </div>
          </div>
        </motion.div>

        {/* ── Vision & Mission ── */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-brand-navy mb-3">Our Vision</h3>
            <div className="h-0.5 w-8 rounded-full bg-brand-blue mb-4" />
            <p className="text-slate-600 leading-relaxed">
              To empower every learner with the skills and knowledge needed to thrive in a technology-driven
              world — making quality tech education accessible, practical, and continuous.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-brand-navy mb-3">Our Mission</h3>
            <div className="h-0.5 w-8 rounded-full bg-brand-blue mb-4" />
            <p className="text-slate-600 leading-relaxed">
              To foster a culture of continuous learning through innovative technology education programs,
              equipping students with industry-ready skills that drive personal and professional growth.
            </p>
          </div>
        </motion.div>

        {/* ── Gallery ── */}
        <motion.div
          variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md aspect-square">
                <img
                  src={src}
                  alt={`EduTechSphere activity ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
