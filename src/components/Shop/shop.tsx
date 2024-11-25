'use client'

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import { Filter, SlidersHorizontal, Star, ShoppingCart, X } from 'lucide-react'
import { useGetProductsQuery } from "@/services/productApi/productApi"
import { useGetCategoriesQuery } from "@/services/categoryiesApi/categoryApi"

type Product = {
    id: number
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
  }

// Sample product data
const products = [
  { id: 1, name: "Classic T-Shirt", price: 29.99, category: "Clothing", color: "White", size: "M", rating: 4.5, image: "/placeholder.svg?height=300&width=300&text=T-Shirt" },
  { id: 2, name: "Denim Jeans", price: 59.99, category: "Clothing", color: "Blue", size: "32", rating: 4.2, image: "/placeholder.svg?height=300&width=300&text=Jeans" },
  { id: 3, name: "Running Shoes", price: 89.99, category: "Footwear", color: "Black", size: "10", rating: 4.7, image: "/placeholder.svg?height=300&width=300&text=Shoes" },
  { id: 4, name: "Leather Wallet", price: 39.99, category: "Accessories", color: "Brown", size: "One Size", rating: 4.0, image: "/placeholder.svg?height=300&width=300&text=Wallet" },
  { id: 5, name: "Sunglasses", price: 79.99, category: "Accessories", color: "Black", size: "One Size", rating: 4.3, image: "/placeholder.svg?height=300&width=300&text=Sunglasses" },
  { id: 6, name: "Wristwatch", price: 129.99, category: "Accessories", color: "Silver", size: "One Size", rating: 4.8, image: "/placeholder.svg?height=300&width=300&text=Watch" },
  { id: 7, name: "Hooded Sweatshirt", price: 49.99, category: "Clothing", color: "Gray", size: "L", rating: 4.4, image: "/placeholder.svg?height=300&width=300&text=Sweatshirt" },
  { id: 8, name: "Backpack", price: 69.99, category: "Accessories", color: "Navy", size: "One Size", rating: 4.6, image: "/placeholder.svg?height=300&width=300&text=Backpack" },
]

const categories = ["All", "Clothing", "Footwear", "Accessories"]
const colors = ["White", "Black", "Blue", "Brown", "Gray", "Navy", "Silver"]
const sizes = ["XS", "S", "M", "L", "XL", "One Size", "32", "10"]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")
  const [currentPage, setCurrentPage] = useState(1)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const {data:allProducts,isLoading: isProductsLoading}=useGetProductsQuery({})
  const [products, setProducts] = useState<Product[]>([])

  const {data:allCategories}=useGetCategoriesQuery({})

 console.log('products',products);
 


const newfilteredProducts = allProducts?.filter((product) => {
    return (
      (selectedCategory === "All" || product?.category === selectedCategory) &&
      product?.price >= priceRange[0] &&
      product?.price <= priceRange[1] &&
      (selectedColors.length === 0 || selectedColors.includes(product?.color)) &&
      (selectedSizes.length === 0 || selectedSizes.includes(product?.size))
    )
  })


    

  const itemsPerPage = 6

  const filteredProducts = products?.filter((product) => {
    return (
      (selectedCategory === "All" || product?.category === selectedCategory) &&
      product?.price >= priceRange[0] &&
      product?.price <= priceRange[1] &&
      (selectedColors.length === 0 || selectedColors.includes(product?.color)) &&
      (selectedSizes.length === 0 || selectedSizes.includes(product?.size))
    )
  })

  useEffect(() => {
    console.log('all',allProducts);
    
    if (!isProductsLoading && allProducts) {
        setProducts(allProducts)
      }
    const filters = []
    if (selectedCategory !== "All") filters.push(selectedCategory)
    if (priceRange[0] > 0 || priceRange[1] < 200) filters.push("Price")
    if (selectedColors.length > 0) filters.push("Color")
    if (selectedSizes.length > 0) filters.push("Size")
    setActiveFilters(filters)
  }, [selectedCategory, priceRange, selectedColors, selectedSizes,allProducts,isProductsLoading])

  
  
 const categories=['All']
 allCategories?.map((category)=>{
    return categories.push(category)
 })

 console.log('newcat',categories);
 
  

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low-high") return a.price - b.price
    if (sortBy === "price-high-low") return b.price - a.price
    if (sortBy === "rating") return b.rating - a.rating
    return 0 // "featured" or default
  })

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)
  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleColorToggle = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    )
  }

  const handleSizeToggle = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    )
  }

  const clearAllFilters = () => {
    setSelectedCategory("All")
    setPriceRange([0, 1000])
    setSelectedColors([])
    setSelectedSizes([])
  }

  const FilterSection = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">Category</h2>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories?.map((category: string) => (
              <SelectItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Price Range</h2>
        <Slider
          min={0}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
        />
        <div className="flex justify-between mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Color</h2>
        <div className="space-y-2">
          {colors.map((color) => (
            <div key={color} className="flex items-center">
              <Checkbox
                id={`color-${color}`}
                checked={selectedColors.includes(color)}
                onCheckedChange={() => handleColorToggle(color)}
              />
              <Label htmlFor={`color-${color}`} className="ml-2">
                {color}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Size</h2>
        <div className="space-y-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center">
              <Checkbox
                id={`size-${size}`}
                checked={selectedSizes.includes(size)}
                onCheckedChange={() => handleSizeToggle(size)}
              />
              <Label htmlFor={`size-${size}`} className="ml-2">
                {size}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={clearAllFilters} variant="outline" className="w-full">
        Clear All Filters
      </Button>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Shop Our Products</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block w-1/4 space-y-6">
          <FilterSection />
        </aside>

        {/* Mobile Filter Drawer */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" className="lg:hidden mb-4">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="p-4 max-h-[80vh] overflow-y-auto">
              <FilterSection />
            </div>
          </DrawerContent>
        </Drawer>

        {/* Main Content */}
        <main className="w-full lg:w-3/4">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-4 lg:mb-0">
              <p className="text-sm text-gray-500">{sortedProducts.length} products</p>
              {activeFilters.map((filter) => (
                <Badge key={filter} variant="secondary">
                  {filter}
                </Badge>
              ))}
              {activeFilters.length > 0 && (
                <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                  <X className="h-4 w-4 mr-1" /> Clear All
                </Button>
              )}
            </div>
            <div className="flex items-center">
              <Label htmlFor="sort" className="mr-2">
                Sort by:
              </Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger id="sort">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProducts?.map((product: Product) => (
              <Card title={product?.title} key={product.id} className="w-full max-w-sm  overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 mb-4 overflow-hidden rounded-md">
                  <img src={product.image} alt={product?.title} className="w-full h-full object-cover" />
                </div>
                <h3 title={product?.title} className="font-semibold text-lg line-clamp-1">{product?.title}</h3>
                <p className="text-sm text-gray-500">{product?.category}</p>
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm">{product?.rating.rate.toFixed(1)}</span>
                </div>
                <p className="mt-2 font-bold text-lg">${product?.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
            ))}


          </div>

          {/* Pagination */}
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => setCurrentPage(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </main>
      </div>
    </div>
  )
}