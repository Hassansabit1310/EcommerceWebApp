import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import heroImage from '@/images/impressed-startled-excited-cute-redhead-female-receive-big-gift-shaping-large-object-product.jpg'
import Image from "next/image"

export function HeroSlider() {
  return (
    <Carousel className="w-full max-w-7xl mx-auto">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="border-0">
              <CardContent className="flex aspect-[16/9] items-center justify-center p-6">

              <Image src={heroImage} className="w-full h-full rounded-lg"/>
                {/* <img
                  src={heroImage}
                  alt={'image'}
                  className="w-full h-full object-cover rounded-lg"
                /> */}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}