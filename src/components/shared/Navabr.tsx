"use client"
import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, User, Search, Menu, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Dialog, DialogTrigger } from "../ui/dialog"
import { DialogContent } from "@radix-ui/react-dialog"
import SignInForm from "../SignIn"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Store
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <Input type="search" placeholder="Search..." className="w-64" />
            <button aria-label="Search" className="p-2 hover:text-red-500 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/account" className="p-2 hover:text-red-500 transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="p-2 hover:text-red-500 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Dialog>
              <DialogTrigger>
                <button className="bg-red-800 hover:bg-red-300 px-4 py-2 text-white rounded transition-colors w-full">
                  Save changes
                </button>
              </DialogTrigger>
              <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50">
                <SignInForm/>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <Input type="search" placeholder="Search..." className="w-full" />
              <button aria-label="Search" className="p-2 hover:text-red-500 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <Link 
                href="/account" 
                className="p-2 flex items-center hover:text-red-500 transition-colors w-full justify-center"
              >
                <User className="h-5 w-5 mr-2" />
                <span>Account</span>
              </Link>
              <Link 
                href="/cart" 
                className="p-2 flex items-center hover:text-red-500 transition-colors w-full justify-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                <span>Cart</span>
              </Link>
              <Dialog>
                <DialogTrigger>
                  <button className="bg-red-800 hover:bg-red-300 px-4 py-2 text-white rounded transition-colors w-full">
                    Save changes
                  </button>
                </DialogTrigger>
                <DialogContent className="fixed  top-1/2 left-[43%] -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50">
                  <SignInForm/>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar