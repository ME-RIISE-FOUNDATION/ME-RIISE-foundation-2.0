import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

// Correct import
import { slidesData } from "@/data/carousel-main/Carousel"
import type { SlideData } from "@/data/carousel-main/Carousel"

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  )

  return (
    <section className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {/* ✅ Render in REVERSE ORDER */}
          {[...slidesData].reverse().map((slide: SlideData) => (
            <CarouselItem key={slide.id}>
              <div>
                <Card className="border-0 shadow-none">
                  <CardContent className="flex items-center justify-center p-0">
                    
                    {/* IMAGE SLIDE */}
                    {slide.type === "image" && slide.imageUrl && (
                      <div className="relative h-[220px] sm:h-[360px] md:h-[500px] w-full overflow-hidden">
                        <img
                          src={slide.imageUrl}
                          alt={slide.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent px-4 py-4 md:px-8 md:py-6 text-white">
                          <h3 className="text-base font-bold sm:text-xl md:text-3xl leading-tight">{slide.title}</h3>
                          {slide.description && (
                            <p className="hidden sm:block text-xs md:text-sm text-slate-300 mt-1 max-w-2xl">
                              {slide.description}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* PLACEHOLDER SLIDE */}
                    {slide.type === "placeholder" && slide.themeClasses && (
                      <div
                        className={`flex h-[220px] sm:h-[360px] md:h-[500px] w-full items-center justify-center ${slide.themeClasses.bg}`}
                      >
                        <span className={`text-xl sm:text-2xl font-semibold ${slide.themeClasses.text}`}>
                          {slide.title}
                        </span>
                      </div>
                    )}

                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 hidden md:flex" />
        <CarouselNext className="right-4 hidden md:flex" />
      </Carousel>
    </section>
  )
}
