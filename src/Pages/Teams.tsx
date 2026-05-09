import { motion } from "framer-motion";
import { TEAM_GROUPS } from "@/data/teams";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.04, ease: "easeOut" as const },
  }),
};

export default function TeamsPage() {
  const totalMembers = TEAM_GROUPS.reduce((acc, g) => acc + g.members.length, 0);

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
          Team ME-RIISE
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          {totalMembers} Student Members driving innovation at Malnad College of Engineering
        </motion.p>
      </div>

      {/* ── Year Sections ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 space-y-20">
        {TEAM_GROUPS.map((group, groupIdx) => (
          <section key={group.year}>
            {groupIdx > 0 && <hr className="border-t border-gray-200 mb-12" />}

            {/* Section header */}
            <motion.div
              className="mb-10 flex items-center gap-4"
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">{group.label}</h2>
                <div className="mt-1 h-0.5 w-12 rounded-full bg-brand-blue" />
              </div>
              <span className="ml-auto text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                {group.members.length} members
              </span>
            </motion.div>

            {/* Cards grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
              {group.members.map((member, idx) => (
                <motion.div
                  key={member.id}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg overflow-hidden transition-shadow duration-300"
                  variants={fadeUp} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}
                >
                  {/* Photo */}
                  <div className="overflow-hidden h-72 bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/team_imgs/default.jpg";
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 space-y-1">
                    <h3 className="text-sm font-bold text-brand-navy leading-snug">{member.name}</h3>
                    <p className="text-xs text-slate-500 leading-snug">{member.branch}</p>
                    <span className="inline-block mt-2 text-xs font-semibold text-brand-blue bg-blue-50 px-2 py-0.5 rounded-full">
                      Student Member
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </section>
        ))}
      </div>

    </div>
  );
}
