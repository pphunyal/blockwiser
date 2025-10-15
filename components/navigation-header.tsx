"use client"

import { useState, useEffect } from "react"
import { Search, Zap, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NavigationHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="relative z-50 bg-black/40 backdrop-blur-xl border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="size-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/25">
                <div className="size-5 bg-white rounded-lg flex items-center justify-center">
                  <div className="size-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded"></div>
                </div>
              </div>
              <div className="absolute -top-0.5 -right-0.5 size-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse flex items-center justify-center">
                <Zap className="size-2.5 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                BlockWiser
              </div>
              <div className="text-xs text-gray-400 -mt-0.5 font-medium tracking-wide">LEARN • BUILD • DEPLOY</div>
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden lg:block">
              <Input
                placeholder="Search blockchain topics..."
                className="w-64 xl:w-80 pl-4 pr-12 h-10 bg-white/5 backdrop-blur-md border-purple-500/20 text-white placeholder:text-gray-400 rounded-2xl focus:bg-white/10 focus:border-purple-400/40 transition-all duration-200"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 h-8 px-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-xl"
              >
                <Search className="size-4" />
              </Button>
            </div>

            {/* Connect Wallet Button */}
            <div className="hidden lg:block">
              <Button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 rounded-xl font-semibold px-6 py-2 text-sm shadow-lg shadow-purple-500/25">
                Connect Wallet
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-gray-300 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20">
          <div className="px-4 py-6 space-y-6 max-h-screen overflow-y-auto">
            {/* Mobile Search */}
            <div className="relative">
              <Input
                placeholder="Search..."
                className="w-full pl-4 pr-12 h-10 bg-white/5 border-purple-500/20 text-white placeholder:text-gray-400 rounded-xl"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 size-4 text-gray-400" />
            </div>

            {/* Mobile Connect Wallet */}
            <div className="pt-4 border-t border-purple-500/20">
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl py-3 font-semibold">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
