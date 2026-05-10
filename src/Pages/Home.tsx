import { HeroCarousel } from "../components/HeroCarousel"
import { EventPopup } from "../components/PopUp"
import TopHeader from "../components/TopHeader";
import { Initiatives } from "../components/Initiatives";
import { PragyathaEvents } from "../components/PragyathaGlimpse";
import { ObjectivesSection } from "../components/Objects";
import { AnimateOnScroll } from "../components/AnimateOnScroll";
import DashboardStats from "@/components/DashboardStats";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-poppins">
      <TopHeader />
      <EventPopup />
      <HeroCarousel />

      <main>
        <AnimateOnScroll>
          <Initiatives />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <PragyathaEvents />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <DashboardStats />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <ObjectivesSection />
        </AnimateOnScroll>
      </main>
    </div>
  )
}

export default Home
