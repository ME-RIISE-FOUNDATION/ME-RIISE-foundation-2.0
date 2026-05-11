// If you want autoplay, uncomment the next line and add it to plugins array
// import Autoplay from "embla-carousel-autoplay" 

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button" // Assuming you have shadcn button

// Define a type for each initiative item
interface InitiativeItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

// Data for your initiatives - replace with your actual content
const initiativesData: InitiativeItem[] = [
  {
    id: "startup",
    imageUrl: "/startups/edtech5.jpeg", // Replace with actual image path
    title: "Start Ups",
    description: "Empowering innovation with cutting-edge solutions for a brighter future.",
    link: "/startups",
  },
  {
    id: "uba-visit",
    imageUrl: "/uba/train3.jpg", // Replace with actual image path
    title: "UBA Visit",
    description: "Discover this impactful collaboration with UBA driving growth and innovation together.",
    link: "/uba",
  },
  {
    id: "pragyatha",
    imageUrl: "/pragyatha/Admania.jpg", // Replace with actual image path
    title: "Pragyatha",
    description: "Unlocking potential through Pragyatha's transformative strategies for success.",
    link: "/pragyatha",
  },
  {
    id: "nain-projects",
    imageUrl: "/nain/nain1/b4.jpg", // Replace with actual image path
    title: "NAIN Projects",
    description: "Driving cutting-edge research in various domains with industry partnerships.",
    link: "/nain/nain2-projects",
  },
];

export function Initiatives() {
  // If you uncomment Autoplay, you'd use it here:
  // const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  return (
    <section className="w-full bg-white py-12 md:py-16 font-poppins">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <div className="mb-10">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Initiatives by <span className="text-blue-600">ME-RIISE Foundation</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-3xl leading-relaxed">
            ME-RIISE Foundation fosters innovation and entrepreneurship through skill development, startup incubation, and mentorship. We collaborate with industries and academic institutions to bridge the gap between education and real-world challenges — empowering individuals through workshops, hackathons, and funding opportunities.
          </p>
        </div>

        {/* Carousel for Initiatives */}
        <Carousel
          // plugins={[plugin.current]} // Uncomment this line if using Autoplay
          opts={{
            align: "start",
            loop: true, // <-- ADD THIS LINE to make the carousel repeat
          }}
          className="w-full"
          // onMouseEnter={plugin.current.stop} // Uncomment for autoplay
          // onMouseLeave={plugin.current.reset} // Uncomment for autoplay
        >
          <CarouselContent className="-ml-4">
            {initiativesData.map((item) => (
              <CarouselItem key={item.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="flex flex-col flex-grow p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-grow mb-4">
                        {item.description}
                      </p>
                      <Button asChild className="mt-auto self-start bg-blue-600 hover:bg-blue-700 text-white">
                        <a href={item.link}>Know more</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex left-2" />
          <CarouselNext className="hidden sm:flex right-2" />
        </Carousel>
      </div>
    </section>
  )
}