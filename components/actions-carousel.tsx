"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const actionImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tranformado%20Espa%C3%A7%C3%B5es%20Educativos-R9UKkoZ2j4AxIt9gpnCtnaiNVbYEiJ.jpg",
    alt: "Transformando Espaços Educativos - Oficina em biblioteca escolar",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oficina%20Dom%20Alano-67BkVQvevUrz5QOgpdXZHhTCG9DCn4.jpg",
    alt: "Oficina Dom Alano - Estudantes em workshop de tecnologia",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dom%20Alano-KxtVKoZUe7U6dlRpg1wlsnMw3rgG3K.jpg",
    alt: "Dom Alano - Grupo de estudantes em atividade colaborativa",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Campus%20Augustinopolis-JAP3bYOVIWn1Kt7RaWydQOWPf3nZF6.jpg",
    alt: "Campus Augustinopolis - Exposição Meninas e Mulheres Inovadoras",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Daniel%20Batista-f08a4Wtg1ZCcy7KHQ4c6WSkLQzb2hN.jpg",
    alt: "Estudante interagindo com banner sobre Mary Jackson",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/palmasfestival-TzfX3hx4eyCJ8pLQfIpqwPJcHESaIh.jpg",
    alt: "Festival em Palmas - Grupo de estudantes com bandeiras dos ODS",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/palmas-hW4kHsyeDPZglMlGeU7Smatcgd7tt6.png",
    alt: "Palmas - Estudantes em apresentação do projeto Meninas e Mulheres Inovadoras",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/augustinopolisroda-xE57nF18uAXPW7gwLz1DixH1vSmg3R.jpg",
    alt: "Augustinopolis - Roda de conversa com mulheres",
  },
]

export function ActionsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {actionImages.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
            <div className="p-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-white shadow-xl group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-white/90 hover:bg-white border-primary/20 hover:border-primary text-primary" />
      <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-white/90 hover:bg-white border-primary/20 hover:border-primary text-primary" />
    </Carousel>
  )
}
