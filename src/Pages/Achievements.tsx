import React from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { ACHIEVEMENTS } from "@/data/achievements/achievements";

export default function Achievements() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-6 md:px-16 py-20 space-y-12 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-72 mx-auto rounded-xl" />
          <Skeleton className="h-4 w-56 mx-auto rounded-lg" />
        </div>
        <div className="space-y-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col md:flex-row gap-10 items-center rounded-2xl border border-gray-100 p-8">
              <Skeleton className="w-full md:w-[45%] h-[260px] rounded-xl shrink-0" />
              <div className="flex-1 space-y-4">
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-7 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-5/6 rounded-md" />
                <Skeleton className="h-4 w-2/3 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const reversed = [...ACHIEVEMENTS].reverse();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-6 text-center">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />

        <motion.p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ME-RIISE Foundation
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our Achievements
        </motion.h1>

        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        />

        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Proud moments, milestones, and recognitions that define our journey.
        </motion.p>

        <motion.span
          className="mt-6 inline-block rounded-full bg-white/10 px-5 py-1.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {ACHIEVEMENTS.length} Achievements &amp; Counting
        </motion.span>
      </div>

      {/* ── Cards ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-20 space-y-16">
        {reversed.map((ach, idx) => {
          const isAlt = idx % 2 === 1;
          const placeholder = `https://picsum.photos/seed/${encodeURIComponent(ach.imageName)}/800/500`;

          return (
            <motion.article
              key={ach.id}
              className="group relative flex flex-col md:flex-row items-center gap-10 rounded-2xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{ flexDirection: isAlt ? undefined : undefined }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* left accent bar */}
              <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image */}
              <motion.div
                className={`w-full md:w-[45%] shrink-0 overflow-hidden rounded-xl shadow-md ${isAlt ? "md:order-2" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
              >
                <img
                  src={ach.imageUrl || placeholder}
                  alt={ach.title}
                  className="w-full"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = placeholder;
                  }}
                />
              </motion.div>

              {/* Text */}
              <div className={`flex-1 space-y-4 ${isAlt ? "md:order-1" : ""}`}>
                {/* index badge */}
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100">
                  {String(reversed.length - idx).padStart(2, "0")}
                </span>

                <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  {ach.title}
                </h2>

                <div className="h-0.5 w-12 rounded-full bg-blue-500" />

                <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
                  {ach.description}
                </p>

                <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                  {ach.imageName}
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
