import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  title: string
  price: number
  image: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-64 h-114 flex flex-col">
      <CardContent className="p-0 flex-grow">
        <div className="relative w-full h-80">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 title={product.title} className="font-semibold text-lg mb-1 line-clamp-2">{product.title}</h3>
          <p className="text-gray-600 mt-auto">${product.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}