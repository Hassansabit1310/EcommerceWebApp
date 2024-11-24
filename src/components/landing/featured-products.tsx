import { ProductCard } from "../products/products-crad"


const featuredProducts = [
  {
    id: 1,
    title: "Classic T-Shirt",
    price: 29.99,
    description: "A timeless classic T-shirt, perfect for everyday wear.",
    category: "Clothing",
    image: "/placeholder.svg?height=300&width=300&text=T-Shirt",
    rating: {
      rate: 4.5,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Denim Jeans",
    price: 59.99,
    description: "Stylish and durable denim jeans for a casual look.",
    category: "Clothing",
    image: "/placeholder.svg?height=300&width=300&text=Jeans",
    rating: {
      rate: 4.3,
      count: 85,
    },
  },
  {
    id: 3,
    title: "Leather Jacket",
    price: 199.99,
    description: "Premium leather jacket for a sleek and modern style.",
    category: "Clothing",
    image: "/placeholder.svg?height=300&width=300&text=Jacket",
    rating: {
      rate: 4.7,
      count: 60,
    },
  },
  {
    id: 4,
    title: "Sneakers",
    price: 89.99,
    description: "Comfortable and trendy sneakers for everyday use.",
    category: "Footwear",
    image: "/placeholder.svg?height=300&width=300&text=Sneakers",
    rating: {
      rate: 4.6,
      count: 200,
    },
  },
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