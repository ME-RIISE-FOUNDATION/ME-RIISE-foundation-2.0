import { useState, useEffect } from "react";

interface EventCardProps {
  images: string[];
  title: string;
  description: string;
  date: string;
}

export default function EventCard({ images, title, description, date }: EventCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div
      className="relative h-[60vh] w-[90vw] lg:w-full bg-black rounded-2xl border-2 border-white/20 overflow-hidden cursor-pointer mx-auto"
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      onClick={() => setRevealed((v) => !v)}
    >
      {/* ── Image ── */}
      <img
        src={images[currentIndex]}
        alt={title}
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-300 ${revealed ? "opacity-0" : "opacity-100"}`}
      />

      {/* ── Title bar (normal state) ── */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-black/70 px-5 py-3 transition-opacity duration-300 ${revealed ? "opacity-0" : "opacity-100"}`}
      >
        <p className="text-sm lg:text-base font-bold text-[#01adfc] text-center">{title}</p>
      </div>

      {/* ── Revealed: description + date ── */}
      <div
        className={`absolute inset-0 bg-black flex flex-col justify-center items-center px-8 transition-opacity duration-300 ${revealed ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <p className="text-[#01adfc] text-sm lg:text-base text-justify leading-relaxed">
          {description}
        </p>
        <p className="text-[#01adfc] text-sm mt-6 self-start">
          <span className="font-bold">Date:</span> {date}
        </p>
      </div>
    </div>
  );
}
