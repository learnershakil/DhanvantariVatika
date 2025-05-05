"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import logo from "@/public/DhanvantariVatika.png"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Ayush Vriksha Kit", href: "/ayush-vriksha-kit" },
  { name: "Explore", href: "/explore" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Virtual Garden", href: "/virtual-garden" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-[#256670] sticky top-0 z-50 shadow-md border-b-2 border-[#D9A566]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Image
                src={logo}
                alt="Dhanvantari Vatika Logo"
                width={42}
                height={42}
                className="rounded-full bg-white p-0.5 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="font-bold text-xl text-white">Dhanvantari <span className="text-[#D9A566]">Vatika</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.href 
                  ? "bg-[#D9A566] text-white" 
                  : "text-white hover:bg-white/10 hover:text-[#D9A566]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label="Toggle menu"
              className="text-white hover:text-[#D9A566]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-[#D9A566]/30 mt-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href 
                    ? "bg-[#D9A566] text-white" 
                    : "text-white hover:bg-white/10 hover:text-[#D9A566]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

