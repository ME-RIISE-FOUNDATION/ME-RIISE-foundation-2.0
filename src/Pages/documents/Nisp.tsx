import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Nisp() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

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
          NISP Policy
        </motion.h1>
        <motion.div
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.p
          className="mt-5 text-slate-400 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          National Innovation and Startup Policy — Malnad College of Engineering
        </motion.p>
      </div>

      {/* ── PDF Viewer ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-20">

        <motion.p
          className="text-slate-600 text-sm md:text-base text-center max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
        >
          View the official NISP document outlining the institutional framework for fostering
          innovation, IPR, and student &amp; faculty startup support.
        </motion.p>

        <motion.div
          className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Document
            file="/pdfs/nisp.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<p className="text-center text-slate-500 py-10">Loading PDF…</p>}
          >
            <Page pageNumber={pageNumber} className="mx-auto" />

            <div className="flex justify-between items-center mt-6 text-slate-700">
              <button
                onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
                disabled={pageNumber === 1}
                className="px-5 py-2 bg-brand-navy text-white rounded-xl font-medium hover:bg-brand-blue transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              <p className="text-sm text-slate-500">
                Page {pageNumber} of {numPages ?? "…"}
              </p>

              <button
                onClick={() => setPageNumber((p) => Math.min(p + 1, numPages ?? p))}
                disabled={pageNumber === numPages}
                className="px-5 py-2 bg-brand-navy text-white rounded-xl font-medium hover:bg-brand-blue transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </Document>
        </motion.div>

      </div>
    </div>
  );
}
