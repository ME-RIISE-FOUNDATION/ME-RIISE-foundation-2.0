import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { FaUsers, FaCogs, FaLightbulb, FaMobileAlt } from "react-icons/fa";

const statsConfig = [
    { label: "Events & Initiatives", value: 170, icon: <FaCogs className="text-blue-600 text-4xl" /> },
    { label: "Students Benefited",   value: 4000, icon: <FaUsers className="text-green-600 text-4xl" /> },
    { label: "Innovative Prototypes", value: 25,  icon: <FaLightbulb className="text-yellow-500 text-4xl" /> },
    { label: "Applications Created",  value: 10,  icon: <FaMobileAlt className="text-purple-600 text-4xl" /> },
];

export default function DashboardStats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
    const [counts, setCounts] = useState(statsConfig.map(() => 0));

    useEffect(() => {
        if (!isInView) return;

        const targets = statsConfig.map((s) => s.value);
        const interval = setInterval(() => {
            setCounts((prev) => {
                const next = prev.map((n, i) => {
                    const step = Math.ceil(targets[i] / 40);
                    return n + step >= targets[i] ? targets[i] : n + step;
                });
                if (next.every((n, i) => n >= targets[i])) clearInterval(interval);
                return next;
            });
        }, 40);

        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <div ref={ref} className="w-full py-10 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                    Our Key <span className="text-blue-600">Achievements</span>
                </h2>
                <p className="text-center text-gray-500 text-sm md:text-base mb-8">Numbers that define our impact</p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {statsConfig.map((item, index) => (
                        <div
                            key={index}
                            className="p-4 md:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="text-2xl md:text-4xl">{item.icon}</div>
                            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mt-3 tabular-nums">
                                {counts[index].toLocaleString()}
                                {item.value >= 100 ? "+" : ""}
                            </h3>
                            <p className="text-gray-500 mt-1 text-xs md:text-sm font-medium leading-tight">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
