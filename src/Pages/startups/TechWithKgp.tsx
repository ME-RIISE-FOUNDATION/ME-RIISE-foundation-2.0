import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const courses = [
  "Python Programming",
  "C / C++",
  "Android Studio & App Development",
  "Web Development",
  "IoT (Internet of Things)",
  "Adobe Photoshop",
];

const testimonials = [
  {
    name: "Monish D",
    text: "TechWithKGP provided hands-on Android Studio sessions that transformed my understanding of app development. The curriculum was practical and industry-relevant.",
  },
  {
    name: "Pooja H M",
    text: "The Python course was well-structured and covered everything from basics to real-world applications. I now feel confident in coding interviews.",
  },
  {
    name: "Uthsavi P U",
    text: "Learning web development through TechWithKGP was a game-changer. The instructors made complex concepts simple and easy to follow.",
  },
];

export default function TechWithKgp() {
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
          Tech with KGP
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          Teaching, effective learning and problem solving
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-16 py-20 space-y-16">

        {/* ── About ── */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">About TechWithKGP</h2>
            <div className="h-1 w-12 rounded-full bg-brand-blue mb-5" />
            <p className="text-slate-600 leading-relaxed mb-4">
              Founded by <strong>Kruparth P Gowda</strong>, TechWithKGP was born out of a passion for
              teaching and effective learning. The startup's core goal is simple yet impactful — make
              technology education accessible, practical, and career-ready.
            </p>
            <p className="text-slate-600 leading-relaxed">
              With a focus on courses like Python, Android Studio, web development, IoT, and Photoshop,
              TechWithKGP has provided internships and structured learning paths for students of
              Malnad College of Engineering, helping them build industry-ready skills.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/startups/founderkpg.jpg" alt="Kruparth P Gowda — Founder" className="w-full h-72 object-cover" />
            <div className="bg-brand-navy text-white text-center py-3">
              <p className="font-semibold text-sm">Kruparth P Gowda</p>
              <p className="text-xs text-slate-300">Founder, TechWithKGP</p>
            </div>
          </div>
        </motion.div>

        {/* ── Logo ── */}
        <motion.div
          className="flex justify-center"
          variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <img src="/startups/logokpg.jpg" alt="TechWithKGP Logo" className="h-24 object-contain" />
        </motion.div>

        {/* ── Courses ── */}
        <motion.div
          variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Courses Offered</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div key={course} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-brand-blue flex-shrink-0" />
                <span className="text-slate-700 text-sm font-medium">{course}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Work Done ── */}
        <motion.div
          variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-brand-navy mb-6">What We've Achieved</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-brand-navy mb-2">Android Studio Batches</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Successfully completed 2 full batches of Android Studio training, equipping students with
                the skills to build real mobile applications from scratch.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-brand-navy mb-2">Courses & Internships</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Provided structured courses and internship opportunities for MCE students, bridging the
                gap between academic knowledge and industry expectations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Photo ── */}
        <motion.div
          variants={fadeUp} custom={3.5} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/startups/kpg1.jpeg" alt="TechWithKGP Session" className="w-full h-80 object-cover" />
          </div>
        </motion.div>

        {/* ── Testimonials ── */}
        <motion.div
          variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-brand-navy mb-6 text-center">What Students Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <p className="text-slate-600 text-sm leading-relaxed italic mb-4">"{t.text}"</p>
                <p className="font-semibold text-brand-navy text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
