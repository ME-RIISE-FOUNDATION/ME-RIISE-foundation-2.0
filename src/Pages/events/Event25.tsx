import { motion } from "framer-motion";
import EventCard from "./EventCard";
import events from "@/data/events/events25";

export default function Event25() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative overflow-hidden bg-black py-20 px-6 text-center border-b border-white/10">
        <motion.p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#01adfc]"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        >
          ME-RIISE Foundation
        </motion.p>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          Events 2025
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#01adfc]"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-white/50 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hover over a card to see event details
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.04 }}
            >
              <EventCard images={event.images} title={event.title} description={event.description} date={event.date} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
