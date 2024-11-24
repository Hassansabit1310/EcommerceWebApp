import Image from 'next/image'
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

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

export default function ProductPage({ product }: { product: Product}) {
  return (
    <div className="min-h-screen">
     
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((img) => (
                  <div key={img} className="relative h-24 bg-gray-100 rounded-md cursor-pointer">
                    <Image
                      src={product?.image}
                      alt={`Product image ${product?.image}`}
                      className="object-cover object-center"
                      fill
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full aspect-w-1 aspect-h-1">
              <Image
                src={product?.image}
                alt="Main product image"
                className="w-full h-full object-center object-cover sm:rounded-lg"
                width={600}
                height={600}
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product?.title}</h1>
            <div className="mt-3">
              <h2 className="sr-only">{product?.description}</h2>
              <p className="text-3xl text-gray-900">{product?.price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`${
                        rating < product?.rating.rate ? 'text-yellow-400' : 'text-gray-300'
                      } h-5 w-5 flex-shrink-0`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">4 out of 5 stars</p>
                <a href="#reviews" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                 {product?.rating.count} reviews
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">
                {product?.description}
              </p>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700 flex-1">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to cart
                </Button>
                <Button size="icon" variant="outline" className="ml-4">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="ml-4">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <div className="mt-4">
                <ul className="pl-4 list-disc text-sm space-y-2">
                  <li>High-fidelity sound with deep, accurate bass response</li>
                  <li>Active Noise Cancellation for immersive listening</li>
                  <li>30 hours of battery life</li>
                  <li>Comfortable, ergonomic design for all-day wear</li>
                  <li>Bluetooth 5.0 for stable, long-range wireless connection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Product details */}
        <div className="mt-16 lg:mt-24">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Product Details</h2>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500">
            <p>
              Our Premium Wireless Headphones are designed to deliver an exceptional audio experience. 
              With advanced acoustic engineering, these headphones produce clear highs, balanced mids, 
              and deep bass for all types of music.
            </p>
            <p>
              The Active Noise Cancellation technology uses advanced algorithms to analyze and cancel out 
              ambient noise, allowing you to focus on your music or work without distractions. The comfortable 
              over-ear design with premium materials ensures you can wear these headphones for extended periods 
              without discomfort.
            </p>
            <p>
              With a battery life of up to 30 hours, you can enjoy your music all day long. The headphones also 
              feature quick charging capabilities, providing 3 hours of playback with just 10 minutes of charging.
            </p>
            <p>
              These headphones are perfect for music enthusiasts, professionals working in noisy environments, 
              or anyone who values high-quality audio and comfort.
            </p>
          </div>
        </div>

        {/* Customer reviews */}
        <div id="reviews" className="mt-16 lg:mt-24">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customer Reviews</h2>
          <div className="mt-6 pb-10 border-t border-b border-gray-200 divide-y divide-gray-200 space-y-10">
            {/* Sample review */}
            <div className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-start-1 lg:col-span-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <Star
                        key={rating}
                        className={`${
                          rating < 5 ? 'text-yellow-400' : 'text-gray-300'
                        } h-5 w-5 flex-shrink-0`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-700">5 out of 5 stars</p>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-900">Amazing sound quality!</h3>
                  <p className="mt-1 text-sm text-gray-500">Reviewed in the United States on July 1, 2021</p>
                </div>
              </div>
              <div className="mt-6 lg:mt-0 lg:col-start-5 lg:col-span-8">
                <p className="text-sm text-gray-500">
                  These headphones are absolutely incredible. The sound quality is top-notch, 
                  and the noise cancellation works wonders. I can wear them comfortably for hours, 
                  and the battery life is impressive. Highly recommended for anyone serious about their audio!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 lg:mt-24">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers Also Purchased</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {[1, 2, 3, 4].map((product) => (
              <div key={product} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <Image
                    src={`/placeholder.svg?height=320&width=320`}
                    alt={`Related product ${product}`}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    width={320}
                    height={320}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Related Product {product}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">$99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

