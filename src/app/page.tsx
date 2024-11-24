import { FeaturedProducts } from "@/components/landing/featured-products";
import { HeroSlider } from "@/components/landing/Hero";
import { ShopCategories } from "@/components/landing/shop-by-categories";
import SignInForm from "@/components/SignIn";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

export default function Home() {
  return (
    <>
 <div className="relative">
 <HeroSlider/>
   <ShopCategories/>
   <FeaturedProducts/>
 </div>
    </>
  );
}
