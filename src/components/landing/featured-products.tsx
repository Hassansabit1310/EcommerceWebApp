import { ProductCard } from "../products/products-crad"


const featuredProducts = [
  { id: 1, name: "Classic T-Shirt", price: 29.99, image: "/placeholder.svg?height=300&width=300&text=T-Shirt" },
  { id: 2, name: "Denim Jeans", price: 59.99, image: "/placeholder.svg?height=300&width=300&text=Jeans" },
  { id: 3, name: "Leather Jacket", price: 199.99, image: "/placeholder.svg?height=300&width=300&text=Jacket" },
  { id: 4, name: "Sneakers", price: 89.99, image: "/placeholder.svg?height=300&width=300&text=Sneakers" },
]

export function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}