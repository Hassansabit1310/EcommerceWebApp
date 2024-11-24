import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import ClothingImage from '@/images/3861427.jpg'

const categories: string[] = ["Clothing", "Shoes", "Accessories", "Sportswear", "Formal Wear", "Casual Wear"]

export function ShopCategories() {
  return (
    <>
      <section className="hidden lg:block lg:py-12 lg:bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {categories.map((category, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <Card 
                    className={`relative bg-cover bg-center bg-no-repeat ${category === "Clothing" ? "text-white" : ""}`}
                  >
                    {category === "Clothing" ? (
                      <Image
                        src={ClothingImage}
                        alt="Clothing"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    ) : null}
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-xl font-semibold z-20 relative">{category}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </section>
      
      <section className="block lg:hidden py-12 bg-gray-50">
        <div className="space-y-4 py-4">
          <h2 className="px-4 text-lg font-semibold text-center">Categories</h2>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-4 px-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="secondary"
                  className="flex-shrink-0 rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="invisible" />
          </ScrollArea>
        </div>
      </section>
    </>
  )
}

