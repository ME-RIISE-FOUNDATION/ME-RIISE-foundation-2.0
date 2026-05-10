import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

// Define a type for the objective items
interface ObjectiveItem {
  id: string;
  text: string;
}

// Data for the objectives
const objectivesData: ObjectiveItem[] = [
  {
    id: "obj1",
    text: "Application of technology to promote arts, commerce, science, sports, education, research, social welfare, religion, charity, protection of environment.",
  },
  {
    id: "obj2",
    text: "Providing the young graduates adequate management and technical training that will enable them to be creative and innovative in promoting business opportunities.",
  },
  {
    id: "obj3",
    text: "To create job and employment opportunities for the region of our nation.",
  },
  {
    id: "obj4",
    text: "To incubate the spirit of perseverance in the youths.",
  },
];

export function ObjectivesSection() {
  return (
    <section className="w-full bg-[#001a3a] text-slate-200 py-16 md:py-24 font-poppins">
      <div className="container mx-auto px-4">

        <div className="mb-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">What We Stand For</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Objectives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Image */}
          <div className="w-full">
            <img
              src="/aboutus/ME-RIISEBuilding.png"
              alt="ME-RIISE Foundation Building"
              className="rounded-2xl w-full object-cover shadow-2xl"
              style={{ maxHeight: '480px' }}
            />
          </div>

          {/* Objectives */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-5">
              {objectivesData.map((item) => (
                <li key={item.id} className="flex items-start gap-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400 mt-1" />
                  <span className="text-base md:text-lg leading-relaxed text-slate-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              className="mt-10 self-start bg-blue-600 hover:bg-blue-500 text-white font-semibold py-6 px-8 rounded-xl text-base transition-colors"
              asChild
            >
              <Link to="/aboutus">Know more about ME-RIISE Foundation</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}