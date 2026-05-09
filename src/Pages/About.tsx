import React from "react";
import { motion, type Variants } from "framer-motion";
import { FaLightbulb, FaUsers, FaSeedling, FaTools } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";
import Stats from "../components/Stats";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-brand-blue font-semibold">{children}</span>
);

const AboutUs: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  /* ── SKELETON ─────────────────────────────────────────── */
  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-b from-slate-50 to-white px-6 md:px-20 py-20 space-y-14 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-80 mx-auto rounded-xl" />
          <Skeleton className="h-4 w-48 mx-auto rounded-lg" />
        </div>
        <Skeleton className="w-full h-72 rounded-2xl" />
        <div className="space-y-3 max-w-3xl mx-auto">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-4 w-full rounded-md" />
          ))}
        </div>
        <Skeleton className="w-full h-40 rounded-2xl" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4 p-6 rounded-xl border border-gray-100">
              <Skeleton className="h-12 w-12 mx-auto rounded-full" />
              <Skeleton className="h-5 w-1/2 mx-auto" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ── MAIN CONTENT ─────────────────────────────────────── */
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
          About Us
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          Innovation, Incubation, Entrepreneurship — Building the future from Hassan.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 py-20 space-y-20">

        {/* ── Building Image ── */}
        <motion.div
          className="overflow-hidden rounded-2xl shadow-xl"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="/aboutus/ME-RIISEBuilding.png"
            alt="ME-RIISE Foundation Building, Malnad College of Engineering"
            className="w-full object-cover"
          />
        </motion.div>

        {/* ── About Text ── */}
        <motion.div
          className="space-y-6"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
            About ME-RIISE FOUNDATION
          </h2>
          <div className="h-1 w-14 rounded-full bg-brand-blue" />

          <p className="text-slate-700 leading-relaxed text-justify text-sm md:text-base">
            Malnad College of Engineering (MCE) was established in the year <Highlight>1960</Highlight>, during
            the second <Highlight>Five Year Plan</Highlight>, as a joint venture of Government of India, Government
            of Karnataka and the Malnad Technical Education Society, Hassan. Furthering its objectives beyond
            education, MCE undertook to create social and economic impact in the Hassan region by supporting
            innovations and start-ups in the field of agriculture, education and technology in the year{" "}
            <Highlight>2018</Highlight>. Thus, Malnad Enclave for Research, Innovation, Incubation, Start-ups
            and Entrepreneurship (ME-RIISE) was formed by MCE in the <Highlight>year 2018</Highlight> to initiate
            its above mentioned objectives supported by Management, Teaching staff and Students.
          </p>

          <p className="text-slate-700 leading-relaxed text-justify text-sm md:text-base">
            As a step towards further expanding its reach and enhancing its impact, ME-RIISE has set up a distinct
            entity — <span className="font-bold italic">a Section 8 company</span> — ME-RIISE FOUNDATION, promoted
            by Malnad College of Engineering in <Highlight>September, 2022</Highlight>. This Section 8 company is
            composed of <Highlight>5 Directors and 2 Advisors</Highlight>. ME-RIISE FOUNDATION is committed to
            promote <Highlight>innovation, incubation, start-ups, and entrepreneurship</Highlight> in the region
            and expand its reach, enabling students, youth and aspiring entrepreneurs to realize their potential
            and contribute towards the growth of the economy. In order to realize its vision, the foundation works
            in collaboration with Malnad College of Engineering (MCE).
          </p>

          <p className="text-slate-700 leading-relaxed text-justify text-sm md:text-base">
            Over the years, ME-RIISE FOUNDATION has orchestrated more than <Highlight>170 events</Highlight> and
            initiatives, resulting in significant benefits for over <Highlight>4,000 students</Highlight>. Through
            these endeavours, ME-RIISE has successfully supported in bringing out <Highlight>25+</Highlight>{" "}
            innovative prototypes and created <Highlight>10+</Highlight> new applications.
          </p>
        </motion.div>

        {/* ── Vision Card ── */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-linear-to-br from-brand-navy to-brand-blue p-12 text-center shadow-xl"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5 blur-2xl" />

          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white/15 mb-6">
            <FaLightbulb className="text-yellow-300 text-3xl" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest mb-4">
            Our Vision
          </h3>
          <div className="mx-auto mb-6 h-0.5 w-16 rounded-full bg-white/30" />
          <p className="text-white/90 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-medium italic">
            "To engender industry-ready graduates possessing magnificent skills in the arena of innovation
            and technological development of products / services."
          </p>
        </motion.div>

        {/* ── Proposed Activities ── */}
        <div className="space-y-8">
          <motion.div
            className="text-center"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Proposed Activities</h2>
            <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-brand-blue" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaSeedling className="text-brand-green text-4xl" />,
                title: "Innovation",
                desc: "Application of technology to promote arts, commerce, science, sports, education, research, social welfare, and protection of environment.",
              },
              {
                icon: <FaUsers className="text-brand-blue text-4xl" />,
                title: "Training",
                desc: "Providing young graduates adequate management and technical training to be creative and innovative in promoting business opportunities.",
              },
              {
                icon: <FaTools className="text-brand-navy text-4xl" />,
                title: "Employment",
                desc: "Creating job and employment opportunities for the region, empowering youth and students to become self-reliant.",
              },
              {
                icon: <FaLightbulb className="text-brand-orange text-4xl" />,
                title: "Perseverance",
                desc: "Incubating the spirit of perseverance in the youth, motivating them to embark on a victorious entrepreneurial journey.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="group flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.08, ease: "easeOut" }}
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h4>
                <div className="h-0.5 w-10 rounded-full bg-brand-blue mb-3" />
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Stats ── */}
        <Stats />
      </div>
    </div>
  );
};

export default AboutUs;
