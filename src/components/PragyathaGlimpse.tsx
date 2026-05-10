import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card"
// Define a type for each event item
interface PragyathaEvent {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

// Data for your Pragyatha events - replace with your actual content and image paths
const pragyathaEventsData: PragyathaEvent[] = [
  {
    id: "Admania",
    imageUrl: "/pragyatha/Admania.jpg",
    title: "Admania",
    description: "Admania was a creative marketing event that encouraged participants to develop innovative advertising strategies and campaigns, enhancing their skills in branding and market analysis."
  },
  {
    id: "Block Cord",
    imageUrl: "/pragyatha/Blockcord.jpg",
    title: "Blockcord",
    description: "Blockcord introduced fundamental concepts related to blockchain and collaborative platforms, focusing on practical understanding and technical skill development."
  },
  {
    id: "CloudLab",
    imageUrl: "/pragyatha/Cloudlab.jpeg",
    title: "CloudLab",
    description: "It is a dynamic two-day event where participants gain hands-on experience with cloud computing technologies through practical labs, demonstrations, and guided sessions.."
  },
  {
    id: "Designing 101",
    imageUrl: "/pragyatha/Designing 101.jpg",
    title: "Designing 101",
    description: "A two-day hands-on workshop covering design fundamentals like typography and color theory to build practical creative skills through poster making."
  },
  {
    id: "Entrorphosis",
    imageUrl: "/pragyatha/Entrorphosis.jpg",
    title: "Entrorphosis",
    description: "Entrorphosis was an entrepreneurship-focused event that nurtured innovative thinking and problem-solving skills through idea generation, pitching, and business model development."
  },
  {
    id: "UI",
    imageUrl: "/pragyatha/UI UX.jpg",
    title: "UI UX hackathon",
    description: "A UI/UX Hackathon is a 24-hour design sprint where teams research and build innovative, user-centered digital prototypes through rapid collaboration."
  }
]

export function PragyathaEvents() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 font-poppins">
      <div className="container mx-auto px-4">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-1">Annual Flagship Event</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Pragyatha <span className="text-blue-600">'25</span>
            </h2>
          </div>
          <Link
            to="/pragyatha/2025"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors shrink-0"
          >
            View all events <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pragyathaEventsData.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="px-5 pt-4 pb-1">
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <CardDescription className="text-sm text-gray-500 leading-relaxed">
                  {event.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}