import { motion } from "framer-motion";
import { Mail, CalendarDays, QrCode } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const staffPositions = [
  "Incubation Manager",
  "Program Associate / Outreach Officer",
  "Technical Associate / Admin Associate",
  "Software Associate",
  "Finance Associate / Junior Accountant",
  "Innovation Associate",
  "Support Staff",
  "Housekeeping Staff",
];

const leadershipPositions = [
  "Chief Executive Officer (CEO) / Principal Investigator",
  "Chief Operating Officer (COO) / Operations Manager",
];

export default function OpenPositions() {
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
          TBI-MCE
        </motion.p>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          Open Positions
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          Technology Business Incubator, Managed by ME-RIISE Foundation
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 space-y-14">

        {/* ── Posting 1: Staff Positions ── */}
        <motion.div
          className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden"
          variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid md:grid-cols-2">
            {/* Banner Image */}
            <div className="bg-slate-100">
              <img
                src="/tbi/Wearehiring.jpeg"
                alt="TBI Hiring Banner"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy">
                  Job Applications Invited —{" "}
                  <span className="text-brand-blue">TBI-MCE</span>
                </h2>
                <div className="h-1 w-12 rounded-full bg-brand-blue mt-3" />
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                ME-RIISE Foundation is managing the Technology Business Incubator at Malnad College
                of Engineering (TBI-MCE), Hassan, supported by the Government of Karnataka under the{" "}
                <strong>TBI 2.0 initiative</strong>, and invites applications for the following
                contractual positions.
              </p>

              <div>
                <p className="text-sm font-semibold text-brand-navy mb-3">Open Positions</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {staffPositions.map((pos) => (
                    <li
                      key={pos}
                      className="bg-slate-50 border border-gray-100 rounded-lg px-3 py-2 text-xs font-medium text-slate-700"
                    >
                      {pos}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Applicants are requested to apply for <strong>only one position</strong>.
                Only shortlisted candidates will be contacted.
              </p>

              {/* Apply + QR */}
              <div className="flex items-center gap-6">
                <a
                  href="https://forms.gle/akt9bPCQBqHyRaMY8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-blue text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-brand-navy transition-colors duration-200"
                >
                  Apply Online
                </a>
                <div className="text-center">
                  <img src="/tbi/qr1.png" alt="QR Code" className="w-20 h-20 object-contain" />
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1 justify-center">
                    <QrCode className="w-3 h-3" /> Scan to Apply
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <p className="text-sm font-semibold text-red-600 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  Last Date: 07-01-2026
                </p>
                <p className="text-sm text-slate-600 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-blue" />
                  <a href="mailto:ceomeriise@mcehassan.ac.in" className="text-brand-blue hover:underline">
                    ceomeriise@mcehassan.ac.in
                  </a>
                </p>
                <p className="text-xs text-slate-500 pt-1">
                  Sd/- <br />
                  <strong>Chief Executive Officer</strong><br />
                  TBI-MCE, Managed by ME-RIISE Foundation
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Posting 2: CEO / COO ── */}
        <motion.div
          className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden"
          variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid md:grid-cols-2">
            {/* Banner Image */}
            <div className="bg-slate-100">
              <img
                src="/tbi/Hiring_CEO_COO.png"
                alt="CEO COO Hiring Banner"
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Content */}
            <div className="p-8 space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy">
                  Hiring Notice —{" "}
                  <span className="text-brand-blue">TBI-MCE</span>
                </h2>
                <div className="h-1 w-12 rounded-full bg-brand-blue mt-3" />
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Greetings from Technology Business Incubator – MCE (TBI-MCE), Managed by
                ME-RIISE Foundation, Malnad College of Engineering, Hassan. We invite applications
                from experienced and dynamic professionals for the following leadership positions:
              </p>

              <div>
                <p className="text-sm font-semibold text-brand-navy mb-3">Open Positions</p>
                <ol className="space-y-2">
                  {leadershipPositions.map((pos, i) => (
                    <li
                      key={pos}
                      className="flex items-start gap-3 bg-slate-50 border border-gray-100 rounded-lg px-4 py-3"
                    >
                      <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-brand-blue text-white text-xs font-bold">
                        {i + 1}
                      </span>
                      <span className="text-sm font-medium text-slate-700">{pos}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Applicants are expected to demonstrate strong leadership, strategic vision, and proven
                experience in managing innovation ecosystems, incubation programs, or large-scale
                project operations. Detailed eligibility criteria and job descriptions are available
                in the application form.
              </p>

              <p className="text-xs text-slate-500 leading-relaxed">
                At the end of the application form, candidates are required to upload their updated
                resume. Ensure the document is ready before proceeding. Only shortlisted candidates
                will be contacted.
              </p>

              {/* Apply + QR */}
              <div className="flex items-center gap-6">
                <a
                  href="https://forms.gle/9Pnzx4H7daDgJFaZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-blue text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-brand-navy transition-colors duration-200"
                >
                  Apply Online
                </a>
                <div className="text-center">
                  <img src="/tbi/qr2.png" alt="QR Code" className="w-20 h-20 object-contain" />
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1 justify-center">
                    <QrCode className="w-3 h-3" /> Scan to Apply
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <p className="text-sm font-semibold text-red-600 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  Last Date to Apply: 07 January 2026
                </p>
                <p className="text-sm text-slate-600 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-blue" />
                  <a href="mailto:ceomeriise@mcehassan.ac.in" className="text-brand-blue hover:underline">
                    ceomeriise@mcehassan.ac.in
                  </a>
                </p>
                <p className="text-xs text-slate-500 pt-1">
                  Sd/- <br />
                  <strong>Chief Executive Officer</strong><br />
                  TBI-MCE, Managed by ME-RIISE Foundation
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
