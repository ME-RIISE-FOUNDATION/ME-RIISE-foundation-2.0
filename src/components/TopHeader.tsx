const partnerLogos = [
  { src: "logos/moe.png",                        alt: "MoE Innovation Cell",          h: "h-8 md:h-11" },
  { src: "logos/AICTE.png",                      alt: "AICTE",                         h: "h-9 md:h-13" },
  { src: "logos/IIC-logo-removebg-preview.png",  alt: "Institution's Innovation Council", h: "h-8 md:h-11" },
  { src: "logos/images (11).png",                alt: "NAIN",                          h: "h-8 md:h-11" },
  { src: "logos/UBA.png",                        alt: "Unnat Bharat Abhiyan",          h: "h-8 md:h-11" },
];

export default function TopHeader() {
  return (
    <div className="w-full bg-white py-4 md:py-6 font-poppins border-b-2 border-gray-100">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-[#002147] font-semibold text-[11px] sm:text-sm md:text-base lg:text-lg leading-snug tracking-wide uppercase">
            Malnad Enclave for Research, Innovation,
            <br className="hidden sm:block" /> Incubation, Startups and Entrepreneurship
          </h1>
          <p className="text-[#002147]/70 text-xs md:text-sm mt-1 font-medium">
            Malnad College of Engineering, Hassan
          </p>
        </div>

        {/* Partner Logos — horizontal scroll on mobile, centered row on desktop */}
        <div className="flex items-center gap-6 md:gap-10 overflow-x-auto md:justify-center scrollbar-none pb-1 px-2 md:px-0">
          {partnerLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.h} w-auto object-contain shrink-0`}
            />
          ))}
        </div>

      </div>
    </div>
  )
}